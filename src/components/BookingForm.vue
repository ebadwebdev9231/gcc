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
const platform = ref("");
const successMessage = ref(null);
const errorMessage = ref(null);

// ✅ format phone number as 123-456-7811
const formatPhone = (value) => {
  // remove all non-digits
  let digits = value.replace(/\D/g, "");

  // limit to 10 digits
  digits = digits.slice(0, 10);

  // format as 123-456-7811
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

const submitBooking = async () => {
  try {
    const payload = {
      dealership_id: props.dealershipId,
      account_id: 12,          // ✅ required (replace with dynamic if needed)
      conversation_id: 372,    // ✅ required (replace with dynamic if needed)
      name: name.value,
      email: email.value,
      phone_number: phone_number.value,
      booking_date: booking_date.value,
      platform: platform.value,
    };

    console.log("Submitting booking payload:", payload);

    const res = await api.post("/bookings", payload);
    console.log("Booking response:", res.data);

    successMessage.value = "Booking request submitted successfully!";
    errorMessage.value = null;

    // reset form
    name.value = "";
    email.value = "";
    phone_number.value = "";
    booking_date.value = "";
    platform.value = "";
  } catch (err) {
    console.error("Booking error:", err.response?.data || err);
    errorMessage.value =
      err.response?.data?.message || "Failed to submit booking.";
    successMessage.value = null;
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
        <input v-model="name" type="text" class="form-control" required />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input v-model="phone_number" type="text" class="form-control" required />
      </div>

      <!-- Booking Date -->
      <div class="mb-3">
        <label class="form-label">Booking Date</label>
        <input v-model="booking_date" type="date" class="form-control" required />
      </div>

      <!-- Platform -->
      <div class="mb-3">
        <label class="form-label">Platform</label>
        <select v-model="platform" class="form-select" required>
          <option disabled value="">Select Platform</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="website">Website</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100">Submit Booking</button>
    </form>
  </div>
</template>
