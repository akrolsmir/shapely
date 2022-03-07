import { createClient, User } from '@supabase/supabase-js'
import { User as ShapelyUser } from './types'

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

export async function updateUser(user: ShapelyUser) {
  const { data, error } = await supabase
    .from(`users`)
    .update({
      datablob: user.datablob,
    })
    .eq('id', user.id)
  console.log('updateUser', data, error)
}

export async function getUser(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', userId)
    .single()
  console.log('getUser', data, error)
  return data as ShapelyUser
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
