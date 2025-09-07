"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"
import { Play, Calendar, MapPin, Users, ExternalLink, ArrowLeft } from "lucide-react"
import { contactInfo } from "@/lib/data"
import { getConferencesForMonthYear, type PastConference } from "@/lib/past-conferences-data"
import Link from "next/link"

interface MonthYearPageProps {
  params: Promise<{
    year: string
    month: string
  }>
}

export default function MonthYearPage({ params }: MonthYearPageProps) {
  const [selectedConference, setSelectedConference] = useState<PastConference | null>(null)
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [conferences, setConferences] = useState<PastConference[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const loadParams = async () => {
      try {
        const resolvedParams = await params
        const decodedMonth = decodeURIComponent(resolvedParams.month)
        const resolvedYear = resolvedParams.year
        
        setMonth(decodedMonth)
        setYear(resolvedYear)
        
        const conferencesData = getConferencesForMonthYear(decodedMonth, resolvedYear)
        setConferences(conferencesData)
        
        if (conferencesData.length > 0) {
          setSelectedConference(conferencesData[0])
        }
        
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading params:", error)
        setIsLoading(false)
      }
    }
    
    loadParams()
  }, [params])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">Loading conferences...</p>
        </div>
      </div>
    )
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
                  className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 text-muted-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Link 
                href="/past-conferences"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Past Conferences
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {month} {year} Conferences
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore all conferences from {month} {year}. 
              Watch recordings, review presentations, and discover insights from leading researchers.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{conferences.length} Conference{conferences.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conferences Grid */}
      {conferences.length > 0 ? (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Conferences List - Improved Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-6 border border-primary/10">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {month} {year}
                    </h2>
                    <p className="text-muted-foreground">
                      {conferences.length} Conference{conferences.length !== 1 ? 's' : ''} Available
                    </p>
                  </div>
                  
                  <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2">
                    {conferences.map((conference, index) => (
                      <Card
                        key={conference.id}
                        className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                          selectedConference?.id === conference.id
                            ? "border-primary shadow-lg bg-primary/5"
                            : "border-transparent hover:border-primary/30 hover:bg-primary/5"
                        }`}
                        onClick={() => setSelectedConference(conference)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {conference.name}
                              </h3>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4 text-primary" />
                                  <span>{conference.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span>{conference.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Users className="w-4 h-4 text-primary" />
                                  <span>{conference.attendees} attendees</span>
                                </div>
                              </div>
                            </div>
                            <div className="ml-3 flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <span className="text-primary font-bold text-sm">{index + 1}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {conference.speakers} speakers
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {conference.topics.slice(0, 3).map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {conference.topics.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{conference.topics.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Conference Details */}
              <div className="lg:col-span-2">
                {selectedConference && (
                  <Card className="card-enhanced">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground mb-2">
                            {selectedConference.name}
                          </CardTitle>
                          <CardDescription className="text-lg text-muted-foreground">
                            {selectedConference.description}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {selectedConference.speakers} Speakers
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Conference Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">Date</p>
                              <p className="text-muted-foreground">{selectedConference.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">Location</p>
                              <p className="text-muted-foreground">{selectedConference.location}</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">Attendees</p>
                              <p className="text-muted-foreground">{selectedConference.attendees} participants</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <ExternalLink className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">Speakers</p>
                              <p className="text-muted-foreground">{selectedConference.speakers} experts</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Topics */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Key Topics</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedConference.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-sm">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Video Section */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Conference Recording</h3>
                        <YouTubeEmbed
                          videoId="Nd94VVUy3vw"
                          title={`${selectedConference.name} - Conference Recording`}
                          className="mb-4"
                          autoplay={false}
                          muted={false}
                          loop={false}
                          controls={true}
                          aspectRatio="16:9"
                        />
                        <div className="text-center">
                          <Button
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            onClick={() => window.open(selectedConference.youtubeUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View on YouTube
                          </Button>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          onClick={() => window.open(selectedConference.youtubeUrl, '_blank')}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Recording
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(selectedConference.youtubeUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="card-enhanced">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No Conferences Found</h3>
                <p className="text-muted-foreground mb-6">
                  No conferences are available for {month} {year}. 
                  Please select a different month and year.
                </p>
                <Link href="/past-conferences">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Past Conferences
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

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
