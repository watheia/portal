import { Story, Meta } from "@storybook/react"
import { FeaturesSection } from "./FeaturesSection"

export default {
  component: FeaturesSection,
  title: "FeaturesSection"
} as Meta

const Template: Story<> = (args) => <FeaturesSection {...args} />

export const Primary = Template.bind({})
Primary.args = {}
