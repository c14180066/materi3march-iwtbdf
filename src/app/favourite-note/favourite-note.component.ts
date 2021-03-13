import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Note } from "../data.model";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-favourite-note",
  templateUrl: "./favourite-note.component.html",
  styleUrls: ["./favourite-note.component.css"]
})
export class FavouriteNoteComponent implements OnInit {
  semuaData: Note[] = [];
  arrayDisplay: Note[] = [];

  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData.length = 0;
    for (let i = 0; i < this.globalVar.arrayNote.length; i++) {
      if (this.globalVar.arrayNote[i].favourite == true) {
        this.semuaData.push(this.globalVar.arrayNote[i]);
      }
    }
  }

  ngOnInit() {
    this.arrayDisplay = this.semuaData;
  }
}
