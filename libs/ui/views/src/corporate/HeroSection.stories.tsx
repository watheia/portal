import { Story, Meta } from "@storybook/react"
import { HeroSection } from "./HeroSection"

export default {
  component: HeroSection,
  title: "HeroSection"
} as Meta

const Template: Story<> = (args) => <HeroSection {...args} />

export const Primary = Template.bind({})
Primary.args = {}
