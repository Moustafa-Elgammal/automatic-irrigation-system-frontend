import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlotsComponent } from './list-plots.component';

describe('ListPlotsComponent', () => {
  let component: ListPlotsComponent;
  let fixture: ComponentFixture<ListPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
