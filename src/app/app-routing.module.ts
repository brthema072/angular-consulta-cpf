import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInformationComponent } from './modules/show-information/show-information.component';
import { ValidateCpfComponent } from './modules/validate-cpf/validate-cpf.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'documentation-information'
  },
  {
    path: 'validate-cpf',
    component: ValidateCpfComponent
  },
  {
    path: 'show-information',
    component: ShowInformationComponent
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
