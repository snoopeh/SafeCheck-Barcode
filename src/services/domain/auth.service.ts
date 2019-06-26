import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { LocalUser } from 'src/models/local_user';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {
    constructor(public http:HttpClient, public storage: StorageService)
    {
    
    }

    forgot_password(user: User){
      return new Promise((resolve, reject) => {
          this.http.post(`${API_CONFIG.baseUrl}/auth/forgot_password`, user)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    reset_password(user: User){
      return new Promise((resolve, reject) => {
          this.http.post(`${API_CONFIG.baseUrl}/auth/reset_password`, user)
            .subscribe(res => {
              this.successfulLogin(user.email);
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }
    login(user: User){
        return new Promise((resolve, reject) => {
            this.http.post(`${API_CONFIG.baseUrl}/auth/authenticate`, user)
            .subscribe((result: any) => {
                this.successfulLogin(user.email);
                resolve(result);
              },(error) => {
                reject(error);
              });
          });
    }

    register(user: User){
        return new Promise((resolve, reject) => {
            this.http.post(`${API_CONFIG.baseUrl}/auth/register`, user)
              .subscribe(res => {
                this.successfulLogin(user.email);
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });
    }

    successfulLogin(authorizationValue){
        let emailValue = authorizationValue;
        let user : LocalUser = {
            email : emailValue
        };
        this.storage.setLocalUser(user);
    }
    
    logout(){
        this.storage.setLocalUser(null);
    }
}