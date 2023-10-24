import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollsComponent } from './trolls.component';

describe('TrollsComponent', () => {
  let component: TrollsComponent;
  let fixture: ComponentFixture<TrollsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrollsComponent]
    });
    fixture = TestBed.createComponent(TrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
