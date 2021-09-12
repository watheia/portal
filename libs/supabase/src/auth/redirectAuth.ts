/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { usePrincipal } from "./usePrincipal"

export const redirectAuth = (to = "/") => {
  const { user } = usePrincipal()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push(to)
    }
  }, [user, router, to])
}

export default redirectAuth
