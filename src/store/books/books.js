import { createReducer } from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadBooks,
  changeFavoriteAction,
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
    .addCase(changeGroup, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(loadBooks, (state, action) => {
      state.books = action.payload;
    })
    .addCase(isBooksLoading, (state, action) => {
      state.isBooksLoading = action.payload;
    })
    .addCase(changeFavoriteAction, (state, action) => {
      state.books = Util.getUpdatedBooks(action.payload.id, state.books, action.payload.favorite);
      return state;
    })
    .addCase(deleteItemAction, (state, action) => {
      state.books = Util.deleteItem(action.payload, state.books);
    })
});

export { books };
