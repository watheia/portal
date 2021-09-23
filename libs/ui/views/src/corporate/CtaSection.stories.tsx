import { Story, Meta } from "@storybook/react"
import { CtaSection } from "./CtaSection"

export default {
  component: CtaSection,
  title: "CtaSection"
} as Meta

const Template: Story<> = (args) => <CtaSection {...args} />

export const Primary = Template.bind({})
Primary.args = {}
