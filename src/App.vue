<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <Hero />

    <!-- About Section -->
    <About />

    <!-- Experience Section -->
    <Experience />

    <!-- Services Section (New - Interactive Booking) -->
    <Services />

    <!-- Testimonials -->
    <Testimonials />

    <!-- Research & Publications -->
    <Research />

    <!-- Skills Section -->
    <Skills />

    <!-- Contact Section -->
    <Contact />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Services from './components/Services.vue'
import Testimonials from './components/Testimonials.vue'
import Research from './components/Research.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>