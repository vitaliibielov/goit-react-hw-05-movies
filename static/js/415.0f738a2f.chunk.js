"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{510:function(t,r,e){e.d(r,{e:function(){return f}});var n=e(87),a=e(689),u="MovieList_list__yjDCC",s="MovieList_item__tDivI",c="MovieList_title__QyMtJ",i="MovieList_poster__UbPpc",o=e(184),f=function(t){var r=t.movies,e=(0,a.TH)();return(0,o.jsx)("ul",{className:u,children:r.map((function(t){var r=t.id,a=t.title,u=t.poster_path;return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(r),state:{from:e},className:c,children:[(0,o.jsx)("img",{className:i,src:u?"https://image.tmdb.org/t/p/w500/".concat(u):"https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp",alt:a}),(0,o.jsx)("p",{children:a})]})},r)}))})}},415:function(t,r,e){e.r(r);var n=e(439),a=e(364),u=e(791),s=e(510),c=e(184);r.default=function(){var t=(0,u.useState)(null),r=(0,n.Z)(t,2),e=r[0],i=r[1];if((0,u.useEffect)((function(){(0,a.Df)().then((function(t){var r=t.results;i(r)}))}),[]),e)return(0,c.jsx)(s.e,{movies:e})}},364:function(t,r,e){e.d(r,{Df:function(){return c},Pg:function(){return o},gH:function(){return i},tx:function(){return p},zv:function(){return f}});var n=e(861),a=e(757),u=e.n(a),s=e(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8aba4e3419a44727b7eb66f35fce4fa2"}}),c=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.0f738a2f.chunk.js.map