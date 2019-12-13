import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_CITY } from "../constants/action-types";
import { ADD_ITINERARY } from "../constants/action-types";
import { FETCH_DATA } from "../constants/action-types";
import { LEAVE_DATA } from "../constants/action-types";
import { SET_FILTER_TEXT } from "../constants/action-types";

export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
}

export const addCity = (payload) => {
  return { type: ADD_CITY, payload };
}


export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/all")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_DATA, payload: json });
      });
  };
}
/*
export function setData() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/addCity")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LEAVE_DATA, payload: json });
      });
  };
}
*/
export const setFilterText2 = (payload) => {
  return { type: SET_FILTER_TEXT, payload };
}

export const addItinerary = (payload) => {
  return { type: ADD_ITINERARY, payload };
}