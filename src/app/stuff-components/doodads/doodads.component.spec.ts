import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodadsComponent } from './doodads.component';

describe('DoodadsComponent', () => {
  let component: DoodadsComponent;
  let fixture: ComponentFixture<DoodadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadsComponent]
    });
    fixture = TestBed.createComponent(DoodadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
