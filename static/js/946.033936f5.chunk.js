"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[946,168],{168:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var n=t(439),r=t(791),s=t(243),c="Reviews_ContainerReviews__10Mdp",a="Reviews_ReviewsList__pyBOr",o=t(184);var u=function(e){var i=e.movieId,t=(0,r.useState)([]),u=(0,n.Z)(t,2),h=u[0],v=u[1],d=(0,r.useState)(!0),l=(0,n.Z)(d,2),_=l[0],f=l[1];return(0,r.useEffect)((function(){s.Z.get("https://api.themoviedb.org/3/movie/".concat(i,"/reviews?api_key=").concat("4315a3747153818fe39eb54a50eb0402")).then((function(e){f(!1),v(e.data.results)})).catch((function(e){console.error("Error fetching movie reviews:",e)}))}),[i]),(0,o.jsx)("div",{className:c,children:_?(0,o.jsx)("div",{children:"Loading..."}):(0,o.jsx)("ul",{className:a,children:h.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=946.033936f5.chunk.js.map