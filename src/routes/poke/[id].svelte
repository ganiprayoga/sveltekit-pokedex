<script context="module">
  export async function load({page}) {
    const id = page.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const poke = await res.json();
    return {props: {poke}};
  }
</script>

<script>
  export let poke;
  const type = poke.types[0].type.name;
</script>

<div class="flex flex-col items-center">
  <img src="{poke.sprites['front_default']}" alt="{poke.name}">
  <h1 class="text-2xl text-center my-8 uppercase">{poke.name}</h1>
  <p>Type: <strong>{type}</strong> | Height: <strong>{poke.height}</strong> | Weight: <strong>{poke.weight}</strong></p>
</div>