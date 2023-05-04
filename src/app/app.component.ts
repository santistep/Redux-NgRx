import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  incrementar() {
    this.store.dispatch(actions.increment());
  }

  decrementar() {
    this.store.dispatch(actions.decrement());
  }
}
