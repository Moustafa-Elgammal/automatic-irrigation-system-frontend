import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlotComponent } from './add-plot.component';

describe('AddPlotComponent', () => {
  let component: AddPlotComponent;
  let fixture: ComponentFixture<AddPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
