import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCocktailPageComponent } from './user-cocktail-page.component';

describe('UserCocktailPageComponent', () => {
  let component: UserCocktailPageComponent;
  let fixture: ComponentFixture<UserCocktailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCocktailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCocktailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
