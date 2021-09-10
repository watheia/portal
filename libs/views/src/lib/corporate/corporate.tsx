import CtaSection from "./components/CtaSection"
import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import ServerlessSection from "./components/ServerlessSection"
import SocialProof from "./components/SocialProof"
import StatsSection from "./components/StatsSection"
import TestimonialSection from "./components/TestimonialSection"
import "./corporate.module.css"

/* eslint-disable-next-line */
export interface CorporateProps {}

const Corporate = (props: CorporateProps) => {
  return (
    <>
      <HeroSection />
      <ServerlessSection />
      <FeaturesSection />
      <TestimonialSection />
      {/* <SocialProof /> */}
      <StatsSection />
      <CtaSection />
    </>
  )
}

export default Corporate
