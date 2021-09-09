import CtaSection from "./components/CtaSection"
import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import ServerlessSection from "./components/ServerlessSection"
import TestimonialSection from "./components/TestimonialSection"
import { Layout } from "@watheia/layout"
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
      <CtaSection />
    </>
  )
}

export default Corporate
