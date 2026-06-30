<template>
  <section class="bg-white pt-12 pb-20">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-x-12 items-center">
      <!-- Text Content -->
      <div class="md:col-span-7">
        <div class="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Available for consulting & speaking
        </div>

        <h1 class="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-4">
          Susan W.G. Ngula, PCC
        </h1>
        
        <p class="text-2xl text-slate-600 mb-6 tracking-tight">
          Executive Coach & Leadership Consultant<br />
          Founder & CEO, Kindle Coaching and Consultancy
        </p>

        <p class="max-w-lg text-lg text-slate-600 mb-10">
          With 25+ years of senior leadership experience across banking and fintech, 
          I help executives and organizations bridge strategy and execution for 
          sustainable growth, high performance, and transformational results.
        </p>

        <div class="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            class="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-medium rounded-2xl text-sm tracking-wide"
          >
            Get in Touch
          </a>
          <a 
            href="#research" 
            class="inline-flex items-center justify-center px-8 py-4 border border-slate-300 hover:bg-slate-100 transition-colors font-medium rounded-2xl text-sm tracking-wide"
          >
            View Research
          </a>
        </div>

        <div class="mt-10 flex items-center gap-x-8 text-sm text-slate-500">
          <div class="flex items-center gap-x-2">
            <span class="font-medium text-emerald-600">Strathmore Law School</span>
          </div>
          <div>Nairobi, Kenya</div>
        </div>
      </div>

      <!-- Photo -->
      <div class="md:col-span-5 mt-12 md:mt-0">
        <div class="relative">
          <div class="aspect-[4/3.2] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img 
              src="/src/assets/wambui-kariuki.png" 
              alt="Wambui Kariuki - Professional Portrait" 
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative element -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-2xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>