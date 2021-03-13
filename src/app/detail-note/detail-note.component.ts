import { Component, OnInit } from '@angular/core';
import { Note } from '../data.model';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.css']
})
export class DetailNoteComponent implements OnInit {

  constructor(public globvar:GlobalvarService) { }

  favorite(index: number) {
    this.globvar.editStatus(index);
  }

  ngOnInit() {
  }

  arrayDisplay:Note[]=this.globvar.getArray()
  size = this.arrayDisplay.length
}