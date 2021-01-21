import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiscoverComponent } from './page-discover.component';

describe('PageDiscoverComponent', () => {
  let component: PageDiscoverComponent;
  let fixture: ComponentFixture<PageDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
