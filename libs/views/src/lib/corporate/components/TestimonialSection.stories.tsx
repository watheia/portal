import { Story, Meta } from "@storybook/react"
import { TestimonialSection } from "./TestimonialSection"

export default {
  component: TestimonialSection,
  title: "TestimonialSection"
} as Meta

const Template: Story<any> = (args) => <TestimonialSection {...args} />

export const Primary = Template.bind({})
Primary.args = {}
