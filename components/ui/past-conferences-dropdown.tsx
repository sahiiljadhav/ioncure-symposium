"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Calendar } from "lucide-react"

interface PastConferencesDropdownProps {
  onMonthYearSelect: (month: string, year: string) => void
  currentMonth?: string
  currentYear?: string
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const years = ["2024", "2023", "2022", "2021", "2020"]

export function PastConferencesDropdown({ 
  onMonthYearSelect, 
  currentMonth = "October", 
  currentYear = "2024" 
}: PastConferencesDropdownProps) {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const [selectedYear, setSelectedYear] = useState(currentYear)

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month)
    onMonthYearSelect(month, selectedYear)
  }

  const handleYearSelect = (year: string) => {
    setSelectedYear(year)
    onMonthYearSelect(selectedMonth, year)
  }

  return (
    <div className="flex gap-4 items-center">
      {/* Month Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {selectedMonth}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {months.map((month) => (
            <DropdownMenuItem
              key={month}
              onClick={() => handleMonthSelect(month)}
              className={selectedMonth === month ? "bg-primary/10" : ""}
            >
              {month}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Year Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {selectedYear}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          {years.map((year) => (
            <DropdownMenuItem
              key={year}
              onClick={() => handleYearSelect(year)}
              className={selectedYear === year ? "bg-primary/10" : ""}
            >
              {year}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
