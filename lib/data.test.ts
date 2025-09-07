// Simple test to verify data functions work correctly
import { 
  getConferenceStats, 
  getTimeUntilConference, 
  getUpcomingDeadlines,
  getRegistrationStatus,
  getFeaturedSpeakers,
  speakers,
  conferenceDays,
  testimonials,
  videoSnippets
} from './data'

// Test function to verify data integrity
export const testDataIntegrity = () => {
  const stats = getConferenceStats()
  const timeData = getTimeUntilConference()
  const deadlines = getUpcomingDeadlines()
  const registration = getRegistrationStatus()
  const featured = getFeaturedSpeakers()

  console.log('=== Data Integrity Test Results ===')
  console.log('Conference Stats:', stats)
  console.log('Time Until Conference:', timeData)
  console.log('Upcoming Deadlines:', deadlines.length)
  console.log('Registration Status:', registration)
  console.log('Featured Speakers:', featured.length)
  console.log('Total Speakers:', speakers.length)
  console.log('Total Conference Days:', conferenceDays.length)
  console.log('Total Testimonials:', testimonials.length)
  console.log('Total Videos:', videoSnippets.length)
  
  // Verify all speakers have required fields
  const speakerErrors = speakers.filter(s => !s.id || !s.name || !s.title || !s.bio || !s.image || !s.day)
  if (speakerErrors.length > 0) {
    console.error('Speaker data errors:', speakerErrors)
  } else {
    console.log('✅ All speakers have required fields')
  }

  // Verify all conference days have sessions
  const dayErrors = conferenceDays.filter(d => !d.sessions || d.sessions.length === 0)
  if (dayErrors.length > 0) {
    console.error('Conference day errors:', dayErrors)
  } else {
    console.log('✅ All conference days have sessions')
  }

  return {
    success: speakerErrors.length === 0 && dayErrors.length === 0,
    stats,
    timeData,
    deadlines: deadlines.length,
    registration,
    featured: featured.length
  }
}

// Export for use in development
if (typeof window !== 'undefined') {
  (window as any).testDataIntegrity = testDataIntegrity
}
