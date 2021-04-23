import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function MovieCard({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  type,
}) {
  return (
    <div className="border border-gray-600 shadow-lg">
      <div className="mb-3">
        <CoverImage 
          title={title} 
          coverImage={coverImage} 
          slug={slug} 
          inCard={true}
          />
      </div>
      <div className="p-3 pt-0">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/movies/${slug}`} href="/movies/[slug]">
            <a
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <div
          className="text-base leading-relaxed mb-4 text-gray-500 h-12"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <span className="text-xs text-white bg-green-500 rounded-full py-1 px-2">
          {type}
        </span>
      </div>
    </div>
  )
}
