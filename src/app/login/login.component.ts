import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  errorMessage: string = '';
  private formSubmitAttempt: boolean;
  

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
/*submit()
{
  console.log(this.formGroup.value);
  //this.root.navigate(['home'])
  const{username,password}=this.formGroup.value;
 this.authf.auth.signInWithEmailAndPassword(username, password).then(userCred => {
    localStorage.setItem("1","1")
    console.log('login', userCred);
    this.root.navigate(['home']);
    

  },err => {
    console.log(err);
    this.errorMessage = err.message;
  });
 
}*/
submit()
{
  console.log(this.formGroup.value);
  //this.root.navigate(['home'])
  const{username,password}=this.formGroup.value;
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(res => {
      resolve(res);
      this.root.navigate(['home']);
    

    }, err => reject(err))
  })
 
}
}