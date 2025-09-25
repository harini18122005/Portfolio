"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Netlify", level: "Intermediate" },
        { name: "Render", level: "Intermediate" },
        { name: "Google Cloud", level: "Intermediate" },
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`transition-all duration-600 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <Badge variant={skill.level === "Advanced" ? "default" : "secondary"} className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
