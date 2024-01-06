import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material/material.module';
import { FirstDoorModule } from './pages/first-door/first-door.module';
import { SecondDoorModule } from './pages/second-door/second-door.module';
import { ThirdDoorModule } from './pages/third-door/third-door.module';
import { CatRoomModule } from './pages/cat-room/cat-room.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirstDoorModule,
    SecondDoorModule,
    ThirdDoorModule,
    CatRoomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
