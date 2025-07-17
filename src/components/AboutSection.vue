<script setup lang="ts">
import { ref } from 'vue'
// Import image optimization composable
import { useOptimizedImages } from '@/composables/useOptimizedImages'

// Set up image optimization
const { createImage } = useOptimizedImages()
const aboutImage = createImage('/images/about-batik-giriloyo.jpg', '/images/placeholder.jpg')

// Define statistics with Google Font Icons
const statistics = ref([
  {
    id: 1,
    number: '+200',
    title: 'Batik Tulis Terjual',
    icon: 'brush', // Google Font Icon name
  },
  {
    id: 2,
    number: '+120',
    title: 'Koleksi Batik Dimiliki',
    icon: 'category', // Google Font Icon name
  },
  {
    id: 3,
    number: '+99',
    title: 'Anggota Komunitas',
    icon: 'group', // Google Font Icon name
  },
])

// List of trusted partners with custom icons
const basePartners = [
  { name: 'Craftina', icon: 'palette' },
  { name: 'BatikNusantara', icon: 'public' },
  { name: 'PesonaBatik', icon: 'eco' },
  { name: 'RumahBatik', icon: 'home' },
]

// Create multiple copies for seamless loop
const partners = ref([
  ...basePartners,
  ...basePartners,
  ...basePartners,
  ...basePartners,
  ...basePartners,
  ...basePartners,
])
</script>

<template>
  <section id="about" class="py-16 md:py-24 bg-white overflow-hidden">
    <!-- Partners Section with Infinity Scroll -->
    <div class="container mx-auto px-4 mb-16">
      <div class="text-center">
        <div class="inline-block relative mb-8" data-aos="fade-up" data-aos-delay="300">
          <div class="w-full absolute h-[1px] bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          <div class="flex gap-3 items-center justify-center">
            <!-- Hide SVG images on mobile -->
            <img src="/src/assets/rectangle-left.svg" class="hidden md:block" />
            <p class="text-gray-800 font-medium bg-white relative px-6">
              Dipercaya oleh Banyak Mitra
            </p>
            <img src="/src/assets/Rectangle 7.svg" class="hidden md:block" />
          </div>
        </div>
      </div>

      <!-- Infinity Scroll Container -->
      <div class="relative overflow-hidden">
        <!-- Infinity scrolling wrapper with seamless loop -->
        <div class="flex animate-infinite-scroll gap-8 md:gap-16">
          <div
            v-for="(partner, index) in partners"
            :key="`${partner.name}-${index}`"
            class="flex items-center space-x-2 text-gray-800 whitespace-nowrap flex-shrink-0 min-w-max"
          >
            <div class="w-8 h-8 flex items-center justify-center">
              <!-- Using Google Font Icons -->
              <span class="material-icons text-xl transition-all duration-300 hover:text-amber-600">
                {{ partner.icon }}
              </span>
            </div>
            <span class="font-medium">{{ partner.name }}</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
      </div>
    </div>

    <!-- About Us Main Content -->
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-10">
        <div
          class="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
        >
          Tentang Kami
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        <!-- Left Side - Text Content -->
        <div class="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Lestarikan Budaya Lewat Batik Giriloyo
          </h2>

          <p class="text-gray-600 mb-8 text-lg leading-relaxed">
            Batik bukan sekadar karya seni, tapi warisan budaya yang hidup dan berkembang bersama
            masyarakat Giriloyo, Yogyakarta.
          </p>

          <!-- Statistics Section -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div
              v-for="stat in statistics"
              :key="stat.id"
              class="flex items-start space-x-4"
              data-aos="fade-up"
              :data-aos-delay="200 + stat.id * 100"
            >
              <!-- Icon -->
              <div
                class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span class="material-icons text-2xl text-gray-700">
                  {{ stat.icon }}
                </span>
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-3xl font-bold text-gray-900 mb-1">{{ stat.number }}</h3>
                <p class="text-sm text-gray-600">{{ stat.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Image -->
        <div
          class="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <picture>
              <source :srcset="aboutImage.srcset" type="image/webp" :sizes="aboutImage.sizes" />
              <img
                :src="aboutImage.src"
                alt="Kampung Batik Giriloyo"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                @error="($event.target as HTMLImageElement).src = aboutImage.fallback"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Import Google Font Icons */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Infinity scroll animation - faster and seamless */
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 15s linear infinite;
  will-change: transform;
}

/* Pause animation on hover */
.animate-infinite-scroll:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-infinite-scroll {
    animation-duration: 10s;
  }
}

/* Ensure smooth performance */
@media (prefers-reduced-motion: reduce) {
  .animate-infinite-scroll {
    animation: none;
  }
}
</style>
