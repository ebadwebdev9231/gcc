<script setup>
defineProps({ hours: Array });
</script>

<template>
  <div class="mt-4">
    <h3 class="h5 mb-3">🕒 Business Hours</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-striped align-middle">
        <thead class="table-light">
          <tr>
            <th>Day</th>
            <th>Sales</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hour in hours" :key="hour.id">
            <td>{{ hour.day_of_week }}</td>
            <td>{{ hour.sales_open_time }} - {{ hour.sales_close_time }}</td>
            <td>
              <span v-if="hour.service_open_time">
                {{ hour.service_open_time }} - {{ hour.service_close_time }}
              </span>
              <span v-else class="text-muted">Closed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
