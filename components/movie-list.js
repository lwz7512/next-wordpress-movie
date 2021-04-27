import MovieCard from '../components/movie-card'

export default function MovieList({ movies }) {
  return (
    <section className="my-10 md:my-20 xl:my-40 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-gap-8 lg:col-gap-16 row-gap-10 md:row-gap-16 mb-16">
        {movies.map(node => (
          <MovieCard
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
            type={node.movieAcfGroup?.type}
          />
        ))}
      </div>
    </section>
  )
}
