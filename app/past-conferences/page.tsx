"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { contactInfo } from "@/lib/data"
import { 
  getAvailableMonthsYears
} from "@/lib/past-conferences-data"

export default function PastConferencesPage() {
  const availableMonthsYears = getAvailableMonthsYears()

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
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    item.id === "/past-conferences" ? "text-primary font-semibold" : "text-muted-foreground"
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
      <section className="pt-24 py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Past Conferences
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive archive of past conferences. 
              Watch recordings, review presentations, and discover insights from leading researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Month/Year Photo Panels */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Month & Year</h2>
            <p className="text-lg text-muted-foreground">
              Select a month and year to explore conferences from that period
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {availableMonthsYears.map((item, index) => (
              <a
                key={`${item.year}-${item.month}`}
                href={`/past-conferences/${item.year}/${encodeURIComponent(item.month)}`}
                className="block"
              >
                <Card
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-md"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.imageUrl || "/conference-networking-background.png"}
                      alt={`${item.month} ${item.year} Conferences`}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.month} {item.year}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.count} Conference{item.count !== 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
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
