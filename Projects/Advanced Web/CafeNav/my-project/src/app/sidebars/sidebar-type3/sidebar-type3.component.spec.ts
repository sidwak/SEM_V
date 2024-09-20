import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarType3Component } from './sidebar-type3.component';

describe('SidebarType3Component', () => {
  let component: SidebarType3Component;
  let fixture: ComponentFixture<SidebarType3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarType3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
