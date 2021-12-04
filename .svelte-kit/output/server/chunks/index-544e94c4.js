import { n as noop, s as safe_not_equal, c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, d as each, v as validate_component } from "./app-85139b7b.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const pokemon = writable([]);
const fetchPokemon = async (num) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  pokemon.set(loadedPokemon);
};
fetchPokemon(150);
const PokeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<a class="${"p-6 bg-gray-100 text-gray-800 rounded-lg shadow-sm hover:shadow-lg flex flex-col items-center text-center"}"${add_attribute("href", `/poke/${poke.id}`, 0)}><img${add_attribute("src", poke.image, 0)}${add_attribute("alt", poke.name, 0)}>
  <h2>${escape(poke.name)}</h2></a>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pokemon, $$unsubscribe_pokemon;
  $$unsubscribe_pokemon = subscribe(pokemon, (value) => $pokemon = value);
  let searchTerm = "";
  let filteredPokemon = [];
  {
    {
      console.log(searchTerm);
      {
        filteredPokemon = [...$pokemon];
      }
    }
  }
  $$unsubscribe_pokemon();
  return `${$$result.head += `${$$result.title = `<title>Svelte Kit Pokedex</title>`, ""}`, ""}

<h1 class="${"text-2xl text-center my-8 uppercase"}">Svelte Kit Pokedex</h1>

<input class="${"w-full rounded-lg text-lg p-4 border-2 border-gray-400"}" type="${"text"}" placeholder="${"Search Pokemon"}"${add_attribute("value", searchTerm, 0)}>

<div class="${"grid gap-4 md:grid-cols-2 grid-cols-1 my-6"}">${each(filteredPokemon, (poke) => `${validate_component(PokeCard, "PokeCard").$$render($$result, { poke }, {}, {})}`)}</div>`;
});
export { Routes as default };
