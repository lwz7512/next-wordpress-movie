import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import MovieHeader from '../../components/movie-header'
import Layout from '../../components/layout'
import SectionSeparator from '../../components/section-separator'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import { getAllMoviesWithSlug, getMovieBy } from '../../lib/service'


export default function MovieDetail({ post, }) {
  const router = useRouter()

  if (!post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.movieAcfGroup?.cover?.sourceUrl}
                />
              </Head>
              <MovieHeader
                title={post.title}
                coverImage={post.movieAcfGroup?.cover}
                date={post.date}
                author={post.author?.node}
                director={post.movieAcfGroup?.director}
                producer={post.movieAcfGroup?.producer}
              />
              <SectionSeparator />
              <PostBody content={post.movieAcfGroup.description} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, }) {
 
  const data = await getMovieBy(params.slug)
  return {
    props: {
      post : data,
    },
  }
}

export async function getStaticPaths() {
  const allMovies = await getAllMoviesWithSlug()
  return {
    paths: allMovies,
    fallback: false,
  }
}
