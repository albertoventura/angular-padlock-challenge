import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  /* toogleLock(i: number){
    this.isEachLockOpen[i] = !this.isEachLockOpen[i];
    console.log('lock combin', this.isEachLockOpen);
    console.log('lock check', this.checkAllLocks());
    this.validateCombination();
  } */

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
    console.log('open modal');
  }

  tapNumber(i: number){
    this.tappedPassword += this.padnumberList[i]
    console.log('tapped pass', this.tappedPassword);
    console.log('pass check', this.checkPassword());
    this.validateRule();

  }

}
