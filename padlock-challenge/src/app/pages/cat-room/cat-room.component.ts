import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerLabels } from 'src/app/core/constants/router-labels';

@Component({
  selector: 'app-cat-room',
  templateUrl: './cat-room.component.html',
  styleUrls: ['./cat-room.component.css']
})
export class CatRoomComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }

  resetChallenge(){
    this.route.navigate([routerLabels.firstDoor]);
  }
}
