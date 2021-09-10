import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResumeComponent } from './resume/resume.component';
import { UsersGuard } from './users.guard';
import { SearchComponent } from './resume/search/search.component';
import { TemplateComponent } from './resume/template/template.component';
import { ResolverGuard } from './resolver.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UsersGuard] },
  { path: 'resume', component: ResumeComponent, canActivate: [UsersGuard] },
  { path: 'search', component: SearchComponent, canActivate: [UsersGuard] },
  {
    path: 'template/:username',
    component: TemplateComponent,
    canActivate: [UsersGuard],
    resolve: {
      templateData: ResolverGuard,
    },
  },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}