import { Component, Input } from '@angular/core';
import { UseButtonComponent } from '../../additional/use-button/use-button.component';
import { NavbarServiceService } from '../../services/navbar-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header-type2',
  standalone: true,
  imports: [CommonModule, UseButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-type2.component.html',
  styleUrl: './header-type2.component.css',
})
export class HeaderType2Component {
  @Input() showUseButton: boolean = false;
  constructor(
    private navbarService: NavbarServiceService,
    private sidebarService: SidebarService
  ) {}
  private thisNavbarType: number = 1;
  /* currentNavbarType: number = 0;
   ngOnInit() {
    this.navbarService.navbarType.subscribe((data) => {
      this.currentNavbarType = data;
    });
  } */
  btnClick(): void {
    this.navbarService.setNavbarType(this.thisNavbarType);
  }
  openSidebar(): void {
    this.sidebarService.setSidebarOpen(!this.sidebarService.getSidebarOpen());
  }
}
