import {
  request
} from './request'
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeImgdata(type, page) {
  return request({
    url: '/home/data?type=' + type + '&page=' + page
  })
}
