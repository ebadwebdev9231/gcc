<template>
  <section class="hero">
    <video autoplay muted loop playsinline class="background-video">
      <source src="@/assets/0123.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div class="overlay">
      <div class="container">
      <div class="content">
        <h1>The Automotive <br /><span>Sales Assistant</span></h1>
        <p>We help you manage leads and book appointments, so you can close more sales with less work.</p>
      </div>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <button>Book a Demo</button>
      </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100%;
  gap: 100px;
}

.content h1 {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(to right, #4ae3b5, rgb(29 198 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content h1 span {
  font-weight: 700;
}

.content p {
  margin: 20px 0;
  font-size: 1.1rem;
  color: #fff;
}

form {
  --tw-backdrop-blur: blur(12px);
    backdrop-filter: var(--tw-backdrop-blur);
    background-color: hsla(0, 0%, 100%, .05);
    border-width: 2px;
    border-color: rgba(74, 227, 181, .5);
    padding: 34px 30px;
    border-radius: 10px;
    overflow: hidden;
}

form input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

button {
  background-color: #00cfff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
}

@media (max-width: 991px) {
  .container {
    gap: 50px;
  }
  .content h1 {
    font-size: 3rem;
  }
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
  .content {
    padding: 10px;
  }
  .content h1 {
    font-size: 2.6rem;
  }
}
</style>
