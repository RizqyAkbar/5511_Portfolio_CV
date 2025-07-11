<template>
  <section
    id="profil"
    class="relative w-full h-screen flex justify-center items-center text-left text-white overflow-hidden"
  >
    <div
      class="relative z-10 p-8 md:p-16 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      <!-- Foto Profil -->
      <div
        class="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white/30 backdrop-blur-sm bg-white/10 flex-shrink-0 animate-slide-in-up"
      >
        <img
          src="../assets/profile_new.jpg"
          alt="Foto Profil"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Teks -->
      <div class="space-y-4 flex-1 animate-slide-in-up text-center md:text-left">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          Halo, Saya
          <span
            class="text-3xl md:text-5xl font-semibold tracking-wider uppercase drop-shadow text-gray-800"
          >
            Akbar Rizqy Effendi
          </span>
        </h1>

        <p class="text-base md:text-xl" style="animation-delay: 200ms">
          Mahasiswa Teknik Informatika yang berfokus pada pengembangan web dan
          desain antarmuka, dengan minat pada teknologi dan inovasi digital.
        </p>

        <div
          class="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
          style="animation-delay: 400ms"
        >
          <a
            href="#kontak"
            class="inline-block px-4 py-2 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-800 rounded-xl shadow-xl backdrop-blur-lg bg-gradient-to-r from-white/20 via-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all"
          >
            Hubungi Saya
          </a>

          <a
            href="#proyek"
            class="inline-block px-4 py-2 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-800 rounded-xl shadow-xl backdrop-blur-lg bg-gradient-to-r from-white/20 via-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all"
          >
            Proyek Saya
          </a>
        </div>
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
