<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <main>
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Placeholder sections for future development -->
    <section id="about" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">About Batik Giriloyo</h2>
        <p class="text-xl text-gray-600">Section ini akan dikembangkan selanjutnya</p>
      </div>
    </section>

    <section id="gallery" class="min-h-screen flex items-center justify-center bg-white">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">Gallery</h2>
        <p class="text-xl text-gray-600">Section ini akan dikembangkan selanjutnya</p>
      </div>
    </section>

    <section id="testimoni" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">Testimoni</h2>
        <p class="text-xl text-gray-600">Section ini akan dikembangkan selanjutnya</p>
      </div>
    </section>

    <section id="faq" class="min-h-screen flex items-center justify-center bg-white">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">FAQ</h2>
        <p class="text-xl text-gray-600">Section ini akan dikembangkan selanjutnya</p>
      </div>
    </section>
  </main>
</template>
