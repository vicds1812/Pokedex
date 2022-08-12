import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 private url = 'https://pokeapi.co/api/v2/pokemon'; 
  constructor( private http : HttpClient) {}

  catchAll(index:any){
    
  return this.http.get(`${this.url}/${index}`);
  
  }
    getPokemon( name:string ){
      console.log(name);
     return this.http.get(`${this.url}/${name}`)
    }
    
}
