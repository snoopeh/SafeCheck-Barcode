import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { BrandDTO } from 'src/models/brand.dto';
import { Brand } from 'src/app/interfaces/brand';
import { Comments } from 'src/app/interfaces/comments';
import { Like } from 'src/app/interfaces/like';

@Injectable()
export class BrandService {
    constructor(public http:HttpClient)
    {
    
    }
    findAll(): Observable<BrandDTO[]>{ 
        return this.http.get<BrandDTO[]>(`${API_CONFIG.baseUrl}/brand`);
    }
    findByName(name): Observable<BrandDTO[]>{
        return this.http.get<BrandDTO[]>(`${API_CONFIG.baseUrl}/brand/name/`+name);
    }
    findById(id): Observable<BrandDTO>{
        return this.http.get<BrandDTO>(`${API_CONFIG.baseUrl}/brand/`+id);
    }

    newBrand(brand: Brand){
        return new Promise((resolve, reject) => {
            this.http.post(`${API_CONFIG.baseUrl}/brand`, brand)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                reject(error);
              });
          });
    }
    newComment(comment: Comments){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/brand/comments/`+comment.brandId, comment)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }
    deleteComment(comment: Comments){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/brand/deletecomments/`+comment.brandId, comment)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }

    like(like: Like){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/brand/like/`+like.brandId, like)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }

    dislike(like: Like){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/brand/dislike/`+like.brandId, like)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }
}