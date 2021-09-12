import { Story, Meta } from "@storybook/react"
import { TabNav, TabNavProps } from "./TabNav"

export default {
  component: TabNav,
  title: "TabNav"
} as Meta

const Template: Story<TabNavProps> = (args) => <TabNav {...args} />

export const Primary = Template.bind({})
Primary.args = {}
