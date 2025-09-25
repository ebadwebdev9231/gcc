<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";

const props = defineProps({
  dealershipId: {
    type: String,
    required: true,
  },
});

const route = useRoute(); // ✅ access URL query params

// Extract query params
const accountId = route.query.account_id || null;
const conversationId = route.query.conversation_id || null;
const platform = route.query.platform || null;

const name = ref("");
const email = ref("");
const phone_number = ref("");
const help_request_message = ref("");

const successMessage = ref(null);
const errorMessage = ref(null);
const fieldErrors = ref({});
const loading = ref(false);

// ✅ format phone number as 123-456-7811
const formatPhone = (value) => {
  let digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else {
    return digits;
  }
};

// watch phone_number and reformat automatically
watch(phone_number, (newVal) => {
  phone_number.value = formatPhone(newVal);
});

// ✅ frontend validation
const validateForm = () => {
  let errors = {};

  if (!name.value.trim()) errors.name = "Name is required";

  // Email validation
  if (!email.value.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = "Please enter a valid email address (e.g. abc@example.com)";
  }

  // Phone validation
  if (!phone_number.value.trim()) {
    errors.phone_number = "Phone number is required";
  } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone_number.value)) {
    errors.phone_number = "Please enter a valid phone number (123-456-7890)";
  }

  // Help request message validation
  if (!help_request_message.value.trim()) {
    errors.help_request_message = "Help request message is required";
  }

  fieldErrors.value = errors;
  return Object.keys(errors).length === 0;
};

// ✅ clear individual field error when fixed
watch([name, email, phone_number, help_request_message], () => {
  if (name.value.trim()) delete fieldErrors.value.name;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) delete fieldErrors.value.email;
  if (/^\d{3}-\d{3}-\d{4}$/.test(phone_number.value)) delete fieldErrors.value.phone_number;
  if (help_request_message.value.trim()) delete fieldErrors.value.help_request_message;
});

const submitBooking = async () => {
  successMessage.value = null;
  errorMessage.value = null;

  // ✅ Step 1: Validate form fields first
  if (!validateForm()) return;

  // ✅ Step 2: Then check if URL params are missing
  if (!accountId || !conversationId || !platform) {
    errorMessage.value =
      "Missing booking parameters. Please ensure the link includes account_id, conversation_id, and platform.";
    return;
  }

  loading.value = true;

  try {
    const payload = {
      dealership_id: props.dealershipId,
      account_id: accountId, // from URL
      conversation_id: conversationId, // from URL
      platform: platform, // from URL
      name: name.value,
      email: email.value,
      phone_number: phone_number.value,
      help_request_message: help_request_message.value,
    };

    const res = await api.post("/bookings", payload);

    successMessage.value = "Booking request submitted successfully!";
    name.value = "";
    email.value = "";
    phone_number.value = "";
    help_request_message.value = "";
    fieldErrors.value = {};
  } catch (err) {
    if (err.response?.data?.errors) {
      fieldErrors.value = err.response.data.errors;
    } else {
      errorMessage.value = "Something went wrong, please try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitBooking" class="p-3 border rounded shadow-sm bg-white">
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

      <!-- Name -->
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control" placeholder="Enter your full name" />
        <div v-if="fieldErrors.name" class="text-danger small">{{ fieldErrors.name }}</div>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" placeholder="abc@example.com" />
        <div v-if="fieldErrors.email" class="text-danger small">{{ fieldErrors.email }}</div>
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input v-model="phone_number" type="text" class="form-control" placeholder="123-456-7890" />
        <div v-if="fieldErrors.phone_number" class="text-danger small">{{ fieldErrors.phone_number }}</div>
      </div>

      <!-- Help Request Message -->
      <div class="mb-3">
        <label class="form-label">Help Request Message</label>
        <textarea
          v-model="help_request_message"
          class="form-control"
          placeholder="Write your help request here..."
          rows="3"
        ></textarea>
        <div v-if="fieldErrors.help_request_message" class="text-danger small">
          {{ fieldErrors.help_request_message }}
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        <span v-if="loading">
          <span class="spinner-border spinner-border-sm me-2"></span>
          Submitting...
        </span>
        <span v-else>
          Submit Booking
        </span>
      </button>
    </form>
  </div>
</template>
