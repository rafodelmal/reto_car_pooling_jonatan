import { Component, OnInit } from '@angular/core';
 
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'pe-7s-car', class: '' },
    { path: '/user', title: 'carPool',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'List',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
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
      return true;
  };
}
 
 
 
 

