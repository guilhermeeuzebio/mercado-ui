import { Component, OnInit, Input } from '@angular/core';
import {Mercado} from './mercado.model'

@Component({
  selector: 'mercado-mercado',
  templateUrl: './mercado.component.html'
})
export class MercadoComponent implements OnInit {

  @Input() mercado: Mercado

  constructor() { }

  ngOnInit() {
  }

}
