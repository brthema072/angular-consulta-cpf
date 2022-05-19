import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonSimpleComponent } from './shared/components/button-simple/button-simple.component';
import { AlsHeaderComponent } from './modules/header/als-header.component';
import { AlsMenuComponent } from './modules/menu/als-menu.component';
import { AlsValidateCpfComponent } from './modules/validate-cpf/als-validate-cpf.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AlsHeaderComponent,
    ButtonSimpleComponent,
    AlsMenuComponent,
    AlsValidateCpfComponent
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
