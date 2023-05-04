import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  contador: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Observable of the store
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
}
