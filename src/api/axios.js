import axios from 'axios'

export default (method, url, data = {}) => {
  let headers = {};
  let reqData = {};
  
  if (method.toUpperCase() === "GET") {
    reqData = { method, url, headers, params: data };
  } else {
    reqData = { method, url, headers, data };
  }
  //console.log('before axios reqData', reqData)
  return new Promise((resolve, reject) => {
    axios(reqData)
      .then(res => {
        if (res.data.errcode === 200) {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
