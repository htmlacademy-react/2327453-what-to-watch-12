import { createReducer } from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {filmsLoaded, promoLoaded} from './action';
import {Reviews} from '../types/review';

type state = {
  promo: Film | null;
  films: Films;
  reviews: Reviews;
  isUserAuthorized: boolean;
}

const initialState: state = {
  promo: null,
  films: [],
  reviews: [],
  isUserAuthorized: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(promoLoaded, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(filmsLoaded, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
