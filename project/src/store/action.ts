import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';

export const promoLoaded = createAction<Film>('promoLoaded');
export const filmsLoaded = createAction<Films>('filmsLoaded');
