import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { promoLoaded } from './action';
import { APIRoute } from '../const';

export const loadPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<object>(APIRoute.Promo);
    dispatch(promoLoaded(data));
  }
);
