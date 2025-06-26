<template>
    <section class="features">
      <div class="container">
      <h2>What Cruise Control Can Do For You</h2>
      <div class="grid">
        <div class="card" v-for="feature in features" :key="feature.title">
          <div class="icon" v-html="feature.icon"></div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-10 h-10 mb-4 text-logoBlue"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>', title: 'Automatically respond to leads', description: 'Spend less time greeting and answering questions, more time on actually selling.' },
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake w-10 h-10 mb-4 text-logoBlue"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>', title: 'Automated follow-ups', description: 'Never miss a lead with intelligent automated follow-up sequences.' },
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help w-10 h-10 mb-4 text-logoBlue"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>', title: 'Never answer common questions again', description: 'We automatically answer most common customer questions for you.' },
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-10 h-10 mb-4 text-logoBlue"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>', title: 'Centralize your communication', description: 'Our Multi-channel solution integrates SMS, Instagram, WhatsApp, email, Facebook and Messenger in one inbox.' },
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-10 h-10 mb-4 text-logoBlue"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>', title: 'Reduce your response time', description: 'Significantly reduce response times and increase your team’s conversion rates.' },
          { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down w-10 h-10 mb-4 text-logoBlue"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>', title: 'Create custom flows', description: 'Create conversation flows that adapt to your business and your needs.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .features {
    padding: 60px 20px;
    text-align: center;
    background: #fff;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 30px;
  }
  .card {
    background: #f9f9f9;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 20px 24px rgba(0,0,0,.05),  0 5px 30px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
  }
  .card:hover {
    transform: scale(1.03);
  }
  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .icon {
    margin-bottom: 10px;
    color: #00cfff;
  }
  @media (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
  }
  </style>