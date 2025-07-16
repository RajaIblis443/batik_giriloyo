<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

// Initialize smooth scroll with Lenis
let lenis: Lenis | null = null

onMounted(() => {
  // Initialize Lenis for smooth scrolling
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical', // Use orientation instead of direction
    gestureOrientation: 'vertical', // Use gestureOrientation instead of gestureDirection
  })

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  // Start the animation loop
  requestAnimationFrame(raf)
})

onUnmounted(() => {
  // Clean up Lenis instance
  lenis?.destroy()
})
</script>

<template>
  <RouterView />
</template>
