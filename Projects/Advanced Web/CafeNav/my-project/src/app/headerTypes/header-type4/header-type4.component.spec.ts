import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderType4Component } from './header-type4.component';

describe('HeaderType4Component', () => {
  let component: HeaderType4Component;
  let fixture: ComponentFixture<HeaderType4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderType4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderType4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
