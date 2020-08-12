import { Component } from '@angular/core';
import { MetaService } from './MetaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mand';

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
  }

}
