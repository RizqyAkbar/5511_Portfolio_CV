<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="skill" class="py-20"> <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" class="text-white" /> <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white/10 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md border border-gray-600" >
          <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3> <p class="text-gray-300 mt-2">{{ skill.level }}</p> </div>
      </div>
    </div>
  </section>
</template>