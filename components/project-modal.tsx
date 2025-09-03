// Function to open URL in new tab

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ProjectModalProps {
  id: string
  title: string
  role: string
  period: string
  description: string
  technologies: string[]
  responsibilities: string[]
  images: string[]
  url: string;

}

export default function ProjectModal({
  id,
  title,
  role,
  period,
  description,
  technologies,
  responsibilities,
  images,
  url
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

   function openUrlInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dialogRef.current?.open) {
        dialogRef.current.close()
      }
    }

    const handleOpenModal = (e: CustomEvent) => {
      if (e.detail.projectId === id && dialogRef.current) {
        dialogRef.current.showModal()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("openProjectModal", handleOpenModal as EventListener)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("openProjectModal", handleOpenModal as EventListener)
    }
  }, [id])

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <dialog
      id={id}
      ref={dialogRef}
      className="modal backdrop:bg-black/50 backdrop:backdrop-blur-sm p-0 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          handleClose()
        }
      }}
    >
      <div className="bg-white p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">{title}</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-neutral-600">
              <span>{role}</span>
              <span className="hidden sm:block">•</span>
              <span>{period}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={handleClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <p className="text-neutral-700 mb-6">{description}</p>

            <h3 className="text-lg font-medium mb-3">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 mb-6">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-md overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>


        <div className="mt-8 flex justify-end">
          <Button variant="outline" className="mr-2" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => openUrlInNewTab(url)}>Visit Project</Button>
        </div>
      </div>
    </dialog>
  )
}
