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
import { Stat, Feature, Post } from "./types"

export const stats: Stat[] = [
  { label: "Founded", value: "2020" },
  { label: "Employees", value: "3" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$15M" }
]

export const features: Feature[] = [
  {
    id: 0,
    name: "Infrastructure as Code",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudUploadIcon
  },
  {
    id: 1,
    name: "SSL Certificates",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon
  },
  {
    id: 2,
    name: "Simple Queues",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: RefreshIcon
  },
  {
    id: 3,
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon
  },
  {
    id: 4,
    name: "Powerful API",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon
  },
  {
    id: 5,
    name: "Database Backups",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon
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

export const posts: Post[] = [
  {
    id: 1000,
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#", color: "bg-regal-100 text-regal-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2021",
    datetime: "2021-03-16",
    author: {
      name: "Aaron R Miller",
      href: "/profiles/amiller",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "6 min"
  },
  {
    id: 2000,
    title: "How to use search engine optimization to drive sales",
    href: "/blog/how-to-use-search-engine-optimization",
    category: { name: "Video", href: "#", color: "bg-mulberry-100 text-mulberry-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2021",
    datetime: "2021-03-10",
    author: {
      name: "Patti A. Scott",
      href: "/profiles/pscott",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "4 min"
  },
  {
    id: 3000,
    title: "Improve your customer experience",
    href: "/blog/improve-your-customer-experience",
    category: { name: "Case Study", href: "#", color: "bg-aqua-100 text-aqua-800" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2021",
    datetime: "2021-02-12",
    author: {
      name: "Pattrick S. Stevenson",
      href: "/profiles/pstevenson",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    readingTime: "11 min"
  }
]
