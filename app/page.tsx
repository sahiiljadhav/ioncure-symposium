"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Play, Pause, ChevronLeft, ChevronRight, Mail, VolumeX, Volume2 } from "lucide-react"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"
import { 
  conferenceInfo, 
  testimonials, 
  videoSnippets, 
  contactInfo,
  getTimeUntilConference,
  getConferenceStats,
  getUpcomingDeadlines,
  speakers,
  getSpeakersForDay
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
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9)) // October 2025

  const conferenceDates = [26, 27, 28]

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }


  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const totalDays = 42 // 6 weeks * 7 days

    for (let i = 0; i < totalDays; i++) {
      const currentDay = new Date(startDate)
      currentDay.setDate(startDate.getDate() + i)
      const dayNumber = currentDay.getDate()
      const isCurrentMonth = currentDay.getMonth() === month
      const isConferenceDay = conferenceDates.includes(dayNumber) && isCurrentMonth
      const speakersForDay = isConferenceDay ? getSpeakersForDay(dayNumber) : []

      days.push(
        <div
          key={i}
          className={`h-20 p-2 border border-border text-sm ${
            isCurrentMonth ? "bg-background" : "bg-muted/30 text-muted-foreground"
          } ${isConferenceDay ? "bg-primary/5 border-primary/20" : ""}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={`font-medium ${isConferenceDay ? "text-primary font-bold" : ""}`}>
              {dayNumber}
            </span>
            {isConferenceDay && (
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            )}
          </div>
          {isConferenceDay && (
            <div className="space-y-1">
              <div className="text-xs font-medium text-primary">Conference Day</div>
              {speakersForDay.length > 0 && (
                <div className="flex -space-x-1">
                  {speakersForDay.slice(0, 2).map((speaker, idx) => (
                    <img
                      key={idx}
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-3 h-3 rounded-full border border-background object-cover"
                      title={speaker.name}
                    />
                  ))}
                  {speakersForDay.length > 2 && (
                    <div className="w-3 h-3 rounded-full bg-muted border border-background flex items-center justify-center">
                      <span className="text-xs font-medium">+{speakersForDay.length - 2}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>,
      )
    }

    return days
  }

  useEffect(() => {
    const updateEventStatus = () => {
      const timeData = getTimeUntilConference()
      setEventStatus(timeData.status as "pre" | "live" | "post")
      
      if (timeData.status === "pre" && "days" in timeData) {
        setTimeLeft({
          days: timeData.days || 0,
          hours: timeData.hours || 0,
          minutes: timeData.minutes || 0,
          seconds: timeData.seconds || 0
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
          action: () => (window.location.href = "https://forms.google.com/your-form-url"),
        }
      case "live":
        return {
          text: "Join the Livestream",
          action: () => (window.location.href = "https://forms.google.com/your-form-url"),
        }
      case "post":
        return {
          text: "Watch On-Demand",
          action: () => (window.location.href = "https://forms.google.com/your-form-url"),
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
              <img 
                src="/Logo_Ioncure-removebg-preview.png" 
                alt="IonCure Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-foreground">IonCure</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "/", label: "Home" },
                { id: "/about", label: "About" },
                { id: "/speakers", label: "Speakers" },
                { id: "/timeline", label: "Timeline" },
                { id: "/calendar", label: "Calendar" },
                { id: "/past-conferences", label: "Past Conferences" },
                { id: "/contact", label: "Contact" },
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
      <section id="home" className="pt-24 min-h-screen flex items-center bg-organic-pattern relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="text-left lg:col-span-7">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  {conferenceInfo.title}
                </span>
              </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium max-w-4xl leading-relaxed">
              {conferenceInfo.subtitle}
            </p>
                          <div className="flex flex-wrap items-start gap-4 mb-8 text-lg">
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
                <p className="text-lg text-foreground/80 mb-6 text-left">Conference starts in:</p>
                <div className="flex flex-wrap justify-start gap-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 w-20 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

              <div className="flex flex-col sm:flex-row gap-4 justify-start flex-wrap">
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
                  onClick={() => (window.location.href = "/timeline")}
                >
                  Timeline
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 bg-transparent flex items-center gap-2"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
              </div>
            </div>
            
            {/* Hero Video Section - 9:16 Format */}
            <div className="flex justify-center lg:justify-end lg:col-span-5">
              <div className="relative w-full max-w-sm">
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 p-2 h-full min-h-[500px] md:min-h-[600px]">
                  <YouTubeEmbed
                    videoId="Nd94VVUy3vw"
                    title="IonCure Conference Introduction"
                    className="h-full"
                    autoplay={true}
                    muted={true}
                    loop={true}
                    controls={false}
                    showMuteButton={false}
                    aspectRatio="9:16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conference Calendar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              View the conference dates and see which speakers will be presenting each day
            </p>
          </div>

          <Card className="max-w-4xl mx-auto card-enhanced">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center sm:text-left order-3 sm:order-2 w-full sm:w-auto">
                  {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                  className="flex items-center gap-2 order-2 sm:order-3"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4 overflow-x-auto">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="h-8 flex items-center justify-center font-semibold text-muted-foreground text-xs sm:text-sm">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 overflow-x-auto">{renderCalendar()}</div>

              <div className="mt-8 p-4 bg-gradient-mesh rounded-lg border border-primary/10">
                <h3 className="font-semibold text-foreground mb-4">Conference Days</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {conferenceDates.map((day, index) => (
                    <div key={day} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 border border-primary rounded flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{day}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Day {index + 1}</p>
                        <p className="text-sm text-muted-foreground">{getSpeakersForDay(day).length} speakers</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      

      {/* Conference Highlights Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conference Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore memorable moments and key insights from our previous conferences
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <CardContent className="p-4 sm:p-8">
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {videoSnippets[currentVideoSnippet].title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {videoSnippets[currentVideoSnippet].description}
                        </p>
                      </div>
                      <div className="flex justify-start">
                        <Button
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                          onClick={() => window.open(videoSnippets[currentVideoSnippet].url, '_blank')}
                        >
                          Watch on YouTube
                        </Button>
                      </div>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2 mb-6 md:mb-0">
                      <YouTubeEmbed
                        videoId="Nd94VVUy3vw"
                        title={videoSnippets[currentVideoSnippet].title}
                        className="w-full"
                        autoplay={false}
                        muted={false}
                        loop={false}
                        controls={true}
                        aspectRatio="16:9"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Attendees Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Hear from leading researchers and industry professionals who have attended our conferences
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="card-enhanced border-2 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-center justify-start mb-6">
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/40" />
                </div>

                <div className="text-left mb-6">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-start gap-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-start mt-6 gap-2">
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
















      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                <a href="/timeline" className="block text-muted-foreground hover:text-primary transition-colors">Timeline</a>
                <a href="/calendar" className="block text-muted-foreground hover:text-primary transition-colors">Calendar</a>
                <a href="/past-conferences" className="block text-muted-foreground hover:text-primary transition-colors">Past Conferences</a>
                <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
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
