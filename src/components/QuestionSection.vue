<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PlusIcon, MinusIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

// FAQ data
const faqItems = ref([
  {
    id: 1,
    question: 'Berapa lama proses pengiriman?',
    answer:
      'Proses pengiriman biasanya memakan waktu 3-7 hari kerja untuk wilayah Jawa, dan 7-14 hari kerja untuk luar Jawa. Kami menggunakan ekspedisi terpercaya seperti JNE, J&T, dan Sicepat untuk memastikan produk sampai dengan aman.',
    isOpen: false,
  },
  {
    id: 2,
    question: 'Apakah tersedia batik untuk pria dan wanita?',
    answer:
      'Tentu, kami menyediakan berbagai koleksi batik untuk pria, wanita, hingga anak-anak dengan motif dan ukuran yang bervariasi. Koleksi kami mencakup kemeja batik, dress batik, blus, dan berbagai model lainnya.',
    isOpen: true,
  },
  {
    id: 3,
    question: 'Apakah bisa pesan custom motif atau ukuran?',
    answer:
      'Ya, kami menerima pesanan custom untuk motif dan ukuran khusus. Untuk pemesanan custom, silakan hubungi tim customer service kami terlebih dahulu untuk konsultasi design dan estimasi waktu pengerjaan. Minimal order untuk custom adalah 10 pieces.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Apakah ada toko fisik yang bisa dikunjungi?',
    answer:
      'Ya, kami memiliki showroom di Kampung Batik Giriloyo, Bantul, Yogyakarta. Anda dapat berkunjung langsung untuk melihat koleksi dan proses pembuatan batik. Jam operasional: Senin-Sabtu 08.00-17.00 WIB, Minggu 09.00-15.00 WIB.',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Apakah produk bisa dikembalikan?',
    answer:
      'Kami menerima retur produk dalam waktu 7 hari setelah barang diterima, dengan syarat barang masih dalam kondisi original, belum digunakan, dan masih memiliki tag. Biaya return ditanggung oleh pembeli kecuali ada kesalahan dari pihak kami.',
    isOpen: false,
  },
  {
    id: 6,
    question: 'Bagaimana cara merawat batik yang benar?',
    answer:
      'Untuk merawat batik, sebaiknya dicuci dengan air dingin, gunakan deterjen yang lembut, jangan diperas terlalu kuat, dan jemur di tempat yang tidak terkena sinar matahari langsung. Untuk penyimpanan, gunakan hanger atau lipat dengan rapi di lemari yang kering.',
    isOpen: false,
  },
])

// Toggle FAQ item
const toggleFaq = (id: number) => {
  const item = faqItems.value.find((item) => item.id === id)
  if (item) {
    item.isOpen = !item.isOpen
  }
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
  <section id="faq" class="py-8 sm:py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <!-- Left Side - Header -->
        <div class="lg:sticky lg:top-8 lg:h-fit" data-aos="fade-up">
          <div
            class="bg-white border border-gray-200 px-4 py-2 sm:px-6 rounded-full w-fit mb-4 sm:mb-6"
          >
            <span class="text-gray-700 font-medium text-sm sm:text-base">PERTANYAAN</span>
          </div>

          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pertanyaan Seputar Batik Kami
          </h2>

          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk, layanan, dan
            proses pemesanan batik kami.
          </p>

          <button
            class="group bg-black hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 w-fit"
          >
            <span class="text-sm sm:text-base">Hubungi Kami</span>
            <ArrowTopRightOnSquareIcon
              class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        <!-- Right Side - FAQ Items -->
        <div class="space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div
            v-for="(item, index) in faqItems"
            :key="item.id"
            class="bg-white overflow-hidden transition-all duration-300 hover:shadow-md border-b-2 border-gray-200"
            :data-aos="'fade-up'"
            :data-aos-delay="200 + index * 100"
          >
            <!-- Question Header -->
            <button
              @click="toggleFaq(item.id)"
              class="w-full px-4 py-4 sm:px-6 sm:py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
            >
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-tight">
                {{ item.question }}
              </h3>

              <div class="flex-shrink-0">
                <transition
                  enter-active-class="transition-all duration-200"
                  leave-active-class="transition-all duration-200"
                  enter-from-class="opacity-0 rotate-90"
                  leave-to-class="opacity-0 rotate-90"
                >
                  <MinusIcon v-if="item.isOpen" class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  <PlusIcon v-else class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </transition>
              </div>
            </button>

            <!-- Answer Content -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="item.isOpen" class="overflow-hidden">
                <div class="px-4 pb-4 sm:px-6 sm:pb-5 border-t border-gray-100">
                  <p class="text-gray-600 text-sm sm:text-base leading-relaxed pt-4">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 sm:mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
        <div
          class="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100"
        >
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            Masih ada pertanyaan lain?
          </h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Tim customer service kami siap membantu Anda dengan pertanyaan apapun seputar produk
            batik kami.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              class="bg-black hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
            >
              Chat WhatsApp
            </button>
            <button
              class="bg-white hover:bg-gray-50 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300 text-sm sm:text-base"
            >
              Kirim Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  background-color: white;
}
/* Custom scrollbar for sticky content */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 2rem;
  }
}

/* Smooth transitions for FAQ items */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced focus states */
button:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
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

  .hover\:shadow-md:hover {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
}

/* Optimized animations for mobile */
@media (max-width: 640px) {
  .group-hover\:translate-x-1:hover {
    transform: translateX(0.125rem);
  }

  .group-hover\:-translate-y-1:hover {
    transform: translateY(-0.125rem);
  }
}

/* FAQ item animation improvements */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}
</style>
