import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarServiceService } from '../../services/navbar-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header-type4',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header-type4.component.html',
  styleUrl: './header-type4.component.css',
})
export class HeaderType4Component {
  @Input() showUseButton: boolean = false;
  private thisNavbarType: number = 3;
  constructor(
    private navbarService: NavbarServiceService,
    private sidebarService: SidebarService
  ) {}
  btnClick(): void {
    this.navbarService.setNavbarType(this.thisNavbarType);
  }
  openSidebar(): void {
    this.sidebarService.setSidebarOpen(!this.sidebarService.getSidebarOpen());
  }
}
