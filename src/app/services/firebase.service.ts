import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 isLoggedIn=false
  constructor(public firebaseAuth:AngularFireAuth) { }
  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.firebaseAuth.auth.signOut();
        resolve();
      }
      else{
        reject();
      }
    });
  }
}
