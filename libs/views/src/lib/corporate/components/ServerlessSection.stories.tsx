import { Story, Meta } from "@storybook/react"
import { ServerlessSection } from "./ServerlessSection"

export default {
  component: ServerlessSection,
  title: "ServerlessSection"
} as Meta

const Template: Story<> = (args) => <ServerlessSection {...args} />

export const Primary = Template.bind({})
Primary.args = {}
