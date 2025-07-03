<template>
  <nav class="navbar">
    <div class="container">
    <div class="navbar-container">
      <div class="logo"><a href="#"><img src="@/assets/gcc-logo.png" alt=""></a></div>

      <!-- Hamburger / Close Icon -->
      <button class="menu-toggle" @click="toggleMenu">
        <span v-if="!menuOpen">&#9776;</span> <!-- ☰ -->
        <span v-else>&times;</span>           <!-- × -->
      </button>

      <!-- Nav Links -->
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
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
.navbar {
  background-color: #111;
  color: #fff;
  padding: 10px 0;
}

.navbar-container {
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
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100px;
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
