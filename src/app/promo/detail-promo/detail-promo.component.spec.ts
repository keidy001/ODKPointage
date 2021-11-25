import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPromoComponent } from './detail-promo.component';

describe('DetailPromoComponent', () => {
  let component: DetailPromoComponent;
  let fixture: ComponentFixture<DetailPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
