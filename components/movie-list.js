import MovieCard from '../components/movie-card'

export default function MovieList({ movies }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-4 lg:col-gap-8 row-gap-20 md:row-gap-32 mb-32">
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
