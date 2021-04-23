import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Intro from '../components/intro'
import MovieList from '../components/movie-list'
import { getAllMoviesForHome } from '../lib/service'

export default function Index({ movies }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Site with WPACF</title>
        </Head>
        <Container>
          <Intro />
          {/* Movie cards */}
         <MovieList movies={movies} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const allMovies = await getAllMoviesForHome()
  return {
    props: { movies: allMovies },
  }
}
