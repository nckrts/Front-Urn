import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../../../environments/environment";
import {DatabaseService} from "../../core/services/database.service";

@Injectable({
  providedIn: 'root'
})
export class CandidateDatabase {


  constructor(
      private httpClient: HttpClient,
      private databaseService: DatabaseService
  ) {

  }


  deputadoEstadual(id: number, returnData){
    return this.databaseService.get(`${API_PATH}deputado_estadual/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
    );
  }
  deputadoEstadualList(returnData){
    return this.databaseService.get(`${API_PATH}deputado_estadual/mostrar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  }
  deputadoEstadualDelete(id: number, returnData){
    return this.databaseService.delete(`${API_PATH}deputado_estadual/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  }
  deputadoEstadualUpgrade(id:number, returnData){
    return this.databaseService.put(`${API_PATH}deputado_estadual/editar/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  }
  deputadoEstadualCreate(id:number, returnData){
    return this.databaseService.post(`${API_PATH}deputado_estadual/adicionar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  }
  
}
