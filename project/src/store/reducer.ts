import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { promoLoaded } from './action';

type state = {
  promo: Film | null;
}

const initialState: state = {
  promo: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(promoLoaded, (state, action) => {
      state.promo = action.payload;
    });
});

export { reducer };
