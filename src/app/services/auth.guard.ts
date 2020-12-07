import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public root:Router){}
  canActivate()
  {
    if(localStorage.getItem("1")=="1")
    {
      return true
    }
    else {
      this.root.navigate(["/login"])
    }
  }
  
}
