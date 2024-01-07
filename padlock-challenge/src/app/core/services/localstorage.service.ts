import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any){
    this.storage.setItem(key, JSON.stringify(value));
  }
  get(key: string){
    return JSON.parse(this.storage.getItem(key)!);
  }
  clear(){
    this.storage.clear();
  }

}
