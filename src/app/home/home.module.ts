import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from 'src/app/home/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    LandingPageComponent, DialogComponent, LoginComponent, CommonLayoutComponent, UserLayoutComponent, AdminViewComponent


  ],
  imports: [FormsModule,
    ToolbarModule,MatListModule,MatButtonModule,MatSidenavModule,MatToolbarModule,CommonModule,MatRadioModule,NgbModule,MatFormFieldModule,MatDialogModule,MatCardModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatIconModule,HttpClientModule,NotifierModule],
  exports:[

    LandingPageComponent
  ]
})
export class HomeModule { }
