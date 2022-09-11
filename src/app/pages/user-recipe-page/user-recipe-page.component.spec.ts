import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipePageComponent } from './user-recipe-page.component';

describe('UserRecipePageComponent', () => {
  let component: UserRecipePageComponent;
  let fixture: ComponentFixture<UserRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
