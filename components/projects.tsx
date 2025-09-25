"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "JobHive",
      description:
        "A comprehensive full-stack application showcasing end-to-end development skills with modern job search and application features.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "Capstone Project",
      featured: true,
      github: "https://github.com/kalviumcommunity/S46_Harini_CAPSTONE_JOBHIVE",
    },
    {
      title: "Travel Project",
      description:
        "An interactive travel application with features for trip planning, destination exploration, and travel itinerary management.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "Full Stack App",
      featured: false,
      github: "https://github.com/harini18122005/Tourist-Travel",
    },
    {
      title: "MoodMeals",
      description:
        "An innovative project that suggests personalized meals based on user mood and preferences using intelligent algorithms.",
      tech: ["React.js", "Node.js", "Express.js", "API Integration"],
      type: "Web Application",
      featured: false,
      github: "https://github.com/harini18122005/-Moodmeals",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my development journey and technical capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-lg transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">View source</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
