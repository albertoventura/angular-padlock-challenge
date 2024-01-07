import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadnumberComponent } from './padnumber.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';




@NgModule({
  declarations: [
    PadnumberComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PadnumberComponent,
  ]
})
export class PadnumberModule { }
