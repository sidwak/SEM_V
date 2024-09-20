import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-type3',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-type3.component.html',
  styleUrl: './sidebar-type3.component.css',
})
export class SidebarType3Component {
  private thisSidebarType: number = 2;

  constructor(private sidebarService: SidebarService) {}
  changeSidebar() {
    this.sidebarService.setSidebarType(this.thisSidebarType);
  }
}
