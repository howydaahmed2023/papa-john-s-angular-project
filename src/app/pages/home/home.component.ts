import { Component } from '@angular/core';
import { ImageSliderComponent } from "../../components/image-slider/image-slider.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ImageSliderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {







}
