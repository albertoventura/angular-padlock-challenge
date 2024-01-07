import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

export interface DialogData {
  path: string;
  title: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: string = "";
  path: string = "";

  constructor(
    private route: Router,
    private localstorage: LocalstorageService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
    this.buildData(data);
  }

  ngOnInit(): void {
  }

  buildData(data: DialogData){
    this.title = data.title;
    this.path = data.path;
  }
  goNext(){
    this.dialogRef.close();
    this.localstorage.set('currentPage', this.path);
    this.route.navigate([this.path]);
  }
}
