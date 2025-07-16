/**
 * Composable for handling optimized image paths
 * Uses Vite's built-in asset handling
 */

import { ref } from 'vue'

export function useOptimizedImages() {
  /**
   * Get an optimized image URL with WebP support
   * @param path Path to the image from public directory
   * @returns Image URL with WebP optimization if supported
   */
  const getOptimizedImageUrl = (path: string) => {
    // For images in public folder, just return the path directly
    // The server will handle them
    return path
  }

  /**
   * Create an image object with primary and fallback sources
   * @param primaryPath Primary image path
   * @param fallbackPath Fallback image path if primary fails to load
   * @returns Image object with src and fallback
   */
  const createImage = (primaryPath: string, fallbackPath: string) => {
    return {
      src: getOptimizedImageUrl(primaryPath),
      fallback: getOptimizedImageUrl(fallbackPath),
    }
  }

  return {
    getOptimizedImageUrl,
    createImage,
  }
}
