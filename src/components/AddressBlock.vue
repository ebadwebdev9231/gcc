<script setup>
defineProps({ address: Object });
</script>

<template>
  <div class="mt-4">
    <h3 class="text-lg font-semibold">Address</h3>
    <p>
      {{ address.street_address }}, {{ address.city }},
      {{ address.state }} {{ address.zip_code }}
    </p>
  </div>
</template>
