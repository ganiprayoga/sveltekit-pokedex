import{S as V,i as $,s as z,e as p,k as J,t as h,c as f,a as m,n as M,g as u,d as _,J as P,b as v,f as A,D as t,h as I,E as U}from"../../chunks/vendor-2dcdf98e.js";function F(n){let e,a,l,i,d,g,k=n[0].name+"",G,N,o,O,E,R,j,y,S=n[0].height+"",D,q,T,w=n[0].weight+"",H;return{c(){e=p("div"),a=p("img"),d=J(),g=p("h1"),G=h(k),N=J(),o=p("p"),O=h("Type: "),E=p("strong"),R=h(n[1]),j=h(" | Height: "),y=p("strong"),D=h(S),q=h(" | Weight: "),T=p("strong"),H=h(w),this.h()},l(r){e=f(r,"DIV",{class:!0});var s=m(e);a=f(s,"IMG",{src:!0,alt:!0}),d=M(s),g=f(s,"H1",{class:!0});var W=m(g);G=u(W,k),W.forEach(_),N=M(s),o=f(s,"P",{});var c=m(o);O=u(c,"Type: "),E=f(c,"STRONG",{});var b=m(E);R=u(b,n[1]),b.forEach(_),j=u(c," | Height: "),y=f(c,"STRONG",{});var B=m(y);D=u(B,S),B.forEach(_),q=u(c," | Weight: "),T=f(c,"STRONG",{});var C=m(T);H=u(C,w),C.forEach(_),c.forEach(_),s.forEach(_),this.h()},h(){P(a.src,l=n[0].sprites.front_default)||v(a,"src",l),v(a,"alt",i=n[0].name),v(g,"class","text-2xl text-center my-8 uppercase"),v(e,"class","flex flex-col items-center")},m(r,s){A(r,e,s),t(e,a),t(e,d),t(e,g),t(g,G),t(e,N),t(e,o),t(o,O),t(o,E),t(E,R),t(o,j),t(o,y),t(y,D),t(o,q),t(o,T),t(T,H)},p(r,[s]){s&1&&!P(a.src,l=r[0].sprites.front_default)&&v(a,"src",l),s&1&&i!==(i=r[0].name)&&v(a,"alt",i),s&1&&k!==(k=r[0].name+"")&&I(G,k),s&1&&S!==(S=r[0].height+"")&&I(D,S),s&1&&w!==(w=r[0].weight+"")&&I(H,w)},i:U,o:U,d(r){r&&_(e)}}}async function Q({page:n}){const a=`https://pokeapi.co/api/v2/pokemon/${n.params.id}`;return{props:{poke:await(await fetch(a)).json()}}}function K(n,e,a){let{poke:l}=e;const i=l.types[0].type.name;return n.$$set=d=>{"poke"in d&&a(0,l=d.poke)},[l,i]}class X extends V{constructor(e){super();$(this,e,K,F,z,{poke:0})}}export{X as default,Q as load};