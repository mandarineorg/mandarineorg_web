import { Component } from '@angular/core';
import { MandarineWeb } from '../../mandarineWebsite.ns';

@Component({
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  public goToMandarineRepository() {
    window.open(MandarineWeb.REPOSITORIES.mandarine, "_blank");
  }

}
