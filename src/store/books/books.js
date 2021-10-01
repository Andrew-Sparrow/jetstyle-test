import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadBooks,
  changeFavorite,
} from '../actions';

const initialState = {
  books: [],
  isDataLoaded: false,
  activeGroupName: 'All',
};

const books = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGroup, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(loadBooks, (state, action) => {
      state.books = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeFavorite, (state, action) => {
      state.books = Util.getUpdatedBooks(action.payload.id, state.books, action.payload);
    })
});

export {books};
