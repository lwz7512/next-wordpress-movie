import { fetchAPI, } from './api'
import { downloadImgBy } from './service'

export async function queryHomePageMeta() {

  const data = await fetchAPI(`
    query MyHomePage {
      page(id: "/", idType: URI) {
        homeTemplate {
          heroBlock {
            ... on Page_Hometemplate_HeroBlock_HeroLayout {
              fieldGroupName
              subTitle
              title
              backgroundImage {
                sourceUrl
              }
            }
          }
          serviceBlock {
            ... on Page_Hometemplate_ServiceBlock_LeftRightBigCard {
              description
              fieldGroupName
              linkUrl
              name
              image {
                sourceUrl
              }
            }
          }
          strengthBlock {
            ... on Page_Hometemplate_StrengthBlock_NormalStrength {
              description
              fieldGroupName
              icon
              title
            }
          }
          testimonialBlock {
            ... on Page_Hometemplate_TestimonialBlock_NormalLayout {
              backgroundColor
              fieldGroupName
              textColor
              userComment
              userName
              userTitle
              avatarImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  return data.page.homeTemplate
}