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
import api from './services/api';

export default {
  name: 'App',
  components: { NavBar, Contact },
  async mounted() {
    try {
      const res = await api.get("/dealerships");
      console.log("API working ✅", res.data);
    } catch (err) {
      console.error("API failed ❌", err.response ? err.response.data : err.message);
    }
  }
};
</script>
