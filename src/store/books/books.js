import { createReducer } from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  loadBooks,
  isBooksLoading,
  deleteItemAction
} from '../actions';

const initialState = {
  books: [],
  isBooksLoading: false,
  activeGroupName: 'All',
};

const books = createReducer(initialState, (builder) => {
  builder
    .addCase(loadBooks, (state, action) => {
      state.books = action.payload;
    })
    .addCase(isBooksLoading, (state, action) => {
      state.isBooksLoading = action.payload;
    })
    .addCase(deleteItemAction, (state, action) => {
      state.books = Util.deleteItem(action.payload, state.books);
    })
});

export { books };
