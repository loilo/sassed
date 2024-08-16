var ue=Object.defineProperty;var r=(e,t)=>ue(e,"name",{value:t,configurable:!0});import{f as V,r as _,v as L,l as ce,c as Y,m as U,q,O as G,j as K,C as W,s as w,i as fe,o as Z,a as de,h as C,P as pe,Q as ve,g as me,w as ge,E as he,R as ye,S as be,G as we,U as _e,z as $,M as ee,V as R,W as Se,X as ke,I as Ae,Y as Te,D as te,A as z,y as Ce,Z as xe,H as Oe,B as Ee}from"./DtnpWbtA.js";import{_ as je}from"./y4GvAF8u.js";import{_ as Fe}from"./9ZDt7H0q.js";const Me=Symbol.for("nuxt:client-only"),ut=V({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const a=_(!1);return L(()=>{a.value=!0}),ce(Me,!0),o=>{var c;if(a.value)return(c=t.default)==null?void 0:c.call(t);const s=t.fallback||t.placeholder;if(s)return s();const d=o.fallback||o.placeholder||"",u=o.fallbackTag||o.placeholderTag||"span";return Y(u,n,d)}}}),D=new WeakMap;function ct(e){if(D.has(e))return D.get(e);const t={...e};return t.render?t.render=(n,a,o,s,d,u)=>{var c;if(s.mounted$??n.mounted$){const i=(c=e.render)==null?void 0:c.bind(n)(n,a,o,s,d,u);return i.children===null||typeof i.children=="string"?U(i):q(i)}else{const i=G(n._.vnode.el??null)??["<div></div>"];return K(i.join(""),i.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(n,a)=>{var c;const o=W(),s={...o.attrs},d=Ne(o);for(const i in s)delete o.attrs[i];const u=_(!1);return L(()=>{Object.assign(o.attrs,s),o.vnode.dirs=d,u.value=!0}),Promise.resolve(((c=e.setup)==null?void 0:c.call(e,n,a))||{}).then(i=>typeof i!="function"?(i=i||{},i.mounted$=u,i):(...l)=>{if(u.value){const f=i(...l);return f.children===null||typeof f.children=="string"?U(f):q(f)}else{const f=G((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return K(f.join(""),f.length)}})},D.set(e,t),t}r(ct,"createClientOnly");function Ne(e){if(!e||!e.vnode.dirs)return null;const t=e.vnode.dirs;return e.vnode.dirs=null,t}r(Ne,"extractDirectives");const Pe=["src","alt"],Le=V({__name:"Icon",props:{name:{},alt:{}},setup(e){const t=e,n=w(()=>fe(`icons/${t.name}.svg`)),a=w(()=>`url('${n.value}')`);return(o,s)=>(Z(),Y("div",{"data-icon-component":"",class:"icon inline-flex",style:pe({"--icon-mask":C(a)})},[de("img",{class:"block opacity-0",src:C(n),alt:o.alt,draggable:"false"},null,8,Pe)],4))}}),ft=je(Le,[["__scopeId","data-v-826ccf3b"]]),$e={inheritAttrs:!1},dt=V({...$e,__name:"ActionTrigger",props:{link:{default:void 0},disabled:{type:Boolean,default:!1}},setup(e){const t=e,n=w(()=>typeof t.link<"u"),a=w(()=>typeof t.link=="string"),o=w(()=>a.value&&t.link.startsWith("#")),s=w(()=>a.value&&/^https?:\/\//.test(t.link)),d=w(()=>n.value&&!o.value&&!s.value),u=w(()=>t.disabled?"button":n.value&&!s.value?Fe:n.value?"a":"button"),c=ve(),i=w(()=>{if(t.disabled)return{disabled:!0};if(d.value)return{to:t.link};if(n.value){const l={href:t.link};return"target"in c&&(l.rel="noopener"),l}else return{type:"button"}});return(l,f)=>(Z(),me(_e(C(u)),we({...C(i),...l.$attrs},{class:{"cursor-pointer":!l.disabled,"cursor-default":l.disabled}}),{default:ge(()=>[he(l.$slots,"default",ye(be({link:C(n),external:C(s),anchor:C(o)})))]),_:3},16,["class"]))}});function ne(e){return Se()?(ke(e),!0):!1}r(ne,"tryOnScopeDispose");function A(e){return typeof e=="function"?e():C(e)}r(A,"toValue");const B=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const De=Object.prototype.toString,Ve=r(e=>De.call(e)==="[object Object]","isObject"),E=r(()=>{},"noop");function re(e,t){function n(...a){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(o).catch(s)})}return r(n,"wrapper"),n}r(re,"createFilterWrapper");const ae=r(e=>e(),"bypassFilter");function We(...e){let t=0,n,a=!0,o=E,s,d,u,c,i;!ee(e[0])&&typeof e[0]=="object"?{delay:d,trailing:u=!0,leading:c=!0,rejectOnCancel:i=!1}=e[0]:[d,u=!0,c=!0,i=!1]=e;const l=r(()=>{n&&(clearTimeout(n),n=void 0,o(),o=E)},"clear");return r(v=>{const g=A(d),h=Date.now()-t,y=r(()=>s=v(),"invoke2");return l(),g<=0?(t=Date.now(),y()):(h>g&&(c||!a)?(t=Date.now(),y()):u&&(s=new Promise((S,x)=>{o=i?x:S,n=setTimeout(()=>{t=Date.now(),a=!0,S(y()),l()},Math.max(0,g-h))})),!c&&!n&&(n=setTimeout(()=>a=!0,g)),a=!1,s)},"filter")}r(We,"throttleFilter");function Re(e=ae){const t=_(!0);function n(){t.value=!1}r(n,"pause");function a(){t.value=!0}r(a,"resume");const o=r((...s)=>{t.value&&e(...s)},"eventFilter");return{isActive:R(t),pause:n,resume:a,eventFilter:o}}r(Re,"pausableFilter");function ze(e){let t;function n(){return t||(t=e()),t}return r(n,"wrapper"),n.reset=async()=>{const a=t;t=void 0,a&&await a},n}r(ze,"createSingletonPromise");function Be(e){return W()}r(Be,"getLifeCycleTarget");function Ie(...e){if(e.length!==1)return Ae(...e);const t=e[0];return typeof t=="function"?R(Te(()=>({get:t,set:E}))):_(t)}r(Ie,"toRef");function Je(e,t=200,n=!1,a=!0,o=!1){return re(We(t,n,a,o),e)}r(Je,"useThrottleFn");function pt(e,t=200,n=!0,a=!0){if(t<=0)return e;const o=_(e.value),s=Je(()=>{o.value=e.value},t,n,a);return $(e,()=>s()),o}r(pt,"refThrottled");function He(e,t,n={}){const{eventFilter:a=ae,...o}=n;return $(e,re(a,t),o)}r(He,"watchWithFilter");function Ue(e,t,n={}){const{eventFilter:a,...o}=n,{eventFilter:s,pause:d,resume:u,isActive:c}=Re(a);return{stop:He(e,t,{...o,eventFilter:s}),pause:d,resume:u,isActive:c}}r(Ue,"watchPausable");function qe(e,t=!0,n){Be()?L(e,n):t?e():te(e)}r(qe,"tryOnMounted");function Ge(e,t,n={}){const{immediate:a=!0}=n,o=_(!1);let s=null;function d(){s&&(clearTimeout(s),s=null)}r(d,"clear");function u(){o.value=!1,d()}r(u,"stop");function c(...i){d(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...i)},A(t))}return r(c,"start"),a&&(o.value=!0,B&&c()),ne(u),{isPending:R(o),start:c,stop:u}}r(Ge,"useTimeoutFn");function vt(e,t,n){let a;ee(n)?a={evaluating:n}:a={};const{lazy:o=!1,evaluating:s=void 0,shallow:d=!0,onError:u=E}=a,c=_(!o),i=d?z(t):_(t);let l=0;return Ce(async f=>{if(!c.value)return;l++;const v=l;let g=!1;s&&Promise.resolve().then(()=>{s.value=!0});try{const h=await e(y=>{f(()=>{s&&(s.value=!1),g||y()})});v===l&&(i.value=h)}catch(h){u(h)}finally{s&&v===l&&(s.value=!1),g=!0}}),o?w(()=>(c.value=!0,i.value)):i}r(vt,"computedAsync");function Ke(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}r(Ke,"unrefElement");const N=B?window:void 0,I=B?window.navigator:void 0;function P(...e){let t,n,a,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,o]=e,t=N):[t,n,a,o]=e,!t)return E;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const s=[],d=r(()=>{s.forEach(l=>l()),s.length=0},"cleanup"),u=r((l,f,v,g)=>(l.addEventListener(f,v,g),()=>l.removeEventListener(f,v,g)),"register"),c=$(()=>[Ke(t),A(o)],([l,f])=>{if(d(),!l)return;const v=Ve(f)?{...f}:f;s.push(...n.flatMap(g=>a.map(h=>u(l,g,h,v))))},{immediate:!0,flush:"post"}),i=r(()=>{c(),d()},"stop");return ne(i),i}r(P,"useEventListener");function Qe(){const e=_(!1),t=W();return t&&L(()=>{e.value=!0},t),e}r(Qe,"useMounted");function J(e){const t=Qe();return w(()=>(t.value,!!e()))}r(J,"useSupported");function Q(e,t={}){const{controls:n=!1,navigator:a=I}=t,o=J(()=>a&&"permissions"in a);let s;const d=typeof e=="string"?{name:e}:e,u=_(),c=r(()=>{s&&(u.value=s.state)},"onChange"),i=ze(async()=>{if(o.value){if(!s)try{s=await a.permissions.query(d),P(s,"change",c),c()}catch{u.value="prompt"}return s}});return i(),n?{state:u,isSupported:o,query:i}:u}r(Q,"usePermission");function mt(e={}){const{navigator:t=I,read:n=!1,source:a,copiedDuring:o=1500,legacy:s=!1}=e,d=J(()=>t&&"clipboard"in t),u=Q("clipboard-read"),c=Q("clipboard-write"),i=w(()=>d.value||s),l=_(""),f=_(!1),v=Ge(()=>f.value=!1,o);function g(){d.value&&x(u.value)?t.clipboard.readText().then(m=>{l.value=m}):l.value=S()}r(g,"updateText"),i.value&&n&&P(["copy","cut"],g);async function h(m=A(a)){i.value&&m!=null&&(d.value&&x(c.value)?await t.clipboard.writeText(m):y(m),l.value=m,f.value=!0,v.start())}r(h,"copy");function y(m){const k=document.createElement("textarea");k.value=m??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}r(y,"legacyCopy");function S(){var m,k,O;return(O=(k=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:k.toString())!=null?O:""}r(S,"legacyRead");function x(m){return m==="granted"||m==="prompt"}return r(x,"isAllowed"),{isSupported:i,text:l,copied:f,copy:h}}r(mt,"useClipboard");const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__",Xe=Ye();function Ye(){return M in F||(F[M]=F[M]||{}),F[M]}r(Ye,"getHandlers");function Ze(e,t){return Xe[e]||t}r(Ze,"getSSRHandler");function et(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}r(et,"guessSerializerType");const tt={boolean:{read:r(e=>e==="true","read"),write:r(e=>String(e),"write")},object:{read:r(e=>JSON.parse(e),"read"),write:r(e=>JSON.stringify(e),"write")},number:{read:r(e=>Number.parseFloat(e),"read"),write:r(e=>String(e),"write")},any:{read:r(e=>e,"read"),write:r(e=>String(e),"write")},string:{read:r(e=>e,"read"),write:r(e=>String(e),"write")},map:{read:r(e=>new Map(JSON.parse(e)),"read"),write:r(e=>JSON.stringify(Array.from(e.entries())),"write")},set:{read:r(e=>new Set(JSON.parse(e)),"read"),write:r(e=>JSON.stringify(Array.from(e)),"write")},date:{read:r(e=>new Date(e),"read"),write:r(e=>e.toISOString(),"write")}},X="vueuse-storage";function nt(e,t,n,a={}){var o;const{flush:s="pre",deep:d=!0,listenToStorageChanges:u=!0,writeDefaults:c=!0,mergeDefaults:i=!1,shallow:l,window:f=N,eventFilter:v,onError:g=r(p=>{console.error(p)},"onError"),initOnMounted:h}=a,y=(l?z:_)(t);if(!n)try{n=Ze("getDefaultStorage",()=>{var p;return(p=N)==null?void 0:p.localStorage})()}catch(p){g(p)}if(!n)return y;const S=A(t),x=et(S),m=(o=a.serializer)!=null?o:tt[x],{pause:k,resume:O}=Ue(y,()=>se(y.value),{flush:s,deep:d,eventFilter:v});f&&u&&qe(()=>{n instanceof Storage?P(f,"storage",j):P(f,X,ie),h&&j()}),h||j();function H(p,b){f&&!(n instanceof Storage)&&f.dispatchEvent(new CustomEvent(X,{detail:{key:e,oldValue:p,newValue:b,storageArea:n}}))}r(H,"dispatchWriteEvent");function se(p){try{const b=n.getItem(e);if(p==null)H(b,null),n.removeItem(e);else{const T=m.write(p);b!==T&&(n.setItem(e,T),H(b,T))}}catch(b){g(b)}}r(se,"write");function le(p){const b=p?p.newValue:n.getItem(e);if(b==null)return c&&S!=null&&n.setItem(e,m.write(S)),S;if(!p&&i){const T=m.read(b);return typeof i=="function"?i(T,S):x==="object"&&!Array.isArray(T)?{...S,...T}:T}else return typeof b!="string"?b:m.read(b)}r(le,"read");function j(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){y.value=S;return}if(!(p&&p.key!==e)){k();try{(p==null?void 0:p.newValue)!==m.write(y.value)&&(y.value=le(p))}catch(b){g(b)}finally{p?te(O):O()}}}}r(j,"update");function ie(p){j(p.detail)}return r(ie,"updateFromCustomEvent"),y}r(nt,"useStorage");function rt(e,t){const n=z(i()),a=Ie(e),o=w({get(){var l;const f=a.value;let v=t!=null&&t.getIndexOf?t.getIndexOf(n.value,f):f.indexOf(n.value);return v<0&&(v=(l=t==null?void 0:t.fallbackIndex)!=null?l:0),v},set(l){s(l)}});function s(l){const f=a.value,v=f.length,g=(l%v+v)%v,h=f[g];return n.value=h,h}r(s,"set2");function d(l=1){return s(o.value+l)}r(d,"shift");function u(l=1){return d(l)}r(u,"next");function c(l=1){return d(-l)}r(c,"prev");function i(){var l,f;return(f=A((l=t==null?void 0:t.initialValue)!=null?l:A(e)[0]))!=null?f:void 0}return r(i,"getInitialValue"),$(a,()=>s(o.value)),{state:n,index:o,next:u,prev:c,go:s}}r(rt,"useCycleList");function gt(e,t,n={}){const{window:a=N}=n;return nt(e,t,a==null?void 0:a.sessionStorage,n)}r(gt,"useSessionStorage");function ht(e={},t={}){const{navigator:n=I}=t,a=n,o=J(()=>a&&"canShare"in a);return{isSupported:o,share:r(async(d={})=>{if(o.value){const u={...A(e),...A(d)};let c=!0;if(u.files&&a.canShare&&(c=a.canShare({files:u.files})),c)return a.share(u)}},"share")}}r(ht,"useShare");const oe=r(()=>xe("color-mode").value,"useColorMode"),at=Oe("color-preference-cycle",()=>{const e=oe();return rt(["light","system","dark"],{initialValue:e.preference})});function yt(){const e=oe(),t=at();function n(){t.next(),e.preference=t.state}r(n,"toggle");const a=w(()=>e.preference==="system"?e.value==="dark"?"dark":"light":e.preference==="dark"?"dark":"light");return Ee({auto:w(()=>e.preference==="system"),theme:a,toggle:n})}r(yt,"useThemeToggle");export{ut as _,yt as a,ft as b,dt as c,ht as d,Q as e,mt as f,P as g,gt as h,vt as i,ct as j,pt as r,Qe as u};
