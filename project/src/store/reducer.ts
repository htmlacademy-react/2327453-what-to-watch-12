import { createReducer } from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {filmsLoaded, promoLoaded} from './action';

type state = {
  promo: Film | null;
  films: Films;
  isUserAuthorized: boolean;
}

const initialState: state = {
  promo: null,
  films: [],
  isUserAuthorized: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(promoLoaded, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(filmsLoaded, (state, action) => {
      state.films = action.payload;
    })
  ;
});

export { reducer };
