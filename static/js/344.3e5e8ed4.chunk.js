"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{7990:function(n,e,r){r.d(e,{Kd:function(){return x},TP:function(){return h},rj:function(){return l},zv:function(){return v}});var t=r(5861),o=r(4687),a=r.n(o),i=r(1243),s="https://api.themoviedb.org/3/trending/movie/week",c="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie/",u="c5d50af4186bf21fa991895725448c9f";function l(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(){var e,r,t,o,c,p;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:u}},n.prev=1,n.next=4,i.Z.get(s,e);case 4:return r=n.sent,t=r.data,o=t.results,c=t.total_results,p=r.status,console.log(p,c),console.log(o),n.abrupt("return",o);case 14:n.prev=14,n.t0=n.catch(1),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))).apply(this,arguments)}function x(n,e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(e,r){var t,o,s,p;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:u,language:"en-US",query:e,page:r,include_adult:!1}},n.prev=1,n.next=4,i.Z.get(c,t);case 4:if(o=n.sent,s=o.data,p=s.results,0!==s.total_results){n.next=10;break}throw new Error('Sorry, there are no pictures for the "'.concat(e,'". Please try again.'));case 10:return n.abrupt("return",p);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:u}},n.prev=1,n.next=4,i.Z.get("".concat(p).concat(e),r);case 4:return t=n.sent,o=t.data,console.log(o),n.abrupt("return",o);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:u,language:"en-US"}},n.prev=1,n.next=4,i.Z.get("".concat(p).concat(e,"/credits"),r);case 4:return t=n.sent,o=t.data,n.abrupt("return",o);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}},8344:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,o,a,i,s,c,p,u,l,d,x,f,h,g=r(9439),v=r(7689),m=r(2791),Z=r(7990),b=r(9128),w=r(168),j=r(8789),k=r(1087),y=(0,j.ZP)(k.rU)(t||(t=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-left: 40px;\n  margin-top: 10px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),_=r(184),P=function(n){var e=n.to,r=n.children;return(0,_.jsxs)(y,{to:e,children:[(0,_.jsx)(b.jTe,{size:"20"}),r]})},z=r(2995),S=j.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n"]))),T=j.ZP.img(a||(a=(0,w.Z)(["\n  width: 300px;\n  border-radius: 20px;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),U=j.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n"]))),C=j.ZP.h2(s||(s=(0,w.Z)(["\n  font-size: 24px;\n  margin: 0;\n"]))),I=j.ZP.h3(c||(c=(0,w.Z)(["\n  font-size: 18px;\n  margin: 0;\n"]))),E=j.ZP.p(p||(p=(0,w.Z)(["\n  font-size: 16px;\n  margin: 10px 0;\n"]))),F=j.ZP.p(u||(u=(0,w.Z)(["\n  font-size: 18px;\n  margin: 10px 0;\n"]))),O=j.ZP.p(l||(l=(0,w.Z)(["\n  font-size: 16px;\n  margin: 10px 0;\n"]))),q=(j.ZP.button(d||(d=(0,w.Z)(["\n  font-size: 16px;\n  padding: 10px;\n  background-color: #0074d9;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 20px;\n  width: fit-content;\n\n  &:hover {\n    background-color: #0d8bf2;\n  }\n"]))),function(n){var e=n.movieInfo,r=e.poster_path,t=e.overview,o=e.release_date,a=e.title,i=e.vote_average,s=n.genres,c=o&&o.substring(0,4);console.log(r);var p=r?"https://image.tmdb.org/t/p/w500".concat(r):z;return(0,_.jsxs)(S,{children:[(0,_.jsx)(T,{src:p,alt:a}),(0,_.jsxs)(U,{children:[(0,_.jsx)(C,{children:a}),(0,_.jsx)(I,{children:c}),(0,_.jsx)(E,{children:s}),(0,_.jsx)(F,{children:i}),(0,_.jsx)(O,{children:t})]})]})}),H=r(6713),K=r(7402),L=K.Z.div(x||(x=(0,w.Z)(["\n  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;\n  border-radius: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 40px 40px 40px;\n"]))),R=(0,K.Z)(k.OL)(f||(f=(0,w.Z)(["\n  font-size: 16px;\n  padding: 10px;\n  background-color: #0074d9;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 20px;\n  width: fit-content;\n  text-decoration: none;\n\n  &:hover {\n    background-color: #0d8bf2;\n  }\n"]))),A=K.Z.div(h||(h=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  margin: 40px;\n"]))),B=function(){var n,e,r=(0,v.UO)().movieId,t=(0,m.useState)(null),o=(0,g.Z)(t,2),a=o[0],i=o[1],s=(0,m.useState)(""),c=(0,g.Z)(s,2),p=c[0],u=c[1];(0,m.useEffect)((function(){(0,Z.TP)(r).then((function(n){i(n);var e=n.genres.length>1?n.genres.map((function(n){return n.name})).join(", "):n.ganres.name;console.log(e),u(e)}))}),[r]);var l=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,_.jsx)(_.Fragment,{children:a&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(P,{to:l,children:"go back"}),(0,_.jsxs)(L,{children:[(0,_.jsx)(q,{movieInfo:a,genres:p}),(0,_.jsxs)(A,{children:[(0,_.jsx)(R,{to:"/movies/".concat(r,"/cast"),children:"Cast"}),(0,_.jsx)(R,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})]}),(0,_.jsx)(m.Suspense,{fallback:(0,_.jsx)(H.Z,{}),children:(0,_.jsx)(v.j3,{})})]})]})})}},2995:function(n,e,r){n.exports=r.p+"static/media/no-poster1.a0917ca9b1165e22b164.webp"}}]);
//# sourceMappingURL=344.3e5e8ed4.chunk.js.map