export interface Speaker {
  id: string
  name: string
  title: string
  bio: string
  image: string
  day: number
  session?: string
  time?: string
  expertise?: string[]
  publications?: number
  patents?: number
}

export interface ConferenceDay {
  day: number
  date: string
  title: string
  description: string
  sessions: Session[]
  theme?: string
}

export interface Session {
  id: string
  title: string
  time: string
  duration: string
  speaker: string
  description: string
  type: 'keynote' | 'presentation' | 'panel' | 'workshop'
  room?: string
  maxAttendees?: number
}

export interface Testimonial {
  id: string
  name: string
  title: string
  content: string
  rating: number
  image: string
  year?: number
  institution?: string
}

export interface VideoSnippet {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  url?: string
  year?: number
  views?: number
}

export interface ConferenceInfo {
  title: string
  subtitle: string
  startDate: string
  endDate: string
  location: string
  timezone: string
  registrationDeadline: string
  cvDeadline: string
  maxAttendees?: number
  registrationFee?: string
  earlyBirdDeadline?: string
  earlyBirdFee?: string
}



// Conference Information
export const conferenceInfo: ConferenceInfo = {
  title: "IonCure Rx Conference 2025",
  subtitle: "Innovations in Ion Channel Therapeutics: From Discovery to Clinic",
  startDate: "2025-10-26T09:00:00",
  endDate: "2025-10-28T17:00:00",
  location: "Virtual Conference",
  timezone: "UTC",
  registrationDeadline: "2025-10-20T23:59:59",
  cvDeadline: "2025-08-30T23:59:59",
  maxAttendees: 500,
  registrationFee: "$299",
  earlyBirdDeadline: "2025-07-31T23:59:59",
  earlyBirdFee: "$199"
}

// Speakers Data - EASILY EDITABLE
export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Sarah Chen",
    title: "Professor of Molecular Biology, Stanford University",
    bio: "Leading expert in TRP channel mechanisms and their role in pain perception. Dr. Chen has published over 150 papers and holds 12 patents in ion channel therapeutics.",
    image: "/professional-woman-scientist-headshot.png",
    day: 26,
    session: "Opening Keynote: The Future of Ion Channel Therapeutics",
    time: "09:00-10:30",
    expertise: ["TRP Channels", "Pain Perception", "Drug Discovery"],
    publications: 150,
    patents: 12
  },
  {
    id: "speaker-2",
    name: "Dr. Michael Rodriguez",
    title: "Chief Scientific Officer, IonTech Pharmaceuticals",
    bio: "Pioneer in developing small molecule modulators for voltage-gated sodium channels. Dr. Rodriguez has led successful clinical trials for novel anti-epileptic drugs.",
    image: "/professional-man-scientist-headshot.png",
    day: 26,
    session: "Voltage-Gated Sodium Channels in Neurological Disorders",
    time: "11:00-12:30",
    expertise: ["Sodium Channels", "Epilepsy", "Clinical Trials"],
    publications: 89,
    patents: 8
  },
  {
    id: "speaker-3",
    name: "Dr. Emily Watson",
    title: "Research Director, National Institute of Health",
    bio: "Specialist in calcium channel regulation and its implications in cardiovascular disease. Dr. Watson's work has revolutionized our understanding of cardiac ion channels.",
    image: "/professional-woman-scientist-headshot.png",
    day: 27,
    session: "Calcium Channel Modulation in Cardiovascular Disease",
    time: "09:00-10:30",
    expertise: ["Calcium Channels", "Cardiovascular Disease", "Cardiac Physiology"],
    publications: 112,
    patents: 15
  },
  {
    id: "speaker-4",
    name: "Dr. James Kim",
    title: "Associate Professor, Harvard Medical School",
    bio: "Expert in potassium channel pharmacology and drug discovery. Dr. Kim's research focuses on developing targeted therapies for neurological disorders.",
    image: "/professional-man-scientist-headshot.png",
    day: 27,
    session: "Potassium Channel Pharmacology: New Therapeutic Targets",
    time: "11:00-12:30",
    expertise: ["Potassium Channels", "Neurological Disorders", "Pharmacology"],
    publications: 76,
    patents: 6
  },
  {
    id: "speaker-5",
    name: "Dr. Lisa Thompson",
    title: "Senior Scientist, Genentech",
    bio: "Leading researcher in ion channel screening technologies and high-throughput drug discovery. Dr. Thompson has developed innovative platforms for ion channel drug development.",
    image: "/professional-woman-scientist-headshot.png",
    day: 28,
    session: "High-Throughput Screening for Ion Channel Modulators",
    time: "09:00-10:30",
    expertise: ["High-Throughput Screening", "Drug Discovery", "Technology Platforms"],
    publications: 94,
    patents: 11
  },
  {
    id: "speaker-6",
    name: "Dr. Robert Johnson",
    title: "Professor Emeritus, Johns Hopkins University",
    bio: "Distinguished researcher with 40+ years in ion channel biophysics. Dr. Johnson's foundational work has shaped the field of ion channel research.",
    image: "/professional-man-scientist-headshot.png",
    day: 28,
    session: "Closing Keynote: The Evolution of Ion Channel Research",
    time: "15:30-17:00",
    expertise: ["Ion Channel Biophysics", "Historical Perspective", "Research Evolution"],
    publications: 203,
    patents: 23
  },
  {
    id: "speaker-7",
    name: "Dr. Maria Rodriguez",
    title: "Associate Professor, MIT",
    bio: "Pioneering researcher in ion channel computational modeling and AI-driven drug discovery.",
    image: "/professional-woman-scientist-headshot.png",
    day: 27,
    session: "AI-Driven Ion Channel Discovery",
    time: "16:00-17:30",
    expertise: ["Computational Biology", "AI/ML", "Drug Discovery"],
    publications: 67,
    patents: 5
  }
]

