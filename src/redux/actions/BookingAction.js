import axios from 'axios';
import * as types from '../constants/bookingConstants';

const getReservations = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.RESERVATION_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Barear ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('https://rentcars.onrender.com/reservations', config);
    dispatch({
      type: types.RESERVATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.RESERVATION_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// Add booking car

const addBooking = (FormData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.BOOKING_CAR_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'POST',
      url: 'https://rentcars.onrender.com/reservations',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: FormData,
    });
    dispatch({
      type: types.BOOKING_CAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.BOOKING_CAR_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

// delete booking
const deleteBooking = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'DELETE',
      url: `https://rentcars.onrender.com/reservations/${id}`,
      headers: {
        Authorization: `Barear ${userInfo.token}`,
      },
    });
    dispatch({
      type: types.DELETE_BOOKING,
      payload: data.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export { addBooking, deleteBooking, getReservations };
