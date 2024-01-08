import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routerLabels } from 'src/app/core/constants/router-labels';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';

@Component({
  selector: 'app-third-door',
  templateUrl: './third-door.component.html',
  styleUrls: ['./third-door.component.css']
})
export class ThirdDoorComponent implements OnInit {

  padnumberList = [1,2,3,4,5,6,7,8,9,0];
  tappedPassword: string[] = [];
  convertedTappedPasswordIntoArray: string[] = [];
  correctPassword: string = "28091998"
  isBigLockOpen: boolean = false;
  pageKey: string = routerLabels.thirdDoor;

  constructor(
    public dialog: MatDialog,
    private localstorage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.checkState();
  }

  tapNumber(i: number){
    this.tappedPassword.push(this.padnumberList[i].toString());
    this.saveState(this.tappedPassword);
    this.validateRule();
  }

  validateRule(){
    if(this.tappedPassword.length === this.correctPassword.length){
      if(this.checkPassword()){
        this.isBigLockOpen = true;
        this.goToNextDoor()
      }else{
        this.isBigLockOpen = false;
        this.tappedPassword = []
      }
    }
  }

  checkPassword(){
    const tappedPasswordAsString = this.convertArrayIntoString(this.tappedPassword);
    if(tappedPasswordAsString === this.correctPassword){
      return true;
    }else{
      return false
    }
  }

  convertArrayIntoString(array: string[]){
    return array.join(',').replace(/,/g, '');
  }

  goToNextDoor(){
    this.dialog.open(ModalComponent, {
      data: {
        title: "Terceira Porta",
        path: routerLabels.catRoom,
      }
    });
  }

  saveState(state: string[]){
    this.localstorage.set(this.pageKey, state);
  }

  getState(){
    const state = this.localstorage.get(this.pageKey);
    return state;
  }

  checkState(){
    if(this.getState()){
      this.tappedPassword = this.getState();
      this.validateRule();
    }
  }
}
