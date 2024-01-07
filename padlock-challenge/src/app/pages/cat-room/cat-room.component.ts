import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-cat-room',
  templateUrl: './cat-room.component.html',
  styleUrls: ['./cat-room.component.css']
})
export class CatRoomComponent implements OnInit {

  constructor(
    private route: Router,
    private localstorage: LocalstorageService,
  ) { }

  ngOnInit(): void {
  }

  resetChallenge(){
    this.route.navigate([routerLabels.firstDoor]);
    this.localstorage.clear();
  }
}
