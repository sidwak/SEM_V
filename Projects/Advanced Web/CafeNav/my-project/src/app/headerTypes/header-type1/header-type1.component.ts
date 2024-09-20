import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarServiceService } from '../../services/navbar-service.service';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header-type1',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header-type1.component.html',
  styleUrl: './header-type1.component.css',
})
export class HeaderType1Component {
  @Input() showUseButton: boolean = false;
  constructor(
    private navbarService: NavbarServiceService,
    private sidebarService: SidebarService
  ) {}
  private thisNavbarType: number = 0;
  //currentNavbarType: number = 0;
  btnClick(): void {
    this.navbarService.setNavbarType(this.thisNavbarType);
  }
  openSidebar(): void {
    this.sidebarService.setSidebarOpen(!this.sidebarService.getSidebarOpen());
  }
}
