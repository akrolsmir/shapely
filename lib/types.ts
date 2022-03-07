export type User = {
  name: string
  id: string
  createdTime: number // milliseconds since epoch

  // Just cram it all into JSON for now
  datablob: {
    // Age, etc
    initialQuestions: LikertQuestion[]

    videoDates: Date[]
    irlDates: Date[]
  }
}

type Date = {
  startTime: number // milliseconds since epoch
  partnerId: string

  // IRL Dates: Badges?
  // Video dates: See you again?
  feedback: Feedback
}

type Feedback = {
  questions: LikertQuestion[]

  goodChips: string[]
  badChips: string[]
}

type LikertQuestion = {
  question: string
  // -2 = Strong Disagree, -1 = Disagree, 0 = Neutral, 1 = Agree, 2 = Strong Agree
  rating: -2 | -1 | 0 | 1 | 2
}
