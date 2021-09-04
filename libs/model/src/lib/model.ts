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
import { SocialLink } from ".."
import { Feature } from "./types"

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

export const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "6 min"
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "4 min"
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "11 min"
  }
]

export const user = {
  name: "Guest",
  email: "guest@watheia.app",
  imageUrl: "https://cdn.watheia.org/assets/icon.png"
}

export const userNavigation = [
  { name: "Account", href: "/account" },
  { name: "Profile", href: "/profile" },
  { name: "Sign in", href: "/signin" }
]

export const navigation = [
  { name: "Corporate", href: "/corporate", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Support", href: "/support", current: false }
]

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

// export const events: Activity[] = [
//   {
//     id: 1,
//     type: "comment",
//     person: { name: "Eduardo Benz", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
//     date: "6d ago"
//   },
//   {
//     id: 2,
//     type: "assignment",
//     person: { name: "Hilary Mahy", href: "#" },
//     assigned: { name: "Kristin Watson", href: "#" },
//     date: "2d ago"
//   },
//   {
//     id: 3,
//     type: "tags",
//     person: { name: "Hilary Mahy", href: "#" },
//     tags: [
//       { name: "Bug", href: "#", color: "bg-rose-500" },
//       { name: "Accessibility", href: "#", color: "bg-indigo-500" }
//     ],
//     date: "6h ago"
//   },
//   {
//     id: 4,
//     type: "comment",
//     person: { name: "Jason Meyers", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
//     date: "2h ago"
//   }
// ]

// export const blogPosts: Post[] = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     date: "Mar 16, 2021",
//     datetime: "2021-03-16",
//     category: { name: "Article", href: "/2021-03-16/" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
//     author: {
//       name: "Roel Aufderehar",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#"
//     },
//     readingLength: "6 min"
//   },
//   {
//     id: 2,
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     date: "Mar 10, 2021",
//     datetime: "2021-03-10",
//     category: { name: "Video", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
//     author: {
//       name: "Brenna Goyette",
//       imageUrl:
//         "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#"
//     },
//     readingLength: "4 min"
//   },
//   {
//     id: 3,
//     title: "Improve your customer experience",
//     href: "#",
//     date: "Feb 12, 2021",
//     datetime: "2021-02-12",
//     category: { name: "Case Study", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
//     author: {
//       name: "Daniela Metz",
//       imageUrl:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#"
//     },
//     readingLength: "11 min"
//   }
// ]

// export const principal = {
//   name: "Chelsea Hagon",
//   email: "chelseahagon@example.com",
//   role: "Human Resources Manager",
//   imageUrl:
//     "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// }

// export const userNavigation: NavigationZone[] = [
//   { name: "Your Profile", href: "/user/profile" },
//   { name: "Settings", href: "/user/settings" },
//   { name: "Sign out", href: "/user/logout" }
// ]

// export const stats: Sample[] = [
//   { label: "Vacation days left", value: 12 },
//   { label: "Sick days left", value: 4 },
//   { label: "Personal days left", value: 2 }
// ]

// export const actions: Action[] = [
//   {
//     icon: ClockIcon,
//     name: "Tasks",
//     href: "/model/task",
//     iconForeground: "text-teal-700",
//     iconBackground: "bg-teal-50"
//   },
//   {
//     icon: BadgeCheckIcon,
//     name: "Events",
//     href: "/model/log",
//     iconForeground: "text-purple-700",
//     iconBackground: "bg-purple-50"
//   },
//   {
//     icon: UsersIcon,
//     name: "Schedule a one-on-one",
//     href: "/model/user",
//     iconForeground: "text-sky-700",
//     iconBackground: "bg-sky-50"
//   },
//   {
//     icon: CashIcon,
//     name: "Budget",
//     href: "/model/budget",
//     iconForeground: "text-yellow-700",
//     iconBackground: "bg-yellow-50"
//   },
//   {
//     icon: ReceiptRefundIcon,
//     name: "Ledger",
//     href: "/model/ledger",
//     iconForeground: "text-rose-700",
//     iconBackground: "bg-rose-50"
//   },
//   {
//     icon: AcademicCapIcon,
//     name: "Training",
//     href: "/model/builder",
//     iconForeground: "text-indigo-700",
//     iconBackground: "bg-indigo-50"
//   }
// ]

// export const onlineUsers: Person[] = [
//   {
//     uuid: "000001",
//     name: "Aaron R Miller",
//     handle: "amiller",
//     imageUrl:
//       "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     href: "#"
//   },
//   {
//     uuid: "000002",
//     name: "Patrick S. Stevenso",
//     handle: "floydmiles",
//     imageUrl:
//       "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     href: "#"
//   },
//   {
//     uuid: "000003",
//     name: "Patti A. Scott",
//     handle: "pscott",
//     imageUrl:
//       "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     href: "#"
//   },
//   {
//     uuid: "000004",
//     name: "Sean Stev",
//     handle: "kristinwatson",
//     imageUrl:
//       "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     href: "#"
//   }
// ]

// export const announcements: Announcement[] = [
//   {
//     id: 1,
//     title: "Office closed on July 2nd",
//     href: "#",
//     preview:
//       "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores."
//   },
//   {
//     id: 2,
//     title: "New password policy",
//     href: "#",
//     preview:
//       "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia."
//   },
//   {
//     id: 3,
//     title: "Office closed on July 2nd",
//     href: "#",
//     preview:
//       "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi."
//   }
// ]
