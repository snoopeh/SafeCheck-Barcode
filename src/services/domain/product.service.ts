import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { ProductDTO } from 'src/models/product.dto';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { Comments } from 'src/app/interfaces/comments';
import { Like } from 'src/app/interfaces/like';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
//import {FileTransfer,FileUploadOptions} from '@ionic-native/file-transfer';
//import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor(public http:HttpClient, private transfer: FileTransfer)
    {
    
    }
    findAll(): Observable<ProductDTO[]>{ 
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product`);
    }
    findByName(name): Observable<ProductDTO[]>{
        return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/name/`+name);
    }
    findById(id): Observable<ProductDTO>{
        return this.http.get<ProductDTO>(`${API_CONFIG.baseUrl}/product/`+id);
    }

    newProduct(product: Product){
        return new Promise((resolve, reject) => {
            this.http.post(`${API_CONFIG.baseUrl}/product`, product)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }

    newComment(comment: Comments){
        return new Promise((resolve, reject) => {
            this.http.put(`${API_CONFIG.baseUrl}/product/comments/`+comment.productId, comment)
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
            this.http.put(`${API_CONFIG.baseUrl}/product/deletecomments/`+comment.productId, comment)
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
            this.http.put(`${API_CONFIG.baseUrl}/product/like/`+like.brandId, like)
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
            this.http.put(`${API_CONFIG.baseUrl}/product/dislike/`+like.brandId, like)
            .subscribe((result: any) => {
                resolve(result);
              },(error) => {
                console.log("ERRO na requisiçao",error.error);
                reject(error);
              });
          });
    }

    uploadImage(img, desc) {
 
        // Destination URL
        let url = API_CONFIG.baseUrl +'/product' ;
     
        // File for Upload
        var targetPath = img;
     
        var options: FileUploadOptions = {
          fileKey: 'productImage',
          chunkedMode: false,
          mimeType: 'multipart/form-data',
          params: { 'desc': desc }
        };
     
        const fileTransfer: FileTransferObject = this.transfer.create();
     
        // Use the FileTransfer to upload the image
        return fileTransfer.upload(targetPath, url, options);
      }
}