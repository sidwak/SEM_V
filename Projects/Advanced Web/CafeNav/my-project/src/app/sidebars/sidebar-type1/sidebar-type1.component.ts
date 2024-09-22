import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-type1',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-type1.component.html',
  styleUrl: './sidebar-type1.component.css',
})
export class SidebarType1Component {
  private thisSidebarType: number = 0;

  constructor(private sidebarService: SidebarService) {}
  changeSidebar() {
    this.sidebarService.setSidebarType(this.thisSidebarType);
  }
  openSidebar(): void {
    this.sidebarService.setSidebarOpen(!this.sidebarService.getSidebarOpen());
  }
}
