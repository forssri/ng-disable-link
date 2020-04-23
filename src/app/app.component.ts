import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enabled = true;

  constructor() {
  }

  toggle() {
    this.enabled = !this.enabled;
  }
}
