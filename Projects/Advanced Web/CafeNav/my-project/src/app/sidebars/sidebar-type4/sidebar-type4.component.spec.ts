import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarType4Component } from './sidebar-type4.component';

describe('SidebarType4Component', () => {
  let component: SidebarType4Component;
  let fixture: ComponentFixture<SidebarType4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarType4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarType4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
