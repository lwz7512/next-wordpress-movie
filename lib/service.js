// import cheerio from 'cheerio'
import { fetchAPI, } from './api'


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
  movies.forEach(m => {
    let imagePath = downloadImgBy(m.featuredImage.node.sourceUrl, '/images')
    m.featuredImage.node.sourceUrl = imagePath
  })

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
  const coverURL = data.movie.movieAcfGroup?.cover.sourceUrl
  const coverPath = downloadImgBy(coverURL, '/images')
  data.movie.movieAcfGroup.cover.sourceUrl = coverPath
  
  return data.movie
}

/**
 * download images by url to one folder which under public folder
 * @param {string} url image file url
 * @param {string} folder folder under public like: /icons
 */
 export const downloadImgBy = (url, folder = '/images') => {
  if(!url) return

  const fs = require('fs')
  const got = require('got')

  let iconFile = url.split('/').pop()
  let fileType = iconFile.split('.').pop()
  let isValid = ['jpg', 'png', 'jpeg'].includes(fileType)
  if(!isValid) return
  
  // console.log('>>> dnld img: ' + url)
  let writeFile = fs.createWriteStream(`./public${folder}/${iconFile}`)
  let stream = got.stream(url)
  stream.pipe(writeFile)

  return `${folder}/${iconFile}`
}
