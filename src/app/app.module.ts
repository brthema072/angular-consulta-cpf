import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondaryButtonComponent } from './shared/components/secondary-button/secondary-button.component';
import { AlsHeaderComponent } from './modules/header/als-header.component';
import { AlsMenuComponent } from './modules/menu/als-menu.component';
import { AlsValidateCpfComponent } from './modules/validate-cpf/als-validate-cpf.component';
import { NgxMaskModule } from 'ngx-mask';
import { PrimaryButtonComponent } from './shared/components/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AlsHeaderComponent,
    SecondaryButtonComponent,
    AlsMenuComponent,
    AlsValidateCpfComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
