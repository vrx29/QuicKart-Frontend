import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HomePageService } from '../HomePage-Services/home-page.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  emailID=''
  private readonly notifier: NotifierService;
  subscribeButton='assets/subscribeButton.png'
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private service: HomePageService,notifierService: NotifierService)
    { 
      if(sessionStorage.getItem('userEmailID')==null){
        sessionStorage.clear();      }
     this.notifier=notifierService
    }

  ngOnInit(): void {
  }

  PostSubscriber() {

    this.service.PostNewSubscriber(this.emailID).subscribe(
      res => {
        console.log(res)
        if(res==true)
        {
          this.showNotification('success','Congratulations for subscribing to QuickCart!')
          this.dialogRef.close();
        }
        else{
          this.showNotification('error','You have already subscribed')
        }
      },
      err => {
        console.log('some error occured while adding the subscriber in DB')
        this.showNotification('error','You have already subscribed')

      }


    )

  }

  
  public showNotification(type: string, message: string): void {

    this.notifier.notify(type, message);
  }


}
