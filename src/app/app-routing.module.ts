import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { authGuard } from './auth.guard';
import { ElvesComponent } from './fantasy-coponents/elves/elves.component';
import { TrollsComponent } from './fantasy-coponents/trolls/trolls.component';
import { DonutsComponent } from './reality-components/donuts/donuts.component';
import { PizzaComponent } from './reality-components/pizza/pizza.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // fantasy components
        { path: 'elves', component: ElvesComponent },
        { path: 'trolls', component: TrollsComponent },
      { path: 'items', component: ItemsComponent },
      // reality components
        { path: 'donuts', component: DonutsComponent },
        { path: 'pizza', component: PizzaComponent },
      { path: 'things', component: ThingsComponent },
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    component: StuffComponent,
    children: [
      { path: 'doodads', component: DoodadsComponent },
      { path: 'gizmos', component: GizmosComponent },
      { path: 'widgets', component: WidgetsComponent },
    ],
    canActivate: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
