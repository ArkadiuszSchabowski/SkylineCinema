import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaHomeComponent } from './cinema-home.component';

describe('CinemaHomeComponent', () => {
  let component: CinemaHomeComponent;
  let fixture: ComponentFixture<CinemaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaHomeComponent]
    });
    fixture = TestBed.createComponent(CinemaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
