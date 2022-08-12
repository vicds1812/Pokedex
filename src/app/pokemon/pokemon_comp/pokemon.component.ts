import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  name!: string
  urlImage!: string
  displayedColumns :string[] = ['position', 'image','name'];
  gdata: any[] =[];
  datasource = new MatTableDataSource<any>(this.gdata);
  pokemons = [];

   
    
  

 @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;

  constructor(private pokemonService:PokemonService, private router: Router) { 
   
  }


  ngOnInit(): void {
    this.getPokemons();
  }
  search(){
    
    this.pokemonService.getPokemon(this.name).subscribe((info:any) =>{
      this.urlImage = info.sprites.front_default
      console.log(info);
    },
    err =>{  
    console.warn("No existe el pokemon");
    
    }
    );

   
  }
  
  getPokemons(){
    let pokemonData;
    for (let i = 1;i<=150;i++){
      this.pokemonService.catchAll(i).subscribe((dat:any) =>{
        pokemonData = {
       
        position: i,
          image: dat.sprites.front_default,
          name: dat.name
    
        };
        this.gdata.push(pokemonData);
        this.datasource = new MatTableDataSource<any>(this.gdata);
        this.datasource.paginator = this.paginator;
      }
    );
    
  }
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();

  if (this.datasource.paginator) {
    this.datasource.paginator.firstPage();
  }
}
  getRow(row:any){
    //console.log(row);
    this.router.navigateByUrl(`/pokeDetail/${row.position}`);
    
  }
 
  
}

