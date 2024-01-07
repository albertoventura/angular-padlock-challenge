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
    console.log('lock combin', this.isEachLockOpen);
    console.log('lock check', this.checkAllLocks());
    this.validateCombination();
  }

  checkAllLocks(){
    for (let i = 0; i < this.isEachLockOpen.length; i++) {
      /* if (i === 2) {
        if (this.isEachLockOpen[i] !== false) {
          return false;
        }
      } else {
        if (this.isEachLockOpen[i] !== true) {
          return false;
        }
      } */
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
    console.log('open modal');
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: "Secunda Porta",
        path: routerLabels.thirdDoor,
      }
    });
  }

}
