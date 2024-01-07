import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatRoomComponent } from './cat-room.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';



@NgModule({
  declarations: [
    CatRoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CatRoomModule { }
