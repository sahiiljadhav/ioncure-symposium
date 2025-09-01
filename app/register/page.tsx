"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { contactInfo } from "@/lib/data"

export default function RegisterPage() {
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
                    item.id === "/register" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-16 py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Register Your Interest</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us understand your educational background and interests to provide personalized recommendations
            </p>
          </div>

          <Card className="p-8 card-enhanced">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="education" className="text-sm font-medium text-foreground">
                  Current Education Level *
                </label>
                <select
                  id="education"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate Student</option>
                  <option value="graduate">Graduate Student</option>
                  <option value="postdoc">Postdoctoral Researcher</option>
                  <option value="phd">PhD Holder</option>
                  <option value="professional">Working Professional</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="domain" className="text-sm font-medium text-foreground">
                  Field of Study/Domain *
                </label>
                <select
                  id="domain"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                >
                  <option value="">Select your field</option>
                  <option value="biotechnology">Biotechnology</option>
                  <option value="biochemistry">Biochemistry</option>
                  <option value="molecular-biology">Molecular Biology</option>
                  <option value="pharmacology">Pharmacology</option>
                  <option value="neuroscience">Neuroscience</option>
                  <option value="medicine">Medicine</option>
                  <option value="chemistry">Chemistry</option>
                </select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
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
