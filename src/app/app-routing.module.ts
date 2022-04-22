import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroraizComponent } from "./modules/siteScreenPrincipal/cadastroraiz.component";
import {MainComponent} from "./core/main/main.component";
import {DisplayComponent} from "./modules/display/display.component";
import { UserProfileComponent } from "./modules/user-profile/user-profile.component";
import { ResultVoteComponent } from "./modules/result-vote/result-vote.component";
import { CandidateListComponent } from "./modules/candidate/candidate-list/candidate-list.component";
import {CandidatePrintAndEditionComponent} from "./modules/candidate/candidate-print-and-edition/candidate-print-and-edition.component";
import {CandidateCreateComponent} from "./modules/candidate/candidate-create/candidate-create.component";
import {CandidateUpgradeComponent} from "./modules/candidate/candidate-upgrade/candidate-upgrade.component";
import {CandidateDeleteComponent} from "./modules/candidate/candidate-delete/candidate-delete.component";


const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [
            {path:"menucandidatos", component: CandidateListComponent},
            {path: '', redirectTo: "menuPrincipal", pathMatch: 'full'},
            {path:"menuPrincipal",component: CadastroraizComponent},
            {path:"urna",component: DisplayComponent},
            {path:"perfil",component: UserProfileComponent},
            {path:"result", component: ResultVoteComponent},
            {path:"edicao", component: CandidatePrintAndEditionComponent},
            {path:"criar", component: CandidateCreateComponent},
            {path:"editar/:id", component: CandidateUpgradeComponent},
            {path:"deletar/:id", component: CandidateDeleteComponent}
        ]
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
