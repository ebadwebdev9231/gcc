<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";

const dealerships = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await api.get("/dealerships");
    console.log("✅ All Dealerships:", res.data);

    // save the array
    dealerships.value = res.data.body.data || [];
  } catch (err) {
    error.value = err.message || "Failed to load dealerships";
    console.error("❌ API Error:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Dealerships</h1>

    <p v-if="loading">Loading dealerships...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <ul v-else class="space-y-4">
      <li
        v-for="dealer in dealerships"
        :key="dealer.id"
        class="p-4 border rounded-lg shadow"
      >
        <h2 class="text-xl font-semibold">{{ dealer.name }}</h2>
        <p>GM: {{ dealer.general_manager }}</p>
        <p>Phone: {{ dealer.phone_number }}</p>
        <a :href="dealer.website" target="_blank" class="text-blue-600 underline">
          {{ dealer.website }}
        </a>
      </li>
    </ul>
  </div>
</template>
