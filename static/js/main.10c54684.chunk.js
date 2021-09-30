(this["webpackJsonpjetstyle-test"]=this["webpackJsonpjetstyle-test"]||[]).push([[0],{46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),i=a.n(s),r=(a(46),a(12)),o=a(11),l=a(34),u=a.n(l),d=null!==localStorage.getItem("token")?localStorage.getItem("token"):"",j=a(20),b=a(3),p="/",m=["All","Favorites"],h="All",g="/books",O=a(40),f=a(13),v=a(1);var _=function(e){var t=e.id,a=e.title,c=e.author,n=e.group,s=e.img;return Object(v.jsxs)("li",{className:"contact",id:t,children:[Object(v.jsx)("img",{className:"contact__left",src:null===s?"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png":s,alt:"avatar"}),Object(v.jsxs)("div",{className:"contact__right",children:[Object(v.jsxs)("p",{className:"contact__data",children:["Book Title: ",Object(v.jsx)("span",{className:"contact__name",children:a})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Author: ",Object(v.jsx)("span",{className:"contact__name",children:c})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Group: ",Object(v.jsx)("span",{className:"contact__name",children:n})]})]})]})},x=a(5),N=a.n(x),y=(N.a.shape({id:N.a.number.isRequired,title:N.a.string.isRequired,author:N.a.string.isRequired,img:N.a.oneOfType([N.a.string,N.a.oneOf([null])]),group:N.a.string}),a(35)),k=a.n(y),C=function(e){var t=e.pageCount,a=e.onPageNumberClick,c=e.forcePage;return Object(v.jsx)(k.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:a,containerClassName:"pagination",activeClassName:"active",forcePage:c})},P="";var w=function(e){var t=e.items,a=e.initialPageNumber,n=e.activeTabName,s=t.slice(0,3),i=Math.ceil(t.length/3),r=s,o=Object(c.useReducer)((function(e,t){switch(t.type){case"changePageNumber":return Object(f.a)(Object(f.a)({},e),{},{pageNumber:t.payload});case"changeSlicedItems":return Object(f.a)(Object(f.a)({},e),{},{slicedItems:t.payload});default:throw new Error}}),a,(function(e){return{pageNumber:e,slicedItems:r}})),l=Object(O.a)(o,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){P!==n&&(d({type:"changeSlicedItems",payload:[]}),d({type:"changeSlicedItems",payload:r}),d({type:"changePageNumber",payload:0})),P=n}),[n,r]),Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)("ul",{className:"cities__places-list places__list tabs__content",children:u.slicedItems.map((function(e){return Object(v.jsx)(_,{id:e.id,title:e.title,author:e.author,group:e.group,img:e.img},e.id)}))}),t.length>3&&Object(v.jsx)(C,{pageCount:i,onPageNumberClick:function(e){var a=Math.ceil(3*e.selected);r=t.slice(a,a+3),d({type:"changePageNumber",payload:e.selected}),d({type:"changeSlicedItems",payload:r})},forcePage:u.pageNumber})]})};var F=function(e){var t=e.children,a=e.className;return Object(v.jsxs)("div",{className:a,children:[Object(v.jsx)("header",{className:"header",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"header__wrapper",children:Object(v.jsx)("div",{className:"header__left",children:Object(v.jsx)("h2",{className:"header__title",children:"Books"})})})})}),t]})},I=function(e,t){return function(a){return Object(v.jsx)(F,{className:t,children:Object(v.jsx)(e,Object(f.a)({},a))})}};I.displayName="withLayout";var B=I,L="books/changeGroup",S="books/loadBooks",T="books/isFavorite",D="places/redirectToRoute",A=Object(r.b)(L,(function(e){return{payload:e}})),G=Object(r.b)(S,(function(e){return{payload:e}})),R=Object(r.b)(T,(function(e,t){return{payload:{id:e,newPlace:t}}})),U=(Object(r.b)(D,(function(e){return{payload:e}})),a(19)),q=a(10),E=a(41),M=a(36),J=a(37),K=a(38),W=a.n(K),z=function(){function e(){Object(M.a)(this,e)}return Object(J.a)(e,null,[{key:"adaptToClient",value:function(e){var t=Object.assign({},e,{host:Object.assign({},e.host,{avatarUrl:e.host.avatar_url,isPro:e.host.is_pro}),isFavorite:e.is_favorite,isPremium:e.is_premium,maxAdults:e.max_adults,previewImage:e.preview_image});return delete t.host.avatar_url,delete t.host.is_pro,delete t.is_favorite,delete t.is_premium,delete t.max_adults,delete t.preview_image,t}},{key:"adaptPlacesToClient",value:function(e){var t=this;return e.map((function(e){return t.adaptToClient(e)}))}},{key:"getFilteredBooks",value:function(e,t){return e===h?t:t.filter((function(t){return t.group===e}))}},{key:"getFavoritesBooks",value:function(e,t){return e===h?t:t.filter((function(e){return!0===e.favorite}))}},{key:"generateIdKeys",value:function(e){return new Array(e).fill("").map((function(){return W()(10)}))}},{key:"getUpdatedBooks",value:function(e,t,a){var c=Object(E.a)(t),n=c.findIndex((function(t){return t.id===e}));return c[n].isFavorite=a.isFavorite,c}}]),e}();z.formatDate=function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"})};var H=z,Q=Object(r.c)({books:[],isDataLoaded:!1,activeGroupName:"All"},(function(e){e.addCase(A,(function(e,t){e.activeGroupName=t.payload})).addCase(G,(function(e,t){e.books=t.payload,e.isDataLoaded=!0})).addCase(R,(function(e,t){e.places=H.getUpdatedBooks(t.payload.id,e.places,t.payload.newPlace)}))})),V="BOOKS",X=Object(q.b)(Object(U.a)({},V,Q)),Y=function(e){return e[V].books},Z=function(e){return e[V].isDataLoaded},$=function(e){return e[V].activeGroupName};var ee=function(e){var t=Object(o.c)($),a=Object(o.b)(),c=function(e){e.preventDefault(),a(A(e.currentTarget.dataset.city))};return Object(v.jsx)("div",{className:"tabs",children:Object(v.jsx)("section",{className:"locations container",children:Object(v.jsx)("ul",{className:"locations__list tabs__list",children:m.map((function(e){return Object(v.jsx)("li",{className:"locations__item",children:Object(v.jsx)(j.b,{"data-city":e,className:"locations__item-link tabs__item ".concat(e===t&&"tabs__item--active"),to:"#",onClick:c,children:Object(v.jsx)("span",{children:e})})},e)}))})})})};var te=function(e){var t=e.activeGroupName;return Object(v.jsx)("div",{className:"cities",children:Object(v.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(v.jsx)("section",{className:"cities__no-places",children:Object(v.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(v.jsx)("b",{className:"cities__status",children:"No books available"}),Object(v.jsxs)("p",{className:"cities__status-description",children:['We could not find any books available at the moment in "',t,'" group']})]})}),Object(v.jsx)("div",{className:"cities__right-section"})]})})};var ae=B((function(){var e=Object(o.c)($),t=Object(o.c)(Y),a=H.getFavoritesBooks(e,t);return Object(v.jsxs)("main",{className:"page__main page__main--index",children:[Object(v.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(v.jsx)(ee,{}),0===a.length?Object(v.jsx)(te,{activeGroupName:e}):Object(v.jsx)("div",{className:"cities",children:Object(v.jsx)("div",{className:"cities__places-container container",children:Object(v.jsxs)("section",{className:"cities__places places",children:[Object(v.jsx)("h2",{className:"visually-hidden",children:"Books"}),Object(v.jsxs)("b",{className:"places__found",children:[a.length," books in `",e,"` group"]}),Object(v.jsx)(w,{items:a,initialPageNumber:0,activeTabName:e})]})})})]})}));var ce=B((function(){return Object(v.jsxs)("div",{style:{margin:"auto",width:"200px"},children:[Object(v.jsx)("h1",{style:{textAlign:"center"},children:"404"}),Object(v.jsx)("h2",{children:"Page Not Found"})]})}));var ne=function(){return Object(v.jsx)("p",{className:"loading",children:"Loading..."})};var se=function(){return Object(o.c)(Z)?Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:p,children:Object(v.jsx)(ae,{className:"page page--gray page--index"})}),Object(v.jsx)(b.a,{children:Object(v.jsx)(ce,{})})]})}):Object(v.jsx)(ne,{})},ie=a(4),re=Object(ie.a)(),oe=function(e){return function(e){return function(t){return t.type===D&&re.push(t.payload),e(t)}}},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},ue=function(){var e=u.a.create({baseURL:"https://jetstyle-api.herokuapp.com",timeout:5e3,headers:{"x-token":d}});return e.interceptors.response.use((function(e){return e}),(function(){})),e}(),de=Object(r.a)({reducer:X,middleware:function(e){return e({thunk:{extraArgument:ue}}).concat(oe)}});de.dispatch((function(e,t,a){return a.get(g).then((function(t){var a=t.data;e(G(a))})).catch((function(e){}))})),i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(o.a,{store:de,children:Object(v.jsx)(se,{})})}),document.getElementById("root")),le()}},[[71,1,2]]]);
//# sourceMappingURL=main.10c54684.chunk.js.map