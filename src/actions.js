import axios from "axios";
export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info };
};

export const removeFav = (key) => {
  return { type: FAV_REMOVE, payload: key };
};

export const fetchAnother = () => (dispatch) => {
  // + TODO: fetchAnother fonksiyonunu dispatch edince geldiğini test etmek
  // TODO: axios ile bağlayınca veri geldiğini test etmek
  dispatch({ type: FETCH_LOADING });
  axios
    .get("https://www.boredapi.com/api/activity")
    .then((response) => {
      console.log("dispatch @actions", dispatch);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch((err) => dispatch({ type: FETCH_ERROR, payload: err }));
};
