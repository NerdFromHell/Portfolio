import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: 'contact-me', component: ContactMeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingPagesComponents = [ContactMeComponent];