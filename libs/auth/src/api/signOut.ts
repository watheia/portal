import client from "../client"

export const signOut = async () => {
  const { error } = await client.auth.signOut()
  if (error) console.error("Error logging out:", error.message)
}

export default signOut
