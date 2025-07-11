<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer
    id="kontak"
    class="py-8 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl mt-8"
  >
    <div class="container mx-auto px-6">
      <SectionTitle title="Hubungi Saya" class="text-white mb-6 text-center" />

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 class="text-2xl text-gray-200 font-bold mb-1">Akbar Rizqy Effendi</h3>
          <p class="text-lg text-gray-300 mb-4">
            <a href="mailto:akbarrizqy08@gmail.com" class="underline">
              akbarrizqy08@gmail.com
            </a>
          </p>

          <a
            href="mailto:akbarrizqy08@gmail.com"
            class="bg-gray-500 text-white text-sm mr-2 mb-2 rounded font-bold py-2 px-4 hover:bg-gray-700 transition-colors duration-300"
          >
            Kirim Email
          </a>
        </div>

        <div class="flex flex-col gap-4 md:items-end">
          <div class="flex gap-4 text-3xl justify-center md:justify-end">
            <a
              href="https://github.com/RizqyAkbar"
              target="_blank"
              class="text-gray-300 hover:text-white"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/AkbarRizqyEffendi/"
              target="_blank"
              class="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>

            <a
              href="https://www.instagram.com/rizqyme/"
              target="_blank"
              class="text-gray-300 hover:text-white"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/ZakeRiss/"
              target="_blank"
              class="text-gray-300 hover:text-white"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </div>

          <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-300 justify-center md:justify-end">
            <a href="#profil" class="hover:text-white">Profil</a>
            <a href="#skill" class="hover:text-white">Skill</a>
            <a href="#proyek" class="hover:text-white">Proyek</a>
            <a href="#kontak" class="hover:text-white">Kontak</a>
          </div>
        </div>
      </div>

      <p class="text-xs text-gray-400 mt-8 text-center">
        &copy; {{ new Date().getFullYear() }} Akbar Rizqy Effendi. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>