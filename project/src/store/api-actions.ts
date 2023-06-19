import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {filmsLoaded, promoLoaded, reviewsLoaded} from './action';
import { APIRoute } from '../const';
import {Film, Films} from '../types/film';
import {Reviews} from "../types/review";

type payload = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const loadPromo = createAsyncThunk<void, undefined, payload>(
  'data/loadPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(promoLoaded(data));
  }
);

export const loadFilms = createAsyncThunk<void, undefined, payload>(
  'data/loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(filmsLoaded(data));
  }
);

export const loadReviews = createAsyncThunk<void, number, payload>(
  'data/loadReviews',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${filmId}`);
    dispatch(reviewsLoaded(data));
  }
);
