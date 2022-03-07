import { createClient, User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signIn() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  })
  return { user, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function createUser(user: User) {
  const { data, error } = await supabase.from('users').insert({
    id: user.id,
    name: user.user_metadata.name,
    createdTime: new Date(user.created_at).getTime(),
    datablob: {},
  })
}

export async function getUser(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', userId)
    .single()
  return data
}

export function listenForUser(userId: string, setUser: (user: any) => void) {
  return supabase
    .from(`users:id=${userId}`)
    .on('UPDATE', (payload) => {
      console.log('user updated', payload.new)
      setUser(payload.new)
    })
    .subscribe()
}
