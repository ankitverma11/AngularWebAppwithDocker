import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingApp';
  lodedFeature = 'recipe';
  envirType = '';
  apiURL = '';

  ngOnInit(): void {
      this.envirType = environment.environment;
      this.apiURL = environment.apiEndPoint;
  }

  onNavigate(feature : string): void
  {
    this.lodedFeature = feature;
  }
}
