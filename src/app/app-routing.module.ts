import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

const routes: Routes = [
 
  { path: 'home', component: LandingPageComponent },
  { path: '*', component: LandingPageComponent },
  { path: '', component: LandingPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
    



 }
