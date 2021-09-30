import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadContacts,
  changeFavorite,
} from '../actions';

const initialState = {
  contacts: [],
  isDataLoaded: false,
  activeGroupName: 'All',
};

const contacts = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGroup, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeFavorite, (state, action) => {
      state.places = Util.getUpdatedContacts(action.payload.id, state.places, action.payload.newPlace);
    })
});

export {contacts};
