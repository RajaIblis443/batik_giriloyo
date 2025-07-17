<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
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
  {
    id: 2,
    title: 'Motif Batik Parang',
    description:
      'Motif Parang melambangkan kekuatan dan keberanian dalam menghadapi tantangan hidup.',
    price: 'Rp 450.000',
    mainImage: '/images/kampung-batik-parang.jpg',
    thumbnails: [
      '/images/kampung-batik-parang-1.jpg',
      '/images/kampung-batik-parang-2.jpg',
      '/images/kampung-batik-parang-3.jpg',
    ],
  },
  {
    id: 3,
    title: 'Motif Batik Truntum',
    description: 'Motif Truntum melambangkan cinta kasih yang tulus dan kesetiaan dalam hubungan.',
    price: 'Rp 420.000',
    mainImage: '/images/kampung-batik-truntum.jpg',
    thumbnails: [
      '/images/kampung-batik-truntum-1.jpg',
      '/images/kampung-batik-truntum-2.jpg',
      '/images/kampung-batik-truntum-3.jpg',
    ],
  },
])

const activeItem = ref(0)
const activeThumbnail = ref(0)

// Navigation functions
const nextItem = () => {
  activeItem.value = (activeItem.value + 1) % galleryItems.value.length
  activeThumbnail.value = 0 // Reset thumbnail to first when changing item
}

const prevItem = () => {
  activeItem.value = (activeItem.value - 1 + galleryItems.value.length) % galleryItems.value.length
  activeThumbnail.value = 0 // Reset thumbnail to first when changing item
}

const selectThumbnail = (index: number) => {
  activeThumbnail.value = index
}

const getCurrentImage = () => {
  const currentItem = galleryItems.value[activeItem.value]
  return activeThumbnail.value === 0
    ? currentItem.mainImage
    : currentItem.thumbnails[activeThumbnail.value - 1]
}

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
  <section id="gallery" class="bg-white py-8 sm:py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-12"
        data-aos="fade-up"
      >
        <div class="flex items-start gap-3 sm:gap-4">
          <div class="bg-gray-100 px-4 py-2 sm:px-6 rounded-full">
            <span class="text-gray-700 font-medium text-sm sm:text-base">GALLERY</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Lihat Koleksi Terbaik Kami
          </h2>
        </div>

        <button
          class="group bg-black hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 w-fit"
        >
          <span class="text-sm sm:text-base">View All</span>
          <ChevronRightIcon
            class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>

      <!-- Gallery Content -->
      <div class="grid lg:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="200">
        <!-- Main Image -->
        <div class="lg:col-span-1 order-2 lg:order-1">
          <div class="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden relative group">
            <img
              :src="getOptimizedImageUrl(getCurrentImage())"
              :alt="galleryItems[activeItem].title"
              class="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <!-- Image Navigation Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                @click="prevItem"
                class="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
              >
                <ChevronLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button
                @click="nextItem"
                class="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
              >
                <ChevronRightIcon class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>

            <!-- Image Counter -->
            <div
              class="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
            >
              {{ activeItem + 1 }} / {{ galleryItems.length }}
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-4 sm:space-y-6 order-1 lg:order-2 lg:col-span-1">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              {{ galleryItems[activeItem].title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              {{ galleryItems[activeItem].description }}
            </p>
            <div class="text-xl sm:text-2xl font-bold text-gray-900">
              {{ galleryItems[activeItem].price }}
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3">
            <!-- Main image thumbnail -->
            <div
              @click="selectThumbnail(0)"
              :class="[
                'bg-gray-50 rounded-lg sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer border-2',
                activeThumbnail === 0 ? 'border-black shadow-lg' : 'border-transparent',
              ]"
            >
              <img
                :src="getOptimizedImageUrl(galleryItems[activeItem].mainImage)"
                :alt="galleryItems[activeItem].title"
                class="w-full h-16 sm:h-20 md:h-24 object-cover"
              />
            </div>

            <!-- Additional thumbnails -->
            <div
              v-for="(thumbnail, index) in galleryItems[activeItem].thumbnails"
              :key="index"
              @click="selectThumbnail(index + 1)"
              :class="[
                'bg-gray-50 rounded-lg sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer border-2',
                activeThumbnail === index + 1 ? 'border-black shadow-lg' : 'border-transparent',
              ]"
            >
              <img
                :src="getOptimizedImageUrl(thumbnail)"
                :alt="`${galleryItems[activeItem].title} ${index + 2}`"
                class="w-full h-16 sm:h-20 md:h-24 object-cover"
              />
            </div>
          </div>

          <!-- Mobile Navigation -->
          <div class="flex items-center justify-between sm:justify-end lg:hidden">
            <div class="flex items-center gap-2">
              <button
                @click="prevItem"
                class="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:border-gray-300"
              >
                <ChevronLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button
                @click="nextItem"
                class="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
              >
                <ChevronRightIcon class="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex justify-between">
            <!-- Dots Indicator -->
            <div class="flex justify-center mt-8 gap-2" data-aos="fade-up" data-aos-delay="400">
              <button
                v-for="(item, index) in galleryItems"
                :key="item.id"
                @click="activeItem = index"
                :class="[
                  'w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200',
                  activeItem === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400',
                ]"
              />
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="prevItem"
                class="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:border-gray-300"
              >
                <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
              </button>
              <button
                @click="nextItem"
                class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
              >
                <ChevronRightIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots Indicator -->
      <div class="flex justify-center mt-8 gap-2 lg:hidden" data-aos="fade-up" data-aos-delay="400">
        <button
          v-for="(item, index) in galleryItems"
          :key="item.id"
          @click="activeItem = index"
          :class="[
            'w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200',
            activeItem === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400',
          ]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  border: 1px red solid;
}
/* Smooth image transitions */
.image-transition {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

/* Touch-friendly hover states for mobile */
@media (hover: none) {
  .hover\:bg-gray-50:hover {
    background-color: rgb(249 250 251);
  }

  .hover\:bg-gray-800:hover {
    background-color: rgb(31 41 55);
  }

  .hover\:border-gray-300:hover {
    border-color: rgb(209 213 219);
  }

  .hover\:shadow-lg:hover {
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
}

/* Optimized animations for mobile */
@media (max-width: 640px) {
  .group-hover\:scale-105:hover {
    transform: scale(1.02);
  }

  .group-hover\:translate-x-1:hover {
    transform: translateX(0.125rem);
  }
}
</style>
