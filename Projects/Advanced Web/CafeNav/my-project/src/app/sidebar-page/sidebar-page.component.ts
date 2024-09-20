import { Component } from '@angular/core';
import { SidebarType1Component } from '../sidebars/sidebar-type1/sidebar-type1.component';
import { SidebarType2Component } from '../sidebars/sidebar-type2/sidebar-type2.component';
import { SidebarType3Component } from '../sidebars/sidebar-type3/sidebar-type3.component';
import { SidebarType4Component } from '../sidebars/sidebar-type4/sidebar-type4.component';

@Component({
  selector: 'app-sidebar-page',
  standalone: true,
  imports: [
    SidebarType1Component,
    SidebarType2Component,
    SidebarType3Component,
    SidebarType4Component,
  ],
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css',
})
export class SidebarPageComponent {}
