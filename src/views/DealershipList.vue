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
    dealerships.value = res.data.body.data;
  } catch (err) {
    error.value = err.message || "Failed to fetch dealerships";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container py-5">
    <h1 class="fw-bold text-center mb-5">Dealerships</h1>

    <!-- Show loading -->
    <div v-if="loading" class="text-center text-muted">Loading dealerships...</div>

    <!-- Show error -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- Show dealerships -->
    <div v-else class="row g-4">
      <div v-for="dealer in dealerships" :key="dealer.id" class="col-12 col-md-6 col-lg-4">
        <DealershipCard :dealer="dealer" />
      </div>
    </div>
  </div>
</template>
