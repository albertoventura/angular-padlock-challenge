import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondDoorComponent } from './second-door.component';
import { PadlockModule } from 'src/app/shared/components/padlock/padlock.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { ModalModule } from 'src/app/shared/pages/modal/modal.module';



@NgModule({
  declarations: [
    SecondDoorComponent
  ],
  imports: [
    CommonModule,
    PadlockModule,
    MaterialModule,
    //ModalModule,
  ]
})
export class SecondDoorModule { }
