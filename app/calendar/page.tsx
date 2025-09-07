"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { 
  speakers, 
  conferenceDays, 
  conferenceInfo, 
  contactInfo,
  getSpeakersForDay 
} from "@/lib/data"

export default function CalendarPage() {
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
          className={`h-24 p-2 border border-border text-sm ${
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
                  {speakersForDay.slice(0, 3).map((speaker, idx) => (
                    <img
                      key={idx}
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-4 h-4 rounded-full border border-background object-cover"
                      title={speaker.name}
                    />
                  ))}
                  {speakersForDay.length > 3 && (
                    <div className="w-4 h-4 rounded-full bg-muted border border-background flex items-center justify-center">
                      <span className="text-xs font-medium">+{speakersForDay.length - 3}</span>
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
                    item.id === "/calendar" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conference Calendar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View the conference dates and see which speakers will be presenting each day
            </p>
          </div>

          <Card className="max-w-4xl mx-auto card-enhanced">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <CardTitle className="text-2xl font-bold">
                  {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="h-8 flex items-center justify-center font-semibold text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

              <div className="mt-8 p-4 bg-gradient-mesh rounded-lg border border-primary/10">
                <h3 className="font-semibold text-foreground mb-4">Conference Days</h3>
                <div className="grid md:grid-cols-3 gap-4">
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
