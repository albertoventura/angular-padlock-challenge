import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerLabels } from './core/constants/router-labels';
import { FirstDoorComponent } from './pages/first-door/first-door.component';
import { SecondDoorComponent } from './pages/second-door/second-door.component';
import { ThirdDoorComponent } from './pages/third-door/third-door.component';
import { CatRoomComponent } from './pages/cat-room/cat-room.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: routerLabels.firstDoor,
    pathMatch: 'full',
  },
  {
    path: routerLabels.firstDoor,
    pathMatch: 'full',
    component: FirstDoorComponent,
  },
  {
    path: routerLabels.secondDoor,
    pathMatch: 'full',
    component: SecondDoorComponent,
  },
  {
    path: routerLabels.thirdDoor,
    pathMatch: 'full',
    component: ThirdDoorComponent,
  },
  {
    path: routerLabels.catRoom,
    pathMatch: 'full',
    component: CatRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
