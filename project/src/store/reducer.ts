import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { promoLoaded } from './action';

type state = {
  promo: Film | null;
  isUserAuthorized: boolean;
}

const initialState: state = {
  promo: null,
  isUserAuthorized: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(promoLoaded, (state, action) => {
      state.promo = action.payload;
    });
});

export { reducer };
