"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[655],{655:function(e,s,r){r.r(s),r.d(s,{default:function(){return m}});var i=r(791),t=r(689),n=r(582),a=r(564),c="ReviewCards_list__PvRzN",o="ReviewCards_author__771+m",l="ReviewCards_item__7NDi8",u="ReviewCards_content__b++6s",v=r(184),d=function(e){var s=e.reviews;return(0,v.jsx)("ul",{className:c,children:null===s||void 0===s?void 0:s.results.map((function(e){var s=e.id,r=e.author,i=e.content;return(0,v.jsxs)("li",{className:l,children:[(0,v.jsxs)("h4",{className:o,children:["Author: ",r]}),(0,v.jsx)("p",{className:u,children:i})]},s)}))})},_="ReviewsNotFound_text__DSEss",h=function(){return(0,v.jsx)("p",{className:_,children:"Currently, no reviews are available for this movie. Please check back later for updates."})},f=r(294),m=function(){var e=(0,t.UO)().movieId,s=(0,n.Z)({url:"/movie/".concat(e,"/reviews")}),r=s.data,c=s.isLoading,o=s.error;(0,i.useEffect)((function(){var e=document.querySelector('[data-info="reviews"]');return e.classList.add("active-btn"),function(){e.classList.remove("active-btn")}}),[]);var l=0===(null===r||void 0===r?void 0:r.results.length);return o?(0,v.jsx)(f.Z,{}):(0,v.jsx)("div",{children:(0,v.jsx)(a.Z,{loading:c,position:"center",children:l?(0,v.jsx)(h,{}):(0,v.jsx)(d,{reviews:r})})})}}}]);
//# sourceMappingURL=655.9bcb0341.chunk.js.map