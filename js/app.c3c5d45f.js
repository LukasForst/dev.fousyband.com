(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},1713:function(t,e,n){},"1a52":function(t,e,n){"use strict";var a=n("1713"),s=n.n(a);s.a},"28b0":function(t,e,n){},"4cd7":function(t,e,n){t.exports=n.p+"img/fousy.bdefa0b3.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),n("link",{attrs:{href:"//fonts.googleapis.com/css?family=Long Cang:300,400,500,700,400italic",rel:"stylesheet"}}),n("Container")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-level-container"}},[n("SlideShow"),n("div",{staticClass:"content"},[n("Logo"),n("Countdown")],1),n("Socials")],1)},i=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"item name"},[a("p",[t._v("FOUsY")])]),a("div",{staticClass:"item logo"},[a("img",{attrs:{alt:"Fousy Logo",src:n("4cd7")}})])])}],l={name:"Logo"},f=l,d=(n("1a52"),n("2877")),m=Object(d["a"])(f,c,u,!1,null,"bc64297a",null),p=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"socials"},[a("md-speed-dial",{staticClass:"md-bottom-right"},[a("md-speed-dial-target",[a("md-icon",{staticClass:"md-morph-initial"},[a("img",{staticClass:"social-open",attrs:{alt:"Fousy Social Open",src:n("4cd7")}})]),a("md-icon",{staticClass:"md-morph-final"},[a("p",{attrs:{id:"fousy-fab"}},[t._v("FOUsY")])])],1),a("md-speed-dial-content",[a("md-button",{staticClass:"md-fab md-big",attrs:{href:t.facebook,target:"_blank"}},[a("md-icon",{staticClass:"fa fa-facebook"})],1),a("md-button",{staticClass:"md-fab md-big",attrs:{href:t.instagram,target:"_blank"}},[a("md-icon",{staticClass:"fa fa-instagram"})],1),a("md-button",{staticClass:"md-fab md-big md-icon-button",attrs:{href:t.youtube,target:"_blank"}},[a("md-icon",{staticClass:"fa fa-youtube"})],1),a("md-button",{staticClass:"md-fab md-big md-icon-button",attrs:{href:t.email}},[a("md-icon",{staticClass:"fa fa-envelope-o"})],1)],1)],1)],1)},b=[],v={name:"Socials",data:function(){return{facebook:"https://www.facebook.com/fousyband/",instagram:"https://www.instagram.com/fousyband/",youtube:"https://www.youtube.com/channel/UCf6j1ffSdmnY6pZ4wyKjx4g",email:"mailto:booking@fousyband.com"}}},g=v,y=(n("f95f"),Object(d["a"])(g,h,b,!1,null,null,null)),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown-container"},[n("div",{attrs:{id:"num-tag"}},[n("p",[t._v("#"+t._s(t.days+1))])]),n("p",{attrs:{id:"countdown"}},[t._v(" "+t._s(t.days)+"d "+t._s(t.hours)+"h "+t._s(t.minutes)+"m "+t._s(t.seconds)+"s ")])])},C=[],O={name:"Countdown",data:function(){return{finalReleaseDate:new Date(2020,8,9,21,0,0),days:0,hours:0,minutes:0,seconds:0}},methods:{formatNumber:function(t){return t<10?"0".concat(t):t},updateTimer:function(){var t=this,e=Math.abs(this.finalReleaseDate-new Date)/1e3;if(e<=0)return this.days=0,this.hours=0,this.minutes=0,void(this.seconds=0);var n=Math.floor(e/86400);e-=86400*n;var a=Math.floor(e/3600)%24;e-=3600*a;var s=Math.floor(e/60)%60;e-=60*s;var o=Math.floor(e%60);this.days=n,this.hours=this.formatNumber(a),this.minutes=this.formatNumber(s),this.seconds=this.formatNumber(o),setTimeout((function(){return t.updateTimer()}),1e3)}},created:function(){this.updateTimer()}},x=O,j=(n("ccbc"),Object(d["a"])(x,_,C,!1,null,"3369cda6",null)),S=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slides-show-container"},[n("div",{staticClass:"slider"},[n("vue-flux",{ref:"slider",attrs:{images:t.vfImages,options:t.vfOptions,transitions:t.vfTransitions},scopedSlots:t._u([{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}])})],1)])},M=[],P=(n("d81d"),n("d3b7"),n("ddb0"),n("2909")),T=n("fcb2"),F={name:"SlideShow",components:{VueFlux:T["VueFlux"],FluxPreloader:T["FluxPreloader"]},methods:{shuffle:function(t){var e,n,a=t.length;while(0!==a)n=Math.floor(Math.random()*a),a-=1,e=t[a],t[a]=t[n],t[n]=e;return t},getData:function(){return this.shuffle(Object(P["a"])(Array(18).keys()).map((function(t){return"photos/".concat(t+1,".jpg")})))}},data:function(){return{vfOptions:{autoplay:!0},vfImages:this.getData(),vfTransitions:["swipe"]}}},$=F,E=(n("9494"),Object(d["a"])($,k,M,!1,null,"51abd690",null)),D=E.exports,L={name:"Container",components:{SlideShow:D,Logo:p,Countdown:S,Socials:w}},N=L,U=(n("f0ac"),Object(d["a"])(N,r,i,!1,null,"46ff32ce",null)),Y=U.exports,A={name:"App",components:{Container:Y}},I=A,J=(n("034f"),Object(d["a"])(I,s,o,!1,null,null,null)),R=J.exports,V=n("43f9"),K=n.n(V);n("51de");a["default"].use(K.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(R)}}).$mount("#app")},"5e76":function(t,e,n){},"85ec":function(t,e,n){},9494:function(t,e,n){"use strict";var a=n("28b0"),s=n.n(a);s.a},"9b77":function(t,e,n){},ccbc:function(t,e,n){"use strict";var a=n("df25"),s=n.n(a);s.a},df25:function(t,e,n){},f0ac:function(t,e,n){"use strict";var a=n("5e76"),s=n.n(a);s.a},f95f:function(t,e,n){"use strict";var a=n("9b77"),s=n.n(a);s.a}});
//# sourceMappingURL=app.c3c5d45f.js.map