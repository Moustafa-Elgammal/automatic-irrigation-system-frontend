import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlotComponent } from './update-plot.component';

describe('UpdatePlotComponent', () => {
  let component: UpdatePlotComponent;
  let fixture: ComponentFixture<UpdatePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
