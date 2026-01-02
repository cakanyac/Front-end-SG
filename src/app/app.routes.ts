import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { MapComponent } from './pages/map/map';
import { ParcelleComponent } from './pages/parcelle/parcelle';
import { RobotComponent } from './pages/robot/robot';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'parcelle', component: ParcelleComponent },
  { path: 'robot', component: RobotComponent }
];
