import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2PageComponent } from './l2-page.component';

describe('L2PageComponent', () => {
  let component: L2PageComponent;
  let fixture: ComponentFixture<L2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
