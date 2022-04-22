import { Injectable } from '@angular/core';
import {API_PATH} from "../../../environments/environment";
import {DatabaseService} from "../../core/services/database.service";
import {CandidateModel} from "./candidate.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CandidateModule} from "./candidate.module";

@Injectable({
    providedIn: 'root'
})
export class CandidateDatabase {

    votos: any
    public teste: string;
    constructor(
        private databaseService: DatabaseService,
        private httpClient: HttpClient
    ) {

    }




    votesforestadual(id): Observable<any> {

        return this.databaseService.putvote(`${API_PATH}/api/deputado_estadual/editarvotos/` + id, this.votos);
    }

    votesforpresidente(id): Observable<any> {
        return this.databaseService.putvote(`${API_PATH}/api/presidente/editarvotos/` + id, this.votos)
    }

    votesforfederal(id): Observable<any> {
        return this.databaseService.putvote(`${API_PATH}/api/deputado_federal/editarvotos/` + id, this.votos)
    }

    votesforsenador(id): Observable<any> {

        return this.databaseService.putvote(`${API_PATH}/api/senadors/editarvotos/` + id, this.votos)
    }

    votesforgovernador(id): Observable<any> {
        return this.databaseService.putvote(`${API_PATH}/api/governadors/editarvotos/` + id, this.votos)
    }

    //---------------------


    deputadoEstadual(id: number, returnData){
        return this.databaseService.get(`${API_PATH}/api/deputado_estadual/${id}`, {})
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

    // deputadoEstadualDelete(id: number, returnData){
    //     return this.databaseService.delete(`${API_PATH}/api/deputado_estadual/${id}`, {})
    //         .subscribe(
    //             (response) => {returnData({data: response})},
    //             (error) => {returnData({error: error})}
    //         );
    // };

    deputadoEstadualDelete(id: number): Observable<CandidateModel>{
        return this.httpClient.delete<CandidateModel>(`${API_PATH}/api/deputado_estadual/deletar/${id}`);
    };


    deputadoEstadualLer(id:string): Observable<CandidateModel> {
        const url = `${API_PATH}/api/deputado_estadual/${id}`
        return this.httpClient.get<CandidateModel>(url)
    };

    deputadoEstadualUpgrade(candidate: CandidateModel): Observable<CandidateModel> {
        const url = `${API_PATH}deputado_estadual/editar/${candidate.id}`
        return this.httpClient.put<CandidateModel>(`${API_PATH}/api/deputado_estadual/editar/${candidate.id}`, candidate)
    };

    deputadoEstadualCreate(candidate: CandidateModel): Observable<CandidateModel>{
        return this.httpClient.post<CandidateModel>(`${API_PATH}/api/deputado_estadual/adicionar`, candidate)

    };

    //--------------------------------------------Federal-------------------------------------------

    deputadoFederal(id: number, returnData){
        return this.databaseService.get(`${API_PATH}/api/deputado_federal/${id}`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };

    deputadoFederalList(returnData){
        return this.databaseService.get(`${API_PATH}/api/deputado_federal/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };


    deputadoFederalDelete(id: number): Observable<CandidateModel>{
        return this.httpClient.delete<CandidateModel>(`${API_PATH}/api/deputado_federal/deletar/${id}`);
    };

    deputadoFederalUpgrade(candidate: CandidateModel): Observable<CandidateModel> {
        const url = `${API_PATH}deputado_federal/editar/${candidate.id}`
        return this.httpClient.put<CandidateModel>(`${API_PATH}/api/deputado_federal/editar/${candidate.id}`, candidate)
    };
    deputadoFederalCreate(candidate: CandidateModel): Observable<CandidateModel>{
        return this.httpClient.post<CandidateModel>(`${API_PATH}/api/deputado_federal/adicionar`, candidate)

    };

    //--------------------------------------------governador-------------------------------------------



    governador(id: number, returnData){
        return this.databaseService.get(`${API_PATH}/api/governadors/${id}`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };
    governadorList(returnData){
        return this.databaseService.get(`${API_PATH}/api/governadors/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };

    governadorDelete(id: number): Observable<CandidateModel>{
        return this.httpClient.delete<CandidateModel>(`${API_PATH}/api/governadors/deletar/${id}`);
    };

    governadorUpgrade(candidate: CandidateModel): Observable<CandidateModel> {
        const url = `${API_PATH}deputado_governadors/editar/${candidate.id}`
        return this.httpClient.put<CandidateModel>(`${API_PATH}/api/governadors/editar/${candidate.id}`, candidate)
    };
    governadorCreate(candidate: CandidateModel): Observable<CandidateModel>{
        return this.httpClient.post<CandidateModel>(`${API_PATH}/api/governadors/adicionar`, candidate)
    };


    //----------------------------------------Governador----------------------------



    senador(id: number, returnData){
        return this.databaseService.get(`${API_PATH}/api/senadors/${id}`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };

    senadorList(returnData){
        return this.databaseService.get(`${API_PATH}/api/senadors/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };

    senadorDelete(id: number): Observable<CandidateModel>{
        return this.httpClient.delete<CandidateModel>(`${API_PATH}/api/senadors/deletar/${id}`);
    };

    senadorUpgrade(candidate: CandidateModel): Observable<CandidateModel> {
        const url = `${API_PATH}senadors/editar/${candidate.id}`
        return this.httpClient.put<CandidateModel>(`${API_PATH}/api/senadors/editar/${candidate.id}`, candidate)
    };

    senadorCreate(candidate: CandidateModel): Observable<CandidateModel>{
        return this.httpClient.post<CandidateModel>(`${API_PATH}/api/senadors/adicionar`, candidate)
    };


    // ------------------------------------------Presidente--------------------


    presidente(id: number, returnData){
        return this.databaseService.get(`${API_PATH}/api/presidente/${id}`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };

    presidenteList(returnData){
        return this.databaseService.get(`${API_PATH}/api/presidente/mostrar`, {})
            .subscribe(
                (response) => {returnData({data: response})},
                (error) => {returnData({error: error})}
            );
    };


    presidenteDelete(id: number): Observable<CandidateModel>{
        return this.httpClient.delete<CandidateModel>(`${API_PATH}/api/presidente/deletar/${id}`);
    };

    presidenteUpgrade(candidate: CandidateModel): Observable<CandidateModel> {
        const url = `${API_PATH}presidente/editar/${candidate.id}`
        return this.httpClient.put<CandidateModel>(`${API_PATH}/api/presidente/editar/${candidate.id}`, candidate)
    };

    presidenteCreate(candidate: CandidateModel): Observable<CandidateModel>{
        return this.httpClient.post<CandidateModel>(`${API_PATH}/api/presidente/adicionar`, candidate)
    };



    //-----------------------------



    numberofEstadual(number): Observable<any> {
        return this.databaseService.get(`${API_PATH}/api/deputado_estadual/encontrar/` + number, [])
    }

    numberofPresident(number): Observable<any> {
        return this.databaseService.get(`${API_PATH}/api/presidente/encontrar/` + number, [])
    }

    numberofSenador(number): Observable<any> {
        return this.databaseService.get(`${API_PATH}/api/senadors/encontrar/` + number, [])
    }

    numberofGovernador(number): Observable<any> {
        return this.databaseService.get(`${API_PATH}/api/governadors/encontrar/` + number, [])
    }

    numberofFederal(number): Observable<any> {
        return this.databaseService.get(`${API_PATH}/api/deputado_federal/encontrar/` + number, [])
    }

}