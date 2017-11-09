import { Component, OnInit } from '@angular/core';

import {Mercado} from './mercado/mercado.model'

@Component({
  selector: 'mercado-mercados',
  templateUrl: './mercados.component.html'
})
export class MercadosComponent implements OnInit {

mercados: Mercado[] = [
  {
     id: "bread-bakery",
     name: "Bread & Bakery",
     category: "Bakery",
     deliveryEstimate: "25m",
     rating: 4.9,
     imagePath: "assets/images/mercados/breadbakery.png"
   },
   {
     id: "burger-house",
     name: "Burger House",
     category: "Hamburgers",
     deliveryEstimate: "100m",
     rating: 3.5,
     imagePath: "assets/images/mercados/burgerhouse.png"
   }
]

  constructor() { }

  ngOnInit() {
  }

}
