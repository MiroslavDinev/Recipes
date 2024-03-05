import { createReducer, on } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import { ADD_INGREDIENT, ADD_INGREDIENTS, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, UPDATE_INGREDIENT } from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export const shoppingListReducer = createReducer(
    initialState,
    on(ADD_INGREDIENT, (state, action) => ({ ...state, ingredients: [...state.ingredients, action.value] })),
    on(ADD_INGREDIENTS, (state, action) => ({ ...state, ingredients:[...state.ingredients, ...action.value]})),
    on(UPDATE_INGREDIENT, (state, action) => {
        const ingredient = state.ingredients[action.index];
        const updatedIngredient = {
            ...ingredient,
            ...action.value
        }

        const updatedIngredients = [...state.ingredients];
        updatedIngredients[action.index] = updatedIngredient;

        return {
            ...state,
            ingredients: updatedIngredients
        }
    }),
    on(DELETE_INGREDIENT, (state, action) =>{
        return {
            ...state,
            ingredients: state.ingredients.filter((ig, i) => {
                return i !== action.index;
            })
        }
    }),
    on(START_EDIT, (state, action) => {
        const ingredient: Ingredient = {...state.ingredients[action.index]};
        return {
            ...state,
            editedIngredient: ingredient,
            editedIngredientIndex: action.index
        }
    }),
    on(STOP_EDIT, (state) => {
        return {
            ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
        }
    })
);