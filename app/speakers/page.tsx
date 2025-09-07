"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { speakers, contactInfo } from "@/lib/data"

export default function SpeakersPage() {

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
            <div className="flex space-x-4 md:space-x-8">
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
                    item.id === "/speakers" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Esteemed Speakers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from the world's leading experts in ion channel research and therapeutics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card
                key={index}
                className="group card-enhanced hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 ring-2 ring-primary/20">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{speaker.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{speaker.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{speaker.bio}</p>
                </CardContent>
              </Card>
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
                <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
                <a href="/past-conferences" className="block text-muted-foreground hover:text-primary transition-colors">Past Conferences</a>
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
