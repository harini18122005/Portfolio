"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      title: "Capstone Project Success",
      description:
        "Successfully delivered JobHive, a major full-stack application demonstrating comprehensive development skills",
      type: "Academic Achievement",
    },
    {
      title: "Hackathon Participation",
      description:
        "Active participant in multiple hackathons, focusing on collaborative product development and rapid prototyping",
      type: "Community Engagement",
    },
    {
      title: "Open Source Contributions",
      description:
        "Active contributor to GitHub repositories and open-source projects, sharing knowledge with the developer community",
      type: "Community Impact",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building expertise through hands-on projects and community engagement
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`transition-all duration-600 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
