import {
  HeroSection,
  ServerlessSection,
  FeaturesSection,
  TestimonialSection,
  StatsSection,
  CtaSection
} from "@watheia/view.corporate"

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
