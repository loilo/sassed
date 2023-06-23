var de=Object.defineProperty;var a=(e,t)=>de(e,"name",{value:t,configurable:!0});import{a as M,r as S,t as R,i as re,e as V,m as x,D as L,s as g,h as ve,o as ne,u as P,K as me,O as _e,c as ye,w as ge,C as he,n as we,g as be,P as Se,y as I,G as Oe,Q as z,R as Pe,S as $e,U as ke,L as Ae,A as W,x as xe,V as Ee,B as Te,W as Ce,E as Fe,z as je}from"./entry.7d1bd2c5.js";import{_ as Ie}from"./_plugin-vue_export-helper.a0691a9b.js";import{_ as Ne}from"./nuxt-link.3f9ac2dd.js";const St=M({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const n=S(!1);return R(()=>{n.value=!0}),o=>{var i;if(n.value)return(i=t.default)==null?void 0:i.call(t);const s=t.fallback||t.placeholder;if(s)return s();const c=o.fallback||o.placeholder||"",u=o.fallbackTag||o.placeholderTag||"span";return re(u,r,c)}}}),D=new WeakMap;function Ot(e){if(D.has(e))return D.get(e);const t={...e};return t.render?t.render=(r,...n)=>{if(r.mounted$){const o=e.render(r,...n);return o.children===null||typeof o.children=="string"?V(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):x(o)}else return x("div",L(r.$attrs??r._.attrs,{key:"placeholder-key"}))}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(r,n)=>{var s;const o=S(!1);return R(()=>{o.value=!0}),Promise.resolve(((s=e.setup)==null?void 0:s.call(e,r,n))||{}).then(c=>typeof c!="function"?{...c,mounted$:o}:(...u)=>{if(o.value){const i=c(...u);return i.children===null||typeof i.children=="string"?V(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):x(i)}else return x("div",L(n.attrs,{key:"placeholder-key"}))})},D.set(e,t),t}a(Ot,"createClientOnly");const De=["src","alt"],Ve=M({__name:"Icon",props:{name:{},alt:{}},setup(e){const t=e,r=g(()=>ve(`icons/${t.name}.svg`)),n=g(()=>`url('${r.value}')`);return(o,s)=>(ne(),re("div",{"data-icon-component":"",class:"icon inline-flex",style:me({"--icon-mask":P(n)})},[V("img",{class:"block opacity-0",src:P(r),alt:o.alt,draggable:"false"},null,8,De)],4))}});const Pt=Ie(Ve,[["__scopeId","data-v-826ccf3b"]]),Le={inheritAttrs:!1},$t=M({...Le,__name:"ActionTrigger",props:{link:{default:void 0},disabled:{type:Boolean,default:!1}},setup(e){const t=e,r=g(()=>typeof t.link<"u"),n=g(()=>typeof t.link=="string"),o=g(()=>n.value&&t.link.startsWith("#")),s=g(()=>n.value&&/^https?:\/\//.test(t.link)),c=g(()=>r.value&&!o.value&&!s.value),u=g(()=>t.disabled?"button":r.value&&!s.value?Ne:r.value?"a":"button"),i=_e(),f=g(()=>{if(t.disabled)return{disabled:!0};if(c.value)return{to:t.link};if(r.value){const l={href:t.link};return"target"in i&&(l.rel="noopener"),l}else return{type:"button"}});return(l,p)=>(ne(),ye(Se(P(u)),L({...P(f),...l.$attrs},{class:{"cursor-pointer":!l.disabled,"cursor-default":l.disabled}}),{default:ge(()=>[he(l.$slots,"default",we(be({link:P(r),external:P(s),anchor:P(o)})))]),_:3},16,["class"]))}});function ae(e){return $e()?(ke(e),!0):!1}a(ae,"tryOnScopeDispose");function O(e){return typeof e=="function"?e():P(e)}a(O,"toValue");const B=typeof window<"u",k=a(()=>{},"noop");function oe(e,t){function r(...n){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(s)})}return a(r,"wrapper"),r}a(oe,"createFilterWrapper");const se=a(e=>e(),"bypassFilter");function Me(e,t=!0,r=!0,n=!1){let o=0,s,c=!0,u=k,i;const f=a(()=>{s&&(clearTimeout(s),s=void 0,u(),u=k)},"clear");return a(p=>{const d=O(e),y=Date.now()-o,m=a(()=>i=p(),"invoke");return f(),d<=0?(o=Date.now(),m()):(y>d&&(r||!c)?(o=Date.now(),m()):t&&(i=new Promise((h,_)=>{u=n?_:h,s=setTimeout(()=>{o=Date.now(),c=!0,h(m()),f()},Math.max(0,d-y))})),!r&&!s&&(s=setTimeout(()=>c=!0,d)),c=!1,i)},"filter")}a(Me,"throttleFilter");function Re(e=se){const t=S(!0);function r(){t.value=!1}a(r,"pause");function n(){t.value=!0}a(n,"resume");const o=a((...s)=>{t.value&&e(...s)},"eventFilter");return{isActive:z(t),pause:r,resume:n,eventFilter:o}}a(Re,"pausableFilter");function ze(e){let t;function r(){return t||(t=e()),t}return a(r,"wrapper"),r.reset=async()=>{const n=t;t=void 0,n&&await n},r}a(ze,"createSingletonPromise");function We(...e){if(e.length!==1)return Oe(...e);const t=e[0];return typeof t=="function"?z(Pe(()=>({get:t,set:k}))):S(t)}a(We,"toRef");function Be(e,t=200,r=!1,n=!0,o=!1){return oe(Me(t,r,n,o),e)}a(Be,"useThrottleFn");function kt(e,t=200,r=!0,n=!0){if(t<=0)return e;const o=S(e.value),s=Be(()=>{o.value=e.value},t,r,n);return I(e,()=>s()),o}a(kt,"refThrottled");function Je(e,t,r={}){const{immediate:n=!0}=r,o=S(!1);let s=null;function c(){s&&(clearTimeout(s),s=null)}a(c,"clear");function u(){o.value=!1,c()}a(u,"stop");function i(...f){c(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...f)},O(t))}return a(i,"start"),n&&(o.value=!0,B&&i()),ae(u),{isPending:z(o),start:i,stop:u}}a(Je,"useTimeoutFn");var H=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,He=a((e,t)=>{var r={};for(var n in e)Ue.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&H)for(var n of H(e))t.indexOf(n)<0&&qe.call(e,n)&&(r[n]=e[n]);return r},"__objRest$5");function Ke(e,t,r={}){const n=r,{eventFilter:o=se}=n,s=He(n,["eventFilter"]);return I(e,oe(o,t),s)}a(Ke,"watchWithFilter");var Ge=Object.defineProperty,Qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,K=a((e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp$2"),Ye=a((e,t)=>{for(var r in t||(t={}))le.call(t,r)&&K(e,r,t[r]);if(C)for(var r of C(t))ie.call(t,r)&&K(e,r,t[r]);return e},"__spreadValues$2"),Ze=a((e,t)=>Qe(e,Xe(t)),"__spreadProps$2"),et=a((e,t)=>{var r={};for(var n in e)le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&ie.call(e,n)&&(r[n]=e[n]);return r},"__objRest$1");function tt(e,t,r={}){const n=r,{eventFilter:o}=n,s=et(n,["eventFilter"]),{eventFilter:c,pause:u,resume:i,isActive:f}=Re(o);return{stop:Ke(e,t,Ze(Ye({},s),{eventFilter:c})),pause:u,resume:i,isActive:f}}a(tt,"watchPausable");function At(e,t,r){let n;Ae(r)?n={evaluating:r}:n=r||{};const{lazy:o=!1,evaluating:s=void 0,shallow:c=!0,onError:u=k}=n,i=S(!o),f=c?W(t):S(t);let l=0;return xe(async p=>{if(!i.value)return;l++;const d=l;let y=!1;s&&Promise.resolve().then(()=>{s.value=!0});try{const m=await e(h=>{p(()=>{s&&(s.value=!1),y||h()})});d===l&&(f.value=m)}catch(m){u(m)}finally{s&&d===l&&(s.value=!1),y=!0}}),o?g(()=>(i.value=!0,f.value)):f}a(At,"computedAsync");function rt(e){var t;const r=O(e);return(t=r==null?void 0:r.$el)!=null?t:r}a(rt,"unrefElement");const F=B?window:void 0,J=B?window.navigator:void 0;function j(...e){let t,r,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,o]=e,t=F):[t,r,n,o]=e,!t)return k;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],c=a(()=>{s.forEach(l=>l()),s.length=0},"cleanup"),u=a((l,p,d,y)=>(l.addEventListener(p,d,y),()=>l.removeEventListener(p,d,y)),"register"),i=I(()=>[rt(t),O(o)],([l,p])=>{c(),l&&s.push(...r.flatMap(d=>n.map(y=>u(l,d,y,p))))},{immediate:!0,flush:"post"}),f=a(()=>{i(),c()},"stop");return ae(f),f}a(j,"useEventListener");function nt(){const e=S(!1);return Ee()&&R(()=>{e.value=!0}),e}a(nt,"useMounted");function U(e){const t=nt();return g(()=>(t.value,!!e()))}a(U,"useSupported");function xt(e={}){const{navigator:t=J,read:r=!1,source:n,copiedDuring:o=1500,legacy:s=!1}=e,c=["copy","cut"],u=U(()=>t&&"clipboard"in t),i=g(()=>u.value||s),f=S(""),l=S(!1),p=Je(()=>l.value=!1,o);function d(){u.value?t.clipboard.readText().then(_=>{f.value=_}):f.value=h()}if(a(d,"updateText"),i.value&&r)for(const _ of c)j(_,d);async function y(_=O(n)){i.value&&_!=null&&(u.value?await t.clipboard.writeText(_):m(_),f.value=_,l.value=!0,p.start())}a(y,"copy");function m(_){const w=document.createElement("textarea");w.value=_??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}a(m,"legacyCopy");function h(){var _,w,A;return(A=(w=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:w.toString())!=null?A:""}return a(h,"legacyRead"),{isSupported:i,text:f,copied:l,copy:y}}a(xt,"useClipboard");const E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__",at=ot();function ot(){return T in E||(E[T]=E[T]||{}),E[T]}a(ot,"getHandlers");function st(e,t){return at[e]||t}a(st,"getSSRHandler");function lt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}a(lt,"guessSerializerType");var it=Object.defineProperty,G=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,Q=a((e,t,r)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp$l"),X=a((e,t)=>{for(var r in t||(t={}))ut.call(t,r)&&Q(e,r,t[r]);if(G)for(var r of G(t))ct.call(t,r)&&Q(e,r,t[r]);return e},"__spreadValues$l");const ft={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Y="vueuse-storage";function pt(e,t,r,n={}){var o;const{flush:s="pre",deep:c=!0,listenToStorageChanges:u=!0,writeDefaults:i=!0,mergeDefaults:f=!1,shallow:l,window:p=F,eventFilter:d,onError:y=a(v=>{console.error(v)},"onError")}=n,m=(l?W:S)(t);if(!r)try{r=st("getDefaultStorage",()=>{var v;return(v=F)==null?void 0:v.localStorage})()}catch(v){y(v)}if(!r)return m;const h=O(t),_=lt(h),w=(o=n.serializer)!=null?o:ft[_],{pause:A,resume:q}=tt(m,()=>ce(m.value),{flush:s,deep:c,eventFilter:d});return p&&u&&(j(p,"storage",N),j(p,Y,pe)),N(),m;function ce(v){try{if(v==null)r.removeItem(e);else{const b=w.write(v),$=r.getItem(e);$!==b&&(r.setItem(e,b),p&&p.dispatchEvent(new CustomEvent(Y,{detail:{key:e,oldValue:$,newValue:b,storageArea:r}})))}}catch(b){y(b)}}a(ce,"write");function fe(v){const b=v?v.newValue:r.getItem(e);if(b==null)return i&&h!==null&&r.setItem(e,w.write(h)),h;if(!v&&f){const $=w.read(b);return typeof f=="function"?f($,h):_==="object"&&!Array.isArray($)?X(X({},h),$):$}else return typeof b!="string"?b:w.read(b)}a(fe,"read");function pe(v){N(v.detail)}a(pe,"updateFromCustomEvent");function N(v){if(!(v&&v.storageArea!==r)){if(v&&v.key==null){m.value=h;return}if(!(v&&v.key!==e)){A();try{m.value=fe(v)}catch(b){y(b)}finally{v?Te(q):q()}}}}a(N,"update")}a(pt,"useStorage");function dt(e,t){const r=W(f()),n=We(e),o=g({get(){var l;const p=n.value;let d=t!=null&&t.getIndexOf?t.getIndexOf(r.value,p):p.indexOf(r.value);return d<0&&(d=(l=t==null?void 0:t.fallbackIndex)!=null?l:0),d},set(l){s(l)}});function s(l){const p=n.value,d=p.length,y=(l%d+d)%d,m=p[y];return r.value=m,m}a(s,"set");function c(l=1){return s(o.value+l)}a(c,"shift");function u(l=1){return c(l)}a(u,"next");function i(l=1){return c(-l)}a(i,"prev");function f(){var l,p;return(p=O((l=t==null?void 0:t.initialValue)!=null?l:O(e)[0]))!=null?p:void 0}return a(f,"getInitialValue"),I(n,()=>s(o.value)),{state:r,index:o,next:u,prev:i}}a(dt,"useCycleList");function Et(e,t={}){const{controls:r=!1,navigator:n=J}=t,o=U(()=>n&&"permissions"in n);let s;const c=typeof e=="string"?{name:e}:e,u=S(),i=a(()=>{s&&(u.value=s.state)},"onChange"),f=ze(async()=>{if(o.value){if(!s)try{s=await n.permissions.query(c),j(s,"change",i),i()}catch{u.value="prompt"}return s}});return f(),r?{state:u,isSupported:o,query:f}:u}a(Et,"usePermission");function Tt(e,t,r={}){const{window:n=F}=r;return pt(e,t,n==null?void 0:n.sessionStorage,r)}a(Tt,"useSessionStorage");var vt=Object.defineProperty,Z=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,ee=a((e,t,r)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp$5"),te=a((e,t)=>{for(var r in t||(t={}))mt.call(t,r)&&ee(e,r,t[r]);if(Z)for(var r of Z(t))_t.call(t,r)&&ee(e,r,t[r]);return e},"__spreadValues$5");function Ct(e={},t={}){const{navigator:r=J}=t,n=r,o=U(()=>n&&"canShare"in n);return{isSupported:o,share:a(async(c={})=>{if(o.value){const u=te(te({},O(e)),O(c));let i=!0;if(u.files&&n.canShare&&(i=n.canShare({files:u.files})),i)return n.share(u)}},"share")}}a(Ct,"useShare");const ue=a(()=>Ce("color-mode").value,"useColorMode"),yt=Fe("color-preference-cycle",()=>{const e=ue();return dt(["light","system","dark"],{initialValue:e.preference})});function Ft(){const e=ue(),t=yt();function r(){t.next(),e.preference=t.state}a(r,"toggle");const n=g(()=>e.preference==="system"?e.value==="dark"?"dark":"light":e.preference==="dark"?"dark":"light");return je({auto:g(()=>e.preference==="system"),theme:n,toggle:r})}a(Ft,"useThemeToggle");export{St as _,Ft as a,Pt as b,$t as c,Ct as d,Et as e,xt as f,j as g,Tt as h,At as i,Ot as j,kt as r,nt as u};