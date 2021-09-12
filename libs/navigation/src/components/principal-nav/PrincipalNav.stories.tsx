import { Story, Meta } from "@storybook/react"
import { PrincipalNav, PrincipalNavProps } from "./PrincipalNav"

export default {
  component: PrincipalNav,
  title: "PrincipalNav"
} as Meta

const Template: Story<PrincipalNavProps> = (args) => <PrincipalNav {...args} />

export const Primary = Template.bind({})
Primary.args = {}
