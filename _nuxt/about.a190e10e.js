import{_ as g}from"./nuxt-link.fbf1a6a4.js";import{u as w,a as f,_ as b,b as x,c as k}from"./use-theme-toggle.611bd22c.js";import{a as _,o as h,c as y,w as d,b as o,e,u as s,f as c,h as v,i as C,j as M,k as l}from"./entry.c838bc27.js";import"./_plugin-vue_export-helper.a0691a9b.js";const z=e("span",{class:"sr-only"},"Color Mode: ",-1),S=["checked","indeterminate"],$={class:"switch__slider"},T={class:"switch__icon flex items-center justify-center text-slate-200 dark:text-slate-700"},B=_({__name:"ColorModeSwitch",setup(p){const a=w(),t=f();return(m,n)=>{const i=b,r=x,u=k;return h(),y(u,{onClick:n[0]||(n[0]=U=>s(t).toggle()),"aria-pressed":s(t).auto?"mixed":String(s(t).theme==="dark"),class:c(["switch disabled:opacity-40",{mounted:s(a)}]),disabled:!s(a)},{default:d(()=>[z,o(i,null,{default:d(()=>[e("input",{ref:"checkboxRef",checked:s(t).theme==="dark",indeterminate:s(t).auto,type:"checkbox",class:"switch__input",tabindex:"-1"},null,8,S)]),_:1}),e("span",$,[e("span",T,[o(r,{name:"screen",alt:"Align with the operating system",class:c(["h-4 w-4",s(t).auto?"block":"hidden"])},null,8,["class"]),o(r,{name:"sun",alt:"Light Mode",class:c(["h-4 w-4",!s(t).auto&&s(t).theme==="light"?"block":"hidden"])},null,8,["class"]),o(r,{name:"moon",alt:"Dark Mode",class:c(["h-4 w-4",!s(t).auto&&s(t).theme==="dark"?"block":"hidden"])},null,8,["class"])])])]),_:1},8,["aria-pressed","class","disabled"])}}});const L={class:"px-4 pb-8 pt-4 sm:px-8 sm:py-8 md:px-16 md:py-12"},N={class:"sassed-prose mx-auto lg:prose-lg xl:prose-xl"},V={class:"flex justify-between"},j=e("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"448",height:"512",class:"w-auto h-[1.25em]"},[e("path",{fill:"currentColor",d:"M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"})],-1),A=e("span",{class:"whitespace-nowrap font-semibold"},"to the editor",-1),H=["src"],I=M('<div><p> sass<span class="opacity-60">ed</span> is a simple code editor compiling <a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a> code in the browser. You can think of it as a version of the popular <a href="https://www.sassmeister.com/" target="_blank" rel="noopener">Sassmeister</a> stripped down to the absolute essentials. </p><p> sass<span class="opacity-60">ed</span> also ships the Sass compiler as a whole to the browser, making the compiling completely independent of the user&#39;s internet connection, so it can be installed and used offline. </p></div><hr class="ruler">',2),O=e("footer",{class:"footer"},[l(" sass"),e("span",{class:"opacity-60"},"ed"),l(" is Open Source software under the MIT license. Feel free to leave feedback or contribute improvements in our "),e("a",{href:"https://github.com/loilo/sassed",class:"link github-link"},[e("svg",{"aria-hidden":"true",focusable:"false",class:"h-[1.25em] -mt-[0.15em] ml-[0.4ch] mr-[0.2ch] w-auto inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[e("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})]),l(" GitHub repository")]),l(". ")],-1),R=_({__name:"about",setup(p){const a=v("logo.svg");return(t,m)=>{const n=g,i=B;return h(),C("div",L,[e("div",N,[e("header",V,[o(n,{to:"/",class:"flex items-center gap-[1.5ch]"},{default:d(()=>[j,A]),_:1}),o(i)]),e("img",{src:s(a),alt:"The sassed logo: a white 's' and a pink 'e' on a dark grey keyboard key",class:"mx-auto my-8 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"},null,8,H),I,O])])}}});export{R as default};
