import heroPhotoStudy from '@/design-system/images/hero/photo-1.jpg'
import heroPhotoOffice from '@/design-system/images/hero/photo-2.jpg'
import heroPhotoCampus from '@/design-system/images/hero/photo-3.jpg'

export const hero = {
  /** Rendered as one H1; `highlight` is set in brand colour. */
  title: { lead: 'Learn CMA USA from Kerala’s Most Trusted Institute with ', highlight: 'up to 100% Scholarship' },
  description: 'Become a globally recognised Certified Management Accountant and build a finance career anywhere in the world.',
  keyPoints: ['Only 2 exams', 'Complete in 1 Year', 'Offline, online (hybrid), live and recorded classes'],
}

export const stats = [
  { value: '5,000+', label: 'Students' },
  { value: '2,200+', label: 'Placed in MNCs' },
  { value: '3,600+', label: 'Alumni' },
]

/** Decorative hero photos scattered around the apply panel; `alt` is empty by design. */
export const heroPhotos = [
  { src: heroPhotoStudy, alt: '' },
  { src: heroPhotoOffice, alt: '' },
  { src: heroPhotoCampus, alt: '' },
]
