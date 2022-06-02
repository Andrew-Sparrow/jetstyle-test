import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOADING_BOOK_PROCESS_STATUS: 'books/changeLoadingBookProcessStatus',
  LOAD_BOOKS: 'books/loadBooks',
  DELETE_ITEM: 'books/delete',
  REDIRECT_TO_ROUTE: 'books/redirectToRoute',
};

export const loadBooks = createAction(
  ActionType.LOAD_BOOKS,
  (books) => ({ payload: books })
);

export const isBooksLoading = createAction(
  ActionType.CHANGE_LOADING_BOOK_PROCESS_STATUS,
  (isLoading) => ({ payload: isLoading })
);

export const deleteItemAction = createAction(
  ActionType.DELETE_ITEM,
  (id) => ({ payload: id })
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({ payload: url })
);
