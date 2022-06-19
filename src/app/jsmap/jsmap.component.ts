import { Component, ViewChild, ElementRef, Input, SimpleChanges, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';
import { MarcadoresProvider } from '../providers/marcadores.provider';




@Component({
  selector: 'app-jsmap',
  templateUrl: './jsmap.component.html',
  styleUrls: ['./jsmap.component.css']
})
export class JsmapComponent implements OnInit{
  
  ngOnInit(): void {
    this.obtenerMarca();   
   }
  private map?: H.Map;

  lista: any = [];

  @ViewChild('map') mapDiv?: ElementRef; 

  constructor( private marcadores: MarcadoresProvider){
   }

   

  obtenerMarca(){
    this.marcadores.getAll().subscribe((marcadores) =>{    
      if(marcadores.ok){
        this.lista = marcadores.listaMarcadores;  
        this.colocarMarcador(); } })
  }        
  colocarMarcador(){
      var marker1 = new H.map.Marker({lat: this.lista[0].latitud, lng: this.lista[0].longitud});
      this.map?.addObject(marker1);
      var marker2 = new H.map.Marker({lat:this.lista[1].latitud, lng:this.lista[1].longitud});
      this.map?.addObject(marker2);
      var marker3 = new H.map.Marker({lat:this.lista[2].latitud, lng:this.lista[2].longitud});
      this.map?.addObject(marker3);  
  }
  ngAfterViewInit(): void {
    
    if (!this.map && this.mapDiv) {
       // instantiate a platform, default layers and a map as usual
       const platform = new H.service.Platform({
        apikey: '{9P2usGpOjjRUgGszOXMEJ430_XIyA9SrNDAGo2EU1do}'
      });
      const layers = platform.createDefaultLayers();

      const map = new H.Map(
        this.mapDiv.nativeElement, 
        layers.vector.normal.map, 
        {pixelRatio: window.devicePixelRatio,
         center: {lat: -31.4201, lng: -64.1888},
        zoom: 11,
        }
      );
      onResize(this.mapDiv.nativeElement, () => {map.getViewPort().resize()} );
      this.map = map;
      map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
        this.notify.emit(ev)
      });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      
    }
  } 
  @Input() public zoom = 11;
  @Input() public lat = 0;
  @Input() public lng = 0;

  private timeoutHandle: any;
  @Output() notify = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = setTimeout(() => {
        if (this.map) {
          if (changes.zoom !== undefined) {
            this.map.setZoom(changes.zoom.currentValue);
          }
          if (changes.lat !== undefined) {
            this.map.setCenter({lat: changes.lat.currentValue, lng: this.lng});
          }
          if (changes.lng !== undefined) {
            this.map.setCenter({lat: this.lat, lng: changes.lng.currentValue});
          }
        }
      }, 100);
  }

}