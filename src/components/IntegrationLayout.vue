<template>
  <section class="container py-5 bg-white text-dark integration-section">
    <h2 class="fw-bold mb-5 text-center">
      Easily engage with your customers wherever they are.
    </h2>
    <div class="row g-4 mt-5">
      <div class="col-12 col-sm-6 col-lg-4" v-for="(card, index) in cards" :key="index">
        <Card :icon="card.icon" :title="card.title" :text="card.text" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue';

const cards = [
  {
    icon: 'instagram',
    title: 'Instagram',
    text: 'Cruise Control keeps your Instagram messages, comments, and mentions organized – and thanks to smart AI, your customers get fast, thoughtful replies even when you\'re off the clock.'
  },
  {
    icon: 'facebook',
    title: 'Facebook',
    text: 'From Messenger to post comments and tagged mentions, Cruise Control handles it all with AI that responds instantly, so your Facebook audience feels heard day or night.'
  },
  {
    icon: 'sms',
    title: 'SMS',
    text: 'AI meets text messaging. Cruise Control brings your SMS conversations into one place and responds on your behalf with helpful, human-like messages that keep the conversation moving.'
  },
  {
    icon: 'email',
    title: 'Email',
    text: 'Cruise Control turns your email threads into smart, streamlined conversations. Let AI reply to common questions while you focus on the bigger picture.'
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    text: 'Use WhatsApp to stay in the loop and reply quickly – or let Cruise Control’s AI jump in first. Route customer queries to your workspace and never miss a message.'
  },
  {
    icon: 'website',
    title: 'Website Widget',
    text: 'Use Website Widget to stay in the loop and reply quickly – or let Cruise Control’s AI jump in first. Route customer queries to your workspace and never miss a message.'
  }
];
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}

.integration-section h2 {
  font-size: 55px;
  text-align: left !important;
  font-weight: 800;
  max-width: 900px;
}
@media(max-width:768px) {
  .integration-section h2 {
  font-size: 35px;
}
}
</style>
