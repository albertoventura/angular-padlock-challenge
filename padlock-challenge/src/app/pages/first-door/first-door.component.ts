import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-door',
  templateUrl: './first-door.component.html',
  styleUrls: ['./first-door.component.css']
})

export class FirstDoorComponent implements OnInit {

  isEachSmallLockOpen = [false, false, false]
  isBigLockOpen: boolean = false;

  constructor() { }

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
    }else{
      this.isBigLockOpen = false;
    }
  }

}
