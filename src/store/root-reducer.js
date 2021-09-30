import {combineReducers} from 'redux';
import {contacts} from './contacts/contacts';

export const NameSpace = {
  CONTACTS: 'CONTACTS',
};

export default combineReducers({
  [NameSpace.CONTACTS]: contacts,
});
