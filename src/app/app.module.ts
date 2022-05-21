import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondaryButtonComponent } from './shared/components/secondary-button/secondary-button.component';
import { HeaderComponent } from './modules/header/header.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ValidateCpfComponent } from './modules/validate-cpf/validate-cpf.component';
import { NgxMaskModule } from 'ngx-mask';
import { PrimaryButtonComponent } from './shared/components/primary-button/primary-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './shared/components/timeline/timeline.component';
import { FooterComponent } from './modules/footer/footer.component';
import { InformationComponent } from './modules/validate-cpf/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondaryButtonComponent,
    MenuComponent,
    ValidateCpfComponent,
    PrimaryButtonComponent,
    TimelineComponent,
    FooterComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
