<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";
import BusinessHours from "@/components/BusinessHours.vue";
import AddressBlock from "@/components/AddressBlock.vue";

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
      throw new Error("Unexpected API response format");
    }
  } catch (err) {
    error.value = err.message || "Failed to fetch dealership";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container py-5">
    <!-- Loading -->
    <div v-if="loading" class="text-center text-muted">Loading dealership...</div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- Success -->
    <div v-else-if="dealership" class="card shadow-sm p-4">
      <h2 class="fw-bold mb-3">{{ dealership.name }}</h2>
      <p><strong>GM:</strong> {{ dealership.general_manager }}</p>
      <p><strong>Phone:</strong> {{ dealership.phone_number }}</p>

      <a
        :href="dealership.website"
        target="_blank"
        class="btn btn-outline-primary btn-sm mb-4"
      >
        🌐 Visit Website
      </a>

      <!-- Address -->
      <AddressBlock
        v-if="dealership.addresses && dealership.addresses.length"
        :address="dealership.addresses[0]"
      />

      <!-- Business Hours -->
      <BusinessHours v-if="dealership.hours" :hours="dealership.hours" />
    </div>
  </div>
</template>
