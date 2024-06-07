import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalesRoutingModule } from './canales-routing.module';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    CanalesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CanalesModule { }
