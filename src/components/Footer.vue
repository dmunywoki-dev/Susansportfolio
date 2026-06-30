<template>
  <footer class="bg-slate-900 text-slate-400 py-10 text-sm">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-y-4">
      <div>
        © {{ new Date().getFullYear() }} Susan W.C Ngula. All rights reserved.
      </div>
      <div class="flex gap-x-6">
        <a href="#about" class="hover:text-white transition-colors">About</a>
        <a href="#research" class="hover:text-white transition-colors">Research</a>
        <a href="https://law.strathmore.edu/wambui-kariuki/" target="_blank" class="hover:text-white transition-colors">Strathmore Profile</a>
      </div>
      <div class="text-xs">Built with care for impact-driven professionals</div>
    </div>
  </footer>
</template>