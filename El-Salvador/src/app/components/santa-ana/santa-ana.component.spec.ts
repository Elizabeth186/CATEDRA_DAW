import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaAnaComponent } from './santa-ana.component';

describe('SantaAnaComponent', () => {
  let component: SantaAnaComponent;
  let fixture: ComponentFixture<SantaAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaAnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
