import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent implements OnInit {
  // Estado local de nieto
  contador: number = 0;

  // importacion de Store
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Observable de la store y asignacion de estado local
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    // Dispatch de la accion a traves de la NgRx Store
    this.store.dispatch(actions.reset());
  }
}
