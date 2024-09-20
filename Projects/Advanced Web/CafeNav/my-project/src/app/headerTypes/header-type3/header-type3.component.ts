import { Component, Input } from '@angular/core';
import { UseButtonComponent } from '../../additional/use-button/use-button.component';
import { CommonModule } from '@angular/common';
import { NavbarServiceService } from '../../services/navbar-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header-type3',
  standalone: true,
  imports: [CommonModule, UseButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-type3.component.html',
  styleUrl: './header-type3.component.css',
})
export class HeaderType3Component {
  @Input() showUseButton: boolean = false;
  private thisNavbarType: number = 2;
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
