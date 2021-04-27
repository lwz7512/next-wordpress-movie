// import cheerio from 'cheerio'
import { fetchAPI, } from './api'
import { downloadAllFromArray, downloadAllFromObj } from './img-dnldr'

export async function getAllMoviesForHome() {
  const data = await fetchAPI(`
    query AllMovies {
      movies(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          databaseId
          slug
          title
          date
          excerpt
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
          movieAcfGroup {
            director
            producer
            type
            cover {
              sourceUrl
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const movies = data.movies.nodes
  downloadAllFromArray(movies)

  return movies
}

export async function getAllMoviesWithSlug() {
  const data = await fetchAPI(`
    {
      movies(first: 1000) {
        nodes {
          databaseId
          slug
        }
      }
    }
  `)
  const posts = data.movies.nodes
  return posts.map(node => `/movies/${node.slug}`) || []
}


/**
 * get post content including: date, slug, uri, title
 * 
 * @param {string} slug post slug
 */
 export async function getMovieBy(slug) {
  const data = await fetchAPI(`
    query MyMovie {
      movie(id: "${slug}", idType: SLUG) {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        movieAcfGroup {
          cover {
            sourceUrl
          }
          description
          director
          producer
          type
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  `)
  downloadAllFromObj(data.movie)
  
  return data.movie
}
