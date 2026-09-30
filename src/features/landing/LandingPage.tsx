import { Hero } from './sections/Hero'
import { Overview } from './sections/Overview'
import { WhyCmaUsa } from './sections/WhyCmaUsa'
import { Included } from './sections/Included'
import { WhyTripleI } from './sections/WhyTripleI'
import { Careers } from './sections/Careers'
import { Testimonials } from './sections/Testimonials'
import { Faqs } from './sections/Faqs'
import { Footer } from './sections/Footer'
import { StickyCtaBar } from './sections/StickyCtaBar'
import { useEffect } from 'react'
import { startSmoothScroll } from '@/lib/smoothScroll'
import { ApplyModalProvider } from './ApplyModal'
import { StructuredData } from './StructuredData'

export function LandingPage() {
  useEffect(() => startSmoothScroll(), [])

  return (
    <ApplyModalProvider>
      <div className="cm-page">
        <main>
          <Hero />
          <Overview />
          <WhyCmaUsa />
          <Included />
          <WhyTripleI />
          <Careers />
          <Testimonials />
          <Faqs />
        </main>
        <Footer />
        <StickyCtaBar />
        <StructuredData />
      </div>
    </ApplyModalProvider>
  )
}
