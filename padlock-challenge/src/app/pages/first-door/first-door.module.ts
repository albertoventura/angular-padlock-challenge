import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDoorComponent } from './first-door.component';
import { PadlockModule } from 'src/app/shared/components/padlock/padlock.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';



@NgModule({
  declarations: [
    FirstDoorComponent
  ],
  imports: [
    CommonModule,
    PadlockModule,
    MaterialModule,
  ]
})
export class FirstDoorModule { }
