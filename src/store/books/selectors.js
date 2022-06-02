import { NameSpace } from '../root-reducer';

export const getBooks = (state) => state[NameSpace.BOOKS].books;
export const getIsDataLoading = (state) => state[NameSpace.BOOKS].isBooksLoading;
