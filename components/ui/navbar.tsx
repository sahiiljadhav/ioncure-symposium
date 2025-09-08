"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// Resources dropdown removed as requested

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Speakers", href: "/speakers" },
  { name: "Timeline", href: "/timeline" },
  { name: "Calendar", href: "/calendar" },
  { name: "Past Conferences", href: "/past-conferences" },
  { name: "Contact", href: "/contact" },
]

// Resource items removed as they are no longer needed

export function Navbar({ className }: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav
      className={cn(
        "flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm sticky top-0 z-[100] w-full border-b",
        className
      )}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/Logo_Ioncure-removebg-preview.png"
            alt="IonCure Logo"
            className="h-8 w-auto"
          />
          {/* IonCure Symposium text removed as requested */}
        </Link>
      </div>

      {/* Mobile menu button - visible on small and medium screens */}
      <div className="block lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="default" size="sm" className="ml-2 bg-primary text-white hover:bg-primary/90">
              <Menu className="h-5 w-5 mr-1" />
              <span>Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-4 mt-6">
              <h2 className="text-xl font-bold text-primary mb-2">Navigation</h2>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Resources section removed as requested */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Desktop navigation - hidden on small and medium screens */}
      <div className="hidden lg:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}
        {/* Resources dropdown removed as requested */}
      </div>
    </nav>
  )
}