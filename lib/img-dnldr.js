/**
 * iterate object to download image to local
 * @2021/04/26
 */

 import { downloadImgBy } from './service'

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