import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonSimpleComponent } from './shared/components/button-simple/button-simple.component';
import { ButtonSelectComponent } from './shared/components/button-select/button-select.component';
import { AlsHeaderComponent } from './modules/als-header/als-header.component';
import { AlsMenuComponent } from './modules/als-menu/als-menu.component';
import { AlsValidateCpfComponent } from './modules/als-validate-cpf/als-validate-cpf.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AlsHeaderComponent,
    ButtonSimpleComponent,
    ButtonSelectComponent,
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
