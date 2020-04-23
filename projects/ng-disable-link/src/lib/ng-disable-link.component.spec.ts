import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDisableLinkComponent } from './ng-disable-link.component';

describe('NgDisableLinkComponent', () => {
  let component: NgDisableLinkComponent;
  let fixture: ComponentFixture<NgDisableLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDisableLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDisableLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
