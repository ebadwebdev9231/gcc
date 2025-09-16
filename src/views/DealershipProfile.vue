<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";

const route = useRoute();
const dealership = ref(null);
const error = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await api.get(`/dealerships/${route.params.slug}`);
    console.log("✅ Dealership Response:", res.data);

    dealership.value = res.data.body.data;
  } catch (err) {
    error.value = err.message || "Failed to load dealership";
    console.error("❌ API Error:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6">
    <p v-if="loading">Loading dealership...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <div v-else-if="dealership" class="space-y-3">
      <h2 class="text-2xl font-bold">{{ dealership.name }}</h2>
      <p>GM: {{ dealership.general_manager }}</p>
      <p>Phone: {{ dealership.phone_number }}</p>

      <a
        v-if="dealership.website"
        :href="dealership.website"
        target="_blank"
        class="text-blue-600 underline"
      >
        {{ dealership.website }}
      </a>

      <div v-if="dealership.addresses && dealership.addresses.length">
        <h3 class="font-semibold mt-4">Address</h3>
        <p>{{ dealership.addresses[0].street }}, {{ dealership.addresses[0].city }}</p>
      </div>

      <div v-if="dealership.hours">
        <h3 class="font-semibold mt-4">Business Hours</h3>
        <pre>{{ dealership.hours }}</pre>
      </div>
    </div>
  </div>
</template>
