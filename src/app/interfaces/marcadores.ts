import { MarcadoresProvider } from "../providers/marcadores.provider";
import { listaMarcadores } from "./listaMarcadores";

export interface Marcadores{

    "ok": true,
    "error": string,
    "statusCode": string,
    "listaMarcadores": listaMarcadores[];
    
}