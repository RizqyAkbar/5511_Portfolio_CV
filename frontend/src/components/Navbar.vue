<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
    <nav
      class="w-full max-w-5xl mt-6 rounded-xl shadow-xl backdrop-blur-lg bg-gradient-to-r from-white/20 via-white/10 to-white/20 border border-white/30 overflow-hidden"
    >
      <div class="flex justify-between items-center px-6 py-3 relative z-10">
        <!-- Nama Mahasiswa -->
        <div class="text-lg md:text-xl font-semibold tracking-wider uppercase text-gray-800 drop-shadow">
          AkbarRizqy
        </div>

        <!-- Hamburger -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-800 focus:outline-none z-20"
        >
          <svg
            v-if="!isOpen"
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Menu Desktop -->
        <ul
          class="hidden md:flex gap-8 uppercase text-sm font-medium tracking-widest text-gray-800"
        >
          <li><a href="#profil" :class="linkClass('profil')" @click="setActive('profil')">PROFIL</a></li>
          <li><a href="#pendidikan" :class="linkClass('pendidikan')" @click="setActive('pendidikan')">PENDIDIKAN</a></li>
          <li><a href="#skill" :class="linkClass('skill')" @click="setActive('skill')">SKILL</a></li>
          <li><a href="#proyek" :class="linkClass('proyek')" @click="setActive('proyek')">PROYEK</a></li>
          <li><a href="#kontak" :class="linkClass('kontak')" @click="setActive('kontak')">KONTAK</a></li>
        </ul>
      </div>

      <!-- Menu Mobile -->
      <transition name="slide-fade">
        <div
          v-if="isOpen"
          class="flex flex-col items-center md:hidden bg-white/10 backdrop-blur-xl px-6 py-6 space-y-4"
        >
          <a
            href="#profil"
            @click="closeMenu('profil')"
            class="uppercase text-gray-800 font-medium tracking-wide hover:text-black/80 transition"
          >PROFIL</a>
          <a
            href="#pendidikan"
            @click="closeMenu('pendidikan')"
            class="uppercase text-gray-800 font-medium tracking-wide hover:text-black/80 transition"
          >PENDIDIKAN</a>
          <a
            href="#skill"
            @click="closeMenu('skill')"
            class="uppercase text-gray-800 font-medium tracking-wide hover:text-black/80 transition"
          >SKILL</a>
          <a
            href="#proyek"
            @click="closeMenu('proyek')"
            class="uppercase text-gray-800 font-medium tracking-wide hover:text-black/80 transition"
          >PROYEK</a>
          <a
            href="#kontak"
            @click="closeMenu('kontak')"
            class="uppercase text-gray-800 font-medium tracking-wide hover:text-black/80 transition"
          >KONTAK</a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('profil')
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu(section) {
  setActive(section)
  isOpen.value = false
}

function setActive(section) {
  active.value = section
}

function linkClass(section) {
  return [
    'relative hover:text-black/80 transition-all duration-200 pb-1',
    active.value === section
      ? 'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-gray-600 after:to-gray-700 after:rounded-full'
      : ''
  ]
}
</script>

<style scoped>
a::after {
  content: '';
  transition: all 0.3s ease;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
