import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { getUser, listenForUser, supabase } from '../lib/supabase'
import { User as ShapelyUser } from '../lib/types'

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

export function useShapelyUser(id?: string) {
  const [user, setUser] = useState<ShapelyUser | null | undefined>()

  useEffect(() => {
    if (id) {
      getUser(id).then((user) => setUser(user))
      listenForUser(id, setUser)
    }
  }, [id])

  return user
}
