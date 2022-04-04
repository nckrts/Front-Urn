import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroraizComponent } from "./modules/siteScreenPrincipal/cadastroraiz.component";
import { AdicionarComponent } from "./modules/modifyCandidate/adicionar.component";
import {MainComponent} from "./core/main/main.component";
import {DisplayComponent} from "./modules/display/display.component";
import { UserProfileComponent } from "./modules/user-profile/user-profile.component";
import { ResultVoteComponent } from "./modules/result-vote/result-vote.component";


const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [
            {path: '', redirectTo: "menuPrincipal", pathMatch: 'full'},
            {path:"menuPrincipal",component: CadastroraizComponent},
            {path:"urna",component: DisplayComponent},
            {path:"edicaoDeCandidatos",component: AdicionarComponent},
            {path:"perfil",component: UserProfileComponent},
            {path:"result", component: ResultVoteComponent}
        ]
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
