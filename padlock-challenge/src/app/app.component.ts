import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalstorageService } from './core/services/localstorage.service';
import { routerLabels } from './core/constants/router-labels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageOrder = {
    [routerLabels.firstDoor]: 1,
    [routerLabels.secondDoor]: 2,
    [routerLabels.thirdDoor]: 3,
    [routerLabels.catRoom]: 4
  }

  constructor(
    private localstorage: LocalstorageService,
    private route: Router,
    private location: Location,
  ){
    this.checkPageOrder();
  }

  ngOnInit(): void {}

  getCurrentPage(){
    return this.localstorage.get('currentPage');
  }

  checkPageOrder(){
    const url = this.location.path().substring(1);
    const currentPage = this.getCurrentPage();

    if(currentPage && currentPage != routerLabels.firstDoor){
      const urlPos = this.pageOrder[url];
      const pagePos = this.pageOrder[currentPage];
      if(urlPos > pagePos){
        this.localstorage.clear();
        this.route.navigate([routerLabels.firstDoor]);
      }else{
        this.route.navigate([currentPage]);
      }
    }else{
      this.route.navigate([routerLabels.firstDoor]);
    }
  }
}
