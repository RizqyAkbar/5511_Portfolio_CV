<template>
  <section
    id="profil"
    class="relative w-full h-screen flex justify-start items-end text-left text-white overflow-hidden"
  >
    <div class="relative z-10 p-8 md:p-16 max-w-xl space-y-4">
      <h1
        class="text-4xl md:text-5xl font-bold leading-tight animate-slide-in-up"
      >
        Halo, Saya
        <span
          class="text-4xl md:text-5xl font-semibold tracking-wider uppercase drop-shadow text-gray-800"
        >
          Akbar Rizqy Effendi
        </span>
      </h1>

      <p
        class="text-lg md:text-xl animate-slide-in-up"
        style="animation-delay: 200ms"
      >
        Mahasiswa Teknik Informatika yang berfokus pada pengembangan web dan
        desain antarmuka, dengan minat pada teknologi dan inovasi digital.
      </p>

      <div class="flex flex-wrap gap-4 mt-4 animate-slide-in-up" style="animation-delay: 400ms">
        <a
          href="#kontak"
          class="inline-block px-6 py-3 text-sm font-medium tracking-widest uppercase text-gray-800 rounded-xl shadow-xl backdrop-blur-lg bg-gradient-to-r from-white/20 via-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all"
        >
          Hubungi Saya
        </a>

        <a
          href="#proyek"
          class="inline-block px-6 py-3 text-sm font-medium tracking-widest uppercase text-gray-800 rounded-xl shadow-xl backdrop-blur-lg bg-gradient-to-r from-white/20 via-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all"
        >
          Proyek Saya
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease forwards;
}
</style>
