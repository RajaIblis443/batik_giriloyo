<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useOptimizedImages } from '@/composables/useOptimizedImages'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { getOptimizedImageUrl } = useOptimizedImages()

// Gallery data
const galleryItems = ref([
  {
    id: 1,
    title: 'Motif Batik Kawung',
    description: 'Motif Kawung melambangkan kesucian dan pengendalian diri dalam budaya Jawa.',
    price: 'Rp 380.000',
    mainImage: '/images/kampung-batik-kawung.jpg',
    thumbnails: [
      '/images/kampung-batik-kawung-1.jpg',
      '/images/kampung-batik-kawung-2.jpg',
      '/images/kampung-batik-kawung-3.jpg',
    ],
  },
  // Add more items as needed
])

const activeItem = ref(0)

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  })
})
</script>

<template>
  <section id="gallery" class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-12" data-aos="fade-up">
        <div class="flex flex-col items-start gap-4 mb-6">
          <div class="bg-gray-100 px-6 py-2 rounded-full">
            <span class="text-gray-700 font-medium">Gallery</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Lihat Koleksi Terbaik Kami</h2>
        </div>

        <button
          class="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
        >
          <span>View All</span>
          <ChevronRightIcon
            class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>

      <!-- Gallery Content -->
      <div class="grid lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
        <!-- Main Image -->
        <div class="lg:col-span-2">
          <div class="bg-gray-50 rounded-3xl overflow-hidden">
            <img
              :src="getOptimizedImageUrl(galleryItems[activeItem].mainImage)"
              :alt="galleryItems[activeItem].title"
              class="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ galleryItems[activeItem].title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ galleryItems[activeItem].description }}
            </p>
            <div class="text-2xl font-bold text-gray-900">
              {{ galleryItems[activeItem].price }}
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="(thumbnail, index) in galleryItems[activeItem].thumbnails"
              :key="index"
              class="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <img
                :src="getOptimizedImageUrl(thumbnail)"
                :alt="`${galleryItems[activeItem].title} ${index + 2}`"
                class="w-full h-24 object-cover"
              />
            </div>
          </div>

          <!-- Navigation Arrow -->
          <div class="flex justify-end">
            <button
              class="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:border-gray-300"
            >
              <ChevronRightIcon class="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
