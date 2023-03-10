/* eslint-disable import/prefer-default-export */
import * as types from '../constants/bookingConstants';

const initialState = {
  loading: false,
  reservations: [],
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESERVATION_REQUEST:
      return { ...state, loading: true };
    case types.RESERVATION_SUCCESS:
      return { ...state, loading: false, reservations: action.payload };
    case types.RESERVATION_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  reservationReducer,
};
