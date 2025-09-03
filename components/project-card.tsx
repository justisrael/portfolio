"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imagePath: string
  projectId: string
  url: string;

}

export default function ProjectCard({ title, description, tags, imagePath, projectId }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleViewMore = () => {
    // Use a custom event to trigger the modal
    const event = new CustomEvent("openProjectModal", { detail: { projectId } })
    document.dispatchEvent(event)
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
              <Button
                variant="outline"
                className="text-white border-white bg-transparent hover:bg-transparent hover:text-white"
                onClick={handleViewMore}
              >
                <Eye className="mr-2 h-4 w-4" /> View Project
              </Button>
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-neutral-600 text-sm mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
