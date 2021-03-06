// 获取页面路径的query参数
export function queryString() {
  let _queryString = {}
  const _query = window.location.search.substr(1)
  const _vars = _query.split('&')
  _vars.forEach((v, i) => {
    const _pair = v.split('=')
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1])
    } else if (typeof _queryString[_pair[0]] === 'string') {
      const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])]
      _queryString[_pair[0]] = _arr
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]))
    }
  })
  return _queryString
}

// 获取高度
// 3/4 9/16 7/18
export function genHeight(ratio = 9 / 16) {
  return Math.floor(window.innerWidth * ratio) + 'px'
}

// 秒转换为小时
export const genTimeStr = secNum => {
  if (secNum) {
    const hours = Math.floor(secNum / 3600)
    const minutes = Math.floor((secNum - hours * 3600) / 60)
    // const seconds = secNum - hours * 3600 - minutes * 60
    return hours > 0 ? `${hours}小时${minutes}分` : `${minutes}分`
  }
  return '即将开始'
}

export const genPrice = price => {
  if (price !== 0) {
    return `${price} 元`
  }
  return '免费'
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 格式化时间
export const formatTime = (date, all = true) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  // const second = date.getSeconds();
  if (all) {
    return (
      [year, month, day].map(formatNumber).join('-') +
      ' ' +
      [hour, minute].map(formatNumber).join(':')
    )
  }
  return [year, month, day].map(formatNumber).join('/')
}
