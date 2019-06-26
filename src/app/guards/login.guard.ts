import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/services/domain/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
 
  constructor(
    private storage: StorageService,
    private router: Router,)
  { }
  canActivate(): Promise<boolean>{
    return new Promise( resolve =>{
     var usr = this.storage.getLocalUser();
     console.log("login");
     if(usr != null){
      this.router.navigate(['tabs/search'])
     } 
     resolve(usr == null ? true:false)
    });
  }
  }
  