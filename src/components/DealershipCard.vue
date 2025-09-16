<script setup>
defineProps({ dealer: Object });
</script>

<template>
  <div class="border rounded-lg p-4 shadow-md">
    <h3 class="text-xl font-bold">{{ dealer.name }}</h3>
    <p>Phone: {{ dealer.phone_number }}</p>
    <p>GM: {{ dealer.general_manager }}</p>
    <router-link
      :to="`/dealership/${dealer.slug}`"
      class="text-blue-600 underline"
    >
      View Details
    </router-link>
  </div>
</template>
