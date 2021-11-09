import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballasComponent } from './caballas.component';

describe('CaballasComponent', () => {
  let component: CaballasComponent;
  let fixture: ComponentFixture<CaballasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaballasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaballasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
