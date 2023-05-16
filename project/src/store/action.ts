import {createAction} from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const promoLoaded = createAction<Film>('promoLoaded');
