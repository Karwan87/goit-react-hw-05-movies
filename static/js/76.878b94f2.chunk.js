"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76,328],{76:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var c=t(439),s=t(791),i=t(243),r="Cast_CastContainer__Yqkam",n="Cast_ActorName__93D+n",o="Cast_ActorCharacter__jdV5b",l="Cast_NoImage__aBE49",_="Cast_TextNoImg__wUV4e",h=t(184);var d=function(e){var a=e.movieId,t=(0,s.useState)([]),d=(0,c.Z)(t,2),m=d[0],u=d[1],f=(0,s.useState)(!0),p=(0,c.Z)(f,2),g=p[0],v=p[1];return(0,s.useEffect)((function(){i.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat("4315a3747153818fe39eb54a50eb0402")).then((function(e){v(!1),u(e.data.cast)})).catch((function(e){console.error("Error fetching movie cast:",e)}))}),[a]),(0,h.jsx)("div",{className:r,children:g?(0,h.jsx)("div",{children:"Loading..."}):(0,h.jsx)("ul",{children:m.map((function(e,a){return(0,h.jsxs)("li",{children:[e.profile_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}):(0,h.jsx)("div",{className:l,children:(0,h.jsx)("p",{className:_,children:"No image"})}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{className:n,children:e.name}),(0,h.jsxs)("li",{className:o,children:["Character: ",e.character]})]})]},"".concat(e.id,"-").concat(a))}))})})}}}]);
//# sourceMappingURL=76.878b94f2.chunk.js.map