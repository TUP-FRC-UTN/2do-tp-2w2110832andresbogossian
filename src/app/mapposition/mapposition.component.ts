import { Component, Output, EventEmitter,Input } from '@angular/core';
import { Marcadores } from '../interfaces/marcadores';
import { MarcadoresProvider } from '../providers/marcadores.provider';

@Component({
  selector: 'app-mapposition',
  templateUrl: './mapposition.component.html',
  styleUrls: ['./mapposition.component.css']
})
export class MappositionComponent {
  marcadores: Marcadores[] = [];
  constructor( private marcadoresProvider: MarcadoresProvider){}
 
  ngOnInit(): void {
  }

  @Input() public zoom = 11;
  @Input() public lat = 0;
  @Input() public lng = 0;
  

  @Output() notify = new EventEmitter();

 
}

