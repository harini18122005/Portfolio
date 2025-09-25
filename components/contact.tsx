"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Using mailto as a fallback solution
      const mailtoLink = `mailto:2005hariniramesh@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setSubmitMessage("Opening your email client...")
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        })
        setSubmitMessage("")
      }, 3000)

    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage("There was an error. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in discussing new opportunities and exciting projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transition-all duration-600 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Let's create something amazing together!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:2005hariniramesh@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      2005hariniramesh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/harini1812"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <a
                      href="https://github.com/harini18122005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Check out my code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className={`transition-all duration-600 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      name="firstName"
                      placeholder="First name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input 
                      name="lastName"
                      placeholder="Last name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your message..." 
                    className="min-h-[120px]" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  {submitMessage && (
                    <p className={`text-sm ${submitMessage.includes("error") ? "text-red-500" : "text-green-600"}`}>
                      {submitMessage}
                    </p>
                  )}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">© 2025 Harini R. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </section>
  )
}
