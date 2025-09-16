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
    console.log("✅ API Response:", res.data);

    // Safe check response structure
    if (res.data && res.data.body && res.data.body.data) {
      dealership.value = res.data.body.data;
    } else {
      throw new Error("Unexpected API response format");
    }
  } catch (err) {
    console.error("❌ API Error:", err);
    error.value = err.message || "Failed to fetch dealership";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container p-4">
    <!-- Loading -->
    <p v-if="loading">Loading dealership...</p>

    <!-- Error -->
    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <!-- Success -->
    <div v-else-if="dealership">
      <h2 class="fw-bold mb-3">{{ dealership.name }}</h2>
      <p>GM: {{ dealership.general_manager }}</p>
      <p>Phone: {{ dealership.phone_number }}</p>

      <a
        :href="dealership.website"
        target="_blank"
        class="text-blue-600 underline"
      >
        {{ dealership.website }}
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
