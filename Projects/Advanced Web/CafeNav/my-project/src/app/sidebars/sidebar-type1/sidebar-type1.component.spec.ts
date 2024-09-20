import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarType1Component } from './sidebar-type1.component';

describe('SidebarType1Component', () => {
  let component: SidebarType1Component;
  let fixture: ComponentFixture<SidebarType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarType1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
