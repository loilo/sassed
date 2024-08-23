var B=Object.defineProperty;var h=(t,r)=>B(t,"name",{value:r,configurable:!0});import{a0 as R,f as T,r as A,P as q,v as E,a1 as U,K as F,a2 as I,a3 as V,q as w,a4 as k,a5 as D,a6 as H,s as P,a7 as N,a8 as L,a9 as z,aa as M,N as $,ab as K,ac as Q}from"./BufOhvV3.js";async function j(t,r=R()){const{path:f,matched:b}=r.resolve(t);if(!b.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(f)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>j(t,r));r._routePreloaded.add(f);const a=b.map(o=>{var n;return(n=o.components)==null?void 0:n.default}).filter(o=>typeof o=="function");for(const o of a){const n=Promise.resolve(o()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}h(j,"preloadRouteComponents");const W=h((...t)=>t.find(r=>r!==void 0),"firstNonUndefined");function G(t){const r=t.componentName||"NuxtLink";function f(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return O(e,t.trailingSlash);const o="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:O(o,t.trailingSlash)}}h(f,"resolveTrailingSlashBehavior");function b(e){const a=R(),o=$(),n=P(()=>!!e.target&&e.target!=="_self"),v=P(()=>{const d=e.to||e.href||"";return typeof d=="string"&&N(d,{acceptRelative:!0})}),x=k("RouterLink"),p=x&&typeof x!="string"?x.useLink:void 0,g=P(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||v.value}),i=P(()=>{const d=e.to||e.href||"";return g.value?d:f(d,a.resolve)}),s=g.value||p==null?void 0:p({...e,to:i}),y=P(()=>{var d;if(!i.value||v.value)return i.value;if(g.value){const C=typeof i.value=="object"&&"path"in i.value?L(i.value):i.value,S=typeof C=="object"?a.resolve(C).href:C;return f(S,a.resolve)}return typeof i.value=="object"?((d=a.resolve(i.value))==null?void 0:d.href)??null:f(z(o.app.baseURL,i.value),a.resolve)});return{to:i,hasTarget:n,isAbsoluteUrl:v,isExternal:g,href:y,isActive:(s==null?void 0:s.isActive)??P(()=>i.value===a.currentRoute.value.path),isExactActive:(s==null?void 0:s.isExactActive)??P(()=>i.value===a.currentRoute.value.path),route:(s==null?void 0:s.route)??P(()=>a.resolve(i.value)),async navigate(){await M(y.value,{replace:e.replace,external:g.value||n.value})}}}return h(b,"useNuxtLink"),T({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:b,setup(e,{slots:a}){const o=R(),{to:n,href:v,navigate:x,isExternal:p,hasTarget:g,isAbsoluteUrl:i}=b(e),s=A(!1),y=A(null),d=h(l=>{var c;y.value=e.custom?(c=l==null?void 0:l.$el)==null?void 0:c.nextElementSibling:l==null?void 0:l.$el},"elRef");function C(l){var c,u;return!s.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((c=e.prefetchOn)==null?void 0:c[l])??((u=t.prefetchOn)==null?void 0:u[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!X()}h(C,"shouldPrefetch");async function S(l=q()){if(s.value)return;s.value=!0;const c=typeof n.value=="string"?n.value:p.value?L(n.value):o.resolve(n.value).fullPath;await Promise.all([l.hooks.callHook("link:prefetch",c).catch(()=>{}),!p.value&&!g.value&&j(n.value,o).catch(()=>{})])}if(h(S,"prefetch"),C("visibility")){const l=q();let c,u=null;E(()=>{const m=J();U(()=>{c=F(()=>{var _;(_=y==null?void 0:y.value)!=null&&_.tagName&&(u=m.observe(y.value,async()=>{u==null||u(),u=null,await S(l)}))})})}),I(()=>{c&&V(c),u==null||u(),u=null})}return()=>{var u;if(!p.value&&!g.value){const m={ref:d,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom,onPointerenter:C("interaction")?S.bind(null,void 0):void 0,onFocus:C("interaction")?S.bind(null,void 0):void 0};return e.custom||(s.value&&(m.class=e.prefetchedClass||t.prefetchedClass),m.rel=e.rel||void 0),w(k("RouterLink"),m,a.default)}const l=e.target||null,c=W(e.noRel?"":e.rel,t.externalRelAttribute,i.value||g.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:v.value,navigate:x,get route(){if(!v.value)return;const m=new URL(v.value,window.location.href);return{path:m.pathname,fullPath:m.pathname,get query(){return D(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:c,target:l,isExternal:p.value||g.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:y,href:v.value||null,rel:c,target:l},(u=a.default)==null?void 0:u.call(a))}}})}h(G,"defineNuxtLink");const ee=G(H);function O(t,r){const f=r==="append"?K:Q;return N(t)&&!t.startsWith("http")?t:f(t,!0)}h(O,"applyTrailingSlashBehavior");function J(){const t=q();if(t._observer)return t._observer;let r=null;const f=new Map,b=h((a,o)=>(r||(r=new IntersectionObserver(n=>{for(const v of n){const x=f.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&x&&x()}})),f.set(a,o),r.observe(a),()=>{f.delete(a),r.unobserve(a),f.size===0&&(r.disconnect(),r=null)}),"observe");return t._observer={observe:b}}h(J,"useObserver");function X(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}h(X,"isSlowConnection");export{ee as _};
