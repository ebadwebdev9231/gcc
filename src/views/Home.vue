<template>
  <div>
    <HeroSection />
    <Features />
    <HowItWorks />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import Features from '../components/Features.vue';
import HowItWorks from '../components/HowItWorks.vue';

export default {
  name: 'Home',
  components: { HeroSection, Features, HowItWorks }
};
</script>
