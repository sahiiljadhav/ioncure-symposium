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
                  className={`text-base font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
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

      <section className="pt-24 py-20 bg-organic-pattern">
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
                    <div className="text-base text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Leadership & Advisors Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leadership & Advisors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dr. Sukant Khurana */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="/team-images/sukant-khurana.jpg" 
                    alt="Dr. Sukant Khurana" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Dr. Sukant Khurana</h3>
                    <p className="text-base text-primary mb-2">Molecular Biologist</p>
                    <p className="text-base text-muted-foreground mb-3">
                      Multidisciplinary researcher and entrepreneur. 15+ years of research PhD in neuroscience from University of Notre Dame. Postdoctoral work at Cold Spring Harbor Laboratory. Founded multiple "health" startups, taught briefly, ventures at IonCure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                      </Button>
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://profile.com" target="_blank">Profile</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Ravi C. Nayar */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Dr. Ravi C. Nayar</h3>
                    <p className="text-base text-primary mb-2">Senior Advisor</p>
                    <p className="text-base text-muted-foreground mb-3">
                      ENT specialist with leadership roles at St. John's Medical College and HCG Cancer center. Publications on ResearchGate. Extensive clinical, startup, and academic consulting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prof. Alfredo Ghezzi */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="/team-images/alfredo-ghezzi.jpg" 
                    alt="Prof. Alfredo Ghezzi" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Prof. Alfredo Ghezzi</h3>
                    <p className="text-base text-primary mb-2">Molecular Biologist</p>
                    <p className="text-base text-muted-foreground mb-3">
                      PhD at Boston University, postdoc at Brandeis & MIT. Advisor focused on neurobiological mechanisms of behavior, drug abuse, neuroadaptation, and gene expression.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://profile.com" target="_blank">Profile</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Brooks Robinson */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="/team-images/brooks-robinson.jpg" 
                    alt="Dr. Brooks Robinson" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Dr. Brooks Robinson</h3>
                    <p className="text-base text-primary mb-2">Neuroscientist, Research Assistant Professor (PNIRS)</p>
                    <p className="text-base text-muted-foreground mb-3">
                      PhD at Boston University working alcohol-related behavior and epigenetics, research on effects of opioids and psychostimulants on neurons and stability.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://profile.com" target="_blank">Profile</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Raamesh Gowri Raghavan */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Raamesh Gowri Raghavan</h3>
                    <p className="text-base text-primary mb-2">Director</p>
                    <p className="text-base text-muted-foreground mb-3">
                      15+ years of digital marketing, built academic programming at Edex Centre Thapar. Key expertise in bioinformatics and genomics, multilingual.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extended Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Extended Team</h2>
          </div>
          
          <p className="text-base text-muted-foreground">
            Other senior team members—Dr. Kartik, Dr. Jamal Hasan, Mr. Anil Gupta, and Ms. Shikha Dutta—enhance innovation, research excellence, and impact across our initiatives.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-2 text-base text-muted-foreground">
                <p>Email: {contactInfo.email}</p>
                <p>Phone: {contactInfo.phone}</p>
                <p>Address: {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/" className="block text-base text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="/about" className="block text-base text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="/speakers" className="block text-base text-muted-foreground hover:text-primary transition-colors">Speakers</a>
                <a href="/timeline" className="block text-base text-muted-foreground hover:text-primary transition-colors">Timeline</a>
                <a href="/calendar" className="block text-base text-muted-foreground hover:text-primary transition-colors">Calendar</a>
                <a href="/past-conferences" className="block text-base text-muted-foreground hover:text-primary transition-colors">Past Conferences</a>
                <a href="/contact" className="block text-base text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="space-y-2 text-base text-muted-foreground">
                <p>Twitter: {contactInfo.social.twitter}</p>
                <p>LinkedIn: {contactInfo.social.linkedin}</p>
                <p>YouTube: {contactInfo.social.youtube}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-base text-muted-foreground">
            <p>&copy; 2025 IonCure Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
