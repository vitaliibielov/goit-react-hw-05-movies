"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{853:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(439),a=r(791),u=r(689),c=r(364),s="Reviews_title__g1NAL",i="Reviews_list__HQ0PO",o="Reviews_author__Kpv5S",p="Reviews_label__kpkp+",f=r(184),v=function(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),r=(0,n.Z)(t,2),v=r[0],h=r[1];return(0,a.useEffect)((function(){e&&(0,c.tx)(e).then((function(e){return h(e)}))}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:s,children:"Reviews"}),(0,f.jsx)("ul",{className:i,children:0!==v.length?v.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{className:o,children:[(0,f.jsx)("span",{className:p,children:"Author: "}),e.author]}),(0,f.jsxs)("p",{children:[" ",e.content]})]},e.id)})):(0,f.jsx)("p",{children:"We don't have any reviews"})})]})}},364:function(e,t,r){r.d(t,{Df:function(){return s},Pg:function(){return o},gH:function(){return i},tx:function(){return f},zv:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8aba4e3419a44727b7eb66f35fce4fa2"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=853.254483fd.chunk.js.map