// Conference Days - EASILY EDITABLE
export const conferenceDays: ConferenceDay[] = [
  {
    day: 26,
    date: "October 26, 2025",
    title: "Day 1: Discovery and Mechanisms",
    description: "Explore fundamental discoveries in ion channel mechanisms and their role in disease.",
    theme: "Discovery",
    sessions: [
      {
        id: "session-1",
        title: "Opening Keynote: The Future of Ion Channel Therapeutics",
        time: "09:00-10:30",
        duration: "90 min",
        speaker: "Dr. Sarah Chen",
        description: "An overview of the latest breakthroughs in ion channel research and their clinical implications.",
        type: "keynote",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-2",
        title: "Voltage-Gated Sodium Channels in Neurological Disorders",
        time: "11:00-12:30",
        duration: "90 min",
        speaker: "Dr. Michael Rodriguez",
        description: "Understanding the role of sodium channels in epilepsy and other neurological conditions.",
        type: "presentation",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-3",
        title: "Panel Discussion: Drug Discovery Challenges",
        time: "14:00-15:30",
        duration: "90 min",
        speaker: "Multiple Speakers",
        description: "Industry experts discuss the challenges and opportunities in ion channel drug discovery.",
        type: "panel",
        room: "Main Auditorium",
        maxAttendees: 500
      }
    ]
  },
  {
    day: 27,
    date: "October 27, 2025",
    title: "Day 2: Translational Medicine",
    description: "Focus on translating ion channel discoveries into clinical applications.",
    theme: "Translation",
    sessions: [
      {
        id: "session-4",
        title: "Calcium Channel Modulation in Cardiovascular Disease",
        time: "09:00-10:30",
        duration: "90 min",
        speaker: "Dr. Emily Watson",
        description: "Latest advances in calcium channel therapeutics for heart disease.",
        type: "presentation",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-5",
        title: "Potassium Channel Pharmacology: New Therapeutic Targets",
        time: "11:00-12:30",
        duration: "90 min",
        speaker: "Dr. James Kim",
        description: "Exploring potassium channels as targets for new drug development.",
        type: "presentation",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-6",
        title: "Workshop: Clinical Trial Design",
        time: "14:00-15:30",
        duration: "90 min",
        speaker: "Multiple Speakers",
        description: "Interactive workshop on designing clinical trials for ion channel therapeutics.",
        type: "workshop",
        room: "Workshop Room A",
        maxAttendees: 50
      }
    ]
  },
  {
    day: 28,
    date: "October 28, 2025",
    title: "Day 3: Innovation and Future Directions",
    description: "Looking ahead to the future of ion channel therapeutics and emerging technologies.",
    theme: "Innovation",
    sessions: [
      {
        id: "session-7",
        title: "High-Throughput Screening for Ion Channel Modulators",
        time: "09:00-10:30",
        duration: "90 min",
        speaker: "Dr. Lisa Thompson",
        description: "Advanced screening technologies for discovering new ion channel modulators.",
        type: "presentation",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-8",
        title: "Emerging Technologies in Ion Channel Research",
        time: "11:00-12:30",
        duration: "90 min",
        speaker: "Multiple Speakers",
        description: "Cutting-edge technologies shaping the future of ion channel research.",
        type: "panel",
        room: "Main Auditorium",
        maxAttendees: 500
      },
      {
        id: "session-9",
        title: "Closing Keynote: The Evolution of Ion Channel Research",
        time: "15:30-17:00",
        duration: "90 min",
        speaker: "Dr. Robert Johnson",
        description: "Reflections on the past, present, and future of ion channel research.",
        type: "keynote",
        room: "Main Auditorium",
        maxAttendees: 500
      }
    ]
  }
]

