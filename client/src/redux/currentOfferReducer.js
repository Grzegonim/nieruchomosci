import axios from "axios";
import { API_URL } from '../config';

export const currentOffer = state => state.currentOffer;


const initialState = null;
const createActionName = actionName => `app/currentOffer/${actionName}`;
const LOAD_OFFER_BY_ID = createActionName('LOAD_OFFER_BY_ID');
export const loadOfferById = payload => ({ type: LOAD_OFFER_BY_ID, payload });
export const fetchOfferById = (id) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/offers/${id}`)
      dispatch(loadOfferById(res.data))
    }
    catch (err) {
      console.log(err);  
    }
  }
};

const currentOfferReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case LOAD_OFFER_BY_ID:
      return action.payload
    default: 
      return statePart;
  }

}

export default currentOfferReducer;