import Types from "../types";

export function onLoadPopularData(theme) {
  return dispatch => {
    dispatch({type:Types.POPULAR_REFRESH});
  }
}
