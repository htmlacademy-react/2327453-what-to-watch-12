import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {filmsLoaded, promoLoaded} from './action';
import { APIRoute } from '../const';
import {Film, Films} from '../types/film';

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
    const { data } = await api.get<Films>(APIRoute.Promo);
    dispatch(filmsLoaded(data));
  }
);
