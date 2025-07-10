<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer
    id="kontak"
    class="py-20 text-white"
    style="background: linear-gradient(to right, rgba(74, 76, 76, 0.7), rgba(76, 76, 74, 0.9));"
  >
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" class="text-white" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

      <a
        href="mailto:emailanda@example.com"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >GitHub</a>

        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >LinkedIn</a>
      </div>
      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Akbar Rizqy Effendi. Dibuat dengan &hearts;
      </p>
    </div>
  </footer>
</template>