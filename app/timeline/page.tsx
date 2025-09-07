"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Calendar, ChevronRight, ChevronLeft } from "lucide-react"
import { 
  conferenceDays, 
  conferenceInfo, 
  contactInfo,
  getSpeakersForDay 
} from "@/lib/data"

export default function TimelinePage() {
  const [selectedDay, setSelectedDay] = useState(26)

  const currentDay = conferenceDays.find(day => day.day === selectedDay)

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
                    item.id === "/timeline" ? "text-primary font-semibold" : "text-muted-foreground"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Conference Timeline</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the complete schedule of the IonCure Rx Conference 2025. 
              From discovery to clinic, each day brings unique insights and opportunities for collaboration.
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {conferenceDays.map((day) => (
                <Button
                  key={day.day}
                  variant={selectedDay === day.day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-6 py-3 ${
                    selectedDay === day.day 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-transparent hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Day {day.day}
                </Button>
              ))}
            </div>
          </div>

          {/* Selected Day Details */}
          {currentDay && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Day Overview */}
              <div className="lg:col-span-1">
                <Card className="card-enhanced sticky top-24">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 border border-primary rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{currentDay.title}</CardTitle>
                        <p className="text-muted-foreground">{currentDay.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {currentDay.theme} Focus
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{currentDay.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Total Sessions</p>
                          <p className="text-sm text-muted-foreground">{currentDay.sessions.length} sessions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Speakers</p>
                          <p className="text-sm text-muted-foreground">{getSpeakersForDay(currentDay.day).length} speakers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">{conferenceInfo.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sessions Timeline */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Session Schedule</h2>
                  
                  {currentDay.sessions.map((session, index) => (
                    <Card key={session.id} className="card-enhanced">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge 
                                variant={
                                  session.type === 'keynote' ? 'default' :
                                  session.type === 'panel' ? 'secondary' :
                                  session.type === 'workshop' ? 'outline' : 'default'
                                }
                                className="text-xs"
                              >
                                {session.type.toUpperCase()}
                              </Badge>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {session.time} ({session.duration})
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-foreground mb-2">{session.title}</h3>
                            <p className="text-muted-foreground mb-4">{session.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="font-medium">{session.speaker}</span>
                              </div>
                              {session.room && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span>{session.room}</span>
                                </div>
                              )}
                              {session.maxAttendees && (
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-primary" />
                                  <span>Max {session.maxAttendees} attendees</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Conference Overview */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Conference Overview</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join us for three days of cutting-edge research, networking, and collaboration in ion channel therapeutics.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">3 Days</h3>
                    <p className="text-muted-foreground">October 26-28, 2025</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">500+ Attendees</h3>
                    <p className="text-muted-foreground">Researchers, clinicians, and industry professionals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">15+ Sessions</h3>
                    <p className="text-muted-foreground">Keynotes, panels, workshops, and presentations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
