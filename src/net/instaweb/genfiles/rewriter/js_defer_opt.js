(function(){var e=!0,f=!1,g=window,h=document;function j(a,b){return a.addEventListener=b}function l(a,b){return a.attachEvent=b}
var m="push",n="addUrl",o="indexOf",p="querySelector",r="addEventListener",s="setAttribute",t="attachEvent",u="documentElement",v="length",w="prototype",x="call",y="getAttribute",z="querySelectorAll",A="fireEvent",B="parentNode",C="",aa="\n",ba='");',E="*",ca=":not([psa_not_processed])",da="<div>_</div>",ea='=document.getElementById("',fa="Add to queue str: ",ga="Add to queue url: ",ha="DOMContentLoaded",ia="Evaluated: ",F="Exception while evaluating.",ja="Exception while overriding document.readyState.",
ka="Executed: ",la="Firefox",ma="Firing Event: ",na="HTMLEvents",oa="PSA ERROR: ",G="SCRIPT",pa="Unable to insert nodes, no context element found",qa="[psa_current_node]",ra="[psa_not_processed]",sa='[type="text/psajs"]',ta="application/ecmascript",ua="application/javascript",va="application/x-ecmascript",wa="application/x-javascript",xa="complete",ya="data:text/javascript,",za="div",Aa="dw: ",H="error",Ba="handle_dw: ",I="id",J="language",K="load",Ca="loaded",Da="loading",L="on",Ea="onDOMContentLoaded",
M="onafterscripts",N="onbeforescripts",O="onload",Fa="onload: ",Ga="onreadystatechange",Ha="orig_src",Ia="orig_type",Ja="psa_current_node",Ka="psa_dw_target",P="psa_not_processed",La="psanode",Ma="readyState",Na="readystatechange",Q="script",R="src",Oa="text/",Pa="text/ecmascript",S="text/javascript",Qa="text/javascript1.0",Ra="text/javascript1.1",Sa="text/javascript1.2",Ta="text/javascript1.3",Ua="text/javascript1.4",Va="text/javascript1.5",Wa="text/jscript",Xa="text/livescript",T="text/psajs",Ya=
"text/x-ecmascript",Za="text/x-javascript",$a="true",U="type",ab="var ",V;g.pagespeed=g.pagespeed||{};var W=g.pagespeed;W.deferJsNs={};var X=W.deferJsNs,Y=function(){this.j=[];this.g=[];this.i=this.e=0;this.f=[];this.c=C;this.k={};this.z=[ta,ua,va,wa,Pa,S,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za];this.s=h.getElementById;this.m=h.getElementsByTagName;this.N=h.write;this.O=h.writeln;this.M=h.open;this.L=h.close;this.t=h[r];this.v=g[r];this.u=h[t];this.w=g[t];this.d=h.createElement;this.n=this.a=0},Z=f;V=Y[w];
V.log=function(a,b){this.g&&(this.g[m](C+a),b&&(this.g[m](b),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log(oa+a+b.message)))};V.D=function(a,b){this.j.splice(b?b:this.j[v],0,a)};V.G=function(a){var b=this.d[x](h,Q);b.text=a;b[s](U,S);a=this.r();a[B].insertBefore(b,a)};
V.P=function(){for(var a=h.getElementsByTagName(E),b=C,c=0;c<a[v];c++)if(a[c].hasAttribute(I)){var d=a[c][y](I);if(d&&-1==d.search(/[-:.]/)&&-1==d.search(/^[0-9]/))try{g[d]&&g[d].tagName&&(b+=ab+d+ea+d+ba)}catch(k){this.log(F,k)}}b&&this.G(b)};
V.J=function(a,b){var c=a[y](Ha)||a[y](R);if(c)if(Z&&c.match(/\S+\.pagespeed\.\S+/)){var d;d=new Image;d.src=c;d.loaded=f;var k=this;d.onerror=d.onload=function(){d.loaded=e;d.c&&(d.c=f,k.l())};this[n](c,a,b,d)}else this[n](c,a,b);else(c=a.innerHTML||a.textContent||a.data)&&this.H(c,a,b)};V.H=function(a,b,c){if(this.V())this[n](ya+encodeURIComponent(a),b,c);else{this.g[m](fa+a);var d=this;this.D(function(){d.o(b);d.C()[s](Ja,C);try{d.G(a)}catch(c){d.log(F,c)}d.log(ia+a);d.l()},c)}};Y[w].addStr=Y[w].H;
Y[w].addUrl=function(a,b,c,d){this.g[m](ga+a);var k=this;this.D(function(){if(Z&&d&&!d.loaded)k.e--,d.c=e;else{k.o(b);var c=k.d[x](h,Q);c[s](U,S);var q=function(){k.log(ka+a);k.l()};X.p(c,q);X.h(c,H,q);9>k.b()&&X.h(c,Na,function(){if(c.readyState==xa||c.readyState==Ca)c.onreadystatechange=null,q()});c[s](R,a);var D=b.innerHTML||b.textContent||b.data;D&&c.appendChild(h.createTextNode(D));D=k.C();D[s](Ja,C);D[B].insertBefore(c,D)}},c)};Y[w].addUrl=Y[w][n];V=Y[w];
V.o=function(a){if(h[z]&&!(8>=this.b()))for(var b=h[z](ra),c=0;c<b[v];c++){var d=b.item(c);if(d==a)break;d[y](U)!=T&&d.removeAttribute(P)}};V.Q=function(){for(var a=this.m[x](h,E),b=0;b<a[v];b++)a.item(b)[s](P,C)};V.C=function(){var a=null;h[p]&&(a=h[p](sa));return a};V.r=function(){var a;h[p]&&(a=h[p](qa));return a||this.m[x](h,La)[0]};V.T=function(){var a=this.r();a.nodeName==G&&a[B].removeChild(a)};
V.q=function(){4!=this.a&&(this.o(),this.b()&&h[u].originalDoScroll&&(h[u].doScroll=h[u].originalDoScroll),Object.defineProperty&&delete h.readyState,h.getElementById=this.s,h[z]&&!(8>=this.b())&&(h.getElementsByTagName=this.m),Z&&(h.createElement=this.d),h.open=this.M,h.close=this.L,h.write=this.N,h.writeln=this.O,this[A](2),h.onreadystatechange&&this.exec(h.onreadystatechange,h),g.onload&&$(g,O,g.onload),this.S(),this[A](3),this.a=4,this[A](4))};V.U=function(a){for(;a=a[B];)if(a==h)return e;return f};
V.A=function(){if(3!=this.a)return f;var a=0;if(0!=this.i)for(var b=this.f[v],c=0;c<b;++c){var d=this.f[c],k=d[B],i=d.src,q=d.textContent;(8<this.b()&&(!k||i==C&&q==C)||!this.b()&&(!this.U(d)||i==C))&&a++}return this.i==a?e:f};V.l=function(){this.B();this.T();this.e<this.j[v]?(this.e++,this.j[this.e-1][x](g)):Z?(this.a=3,this.A()&&this.q()):this.q()};V.K=function(a){for(var b=[],c=a[v],d=0;d<c;++d)b[m](a.item(d));return b};
V.X=function(){var a=h.createElement(La);a[s](Ka,$a);h.body.appendChild(a);this.b()&&this.P();this.Q();if(Object.defineProperty)try{Object.defineProperty(h,Ma,{configurable:e,get:function(){return Da}})}catch(b){this.log(ja,b)}this.b()&&(h[u].originalDoScroll=h[u].doScroll,h[u].doScroll=function(){throw"psa exception";});this.R();var c=this;h.writeln=function(a){c.F(a+aa)};h.write=function(a){c.F(a)};h.open=function(){};h.close=function(){};h.getElementById=function(a){c.B();return c.s[x](h,a)};h[z]&&
!(8>=c.b())&&(h.getElementsByTagName=function(a){return h[z](a+ca)});Z&&(h.createElement=function(a){var b=c.d[x](h,a);if(a.toLowerCase()==Q){c.f[m](b);c.i++;a=function(){c.i--;var a=c.f[o](this);if(a!=-1){c.f.splice(a,1);c.A()&&c.q()}};X.p(b,a);X.h(b,H,a)}return b})};V.ga=function(){2<=this.a||(this[A](1),this.a=2,this.X(),this.l())};Y[w].run=Y[w].ga;V=Y[w];V.$=function(a){var b=this.d[x](h,za);b.innerHTML=da+a;b.removeChild(b.firstChild);return b};V.ba=function(a){var b=a[B];b&&b.removeChild(a)};
V.Z=function(a,b){for(var c=this.K(a),d=c[v],k=b[B],i=0;i<d;++i){var q=c[i];this.ba(q);k.insertBefore(q,b)}};V.aa=function(a){return a.nodeName!=G?f:a.hasAttribute(U)?(a=a[y](U),!a||-1!=this.z[o](a)):a.hasAttribute(J)?(a=a[y](J),!a||-1!=this.z[o](Oa+a.toLowerCase())):e};V.I=function(a,b){if(a.childNodes)for(var c=this.K(a.childNodes),d=c[v],k=0;k<d;++k){var i=c[k];1==i.nodeType&&i[s](P,C);i.nodeName==G?this.aa(i)&&(b[m](i),i[s](Ia,i.type),i[s](U,T),i[s](Ha,i.src),i[s](R,C)):this.I(i,b)}};
V.Y=function(a,b){for(var c=a[v],d=0;d<c;++d)this.J(a[d],b+d)};V.W=function(a,b,c){var a=this.$(a),d=[];this.I(a,d);c?this.Z(a.childNodes,c):this.log(pa);this.Y(d,b)};V.B=function(){if(this.c!=C){this.log(Ba+this.c);var a=this.c;this.c=C;var b=this.r();this.W(a,this.e,b)}};V.F=function(a){this.log(Aa+a);this.c+=a};V.ca=function(a,b){this.log(Fa+b.toString());4==this.a?b[x](a):$(a,O,b)};Y[w].addOnloadListeners=Y[w].ca;Y[w].fa=function(a){$(g,N,a)};Y[w].addBeforeDeferRunFunctions=Y[w].fa;
Y[w].ea=function(a){$(g,M,a)};Y[w].addAfterDeferRunFunctions=Y[w].ea;Y[w].fireEvent=function(a){this.n=a;this.log(ma+a);for(var a=this.k[a]||[],b=0;b<a[v];++b)this.exec(a[b]);a.length=0};Y[w].exec=function(a,b){try{a[x](b||g)}catch(c){this.log(F,c)}};Y[w].R=function(){var a=this;g[r]?(j(h,function(b,c,d){$(h,b,c,d,a.t)}),j(g,function(b,c,d){$(g,b,c,d,a.v)})):g[t]&&(l(h,function(b,c){$(h,b,c,void 0,a.u)}),l(g,function(b,c){$(g,b,c,void 0,a.w)}))};
Y[w].S=function(){g[r]?(j(h,this.t),j(g,this.v)):g[t]&&(l(h,this.u),l(g,this.w))};var $=function(a,b,c,d,k){var i=W.deferJs;if(!(4<=i.a)){if(2>i.n&&(b==ha||b==Na||b==Ea||b==Ga))b=2;else if(3>i.n&&(b==K||b==O))b=3;else if(b==N)b=1;else if(b==M)b=4;else{k&&k[x](a,b,c,d);return}var q;3==b&&!(8>=i.b())&&(q=h.createEvent(na),q.initEvent(K,f,f));i.k[b]||(i.k[b]=[]);i.k[b][m](function(){c[x](a,q)})}};
Y[w].ha=function(){if(!(1<=this.a)){this.a=1;for(var a=h.getElementsByTagName(Q),b=a[v],c=0;c<b;++c){var d=a[c];d[y](U)==T&&this.J(d)}}};Y[w].registerScriptTags=Y[w].ha;X.p=function(a,b){X.h(a,K,b)};W.addOnload=X.p;X.h=function(a,b,c){if(a[r])a[r](b,c,f);else if(a[t])a[t](L+b,c);else{var d=a[L+b];a[L+b]=function(){c[x](this);d&&d[x](this)}}};W.addHandler=X.h;Y[w].V=function(){return-1!=navigator.userAgent[o](la)};
Y[w].b=function(){var a=/(?:MSIE.(\d+\.\d+))/.exec(navigator.userAgent);return a&&a[1]?h.documentMode||parseFloat(a[1]):NaN};X.da=function(){W.deferJs||(g.localStorage&&(Z=g.localStorage.defer_js_experimental),W.deferJs=new Y)};W.deferInit=X.da;})();
