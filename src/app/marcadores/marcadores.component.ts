import { Component, OnInit } from '@angular/core';
import {MarcadoresProvider} from '../providers/marcadores.provider'

 
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit {

  listaMarcadores: any = [];  
  constructor(private	marcadores : MarcadoresProvider) {
    this.obtenerMarcadores();
  }
  ngOnInit(): void {
  }
   obtenerMarcadores(){          
    this.marcadores.getAll().subscribe((marcadores) =>{    
      if(marcadores.ok){
        this.listaMarcadores = marcadores.listaMarcadores;  
      }
      else{
        alert(marcadores.error);
      }
    })
  }

}