// Testimonials - EASILY EDITABLE
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dr. Sangit Martinez",
    title: "Professor of Neuroscience, Yale University",
    content: "The IonCure Rx Conference consistently delivers cutting-edge insights that directly impact my research. The virtual format made it accessible to my entire team.",
    rating: 5,
    image: "/professional-woman-scientist-headshot.png",
    year: 2024,
    institution: "Yale University"
  },
  {
    id: "testimonial-2",
    name: "Dr. David Kim",
    title: "Chief Medical Officer, BioTech Innovations",
    content: "Outstanding speakers and invaluable networking opportunities. This conference has become essential for staying current with ion channel therapeutics.",
    rating: 5,
    image: "/professional-man-scientist-headshot.png",
    year: 2024,
    institution: "BioTech Innovations"
  },
  {
    id: "testimonial-3",
    name: "Dr. Sarah Thompson",
    title: "Research Director, Pharma Solutions Inc.",
    content: "The quality of presentations and the interactive Q&A sessions make this the premier event in our field. Highly recommend to all colleagues.",
    rating: 5,
    image: "/professional-woman-scientist-headshot.png",
    year: 2024,
    institution: "Pharma Solutions Inc."
  }
]

// Video Snippets - EASILY EDITABLE
export const videoSnippets: VideoSnippet[] = [
  {
    id: "video-1",
    title: "2024 Keynote Highlights",
    description: "Dr. Chen's groundbreaking presentation on TRP channel mechanisms",
    thumbnail: "/placeholder-bmcuw.png",
    duration: "3:45",
    url: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
    year: 2024,
    views: 1250
  },
  {
    id: "video-2",
    title: "Panel Discussion: Future of Ion Channels",
    description: "Leading experts discuss emerging therapeutic targets",
    thumbnail: "/placeholder-63aj6.png",
    duration: "5:20",
    url: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
    year: 2024,
    views: 890
  },
  {
    id: "video-3",
    title: "Research Spotlight: Breakthrough Discoveries",
    description: "Latest findings in calcium channel modulation",
    thumbnail: "/placeholder-ijhs1.png",
    duration: "4:15",
    url: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
    year: 2024,
    views: 1100
  },
  {
    id: "video-4",
    title: "Virtual Networking Success Stories",
    description: "How attendees connected and collaborated virtually",
    thumbnail: "/placeholder-sy9jt.png",
    duration: "2:30",
    url: "https://youtu.be/Nd94VVUy3vw?si=kq8sIZl2RYswjF92",
    year: 2024,
    views: 650
  }
]



// Contact Information - EASILY EDITABLE
export const contactInfo = {
  email: "info@ioncure-conference.com",
  phone: "+1 (555) 123-4567",
  address: "123 Science Blvd, Research Park, CA 90210",
  social: {
    twitter: "@IonCureConf",
    linkedin: "IonCure Conference",
    youtube: "IonCure Channel"
  }
}

// ============================================================================
// DATA MANAGEMENT FUNCTIONS - For easy updates and queries
// ============================================================================

// Speaker Management Functions
export const getSpeakersForDay = (day: number): Speaker[] => {
  return speakers.filter(speaker => speaker.day === day)
}

export const getSpeakerById = (id: string): Speaker | undefined => {
  return speakers.find(speaker => speaker.id === id)
}

export const getSpeakersByExpertise = (expertise: string): Speaker[] => {
  return speakers.filter(speaker => 
    speaker.expertise?.some(exp => exp.toLowerCase().includes(expertise.toLowerCase()))
  )
}



// Conference Day Management Functions
export const getConferenceDay = (day: number): ConferenceDay | undefined => {
  return conferenceDays.find(confDay => confDay.day === day)
}

export const getSessionsByType = (type: Session['type']): Session[] => {
  return conferenceDays.flatMap(day => 
    day.sessions.filter(session => session.type === type)
  )
}







