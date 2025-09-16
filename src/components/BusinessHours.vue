<script setup>
defineProps({ hours: Array });
</script>

<template>
  <div class="mt-4">
    <h3 class="text-lg font-semibold">Business Hours</h3>
    <table class="border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border p-2">Day</th>
          <th class="border p-2">Sales</th>
          <th class="border p-2">Service</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours" :key="hour.id">
          <td class="border p-2">{{ hour.day_of_week }}</td>
          <td class="border p-2">
            {{ hour.sales_open_time }} - {{ hour.sales_close_time }}
          </td>
          <td class="border p-2">
            <span v-if="hour.service_open_time">
              {{ hour.service_open_time }} - {{ hour.service_close_time }}
            </span>
            <span v-else>Closed</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
