import {
  AnnotationIcon,
  CloudUploadIcon,
  CogIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  LockClosedIcon,
  MailIcon,
  RefreshIcon,
  ScaleIcon,
  ServerIcon,
  ShieldCheckIcon
} from "@heroicons/react/outline"
import { User, NavItem, Stat, Feature, SocialLink } from "./types"

export const user: User = {
  name: "Guest",
  email: "",
  imageUrl: "https://cdn.watheia.org/assets/icon.png"
}

export const navigation: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Support", href: "/support" }
]

export const userNavigation: NavItem[] = [
  { name: "Profile", href: "/user/profile", disabled: true },
  { name: "Account", href: "/user/account", disabled: true },
  { name: "Signin", href: "/signout" }
]

export const stats: Stat[] = [
  { label: "Founded", value: "2020" },
  { label: "Employees", value: "3" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$15M" }
]

export const features = [
  {
    name: "Push to Deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudUploadIcon
  },
  {
    name: "SSL Certificates",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon
  },
  {
    name: "Simple Queues",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: RefreshIcon
  },
  {
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon
  },
  {
    name: "Powerful API",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon
  },
  {
    name: "Database Backups",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon
  }
] as const

export const social: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/watheialabs",
    icon: "facebook"
  },
  {
    name: "Instagram",
    href: "#",
    icon: "instagram"
  },
  {
    name: "Twitter",
    href: "#",
    icon: "twitter"
  },
  {
    name: "GitHub",
    href: "https://github.com/watheia",
    icon: "github"
  }
]

export const solutions: Feature[] = [
  {
    id: 0,
    name: "Lean Strategy",
    description:
      "A lean strategy is about making a sustainable profit by eliminating waste through engaging employees in discovering deeper ways to think about their own jobs and smarter ways of working together.",
    icon: GlobeAltIcon
  },
  {
    id: 1,
    name: "Domain Driven Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon
  },
  {
    id: 2,
    name: "Behavior Driven Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon
  },
  {
    id: 3,
    name: "Systems Thinking",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon
  }
]

export const services: Feature[] = [
  {
    id: 1,
    name: "Engineering & Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon
  },
  {
    id: 2,
    name: "Product Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon
  },
  {
    id: 3,
    name: "Education & Training",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon
  }
]

export const communicationFeatures: Feature[] = [
  {
    id: 1,
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon
  },
  {
    id: 2,
    name: "Reminder emails",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: MailIcon
  }
]
