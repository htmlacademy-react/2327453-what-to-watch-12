import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {Reviews} from "../types/review";

export const promoLoaded = createAction<Film>('promoLoaded');
export const filmsLoaded = createAction<Films>('filmsLoaded');
export const reviewsLoaded = createAction<Reviews>('reviewsLoaded');
