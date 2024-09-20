import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-page.component.html',
  styleUrl: './dropdown-page.component.css',
})
export class DropdownPageComponent {
  isDropdown1Visible: boolean = false;
  isDropdown2Visible: boolean = false;
  setDropdown1Visible() {
    this.isDropdown1Visible = !this.isDropdown1Visible;
  }
  setDropdown2Visible() {
    this.isDropdown2Visible = !this.isDropdown2Visible;
  }
}
