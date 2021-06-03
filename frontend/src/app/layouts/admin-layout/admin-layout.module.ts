import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CalculadoraComponent } from '../../calculadora/calculadora.component';
import { FilterPipe } from 'app/shared/pipes/filter.pipe';
 
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCUf_AppwrJAMrPBWsZdVc6d5paRu8pWZM'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    MapsComponent,
    NotificationsComponent,
    CalculadoraComponent,
    UpgradeComponent,
    FilterPipe

  ]
})
 
export class AdminLayoutModule {}
 
 
 

