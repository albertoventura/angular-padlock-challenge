import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';
@Component({
  selector: 'app-second-door',
  templateUrl: './second-door.component.html',
  styleUrls: ['./second-door.component.css']
})
export class SecondDoorComponent implements OnInit {

  isEachLockOpen = [false, false, false, false, false]

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  toogleLock(i: number){
    this.isEachLockOpen[i] = !this.isEachLockOpen[i];
    this.validateCombination();
  }

  checkAllLocks(){
    for (let i = 0; i < this.isEachLockOpen.length; i++) {
      if ((i === 2 && this.isEachLockOpen[i] !== false) || (i !== 2 && this.isEachLockOpen[i] !== true)) {
        return false;
      }
    }
    return true;
  }

  validateCombination(){
    if(this.checkAllLocks()){
      this.goToNextDoor()
    }
  }
  goToNextDoor(){
    this.dialog.open(ModalComponent, {
      data: {
        title: "Secunda Porta",
        path: routerLabels.thirdDoor,
      }
    });
  }

}
