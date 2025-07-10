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
            class="relative bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-600 hover:shadow-xl transition w-72"
          >
            <p class="text-sm font-semibold text-gray-300">
              {{ edu.period }}
            </p>
            <h3 class="text-xl font-bold text-white mt-2">
              {{ edu.institution }}
            </h3>
            <p class="text-gray-300 mt-1">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>