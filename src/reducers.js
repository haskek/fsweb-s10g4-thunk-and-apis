import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initial = {
  favs: [
    {
      activity: "Bake pastries for you and your neighbor",
      type: "cooking",
      participants: 1,
      price: 0.4,
      link: "",
      key: "8125168",
      accessibility: 0.3,
    },
  ],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(favs) {
  localStorage.setItem("s10g4", JSON.stringify(favs));
}

function readFavsFromLocalStorage() {
  if (!JSON.parse(localStorage.getItem("s10g4"))) return [];
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      writeFavsToLocalStorage([...state.favs, action.payload]);
      let isIncluded = state.favs.every(
        (item) => item.activity !== action.payload.activity
      );
      toast.success(`Favoriye eklenmiştir`);
      return {
        ...state,
        favs: isIncluded ? [...state.favs, action.payload] : [...state.favs],
      };

    case FAV_REMOVE: {
      toast.info("Favori listesinden çıkarılmıştır.");
      return {
        ...state,
        favs: state.favs.filter((item) => item.key !== action.payload),
      };
    }

    case FETCH_SUCCESS:
      console.log("FETCH_SUCCESS");
      toast.success("Yeni bir şaka geliyor.");
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case FETCH_LOADING:
      console.log("FETCH_LOADING");
      return {
        ...state,
        current: null,
        loading: true,
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_FAVS_FROM_LS:
      return { ...state, favs: readFavsFromLocalStorage() };

    default:
      return state;
  }
}
