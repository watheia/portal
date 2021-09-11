/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useUser } from "./useUser"

export const requireAuth = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])
}
