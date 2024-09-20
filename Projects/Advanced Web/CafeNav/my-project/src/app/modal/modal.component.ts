import { Component, ElementRef, ViewChild } from '@angular/core';
//import { Toast } from '../../../node_modules/bootstrap/dist/js/bootstrap.js';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  //@ViewChild('liveToast', { static: true }) liveToast!: ElementRef;
  constructor() {}
  showToast() {
    /* const toastBootstrap = Toast.getOrCreateInstance(
      this.liveToast.nativeElement
    );
    toastBootstrap.show(); */
  }
}
