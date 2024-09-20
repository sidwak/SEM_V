import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-type2',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-type2.component.html',
  styleUrl: './sidebar-type2.component.css',
})
export class SidebarType2Component {
  private thisSidebarType: number = 1;

  constructor(private sidebarService: SidebarService) {}
  changeSidebar() {
    this.sidebarService.setSidebarType(this.thisSidebarType);
  }
}
