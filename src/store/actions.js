import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GROUP: 'contacts/changeGroup',
  LOAD_CONTACTS: 'contacts/loadContacts',
  CHANGE_FAVORITE: 'places/isFavorite',
  SEND_COMMENT: 'comment/sendComment',
  SEND_COMMENT_RATING: 'comment/sendCommentRating',
  REDIRECT_TO_ROUTE: 'places/redirectToRoute',
};

export const changeGroup = createAction(
  ActionType.CHANGE_GROUP,
  (groupName) => ({payload: groupName}),
);

export const loadContacts = createAction(
  ActionType.LOAD_CONTACTS,
  (contacts) => ({payload: contacts}),
);

export const changeFavorite = createAction(
  ActionType.CHANGE_FAVORITE,
  (id, newPlace) => ({payload: {id, newPlace}}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);
