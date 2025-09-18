<script setup>
defineProps({ dealer: Object });
</script>

<template>
  <div class="col h-100">
    <div class="card h-100 shadow-sm border-0 hover-shadow transition">
      <div class="card-body d-flex flex-column">
        <!-- Dealer Name -->
        <h5 class="card-title dealer-title mb-3">
          {{ dealer.name }}
        </h5>

        <!-- Phone -->
        <p class="card-text mb-2">
          <i class="bi bi-telephone-fill text-secondary me-2"></i>
          <strong>Phone:</strong> {{ dealer.phone_number }}
        </p>

        <!-- GM -->
        <p class="card-text mb-3">
          <i class="bi bi-person-badge-fill text-secondary me-2"></i>
          <strong>GM:</strong> {{ dealer.general_manager }}
        </p>

        <!-- Spacer pushes button to bottom -->
        <div class="mt-auto">
          <router-link
            :to="`/dealership/${dealer.slug}`"
            class="btn btn-outline-info w-100"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-shadow:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
  transform: translateY(-3px);
  transition: all 0.3s ease;
}

/* Heading size */
.dealer-title {
  font-weight: 700;
  font-size: 20px; /* Mobile */
}

@media (min-width: 992px) {
  .dealer-title {
    font-size: 24px; /* Desktop */
  }
}
</style>
