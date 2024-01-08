import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-padlock',
  templateUrl: './padlock.component.html',
  styleUrls: ['./padlock.component.css']
})
export class PadlockComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() isBig: boolean = false;
  @Input() isInteractive: boolean = true;
  @Input() arialabel: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
