import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { DialogComponent } from '../dialog/dialog.component';
import { HomePageService } from '../HomePage-Services/home-page.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  private readonly notifier: NotifierService;
  loggedInUser:LoggedInUser=null
  membershipIcon='assets/premiumMembershp.jpg'
  membershipFlag=true;
  constructor(private service: HomePageService, notifierService: NotifierService,public dialog: MatDialog, public loginDialog:MatDialog) {
   
    this.notifier = notifierService;
    if(sessionStorage.getItem('userEmailID')!=null){
      this.loggedInUser=sessionStorage.getItem('userEmailID')
    }
    else{
      
        sessionStorage.clear();      
    }
    console.log('reached constructor')
    
  }
  ngOnInit(): void {
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
  
public showNotification(type: string, message: string): void {

  this.notifier.notify(type, message);
}

}

type LoggedInUser='' | null |string;

