import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
images=[
  {url:"../../../assets/images/slider/Papadias-Cookies-Web.jpg"},
  {url:"../../../assets/images/slider/Buy-2-Get1-Free-web-2.jpg"},
  {url:"../../../assets/images/slider/Cookies-N-Cream-Rolls-WP.jpg"},
  {url:"../../../assets/images/slider/Family-Pizza-Web-siteWS.jpg"},
  {url:"../../../assets/images/slider/Jalapeno-Stuffed-Crust-Webpage-wb.jpg"},
  {url:"../../../assets/images/slider/Papa-Double-Large-Offer-Homepage-Banner-web.jpg"},
  {url:"../../../assets/images/slider/Papa-double-medium-web.jpg"},
  {url:"../../../assets/images/slider/Papadias-Web-site-AR-web.jpg"},
  {url:"../../../assets/images/slider/Pepperoni-Stuffed-Crust-Home-Page-Banner-web.jpg"},






]
}
