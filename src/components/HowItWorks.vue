<template>
    <section class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="icon"><svg aria-hidden="true" class="e-font-icon-svg e-far-user-circle" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg></div>
            <h3>Create an account</h3>
            <p>Create an account & choose a plan.</p>
          </div>
          <div class="step">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#1DC6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug-zap w-[32px] h-[32px] h-10 text-logoBlue"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg></div>
            <h3>Connect your inboxes</h3>
            <p>Link desired platforms to our unified inbox.</p>
          </div>
          <div class="step">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#1DC6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair w-[32px] h-[32px] h-10 text-logoBlue"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div>
            <h3>Let us do the rest</h3>
            <p>At no additional cost, we'll set up your conversation flows and do all required set up to get your team on Cruise Control.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .how-it-works {
    padding: 60px 20px;
    background: #111;
    color: white;
    text-align: center;
  }
  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
    margin-top: 30px;
  }
  .step {
    width: 350px;
  }
  .step h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  .icon {
    background: #ffffff;
    fill: #1DC6FF;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .icon svg {
    width: 1.8em;
    height: 1.8em;
  }
  </style>