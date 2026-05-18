import { HeroSection } from '@/components/HeroSection'
import { CategoriesSection } from '@/components/CategoriesSection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { BrandBanner } from '@/components/BrandBanner'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandBanner />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
