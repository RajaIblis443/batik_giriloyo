<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Footer navigation data
const bantuan = ref([
  { name: 'Beranda', href: '#' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Galeri Batik', href: '#gallery' },
  { name: 'Testimoni', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
])

// Social media links
const socialLinks = ref([
  { name: 'Whatsapp', href: 'https://wa.me/6282140651754' },
  { name: 'Instagram', href: 'https://instagram.com/batikgiriloyo' },
  { name: 'Telepon', href: 'tel:+6281234567890' },
])

// Get current year
const currentYear = new Date().getFullYear()

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
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 sm:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Brand Section -->
          <div class="lg:col-span-1" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-8">
              <div class="w-8 h-8 text-amber-500 text-xl">🏺</div>
              <h3 class="text-xl font-bold">BATIK GIRILOYO</h3>
            </div>

            <h4 class="text-2xl sm:text-3xl font-bold mb-8 leading-tight">
              Melestarikan Warisan,<br />
              Menyatukan Gaya
            </h4>

            <button
              class="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>GIRILOYO</span>
            </button>
          </div>
          <div></div>
          <!-- Bantuan Section -->
          <div class="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <h5 class="text-lg font-semibold mb-6">Bantuan</h5>
            <nav class="space-y-4">
              <a
                v-for="link in bantuan"
                :key="link.name"
                :href="link.href"
                class="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </nav>
          </div>

          <!-- Contact Section -->
          <div class="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
            <h5 class="text-lg font-semibold mb-6">Hubungi Kami</h5>
            <div class="space-y-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                class="block border border-gray-600 hover:border-white rounded-full px-2 py-1 text-center transition-all duration-300 hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Batik Giriloyo. Semua hak dilindungi.
          </p>

          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Batik Giriloyo. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Custom scrollbar and smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

/* Focus states for accessibility */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Responsive typography */
@media (max-width: 640px) {
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

/* Mobile responsive adjustments */
@media (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .lg\:col-span-1:first-child {
    grid-column: span 2 / span 2;
  }
}

@media (max-width: 768px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .lg\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .lg\:col-span-1:first-child {
    grid-column: span 1 / span 1;
  }
}

/* Touch-friendly interactions for mobile */
@media (max-width: 768px) {
  .hover\:border-white:hover {
    border-color: white;
  }

  .hover\:bg-gray-800:hover {
    background-color: rgb(31 41 55);
  }
}
</style>
