"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Play, Pause } from "lucide-react"
import { 
  conferenceInfo, 
  testimonials, 
  videoSnippets, 
  contactInfo,
  getTimeUntilConference,
  getConferenceStats,
  getUpcomingDeadlines
} from "@/lib/data"

export default function IonCureConference() {
  const [eventStatus, setEventStatus] = useState<"pre" | "live" | "post">("pre")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentVideoSnippet, setCurrentVideoSnippet] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [conferenceStats] = useState(getConferenceStats())

  useEffect(() => {
    const updateEventStatus = () => {
      const timeData = getTimeUntilConference()
      setEventStatus(timeData.status)
      
      if (timeData.status === "pre") {
        setTimeLeft({
          days: timeData.days,
          hours: timeData.hours,
          minutes: timeData.minutes,
          seconds: timeData.seconds
        })
      }
    }

    updateEventStatus()
    const interval = setInterval(updateEventStatus, 1000)

    return () => clearInterval(interval)
  }, [])



  const getCtaButton = () => {
    switch (eventStatus) {
      case "pre":
        return {
          text: "Register Now",
          action: () => (window.location.href = "/register"),
        }
      case "live":
        return {
          text: "Join the Livestream",
          action: () => (window.location.href = "/register"),
        }
      case "post":
        return {
          text: "Watch On-Demand",
          action: () => (window.location.href = "/register"),
        }
    }
  }





  const ctaButton = getCtaButton()



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-sm">IR</span>
              </div>
              <span className="font-bold text-foreground">IonCure</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "/", label: "Home" },
                { id: "/about", label: "About" },
                { id: "/speakers", label: "Speakers" },
                { id: "/calendar", label: "Calendar" },
                { id: "/register", label: "Register" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    item.id === "/" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-organic-pattern relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                {conferenceInfo.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium max-w-4xl mx-auto leading-relaxed">
              {conferenceInfo.subtitle}
            </p>
                          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-lg">
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">
                    {new Date(conferenceInfo.startDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric' 
                    })} - {new Date(conferenceInfo.endDate).toLocaleDateString('en-US', { 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">{conferenceInfo.location}</span>
                </div>
              </div>

            {eventStatus === "pre" && (
              <div className="mb-8">
                                  <p className="text-lg text-foreground/80 mb-4">Conference starts in:</p>
                <div className="flex justify-center gap-4 text-center">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="text-2xl font-bold text-foreground">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => ctaButton.action()}
              >
                {ctaButton.text}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => (window.location.href = "/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Attendees Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from leading researchers and industry professionals who have attended our conferences
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="card-enhanced border-2 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary/40" />
                </div>

                <div className="text-center mb-6">
                  <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conference Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore memorable moments and key insights from our previous conferences
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoSnippets.map((video, index) => (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 card-enhanced ${
                    index === currentVideoSnippet ? "ring-2 ring-primary shadow-lg" : ""
                  }`}
                  onClick={() => setCurrentVideoSnippet(index)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured video display */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-card to-muted/30">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <img
                        src={videoSnippets[currentVideoSnippet].thumbnail || "/placeholder.svg"}
                        alt={videoSnippets[currentVideoSnippet].title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                        <button
                          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        >
                          {isVideoPlaying ? (
                            <Pause className="w-8 h-8 text-primary-foreground" />
                          ) : (
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {videoSnippets[currentVideoSnippet].title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {videoSnippets[currentVideoSnippet].description}
                      </p>
                      <Button
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                      >
                        Watch Full Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>















      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: {contactInfo.email}</p>
                <p>Phone: {contactInfo.phone}</p>
                <p>Address: {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="/speakers" className="block text-muted-foreground hover:text-primary transition-colors">Speakers</a>
                <a href="/calendar" className="block text-muted-foreground hover:text-primary transition-colors">Calendar</a>
                <a href="/register" className="block text-muted-foreground hover:text-primary transition-colors">Register</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Twitter: {contactInfo.social.twitter}</p>
                <p>LinkedIn: {contactInfo.social.linkedin}</p>
                <p>YouTube: {contactInfo.social.youtube}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 IonCure Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
