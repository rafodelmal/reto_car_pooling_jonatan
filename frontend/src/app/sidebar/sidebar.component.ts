import { Component, OnInit } from '@angular/core';
 
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'User',  icon: 'pe-7s-car', class: '' },
    { path: '/carpool', title: 'carPool',  icon:'pe-7s-user', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notificaciones',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
    { path: '/calculadora', title: 'calculadora',  icon:'pe-7s-bell', class: '' },

   

    
];
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
 
  constructor() { }

 
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      window.location.reload();
      ;
  };
}
 
 
 
 

