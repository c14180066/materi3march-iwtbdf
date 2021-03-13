import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalvarService } from './globalvar.service';
import { InputNoteComponent } from './input-note/input-note.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';
import { FavouriteNoteComponent } from './favourite-note/favourite-note.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES:Routes = [
  {path:"input", component: InputNoteComponent},
  {path:"detail", component: DetailNoteComponent},
  {path:"favourite", component: FavouriteNoteComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES) 
  ],
  declarations: [ AppComponent, HelloComponent, InputNoteComponent, DetailNoteComponent, FavouriteNoteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
