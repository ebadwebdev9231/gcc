<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
    <h1 class="display-1 fw-bold text-primary">404</h1>
    <h2 class="mb-3 fw-semibold">Page Not Found</h2>
    <p class="text-muted mb-4">
      Oops! The page you are looking for doesn’t exist or has been moved.
    </p>

    <router-link to="/" class="btn btn-lg btn-primary shadow-sm px-4">
      <i class="bi bi-house-door-fill me-2"></i> Back to Home
    </router-link>
  </div>
</template>

<style scoped>
.vh-100 {
  height: 80vh !important;
}
</style>
