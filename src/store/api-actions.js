import {
  loadContacts,
  changeFavorite,
} from './actions';

import {APIRoute} from '../const';

export const fetchContactsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.CONTACTS)
    .then(({data}) => {
      dispatch(loadContacts(data));
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
