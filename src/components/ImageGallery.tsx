'use client'

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ImageGalleryProps {
  images: string[]
  title: string
  className?: string
}

export default function ImageGallery({ images, title, className = "" }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    document.body.style.overflow = 'hidden'; // Lightbox açıldığında body kaydırmayı engelle
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
    document.body.style.overflow = 'unset'; // Lightbox kapandığında body kaydırmayı serbest bırak
  }

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    }
  }

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex, images.length]) // Bağımlılıkları güncelledik

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <Card
            key={index}
            className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <CardContent className="p-0 relative overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - ${index + 1}`}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[110] flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Main Image */}
            <div className="relative">
              <img
                src={images[selectedImageIndex] || "/placeholder.svg"}
                alt={`${title} - ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <div className="text-sm text-gray-400">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2 max-w-full">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-blue-500 opacity-100 scale-105"
                        : "border-transparent opacity-60 hover:opacity-80 hover:scale-105"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}