import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePromoComponent } from './liste-promo.component';

describe('ListePromoComponent', () => {
  let component: ListePromoComponent;
  let fixture: ComponentFixture<ListePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
