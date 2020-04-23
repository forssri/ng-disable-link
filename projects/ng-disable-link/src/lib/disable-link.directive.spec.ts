import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DisableLinkDirective } from './disable-link.directive';

@Component({
  template: '<a href="https://something.com" [ngDisableLink]="enabled">Some Link</a>'
})
class TestComponent {
  enabled = true;
  constructor() { }
}

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      TestComponent,
      DisableLinkDirective
    ]
  });

  fixture = TestBed.createComponent(TestComponent);
  component = fixture.componentInstance;
});

describe('DisableLinkDirective', () => {
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should change href', () => {
    component.enabled = false;
    fixture.detectChanges();

    console.log(fixture.nativeElement.querySelector('a'));
  });
});
