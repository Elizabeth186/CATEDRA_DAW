import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsulutanComponent } from './usulutan.component';

describe('UsulutanComponent', () => {
  let component: UsulutanComponent;
  let fixture: ComponentFixture<UsulutanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsulutanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsulutanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
