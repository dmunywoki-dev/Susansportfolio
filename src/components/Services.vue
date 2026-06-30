<template>
  <section id="services" class="section bg-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR ENGAGEMENT
        </div>
        <h2 class="text-5xl md:text-6xl font-semibold tracking-tighter mb-4">Professional Services</h2>
        <p class="max-w-2xl mx-auto text-xl text-slate-600">
          Partner with Wambui for impactful policy work, academic collaboration, and strategic advisory.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card group bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-8 flex flex-col h-full cursor-pointer"
          @click="openBooking(service.title)"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-emerald-100 group-hover:bg-emerald-200 transition-colors rounded-2xl flex items-center justify-center text-3xl floating">
              {{ service.icon }}
            </div>
            <div class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
              BOOK NOW
            </div>
          </div>

          <h3 class="font-semibold text-2xl tracking-tight mb-3 pr-4">{{ service.title }}</h3>
          <p class="text-slate-600 flex-1 leading-relaxed">{{ service.description }}</p>

          <div class="mt-8 pt-6 border-t flex items-center justify-between text-sm">
            <span class="font-medium text-emerald-600 group-hover:underline">Request consultation →</span>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-slate-500 text-sm max-w-md mx-auto">
          All consultations are tailored. Wambui responds personally within 48 hours.
        </p>
      </div>
    </div>

    <!-- Booking Modal -->
    <BookingModal 
      :show="showModal" 
      :initial-service="selectedService"
      @close="showModal = false" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookingModal from './BookingModal.vue'

const showModal = ref(false)
const selectedService = ref('')

const services = [
  {
    icon: '🎯',
    title: 'Executive & Leadership Coaching',
    description: 'One-on-one coaching for senior leaders, women executives, and emerging talent to enhance strategic thinking, leadership presence, resilience, and decision-making.'
  },
  {
    icon: '📈',
    title: 'Strategy Execution & Business Transformation',
    description: 'Helping organizations bridge the gap between vision and results through strategy formulation, operational excellence, and disciplined execution.'
  },
  {
    icon: '🤝',
    title: 'Customer Experience & Operations Excellence',
    description: 'Designing customer-centric strategies, optimizing operations, improving collections, and building high-performing teams that deliver measurable business outcomes.'
  },
  {
    icon: '🌱',
    title: 'Leadership Team Development & Succession',
    description: 'Building leadership capability, strengthening team dynamics, and developing robust succession pipelines for sustainable organizational growth.'
  },
  {
    icon: '🛡️',
    title: 'Governance, Risk & Compliance Advisory',
    description: 'Strengthening governance frameworks, risk management, and regulatory compliance — especially valuable for fintech and scaling organizations.'
  }
]

const openBooking = (serviceTitle) => {
  selectedService.value = serviceTitle
  showModal.value = true
}
</script>