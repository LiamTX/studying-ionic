import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nav', url: 'nav', icon: 'home' },
    { title: 'Buttons', url: 'btn', icon: 'construct' },
    { title: 'Alert', url: 'alert', icon: 'alert-circle' }
  ];
  constructor() {}
}
