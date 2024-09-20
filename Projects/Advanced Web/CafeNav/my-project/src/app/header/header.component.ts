import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarServiceService } from '../services/navbar-service.service';
import { HeaderType3Component } from '../headerTypes/header-type3/header-type3.component';
import { NgComponentOutlet } from '@angular/common';
import { HeaderType1Component } from '../headerTypes/header-type1/header-type1.component';
import { HeaderType2Component } from '../headerTypes/header-type2/header-type2.component';
import { HeaderType4Component } from '../headerTypes/header-type4/header-type4.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgComponentOutlet,
    HeaderType1Component,
    HeaderType2Component,
    HeaderType3Component,
    HeaderType4Component,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private navbarService: NavbarServiceService) {}
  private currentNavbarType: number = 0;
  ngOnInit() {
    this.navbarService.navbarType.subscribe((data: number) => {
      this.currentNavbarType = data;
      this.navbarTypeChange();
    });
  }
  navbarTypeChange(): void {
    console.log('New type is = ' + this.currentNavbarType);
  }
  getHeaderComponent() {
    if (this.currentNavbarType === 0) {
      return HeaderType1Component;
    } else if (this.currentNavbarType === 1) {
      return HeaderType2Component;
    } else if (this.currentNavbarType === 2) {
      return HeaderType3Component;
    } else if (this.currentNavbarType === 3) {
      return HeaderType4Component;
    } else {
      return HeaderType1Component;
    }
  }
}
