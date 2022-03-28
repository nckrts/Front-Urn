import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroraizComponent } from "./cadastroraiz/cadastroraiz.component";
import { DisplayComponent } from "./display/display.component";
import { AdicionarComponent } from "./adicionar/adicionar.component";

const routes: Routes = [
    {path:"clicouvotar",component: DisplayComponent},
    {path:"clicouadicionarCandidato",component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
