import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

export const actionFetchScores = createAsyncThunk(
  'scores/FETCH_SCORES',
  async () => {
    // est dispatchée l'action scores/FETCH_SCORES/pending

    const result = await axiosInstance.get('/scores');
    return result.data;

    // est dispatchée l'action scores/FETCH_SCORES/fulfilled
  }
);
