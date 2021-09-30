import {NameSpace} from '../root-reducer';

export const getContacts = (state) => state[NameSpace.CONTACTS].contacts;
export const getIsDataLoaded = (state) => state[NameSpace.CONTACTS].isDataLoaded;
export const getActiveGroupName = (state) => state[NameSpace.CONTACTS].activeGroupName;
