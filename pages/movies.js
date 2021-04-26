import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import MovieList from '../components/movie-list'
import { getAllMoviesForHome } from '../lib/service'
import NavBar from '../components/nav-bar'

export default function Index({ movies }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Site with WPACF</title>
        </Head>
        <Container>
          <NavBar activePage="/movies" />
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
