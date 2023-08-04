import { createReducer } from '@reduxjs/toolkit';
import { Categories } from '../../@types/categories';
import actionFetchCategories from '../thunks/categories';

interface CategoriesState {
  list: Categories[];
  loading: boolean;
}

export const initialState: CategoriesState = {
  list: [],
  loading: true,
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionFetchCategories.fulfilled, (state, action) => {
    // on enregistre les données qui viennent du return du thunk dans le state
    state.list = action.payload;
    // puisque les données sont là on a fini de loader
    state.loading = false;
  });
});
export default categoriesReducer;
