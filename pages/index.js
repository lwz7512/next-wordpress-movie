/**
 * Home page filled by wordpress meta data and Reactjs Blocks
 * @2021/04/26
 */
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import NavBar from '../components/nav-bar'
import { queryHomePageMeta } from '../lib/home-data'
import Blocks, { NullBlock } from '../components/blocks'

export default function Index({ meta }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Site with WPACF</title>
        </Head>
        <Container>
          <NavBar activePage="/" />
          {
            Object.keys(meta).map(block => {
              const DynaBlock = Blocks[block]
              if (!DynaBlock) return (
                <NullBlock name={block} key="nullBlock" />
              )
              return (
                <DynaBlock 
                  key={block} 
                  dataset={meta[block]} 
                />
              )
            })
          }
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const meta = await queryHomePageMeta()
  return {
    props: { meta },
  }
}
