import { Routes } from '@angular/router';
import { NarbarPageComponent } from './narbar-page/narbar-page.component';
import { HeroComponent } from './hero/hero.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'navbarpage', component: NarbarPageComponent },
  { path: 'sidebarpage', component: SidebarPageComponent },
  { path: 'dropdownpage', component: DropdownPageComponent },
  { path: 'aboutpage', component: AboutPageComponent },
];
