
import { Routes } from '@angular/router';
 
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { CalculadoraComponent } from '../../calculadora/calculadora.component';
import { EditComponent } from '../../user/edit/edit.component';

 
 
 
export const AdminLayoutRoutes: Routes = [
    { path: 'user',      component: HomeComponent },
    { path: 'carpool',           component: UserComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '',        component: LoginComponent },
    { path: 'editRoute',           component: EditComponent },
    { path: 'calculadora',        component: CalculadoraComponent },
    
    
];
 
 
 

