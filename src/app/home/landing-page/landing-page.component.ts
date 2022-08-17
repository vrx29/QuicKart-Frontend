import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {
  title = 'ng-carousel-demo';
  

  //This array is representing the upper carousel.
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/Product_Images/carousel1.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/Product_Images/carousel2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/Product_Images/carousel3.jpg"}
  ];

  productImages:string[]=['assets/Product_Images/Point_and_shoot_cameras.jpg','assets/Product_Images/TV.jpg','assets/Product_Images/watch.jpg','assets/Product_Images/supplement.jpg',
'assets/Product_Images/shirt.jpg','assets/Product_Images/eyewear.gif','assets/Product_Images/jeans.jpg','assets/Product_Images/jumpsuits.gifs'

]

  //This array is representing the lower carousel
  images_Lower = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/Product_Images/carousel5.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/Product_Images/carousel5.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/Product_Images/carousel6.jpg"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 1500;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    console.log(this.productImages[0])
  }

}
