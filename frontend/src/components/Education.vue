<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section
    id="pendidikan"
    class="py-20"
  >
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" class="text-white" />

      <div class="mt-12 relative">
        <div
          class="relative z-10 mt-4 flex flex-wrap justify-center gap-6"
        >
          <div
            v-for="edu in educationHistory"
            :key="edu.id"
            class="
              relative w-72 p-6 
              rounded-xl shadow-xl backdrop-blur-lg 
              bg-gradient-to-r from-white/20 via-white/10 to-white/20 
              border border-white/30 hover:bg-white/30 
              transition-all
            "
          >
            <p class="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              {{ edu.period }}
            </p>
            <h3 class="text-xl font-bold text-gray-200 mt-2 uppercase tracking-wide">
              {{ edu.institution }}
            </h3>
            <p class="text-gray-800 mt-1 tracking-wide">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
