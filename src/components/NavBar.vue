<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation-container">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/gcc-logo.png" alt="Logo" />
          </router-link>
        </div>

        <!-- Hamburger / Close Icon -->
        <button class="menu-toggle" @click="toggleMenu">
          <span v-if="!menuOpen">&#9776;</span> <!-- ☰ -->
          <span v-else>&times;</span>           <!-- × -->
        </button>

        <!-- Nav Links -->
        <ul :class="['nav-links', { open: menuOpen }]">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/integration">Integration</router-link></li>
          <li><router-link to="/pricing">Pricing</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.navigation {
  background-color: #111;
  color: #fff;
  padding: 10px 0;
}

.navigation-container {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 150px;
}
.logo img {
    width: 100%;
}

/* Desktop menu */
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #00bfff;
}

/* Hamburger button */
.menu-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  display: none;
  cursor: pointer;
}

/* Mobile styles */
@media (max-width: 768px) {
  .logo {
    width: 120px;
  }
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #111;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    display: none;
    z-index: 1000;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
