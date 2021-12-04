import { c as create_ssr_component, v as validate_component } from "./app-85139b7b.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-lg"}" href="${"/"}">Home</a>
  <a class="${"mx-4 text-lg"}" href="${"/about"}">About</a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"p-8 max-w-6xl mx-auto"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export { _layout as default };
