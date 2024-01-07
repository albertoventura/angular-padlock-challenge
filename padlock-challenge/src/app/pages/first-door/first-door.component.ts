import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';

@Component({
  selector: 'app-first-door',
  templateUrl: './first-door.component.html',
  styleUrls: ['./first-door.component.css']
})

export class FirstDoorComponent implements OnInit {

  isEachSmallLockOpen = [false, false, false]
  isBigLockOpen: boolean = false;
  pageKey: string = routerLabels.firstDoor;

  constructor(
    public dialog: MatDialog,
    private localstorage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.checkState();
    const currentPage = this.getCurrentPage();
    if(currentPage != routerLabels.firstDoor){
      this.saveCurrentPage();
    }
  }

  toogleLock(i: number){
    this.isEachSmallLockOpen[i] = !this.isEachSmallLockOpen[i];
    this.saveState(this.isEachSmallLockOpen);
    this.validateToOpenBig();
  }

  checkAllSmallOpen(){
    return this.isEachSmallLockOpen.every(lock => lock === true);
  }

  validateToOpenBig(){
    this.getState();
    if(this.checkAllSmallOpen()){
      this.isBigLockOpen = true;
      this.goToNextDoor();
    }else{
      this.isBigLockOpen = false;
    }
  }

  goToNextDoor(){
    this.dialog.open(ModalComponent, {
      data: {
        title: "Primeira Porta",
        path: routerLabels.secondDoor,
      }
    });
  }

  saveState(state: boolean[]){
    this.localstorage.set(this.pageKey, state);
  }
  getState(){
    const state = this.localstorage.get(this.pageKey);
    console.log("local storage first door", state);
    return state;
  }

  checkState(){
    if(this.getState()){
      console.log("tem state");
      this.isEachSmallLockOpen = this.getState();
      this.validateToOpenBig();
    }
  }
  saveCurrentPage(){
    this.localstorage.set('currentPage', routerLabels.firstDoor);
  }
  getCurrentPage(){
    return this.localstorage.get('currentPage');
  }
}
