'use client'

import { X, MapPin, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ImageGallery from "./ImageGallery" // Doğru dosya yolu

interface Project {
  id: string
  title: string
  location: string
  category: string
  description: string
  images: string[]
}

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!isOpen || !project) return null

  // Modal açıkken body'nin kaydırmasını engelle
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {project.location}
              </div>

              <Badge variant="secondary">{project.category}</Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Proje Hakkında</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Proje Fotoğrafları</h3>
            <ImageGallery images={project.images} title={project.title} />
          </div>

          {/* Project Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Building2 className="h-8 w-8 text-blue-700 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Kategori</div>
              <div className="font-semibold text-gray-900">{project.category}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Konum</div>
              <div className="font-semibold text-gray-900">{project.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}