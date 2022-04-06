import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../../../environments/environment";
import {DatabaseService} from "../../core/services/database.service";

@Injectable({
  providedIn: 'root'
})
export class OptionsModifyService {


  constructor(
      private httpClient: HttpClient,
      private databaseService: DatabaseService
  ) { }


  deputadoEstadual(id: number){
    let returnData = null;
    this.databaseService.get(`${API_PATH}deputado_estadual/`+ id, {}).subscribe(
        (response) => {returnData = response},
        (error) => {returnData = error}
    );

    return returnData;
  }

  deputadoEstadualList(){
    return this.databaseService.get(`${API_PATH}deputado_estadual`, {});
  }

  obterTodos(){
    return this.httpClient.get(`${API_PATH}deputado_estadual`);
  }
  deletarTodos(){
    return this.httpClient.delete(`${API_PATH}deputado_estadual`);
  }
}
