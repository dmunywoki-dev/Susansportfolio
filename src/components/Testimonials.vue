<template>
  <section id="testimonials" class="section bg-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <div class="uppercase tracking-[3px] text-xs font-semibold text-emerald-600 mb-3">WHAT LEADERS SAY</div>
        <h2 class="text-5xl font-semibold tracking-tighter">Trusted by executives and teams across Africa</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-slate-50 border border-slate-200 rounded-3xl p-8 card">
          <div class="flex-1">
            <p class="text-slate-700 italic leading-relaxed">"{{ testimonial.quote }}"</p>
          </div>
          <div class="mt-6 pt-6 border-t border-slate-200">
            <div class="font-semibold">{{ testimonial.name }}</div>
            <div class="text-sm text-slate-500">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Susan is a world-class senior operations executive who brings her executive coaching skillset to her work... She excels at managing large teams by inspiring, motivating, and creating a culture of empathy and radical trust.",
    name: "Ivan Mbowa",
    role: "Pan-African C-suite Leader & Fintech Entrepreneur"
  },
  {
    quote: "A compassionate leader with a very high EQ. Very keen in modelling individuals to leadership by driving succession at every level. Always passionate on work life balance. A true example of the best leader.",
    name: "Gyaviira Kibuuka",
    role: "Employee at Angaza"
  },
  {
    quote: "Susan is a result-oriented leader and coach who brings out the best in her client. Her ability to listen and explore issues through powerful questions is remarkable. Because she understands corporate leadership, she is a great coach and consultant.",
    name: "George M. Nuthu, PCC",
    role: "Leadership & Executive Coach"
  },
  {
    quote: "She embodies the virtues of leadership; excellent listening skills, decisiveness, empathy, big picture thinking, coaching, mentorship... She is an industry guru in operations management, customer intimacy, and people management.",
    name: "Meshack Mwakisagu",
    role: "Banker & Governance Leader"
  },
  {
    quote: "Susan is a very effective and focused individual... seasoned and experienced service and operations expert. Given her passion for people development, she has evolved into a well established executive coach.",
    name: "Esther Masese Waititu",
    role: "Chief Financial Services Officer"
  }
]
</script>