import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';
@Component({
  selector: 'app-second-door',
  templateUrl: './second-door.component.html',
  styleUrls: ['./second-door.component.css']
})
export class SecondDoorComponent implements OnInit {

  isEachLockOpen = [false, false, false, false, false];
  pageKey: string = routerLabels.secondDoor;

  constructor(
    public dialog: MatDialog,
    private localstorage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.checkState();
  }

  toogleLock(i: number){
    this.isEachLockOpen[i] = !this.isEachLockOpen[i];
    this.saveState(this.isEachLockOpen);
    this.validateCombination();
  }

  validateCombination(){
    this.getState();
    if(this.checkAllLocks()){
      this.goToNextDoor()
    }
  }

  checkAllLocks(){
    for (let i = 0; i < this.isEachLockOpen.length; i++) {
      if ((i === 2 && this.isEachLockOpen[i] !== false) || (i !== 2 && this.isEachLockOpen[i] !== true)) {
        return false;
      }
    }
    return true;
  }

  goToNextDoor(){
    this.dialog.open(ModalComponent, {
      data: {
        title: "Segunda Porta",
        path: routerLabels.thirdDoor,
      }
    });
  }

  saveState(state: boolean[]){
    this.localstorage.set(this.pageKey, state);
  }

  getState(){
    const state = this.localstorage.get(this.pageKey);
    return state;
  }

  checkState(){
    if(this.getState()){
      this.isEachLockOpen = this.getState();
      this.validateCombination();
    }
  }
}
