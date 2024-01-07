import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';

@Component({
  selector: 'app-first-door',
  templateUrl: './first-door.component.html',
  styleUrls: ['./first-door.component.css']
})

export class FirstDoorComponent implements OnInit {

  isEachSmallLockOpen = [false, false, false]
  isBigLockOpen: boolean = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  toogleLock(i: number){
    this.isEachSmallLockOpen[i] = !this.isEachSmallLockOpen[i];
    this.openBig();
  }

  checkAllSmallOpen(){
    return this.isEachSmallLockOpen.every(lock => lock === true);
  }

  openBig(){
    if(this.checkAllSmallOpen()){
      this.isBigLockOpen = true;
      this.goToNextDoor();
    }else{
      this.isBigLockOpen = false;
    }
  }

  goToNextDoor(){
    console.log('open modal');
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: "Primeira Porta",
        path: routerLabels.secondDoor,
      }
    });
  }
}
