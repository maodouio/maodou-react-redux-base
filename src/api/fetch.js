import fetchApi from "./axios"
import Debug from "debug"

const debug = Debug("maodou:api/fetch.js")

export default api => {
  debug("[callApi] api called", api);

  const [requestType, successType, failureType] = api.types;

  return (dispatch, getState) => {
    dispatch({ type: requestType });
    fetchApi(api.method, api.url, api.data)
      .then(data => {
        debug("[callApi] returned", { data });
        dispatch({ type: successType, payload: data });
      })
      .catch(err => {
        console.log(err);
        debug("[callApi] ERR", err);
        dispatch({ type: failureType });
      });
  };
};
