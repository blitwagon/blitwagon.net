function q(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(B)}function F(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n}function H(t){return Object.keys(t).length===0}function lt(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function ut(t,n,e,i,c,s){if(c){const l=L(n,e,i,s);t.p(l,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function I(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:J(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<s.length&&l[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(l[r],a)}}function Q(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ft(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function at(){return j(" ")}function dt(){return j("")}function _t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){V(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(n))}function mt(t,n,e){return X(t,n,e,R)}function Y(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function pt(t){return Y(t," ")}function yt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function gt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function xt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function bt(t){v().$$.on_mount.push(t)}function $t(t){v().$$.after_update.push(t)}function wt(t,n){v().$$.context.set(t,n)}const _=[],M=[],x=[],E=[],P=Promise.resolve();let k=!1;function T(){k||(k=!0,P.then(z))}function Et(){return T(),P}function A(t){x.push(t)}function kt(t){E.push(t)}const w=new Set;let g=0;function z(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),Z(n.$$)}for(h(null),_.length=0,g=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];w.has(e)||(w.add(e),e())}x.length=0}while(_.length);for(;E.length;)E.pop()();k=!1,w.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const b=new Set;let d;function At(){d={r:0,c:[],p:d}}function jt(){d.r||p(d.c),d=d.p}function tt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function vt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Nt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function St(t){return typeof t=="object"&&t!==null?t:{}}function Ct(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Mt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||A(()=>{const r=s.map(B).filter(F);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(A)}function et(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){t.$$.dirty[0]===-1&&(_.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,c,s,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:q,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...N)=>{const S=N.length?N[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=S)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](S),a&&it(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){I();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(W)}else u.fragment&&u.fragment.c();n.intro&&tt(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),G(),z()}h(r)}class Lt{$destroy(){et(this,1),this.$destroy=q}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{nt as A,Nt as B,St as C,et as D,D as E,Et as F,Q as G,_t as H,p as I,lt as J,M as K,Ct as L,xt as M,ut as N,st as O,ot as P,kt as Q,Lt as S,ct as a,U as b,mt as c,W as d,R as e,ht as f,gt as g,ft as h,Bt as i,Y as j,yt as k,at as l,dt as m,q as n,pt as o,At as p,vt as q,jt as r,rt as s,j as t,tt as u,wt as v,$t as w,bt as x,Mt as y,qt as z};
