import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1PageComponent } from './l1-page.component';

describe('L1PageComponent', () => {
  let component: L1PageComponent;
  let fixture: ComponentFixture<L1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
