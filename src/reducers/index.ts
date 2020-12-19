import { userReducerState, userReducer, getCountryList } from './user-reducer';
import {ActionReducerMap,createSelector } from '@ngrx/store';
export interface RootReducerState{
    users: userReducerState;
}

export const rootReducer:ActionReducerMap<RootReducerState>={
    users: userReducer
}

//selectors 
export const getuserState=(state:RootReducerState)=>state.users;
export const getCountryListing = createSelector(getuserState, getCountryList);