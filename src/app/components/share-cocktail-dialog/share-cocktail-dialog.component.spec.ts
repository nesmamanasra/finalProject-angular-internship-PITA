import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCocktailDialogComponent } from './share-cocktail-dialog.component';

describe('ShareCocktailDialogComponent', () => {
  let component: ShareCocktailDialogComponent;
  let fixture: ComponentFixture<ShareCocktailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCocktailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareCocktailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
