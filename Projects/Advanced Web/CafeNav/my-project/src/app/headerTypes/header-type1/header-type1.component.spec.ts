import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderType1Component } from './header-type1.component';

describe('HeaderType1Component', () => {
  let component: HeaderType1Component;
  let fixture: ComponentFixture<HeaderType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderType1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
