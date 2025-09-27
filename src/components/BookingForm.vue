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
  <div class="form-wrapper">
    <div class="form-card">
      <!-- Icon + Title -->
      <div class="text-center mb-4">
        <div class="icon-circle">💬</div>
        <h4 class="fw-bold mt-2">How can we help?</h4>
      </div>

      <!-- Success / Error -->
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

      <!-- Form -->
      <form @submit.prevent="submitBooking">
        <!-- Name -->
        <div class="mb-3">
          <input
            v-model="name"
            type="text"
            class="form-control custom-input"
            placeholder="Your name"
          />
          <div v-if="fieldErrors.name" class="text-danger small">{{ fieldErrors.name }}</div>
        </div>

        <!-- Email -->
        <div class="mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control custom-input"
            placeholder="Your email"
          />
          <div v-if="fieldErrors.email" class="text-danger small">{{ fieldErrors.email }}</div>
        </div>

        <!-- Phone -->
        <div class="mb-3">
          <input
            v-model="phone_number"
            type="text"
            class="form-control custom-input"
            placeholder="Phone number"
          />
          <div v-if="fieldErrors.phone_number" class="text-danger small">{{ fieldErrors.phone_number }}</div>
        </div>

        <!-- Help Request -->
        <div class="mb-3">
          <textarea
            v-model="help_request_message"
            class="form-control custom-input"
            placeholder="How can we help?"
            rows="3"
          ></textarea>
          <div v-if="fieldErrors.help_request_message" class="text-danger small">
            {{ fieldErrors.help_request_message }}
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn w-100" :disabled="loading">
          <span v-if="loading">
            <span class="spinner-border spinner-border-sm me-2"></span>
            Submitting...
          </span>
          <span v-else>Submit</span>
        </button>
      </form>

      <!-- Footer -->
      <p class="footer-text mt-3">Someone will get back to you ASAP</p>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper for centering */
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 15px;
}

/* White card */
.form-card {
  background: #fff;
  border-radius: 10px;
  padding: 3% 8%;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Circle icon */
.icon-circle {
  font-size: 28px;
  background: #f1f5f9;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Input */
.custom-input {
  border-radius: 4px;
  padding: 12px 15px;
  border: 1px solid #999;
  margin-top: 40px;
  width: 100%;
}

::placeholder {
  font-style: oblique;
  color: #888 !important;
}

/* Submit button */
.submit-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 12px;
  margin-top: 25px;
  margin-bottom: 20px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
}
.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Footer text */
.footer-text {
  text-align: center;
  font-size: 13px;
  color: #666;
}
</style>
