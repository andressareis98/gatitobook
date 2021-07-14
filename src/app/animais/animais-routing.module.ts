import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaDeAnimaisComponent },
  { path: ':animalId', component: DetalheAnimalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
