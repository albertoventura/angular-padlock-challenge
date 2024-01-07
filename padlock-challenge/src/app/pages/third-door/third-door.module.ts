import { PadnumberModule } from './../../shared/components/padnumber/padnumber.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdDoorComponent } from './third-door.component';
import { PadlockModule } from 'src/app/shared/components/padlock/padlock.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';



@NgModule({
  declarations: [
    ThirdDoorComponent
  ],
  imports: [
    CommonModule,
    PadlockModule,
    PadnumberModule,
    MaterialModule,
  ]
})
export class ThirdDoorModule { }
