'use client'

interface ReviewCardsProps {
  cardClassName?: string
}

const reviews = [
  { quote: '"Unhooks my brain."', author: 'Drew P.' },
  { quote: '"Finally stopped YouTube scrolling."', author: 'pequickster' },
  { quote: '"Nothing gets me to sleep like this."', author: 'Blank_Pages' },
]

function StarIcon() {
  return (
    <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function ReviewCards({ cardClassName = '' }: ReviewCardsProps) {
  return (
    <div className="flex gap-4 justify-center flex-wrap px-6 sm:px-0">
      {reviews.map((review) => (
        <div
          key={review.author}
          className={`bg-ms-nocturne/95 rounded-[18px] p-8 pb-8 shadow-lg border border-white/10 ${cardClassName}`}
        >
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className="text-white font-semibold text-lg mb-4">
            {review.quote}
          </p>
          <p className="text-sm text-white/50 font-medium">{review.author}</p>
        </div>
      ))}
    </div>
  )
}
