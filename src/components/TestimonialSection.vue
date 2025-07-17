<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Testimonial data
const testimonials = ref([
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'Pelanggan Setia',
    avatar: '/images/avatar-1.jpg',
    content:
      'Batiknya sangat halus dan nyaman dipakai. Saya suka karena motifnya klasik, tapi tetap cocok untuk acara formal maupun santai. Kualitasnya juara!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmad Pratama',
    role: 'Kolektor Batik',
    avatar: '/images/avatar-2.jpg',
    content:
      'Setiap motif memiliki cerita yang mendalam. Proses pembuatannya yang handmade membuat setiap piece unik. Sangat puas dengan kualitas dan pelayanannya.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dini Ramadhani',
    role: 'Fashion Enthusiast',
    avatar: '/images/avatar-3.jpg',
    content:
      'Warna-warnanya natural dan tahan lama. Sudah berkali-kali dicuci tapi tetap bagus. Cocok banget untuk yang mencari batik berkualitas tinggi.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Budi Santoso',
    role: 'Pengusaha',
    avatar: '/images/avatar-4.jpg',
    content:
      'Pelayanan yang ramah dan profesional. Batik yang dibeli untuk seragam kantor mendapat respon positif dari semua karyawan. Recommended!',
    rating: 5,
  },
])

const currentIndex = ref(0)

// Navigation functions
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
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
  <section id="testimoni" class="bg-gray-50 py-8 sm:py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 md:mb-16"
        data-aos="fade-up"
      >
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div class="bg-white border border-gray-200 px-4 py-2 sm:px-6 rounded-full w-fit">
            <span class="text-gray-700 font-medium text-sm sm:text-base">TESTIMONIAL</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Pengalaman Mereka
          </h2>
        </div>

        <!-- Navigation Buttons - Hidden on small screens -->
        <div class="hidden sm:flex items-center gap-2">
          <button
            @click="prevTestimonial"
            class="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:border-gray-300"
          >
            <ChevronLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            @click="nextTestimonial"
            class="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
          >
            <ChevronRightIcon class="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <!-- Testimonial Content -->
      <div class="relative" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <!-- Avatar -->
            <div class="flex-shrink-0 self-center sm:self-start">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full overflow-hidden">
                <img
                  :src="testimonials[currentIndex].avatar"
                  :alt="testimonials[currentIndex].name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 text-center sm:text-left">
              <div class="mb-3 sm:mb-4">
                <span class="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  TESTIMONIAL
                </span>
              </div>

              <blockquote
                class="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed mb-4 sm:mb-6"
              >
                "{{ testimonials[currentIndex].content }}"
              </blockquote>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
              >
                <div class="order-2 sm:order-1">
                  <div class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    {{ testimonials[currentIndex].name }}
                  </div>
                  <div class="text-xs sm:text-sm text-gray-500">
                    {{ testimonials[currentIndex].role }}
                  </div>
                </div>

                <!-- Rating Stars -->
                <div
                  class="flex items-center justify-center sm:justify-start gap-1 order-1 sm:order-2"
                >
                  <svg
                    v-for="star in testimonials[currentIndex].rating"
                    :key="star"
                    class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Buttons -->
      <div class="flex sm:hidden items-center justify-center gap-4 mt-6">
        <button
          @click="prevTestimonial"
          class="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:border-gray-300 active:scale-95"
        >
          <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
        </button>
        <button
          @click="nextTestimonial"
          class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 active:scale-95"
        >
          <ChevronRightIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="flex justify-center mt-6 sm:mt-8 gap-2" data-aos="fade-up" data-aos-delay="400">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          @click="goToSlide(index)"
          :class="[
            'w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200',
            currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400',
          ]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transition for testimonial content */
.testimonial-content {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

/* Custom animation for testimonial change */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-enter-active {
  animation: fadeInUp 0.3s ease-out;
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
}
</style>
