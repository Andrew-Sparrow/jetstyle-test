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

export const addToFavorite = (id, favorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.BOOKS}/${id}/${favorite ? true : false}`)
    .then((info) => {
      console.log(info);
      dispatch(changeFavorite(id, info.data));
    })
    .catch((err) => {})
);
