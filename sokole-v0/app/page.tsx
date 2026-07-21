import { AnnouncementBar } from '@/components/announcement-bar'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EditorialStatement } from '@/components/editorial-statement'
import { VelvetShowcase } from '@/components/velvet-showcase'
import { NotesSection } from '@/components/notes-section'
import { StoryBand } from '@/components/story-band'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <EditorialStatement />
        <VelvetShowcase />
        <NotesSection />
        <StoryBand />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
