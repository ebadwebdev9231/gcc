<template>
  <div id="app">
    <NavBar />        <!-- This stays constant across all pages -->
    <router-view />   <!-- This loads the routed page -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar }
};
</script>
