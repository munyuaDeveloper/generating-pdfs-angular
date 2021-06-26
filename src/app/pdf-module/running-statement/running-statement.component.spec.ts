import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningStatementComponent } from './running-statement.component';

describe('RunningStatementComponent', () => {
  let component: RunningStatementComponent;
  let fixture: ComponentFixture<RunningStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
