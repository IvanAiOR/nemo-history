import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSymbolsComponent } from './menu-symbols.component';

describe('MenuSymbolsComponent', () => {
  let component: MenuSymbolsComponent;
  let fixture: ComponentFixture<MenuSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSymbolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
