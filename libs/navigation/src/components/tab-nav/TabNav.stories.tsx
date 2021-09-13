import { Story, Meta } from "@storybook/react"
import { TabNav, TabNavProps } from "./TabNav"
import { navigation } from "../../navigation"

export default {
  component: TabNav,
  title: "TabNav"
} as Meta

const Template: Story<TabNavProps> = (args) => <TabNav {...args} />

export const Primary = Template.bind({ routes: navigation.primary })
Primary.args = {
  activeRoute: "/home"
}
