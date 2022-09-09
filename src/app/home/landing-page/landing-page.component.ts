import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DialogComponent } from '../dialog/dialog.component';
import { IProduct } from '../Home-Interfaces/IProduct';
import { HomePageService } from '../HomePage-Services/home-page.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [NgbCarouselConfig]
})

export class LandingPageComponent implements OnInit {
  title = 'ng-carousel-demo';
  productList:IProduct[]=[]
  private readonly notifier: NotifierService;
  sessionFlag:boolean=false

  membershipIcon='assets/premiumMembershp.jpg'
loggedInUser:LoggedInUser=null
  //This array is representing the upper carousel.
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/Product_Images/carousel1.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/Product_Images/carousel2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/Product_Images/carousel3.jpg"}
  ];


  //These are images of Products
  productImages:string[]=[]
//   ['assets/Product_Images/Point_and_shoot_cameras.jpg','assets/Product_Images/TV.jpg','assets/Product_Images/watch.jpg','assets/Product_Images/supplement.jpg',
// 'assets/Product_Images/shirt.jpg','assets/Product_Images/eyewear.gif','assets/Product_Images/jeans.jpg','assets/Product_Images/jumpsuits.gifs'

// ]

  //This array is representing the lower carousel
  images_Lower = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/Product_Images/carousel5.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/Product_Images/carousel5.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/Product_Images/carousel6.jpg"}
  ];
  constructor(config: NgbCarouselConfig,private service: HomePageService,private active_route: ActivatedRoute, notifierService: NotifierService,public dialog: MatDialog, public loginDialog:MatDialog) {
    config.interval = 1500;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.notifier = notifierService;
    this.loggedInUser=sessionStorage.getItem('userEmailID')    
  }
  ngOnInit(): void {
    this.FetchProducts()
    if(sessionStorage.getItem('userEmailID')!=null){
      this.loggedInUser=sessionStorage.getItem('userEmailID')
    }
    console.log('reached constructor')
    }



  FetchProducts(){
    this.service.getProducts().subscribe(
      res => {
        this.productList = res
        console.log('Products fetched');
        console.log(this.productList);
      },
      err => {
        this.productList = []
        console.log('error occured');
      }
    )
  }


  //this method will run when the add membership will be clicked





}

type LoggedInUser='' | null |string;

