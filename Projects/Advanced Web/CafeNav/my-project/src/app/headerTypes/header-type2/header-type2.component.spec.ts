import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderType2Component } from './header-type2.component';

describe('HeaderType2Component', () => {
  let component: HeaderType2Component;
  let fixture: ComponentFixture<HeaderType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderType2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
