import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbarPageComponent } from './narbar-page.component';

describe('NarbarPageComponent', () => {
  let component: NarbarPageComponent;
  let fixture: ComponentFixture<NarbarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarbarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
