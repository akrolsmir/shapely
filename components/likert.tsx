import { LikertRating } from '../lib/types'

export function Likert(props: {
  question: string
  onRate: (rating: LikertRating) => void
}) {
  const LABELS = {
    '-2': 'Strongly disagree',
    '-1': 'Disagree',
    '0': 'Neutral',
    '1': 'Agree',
    '2': 'Strongly agree',
  }
  const ORDER = ['2', '1', '0', '-1', '-2']

  return (
    <div>
      <p className="mb-4">{props.question}</p>

      <div className="flex flex-col gap-2">
        {ORDER.map((key) => (
          <button
            key={key}
            className="btn"
            onClick={() => props.onRate(key as LikertRating)}
          >
            {LABELS[key as LikertRating]}
          </button>
        ))}
      </div>
    </div>
  )
}
