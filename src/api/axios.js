import axios from 'axios'

export default (method, url, data = {}) => {
  let headers = {}
  let reqData = {}

  if (method.toUpperCase() === 'GET') {
    reqData = { method, url, headers, params: data }
  } else {
    reqData = { method, url, headers, data }
  }
  //console.log('before axios reqData', reqData)
  return new Promise((resolve, reject) => {
    axios(reqData)
      .then(res => {
        // api返回的数据格式(res.data)
        // 成功{errcode: 200, data: xx}
        // 失败{errcode: xx, errmsg: xx}
        if (res.data.errcode === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
