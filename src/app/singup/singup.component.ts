import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  formGroup: FormGroup;
  private formSubmitAttempt: boolean;
  errorMessage: string = '';
  successMessage: string = '';

  constructor( private fb: FormBuilder,private authf:AngularFireAuth,public root:Router) { }
   
  ngOnInit() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
   

}
submit()
{
  console.log(this.formGroup.value);
   const{username,password}=this.formGroup.value;
   this.authf.auth.createUserWithEmailAndPassword(username, password).then(userCred => {
    console.log('Created user', userCred);
    this.successMessage = "Your account has been created";
    this.errorMessage = "";
    
    

  },err => {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = "";
  })
};
 
}

