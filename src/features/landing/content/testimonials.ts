import pooja from '@/design-system/images/testimonial-1.png'
import sheethal from '@/design-system/images/testimonial-2.png'

export interface Testimonial {
  id: string
  quote: string
  name: string
  result: string
  /** Still from the student's video testimonial. */
  image: string
  /** CSS object-position so the face stays in frame when the slide crops the still. */
  focus: string
}

export const testimonialsSection = {
  title: 'Hear from students who cleared CMA USA with Triple i',
}

export const testimonials: Testimonial[] = [
  {
    id: 'pooja-lakshmi',
    quote:
      'I have qualified for CMA USA Part 2, and I qualified in my first attempt itself. The faculty, especially Abdu Sir and Arshad Sir, have supported me tremendously. Everyone was very supportive, and that is the main reason I can stand here today.',
    name: 'Pooja Lakshmi',
    result: 'CMA USA Part 2, first attempt',
    image: pooja,
    focus: '62% 30%',
  },
  {
    id: 'sheethal-as',
    quote:
      'It was the first batch. The faculty were very supportive, and the classes were excellent. We also had mock exams, which really helped us prepare for the main exam. Thanks to that, I qualified for CMA USA Part 1 on my first attempt. Thank you, Triple i.',
    name: 'Sheethal AS',
    result: 'CMA USA Part 1, first attempt',
    image: sheethal,
    focus: '50% 30%',
  },
]
