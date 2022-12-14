import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/main-body/register-form/register-form.component';
import { LoginFormComponent } from './components/main-body/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { SharedComponent } from './components/shared/shared.component';
import { ErrorsComponent } from './components/shared/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    MainBodyComponent,
    SharedComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
