import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home-components/dashboard/dashboard.component';
import { ItemsComponent } from './home-components/items/items.component';
import { ThingsComponent } from './home-components/things/things.component';
import { StuffComponent } from './stuff/stuff.component';
import { DoodadsComponent } from './stuff-components/doodads/doodads.component';
import { GizmosComponent } from './stuff-components/gizmos/gizmos.component';
import { WidgetsComponent } from './stuff-components/widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ItemsComponent,
    ThingsComponent,
    StuffComponent,
    DoodadsComponent,
    GizmosComponent,
    WidgetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
