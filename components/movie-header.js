import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function MovieHeader({
  title,
  coverImage,
  date,
  author,
  director,
  producer,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <CoverImage 
          title={title} 
          coverImage={coverImage} 
          inPage={true}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Produced &nbsp;&nbsp;
          {`By ${director} @${producer}`}
        </div>
      </div>
    </>
  )
}
