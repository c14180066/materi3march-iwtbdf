import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router){

  }

  name = 'Angulars ' + VERSION.major;

  public goToInputNote(){
    this.router.navigate(["/input"]);
  }

  public goToDetailNote(){
    this.router.navigate(["/detail"]);
  }

  public goToFavNote(){
    this.router.navigate(["/favourite"]);
  }
}
