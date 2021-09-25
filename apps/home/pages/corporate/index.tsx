import {
  HeroSection,
  ServerlessSection,
  FeaturesSection,
  TestimonialSection,
  StatsSection,
  CtaSection
} from "@watheia/app.ui.views"

const CorporateIndex = () => {
  console.log("Initializing app context...")
  return (
    <>
      <HeroSection />
      <ServerlessSection />
      <FeaturesSection />
      <TestimonialSection />
      <StatsSection />
      <CtaSection />
    </>
  )
}

export default CorporateIndex
