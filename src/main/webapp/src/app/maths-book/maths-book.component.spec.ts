import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsBookComponent } from './maths-book.component';

describe('MathsBookComponent', () => {
  let component: MathsBookComponent;
  let fixture: ComponentFixture<MathsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
