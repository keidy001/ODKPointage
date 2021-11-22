import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdmComponent } from './sup-adm.component';

describe('SupAdmComponent', () => {
  let component: SupAdmComponent;
  let fixture: ComponentFixture<SupAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
