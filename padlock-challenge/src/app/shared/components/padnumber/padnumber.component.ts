import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-padnumber',
  templateUrl: './padnumber.component.html',
  styleUrls: ['./padnumber.component.css']
})
export class PadnumberComponent implements OnInit {
  @Input() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
