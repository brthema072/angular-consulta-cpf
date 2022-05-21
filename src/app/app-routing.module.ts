import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateCpfComponent } from './modules/validate-cpf/validate-cpf.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'validate-cpf'
  },
  {
    path: 'validate-cpf',
    component: ValidateCpfComponent
  },
  {
    path: '**',
    component: ValidateCpfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
