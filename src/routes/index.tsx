import { Box } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { CtaCard } from "@/sections/landing-page/cta-card"
import { Desktop } from "@/sections/landing-page/desktop"
import { Features } from "@/sections/landing-page/features"
import { Footer } from "@/sections/landing-page/footer"
import { Header } from "@/sections/landing-page/header"
import { Hero } from "@/sections/landing-page/hero"
import { Pages } from "@/sections/landing-page/pages"
import { Pricing } from "@/sections/landing-page/pricing"
import { Testimonials } from "@/sections/landing-page/testimonials"

export const Route = createFileRoute("/")({
  component: LandingPage,
})

function LandingPage() {
  return (
    <Box pt="var(--mantine-header-height)">
      <Header />
      <Hero />
      <Desktop />
      <Features />
      <Pages />
      <Testimonials />
      <Pricing />
      <CtaCard />
      <Footer />
    </Box>
  )
}
