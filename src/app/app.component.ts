import { Component } from '@angular/core';
import { Marcadores } from './interfaces/marcadores';
import { MarcadoresProvider } from './providers/marcadores.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jsapi-angular';
  
  constructor() {
     this.zoom = 0;
     
     this.lat = 0;
     this.lng = 0;
     
  }

   zoom: number;
   lat: number;
   lng: number;
    

  handleInputChange(event: Event) {
    const target = <HTMLInputElement> event.target;
    if (target) {
      if (target.name === 'zoom') {
        this.zoom = parseFloat(target.value);
      }
      if (target.name === 'lat') {
        this. lat= parseFloat(target.value);
      }
      if (target.name === 'lng') {
        this.lng = parseFloat(target.value);
      }
    }
  }
  handleMapChange(event: H.map.ChangeEvent) {
    if (event.newValue.lookAt) {
      const lookAt = event.newValue.lookAt;
      this.zoom = lookAt.zoom;
      this.lat = lookAt.position.lat;
      this.lng = lookAt.position.lng;
    }
  }
  isShowDivIf = false;  
    
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }  
}