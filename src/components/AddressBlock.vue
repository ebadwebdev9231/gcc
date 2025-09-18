<script setup>
defineProps({ address: Object });
</script>

<template>
  <div class="mt-4">
    <h3 class="h5 mb-2">📍 Address</h3>
    <p class="mb-0">
      {{ address.street_address }}, {{ address.city }},
      {{ address.state }} {{ address.zip_code }}
    </p>
  </div>
</template>
