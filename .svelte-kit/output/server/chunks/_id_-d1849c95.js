import { c as create_ssr_component, a as add_attribute, e as escape } from "./app-85139b7b.js";
async function load({ page }) {
  const id = page.params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const poke = await res.json();
  return { props: { poke } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  const type = poke.types[0].type.name;
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  return `<div class="${"flex flex-col items-center"}"><img${add_attribute("src", poke.sprites["front_default"], 0)}${add_attribute("alt", poke.name, 0)}>
  <h1 class="${"text-2xl text-center my-8 uppercase"}">${escape(poke.name)}</h1>
  <p>Type: <strong>${escape(type)}</strong> | Height: <strong>${escape(poke.height)}</strong> | Weight: <strong>${escape(poke.weight)}</strong></p></div>`;
});
export { U5Bidu5D as default, load };
