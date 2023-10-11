import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffComponent } from './stuff.component';

describe('StuffComponent', () => {
  let component: StuffComponent;
  let fixture: ComponentFixture<StuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuffComponent]
    });
    fixture = TestBed.createComponent(StuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
