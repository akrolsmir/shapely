import { useRouter } from 'next/router'
import { useState } from 'react'
import BasePage from '../components/base-page'
import { Likert } from '../components/likert'
import { useShapelyUser, useUser } from '../hooks/use-user'
import { INITIAL_QUESTIONS } from '../lib/questions'
import { createUser, updateUser } from '../lib/supabase'
import { LikertRating } from '../lib/types'

export default function Quiz() {
  const user = useUser()
  const shapelyUser = useShapelyUser(user?.id)
  const [index, setIndex] = useState(0)

  if (!user) {
    return null
  }

  const question = INITIAL_QUESTIONS[index]

  async function rate(rating: LikertRating) {
    if (!shapelyUser) return
    const initialQuestions = shapelyUser.datablob.initialQuestions || []
    initialQuestions.push({
      question,
      rating,
    })
    shapelyUser.datablob.initialQuestions = initialQuestions
    await updateUser(shapelyUser)
    setIndex(index + 1)
  }

  return (
    <BasePage>
      <div className="mx-auto py-12 px-4 prose">
        <h2>
          Step 1: Tell us about yourself (
          {`${index + 1}/${INITIAL_QUESTIONS.length}`})
        </h2>
        <Likert question={question} onRate={rate} />
      </div>
    </BasePage>
  )
}
