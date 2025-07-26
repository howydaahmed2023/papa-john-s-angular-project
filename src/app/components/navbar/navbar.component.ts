import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
barBtn:boolean = true;
closeBtn:boolean = false;
showBtn(){
  this.barBtn = false;
  this.closeBtn = true
}
hideBtn(){
  this.barBtn= true;
  this.closeBtn = false
}
}
