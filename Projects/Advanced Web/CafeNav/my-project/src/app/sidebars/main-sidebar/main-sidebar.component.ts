import { Component } from '@angular/core';
import { SidebarType1Component } from '../sidebar-type1/sidebar-type1.component';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { SidebarType2Component } from '../sidebar-type2/sidebar-type2.component';
import { SidebarType3Component } from '../sidebar-type3/sidebar-type3.component';
import { SidebarType4Component } from '../sidebar-type4/sidebar-type4.component';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [
    SidebarType1Component,
    CommonModule,
    SidebarType2Component,
    SidebarType3Component,
    SidebarType4Component,
  ],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css',
})
export class MainSidebarComponent {
  sidebarStatusOpen: boolean = false;
  currentSidebarType: number = 0;
  constructor(private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.sidebarOpen.subscribe((data: boolean) => {
      this.sidebarStatusOpen = data;
    });
    this.sidebarService.sidebarType.subscribe((data: number) => {
      this.currentSidebarType = data;
    });
  }
  getSidebarComponent() {
    if (this.currentSidebarType === 0) {
      return SidebarType1Component;
    } else if (this.currentSidebarType === 1) {
      return SidebarType2Component;
    } else if (this.currentSidebarType === 2) {
      return SidebarType3Component;
    } else if (this.currentSidebarType === 3) {
      return SidebarType4Component;
    } else {
      return SidebarType1Component;
    }
  }
}
