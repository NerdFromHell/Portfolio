import { NavigationService } from './services/navigation.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular flex 
import { FlexLayoutModule } from '@angular/flex-layout';
// angular materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
// components
import { AppRoutingModule, RoutingPagesComponents } from './app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmailFormComponent,
    RoutingPagesComponents,
    TopbarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
