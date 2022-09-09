import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HomePageService } from '../HomePage-Services/home-page.service';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  radioValue:string='c'
  loginImg='/assets/loginImg.jpg'
  loginBackground='assets/loginBackground.jpg'
  quickCartIcon2='assets/logo2.png'
  loggedInUser=''
  matcher = new MyErrorStateMatcher();
  constructor(private service: HomePageService, private router: Router,public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  ValidateUser(form:NgForm){

    console.log(form.value.userEmail)
    this.service.ValidateUser(form.value.userEmail,form.value.userPassword,this.radioValue).subscribe(
      res=>{
        console.log(res)
        if(res==1)
        {
          sessionStorage.setItem('userEmailID', form.value.userEmail)
          this.onNoClick()
        }
      },
      err=>{
        console.log(err)
      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onChangeRadio(e:string) {
    this.radioValue= e
 }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

