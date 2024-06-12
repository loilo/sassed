var T=Object.defineProperty;var c=(t,r)=>T(t,"name",{value:r,configurable:!0});import{_ as C,f as E,r as _,$ as k,v as U,a0 as j,K as I,a1 as O,a2 as V,q as R,a3 as q,a4 as D,a5 as F,s as g,a6 as w,a7 as H,a8 as $,N as z,a9 as M,aa as K}from"./CqVzgQ3f.js";async function L(t,r=C()){const{path:s,matched:v}=r.resolve(t);if(!v.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>L(t,r));r._routePreloaded.add(s);const n=v.map(i=>{var a;return(a=i.components)==null?void 0:a.default}).filter(i=>typeof i=="function");for(const i of n){const a=Promise.resolve(i()).catch(()=>{}).finally(()=>e.splice(e.indexOf(a)));e.push(a)}await Promise.all(e)}c(L,"preloadRouteComponents");const Q=c((...t)=>t.find(r=>r!==void 0),"firstNonUndefined");function W(t){const r=t.componentName||"NuxtLink";function s(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return A(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:A(i,t.trailingSlash)}}c(s,"resolveTrailingSlashBehavior");function v(e){const n=C(),i=z(),a=g(()=>{const y=e.to||e.href||"";return s(y,n.resolve)}),u=g(()=>typeof a.value=="string"&&w(a.value,{acceptRelative:!0})),m=g(()=>{var y;return typeof a.value=="object"?((y=n.resolve(a.value))==null?void 0:y.href)??null:a.value&&!e.external&&!u.value?s(H(i.app.baseURL,a.value),n.resolve):a.value}),d=q("RouterLink"),b=d&&typeof d!="string"?d.useLink:void 0,o=b==null?void 0:b({...e,to:a.value}),P=g(()=>e.target&&e.target!=="_self"),h=g(()=>e.external||P.value?!0:typeof a.value=="object"?!1:a.value===""||u.value);return{to:a,hasTarget:P,isAbsoluteUrl:u,isExternal:h,href:m,isActive:(o==null?void 0:o.isActive)??g(()=>a.value===n.currentRoute.value.path),isExactActive:(o==null?void 0:o.isExactActive)??g(()=>a.value===n.currentRoute.value.path),route:(o==null?void 0:o.route)??g(()=>n.resolve(a.value)),async navigate(){await $(m.value,{replace:e.replace,external:e.external})}}}return c(v,"useNuxtLink"),E({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:v,setup(e,{slots:n}){const i=C(),{to:a,href:u,navigate:m,isExternal:d,hasTarget:b,isAbsoluteUrl:o}=v(e),P=_(!1),h=_(null),y=c(f=>{var p;h.value=e.custom?(p=f==null?void 0:f.$el)==null?void 0:p.nextElementSibling:f==null?void 0:f.$el},"elRef");if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()){const p=k();let x,l=null;U(()=>{const N=G();j(()=>{x=I(()=>{var S;(S=h==null?void 0:h.value)!=null&&S.tagName&&(l=N.observe(h.value,async()=>{l==null||l(),l=null;const B=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([p.hooks.callHook("link:prefetch",B).catch(()=>{}),!d.value&&L(a.value,i).catch(()=>{})]),P.value=!0}))})})}),O(()=>{x&&V(x),l==null||l(),l=null})}return()=>{var x;if(!d.value){const l={ref:y,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P.value&&(l.class=e.prefetchedClass||t.prefetchedClass),l.rel=e.rel||void 0),R(q("RouterLink"),l,n.default)}const f=e.target||null,p=Q(e.noRel?"":e.rel,t.externalRelAttribute,o.value||b.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:u.value,navigate:m,get route(){if(!u.value)return;const l=new URL(u.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return D(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:p,target:f,isExternal:d.value,isActive:!1,isExactActive:!1}):null:R("a",{ref:h,href:u.value||null,rel:p,target:f},(x=n.default)==null?void 0:x.call(n))}}})}c(W,"defineNuxtLink");const Z=W(F);function A(t,r){const s=r==="append"?M:K;return w(t)&&!t.startsWith("http")?t:s(t,!0)}c(A,"applyTrailingSlashBehavior");function G(){const t=k();if(t._observer)return t._observer;let r=null;const s=new Map,v=c((n,i)=>(r||(r=new IntersectionObserver(a=>{for(const u of a){const m=s.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&m&&m()}})),s.set(n,i),r.observe(n),()=>{s.delete(n),r.unobserve(n),s.size===0&&(r.disconnect(),r=null)}),"observe");return t._observer={observe:v}}c(G,"useObserver");function J(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}c(J,"isSlowConnection");export{Z as _};
