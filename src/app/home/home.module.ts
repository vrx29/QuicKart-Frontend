import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from 'src/app/home/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    LandingPageComponent


  ],
  imports: [
    CommonModule,NgbModule,MatCardModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatIconModule],
  exports:[

    LandingPageComponent
  ]
})
export class HomeModule { }
