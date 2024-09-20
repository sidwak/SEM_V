import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarServiceService {
  private navbarTypeSubject = new BehaviorSubject<number>(0);
  navbarType = this.navbarTypeSubject.asObservable();

  setNavbarType(whichType: number) {
    this.navbarTypeSubject.next(whichType);
    console.log('next value is of navbarType = ' + whichType);
  }
}
