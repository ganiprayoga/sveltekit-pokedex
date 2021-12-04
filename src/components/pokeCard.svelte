<script>
  import { fade } from "svelte/transition";
  export let poke;
</script>

<a 
  class="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-sm hover:shadow-lg flex flex-col items-center text-center"
  href={`/poke/${poke.id}`}
  transition:fade
>
  <img src="{poke.image}" alt="{poke.name}">
  <h2>{poke.name}</h2>
</a>