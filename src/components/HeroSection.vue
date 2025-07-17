<template>
  <section id="beranda" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with overlay and WebP optimization -->
    <div class="absolute inset-0 z-0">
      <picture>
        <source :srcset="currentSlide.imageSrcset" type="image/webp" sizes="100vw" />
        <img
          :src="currentSlide.image"
          :alt="currentSlide.title"
          class="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </picture>
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content with AOS animations -->
    <div
      class="absolute flex justify-between items-end bottom-20 left-4 md:left-12 z-10 text-left text-white px-4 md:px-0 md:right-12"
    >
      <div class="max-w-2xl">
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-anton"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {{ currentSlide.title }}
        </h1>
      </div>
      <div class="flex">
        <button
          @click="prevSlide"
          class="z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

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
// Import image optimization composable
import { useOptimizedImages } from '@/composables/useOptimizedImages'

// Set up image optimization
const { getOptimizedImageUrl, createImage } = useOptimizedImages()

// Generate srcset for an image
const generateSrcSet = (path: string) => {
  return [
    `${path}?format=webp&width=640&quality=80 640w`,
    `${path}?format=webp&width=1024&quality=80 1024w`,
    `${path}?format=webp&width=1600&quality=80 1600w`,
    `${path}?format=webp&width=2048&quality=80 2048w`,
  ].join(', ')
}

interface Slide {
  title: string
  subtitle: string
  image: string
  imageSrcset: string
}

const slides: Slide[] = [
  {
    title: 'Mewarisi Tradisi Menulis Masa Depan',
    subtitle:
      'Melestarikan warisan budaya batik Giriloyo dengan sentuhan modern untuk generasi mendatang',
    image: getOptimizedImageUrl('/images/hero-1.png'),
    imageSrcset: generateSrcSet('/images/hero-1.png'),
  },
  {
    title: 'Keahlian Turun Temurun',
    subtitle:
      'Setiap motif batik dibuat dengan teknik tradisional yang telah diwariskan lintas generasi',
    image: getOptimizedImageUrl('/images/hero-2.png'),
    imageSrcset: generateSrcSet('/images/hero-2.png'),
  },
  {
    title: 'Kualitas Premium Bantul',
    subtitle: 'Batik berkualitas tinggi dari jantung budaya Yogyakarta dengan corak khas Giriloyo',
    image: getOptimizedImageUrl('/images/hero-3.png'),
    imageSrcset: generateSrcSet('/images/hero-3.png'),
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
