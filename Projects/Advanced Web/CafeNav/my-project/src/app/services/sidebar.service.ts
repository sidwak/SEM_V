import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  private sidebarTypeSubject = new BehaviorSubject<number>(0);
  sidebarOpen = this.sidebarOpenSubject.asObservable();
  sidebarType = this.sidebarTypeSubject.asObservable();

  setSidebarOpen(setOpen: boolean) {
    this.sidebarOpenSubject.next(setOpen);
    console.log('sidebar visibility was modified');
  }
  getSidebarOpen(): boolean {
    return this.sidebarOpenSubject.getValue();
  }
  setSidebarType(whichType: number) {
    this.sidebarTypeSubject.next(whichType);
    console.log('sidebar type changed');
  }
}
