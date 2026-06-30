<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center gap-x-3">
          <div class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            WK
          </div>
          <div>
            <div class="font-semibold text-xl tracking-tight">Susan W.C Ngula</div>
            <div class="text-xs text-slate-500 -mt-1">Public Policy & Governance</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-x-8 text-sm font-medium">
          <a href="#about" class="nav-link text-slate-600 hover:text-emerald-600">About</a>
          <a href="#experience" class="nav-link text-slate-600 hover:text-emerald-600">Experience</a>
          <a href="#services" class="nav-link text-slate-600 hover:text-emerald-600">Services</a>
          <a href="#testimonials" class="nav-link text-slate-600 hover:text-emerald-600">Testimonials</a>
          <a href="#research" class="nav-link text-slate-600 hover:text-emerald-600">Research</a>
          <a href="#skills" class="nav-link text-slate-600 hover:text-emerald-600">Skills</a>
          <a href="#contact" class="nav-link text-slate-600 hover:text-emerald-600">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden p-2 text-slate-600 hover:text-emerald-600"
          aria-label="Toggle menu"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden pb-6 border-t pt-4">
        <div class="flex flex-col gap-y-3 text-sm font-medium">
          <a href="#about" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">About</a>
          <a href="#experience" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Experience</a>
          <a href="#services" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Services</a>
          <a href="#testimonials" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Testimonials</a>
          <a href="#research" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Research</a>
          <a href="#skills" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Skills</a>
          <a href="#contact" @click="isOpen = false" class="py-2 px-1 text-slate-600 hover:text-emerald-600">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>