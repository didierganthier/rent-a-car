import { combineReducers } from '@reduxjs/toolkit';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';
import { carReducer } from './carReducer';
import { reservationReducer } from './reservationReducer';
import usersListReducer from './usersListReducer';

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  carList: carReducer,
  usersList: usersListReducer,
  reserve: reservationReducer,
});

export default rootReducer;
