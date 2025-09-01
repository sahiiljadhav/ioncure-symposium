"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { contactInfo } from "@/lib/data"

export default function AboutPage() {
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
                    item.id === "/about" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-16 py-20 bg-organic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Pioneering the Future of Medicine</h2>
              <div className="relative group">
                <img
                  src="/placeholder-gbiey.png"
                  alt="Biotechnology Research"
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/10 rounded-xl"></div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join the world's leading researchers, clinicians, and industry pioneers as we explore the cutting-edge
                developments in ion channel therapeutics. This premier conference brings together the brightest minds to
                share breakthrough discoveries and clinical applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From fundamental research to translational medicine, our three-day program covers the entire spectrum of
                ion channel science. Discover how these molecular gatekeepers are revolutionizing treatments in
                oncology, neurology, and immunology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a researcher pushing the boundaries of science, a clinician seeking the latest
                therapeutic insights, or an industry leader driving innovation, this conference offers unparalleled
                networking and learning opportunities.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "500+", label: "Attendees" },
                  { number: "50+", label: "Speakers" },
                  { number: "25+", label: "Countries" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 card-enhanced rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
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
