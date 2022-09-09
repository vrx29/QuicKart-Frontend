import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { config } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { HomePageService } from '../HomePage-Services/home-page.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {
  private readonly notifier: NotifierService;
  loggedInUser:LoggedInUser=null
  membershipIcon='assets/premiumMembershp.jpg'
  membershipFlag=true;


  constructor(private service: HomePageService, private router: Router,notifierService: NotifierService,public dialog: MatDialog, public loginDialog:MatDialog) {
   
    this.notifier = notifierService;
    if(sessionStorage.getItem('userEmailID')!=null){
      this.loggedInUser=sessionStorage.getItem('userEmailID')
    }
    else{
      this.loggedInUser=null;
      if(sessionStorage.getItem('userEmailID')==null)
      {
        sessionStorage.clear();      
      }
    }
    
  }
  ngOnInit(): void {
  }

//This is for opening another Modal for Login tab!
openLoginDialog(): void {
  const dialogRef = this.loginDialog.open(LoginComponent, {
    width: '45rem',
    height:'35rem',
    data: {name: "sample", animal: "sampleanimal"},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(sessionStorage.getItem('userEmailID')!=null){
      this.loggedInUser=sessionStorage.getItem('userEmailID')
      console.log('Session received'+this.loggedInUser)
     // this.router.navigate(['home'])
    }
  
  
    //this.animal = result;
  });


  
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '25rem',
    height:'25rem',
    data: {name: "sample", animal: "sampleanimal"},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    

    //this.animal = result;
  });
}

AddMembership()
{
console.log('reached')
  if(this.membershipFlag==true)
  {
    this.openDialog()
  }
  else{
    console.log('reached')

    this.showNotification('success','Membership feature is in Beta-Phase')
  }



}


public showNotification(type: string, message: string): void {

  this.notifier.notify(type, message);
}

}

type LoggedInUser='' | null |string;

