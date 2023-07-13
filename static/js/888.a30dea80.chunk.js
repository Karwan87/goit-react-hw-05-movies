"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{888:function(e,i,s){s.r(i),s.d(i,{default:function(){return g}});var t=s(439),n=s(791),a=s(689),r=s(87),c=s(243),o="MovieDetails_MovieContainer__xyS+s",l="MovieDetails_MovieDetail__5PhFP",d="MovieDetails_MoviePoster__abbRE",v="MovieDetails_MovieTitle__Aj4a0",h="MovieDetails_Extras__cthkL",_="MovieDetails_BtnContainer__gBDO4",u="MovieDetails_CastBtn__OLbFP",j="MovieDetails_ReviewsBtn__uMvef",x=s(184),f=(0,n.lazy)((function(){return s.e(328).then(s.bind(s,76))})),m=(0,n.lazy)((function(){return s.e(946).then(s.bind(s,168))}));var g=function(){var e=(0,a.UO)().movieId,i=(0,n.useState)(null),s=(0,t.Z)(i,2),g=s[0],p=s[1],b=(0,n.useState)(!0),M=(0,t.Z)(b,2),w=M[0],k=M[1],D=(0,n.useState)(!1),C=(0,t.Z)(D,2),N=C[0],S=C[1],L=(0,n.useState)(!1),Z=(0,t.Z)(L,2),y=Z[0],B=Z[1];if((0,n.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("4315a3747153818fe39eb54a50eb0402")).then((function(e){k(!1),p(e.data)})).catch((function(e){console.error("Error fetching movie details:",e)}))}),[e]),w)return(0,x.jsx)("div",{children:"Loading..."});var E=10*g.vote_average;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("div",{className:d,children:g.poster_path&&(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(g.poster_path),alt:g.title})}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("h2",{className:v,children:[g.title," (",g.release_date.substring(0,4),")"]}),(0,x.jsxs)("h5",{children:["User Score: ",E,"%"]}),(0,x.jsx)("h4",{children:"Overview:"}),(0,x.jsxs)("h5",{children:[" ",g.overview]}),(0,x.jsx)("h4",{children:"Genres:"}),(0,x.jsxs)("h5",{children:[" ",g.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("h4",{className:h,children:"Additional information"}),(0,x.jsx)(r.rU,{to:"/movies/".concat(e,"/cast"),className:u,onClick:function(){S((function(e){return!e})),N||B(!1)},children:"Cast"}),(0,x.jsx)(r.rU,{to:"/movies/".concat(e,"/reviews"),className:j,onClick:function(){B((function(e){return!e})),y||S(!1)},children:"Reviews"})]}),(0,x.jsxs)("div",{children:[N&&(0,x.jsx)("div",{children:(0,x.jsx)(n.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Cast..."}),children:(0,x.jsx)(f,{movieId:e})})}),y&&(0,x.jsx)("div",{children:(0,x.jsx)(n.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Reviews..."}),children:(0,x.jsx)(m,{movieId:e})})})]})]})}}}]);
//# sourceMappingURL=888.a30dea80.chunk.js.map