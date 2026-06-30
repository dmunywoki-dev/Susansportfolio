<template>
  <section id="skills" class="section max-w-5xl mx-auto px-6 py-20">
    <div class="uppercase tracking-[3px] text-xs font-semibold text-emerald-600 mb-3">EXPERTISE</div>
    <h2 class="text-5xl font-semibold tracking-tighter mb-12">Core Competencies</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="skill in skills" :key="skill" 
           class="bg-white border border-slate-200 hover:border-emerald-200 transition-colors rounded-2xl px-6 py-5 text-center font-medium text-slate-700 card">
        {{ skill }}
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-slate-500 max-w-md mx-auto">
        Combining academic rigor with practical experience in policy analysis, communications, and higher education leadership.
      </p>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'Public Policy & Governance',
  'Urban Transport Policy',
  'Strategic Communications',
  'Program Management',
  'Monitoring & Evaluation (M&E)',
  'Stakeholder Engagement',
  'Mentoring & Coaching',
  'Policy Analysis & Research',
  'Academic Instruction',
  'Gender & Development',
  'Sports Policy',
  'Project Coordination'
]
</script>