<template>
  <div>
    <HeroSection />
    <Features />
    <HowItWorks />
    <Contact />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import Features from '../components/Features.vue';
import HowItWorks from '../components/HowItWorks.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Home',
  components: { HeroSection, Features, HowItWorks, Contact }
};
</script>
