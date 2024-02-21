var ue=Object.defineProperty;var a=(e,t)=>ue(e,"name",{value:t,configurable:!0});import{f as V,r as _,v as P,q as ce,c as Y,k as U,l as q,O as G,j as K,P as W,s as w,i as fe,o as Z,a as de,h as T,L as pe,Q as ve,g as me,w as ge,R as he,S as ye,D as be,E as we,U as _e,z as $,M as ee,H as Se,V as R,W as ke,X as Ae,Y as Te,C as te,B as z,y as Ce,Z as xe,G as Oe,A as Ee}from"./entry.LY3Z1Bsi.js";import{_ as je}from"./_plugin-vue_export-helper.9J4kqMs8.js";import{_ as Fe}from"./nuxt-link.wyWUwWxR.js";const Me=Symbol.for("nuxt:client-only"),ut=V({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const r=_(!1);return P(()=>{r.value=!0}),ce(Me,!0),o=>{var c;if(r.value)return(c=t.default)==null?void 0:c.call(t);const s=t.fallback||t.placeholder;if(s)return s();const d=o.fallback||o.placeholder||"",u=o.fallbackTag||o.placeholderTag||"span";return Y(u,n,d)}}}),D=new WeakMap;function ct(e){if(D.has(e))return D.get(e);const t={...e};return t.render?t.render=(n,r,o,s,d,u)=>{var c;if(s.mounted$??n.mounted$){const i=(c=e.render)==null?void 0:c.bind(n)(n,r,o,s,d,u);return i.children===null||typeof i.children=="string"?U(i):q(i)}else{const i=G(n._.vnode.el??null)??["<div></div>"];return K(i.join(""),i.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(n,r)=>{var c;const o=W(),s={...o.attrs},d=Le(o);for(const i in s)delete o.attrs[i];const u=_(!1);return P(()=>{Object.assign(o.attrs,s),o.vnode.dirs=d,u.value=!0}),Promise.resolve(((c=e.setup)==null?void 0:c.call(e,n,r))||{}).then(i=>typeof i!="function"?(i=i||{},i.mounted$=u,i):(...l)=>{if(u.value){const f=i(...l);return f.children===null||typeof f.children=="string"?U(f):q(f)}else{const f=G((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return K(f.join(""),f.length)}})},D.set(e,t),t}a(ct,"createClientOnly");function Le(e){if(!e||!e.vnode.dirs)return null;const t=e.vnode.dirs;return e.vnode.dirs=null,t}a(Le,"extractDirectives");const Ne=["src","alt"],Pe=V({__name:"Icon",props:{name:{},alt:{}},setup(e){const t=e,n=w(()=>fe(`icons/${t.name}.svg`)),r=w(()=>`url('${n.value}')`);return(o,s)=>(Z(),Y("div",{"data-icon-component":"",class:"icon inline-flex",style:pe({"--icon-mask":T(r)})},[de("img",{class:"block opacity-0",src:T(n),alt:o.alt,draggable:"false"},null,8,Ne)],4))}}),ft=je(Pe,[["__scopeId","data-v-826ccf3b"]]),$e={inheritAttrs:!1},dt=V({...$e,__name:"ActionTrigger",props:{link:{default:void 0},disabled:{type:Boolean,default:!1}},setup(e){const t=e,n=w(()=>typeof t.link<"u"),r=w(()=>typeof t.link=="string"),o=w(()=>r.value&&t.link.startsWith("#")),s=w(()=>r.value&&/^https?:\/\//.test(t.link)),d=w(()=>n.value&&!o.value&&!s.value),u=w(()=>t.disabled?"button":n.value&&!s.value?Fe:n.value?"a":"button"),c=ve(),i=w(()=>{if(t.disabled)return{disabled:!0};if(d.value)return{to:t.link};if(n.value){const l={href:t.link};return"target"in c&&(l.rel="noopener"),l}else return{type:"button"}});return(l,f)=>(Z(),me(_e(T(u)),we({...T(i),...l.$attrs},{class:{"cursor-pointer":!l.disabled,"cursor-default":l.disabled}}),{default:ge(()=>[be(l.$slots,"default",ye(he({link:T(n),external:T(s),anchor:T(o)})))]),_:3},16,["class"]))}});function ne(e){return Ae()?(Te(e),!0):!1}a(ne,"tryOnScopeDispose");function A(e){return typeof e=="function"?e():T(e)}a(A,"toValue");const B=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const De=Object.prototype.toString,Ve=a(e=>De.call(e)==="[object Object]","isObject"),O=a(()=>{},"noop");function re(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return a(n,"wrapper"),n}a(re,"createFilterWrapper");const ae=a(e=>e(),"bypassFilter");function We(...e){let t=0,n,r=!0,o=O,s,d,u,c,i;!ee(e[0])&&typeof e[0]=="object"?{delay:d,trailing:u=!0,leading:c=!0,rejectOnCancel:i=!1}=e[0]:[d,u=!0,c=!0,i=!1]=e;const l=a(()=>{n&&(clearTimeout(n),n=void 0,o(),o=O)},"clear");return a(v=>{const m=A(d),h=Date.now()-t,y=a(()=>s=v(),"invoke2");return l(),m<=0?(t=Date.now(),y()):(h>m&&(c||!r)?(t=Date.now(),y()):u&&(s=new Promise((S,g)=>{o=i?g:S,n=setTimeout(()=>{t=Date.now(),r=!0,S(y()),l()},Math.max(0,m-h))})),!c&&!n&&(n=setTimeout(()=>r=!0,m)),r=!1,s)},"filter")}a(We,"throttleFilter");function Re(e=ae){const t=_(!0);function n(){t.value=!1}a(n,"pause");function r(){t.value=!0}a(r,"resume");const o=a((...s)=>{t.value&&e(...s)},"eventFilter");return{isActive:R(t),pause:n,resume:r,eventFilter:o}}a(Re,"pausableFilter");function ze(e){let t;function n(){return t||(t=e()),t}return a(n,"wrapper"),n.reset=async()=>{const r=t;t=void 0,r&&await r},n}a(ze,"createSingletonPromise");function Be(e){return e||W()}a(Be,"getLifeCycleTarget");function Ie(...e){if(e.length!==1)return Se(...e);const t=e[0];return typeof t=="function"?R(ke(()=>({get:t,set:O}))):_(t)}a(Ie,"toRef");function Je(e,t=200,n=!1,r=!0,o=!1){return re(We(t,n,r,o),e)}a(Je,"useThrottleFn");function pt(e,t=200,n=!0,r=!0){if(t<=0)return e;const o=_(e.value),s=Je(()=>{o.value=e.value},t,n,r);return $(e,()=>s()),o}a(pt,"refThrottled");function He(e,t,n={}){const{eventFilter:r=ae,...o}=n;return $(e,re(r,t),o)}a(He,"watchWithFilter");function Ue(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:s,pause:d,resume:u,isActive:c}=Re(r);return{stop:He(e,t,{...o,eventFilter:s}),pause:d,resume:u,isActive:c}}a(Ue,"watchPausable");function qe(e,t=!0,n){Be()?P(e,n):t?e():te(e)}a(qe,"tryOnMounted");function Ge(e,t,n={}){const{immediate:r=!0}=n,o=_(!1);let s=null;function d(){s&&(clearTimeout(s),s=null)}a(d,"clear");function u(){o.value=!1,d()}a(u,"stop");function c(...i){d(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...i)},A(t))}return a(c,"start"),r&&(o.value=!0,B&&c()),ne(u),{isPending:R(o),start:c,stop:u}}a(Ge,"useTimeoutFn");function vt(e,t,n){let r;ee(n)?r={evaluating:n}:r=n||{};const{lazy:o=!1,evaluating:s=void 0,shallow:d=!0,onError:u=O}=r,c=_(!o),i=d?z(t):_(t);let l=0;return Ce(async f=>{if(!c.value)return;l++;const v=l;let m=!1;s&&Promise.resolve().then(()=>{s.value=!0});try{const h=await e(y=>{f(()=>{s&&(s.value=!1),m||y()})});v===l&&(i.value=h)}catch(h){u(h)}finally{s&&v===l&&(s.value=!1),m=!0}}),o?w(()=>(c.value=!0,i.value)):i}a(vt,"computedAsync");function Ke(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}a(Ke,"unrefElement");const L=B?window:void 0,I=B?window.navigator:void 0;function N(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=L):[t,n,r,o]=e,!t)return O;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],d=a(()=>{s.forEach(l=>l()),s.length=0},"cleanup"),u=a((l,f,v,m)=>(l.addEventListener(f,v,m),()=>l.removeEventListener(f,v,m)),"register"),c=$(()=>[Ke(t),A(o)],([l,f])=>{if(d(),!l)return;const v=Ve(f)?{...f}:f;s.push(...n.flatMap(m=>r.map(h=>u(l,m,h,v))))},{immediate:!0,flush:"post"}),i=a(()=>{c(),d()},"stop");return ne(i),i}a(N,"useEventListener");function Qe(){const e=_(!1),t=W();return t&&P(()=>{e.value=!0},t),e}a(Qe,"useMounted");function J(e){const t=Qe();return w(()=>(t.value,!!e()))}a(J,"useSupported");function Q(e,t={}){const{controls:n=!1,navigator:r=I}=t,o=J(()=>r&&"permissions"in r);let s;const d=typeof e=="string"?{name:e}:e,u=_(),c=a(()=>{s&&(u.value=s.state)},"onChange"),i=ze(async()=>{if(o.value){if(!s)try{s=await r.permissions.query(d),N(s,"change",c),c()}catch{u.value="prompt"}return s}});return i(),n?{state:u,isSupported:o,query:i}:u}a(Q,"usePermission");function mt(e={}){const{navigator:t=I,read:n=!1,source:r,copiedDuring:o=1500,legacy:s=!1}=e,d=J(()=>t&&"clipboard"in t),u=Q("clipboard-read"),c=Q("clipboard-write"),i=w(()=>d.value||s),l=_(""),f=_(!1),v=Ge(()=>f.value=!1,o);function m(){d.value&&u.value!=="denied"?t.clipboard.readText().then(g=>{l.value=g}):l.value=S()}a(m,"updateText"),i.value&&n&&N(["copy","cut"],m);async function h(g=A(r)){i.value&&g!=null&&(d.value&&c.value!=="denied"?await t.clipboard.writeText(g):y(g),l.value=g,f.value=!0,v.start())}a(h,"copy");function y(g){const b=document.createElement("textarea");b.value=g??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}a(y,"legacyCopy");function S(){var g,b,E;return(E=(b=(g=document==null?void 0:document.getSelection)==null?void 0:g.call(document))==null?void 0:b.toString())!=null?E:""}return a(S,"legacyRead"),{isSupported:i,text:l,copied:f,copy:h}}a(mt,"useClipboard");const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__",Xe=Ye();function Ye(){return M in F||(F[M]=F[M]||{}),F[M]}a(Ye,"getHandlers");function Ze(e,t){return Xe[e]||t}a(Ze,"getSSRHandler");function et(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}a(et,"guessSerializerType");const tt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},X="vueuse-storage";function nt(e,t,n,r={}){var o;const{flush:s="pre",deep:d=!0,listenToStorageChanges:u=!0,writeDefaults:c=!0,mergeDefaults:i=!1,shallow:l,window:f=L,eventFilter:v,onError:m=a(p=>{console.error(p)},"onError"),initOnMounted:h}=r,y=(l?z:_)(typeof t=="function"?t():t);if(!n)try{n=Ze("getDefaultStorage",()=>{var p;return(p=L)==null?void 0:p.localStorage})()}catch(p){m(p)}if(!n)return y;const S=A(t),g=et(S),b=(o=r.serializer)!=null?o:tt[g],{pause:E,resume:H}=Ue(y,()=>se(y.value),{flush:s,deep:d,eventFilter:v});return f&&u&&qe(()=>{N(f,"storage",j),N(f,X,ie),h&&j()}),h||j(),y;function se(p){try{const k=n.getItem(e),C=a(x=>{f&&f.dispatchEvent(new CustomEvent(X,{detail:{key:e,oldValue:k,newValue:x,storageArea:n}}))},"dispatchWriteEvent");if(p==null)C(null),n.removeItem(e);else{const x=b.write(p);k!==x&&(n.setItem(e,x),C(x))}}catch(k){m(k)}}a(se,"write");function le(p){const k=p?p.newValue:n.getItem(e);if(k==null)return c&&S!=null&&n.setItem(e,b.write(S)),S;if(!p&&i){const C=b.read(k);return typeof i=="function"?i(C,S):g==="object"&&!Array.isArray(C)?{...S,...C}:C}else return typeof k!="string"?k:b.read(k)}a(le,"read");function ie(p){j(p.detail)}a(ie,"updateFromCustomEvent");function j(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){y.value=S;return}if(!(p&&p.key!==e)){E();try{(p==null?void 0:p.newValue)!==b.write(y.value)&&(y.value=le(p))}catch(k){m(k)}finally{p?te(H):H()}}}}a(j,"update")}a(nt,"useStorage");function rt(e,t){const n=z(i()),r=Ie(e),o=w({get(){var l;const f=r.value;let v=t!=null&&t.getIndexOf?t.getIndexOf(n.value,f):f.indexOf(n.value);return v<0&&(v=(l=t==null?void 0:t.fallbackIndex)!=null?l:0),v},set(l){s(l)}});function s(l){const f=r.value,v=f.length,m=(l%v+v)%v,h=f[m];return n.value=h,h}a(s,"set2");function d(l=1){return s(o.value+l)}a(d,"shift");function u(l=1){return d(l)}a(u,"next");function c(l=1){return d(-l)}a(c,"prev");function i(){var l,f;return(f=A((l=t==null?void 0:t.initialValue)!=null?l:A(e)[0]))!=null?f:void 0}return a(i,"getInitialValue"),$(r,()=>s(o.value)),{state:n,index:o,next:u,prev:c,go:s}}a(rt,"useCycleList");function gt(e,t,n={}){const{window:r=L}=n;return nt(e,t,r==null?void 0:r.sessionStorage,n)}a(gt,"useSessionStorage");function ht(e={},t={}){const{navigator:n=I}=t,r=n,o=J(()=>r&&"canShare"in r);return{isSupported:o,share:a(async(d={})=>{if(o.value){const u={...A(e),...A(d)};let c=!0;if(u.files&&r.canShare&&(c=r.canShare({files:u.files})),c)return r.share(u)}},"share")}}a(ht,"useShare");const oe=a(()=>xe("color-mode").value,"useColorMode"),at=Oe("color-preference-cycle",()=>{const e=oe();return rt(["light","system","dark"],{initialValue:e.preference})});function yt(){const e=oe(),t=at();function n(){t.next(),e.preference=t.state}a(n,"toggle");const r=w(()=>e.preference==="system"?e.value==="dark"?"dark":"light":e.preference==="dark"?"dark":"light");return Ee({auto:w(()=>e.preference==="system"),theme:r,toggle:n})}a(yt,"useThemeToggle");export{ut as _,yt as a,ft as b,dt as c,ht as d,Q as e,mt as f,N as g,gt as h,vt as i,ct as j,pt as r,Qe as u};
