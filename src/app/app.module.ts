import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './users.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResumeComponent } from './resume/resume.component';
import { UsersGuard } from './users.guard';
import { TokenInerceptorService } from './token-interceptor.service';
import { TemplateComponent } from './resume/template/template.component';
import { SearchComponent } from './resume/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ResumeComponent,
    TemplateComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule,
    MatRadioModule,
  ],
  providers: [UsersService, UsersGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInerceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}