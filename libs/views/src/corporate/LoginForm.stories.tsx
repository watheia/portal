import { Story, Meta } from "@storybook/react"
import { LoginForm } from "./LoginForm"

export default {
  component: LoginForm,
  title: "LoginForm"
} as Meta

const Template: Story<> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
