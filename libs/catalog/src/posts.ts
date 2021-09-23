import { Post } from "./types"

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
