import { createAction, props } from "@ngrx/store";

export const LOGIN = createAction(
    'LOGIN',
    props<{user: {email: string, userId:string, token:string, expirationDate: Date}}>()
);

export const LOGOUT = createAction(
    'LOGOUT'
);

export const LOGIN_STARTS = createAction(
    'LOGIN_STARTS',
    props<{email: string, password:string}>
);