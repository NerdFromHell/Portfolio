import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact-me', component: ContactMeComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingPagesComponent = [
  HomepageComponent,
  SkillsComponent,
  ContactMeComponent,
  PageNotFoundComponent
];
