import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GROUP: 'books/changeGroup',
  LOAD_BOOKS: 'books/loadBooks',
  CHANGE_FAVORITE: 'books/isFavorite',
  SEND_COMMENT: 'comment/sendComment',
  SEND_COMMENT_RATING: 'comment/sendCommentRating',
  REDIRECT_TO_ROUTE: 'places/redirectToRoute',
};

export const changeGroup = createAction(
  ActionType.CHANGE_GROUP,
  (groupName) => ({payload: groupName}),
);

export const loadBooks = createAction(
  ActionType.LOAD_BOOKS,
  (books) => ({payload: books}),
);

export const changeFavorite = createAction(
  ActionType.CHANGE_FAVORITE,
  (id, newPlace) => ({payload: {id, newPlace}}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);
