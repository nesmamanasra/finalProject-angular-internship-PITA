import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugesstPageComponent } from './sugesst-page.component';

describe('SugesstPageComponent', () => {
  let component: SugesstPageComponent;
  let fixture: ComponentFixture<SugesstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugesstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugesstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
