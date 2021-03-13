import { Injectable } from '@angular/core';
import { Note } from './data.model';

@Injectable()
export class GlobalvarService {

  public arrayNote: Note[] = []
    
  constructor() { }

  public getArray(){
    return this.arrayNote;
  }

  public addData(note:Note){
    this.arrayNote.push(note)
  }

   editStatus(index: number) {
    this.arrayNote[index].favourite = true;
  }

}