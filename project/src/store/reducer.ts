import { createReducer } from '@reduxjs/toolkit';
import { promoLoaded } from './action';

type state = {
  promo: object;
}

const initialState: state = {
  promo: {}
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(promoLoaded, (state, action) => {
      state.promo = action.payload;
    });
});

export {reducer};
