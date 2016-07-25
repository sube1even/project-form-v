import { Component } from '@angular/core';
import './rxjs-operators';
import { BrewerComponent } from './+brewer/brewer.component';
import { BrewComponent } from './+brew/brew.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrewerComponent,BrewComponent]
})
export class AppComponent {
  
}
