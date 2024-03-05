import { createAction, props } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = createAction(
    'ADD_INGREDIENT',
    props<{value: Ingredient}>()
)

export const ADD_INGREDIENTS = createAction(
    'ADD_INGREDIENTS',
    props<{value: Ingredient[]}>()
)

export const UPDATE_INGREDIENT = createAction(
    'UPDATE_INGREDIENT',
    props<{index: number, value: Ingredient}>()
)

export const DELETE_INGREDIENT = createAction(
    'DELETE_INGREDIENT',
    props<{index: number}>()
)

export const START_EDIT = createAction(
    'START_EDIT',
    props<{index: number}>()
)

export const STOP_EDIT = createAction(
    'STOP_EDIT'
)