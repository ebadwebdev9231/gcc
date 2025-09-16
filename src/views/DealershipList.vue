<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";
import DealershipCard from "@/components/DealershipCard.vue";

const dealerships = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await api.get("/dealerships");
    console.log("✅ API Response:", res.data); // log full response
    dealerships.value = res.data.body.data;   // store data
  } catch (err) {
    console.error("❌ API Error:", err); // log error details
    error.value = err.message || "Failed to fetch dealerships";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container p-4 dealership-list">
    <h1 class="fw-bold mb-5">Dealerships</h1>

    <!-- Show loading -->
    <p v-if="loading">Loading dealerships...</p>

    <!-- Show error -->
    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <!-- Show dealerships -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <DealershipCard
        v-for="dealer in dealerships"
        :key="dealer.id"
        :dealer="dealer"
      />
    </div>
  </div>
</template>
