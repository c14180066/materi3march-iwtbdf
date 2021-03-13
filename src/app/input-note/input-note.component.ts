import { Component, OnInit } from '@angular/core';
import { Note } from '../data.model';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent implements OnInit {

  semuaData: Note[];
  tempData: Note;
  constructor(public globvar:GlobalvarService) { 

    this.semuaData = this.globvar.arrayNote;
  }



  clickedInput(){
    this.isiNote={
      judulNote:this.judul,
      isiNote:this.isi,
      tanggalNote:this.tanggal,
      favourite:false,
      index: this.semuaData.length
    }
    this.globvar.addData(this.isiNote)
  }

  ngOnInit() {
  }

  isiNote:Note;
  judul=""
  isi=""
  tanggal=""

}