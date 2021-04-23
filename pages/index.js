import Head from 'next/head'
import Container from '../components/container'

export default function Index() {
  

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Site with WPACF</title>
        </Head>
        <Container>
          <Intro />
          {/* TODO: Movie cards */}
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview)
//   return {
//     props: { allPosts, preview },
//   }
// }
