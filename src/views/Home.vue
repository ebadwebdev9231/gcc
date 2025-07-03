<template>
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Contact />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import HeroSection from '../components/HeroSection.vue';
  import Features from '../components/Features.vue';
  import HowItWorks from '../components/HowItWorks.vue';
  import Contact from '../components/Contact.vue';
  
  export default { components: { NavBar, HeroSection, Features, HowItWorks, Contact } };
  </script>