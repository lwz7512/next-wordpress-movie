import { fetchAPI, } from './api'
import { downloadAllFromArray } from './img-dnldr'

export async function queryHomePageMeta() {

  const data = await fetchAPI(`
    query MyHomePage {
      page(id: "/", idType: URI) {
        homeTemplate {
          heroBlock {
            ... on Page_Hometemplate_HeroBlock_HeroLayout {
              fieldGroupName
              title
              subTitle
              learnMore
              hireUs
              backgroundImage {
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
  const metaData = data.page.homeTemplate
  
  downloadAllFromArray(metaData.heroBlock)
  downloadAllFromArray(metaData.strengthBlock)
  downloadAllFromArray(metaData.serviceBlock)
  downloadAllFromArray(metaData.testimonialBlock)

  return metaData
}