<script setup lang="ts">
import { ref } from 'vue'
// Import icons from Lucide Vue
import { PenTool, Award, Users, Globe, Leaf, Home } from 'lucide-vue-next'
// Import image optimization composable
import { useOptimizedImages } from '@/composables/useOptimizedImages'

// Set up image optimization
const { createImage } = useOptimizedImages()
const aboutImage = createImage('/images/about-batik-giriloyo.jpg', '/images/placeholder.jpg')

// Define features with icons and descriptions
const features = ref([
  {
    id: 1,
    title: 'Handmade Asli',
    description:
      'Dibuat sepenuhnya dengan teknik batik tulis oleh pengrajin berpengalaman dari Giriloyo.',
    icon: PenTool,
  },
  {
    id: 2,
    title: 'Kualitas Terjamin',
    description: 'Menggunakan kain terbaik dengan proses pewarnaan alami yang ramah lingkungan.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Dukung Lokal',
    description: 'Dengan membeli batik ini, mendukung ekonomi kreatif masyarakat desa.',
    icon: Users,
  },
])

// List of trusted partners
const partners = ref([
  { name: 'Craftina', icon: PenTool },
  { name: 'BatikNusantara', icon: Globe },
  { name: 'PesonaBatik', icon: Leaf },
  { name: 'RumahBatik', icon: Home },
])
</script>

<template>
  <section id="about" class="py-16 md:py-24 bg-white overflow-hidden">
    <!-- Partners Section -->
    <div class="container mx-auto px-4 mb-16">
      <div class="text-center">
        <div class="inline-block relative mb-8" data-aos="fade-up" data-aos-delay="300">
          <div class="w-full absolute h-[1px] bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          <p class="text-gray-800 font-medium bg-white relative px-6">
            Dipercaya oleh Banyak Mitra
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <div
          v-for="(partner, index) in partners"
          :key="partner.name"
          class="flex items-center space-x-2 text-gray-800"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="200 + index * 100"
        >
          <div class="w-8 h-8 flex items-center justify-center">
            <!-- Using Lucide Vue components for icons -->
            <component
              :is="partner.icon"
              :size="24"
              class="transition-all duration-300 hover:text-amber-600"
            />
          </div>
          <span class="font-medium">{{ partner.name }}</span>
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
      <div class="mb-10">
        <h2
          class="text-3xl font-bold inline-flex items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span class="w-8 h-[2px] bg-gray-900 mr-4"></span>
          About Us
        </h2>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <!-- Left Side - Image with WebP optimization and AOS -->
        <div
          class="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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

        <!-- Right Side - Text Content with AOS -->
        <div
          class="w-full md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <h3 class="text-2xl md:text-3xl font-bold mb-6">
            Batik Giriloyo: Sentuhan Tradisi Tangan Lokal
          </h3>

          <p class="text-gray-700 mb-8 leading-relaxed">
            Kami percaya, warisan tak harus kuno. Batik Giriloyo adalah bentuk pertemuan antara
            tradisi dan tren masa kini. Lewat karya batik tulis autentik buatan tangan, kami
            menghadirkan gaya yang berakar, namun tetap relevan untuk generasi modern.
          </p>

          <!-- Features with AOS animations - matching Figma design -->
          <div class="flex flex-col md:flex-row gap-6 md:gap-0 mt-12 border-t border-gray-200 pt-8">
            <div
              v-for="feature in features"
              :key="feature.id"
              class="flex-1 relative"
              data-aos="fade-up"
              :data-aos-delay="300 + feature.id * 150"
            >
              <!-- Add dividers between items except last one -->
              <div
                v-if="feature.id !== 3"
                class="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200"
              ></div>

              <div class="px-4 md:px-8">
                <!-- Icon container -->
                <div class="mb-4">
                  <component :is="feature.icon" :size="28" class="text-gray-800" />
                </div>

                <!-- Title -->
                <h4 class="font-bold text-lg mb-3">{{ feature.title }}</h4>

                <!-- Description -->
                <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles here if needed */
</style>
