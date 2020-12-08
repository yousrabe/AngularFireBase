import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from"@angular/fire/auth-guard";
import { SingupComponent } from './singup/singup.component';
import { AuthGuard } from './services/auth.guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SingupComponent},
  {path:"home",component:HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
