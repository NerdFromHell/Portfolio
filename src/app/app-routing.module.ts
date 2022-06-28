import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'home' } },
  { path: 'home', component: HomepageComponent, data: { animation: 'home' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: 'contact-me', component: ContactMeComponent, data: { animation: 'contactme' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingPagesComponent = [
  HomepageComponent,
  ProfileComponent,
  SkillsComponent,
  ProjectsComponent,
  ContactMeComponent,
  PageNotFoundComponent
];
