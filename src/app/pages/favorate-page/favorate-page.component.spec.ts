import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoratePageComponent } from './favorate-page.component';

describe('FavoratePageComponent', () => {
  let component: FavoratePageComponent;
  let fixture: ComponentFixture<FavoratePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoratePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoratePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
