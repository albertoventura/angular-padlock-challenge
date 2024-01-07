import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';

@Component({
  selector: 'app-third-door',
  templateUrl: './third-door.component.html',
  styleUrls: ['./third-door.component.css']
})
export class ThirdDoorComponent implements OnInit {

  /* isEachLockOpen = [false, false, false, false, false] */
  padnumberList = [
    1,2,3,4,5,6,7,8,9,0
  ]
  tappedPassword: string = "";
  correctPassword: string = "28091998"
  isBigLockOpen: boolean = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  checkPassword(){
    if(this.tappedPassword === this.correctPassword){
      return true;
    }
    return false;
  }
  validateRule(){
    if(this.checkPassword()){
      this.isBigLockOpen = true;
      this.goToNextDoor()
    }else{
      this.isBigLockOpen = false;
    }
  }
  goToNextDoor(){
    this.dialog.open(ModalComponent, {
      data: {
        title: "Terceira Porta",
        path: routerLabels.catRoom,
      }
    });
  }

  tapNumber(i: number){
    this.tappedPassword += this.padnumberList[i]
    this.validateRule();
  }
}
