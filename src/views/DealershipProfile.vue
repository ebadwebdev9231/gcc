<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";
import BookingForm from "@/components/BookingForm.vue"; // Popup form

const route = useRoute();
const dealership = ref(null);
const error = ref(null);
const loading = ref(true);
const showForm = ref(false); // ✅ toggle popup

onMounted(async () => {
  try {
    const res = await api.get(`/dealerships/${route.params.slug}`);
    if (res.data?.body?.data) {
      dealership.value = res.data.body.data;
    } else {
      error.value = "notfound";
    }
  } catch (err) {
    error.value = err.message || "Failed to fetch dealership";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="container vh-80 py-5 text-center d-flex justify-content-center align-items-center">
    <!-- Loading -->
    <div v-if="loading" class="text-muted">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

    <!-- Success -->
    <div v-else-if="dealership">
      <!-- Centered Button -->
      <button class="open-btn" @click="showForm = true">
        Open Help Form
      </button>

      <!-- Popup Form -->
      <div v-if="showForm" class="popup-overlay">
        <div class="popup-content">
          <button class="close-btn" @click="showForm = false">&times;</button>
          <BookingForm :dealershipId="dealership.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vh-80 {
  min-height: 80vh;
}
/* Button in center */
.open-btn {
  background: #000;
  color: #fff;
  padding: 18px;
  width: 400px;
  font-size: 18px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}
.open-btn:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

/* Overlay */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 10px;
}

/* Form popup box */
.popup-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 680px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: auto;
  max-height: 90vh;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

/* ✅ Hide scrollbar but keep scrolling */
.popup-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
.popup-content {
  -ms-overflow-style: none;  /* IE & Edge */
  scrollbar-width: none;     /* Firefox */
}

/* Close button */
.close-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ✅ Responsive adjustments */
@media (max-width: 768px) {
  .popup-content {
    max-width: 95%;   /* full width on tablets */
    padding: 16px;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .popup-content {
    max-width: 100%;   /* almost full screen on mobile */
    padding: 14px 0;
    border-radius: 6px;
  }

  .open-btn {
    font-size: 16px;
    padding: 16px;
    width: 250px;
  }

  .close-btn {
    width: 28px;
    height: 28px;
    font-size: 18px;
  }
}
</style>
