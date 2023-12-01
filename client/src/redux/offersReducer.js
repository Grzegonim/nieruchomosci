import axios from "axios";
import { API_URL } from '../config';

const initialState = [];
export const offersList = state => state.offers;

const createActionName = actionName => `app/offers/${actionName}`;
const LOAD_OFFERS = createActionName('LOAD_OFFERS');
export const loadOffers = payload => ({ type: LOAD_OFFERS, payload});

export const uploadOffers = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/offers`)
      dispatch(loadOffers(res.data))
    }
    catch (err) {
      console.log(err);  
    }
  }
};


const offersReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case LOAD_OFFERS:
      return [...action.payload]
    default: 
      return statePart;
  }
}

export default offersReducer;