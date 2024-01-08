import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-padnumber',
  templateUrl: './padnumber.component.html',
  styleUrls: ['./padnumber.component.css']
})
export class PadnumberComponent implements OnInit {
  @Input() value: number = 0;
  @Input() isClicked: boolean = false;
  @Input() arialabel: string = "";
  @Output() clicked = new EventEmitter<boolean>();
  timeToChangeStatus: number = 300;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isClicked = true;
    this.clicked.emit(this.isClicked);
    setTimeout(()=>{
      this.isClicked = false;
    }, this.timeToChangeStatus);
  }

}
