import {createReducer} from '@reduxjs/toolkit';
import {loadedPromo} from './action';

type state = {
  promo: object;
}

const initialState: state = {
  promo: {}
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadedPromo, (state, action) => {
      state.promo = action.payload;
    });
});

export {reducer};
