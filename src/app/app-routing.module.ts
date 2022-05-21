import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInformationComponent } from './modules/show-information/show-information.component';
import { AlsValidateCpfComponent } from './modules/validate-cpf/als-validate-cpf.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'documentation-information'
  },
  {
    path: 'validate-cpf',
    component: AlsValidateCpfComponent
  },
  {
    path: 'show-information',
    component: ShowInformationComponent
  },
  {
    path: '**',
    component: AlsValidateCpfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
