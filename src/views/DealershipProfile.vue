<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";
import BusinessHours from "@/components/BusinessHours.vue";
import AddressBlock from "@/components/AddressBlock.vue";
import BookingForm from "@/components/BookingForm.vue";
import NotFound from "@/views/NotFound.vue"; // Import NotFound

const route = useRoute();
const dealership = ref(null);
const error = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await api.get(`/dealerships/${route.params.slug}`);
    if (res.data?.body?.data) {
      dealership.value = res.data.body.data;
    } else {
      error.value = "notfound"; // custom flag
    }
  } catch (err) {
    if (err.response?.status === 404) {
      error.value = "notfound";
    } else {
      error.value = err.message || "Failed to fetch dealership";
    }
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container py-5">
    <!-- Loading -->
    <div v-if="loading" class="text-center text-muted">Loading dealership...</div>

    <!-- Show NotFound if dealership not found -->
    <NotFound v-else-if="error === 'notfound'" />

    <!-- Show error alert for other issues -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- Success -->
    <div v-else-if="dealership">
      <!-- Logo Centered -->
      <div class="text-center mb-4">
        <img
          v-if="dealership.logo"
          :src="dealership.logo"
          :alt="dealership.name + ' Logo'"
          class="img-fluid"
          style="max-height: 120px; object-fit: contain;"
        />
      </div>

      <!-- Dealership Info -->
      <div class="card shadow-sm p-4 mb-5">
        <h2 class="fw-bold mb-3 text-center">{{ dealership.name }}</h2>
        <p class="text-center"><strong>GM:</strong> {{ dealership.general_manager }}</p>
        <p class="text-center"><strong>Phone:</strong> {{ dealership.phone_number }}</p>

        <div class="text-center mb-4">
          <a
            :href="dealership.website"
            target="_blank"
            class="btn btn-outline-primary btn-sm"
          >
            🌐 Visit Website
          </a>
        </div>

        <!-- Address -->
        <AddressBlock
          v-if="dealership.addresses && dealership.addresses.length"
          :address="dealership.addresses[0]"
        />

        <!-- Business Hours -->
        <BusinessHours v-if="dealership.hours" :hours="dealership.hours" />
      </div>

      <!-- Booking Form -->
      <BookingForm :dealershipId="dealership.id" />
    </div>
  </div>
</template>
