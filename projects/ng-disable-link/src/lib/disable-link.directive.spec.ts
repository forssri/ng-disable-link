import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DisableLinkDirective } from './disable-link.directive';

@Component({
  template: '<a href="https://example.com" [ngDisableLink]="!enabled">Some Link</a>'
})
class TestComponent {
  enabled = true;
  constructor() { }
}

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
const exampleUrl = 'https://example.com/';
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

  it('should not affect href', () => {
    fixture.detectChanges();
    const hrefValue = fixture.nativeElement.querySelector('a').href;
    expect(hrefValue).toEqual(exampleUrl);
  });

  it('should change href when disabled', () => {
    component.enabled = false;
    fixture.detectChanges();
    const hrefValue = fixture.nativeElement.querySelector('a').href;
    expect(hrefValue).not.toEqual(exampleUrl);
  });
});
