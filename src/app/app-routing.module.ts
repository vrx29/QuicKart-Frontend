import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './home/admin-view/admin-view.component';
import { CommonLayoutComponent } from './home/common-layout/common-layout.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

const routes: Routes = [
 
  { path: 'home', component: LandingPageComponent },
  { path: 'common', component: CommonLayoutComponent },
  { path: 'adminView', component: AdminViewComponent },

  { path: '*', component: LandingPageComponent },
  { path: '', component: LandingPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
    



 }
