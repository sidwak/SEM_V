import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderType3Component } from './header-type3.component';

describe('HeaderType3Component', () => {
  let component: HeaderType3Component;
  let fixture: ComponentFixture<HeaderType3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderType3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
