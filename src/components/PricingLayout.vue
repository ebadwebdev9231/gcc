<template>
  <div class="container py-5 custom-section">
    <!-- Toggle Tabs -->
    <div class="text-center mb-4">
      <div class="btn-group custom-tab">
        <button
          class="btn custom-button"
          :class="billingType === 'yearly' ? 'btn-primary active-tab' : 'btn-light'"
          @click="billingType = 'yearly'"
        >
          Yearly Billing
        </button>
        <button
          class="btn custom-button"
          :class="billingType === 'monthly' ? 'btn-primary active-tab' : 'btn-light'"
          @click="billingType = 'monthly'"
        >
          Monthly Billing
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="row justify-content-center">
      <!-- Essential Plan -->
      <div class="col-md-5 mb-4">
        <div class="card h-100 shadow-sm bg-light p-3 custom-card">
          <div class="card-body">
            <h3 class="card-title mb-3 fw-bold">Essential</h3>
            <h2 class="card-price mb-3">
              ${{ billingType === 'yearly' ? '69.95' : '89.95' }}<small class="text-muted">/mo</small>
            </h2>
            <p class="text-muted mb-3">
              For those who are only looking to service one platform
            </p>
            <button class="btn btn-info text-white mb-4 w-100 custom-button">Purchase Plan</button>

            <h6><strong>Includes:</strong></h6>
            <ul class="list-unstyled pricing-list">
              <li class="text-muted"><i class="bi bi-check-lg"></i> Messaging</li>
              <li class="text-muted"><i class="bi bi-check-lg"></i> Appointment Booking links</li>
              <li class="text-muted"><i class="bi bi-check-lg"></i> Customer Data Retrieval</li>
              <li class="text-muted"><i class="bi bi-check-lg"></i> Email-based CRM lead capture</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pro Plan -->
      <div class="col-md-5 mb-4">
        <div class="card h-100 shadow-sm bg-dark text-white p-3 custom-card pro-card">
          <div class="card-body">
            <h3 class="card-title mb-3 fw-bold">Pro</h3>
            <h2 class="card-price mb-3">
              ${{ billingType === 'yearly' ? '139.95' : '159.95' }}<small class="text-muted">/mo</small>
            </h2>
            <p class="text-light mb-3">
              For those looking to service all available platforms
            </p>
            <button class="btn btn-info text-white mb-4 w-100 custom-button">Purchase Plan</button>

            <h6><strong>Includes:</strong></h6>
            <ul class="list-unstyled pricing-list">
              <li class="text-light"><i class="bi bi-check-lg"></i> Messaging</li>
              <li class="text-light"><i class="bi bi-check-lg"></i> Appointment Booking links</li>
              <li class="text-light"><i class="bi bi-check-lg"></i> Customer Data Retrieval</li>
              <li class="text-light"><i class="bi bi-check-lg"></i> Email-based CRM lead capture</li>
              <li class="text-light"><i class="bi bi-check-lg"></i> 24 hour support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const billingType = ref('yearly');
</script>

<style scoped>
/* Core Pricing Styles */
.card-price {
  font-size: 2rem;
}

.btn-group .btn {
  min-width: 150px;
}

/* Custom Utility Classes */
.custom-section {
}

.custom-tab .btn {
  border-radius: 20px;
  font-weight: 600;
}

.custom-tab .active-tab {
  background-color: #0dcaf0 !important;
  color: white !important;
  border-color: #0dcaf0 !important;
}

.custom-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
}
.custom-card .card-price {
    font-size: 45px;
    font-weight: bold;
}
.custom-card .card-price small {
    font-size: 15px;
}

.custom-card:hover {
  transform: translateY(-5px);
}
.custom-card h6 {
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.custom-card .pricing-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 17px;
    font-weight: 500;
    color: #BDC0C5 !important;
}
.custom-card .pricing-list .text-light {
    color: #BDC0C5 !important;
}
.custom-card .pricing-list li i {
    color: #2ABC89;
    font-size: 20px;
    margin-right: 8px;
}
.pro-card {
  background-color: #0e1a2b !important;
}

.custom-button {
  padding: 10px 30px;
  font-weight: 500;
  font-weight: 600;
  font-size: 18px;
}
</style>
