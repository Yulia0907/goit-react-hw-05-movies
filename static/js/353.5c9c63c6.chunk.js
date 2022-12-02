"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[353],{6062:function(n,t,e){e.d(t,{O:function(){return y}});var r,a,c,s,u,o,i,l=e(7689),p=e(168),f=e(6444),d=e(6731),h=f.default.ul(r||(r=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 16px;\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(5, 1fr);\n"]))),m=f.default.li(a||(a=(0,p.Z)(["\n  width: 200px;\n  transition: 1s;\n  display: flex;\n  :hover {\n    transform: scale(1.1);\n  }\n"]))),v=(0,f.default)(d.OL)(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  ",":hover & {\n    color: rgb(247, 76, 8);\n  }\n  &.active {\n    color: rgb(247, 76, 8);\n  }\n"])),m),g=f.default.div(s||(s=(0,p.Z)(["\n  width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=f.default.img(u||(u=(0,p.Z)(["\n  width: 200px;\n  height: 300px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n"]))),w=f.default.h3(o||(o=(0,p.Z)(["\n  flex-grow: 1;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  background-color: inherit;\n"]))),Z=(f.default.div(i||(i=(0,p.Z)(["\n  font-style: italic;\n  margin-top: 10px;\n"]))),e(184)),y=function(n){var t=n.gallery,e=n.pathLocation,r=(0,l.TH)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(g,{children:(0,Z.jsx)(h,{children:t&&t.map((function(n){var t=n.id,a=n.title,c=n.release_date,s=n.poster_path;return(0,Z.jsx)(m,{children:(0,Z.jsxs)(v,{to:e+t.toString(),state:{from:r},children:[(0,Z.jsx)(x,{src:"https://image.tmdb.org/t/p/w500"+s,alt:a}),(0,Z.jsxs)(w,{children:[a," (",c.slice(0,4),")"]})]})},t)}))})})})}},9353:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a=e(885),c=e(2690),s=e(2791),u=e(6062),o=e(168),i=e(6444).default.div(r||(r=(0,o.Z)(["\n  font-size: 24px;\n"]))),l=e(184),p=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){(0,c.wr)().then(r).catch((function(n){return console.log(n.message)}))}),[]),(0,l.jsxs)(i,{children:[(0,l.jsx)("h1",{children:"Trending Today"}),e&&(0,l.jsx)(u.O,{gallery:e,pathLocation:"/movies/"})]})}},2690:function(n,t,e){e.d(t,{Hx:function(){return f},Y5:function(){return l},uV:function(){return p},wr:function(){return o},z1:function(){return i}});var r=e(5861),a=e(7757),c=e.n(a),s=e(2388);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={api_key:"c2a6de5ac63866aa6b280a23fe379634",page:1},o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Z)("/trending/movie/day",{params:u});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Z)("/search/movie?query=".concat(t),{params:u});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Z)("/movie/".concat(t),{params:u});case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Z)("/movie/".concat(t,"/credits"),{params:u});case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Z)("/movie/".concat(t,"/reviews"),{params:u});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=353.5c9c63c6.chunk.js.map