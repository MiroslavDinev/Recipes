import { createReducer, on } from "@ngrx/store";
import { User } from "../auth/user.model";
import { LOGIN, LOGOUT } from "./auth.actions";

export interface State {
    user: User;
}

const initialState: State = {
    user: null
}

export const authReducer = createReducer(
    initialState,
    on(LOGIN, (state, action) =>{
        const user = new User(action.user.email, action.user.userId, action.user.token, action.user.expirationDate);
        return {
            ...state,
            user: user
        }
    }),
    on(LOGOUT, (state) => {
        return {
            ...state,
            user: null
        }
    })
);