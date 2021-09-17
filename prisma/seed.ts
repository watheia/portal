import { PrismaClient, Prisma, User } from "@prisma/client"
const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    username: "amiller",
    email: "amiller@watheia.org"
    // articles: {
    //   create: [
    //     {
    //       title: "Join the Prisma Slack",
    //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu tortor, mattis eu libero vel, ornare viverra diam. Sed vitae magna interdum, ornare velit sit amet, ultrices est. Aenean magna leo, congue eu erat quis, dapibus convallis mauris. Duis at cursus nisi. Phasellus ut posuere ante. Cras fermentum urna condimentum neque tempor tincidunt. Morbi consectetur nulla in urna vehicula vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    //       description: "Hello, World!",
    //       title: "First Post",
    //       tagList: ["test"]
    //     }
    //   ]
    // }
  },
  {
    username: "pstevenson",
    email: "pstevenson@watheia.org"
    // articles: {
    //   create: [
    //     {
    //       title: "Join the Prisma Slack",
    //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu tortor, mattis eu libero vel, ornare viverra diam. Sed vitae magna interdum, ornare velit sit amet, ultrices est. Aenean magna leo, congue eu erat quis, dapibus convallis mauris. Duis at cursus nisi. Phasellus ut posuere ante. Cras fermentum urna condimentum neque tempor tincidunt. Morbi consectetur nulla in urna vehicula vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    //       description: "Hello, World!",
    //       title: "First Post",
    //       tagList: ["test"]
    //     }
    //   ]
    // }
  },
  {
    username: "pscott",
    email: "pscott@watheia.org"
    // articles: {
    //   create: [
    //     {
    //       title: "Join the Prisma Slack",
    //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu tortor, mattis eu libero vel, ornare viverra diam. Sed vitae magna interdum, ornare velit sit amet, ultrices est. Aenean magna leo, congue eu erat quis, dapibus convallis mauris. Duis at cursus nisi. Phasellus ut posuere ante. Cras fermentum urna condimentum neque tempor tincidunt. Morbi consectetur nulla in urna vehicula vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    //       description: "Hello, World!",
    //       title: "First Post",
    //       tagList: ["test"]
    //     }
    //   ]
    // }
  }
]

async function createUsers(): Promise<User[]> {
  console.log(`Creating ${userData.length} users ...`)

  return Promise.all(
    userData.map(async (u) => {
      return await prisma.user.create({
        data: u
      })
    })
  )
}

async function main() {
  console.log(`Start seeding ...`)

  await createUsers()

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
