import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarType2Component } from './sidebar-type2.component';

describe('SidebarType2Component', () => {
  let component: SidebarType2Component;
  let fixture: ComponentFixture<SidebarType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarType2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
