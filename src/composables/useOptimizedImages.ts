/**
 * Composable for handling optimized image paths
 * Uses Vite's imagetools plugin for WebP conversion and optimization
 */

import { ref } from 'vue'

export function useOptimizedImages() {
  /**
   * Get an optimized image URL with WebP support
   * @param path Path to the image
   * @returns Image URL with WebP optimization
   */
  const getOptimizedImageUrl = (path: string) => {
    try {
      // Check if path is for a public folder image
      if (path.startsWith('/')) {
        // For public directory images, add query parameters for WebP conversion
        return `${path}?format=webp&quality=80`
      } else {
        // For images imported through Vite, use import.meta.url
        return new URL(`${path}?format=webp&quality=80`, import.meta.url).href
      }
    } catch (error) {
      console.warn('Failed to optimize image:', path, error)
      return path
    }
  }

  /**
   * Create an image object with primary and fallback sources
   * @param primaryPath Primary image path
   * @param fallbackPath Fallback image path if primary fails to load
   * @returns Image object with src, srcset, and fallback
   */
  const createImage = (primaryPath: string, fallbackPath: string) => {
    const optimizedSrc = getOptimizedImageUrl(primaryPath)
    const optimizedFallback = getOptimizedImageUrl(fallbackPath)

    // Create srcset for responsive images
    const generateSrcSet = (path: string) => {
      const base = path.split('?')[0]
      return [
        `${base}?format=webp&width=640&quality=80 640w`,
        `${base}?format=webp&width=768&quality=80 768w`,
        `${base}?format=webp&width=1024&quality=80 1024w`,
        `${base}?format=webp&width=1366&quality=80 1366w`,
      ].join(', ')
    }

    return {
      src: optimizedSrc,
      srcset: primaryPath.startsWith('/') ? generateSrcSet(primaryPath) : '',
      fallback: optimizedFallback,
      sizes: '(max-width: 768px) 100vw, 50vw',
    }
  }

  /**
   * Create a picture element with WebP and fallback sources
   * @param imagePath Path to the image
   * @param fallbackPath Fallback image path if primary fails to load
   * @param alt Alt text for the image
   * @param className Optional CSS class names
   * @returns HTML for a picture element with WebP and original format
   */
  const createPictureHtml = (
    imagePath: string,
    fallbackPath: string,
    alt: string,
    className = '',
  ) => {
    const webpSrc = getOptimizedImageUrl(imagePath)
    const fallbackSrc = imagePath // Original format as fallback

    return `
      <picture>
        <source srcset="${webpSrc}" type="image/webp">
        <img src="${fallbackSrc}" alt="${alt}" class="${className}" onerror="this.onerror=null; this.src='${fallbackPath}';">
      </picture>
    `
  }

  return {
    getOptimizedImageUrl,
    createImage,
    createPictureHtml,
  }
}
