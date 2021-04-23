import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug, inCard,  }) {
  
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small object-cover w-full max-w-4xl', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'h-64': inCard,
      })}
    />
  )
  return (
    <div className="sm:mx-0 w-full flex justify-center">
      {slug ? (
        <Link as={`/movies/${slug}`} href="/movies/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
