function A(){}const rt=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(W)}function P(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Ft(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function st(t){return Object.keys(t).length===0}function Lt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window<"u";let ot=V?()=>window.performance.now():()=>Date.now(),T=V?t=>requestAnimationFrame(t):A;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&T(X)}function ct(t){let e;return w.size===0&&T(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let D=!1;function ut(){D=!0}function at(){D=!1}function ft(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=c?r+1:ft(1,r,h=>e[n[h]].claim_order,c))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(s[o],_)}}function dt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=U("style");return mt(Y(t),e),e.sheet}function mt(t,e){return dt(t.head||t,e),e.sheet}function pt(t,e){if(D){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){D&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function yt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Gt(){return H(" ")}function Jt(){return H("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){xt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Qt(t,e,n){return et(t,e,n,U)}function Vt(t,e,n){return et(t,e,n,yt)}function $t(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Xt(t){return $t(t," ")}function Yt(t,e){e=""+e,t.data!==e&&(t.data=e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const M=new Map;let O=0;function bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:ht(e),rules:{}};return M.set(t,n),n}function G(t,e,n,i,r,u,s,l=0){const o=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*u(y);c+=y*100+`%{${s(g,1-g)}}
`}const _=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${bt(_)}_${l}`,h=Y(t),{stylesheet:f,rules:d}=M.get(h)||vt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function Et(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Nt())}function Nt(){T(()=>{O||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),M.clear())})}let S;function N(t){S=t}function At(){if(!S)throw new Error("Function called outside component initialization");return S}function Zt(t){At().$$.on_mount.push(t)}const $=[],J=[];let b=[];const K=[],St=Promise.resolve();let L=!1;function Ct(){L||(L=!0,St.then(nt))}function q(t){b.push(t)}const R=new Set;let x=0;function nt(){if(x!==0)return;const t=S;do{try{for(;x<$.length;){const e=$[x];x++,N(e),jt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(N(null),$.length=0,x=0;J.length;)J.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];R.has(n)||(R.add(n),n())}b.length=0}while($.length);for(;K.length;)K.pop()();L=!1,R.clear(),N(t)}function jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function kt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}let E;function Mt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function F(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const k=new Set;let p;function Ut(){p={r:0,c:[],p}}function te(){p.r||v(p.c),p=p.p}function Ot(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ee(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),p.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const qt={duration:0};function ne(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,l=null,o=null,c=null;function _(){c&&Et(t,c)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=rt,tick:g=A,css:z}=u||qt,B={start:ot()+d,b:f};f||(B.group=p,p.r+=1),l||o?o=B:(z&&(_(),c=G(t,s,f,m,d,y,z)),f&&g(0,1),l=a(B,m),q(()=>F(t,f,"start")),ct(C=>{if(o&&C>o.start&&(l=a(o,m),o=null,F(t,l.b,"start"),z&&(_(),c=G(t,s,l.b,l.duration,0,y,u.css))),l){if(C>=l.end)g(s=l.b,1-s),F(t,l.b,"end"),o||(l.b?_():--l.group.r||v(l.group.c)),l=null;else if(C>=l.start){const it=C-l.start;s=l.a+l.d*y(it/l.duration),g(s,1-s)}}return!!(l||o)}))}return{run(f){P(u)?Mt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),l=o=null}}}function ie(t){t&&t.c()}function re(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(W).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),u.forEach(q)}function zt(t,e){const n=t.$$;n.fragment!==null&&(kt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&($.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,n,i,r,u,s,l=[-1]){const o=S;N(t);const c=t.$$={fragment:null,ctx:[],props:u,update:A,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),_&&Bt(t,a)),h}):[],c.update(),_=!0,v(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){ut();const a=gt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Z)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),at(),nt()}N(o)}class se{$destroy(){zt(this,1),this.$destroy=A}$on(e,n){if(!P(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ut as A,yt as B,Vt as C,ie as D,re as E,Dt as F,zt as G,Lt as H,Tt as I,Ht as J,Pt as K,se as S,Gt as a,gt as b,Qt as c,Z as d,U as e,Xt as f,$t as g,Wt as h,le as i,Ft as j,It as k,pt as l,Yt as m,A as n,rt as o,Jt as p,Ot as q,ee as r,Rt as s,H as t,te as u,Zt as v,Kt as w,q as x,ne as y,v as z};
