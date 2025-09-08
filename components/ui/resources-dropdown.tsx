"use client"

import * as React from "react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ResourcesDropdownProps {
  className?: string
}

const resourceItems = [
  { name: "Publications", href: "/resources/publications" },
  { name: "Research Papers", href: "/resources/research-papers" },
  { name: "Presentations", href: "/resources/presentations" },
  { name: "Media", href: "/resources/media" },
]

export function ResourcesDropdown({ className }: ResourcesDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1 px-2 py-1 h-auto">
          Resources
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {resourceItems.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link href={item.href} className="w-full cursor-pointer">
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}