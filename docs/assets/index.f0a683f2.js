(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var ce,_,Qe,W,Le,ie={},Ye=[],wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function A(e,t){for(var n in t)e[n]=t[n];return e}function Ke(e){var t=e.parentNode;t&&t.removeChild(e)}function ve(e,t,n){var o,s,r,a={};for(r in t)r=="key"?o=t[r]:r=="ref"?s=t[r]:a[r]=t[r];if(arguments.length>2&&(a.children=arguments.length>3?ce.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return ne(e,a,o,s,null)}function ne(e,t,n,o,s){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++Qe:s};return s==null&&_.vnode!=null&&_.vnode(r),r}function j(e){return e.children}function I(e,t){this.props=e,this.context=t}function F(e,t){if(t==null)return e.__?F(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?F(e):null}function Je(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Je(e)}}function Pe(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!se.__r++||Le!==_.debounceRendering)&&((Le=_.debounceRendering)||setTimeout)(se)}function se(){for(var e;se.__r=W.length;)e=W.sort(function(t,n){return t.__v.__b-n.__v.__b}),W=[],e.some(function(t){var n,o,s,r,a,c;t.__d&&(a=(r=(n=t).__v).__e,(c=n.__P)&&(o=[],(s=A({},r)).__v=r.__v+1,ye(c,r,s,n.__n,c.ownerSVGElement!==void 0,r.__h!=null?[a]:null,o,a==null?F(r):a,r.__h),nt(o,r),r.__e!=a&&Je(r)))})}function Xe(e,t,n,o,s,r,a,c,p,v){var i,g,h,u,m,M,b,C=o&&o.__k||Ye,T=C.length;for(n.__k=[],i=0;i<t.length;i++)if((u=n.__k[i]=(u=t[i])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?ne(null,u,null,null,u):Array.isArray(u)?ne(j,{children:u},null,null,null):u.__b>0?ne(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(h=C[i])===null||h&&u.key==h.key&&u.type===h.type)C[i]=void 0;else for(g=0;g<T;g++){if((h=C[g])&&u.key==h.key&&u.type===h.type){C[g]=void 0;break}h=null}ye(e,u,h=h||ie,s,r,a,c,p,v),m=u.__e,(g=u.ref)&&h.ref!=g&&(b||(b=[]),h.ref&&b.push(h.ref,null,u),b.push(g,u.__c||m,u)),m!=null?(M==null&&(M=m),typeof u.type=="function"&&u.__k===h.__k?u.__d=p=et(u,p,e):p=tt(e,u,h,C,m,p),typeof n.type=="function"&&(n.__d=p)):p&&h.__e==p&&p.parentNode!=e&&(p=F(h))}for(n.__e=M,i=T;i--;)C[i]!=null&&rt(C[i],C[i]);if(b)for(i=0;i<b.length;i++)ot(b[i],b[++i],b[++i])}function et(e,t,n){for(var o,s=e.__k,r=0;s&&r<s.length;r++)(o=s[r])&&(o.__=e,t=typeof o.type=="function"?et(o,t,n):tt(n,o,o,s,o.__e,t));return t}function le(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){le(n,t)}):t.push(e)),t}function tt(e,t,n,o,s,r){var a,c,p;if(t.__d!==void 0)a=t.__d,t.__d=void 0;else if(n==null||s!=r||s.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(s),a=null;else{for(c=r,p=0;(c=c.nextSibling)&&p<o.length;p+=2)if(c==s)break e;e.insertBefore(s,r),a=r}return a!==void 0?a:s.nextSibling}function kt(e,t,n,o,s){var r;for(r in n)r==="children"||r==="key"||r in t||ae(e,r,null,n[r],o);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||ae(e,r,t[r],n[r],o)}function He(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||wt.test(t)?n:n+"px"}function ae(e,t,n,o,s){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||He(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||He(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?$e:Ie,r):e.removeEventListener(t,r?$e:Ie,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Ie(e){this.l[e.type+!1](_.event?_.event(e):e)}function $e(e){this.l[e.type+!0](_.event?_.event(e):e)}function ye(e,t,n,o,s,r,a,c,p){var v,i,g,h,u,m,M,b,C,T,Q,U,Te,Y,K,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,c=t.__e=n.__e,t.__h=null,r=[c]),(v=_.__b)&&v(t);try{e:if(typeof k=="function"){if(b=t.props,C=(v=k.contextType)&&o[v.__c],T=v?C?C.props.value:v.__:o,n.__c?M=(i=t.__c=n.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(b,T):(t.__c=i=new I(b,T),i.constructor=k,i.render=St),C&&C.sub(i),i.props=b,i.state||(i.state={}),i.context=T,i.__n=o,g=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=A({},i.__s)),A(i.__s,k.getDerivedStateFromProps(b,i.__s))),h=i.props,u=i.state,g)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&b!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(b,T),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(b,i.__s,T)===!1||t.__v===n.__v){for(i.props=b,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(J){J&&(J.__=t)}),Q=0;Q<i._sb.length;Q++)i.__h.push(i._sb[Q]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(b,i.__s,T),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,u,m)})}if(i.context=T,i.props=b,i.__v=t,i.__P=e,U=_.__r,Te=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,U&&U(t),v=i.render(i.props,i.state,i.context),Y=0;Y<i._sb.length;Y++)i.__h.push(i._sb[Y]);i._sb=[]}else do i.__d=!1,U&&U(t),v=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Te<25);i.state=i.__s,i.getChildContext!=null&&(o=A(A({},o),i.getChildContext())),g||i.getSnapshotBeforeUpdate==null||(m=i.getSnapshotBeforeUpdate(h,u)),K=v!=null&&v.type===j&&v.key==null?v.props.children:v,Xe(e,Array.isArray(K)?K:[K],t,n,o,s,r,a,c,p),i.base=t.__e,t.__h=null,i.__h.length&&a.push(i),M&&(i.__E=i.__=null),i.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Nt(n.__e,t,n,o,s,r,a,p);(v=_.diffed)&&v(t)}catch(J){t.__v=null,(p||r!=null)&&(t.__e=c,t.__h=!!p,r[r.indexOf(c)]=null),_.__e(J,t,n)}}function nt(e,t){_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){_.__e(o,n.__v)}})}function Nt(e,t,n,o,s,r,a,c){var p,v,i,g=n.props,h=t.props,u=t.type,m=0;if(u==="svg"&&(s=!0),r!=null){for(;m<r.length;m++)if((p=r[m])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){e=p,r[m]=null;break}}if(e==null){if(u===null)return document.createTextNode(h);e=s?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,h.is&&h),r=null,c=!1}if(u===null)g===h||c&&e.data===h||(e.data=h);else{if(r=r&&ce.call(e.childNodes),v=(g=n.props||ie).dangerouslySetInnerHTML,i=h.dangerouslySetInnerHTML,!c){if(r!=null)for(g={},m=0;m<e.attributes.length;m++)g[e.attributes[m].name]=e.attributes[m].value;(i||v)&&(i&&(v&&i.__html==v.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(kt(e,h,g,s,c),i)t.__k=[];else if(m=t.props.children,Xe(e,Array.isArray(m)?m:[m],t,n,o,s&&u!=="foreignObject",r,a,r?r[0]:n.__k&&F(n,0),c),r!=null)for(m=r.length;m--;)r[m]!=null&&Ke(r[m]);c||("value"in h&&(m=h.value)!==void 0&&(m!==e.value||u==="progress"&&!m||u==="option"&&m!==g.value)&&ae(e,"value",m,g.value,!1),"checked"in h&&(m=h.checked)!==void 0&&m!==e.checked&&ae(e,"checked",m,g.checked,!1))}return e}function ot(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){_.__e(o,n)}}function rt(e,t,n){var o,s;if(_.unmount&&_.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ot(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){_.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&rt(o[s],t,n||typeof e.type!="function");n||e.__e==null||Ke(e.__e),e.__=e.__e=e.__d=void 0}function St(e,t,n){return this.constructor(e,n)}function Tt(e,t,n){var o,s,r;_.__&&_.__(e,t),s=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],ye(t,e=(!o&&n||t).__k=ve(j,null,[e]),s||ie,ie,t.ownerSVGElement!==void 0,!o&&n?[n]:s?null:t.firstChild?ce.call(t.childNodes):null,r,!o&&n?n:s?s.__e:t.firstChild,o),nt(r,e)}ce=Ye.slice,_={__e:function(e,t,n,o){for(var s,r,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),a=s.__d),a)return s.__E=s}catch(c){e=c}throw e}},Qe=0,I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},n),this.props)),e&&A(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pe(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pe(this))},I.prototype.render=j,W=[],se.__r=0;function it(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=it(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function d(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=it(e))&&(o&&(o+=" "),o+=t);return o}const Lt=d,O=d,Ce=d,xe=d,ue=d,Z=d,fe=d,Pt=d,D=d,Ht=d,st=d,It=d,P=d,lt=d,x=d,$t=d,N=d,at=d,E=d,we=d,V=d,_t=d,ct=d,w=d,At=d,$=d,z=d,Et=d,S=d,q=d,de=d,Mt=d,_e=d,Ot=d,ke=d,L=d,B=d,jt=d,R=d,G=d,Ne=d,Dt=d,f=d;var Vt=0;function l(e,t,n,o,s){var r,a,c={};for(a in t)a=="ref"?r=t[a]:c[a]=t[a];var p={type:e,props:c,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Vt,__source:s,__self:o};if(typeof e=="function"&&(r=e.defaultProps))for(a in r)c[a]===void 0&&(c[a]=r[a]);return _.vnode&&_.vnode(p),p}const Bt=f(R("text-white")),H=f(Bt,ke("text-left"));f(H,B("font-medium"));f(R("text-blue-300"));const Rt=f(H,L("text-xl","sm:text-3xl"));function ut({children:e}){return l("h3",{className:Rt,children:e})}const Ut=f(H,ke("!text-justify"));function X({children:e}){return l("h3",{className:Ut,children:e})}const ft=f(R("hover:text-yellow-100","group-hover:text-yellow-100")),dt=f(R("text-transparent"),Lt("bg-clip-text"),Ce("bg-gradient-to-r"),xe("from-pink-300","via-red-500","to-yellow-300"),st("animate-shimmering")),Wt=f(dt,L("text-4xl","sm:text-6xl","md:text-8xl"),B("font-bold"));function Ft({children:e}){return l("h1",{className:Wt,children:e})}const zt=f(H,L("text-lg","sm:text-xl","md:text-3xl"));function Zt({children:e}){return l("h2",{className:zt,children:e})}const qt=f(H,L("text-xl","sm:text-2xl","md:text-4xl"));function Gt({children:e}){return l("h2",{className:qt,children:e})}const Qt=f(dt,L("text-xl","sm:text-4xl"),B("font-bold"));function Yt({children:e}){return l("h3",{className:Qt,children:e})}const Kt=f(H,L("text-base","sm:text-xl","md:text-2xl"));function Jt({children:e}){return l("h4",{className:Kt,children:e})}const Xt=f(H,jt("leading-tight"),L("text-sm","sm:text-base","md:text-xl"),ke("text-justify"));function en({children:e}){return l("p",{className:Xt,children:e})}const tn=f(ft,H,L("text-base","sm:text-xl","md:text-2xl"),B("font-semibold"));function nn({children:e}){return l("p",{className:tn,children:e})}const on=f(ft,H,L("text-base","sm:text-lg"),B("font-medium"));function pt({children:e}){return l("p",{className:on,children:e})}f(L("text-3xl"));const rn=f(H,B("font-semibold"),L("text-xl","sm:text-3xl"));function sn({children:e}){return l("p",{className:rn,children:e})}const ht=f(w("flex"),P("flex-row"),S("w-3/4","md:w-1/2"),q("max-w-5xl"),ct("space-x-2"),x("items-baseline"));function mt(){return l("div",{className:f(at("grow"),fe("border-t-2","sm:border-t-4"),ue("border-gray-400"))})}const ln=()=>l("div",{className:ht,children:[l(ut,{children:"About me"}),l(mt,{})]}),an=()=>l("div",{className:ht,children:[l(mt,{}),l(ut,{children:"Some things I've built"})]}),_n=f(V("py-10"),w("flex"),P("flex-col"),N("justify-center"),x("items-center"),ct("space-y-6"),$("relative"),D("group:opacity-100"),we("group")),pe=f($("absolute"),S("w-96"),de("h-96"),Z("rounded-full"),Ne("blur-xl","filter"),Pt("mix-blend-multiply"),D("opacity-80","group-hover:opacity-0"),Ht("duration-500"),st("animate-blob"),w("hidden","lg:block")),cn=f(w("flex"),P("flex-row"),N("justify-between"),x("items-center"),S("w-full"),q("max-w-3xl"),E("gap-3"),lt("flex-wrap"));function un(){return l("section",{className:_n,id:"about",children:[l("div",{className:f(pe,z("left-10"),O("bg-purple-400"))}),l("div",{className:f(pe,O("bg-orange-400"))}),l("div",{className:f(pe,z("right-8"),O("bg-blue-400"))}),l(ln,{}),l("div",{className:cn,children:[l(X,{children:"Hi! I'm Anton. I love coding, solving problems and making positive impact."}),l(X,{children:"I've started programming at the university. It was a course in C where we had to learn how to manage memory, use pointers and all of that low-level stuff. Then there were some more courses in C++, Python, a project using C#. It was a good start and then I kept learning programming by myself and I never stopped."}),l(X,{children:"Recently, I was mainly a backend developer but I've always felt incomplete as I didn't know how to make a UI using web technologies as it is was a great part of a modern app. And now I know! Being a full-stack developer means I can bring a project from concept to implementation."}),l(X,{children:"I've worked with different technologies and languages. In my work and projects I mainly use Python, TypeScript, SQL\\NoSQL databases."})]})]})}const fn=f(w("flex"),N("justify-center"),x("items-center"),V("pb-10"));function dn(){return l("footer",{children:l("div",{className:fn,style:" text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor; ",children:l(sn,{children:"Thanks for scrolling!"})})})}const pn=f(w("flex"),P("flex-row"),N("justify-center"),x("items-center"),Mt("min-h-screen"),E("gap-3","sm:gap-6")),ee=f(_e("fill-white"),D("opacity-60","hover:opacity-100"),S("w-5","sm:w-7","md:w-10"),de("h-5","sm:h-7","md:h-10"),_e("fill-current"),R("text-white","hover:text-yellow-100")),hn=[{name:"telegram",link:"https://t.me/anthonythetrader",svg:l("svg",{className:ee,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M27.6822 3.93122C27.2322 3.54962 26.5254 3.49502 25.7946 3.78842H25.7934C25.0248 4.09682 4.03678 13.0992 3.18238 13.467C3.02698 13.521 1.66978 14.0274 1.80958 15.1554C1.93438 16.1724 3.02518 16.5936 3.15838 16.6422L8.49418 18.4692C8.84818 19.6476 10.1532 23.9952 10.4418 24.924C10.6218 25.503 10.9152 26.2638 11.4294 26.4204C11.8806 26.5944 12.3294 26.4354 12.6198 26.2074L15.882 23.1816L21.1482 27.2886L21.2736 27.3636C21.6312 27.522 21.9738 27.6012 22.3008 27.6012C22.5534 27.6012 22.7958 27.5538 23.0274 27.459C23.8164 27.135 24.132 26.3832 24.165 26.298L28.0986 5.85182C28.3386 4.75982 28.005 4.20422 27.6822 3.93122ZM13.2 19.2L11.4 24L9.59999 18L23.4 7.80002L13.2 19.2Z"})})},{name:"email",link:"mailto:donanthonywins@gmail.com",svg:l("svg",{className:ee,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:[l("path",{d:"M15.0586 12.3047C13.6046 12.3047 12.4219 13.4875 12.4219 14.9414C12.4219 16.3954 13.6046 17.5781 15.0586 17.5781C16.5125 17.5781 17.6953 16.3954 17.6953 14.9414C17.6953 13.4875 16.5125 12.3047 15.0586 12.3047Z"}),l("path",{d:"M14.9414 0C6.70254 0 0 6.70254 0 14.9414C0 23.1803 6.70254 30 14.9414 30C23.1803 30 30 23.1803 30 14.9414C30 6.70254 23.1803 0 14.9414 0ZM21.2109 19.3359C20.0231 19.3359 18.9755 18.7406 18.3388 17.8362C17.533 18.7483 16.3684 19.3359 15.0586 19.3359C12.6356 19.3359 10.6641 17.3644 10.6641 14.9414C10.6641 12.5184 12.6356 10.5469 15.0586 10.5469C16.0516 10.5469 16.9586 10.8905 17.6953 11.4482V11.4258C17.6953 10.94 18.0884 10.5469 18.5742 10.5469C19.06 10.5469 19.4531 10.94 19.4531 11.4258C19.4531 13.3805 19.4531 13.8647 19.4531 15.8203C19.4531 16.7893 20.2419 17.5781 21.2109 17.5781C22.18 17.5781 22.9688 16.7893 22.9688 15.8203C22.9688 9.93803 19.0763 7.03125 15.0586 7.03125C10.6967 7.03125 7.14844 10.5795 7.14844 14.9414C7.14844 19.3033 10.6967 22.8516 15.0586 22.8516C16.8164 22.8516 18.4789 22.2885 19.8669 21.2225C20.7939 20.5148 21.8555 21.9118 20.938 22.6164C19.2394 23.9201 17.2069 24.6094 15.0586 24.6094C9.72768 24.6094 5.39062 20.2723 5.39062 14.9414C5.39062 9.61049 9.72768 5.27344 15.0586 5.27344C19.9158 5.27344 24.7266 8.85557 24.7266 15.8203C24.7266 17.7592 23.1499 19.3359 21.2109 19.3359Z"})]})},{name:"linkedin",link:"https://www.linkedin.com/in/anton-buev-6a1127254/",svg:l("svg",{className:ee,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M24.375 0H5.625C2.51769 0 0 2.51769 0 5.625V24.375C0 27.4823 2.51769 30 5.625 30H24.375C27.4823 30 30 27.4823 30 24.375V5.625C30 2.51769 27.4823 0 24.375 0ZM9.27577 25.4642H4.61538L4.58885 11.5119H9.24923L9.27577 25.4642ZM6.82846 9.68538H6.79962C5.27885 9.68538 4.29462 8.63769 4.29462 7.32923C4.29462 5.99192 5.30885 4.97423 6.85846 4.97423C8.40923 4.97423 9.36346 5.99192 9.39231 7.32923C9.39231 8.63654 8.40808 9.68538 6.82846 9.68538ZM25.4331 25.4654H20.7312V17.8835C20.7312 16.0512 20.2454 14.8015 18.6058 14.8015C17.355 14.8015 16.6777 15.645 16.35 16.4596C16.23 16.7515 16.2 17.1565 16.2 17.5638V25.4665H11.475L11.4485 11.5119H16.1735L16.2 13.4792C16.8012 12.5492 17.8085 11.2258 20.2154 11.2258C23.1969 11.2258 25.4319 13.1735 25.4319 17.3608V25.4654H25.4331Z"})})},{name:"github",link:"https://github.com/soapkelele",svg:l("svg",{className:ee,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z"})})}],mn=f(w("flex"),P("flex-col"),E("gap-3","md:gap-6"),N("justify-evenly"),x("items-center")),vn=()=>l("ul",{className:mn,children:hn.map(e=>l("li",{children:l("a",{href:e.link,alt:e.name,target:"_blank",children:e.svg})}))});function gn(){return l("section",{className:pn,id:"home",children:[l(vn,{}),l("div",{children:[l(Zt,{children:"Hi \u{1F44B}, my name is"}),l(Ft,{children:" Anton Buev"}),l(Gt,{children:"I'm a software developer"})]})]})}var Se,y,he,Ae,ge=0,vt=[],oe=[],Ee=_.__b,Me=_.__r,Oe=_.diffed,je=_.__c,De=_.unmount;function gt(e,t){_.__h&&_.__h(y,e,ge||t),ge=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:oe}),n.__[e]}function bn(e){return ge=1,yn(bt,e)}function yn(e,t,n){var o=gt(Se++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):bt(void 0,t),function(r){var a=o.__N?o.__N[0]:o.__[0],c=o.t(a,r);a!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,a,c){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(i){return i.__c});if(p.every(function(i){return!i.__N}))return!s||s.call(this,r,a,c);var v=!1;return p.forEach(function(i){if(i.__N){var g=i.__[0];i.__=i.__N,i.__N=void 0,g!==i.__[0]&&(v=!0)}}),!(!v&&o.__c.props===r)&&(!s||s.call(this,r,a,c))}}return o.__N||o.__}function Cn(e,t){var n=gt(Se++,3);!_.__s&&kn(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function xn(){for(var e;e=vt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){typeof e.type!="function"||e.__m||e.__===null?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,Ee&&Ee(e)},_.__r=function(e){Me&&Me(e),Se=0;var t=(y=e.__c).__H;t&&(he===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=oe,n.__N=n.i=void 0})):(t.__h.forEach(re),t.__h.forEach(be),t.__h=[])),he=y},_.diffed=function(e){Oe&&Oe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vt.push(t)!==1&&Ae===_.requestAnimationFrame||((Ae=_.requestAnimationFrame)||wn)(xn)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==oe&&(n.__=n.__V),n.i=void 0,n.__V=oe})),he=y=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(re),n.__h=n.__h.filter(function(o){return!o.__||be(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],_.__e(o,n.__v)}}),je&&je(e,t)},_.unmount=function(e){De&&De(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{re(o)}catch(s){t=s}}),n.__H=void 0,t&&_.__e(t,n.__v))};var Ve=typeof requestAnimationFrame=="function";function wn(e){var t,n=function(){clearTimeout(o),Ve&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Ve&&(t=requestAnimationFrame(n))}function re(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function be(e){var t=y;e.__c=e.__(),y=t}function kn(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function bt(e,t){return typeof t=="function"?t(e):t}function Nn(e,t){for(var n in t)e[n]=t[n];return e}function Be(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Re(e){this.props=e}(Re.prototype=new I).isPureReactComponent=!0,Re.prototype.shouldComponentUpdate=function(e,t){return Be(this.props,e)||Be(this.state,t)};var Ue=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ue&&Ue(e)};var Sn=_.__e;_.__e=function(e,t,n,o){if(e.then){for(var s,r=t;r=r.__;)if((s=r.__c)&&s.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),s.__c(e,t)}Sn(e,t,n,o)};var We=_.unmount;function yt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Nn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return yt(o,t,n)})),e}function Ct(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Ct(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function me(){this.__u=0,this.t=null,this.__b=null}function xt(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function te(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),We&&We(e)},(me.prototype=new I).__c=function(e,t){var n=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var s=xt(o.__v),r=!1,a=function(){r||(r=!0,n.__R=null,s?s(c):c())};n.__R=a;var c=function(){if(!--o.__u){if(o.state.__a){var v=o.state.__a;o.__v.__k[0]=Ct(v,v.__c.__P,v.__c.__O)}var i;for(o.setState({__a:o.__b=null});i=o.t.pop();)i.forceUpdate()}},p=t.__h===!0;o.__u++||p||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(a,a)},me.prototype.componentWillUnmount=function(){this.t=[]},me.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=yt(this.__b,n,o.__O=o.__P)}this.__b=null}var s=t.__a&&ve(j,null,e.fallback);return s&&(s.__h=null),[ve(j,null,t.__a?null:e.children),s]};var Fe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(te.prototype=new I).__a=function(e){var t=this,n=xt(t.__v),o=t.o.get(e);return o[0]++,function(s){var r=function(){t.props.revealOrder?(o.push(s),Fe(t,e,o)):s()};n?n(r):r()}},te.prototype.render=function(e){this.u=null,this.o=new Map;var t=le(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},te.prototype.componentDidUpdate=te.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Fe(e,n,t)})};var Tn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ln=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Pn=typeof document<"u",Hn=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};I.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(I.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ze=_.event;function In(){}function $n(){return this.cancelBubble}function An(){return this.defaultPrevented}_.event=function(e){return ze&&(e=ze(e)),e.persist=In,e.isPropagationStopped=$n,e.isDefaultPrevented=An,e.nativeEvent=e};var Ze={configurable:!0,get:function(){return this.class}},qe=_.vnode;_.vnode=function(e){var t=e.type,n=e.props,o=n;if(typeof t=="string"){var s=t.indexOf("-")===-1;for(var r in o={},n){var a=n[r];Pn&&r==="children"&&t==="noscript"||r==="value"&&"defaultValue"in n&&a==null||(r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&a===!0?a="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+t)&&!Hn(n.type)?r="oninput":/^onfocus$/i.test(r)?r="onfocusin":/^onblur$/i.test(r)?r="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(r)?r=r.toLowerCase():s&&Ln.test(r)?r=r.replace(/[A-Z0-9]/g,"-$&").toLowerCase():a===null&&(a=void 0),/^oninput$/i.test(r)&&(r=r.toLowerCase(),o[r]&&(r="oninputCapture")),o[r]=a)}t=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=le(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),t=="select"&&o.defaultValue!=null&&(o.value=le(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),e.props=o,n.class!=n.className&&(Ze.enumerable="className"in n,n.className!=null&&(o.class=n.className),Object.defineProperty(o,"className",Ze))}e.$$typeof=Tn,qe&&qe(e)};var Ge=_.__r;_.__r=function(e){Ge&&Ge(e),e.__c};const En="up",Mn="down";function On(e){const[t,n]=bn(e);return Cn(()=>{let o=window.pageYOffset,s=!1;const r=()=>{const c=window.pageYOffset,p=70;if(Math.abs(c-o)<p){s=!1;return}n(c>o?Mn:En),o=c>0?c:0,s=!1},a=()=>{s||(window.requestAnimationFrame(r),s=!0)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[t]),t}const jn=e=>f(O("bg-transparent"),Ne("backdrop-blur-md"),Dt("transform-gpu",e?"translate-y-0":"translate-y-full-negative"),G("transition-transform","duration-300"),z("left-0","top-0"),_t("mx-auto"),S("w-full"),q("max-w-7xl"),de("h-16"),N("justify-end"),x("items-center"),$("fixed"),V("py-4","px-5"),Et("z-10")),Dn=f(w("flex"),N("justify-end"),x("items-center"),S("w-full"),E("gap-3")),Vn=f(w("flex"),P("flex-row"),N("justify-end"),x("items-center"),E("gap-3")),Bn=f(we("group"),$("relative")),Rn=f($("absolute"),z("-inset-0.5"),xe("from-pink-600","via-red-500","to-orange-500"),Z("rounded-lg"),It("blur"),D("opacity-75","group-hover:opacity-100"),G("transition","duration-200"),Ce("bg-gradient-to-r")),Un=f($("relative"),Z("rounded-lg"),V("px-2","py-1"),O("bg-black-background"),ue("border-gray-400"),G("duration-200","transition"),fe("border-1")),Wn=[{buttonName:"home",address:"#home"},{buttonName:"about",address:"#about"},{buttonName:"projects",address:"#projects"}],Fn=()=>l("ul",{className:Vn,children:Wn.map(e=>l("a",{href:e.address,children:l("li",{children:l(pt,{children:e.buttonName})})}))}),zn=()=>l("div",{className:Bn,children:[l("div",{className:Rn}),l("button",{className:Un,children:l("a",{href:"/resume.pdf",target:"_blank",children:l(pt,{children:"resume"})})})]});function Zn(){const e=On("up");return l("header",{className:jn(e==="up"),children:l("nav",{className:Dn,children:[l(Fn,{}),l(zn,{})]})})}const qn=f(S("w-full"),$("relative"),O("bg-black-background"),Z("rounded-lg"),V("p-4","md:p-6"),w("flex"),P("flex-col"),ue("border-gray-400"),x("items-start"),E("gap-2","sm:gap-3"),G("ease-in-out","duration-1000","transition"),Ot("group-hover:scale-102"),fe("border-1")),Gn=f(w("flex"),P("flex-row"),lt("flex-wrap"),N("justify-evenly"),x("items-center"),S("w-full"),E("gap-2"));function Qn(){return l("div",{className:f(at("grow"),ue("border-b-gray-400"),$t("self-center"),S("w-full"),fe("border-b-0.5"))})}const Yn=f(w("flex"),x("items-center"),N("justify-between"),S("w-full")),Kn=f(_e("fill-white"),D("opacity-60","hover:!opacity-100","group-hover:opacity-80"),S("w-10"),de("h-10"),_e("fill-current"),R("text-white","hover:!text-yellow-100"));function Jn({link:e}){return l("a",{href:e,alt:"github",target:"_blank",children:l("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",className:Kn,children:l("path",{d:"M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z"})})})}function Xn({project:e}){return l("div",{className:qn,children:[l("div",{className:Yn,children:[l("a",{href:e==null?void 0:e.url,target:"_blank",children:l(Yt,{children:e.title})}),(e==null?void 0:e.github)&&l(Jn,{link:e.github})]}),l(Jt,{children:e.subtitle}),e.description.map(t=>l(en,{children:t})),l(Qn,{}),l("ul",{className:Gn,children:e.technologies.map(t=>l("li",{children:l(nn,{children:t})}))})]})}const eo=[{title:"@surfwaybookingbot",subtitle:"Telegram bot for booking surf classes.",url:"https://t.me/surfwaybookingbot",description:["This is my biggest and most complex bot I've done. It automates the process of booking classes, purchasing and activating certificates, and making deposits. I've connected it to a payment solution and made integration with a CRM system. The bot features calendar for choosing dates of classes which is implemented using native telegram buttons. The initial schema of database was totally redisigned by me to make it possible to store all types of calendars, classes and certificates. It also has a messaging system. Metabase is used to provide charts and tables for analytics. The bot and metabase run in Docker containers."],technologies:["Python","MySQL","Redis","Docker","Metabase"]},{title:"@workoutybot",subtitle:"Telegram bot for saving workouts and weight measurements.",url:"https://t.me/workoutybot",description:["Workoutybot is my favourite pet project. I love sports and some time ago I didn't find an app which would be simple enough and better than a plain textbook, so I created this bot. It provides a minimalistic interface with a calendar to view and save workouts. I also added a graph chart to view weight progress.","I wrote an article on vc.ru promoting this bot. More than 2000+ users have registered since then and they are still coming."],technologies:["Python","PostgreSQL","Redis","Docker","TypeScript"]},{title:"antonbuev.com",subtitle:"This is this website!",url:"https://antonbuev.com/",github:"https://github.com/SOAPkelele/my-landing",description:["I think any developer needs one! I've made it to gather all info about my projects and myself. I'll try to keep updated with the latest info."],technologies:["TypeScript","TailwindCSS","React"]},{title:"@ltuniversity_bot",subtitle:"Multilingual Telegram bot for crypto quizzes.",github:"https://github.com/SOAPkelele/nft_quiz_bot/",url:"https://t.me/ltuniversity_bot",description:["Beatiful Telegram bot for taking polls from LocalTrade University. It utilizes built-in telegram quizzes for a seamless experience. It is available in 4 languages and has a small admin panel where you can get stats. Adding new polls and questions is automated by parsing google spreadsheet."],technologies:["Python","PostgreSQL","Docker"]},{title:"Smart camera",subtitle:"Raspberry Pi and camera to detect people.",github:"https://github.com/soapkelele/smart-camera",description:["A coursework project for Sberbank's internal use. It's a program to identify people who perform maintenance and repair of equipment in the office environment. I found, trained and compressed a neural network so we could start it on a Raspberry  Pi."],technologies:["Python","Raspberry Pi","OpenCV","YoloV4","TFLite"]}],to=f(V("py-20"),w("flex"),P("flex-col"),N("justify-center"),x("items-center"),E("gap-4","sm:gap-6")),no=f(w("flex"),P("flex-col"),N("justify-center"),x("items-center"),S("w-full"),q("max-w-4xl"),$("relative"),we("group")),oo=f($("absolute"),z("inset-1","group-hover:-inset-x-3","group-hover:-inset-y-2"),Ce("bg-gradient-to-r"),xe("from-rose-400","via-fuchsia-500","to-indigo-500"),Z("rounded-lg"),D("opacity-75","group-hover:opacity-100"),G("duration-1000","group-hover:duration-1000","animate-tilt"),Ne("group-hover:blur"));function ro(){return l("section",{className:to,id:"projects",children:[l(an,{}),eo.map(e=>l("div",{className:no,children:[l("div",{className:oo}),l(Xn,{project:e})]}))]})}const io=f(At("container"),_t("mx-auto"),q("max-w-6xl"));function so({children:e}){return l("div",{className:io,children:e})}function lo(){return l(so,{children:[l(Zn,{}),l(gn,{}),l(un,{}),l(ro,{}),l(dn,{})]})}Tt(l(lo,{}),document.getElementById("root"));