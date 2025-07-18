<template>
  <div id="app">
    <NavBar />        <!-- This stays constant across all pages -->
    <router-view />   <!-- This loads the routed page -->
    <Contact />
  </div>
</template>

<script>
import Contact from './components/Contact.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar, Contact }
};
</script>
