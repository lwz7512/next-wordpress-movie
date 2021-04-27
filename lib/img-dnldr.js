/**
 * iterate object to download image to local
 * @2021/04/26
 */

function recursivelyIterateProperties(jsonObject, cb) {

  if(!jsonObject) return

  Object.keys(jsonObject).forEach(prop => {

    if(cb) cb(jsonObject, prop)

    if (!(typeof(jsonObject[prop]) === 'string')
        && !(jsonObject[prop] instanceof Array)) {
            recursivelyIterateProperties(jsonObject[prop], cb);
        }
  })
}

/**
 * download image from object, by checking sourceUrl
 * @param {*} obj 
 */
export const downloadAllFromObj = obj => {
  recursivelyIterateProperties(obj, (parent, prop) => {

    if (prop !== 'sourceUrl') return

    parent[prop] = downloadImgBy(parent[prop])
  })
}

/**
 * download image from Array, by checking sourceUrl
 * @param {array} arr 
 */
export const downloadAllFromArray = arr => {
  arr.forEach(obj => downloadAllFromObj(obj))
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
