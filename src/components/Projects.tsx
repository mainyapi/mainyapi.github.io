'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import { useState } from "react" // useRef artık kaydırma için kullanılmadığı için kaldırılabilir
import { Eye } from "lucide-react" // Chevron ikonları pagination için kaldırıldı
import { Button } from "@/components/ui/button"
import ProjectDetailModal from "./ProjectDetailModal"
import projectsData from "../data/projects.json"

interface Project {
  id: string
  title: string
  location: string
  //year: string
  category: string
  description: string
  images: string[]
}

const PROJECTS_PER_PAGE = 6; // Sayfada gösterilecek maksimum kart sayısı

export default function Projects() {
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<Project | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(PROJECTS_PER_PAGE); // Başlangıçta 3 proje göster

  const projects: Project[] = projectsData.projects;

  const handleLoadMore = () => {
    setVisibleProjectsCount(prevCount => prevCount + PROJECTS_PER_PAGE);
  };

  const hasMoreProjects = visibleProjectsCount < projects.length; // Daha fazla proje var mı kontrolü

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı projelerle sektördeki deneyimimizi ve kalite anlayışımızı gösteriyoruz.
          </p>
        </div>

        {/* Proje Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjectsCount).map((project: Project) => ( // Sadece görünen projeleri dilimle
            <Card
              key={project.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden group/image">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      +{project.images.length - 1}
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                    onClick={() => {
                      setSelectedProjectForDetail(project);
                      setIsDetailModalOpen(true);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Detayları Görüntüle
                  </Button>
                </div>
              </div>
              <CardContent
                className="p-6 cursor-pointer"
                onClick={() => {
                  setSelectedProjectForDetail(project);
                  setIsDetailModalOpen(true);
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                {/* 
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.year}
                </div>
                */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daha Fazla Yükle Butonu */}
        {hasMoreProjects && ( // Sadece daha yüklenecek proje varsa göster
          <div className="text-center mt-12">
            <Button
              variant="default"
              size="lg" // Büyük buton boyutu
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors duration-300"
              onClick={handleLoadMore}
            >
              Daha Fazla Proje Yükle
            </Button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProjectForDetail}
        isOpen={isDetailModalOpen}
        onClose={() => {
          setSelectedProjectForDetail(null);
          setIsDetailModalOpen(false);
        }}
      />
    </section>
  );
}