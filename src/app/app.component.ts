import { Component } from '@angular/core';

import { BrewerComponent } from './+brewer/brewer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrewerComponent]
})
export class AppComponent {
  title = 'Project Form V';
}
