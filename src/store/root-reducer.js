import {combineReducers} from 'redux';
import {books} from './books/books';

export const NameSpace = {
  BOOKS: 'BOOKS',
};

export default combineReducers({
  [NameSpace.BOOKS]: books,
});
