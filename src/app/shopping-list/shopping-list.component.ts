import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { START_EDIT } from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}>;
  //private subscription: Subscription;

  constructor(private shoppingService: ShoppingService, private store: Store<fromApp.AppState>) { }
  
  
  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingService.getIngredients();
    // this.subscription = this.shoppingService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   });
  }

  onEditItem(index: number) {
    //this.shoppingService.startedEditing.next(index);
    this.store.dispatch(START_EDIT({ index: index }));
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
