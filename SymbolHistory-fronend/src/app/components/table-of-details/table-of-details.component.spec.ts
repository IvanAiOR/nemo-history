import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfDetailsComponent } from './table-of-details.component';

describe('TableOfDetailsComponent', () => {
  let component: TableOfDetailsComponent;
  let fixture: ComponentFixture<TableOfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
