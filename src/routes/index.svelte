<script>
  import {pokemon} from "../stores/pokestore";
  import PokeCard from "../components/pokeCard.svelte";
  
  let searchTerm = "";
  let filteredPokemon = [];

  $: {
    console.log(searchTerm); 
    if(searchTerm){
      //search the pokemon
      filteredPokemon = $pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }else{
      filteredPokemon = [ ... $pokemon]
    }
  }
</script>

<svelte:head>
  <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-2xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-lg text-lg p-4 border-2 border-gray-400" type="text" bind:value="{searchTerm}" placeholder="Search Pokemon">

<div class="grid gap-4 md:grid-cols-2 grid-cols-1 my-6">
  {#each filteredPokemon as poke}
    <PokeCard poke={poke}/>
  {/each}
</div>
