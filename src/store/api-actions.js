import {
  loadBooks,
  changeFavorite,
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

export const addToFavorite = (id, favorite) => (dispatch, _getState, api) => (
  api.put(`${ APIRoute.BOOKS}/${id}}`)
    .then((info) => {
      dispatch(changeFavorite(id, info.data));
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
