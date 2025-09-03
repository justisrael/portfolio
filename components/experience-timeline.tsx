import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Coconut Africa",
      location: "Lagos, Nigeria (Remote)",
      position: "Lead Engineer",
      period: "Feb. 2025 – April. 2025",
      description: "Led both frontend and backend development for a logistics and fintech platform.",
      technologies: ["Next.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      company: "SparkHQ UK",
      location: "Remote",
      position: "Full-Stack Developer",
      period: "May 2023 – Feb. 2025",
      description: "Built a comprehensive platform for designers to find inspiration.",
      technologies: ["React", "Next.js", "Node.js", "Firebase"],
    },
    {
      company: "Throve UK",
      location: "Remote",
      position: "Front-End Developer",
      period: "Sept. 2022 – Feb. 2025",
      description: "Developed an interactive multi-page web application.",
      technologies: ["React", "Next.js", "SCSS"],
    },
    {
      company: "LittleSeconds UK",
      location: "Remote",
      position: "Full-Stack Developer",
      period: "Feb. 2025 – April. 2025",
      description: "Built user dashboard and service management features.",
      technologies: ["React", "Next.js", "TailwindCSS", "Twilio"],
    },
    {
      company: "Mawshal Proverbs",
      location: "Contract",
      position: "Full Stack Developer",
      period: "Dec. 2023 – June 2024",
      description: "E-commerce platform for selling written poems and poetic wallpapers.",
      technologies: ["React", "Redux", "Node.js", "Firebase"],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-l-4 border-l-neutral-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <h4 className="font-medium text-lg">{exp.company}</h4>
                <p className="text-neutral-500 text-sm">{exp.location}</p>
              </div>

              <div className="md:col-span-2">
                <h5 className="font-medium">{exp.position}</h5>
                <p className="text-neutral-600 text-sm mb-2">{exp.period}</p>
                <p className="text-neutral-700">{exp.description}</p>
              </div>

              <div className="md:col-span-1 flex flex-col items-start md:items-end justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 2).map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-auto">
                  Details <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
