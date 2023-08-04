import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

const actionFetchCategories = createAsyncThunk(
  'categories/FETCH_CATEGORIES',
  async () => {
    // est dispatchée l'action cateogies/FETCH_RECIPES/pending

    const result = await axiosInstance.get('/category');
    return result.data;

    // est dispatchée l'action categories/FETCH_CATEGORIES/fulfilled
  }
);

export default actionFetchCategories;
