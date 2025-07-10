<template>
  <!-- Navbar DI LUAR main-layout -->
  <Navbar />

  <div class="main-layout">
    <Hero />
    <Education />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-layout {
  position: relative;
  min-height: 100vh;

  background-image: url('../assets/IMG_20210425_170809.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
}

.main-layout::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1;
}

.main-layout > * {
  position: relative;
  z-index: 2;
}
</style>
