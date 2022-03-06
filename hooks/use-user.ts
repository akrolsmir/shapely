import { User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useUser() {
  const [user, setUser] = useState<User | null | undefined>()

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) setUser(session?.user)
      else setUser(null)
    })

    setUser(supabase.auth.user())

    return data?.unsubscribe
  }, [])

  return user
}
