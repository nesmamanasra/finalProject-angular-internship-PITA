import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailCardComponent } from './coctail-card.component';

describe('CoctailCardComponent', () => {
  let component: CoctailCardComponent;
  let fixture: ComponentFixture<CoctailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoctailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
