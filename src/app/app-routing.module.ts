import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInformationComponent } from './modules/show-information/show-information.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'validate-cpf'
  },
  {
    path: 'validate-cpf',
    component: ShowInformationComponent
  },
  {
    path: '**',
    component: ShowInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
