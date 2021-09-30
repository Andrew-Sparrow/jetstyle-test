import {NameSpace} from '../root-reducer';

export const getBooks = (state) => state[NameSpace.BOOKS].books;
export const getIsDataLoaded = (state) => state[NameSpace.BOOKS].isDataLoaded;
export const getActiveGroupName = (state) => state[NameSpace.BOOKS].activeGroupName;
