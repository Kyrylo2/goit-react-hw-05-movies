"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[449],{7990:function(e,r,n){n.d(r,{Kd:function(){return h},TP:function(){return v},rj:function(){return l},tx:function(){return w},zv:function(){return m}});var t=n(5861),a=n(4687),i=n.n(a),o=n(1243),c="https://api.themoviedb.org/3/trending/movie/week",s="https://api.themoviedb.org/3/search/movie",u="https://api.themoviedb.org/3/movie/",p="c5d50af4186bf21fa991895725448c9f";function l(){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(i().mark((function e(){var r,n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{api_key:p}},e.prev=1,e.next=4,o.Z.get(c,r);case 4:return n=e.sent,t=n.data.results,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Sorry, please try again.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e,r){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function e(r,n){var t,a,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:p,language:"en-US",query:r,page:n,include_adult:!1}},e.prev=1,e.next=4,o.Z.get(s,t);case 4:if(a=e.sent,c=a.data,u=c.results,0!==c.total_results){e.next=10;break}throw new Error('Sorry, there are no pictures for the "'.concat(r,'". Please try again.'));case 10:return e.abrupt("return",u);case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function e(r){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:p}},e.prev=1,e.next=4,o.Z.get("".concat(u).concat(r),n);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Sorry, there is no movie details available");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(i().mark((function e(r){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:p,language:"en-US"}},e.prev=1,e.next=4,o.Z.get("".concat(u).concat(r,"/credits"),n);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Sorry, there is no movie casts available");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(i().mark((function e(r){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:p,language:"en-US"}},e.prev=1,e.next=4,o.Z.get("".concat(u).concat(r,"/reviews"),n);case 4:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Sorry, there is no movie reviews available");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},6449:function(e,r,n){n.r(r),n.d(r,{default:function(){return z}});var t,a,i,o,c,s,u,p,l=n(9439),f=n(7990),h=n(2791),d=n(7689),v=n(168),x=n(8789),m=x.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n"]))),g=x.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),w=x.ZP.img(i||(i=(0,v.Z)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  border-radius: 50%;\n"]))),b=x.ZP.div(o||(o=(0,v.Z)(["\n  flex: 1;\n"]))),Z=x.ZP.h3(c||(c=(0,v.Z)(["\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n"]))),y=x.ZP.p(s||(s=(0,v.Z)(["\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n"]))),k=x.ZP.div(u||(u=(0,v.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  color: #ff6f00;\n"]))),_=x.ZP.div(p||(p=(0,v.Z)(["\n  margin-top: 10px;\n  font-size: 16px;\n  color: #333;\n"]))),j=n(2995),P=n(184);var S=function(e){var r=e.reviewsListItem,n=r.author_details,t=n.avatar_path,a=n.rating,i=n.username,o=r.content,c=r.created_at,s=new Date(c);return(0,P.jsxs)(m,{children:[(0,P.jsxs)(g,{children:[(0,P.jsx)(w,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):j,alt:"User avatar"}),(0,P.jsxs)(b,{children:[(0,P.jsx)(Z,{children:i}),(0,P.jsx)(y,{children:s.toLocaleDateString()})," "]}),(0,P.jsx)(k,{children:a})]}),(0,P.jsx)(_,{children:o})]})};var E=function(e){var r=e.reviewsListArr;return console.log(r),console.log(r.length),(0,P.jsx)("div",{children:r.map((function(e){return(0,P.jsx)(S,{reviewsListItem:e},e.id)}))})},z=function(){var e=(0,d.UO)().movieId,r=(0,h.useState)(null),n=(0,l.Z)(r,2),t=n[0],a=n[1];return(0,h.useEffect)((function(){(0,f.tx)(e).then((function(e){console.log(e),a(e)}))}),[e]),t&&(0,P.jsx)(E,{reviewsListArr:t})}},2995:function(e,r,n){e.exports=n.p+"static/media/no-poster1.a0917ca9b1165e22b164.webp"}}]);
//# sourceMappingURL=449.e6657225.chunk.js.map