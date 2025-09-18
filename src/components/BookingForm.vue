<template>
  <div class="container my-5">
    <div class="card shadow-lg border-0 rounded-3 mx-auto" style="max-width: 600px;">
      <div class="card-body p-4">
        <h2 class="card-title text-center mb-4 fw-bold">Book an Appointment</h2>

        <form @submit.prevent="submitBooking">
          <!-- Name -->
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <!-- Phone -->
          <div class="mb-3">
            <label class="form-label">Phone Number</label>
            <input
              v-model="form.phone_number"
              type="text"
              class="form-control"
              placeholder="e.g. 123-456-7890"
              required
            />
          </div>

          <!-- Booking Date -->
          <div class="mb-3">
            <label class="form-label">Booking Date</label>
            <input
              v-model="form.booking_date"
              type="date"
              class="form-control"
              required
            />
          </div>

          <!-- Platform -->
          <div class="mb-3">
            <label class="form-label">Platform</label>
            <select v-model="form.platform" class="form-select" required>
              <option disabled value="">Select Platform</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="website">Website</option>
            </select>
          </div>

          <!-- Submit Button -->
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-info btn-lg"
              :disabled="loading"
            >
              {{ loading ? "Booking..." : "Submit Booking" }}
            </button>
          </div>
        </form>

        <!-- Success / Error Message -->
        <div v-if="message" class="alert alert-success mt-4">
          {{ message }}
        </div>
        <div v-if="error" class="alert alert-danger mt-4">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "BookingForm",
  data() {
    return {
      form: {
        dealership_id: "d8bf6d8c-2454-44d3-9334-2d546e980f37",
        conversation_id: 372,
        account_id: 12,
        name: "",
        email: "",
        phone_number: "",
        booking_date: "",
        platform: ""
      },
      loading: false,
      message: "",
      error: ""
    };
  },
  methods: {
    async submitBooking() {
      this.loading = true;
      this.message = "";
      this.error = "";

      try {
        console.log("Submitting booking payload:", this.form);
        const response = await api.post("/bookings", this.form);

        this.message = "Booking submitted successfully ✅";
        console.log("Booking success:", response.data);

        // Reset form
        this.form = {
          dealership_id: "d8bf6d8c-2454-44d3-9334-2d546e980f37",
          conversation_id: 372,
          account_id: 12,
          name: "",
          email: "",
          phone_number: "",
          booking_date: "",
          platform: ""
        };
      } catch (err) {
        this.error = err.response?.data?.message || "Booking failed ❌";
        console.error("Booking error:", err.response?.data || err.message);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.card {
  background: #ffffff;
}
</style>
