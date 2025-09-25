"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a third-year Computer Science student at Kalvium, specializing in Software Product Engineering. My
                  journey in development started with a curiosity about how digital experiences come to life.
                </p>
                <p>
                  Currently pursuing my BCA from the University of Mysore (2023-2027), I've developed a strong
                  foundation in full-stack development with hands-on experience in the MERN stack.
                </p>
                <p>
                  I'm passionate about building applications that not only function flawlessly but also provide
                  exceptional user experiences. My approach combines technical expertise with creative problem-solving.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Kalvium UG Program in CS</h4>
                    <p className="text-sm text-muted-foreground">Software Product Engineering</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">University of Mysore, BCA</h4>
                    <p className="text-sm text-muted-foreground">2023 – 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
