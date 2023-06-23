import { createReducer } from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {filmsLoaded, promoLoaded, reviewsLoaded, similarLoaded} from './action';
import {Reviews} from '../types/review';

type state = {
  promo: Film | null;
  films: Films;
  similar: Films;
  reviews: Reviews;
  isUserAuthorized: boolean;
}

const initialState: state = {
  promo: null,
  films: [],
  similar: [],
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
    })
    .addCase(reviewsLoaded, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(similarLoaded, (state, action) => {
      state.similar = action.payload;
    });
});

export { reducer };
