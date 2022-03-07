import { useRouter } from 'next/router'
import BasePage from '../components/base-page'
import { useUser } from '../hooks/use-user'
import { createUser } from '../lib/supabase'

export default function Welcome() {
  const user = useUser()
  const router = useRouter()
  if (!user) {
    return null
  }

  return (
    <BasePage>
      <div className="mx-auto py-12 px-4 prose">
        <h1>Shapely</h1>
        <p>is the dating app for those who hate dating apps</p>
        <ul>
          <li>No profiles</li>
          <li>No swiping</li>
          <li>No subscriptions</li>
        </ul>
        <button
          className="btn"
          onClick={async () => {
            await createUser(user)
            router.push('/quiz')
          }}
        >
          Let's get started!
        </button>
      </div>
    </BasePage>
  )
}
