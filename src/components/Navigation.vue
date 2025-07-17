<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
    <div class="container mx-auto py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path
                d="M9 2l1 1v18l-1 1H3l-1-1V3l1-1h6zm5 1.5L21 7v10l-7 3.5V3.5zM4 4v16h4V4H4zm10 1l5 2v8l-5 2V5z"
              />
            </svg>
          </div>
          <span class="text-white text-xl font-bold">BATIK GIRILOYO</span>
        </div>

        <!-- Navigation Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            class="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center space-x-4">
          <button
            class="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <span class="font-medium">Hubungi Kami</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-3">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            class="text-white hover:text-amber-400 transition-colors duration-300 font-medium py-2"
            @click="
              scrollToSection(item.href);
              toggleMobileMenu()
            "
          >
            {{ item.name }}
          </a>
          <button
            class="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/30 mt-4"
          >
            <span class="font-medium">Hubungi Kami</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
