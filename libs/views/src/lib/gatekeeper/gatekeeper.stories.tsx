import { Story, Meta } from "@storybook/react"
import { Gatekeeper, GatekeeperProps } from "./gatekeeper"

export default {
  component: Gatekeeper,
  title: "Gatekeeper"
} as Meta

const Template: Story<GatekeeperProps> = (args) => <Gatekeeper {...args} />

export const Primary = Template.bind({})
Primary.args = {}
