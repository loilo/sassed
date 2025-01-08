var B=Object.defineProperty;var p=(S,m)=>B(S,"name",{value:m,configurable:!0});(function(){"use strict";var S={exports:{}};S.exports;var m;function j(){return m||(m=1,function(w){var x=function(){var g=String.fromCharCode,k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",M={};function U(n,o){if(!M[n]){M[n]={};for(var c=0;c<n.length;c++)M[n][n.charAt(c)]=c}return M[n][o]}p(U,"getBaseValue");var v={compressToBase64:p(function(n){if(n==null)return"";var o=v._compress(n,6,function(c){return k.charAt(c)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},"compressToBase64"),decompressFromBase64:p(function(n){return n==null?"":n==""?null:v._decompress(n.length,32,function(o){return U(k,n.charAt(o))})},"decompressFromBase64"),compressToUTF16:p(function(n){return n==null?"":v._compress(n,15,function(o){return g(o+32)})+" "},"compressToUTF16"),decompressFromUTF16:p(function(n){return n==null?"":n==""?null:v._decompress(n.length,16384,function(o){return n.charCodeAt(o)-32})},"decompressFromUTF16"),compressToUint8Array:p(function(n){for(var o=v.compress(n),c=new Uint8Array(o.length*2),r=0,i=o.length;r<i;r++){var d=o.charCodeAt(r);c[r*2]=d>>>8,c[r*2+1]=d%256}return c},"compressToUint8Array"),decompressFromUint8Array:p(function(n){if(n==null)return v.decompress(n);for(var o=new Array(n.length/2),c=0,r=o.length;c<r;c++)o[c]=n[c*2]*256+n[c*2+1];var i=[];return o.forEach(function(d){i.push(g(d))}),v.decompress(i.join(""))},"decompressFromUint8Array"),compressToEncodedURIComponent:p(function(n){return n==null?"":v._compress(n,6,function(o){return O.charAt(o)})},"compressToEncodedURIComponent"),decompressFromEncodedURIComponent:p(function(n){return n==null?"":n==""?null:(n=n.replace(/ /g,"+"),v._decompress(n.length,32,function(o){return U(O,n.charAt(o))}))},"decompressFromEncodedURIComponent"),compress:p(function(n){return v._compress(n,16,function(o){return g(o)})},"compress"),_compress:p(function(n,o,c){if(n==null)return"";var r,i,d={},A={},y="",_="",l="",h=2,u=3,a=2,f=[],e=0,s=0,t;for(t=0;t<n.length;t+=1)if(y=n.charAt(t),Object.prototype.hasOwnProperty.call(d,y)||(d[y]=u++,A[y]=!0),_=l+y,Object.prototype.hasOwnProperty.call(d,_))l=_;else{if(Object.prototype.hasOwnProperty.call(A,l)){if(l.charCodeAt(0)<256){for(r=0;r<a;r++)e=e<<1,s==o-1?(s=0,f.push(c(e)),e=0):s++;for(i=l.charCodeAt(0),r=0;r<8;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1}else{for(i=1,r=0;r<a;r++)e=e<<1|i,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=0;for(i=l.charCodeAt(0),r=0;r<16;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,a),a++),delete A[l]}else for(i=d[l],r=0;r<a;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,a),a++),d[_]=u++,l=String(y)}if(l!==""){if(Object.prototype.hasOwnProperty.call(A,l)){if(l.charCodeAt(0)<256){for(r=0;r<a;r++)e=e<<1,s==o-1?(s=0,f.push(c(e)),e=0):s++;for(i=l.charCodeAt(0),r=0;r<8;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1}else{for(i=1,r=0;r<a;r++)e=e<<1|i,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=0;for(i=l.charCodeAt(0),r=0;r<16;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,a),a++),delete A[l]}else for(i=d[l],r=0;r<a;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,a),a++)}for(i=2,r=0;r<a;r++)e=e<<1|i&1,s==o-1?(s=0,f.push(c(e)),e=0):s++,i=i>>1;for(;;)if(e=e<<1,s==o-1){f.push(c(e));break}else s++;return f.join("")},"_compress"),decompress:p(function(n){return n==null?"":n==""?null:v._decompress(n.length,32768,function(o){return n.charCodeAt(o)})},"decompress"),_decompress:p(function(n,o,c){var r=[],i=4,d=4,A=3,y="",_=[],l,h,u,a,f,e,s,t={val:c(0),position:o,index:1};for(l=0;l<3;l+=1)r[l]=l;for(u=0,f=Math.pow(2,2),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;switch(u){case 0:for(u=0,f=Math.pow(2,8),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;s=g(u);break;case 1:for(u=0,f=Math.pow(2,16),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;s=g(u);break;case 2:return""}for(r[3]=s,h=s,_.push(s);;){if(t.index>n)return"";for(u=0,f=Math.pow(2,A),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;switch(s=u){case 0:for(u=0,f=Math.pow(2,8),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;r[d++]=g(u),s=d-1,i--;break;case 1:for(u=0,f=Math.pow(2,16),e=1;e!=f;)a=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),u|=(a>0?1:0)*e,e<<=1;r[d++]=g(u),s=d-1,i--;break;case 2:return _.join("")}if(i==0&&(i=Math.pow(2,A),A++),r[s])y=r[s];else if(s===d)y=h+h.charAt(0);else return null;_.push(y),r[d++]=h+y.charAt(0),i--,h=y,i==0&&(i=Math.pow(2,A),A++)}},"_decompress")};return v}();w!=null?w.exports=x:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return x})}(S)),S.exports}p(j,"requireLzString");var E=j();function T(w){return E.compressToEncodedURIComponent(JSON.stringify(w))}p(T,"encode");function L(w){return JSON.parse(E.decompressFromEncodedURIComponent(w))}p(L,"decode");function R(w){if(typeof w!="object"||w===null)throw new Error("Invalid message")}p(R,"ensureRecord");function z(w){if(R(w),typeof w.id!="string")throw new Error("Invalid message id");switch(w.type){case"encode":if(typeof w.payload!="object")throw new Error("Invalid message payload");break;case"decode":if(typeof w.payload!="string")throw new Error("Invalid message payload");break;default:throw new Error("Invalid message type")}}p(z,"validateMessage"),addEventListener("message",w=>{const x=w.data;switch(z(x),x.type){case"encode":postMessage({type:"encoded",payload:T(x.payload),id:x.id});break;case"decode":postMessage({type:"decoded",payload:L(x.payload),id:x.id});break}})})();
