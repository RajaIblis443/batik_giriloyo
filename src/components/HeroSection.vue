<template>
  <section id="beranda" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with overlay -->
    <div class="absolute inset-0 z-0">
      <img
        :src="currentSlide.image"
        :alt="currentSlide.title"
        class="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div
      class="absolute bottom-20 left-4 md:left-8 z-10 text-left text-white max-w-2xl px-4 md:px-0"
    >
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
        {{ currentSlide.title }}
      </h1>
      <p class="text-sm md:text-base lg:text-lg mb-6 opacity-90 max-w-xl">
        {{ currentSlide.subtitle }}
      </p>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="prevSlide"
      class="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="index === currentSlideIndex ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  title: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  {
    title: 'Mewarisi Tradisi Menulis Masa Depan',
    subtitle:
      'Melestarikan warisan budaya batik Giriloyo dengan sentuhan modern untuk generasi mendatang',
    image: '/images/hero-1.png',
  },
  {
    title: 'Keahlian Turun Temurun',
    subtitle:
      'Setiap motif batik dibuat dengan teknik tradisional yang telah diwariskan lintas generasi',
    image: '/images/hero-2.png',
  },
  {
    title: 'Kualitas Premium Bantul',
    subtitle: 'Batik berkualitas tinggi dari jantung budaya Yogyakarta dengan corak khas Giriloyo',
    image: '/images/hero-3.png',
  },
]

const currentSlideIndex = ref(0)
const currentSlide = ref(slides[0])

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length
  currentSlide.value = slides[currentSlideIndex.value]
}

const prevSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === 0 ? slides.length - 1 : currentSlideIndex.value - 1
  currentSlide.value = slides[currentSlideIndex.value]
}

const goToSlide = (index: number) => {
  currentSlideIndex.value = index
  currentSlide.value = slides[index]
}

// Auto-slide functionality
let slideInterval: number

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
/* Smooth slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
