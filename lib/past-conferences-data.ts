export interface PastConference {
  id: number
  name: string
  date: string
  location: string
  attendees: number
  description: string
  youtubeUrl: string
  topics: string[]
  speakers: number
  month: string
  year: string
  imageUrl?: string
}

export const pastConferencesData: Record<string, Record<string, PastConference[]>> = {
  "2024": {
    "October": [
      {
        id: 1,
        name: "Ion Channel Therapeutics Summit 2024",
        date: "October 15-17, 2024",
        location: "Boston, MA",
        attendees: 450,
        description: "Exploring the latest breakthroughs in ion channel research and therapeutic applications.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Ion Channels", "Therapeutics", "Drug Discovery"],
        speakers: 25,
        month: "October",
        year: "2024",
        imageUrl: "/conference-networking-background.png"
      },
      {
        id: 2,
        name: "Molecular Biology & Drug Development Conference",
        date: "October 8-10, 2024",
        location: "San Francisco, CA",
        attendees: 320,
        description: "Advancing molecular biology research for innovative drug development strategies.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Molecular Biology", "Drug Development", "Biotechnology"],
        speakers: 18,
        month: "October",
        year: "2024",
        imageUrl: "/molecular-structure-background.png"
      },
      {
        id: 3,
        name: "Neuroscience Research Symposium",
        date: "October 22-24, 2024",
        location: "Chicago, IL",
        attendees: 280,
        description: "Cutting-edge neuroscience research and clinical applications.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Neuroscience", "Clinical Research", "Brain Health"],
        speakers: 22,
        month: "October",
        year: "2024",
        imageUrl: "/biotech-lab-background.png"
      },
      {
        id: 4,
        name: "Biotechnology Innovation Forum",
        date: "October 5-7, 2024",
        location: "Seattle, WA",
        attendees: 380,
        description: "Innovation in biotechnology and its impact on healthcare solutions.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Biotechnology", "Innovation", "Healthcare"],
        speakers: 20,
        month: "October",
        year: "2024",
        imageUrl: "/emerald-gradient-bg.png"
      },
      {
        id: 5,
        name: "Pharmacology & Therapeutics Conference",
        date: "October 12-14, 2024",
        location: "Austin, TX",
        attendees: 290,
        description: "Latest developments in pharmacology and therapeutic interventions.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Pharmacology", "Therapeutics", "Clinical Trials"],
        speakers: 16,
        month: "October",
        year: "2024",
        imageUrl: "/conference-networking-background.png"
      }
    ],
    "September": [
      {
        id: 6,
        name: "Cancer Research & Treatment Symposium",
        date: "September 15-17, 2024",
        location: "Phoenix, AZ",
        attendees: 420,
        description: "Advances in cancer research and treatment methodologies.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Cancer Research", "Treatment", "Oncology"],
        speakers: 28,
        month: "September",
        year: "2024",
        imageUrl: "/molecular-structure-background.png"
      },
      {
        id: 7,
        name: "Immunology & Infectious Diseases Forum",
        date: "September 22-24, 2024",
        location: "Portland, OR",
        attendees: 310,
        description: "Understanding immunity and combating infectious diseases.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Immunology", "Infectious Diseases", "Public Health"],
        speakers: 21,
        month: "September",
        year: "2024",
        imageUrl: "/biotech-lab-background.png"
      }
    ],
    "August": [
      {
        id: 8,
        name: "Genomics & Precision Medicine Summit",
        date: "August 10-12, 2024",
        location: "Nashville, TN",
        attendees: 360,
        description: "Genomics research and its role in precision medicine.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Genomics", "Precision Medicine", "Personalized Healthcare"],
        speakers: 26,
        month: "August",
        year: "2024",
        imageUrl: "/emerald-gradient-bg.png"
      }
    ]
  },
  "2023": {
    "December": [
      {
        id: 9,
        name: "Stem Cell Research Conference",
        date: "December 5-7, 2023",
        location: "Las Vegas, NV",
        attendees: 270,
        description: "Breakthroughs in stem cell research and regenerative medicine.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Stem Cells", "Regenerative Medicine", "Cell Therapy"],
        speakers: 17,
        month: "December",
        year: "2023",
        imageUrl: "/conference-networking-background.png"
      }
    ],
    "November": [
      {
        id: 10,
        name: "Digital Health & AI in Medicine",
        date: "November 15-17, 2023",
        location: "Atlanta, GA",
        attendees: 400,
        description: "The intersection of artificial intelligence and healthcare.",
        youtubeUrl: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
        topics: ["Digital Health", "AI", "Healthcare Technology"],
        speakers: 23,
        month: "November",
        year: "2023",
        imageUrl: "/molecular-structure-background.png"
      }
    ]
  }
}

export const getAvailableMonthsYears = () => {
  const monthsYears: Array<{ month: string; year: string; count: number; imageUrl?: string }> = []
  
  Object.entries(pastConferencesData).forEach(([year, months]) => {
    Object.entries(months).forEach(([month, conferences]) => {
      monthsYears.push({
        month,
        year,
        count: conferences.length,
        imageUrl: conferences[0]?.imageUrl
      })
    })
  })
  
  return monthsYears.sort((a, b) => {
    if (a.year !== b.year) {
      return parseInt(b.year) - parseInt(a.year)
    }
    const monthOrder = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    return monthOrder.indexOf(b.month) - monthOrder.indexOf(a.month)
  })
}

export const getConferencesForMonthYear = (month: string, year: string): PastConference[] => {
  return pastConferencesData[year]?.[month] || []
}
