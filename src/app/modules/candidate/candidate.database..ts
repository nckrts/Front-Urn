import { Injectable } from '@angular/core';
import {API_PATH} from "../../../environments/environment";
import {DatabaseService} from "../../core/services/database.service";
import {CandidateModel} from "./candidate.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidateDatabase {

    constructor(
      private databaseService: DatabaseService,
      private httpClient: HttpClient
  ) {

  }


  deputadoEstadual(id: number, returnData){
    return this.databaseService.get(`${API_PATH}deputado_estadual/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
    );
  };

   deputadoEstadualList(returnData){
    return this.databaseService.get(`${API_PATH}/api/deputado_estadual/mostrar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };


    //   deputadoEstadualList(){
  //       return this.databaseService.get(`${API_PATH}/api/deputado_estadual/mostrar`, {})
  //           .subscribe(resultado => console.log(resultado));
  //   };
  deputadoEstadualDelete(id: number, returnData){
    return this.databaseService.delete(`${API_PATH}deputado_estadual/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  deputadoEstadualUpgrade(id:number, returnData){
    return this.databaseService.put(`${API_PATH}deputado_estadual/editar/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  };
  deputadoEstadualCreate(candidate: CandidateModel): Observable<CandidateModel>{
  return this.httpClient.post<CandidateModel>(`${API_PATH}/api/deputado_estadual/adicionar`, candidate)
        // .subscribe(
        //     (response) => {returnData({data: response})},
        //     (error) => {returnData({error: error})},
        // );
  }


  deputadoFederal(id: number, returnData){
    return this.databaseService.get(`${API_PATH}deputado_federa/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  deputadoFederalList(returnData){
    return this.databaseService.get(`${API_PATH}deputado_federa/mostrar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  deputadoFederalDelete(id: number, returnData){
    return this.databaseService.delete(`${API_PATH}deputado_federa/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  deputadoFederalUpgrade(id:number, returnData){
    return this.databaseService.put(`${API_PATH}deputado_federa/editar/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  };
  deputadoFederalCreate(id:number, returnData){
    return this.databaseService.post(`${API_PATH}deputado_federa/adicionar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  };

  governador(id: number, returnData){
    return this.databaseService.get(`${API_PATH}governadors/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  governadorList(returnData){
    return this.databaseService.get(`${API_PATH}governadors/mostrar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  governadorDelete(id: number, returnData){
    return this.databaseService.delete(`${API_PATH}governadors/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})}
        );
  };
  governadorUpgrade(id:number, returnData){
    return this.databaseService.put(`${API_PATH}governadors/editar/`+ id, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  };
  governadorCreate(id:number, returnData){
    return this.databaseService.post(`${API_PATH}governadors/adicionar`, {})
        .subscribe(
            (response) => {returnData({data: response})},
            (error) => {returnData({error: error})},
        );
  };

  senador(id: number, returnData){
        return this.databaseService.get(`${API_PATH}senadors/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  senadorList(returnData){
        return this.databaseService.get(`${API_PATH}senadors/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  senadorDelete(id: number, returnData){
        return this.databaseService.delete(`${API_PATH}senadors/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  senadorUpgrade(id:number, returnData){
        return this.databaseService.put(`${API_PATH}senadors/editar/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})},
            );
    };
  senadorCreate(id:number, returnData){
        return this.databaseService.post(`${API_PATH}senadors/adicionar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})},
            );
    };

  presidente(id: number, returnData){
        return this.databaseService.get(`${API_PATH}presidente/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  presidenteList(returnData){
        return this.databaseService.get(`${API_PATH}presidente/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  presidenteDelete(id: number, returnData){
        return this.databaseService.delete(`${API_PATH}presidente/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
  presidenteUpgrade(id:number, returnData){
        return this.databaseService.put(`${API_PATH}presidente/editar/`+ id, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})},
            );
    };
  presidenteCreate(id:number, returnData){
        return this.databaseService.post(`${API_PATH}presidente/adicionar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})},
            );
    };


}
