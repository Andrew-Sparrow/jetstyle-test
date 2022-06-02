import {
  loadBooks,
  deleteItemAction,
  isBooksLoading
} from './actions';

import {APIRoute} from '../const';

export const fetchBooksList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.BOOKS)
    .then(({ data }) => {
      console.log(data)
      dispatch(isBooksLoading(true));
      dispatch(loadBooks(data));
    })
    .catch((err) => {})
    .finally(() => {
      dispatch(isBooksLoading(false));
    })
);

export const deleteItemApi = (id) => (dispatch, _getState, api) => (
  api.delete(`${ APIRoute.BOOKS }/${ id}`)
    .then((info) => {
      dispatch(deleteItemAction(id));
    })
    .catch((err) => {})
);
