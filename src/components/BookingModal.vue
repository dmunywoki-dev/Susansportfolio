<template>
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" @click="closeModal">
      <div 
        class="modal-content bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-emerald-600 px-8 py-6 text-white">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-semibold tracking-tight">Book a Consultation</h3>
              <p class="text-emerald-100 text-sm mt-1">Let's work together on meaningful impact</p>
            </div>
            <button @click="closeModal" class="text-white/80 hover:text-white text-3xl leading-none">×</button>
          </div>
        </div>

        <!-- Form -->
        <div v-if="!submitted" class="p-8">
          <form @submit.prevent="submitBooking">
            <div class="space-y-6">
              <!-- Service Selection -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Service You're Interested In</label>
                <select 
                  v-model="form.service" 
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-emerald-500 text-sm"
                >
                  <option value="">Select a service...</option>
                  <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
                </select>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-emerald-500 text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-emerald-500 text-sm"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Preferred Date / Timeframe</label>
                <input 
                  v-model="form.date" 
                  type="text" 
                  placeholder="e.g. Next week, Mid-July, Flexible"
                  class="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Message / Project Details</label>
                <textarea 
                  v-model="form.message" 
                  rows="4" 
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:border-emerald-500 text-sm resize-y"
                  placeholder="Tell me more about your project, goals, or questions..."
                ></textarea>
              </div>
            </div>

            <div class="mt-8 flex gap-3">
              <button 
                type="button"
                @click="closeModal"
                class="flex-1 py-3.5 border border-slate-300 hover:bg-slate-50 rounded-2xl font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl text-sm transition-all active:scale-[0.985]"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>

        <!-- Success State -->
        <div v-else class="p-10 text-center">
          <div class="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <span class="text-5xl">🎉</span>
          </div>
          <h3 class="text-2xl font-semibold tracking-tight mb-2">Thank you!</h3>
          <p class="text-slate-600 mb-8">
            Your booking request has been received. Wambui will get back to you within 48 hours to confirm the details.
          </p>
          <button 
            @click="closeModal"
            class="px-10 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl text-sm transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  show: Boolean,
  initialService: String
})

const emit = defineEmits(['close'])

const form = reactive({
  service: props.initialService || '',
  name: '',
  email: '',
  date: '',
  message: ''
})

const submitted = ref(false)

const services = [
  'Public & Urban Policy Consulting',
  'Academic Instruction & Course Development',
  'Governance & Institutional Advisory',
  'Policy Research & Writing',
  'Sports Policy & Gender/Social Development'
]

const submitBooking = () => {
  // In a real app, you would send this to an API or email service
  console.log('Booking submitted:', form)
  submitted.value = true
  
  // Reset form after closing
  setTimeout(() => {
    if (!props.show) {
      submitted.value = false
      Object.keys(form).forEach(key => form[key] = '')
    }
  }, 300)
}

const closeModal = () => {
  emit('close')
  // Reset after animation
  setTimeout(() => {
    submitted.value = false
    Object.keys(form).forEach(key => form[key] = form.service = props.initialService || '')
  }, 300)
}
</script>