"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Harini R</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">Full Stack Developer</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            I build accessible, pixel-perfect digital experiences using the MERN stack. Currently studying at Kalvium,
            passionate about creating impactful applications that blend thoughtful design with robust engineering.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button variant="ghost" size="icon" asChild className="hover:text-accent">
              <a href="https://www.linkedin.com/in/harini1812" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-accent">
              <a href="https://github.com/harini18122005" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-accent">
              <a href="mailto:2005hariniramesh@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
