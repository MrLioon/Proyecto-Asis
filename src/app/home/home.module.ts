import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DetalleComponent } from '../detalle/detalle.component';
import {BusquedaComponent} from 'src/app/busqueda/busqueda.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, DetalleComponent,BusquedaComponent]
})
export class HomePageModule {}
