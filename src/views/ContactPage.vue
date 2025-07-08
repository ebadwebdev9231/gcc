<!-- src/views/ContactPage.vue -->
<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4">
            <h2 class="fw-bold mb-4 text-center">Contact Us</h2>
            <p class="text-center">Fill up the form below to send us a message.</p>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="form.name" type="text" id="name" class="form-control" required />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="form.email" type="email" id="email" class="form-control" required />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="form.phone" type="tel" id="phone" class="form-control" />
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea v-model="form.message" id="message" rows="4" class="form-control" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: handle submission (e.g., API call)
  alert(`Thank you, ${form.name}! Your message has been sent.`)

  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>
