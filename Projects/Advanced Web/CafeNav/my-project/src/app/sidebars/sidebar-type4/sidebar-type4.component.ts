import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-type4',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-type4.component.html',
  styleUrl: './sidebar-type4.component.css',
})
export class SidebarType4Component {
  private thisSidebarType: number = 3;

  constructor(private sidebarService: SidebarService) {}
  changeSidebar() {
    this.sidebarService.setSidebarType(this.thisSidebarType);
  }
}
