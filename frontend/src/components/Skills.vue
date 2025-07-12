<template>
  <section id="skill" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" class="text-white" />
      <div class="skills-carousel-container">
        <div class="skills-carousel">
          <div v-for="skill in skills" :key="skill.name" class="skill-item bg-white/10 dark:bg-white/5 rounded-xl shadow-lg overflow-hidden backdrop-blur-lg border border-white/20 flex flex-col items-center justify-center">
            <img :src="skill.logoUrl" :alt="skill.name" class="skill-logo" />
            <div class="skill-level mt-4 font-bold uppercase text-gray-800 text-lg tracking-wider">{{ skill.level }}</div>
          </div>
          <div v-for="skill in skills" :key="skill.name + '-duplicate'" class="skill-item bg-white/10 dark:bg-white/5 rounded-xl shadow-lg overflow-hidden backdrop-blur-lg border border-white/20 flex flex-col items-center justify-center">
            <img :src="skill.logoUrl" :alt="skill.name" class="skill-logo" />
            <div class="skill-level mt-4 font-bold uppercase text-gray-800 text-lg tracking-wider">{{ skill.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

const API_URL = '/api/skills'

onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    skills.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data skill:', error)
  }
})
</script>

<style scoped>
/* Kontainer untuk carousel */
.skills-carousel-container {
  overflow: hidden; /* Sembunyikan bagian yang tumpah */
  width: 100%;
}

/* Wrapper untuk item skill, akan dianimasikan */
.skills-carousel {
  display: flex;
  white-space: nowrap; /* Pastikan item tidak melompat ke baris baru */
  animation: scroll-left 10s linear infinite; /* Atur durasi sesuai keinginan */
}

/* Ketika di-hover, hentikan animasi */
.skills-carousel:hover {
  animation-play-state: paused;
}

/* Gaya untuk setiap item skill - TANPA KOTAK */
.skill-item {
  flex: 0 0 auto;
  margin-right: 4.5rem;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 
    box-shadow 0.3s cubic-bezier(0.4,0,0.2,1),
    border-color 0.3s cubic-bezier(0.4,0,0.2,1),
    transform 0.3s cubic-bezier(0.4,0,0.2,1),
    background 0.3s cubic-bezier(0.4,0,0.2,1);
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  border: 2px solid transparent;
  background: rgba(255,255,255,0.08);
}

.skill-item:hover {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.20);
  border-color: #ffffff;
  transform: translateY(-8px) scale(1.08);
  background: rgba(255,254,254,0.18);
  z-index: 2;
}

.skill-level {
  margin-top: 1rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  background: transparent;
  padding: 0;
  border-radius: 0.5rem;
  box-shadow: none;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Gaya untuk logo - Sekarang dengan ukuran tetap */
.skill-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

/* Keyframes untuk animasi scroll ke kiri */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Geser 50% lebar karena duplikasi item */
  }
}
</style>
