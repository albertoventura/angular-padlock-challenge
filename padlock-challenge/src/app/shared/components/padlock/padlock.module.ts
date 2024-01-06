import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadlockComponent } from './padlock.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';



@NgModule({
  declarations: [
    PadlockComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PadlockComponent,
  ]
})
export class PadlockModule { }
