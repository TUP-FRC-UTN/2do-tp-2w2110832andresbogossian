import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Marcadores } from '../interfaces/marcadores';

@Injectable({
    providedIn: 'root'
})
export class MarcadoresProvider {
    constructor( private http: HttpClient){} 
    getAll():Observable<any>{
        const url = 'https://prog3.nhorenstein.com/'+ 'api/geolocalizacion/GetMarcadores';
        const header ={'content-type':'application/json'};
        return this.http.get(url, {"headers":header});      }
  }