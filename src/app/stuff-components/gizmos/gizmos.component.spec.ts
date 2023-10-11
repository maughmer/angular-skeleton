import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizmosComponent } from './gizmos.component';

describe('GizmosComponent', () => {
  let component: GizmosComponent;
  let fixture: ComponentFixture<GizmosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GizmosComponent]
    });
    fixture = TestBed.createComponent(GizmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
