import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInCategoriesComponent } from './movies-in-categories.component';

describe('MoviesInCategoriesComponent', () => {
  let component: MoviesInCategoriesComponent;
  let fixture: ComponentFixture<MoviesInCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesInCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
