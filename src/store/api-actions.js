import {
  loadBooks,
  changeFavorite,
} from './actions';

import {APIRoute} from '../const';

export const fetchBooksList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.BOOKS)
    .then(({data}) => {
      dispatch(loadBooks(data));
    })
    .catch((err) => {})
);

export const addToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE }/${id}/${isFavorite ? 1 : 0}`)
    .then((info) => {
      dispatch(changeFavorite(id, info.data));
    })
    .catch((err) => {})
);
