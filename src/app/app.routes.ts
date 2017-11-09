import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {MercadosComponent} from './mercados/mercados.component'
import {AboutComponent} from './about/about.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mercados', component: MercadosComponent},
  {path: 'about', component: AboutComponent}
]
