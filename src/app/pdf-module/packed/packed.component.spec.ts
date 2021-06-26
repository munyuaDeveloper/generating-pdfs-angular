import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedComponent } from './packed.component';

describe('PackedComponent', () => {
  let component: PackedComponent;
  let fixture: ComponentFixture<PackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
