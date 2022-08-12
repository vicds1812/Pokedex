import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon_comp/pokemon.component';
import { FooterComponent } from './pokemon/footer/footer.component';
const routes: Routes = [
  {path: 'footer', component: FooterComponent},
  {path: 'home', component: PokemonComponent},
  {path: 'pokeDetail/:id', component: PokemonComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
