import fetchApi from '../api/axios'
import Debug from 'debug'
const debug = Debug('maodou:action:fetchData')

export default api => {
  debug('[fetchData start]', api)
  const [requestType, successType, failureType] = api.types

  return (dispatch, getState) => {
    dispatch({ type: requestType })
    fetchApi(api.method, api.url, api.data)
      .then(data => {
        debug('[fetchData success]', { data })
        dispatch({ type: successType, payload: data })
      })
      .catch(err => {
        console.log(err)
        debug('[fetchData error]', err)
        dispatch({ type: failureType })
      })
  }
}
