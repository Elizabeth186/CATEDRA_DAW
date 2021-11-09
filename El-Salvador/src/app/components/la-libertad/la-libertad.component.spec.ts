import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLibertadComponent } from './la-libertad.component';

describe('LaLibertadComponent', () => {
  let component: LaLibertadComponent;
  let fixture: ComponentFixture<LaLibertadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaLibertadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLibertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
