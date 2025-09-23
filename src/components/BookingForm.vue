<script setup>
import { ref, watch } from "vue";
import api from "@/services/api";

const props = defineProps({
  dealershipId: {
    type: String,
    required: true,
  },
});

const name = ref("");
const email = ref("");
const phone_number = ref("");
const booking_date = ref("");

const successMessage = ref(null);
const errorMessage = ref(null);
const fieldErrors = ref({});
const loading = ref(false);

// ✅ format phone number as 123-456-7890
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

// Watch phone_number and auto-format
watch(phone_number, (newVal) => {
  phone_number.value = formatPhone(newVal);
});

// ✅ frontend validation
const validateForm = () => {
  let errors = {};

  if (!name.value.trim()) errors.name = "Name is required";
  if (!email.value.trim()) errors.email = "Email is required";

  // Phone validation: must match ###-###-####
  if (!phone_number.value.trim()) {
    errors.phone_number = "Phone number is required";
  } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone_number.value)) {
    errors.phone_number = "Please enter a valid phone number (123-456-7890)";
  }

  if (!booking_date.value.trim()) errors.booking_date = "Booking date is required";

  fieldErrors.value = errors;
  return Object.keys(errors).length === 0;
};

// ✅ clear individual field error when fixed
watch([name, email, phone_number, booking_date], () => {
  if (name.value.trim()) delete fieldErrors.value.name;
  if (email.value.trim()) delete fieldErrors.value.email;
  if (/^\d{3}-\d{3}-\d{4}$/.test(phone_number.value)) delete fieldErrors.value.phone_number;
  if (booking_date.value.trim()) delete fieldErrors.value.booking_date;
});

const submitBooking = async () => {
  successMessage.value = null;
  errorMessage.value = null;

  if (!validateForm()) return;

  loading.value = true;

  try {
    const payload = {
      dealership_id: props.dealershipId,
      account_id: 12,
      conversation_id: 372,
      name: name.value,
      email: email.value,
      phone_number: phone_number.value,
      booking_date: booking_date.value,
    };

    await api.post("/bookings", payload);

    successMessage.value = "Booking request submitted successfully!";
    name.value = "";
    email.value = "";
    phone_number.value = "";
    booking_date.value = "";
    fieldErrors.value = {};
  } catch (err) {
    // Only show backend error if it's not phone related
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
        <input v-model="name" type="text" class="form-control" />
        <div v-if="fieldErrors.name" class="text-danger small">{{ fieldErrors.name }}</div>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" />
        <div v-if="fieldErrors.email" class="text-danger small">{{ fieldErrors.email }}</div>
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input v-model="phone_number" type="text" class="form-control" placeholder="123-456-7890" />
        <div v-if="fieldErrors.phone_number" class="text-danger small">{{ fieldErrors.phone_number }}</div>
      </div>

      <!-- Booking Date -->
      <div class="mb-3">
        <label class="form-label">Booking Date</label>
        <input v-model="booking_date" type="date" class="form-control" />
        <div v-if="fieldErrors.booking_date" class="text-danger small">{{ fieldErrors.booking_date }}</div>
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
