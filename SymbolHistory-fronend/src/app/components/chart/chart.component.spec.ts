import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: HistoricalChartComponent;
  let fixture: ComponentFixture<HistoricalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