// Conference Info Management Functions
export const getConferenceStats = () => {
  return {
    totalSpeakers: speakers.length,
    totalSessions: conferenceDays.reduce((acc, day) => acc + day.sessions.length, 0),
    totalDays: conferenceDays.length,
    totalTestimonials: testimonials.length,
    totalVideos: videoSnippets.length
  }
}

export const getUpcomingDeadlines = () => {
  const now = new Date()
  const deadlines = [
    {
      name: "Early Bird Registration",
      date: new Date(conferenceInfo.earlyBirdDeadline || conferenceInfo.registrationDeadline),
      fee: conferenceInfo.earlyBirdFee
    },
    {
      name: "CV Submission Deadline",
      date: new Date(conferenceInfo.cvDeadline),
      fee: null
    },
    {
      name: "Final Registration Deadline",
      date: new Date(conferenceInfo.registrationDeadline),
      fee: conferenceInfo.registrationFee
    }
  ]
  
  return deadlines.filter(deadline => deadline.date > now)
}

// Timer/Countdown Functions
export const getTimeUntilConference = () => {
  const now = new Date()
  const startDate = new Date(conferenceInfo.startDate)
  const endDate = new Date(conferenceInfo.endDate)
  
  if (now < startDate) {
    const diff = startDate.getTime() - now.getTime()
    return {
      status: "pre",
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    }
  } else if (now >= startDate && now <= endDate) {
    return { status: "live" }
  } else {
    return { status: "post" }
  }
}

// Additional Utility Functions
export const getCurrentConferenceDay = () => {
  const now = new Date()
  const startDate = new Date(conferenceInfo.startDate)
  const endDate = new Date(conferenceInfo.endDate)
  
  if (now < startDate) return null
  if (now > endDate) return null
  
  const dayDiff = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  return conferenceDays[dayDiff] || null
}

export const getNextSession = () => {
  const now = new Date()
  const currentDay = getCurrentConferenceDay()
  
  if (!currentDay) return null
  
  const currentTime = now.getHours() * 60 + now.getMinutes()
  
  for (const session of currentDay.sessions) {
    const [hours, minutes] = session.time.split(':').map(Number)
    const sessionTime = hours * 60 + minutes
    
    if (sessionTime > currentTime) {
      return session
    }
  }
  
  return null
}

export const getRegistrationStatus = () => {
  const now = new Date()
  const earlyBirdDeadline = new Date(conferenceInfo.earlyBirdDeadline || conferenceInfo.registrationDeadline)
  const registrationDeadline = new Date(conferenceInfo.registrationDeadline)
  
  if (now < earlyBirdDeadline) {
    return {
      status: "early_bird",
      message: "Early Bird Registration Open",
      fee: conferenceInfo.earlyBirdFee
    }
  } else if (now < registrationDeadline) {
    return {
      status: "regular",
      message: "Regular Registration Open",
      fee: conferenceInfo.registrationFee
    }
  } else {
    return {
      status: "closed",
      message: "Registration Closed",
      fee: null
    }
  }
}

export const getFeaturedSpeakers = (limit: number = 3) => {
  return speakers
    .sort((a, b) => (b.publications || 0) - (a.publications || 0))
    .slice(0, limit)
}

export const getSessionsByDay = (day: number) => {
  const conferenceDay = getConferenceDay(day)
  return conferenceDay?.sessions || []
}



// ============================================================================
// INSTRUCTIONS FOR UPDATING DATA:
// ============================================================================
/*
TO ADD A NEW SPEAKER:
1. Add a new object to the speakers array
2. Use a unique ID (e.g., "speaker-8")
3. Include all required fields: id, name, title, bio, image, day
4. Optional fields: session, time, expertise, publications, patents

TO REMOVE A SPEAKER:
1. Delete the speaker object from the speakers array
2. Update any sessions that reference this speaker

TO UPDATE CONFERENCE INFO:
1. Modify the conferenceInfo object
2. Update dates, fees, deadlines as needed

TO ADD NEW SESSIONS:
1. Add session objects to the appropriate day in conferenceDays
2. Use unique session IDs
3. Update speaker references if needed

TO UPDATE TESTIMONIALS:
1. Modify the testimonials array
2. Ensure rating is between 1-5
3. Include all required fields: id, name, title, content, rating, image

TO UPDATE VIDEO SNIPPETS:
1. Modify the videoSnippets array
2. Include all required fields: id, title, description, thumbnail, duration

TO UPDATE CONTACT INFO:
1. Modify the contactInfo object
2. Update email, phone, address, social media links

ALL CHANGES WILL AUTOMATICALLY REFLECT ON THE WEBSITE!
*/
