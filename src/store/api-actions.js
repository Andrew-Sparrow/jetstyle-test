import {
  loadBooks,
  changeFavoriteAction,
  deleteItemAction,
} from './actions';

import {APIRoute} from '../const';

export const fetchBooksList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.BOOKS)
    .then(({data}) => {
      dispatch(loadBooks(data));
    })
    .catch((err) => {})
);

export const addToFavoriteApi = (id, isFavorite) => (dispatch, _getState, api) => (
  api.patch(`${ APIRoute.BOOKS }/${ id }`, {favorite: isFavorite})
    .then((info) => {
      dispatch(changeFavoriteAction(id, info.data.favorite));
    })
    .catch((err) => {})
);

export const deleteItemApi = (id) => (dispatch, _getState, api) => (
  api.delete(`${ APIRoute.BOOKS }/${ id}`)
    .then((info) => {
      dispatch(deleteItemAction(id));
    })
    .catch((err) => {})
);
