import { NavigationService } from './services/navigation.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// angular materials
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
// Routing
import { AppRoutingModule, RoutingPagesComponent } from './app-routing.module';
// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BtnComponent } from './components/btn/btn.component';
import { ArrowUpComponent } from './components/arrow-up/arrow-up.component';
import { ArrowDownComponent } from './components/arrow-down/arrow-down.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    EmailFormComponent,
    RoutingPagesComponent,
    BtnComponent,
    ArrowUpComponent,
    ArrowDownComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
