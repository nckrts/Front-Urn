import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
      private httpClient: HttpClient
  ) { }

  get(url: string, param: any){
    return this.httpClient.get(url, {params: param})
        .pipe(tap(res => {},error => {}));
  }
  delete(url: string, param : any){
    return this.httpClient.delete(url, {params: param}).pipe
    (tap(res => {}, error => {}));
  }
  put(url: string, param : any){
    return this.httpClient.delete(url, {params: param}).pipe
    (tap(res => {}, error => {}));
  }
  post(url: string, param : any){
    return this.httpClient.post(url, {params: param}).pipe
    (tap(res => {}, error => {}));
  }
  upgrade(url: string, param : any){
    return this.httpClient.put(url, {params: param}).pipe
    (tap(res => {}, error => {}));
  }


}
