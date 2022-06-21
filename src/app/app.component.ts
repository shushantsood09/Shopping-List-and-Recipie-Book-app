import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  loadedFeature: string = 'recipie';

  onNavigate(feature: string){
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }
}
