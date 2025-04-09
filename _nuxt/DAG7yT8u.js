var E=Object.defineProperty;var v=(t,a)=>E(t,"name",{value:a,configurable:!0});import{a0 as _,e as T,r as A,N as q,q as U,a1 as I,J as F,a2 as H,a3 as V,l as L,a4 as k,a5 as D,a6 as O,m as C,a7 as j,a8 as z,L as M,a9 as W,aa as $,ab as G,ac as J}from"./CkMRoaFM.js";async function B(t,a=_()){const{path:d,matched:y}=a.resolve(t);if(!y.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(d)))return;const m=a._preloadPromises||(a._preloadPromises=[]);if(m.length>4)return Promise.all(m).then(()=>B(t,a));a._routePreloaded.add(d);const e=y.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of e){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>m.splice(m.indexOf(o)));m.push(o)}await Promise.all(m)}v(B,"preloadRouteComponents");const Q=v((...t)=>t.find(a=>a!==void 0),"firstNonUndefined");function K(t){const a=t.componentName||"NuxtLink";function d(e){return typeof e=="string"&&e.startsWith("#")}v(d,"isHashLinkWithoutHashMode");function y(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return N(e,t.trailingSlash);const o="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:N(o,t.trailingSlash)}}v(y,"resolveTrailingSlashBehavior");function m(e){const n=_(),o=M(),u=C(()=>!!e.target&&e.target!=="_self"),h=C(()=>{const f=e.to||e.href||"";return typeof f=="string"&&j(f,{acceptRelative:!0})}),S=k("RouterLink"),b=typeof S!="string"?S.useLink:void 0,p=C(()=>{if(e.external)return!0;const f=e.to||e.href||"";return typeof f=="object"?!1:f===""||h.value}),r=C(()=>{const f=e.to||e.href||"";return p.value?f:y(f,n.resolve)}),c=p.value||b==null?void 0:b({...e,to:r}),x=C(()=>{var f;if(!r.value||h.value||d(r.value))return r.value;if(p.value){const P=typeof r.value=="object"&&"path"in r.value?O(r.value):r.value,R=typeof P=="object"?n.resolve(P).href:P;return y(R,n.resolve)}return typeof r.value=="object"?((f=n.resolve(r.value))==null?void 0:f.href)??null:y(z(o.app.baseURL,r.value),n.resolve)});return{to:r,hasTarget:u,isAbsoluteUrl:h,isExternal:p,href:x,isActive:(c==null?void 0:c.isActive)??C(()=>r.value===n.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??C(()=>r.value===n.currentRoute.value.path),route:(c==null?void 0:c.route)??C(()=>n.resolve(r.value)),async navigate(f){await W(x.value,{replace:e.replace,external:p.value||u.value})}}}return v(m,"useNuxtLink"),T({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:m,setup(e,{slots:n}){const o=_(),{to:u,href:h,navigate:S,isExternal:b,hasTarget:p,isAbsoluteUrl:r}=m(e),c=A(!1),x=A(null),f=v(l=>{var s;x.value=e.custom?(s=l==null?void 0:l.$el)==null?void 0:s.nextElementSibling:l==null?void 0:l.$el},"elRef");function P(l){var s,i;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((s=e.prefetchOn)==null?void 0:s[l])??((i=t.prefetchOn)==null?void 0:i[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Z()}v(P,"shouldPrefetch");async function R(l=q()){if(c.value)return;c.value=!0;const s=typeof u.value=="string"?u.value:b.value?O(u.value):o.resolve(u.value).fullPath,i=b.value?new URL(s,window.location.href).href:s;await Promise.all([l.hooks.callHook("link:prefetch",i).catch(()=>{}),!b.value&&!p.value&&B(u.value,o).catch(()=>{})])}if(v(R,"prefetch"),P("visibility")){const l=q();let s,i=null;U(()=>{const g=X();I(()=>{s=F(()=>{var w;(w=x==null?void 0:x.value)!=null&&w.tagName&&(i=g.observe(x.value,async()=>{i==null||i(),i=null,await R(l)}))})})}),H(()=>{s&&V(s),i==null||i(),i=null})}return()=>{var i;if(!b.value&&!p.value&&!d(u.value)){const g={ref:f,to:u.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P("interaction")&&(g.onPointerenter=R.bind(null,void 0),g.onFocus=R.bind(null,void 0)),c.value&&(g.class=e.prefetchedClass||t.prefetchedClass),g.rel=e.rel||void 0),L(k("RouterLink"),g,n.default)}const l=e.target||null,s=Q(e.noRel?"":e.rel,t.externalRelAttribute,r.value||p.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:h.value,navigate:S,prefetch:R,get route(){if(!h.value)return;const g=new URL(h.value,window.location.href);return{path:g.pathname,fullPath:g.pathname,get query(){return D(g.search)},hash:g.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:h.value}},rel:s,target:l,isExternal:b.value||p.value,isActive:!1,isExactActive:!1}):null:L("a",{ref:x,href:h.value||null,rel:s,target:l},(i=n.default)==null?void 0:i.call(n))}}})}v(K,"defineNuxtLink");const ae=K(J);function N(t,a){const d=a==="append"?$:G;return j(t)&&!t.startsWith("http")?t:d(t,!0)}v(N,"applyTrailingSlashBehavior");function X(){const t=q();if(t._observer)return t._observer;let a=null;const d=new Map,y=v((e,n)=>(a||(a=new IntersectionObserver(o=>{for(const u of o){const h=d.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&h&&h()}})),d.set(e,n),a.observe(e),()=>{d.delete(e),a==null||a.unobserve(e),d.size===0&&(a==null||a.disconnect(),a=null)}),"observe");return t._observer={observe:y}}v(X,"useObserver");const Y=/2g/;function Z(){const t=navigator.connection;return!!(t&&(t.saveData||Y.test(t.effectiveType)))}v(Z,"isSlowConnection");export{ae as _};
