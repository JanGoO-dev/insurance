(function(i){function t(t){for(var a,n,o=t[0],u=t[1],c=t[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(i[a]=u[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var i,t=0;t<r.length;t++){for(var e=r[t],a=!0,o=1;o<e.length;o++){var u=e[o];0!==s[u]&&(a=!1)}a&&(r.splice(t--,1),i=n(n.s=e[0]))}return i}var a={},s={app:0},r=[];function n(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=i,n.c=a,n.d=function(i,t,e){n.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,t){if(1&t&&(i=n(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var a in i)n.d(e,a,function(t){return i[t]}.bind(null,a));return e},n.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(t,"a",t),t},n.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},n.p="/insurance/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"0e06":function(i,t,e){i.exports=e.p+"img/slide3.6e3e3b53.png"},"141c":function(i,t,e){"use strict";var a=e("2f35"),s=e.n(a);s.a},1771:function(i,t,e){var a={"./card1.jpg":"1de5","./card2.jpg":"737f","./card3.jpg":"9deb","./card4.jpg":"e7be","./card5.jpg":"75a5","./card6.jpg":"faf0","./login.svg":"ebec","./slide1.png":"30a5","./slide2.png":"85c8","./slide3.png":"0e06","./up-and-down.svg":"e3e1"};function s(i){var t=r(i);return e(t)}function r(i){if(!e.o(a,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return a[i]}s.keys=function(){return Object.keys(a)},s.resolve=r,i.exports=s,s.id="1771"},"1de5":function(i,t,e){i.exports=e.p+"img/card1.984d3367.jpg"},"21bb":function(i,t,e){"use strict";var a=e("2dad"),s=e.n(a);s.a},2275:function(i,t,e){},"2a5c":function(i,t,e){"use strict";var a=e("cd5f"),s=e.n(a);s.a},"2dad":function(i,t,e){},"2f35":function(i,t,e){},"30a5":function(i,t,e){i.exports=e.p+"img/slide1.b1ea6871.png"},"36c0":function(i,t,e){},"4d5a":function(i,t,e){},"4d9e":function(i,t,e){},"568a":function(i,t,e){},"56d7":function(i,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n=(e("5c0b"),e("2877")),o={},u=Object(n["a"])(o,s,r,!1,null,null,null),c=u.exports,l=(e("d3b7"),e("8c4f")),m=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("PrimaryNavbar"),e("SecondaryNavbar"),e("Carousel"),e("ListingFilter"),e("Card"),e("Footer")],1)},d=[],p=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("header",{staticClass:"navbar navbar-light border-bottom",attrs:{id:"nav-wrap"}},[e("section",{staticStyle:{cursor:"pointer"},attrs:{id:"nav-logo"},on:{click:function(t){return i.$router.push("/")}}},[e("span",{staticClass:"text-primary"},[i._v("brand")]),e("span",{staticClass:"text-warning font-weight-bolder"},[i._v("LOGO")])]),e("section",{staticClass:"custom-shadow round-left round-right",attrs:{id:"nav-search"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:"/"==this.$route.path,expression:"this.$route.path == '/'"}],staticClass:"input-group"},[e("input",{staticClass:"form-control round-left border-0 pl-4",attrs:{type:"search",placeholder:"Search...","aria-label":"Search"}}),i._m(0)])]),e("section",{attrs:{id:"nav-btn"}},[e("button",{staticClass:"btn btn-outline-primary round-left pl-4 pr-3",attrs:{type:"submit"},on:{click:function(t){return i.$router.push("/Auth/Login")}}},[e("span",[i._v("Login")])]),e("button",{staticClass:"btn btn-outline-warning round-right pl-3 pr-4 ml-1",attrs:{type:"submit"},on:{click:function(t){return i.$router.push("/Auth/Register")}}},[e("span",[i._v("Register")])])])])])},f=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn border-0 round-right pr-4",attrs:{type:"button",id:"button-addon2"}},[e("i",{staticClass:"fas fa-search"})])])}],v={},g=v,h=(e("d7ba"),Object(n["a"])(g,p,f,!1,null,"d374f218",null)),q=h.exports,b=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("header",{staticClass:"py-2",attrs:{id:"mini-nav-wrap"},on:{click:i.rotateArrow}},[e("section",{attrs:{id:"mini-nav-links"}},[e("transition",{attrs:{name:"fade"}},[e("ul",{directives:[{name:"show",rawName:"v-show",value:i.miniVisible,expression:"miniVisible"}],staticClass:"nav"},i._l(6,(function(t,a){return e("li",{key:a,staticClass:"mx-1"},[e("button",{staticClass:"btn btn-outline-info btn-sm px-5",attrs:{type:"submit"}},[i._v("Link "+i._s(a))])])})),0)])],1)])])},C=[],_={data:function(){return{miniVisible:!1}},methods:{rotateArrow:function(){this.miniVisible=!this.miniVisible}}},y=_,x=(e("6477"),Object(n["a"])(y,b,C,!1,null,"55934754",null)),w=x.exports,k=function(){var i=this,t=i.$createElement;i._self._c;return i._m(0)},L=[function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{attrs:{id:"carousel-wrap"}},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselCaptions","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselCaptions","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#carouselCaptions","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#carouselCaptions","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100 gray-filter",attrs:{src:e("30a5"),alt:"Slide1"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",[i._v("First slide label")]),a("p",[i._v("Nulla vitae elit libero, a pharetra augue mollis interdum.")])])]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100 gray-filter",attrs:{src:e("85c8"),alt:"Slide2"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",[i._v("Second slide label")]),a("p",[i._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100 gray-filter",attrs:{src:e("0e06"),alt:"Slide3"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",[i._v("Third slide label")]),a("p",[i._v("Praesent commodo cursus magna, vel scelerisque nisl consectetur.")])])])])])])}],j={},$=j,E=(e("b598"),Object(n["a"])($,k,L,!1,null,"164640da",null)),H=E.exports,U=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("section",{staticClass:"mt-5",attrs:{id:"listing-filter-wrap"}},[i._m(0),e("div",{staticClass:"round container custom-shadow p-2",attrs:{id:"listing-filter-nav"}},[i._m(1),i._l(4,(function(t,a){return e("div",{key:a,staticClass:"filter-select form-group mx-1"},[i._m(2,!0)])})),i._m(3)],2)])])},O=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"container pl-5",attrs:{id:"listing-title"}},[e("span",{staticClass:"h1"},[i._v("Listings")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"title"},[e("button",{staticClass:"btn btn-block border-info round-left",attrs:{disabled:""}},[e("span",{staticClass:"px-4 letter-space text-secondary text-info"},[e("span",{staticClass:"invisible"},[i._v("##")]),i._v("Filter ")]),e("span",{staticClass:"pr-2 invisible"},[i._v(".")])])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("select",{staticClass:"minimal border-info form-control rounded-0"},[e("option",{attrs:{selected:""}},[i._v("Choose...")]),e("option",[i._v("...")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"filter-btn"},[e("button",{staticClass:"btn btn-warning btn-block round-right"},[e("span",{staticClass:"px-4"},[i._v("Apply Filter")]),e("span",{staticClass:"pr-2"},[e("i",{staticClass:"fas fa-filter"})])])])}],P={},S=P,A=(e("8a98"),Object(n["a"])(S,U,O,!1,null,"4ff5f804",null)),N=A.exports,T=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"container mt-5",attrs:{id:"card-wrap"}},i._l(i.planCards,(function(t,s){return a("div",{key:s,staticClass:"card m-3"},[a("img",{staticClass:"card-img-top",attrs:{src:e("1771")("./"+t.imageLink),alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-warning"},[i._v(" "+i._s(t.title)+" - "),a("small",[i._v(i._s(t.id))])]),t.text[0].length<160?a("p",{staticClass:"card-text text-secondary"},[i._v(i._s(t.text[0]))]):a("p",{staticClass:"card-text text-secondary"},[i._v(i._s(t.text[0].substring(0,160)+" ..."))]),a("router-link",{staticClass:"btn btn-warning round-right round-right px-4",attrs:{to:"/plan/"+t.id}},[i._v(" See Plan Details "),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"fas fa-arrow-right"})])])],1)])})),0)},z=[],F={data:function(){return{}},computed:{planCards:function(){return this.$store.getters.getAllPlans}},mounted:function(){window.addEventListener("onload",this.limitNumWords)},methods:{limitNumWords:function(){var i=this.$el.querySelector(".limit-words"),t=i.innerText.length;t>20&&(i.innerText=i.innerText.substr(0,20)+"...")}}},R=F,I=(e("ff1b"),Object(n["a"])(R,T,z,!1,null,"0ee08b76",null)),D=I.exports,M=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("footer",{staticClass:"site-footer border-top border-warning"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[i._m(0),e("div",{staticClass:"col-xs-6 col-md-3"},[i._m(1),e("ul",{staticClass:"footer-links"},i._l(5,(function(t,a){return e("li",{key:a},[e("a",{attrs:{href:"#"}},[i._v("Link "+i._s(a))])])})),0)]),i._m(2)]),e("hr",{staticClass:"border-warning"})]),i._m(3)])])},V=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"col-sm-12 col-md-6"},[e("button",{staticClass:"btn btn-outline-warning border-left-0 rounded-left-0 round-right pt-2 pb-1 pr-4 mb-3",attrs:{disabled:""}},[e("h6",{staticClass:"text-warning"},[i._v("About")])]),e("p",{staticClass:"text-justify text-secondary"},[i._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est repellat laborum dicta quaerat ea optio placeat magnam voluptatibus nostrum magni dolorum. Incidunt, fugit eos veniam temporibus ipsam neque quas dolore quis. Reprehenderit quae quibusdam aspernatur, quod qui et placeat? ")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("button",{staticClass:"btn btn-outline-warning border-left-0 rounded-left-0 round-right pt-2 pb-1 pr-4 mb-3",attrs:{disabled:""}},[e("h6",{staticClass:"text-warning"},[i._v("Categories")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"col-xs-6 col-md-3"},[e("button",{staticClass:"btn btn-outline-warning border-left-0 rounded-left-0 round-right pt-2 pb-1 pr-4 mb-3",attrs:{disabled:""}},[e("h6",{staticClass:"text-warning"},[i._v("Quick Links")])]),e("ul",{staticClass:"footer-links"},[e("li",[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[i._v("About Us")])]),e("li",[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[i._v("Contact Us")])]),e("li",[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[i._v("Contribute")])]),e("li",[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[i._v("Privacy Policy")])]),e("li",[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[i._v("Sitemap")])])])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-sm-6 col-xs-12"},[e("p",{staticClass:"copyright-text"},[i._v(" Copyright © 2017 All Rights Reserved by "),e("a",{attrs:{href:"#"}},[i._v("Muhammad Bin Shahzad")]),i._v(". ")])]),e("div",{staticClass:"col-md-4 col-sm-6 col-xs-12"},[e("ul",{staticClass:"social-icons"},[e("li",[e("a",{staticClass:"facebook",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})])]),e("li",[e("a",{staticClass:"twitter",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})])]),e("li",[e("a",{staticClass:"dribbble",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-dribbble"})])]),e("li",[e("a",{staticClass:"linkedin",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])])])])])}],B={},Y=B,G=(e("141c"),Object(n["a"])(Y,M,V,!1,null,"be88704a",null)),W=G.exports,Z={components:{PrimaryNavbar:q,SecondaryNavbar:w,Carousel:H,ListingFilter:N,Card:D,Footer:W},data:function(){return{cards:[{link:"@/assets/card1.jpg"},{link:"@/assets/card2.jpg"},{link:"@/assets/card3.jpg"},{link:"@/assets/card4.jpg"},{link:"@/assets/card5.jpg"},{link:"@/assets/card6.jpg"}]}}},J=Z,Q=(e("21bb"),Object(n["a"])(J,m,d,!1,null,null,null)),K=Q.exports,X=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("primary-navbar"),e("Registration"),e("Footer")],1)},ii=[],ti=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"mt-5 alert alert-success"},[i._m(0),e("div",{staticClass:"container text-center d-flex flex-column justify-content-center h4"},[i._m(1),e("p",{staticClass:"mt-2 mb-0"},[i._v(" If you do have an account then, "),e("router-link",{attrs:{to:"/Auth/Login"}},[i._v("Login")])],1)])]),i._m(2),e("div",[e("span",{staticClass:"text-center d-flex flex-row justify-content-center h3"},[i._v(" Already have an account then, "),e("router-link",{attrs:{to:"/Auth/Login"}},[i._v("Login")])],1)])])},ei=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h1",{staticClass:"alert-heading text-center"},[e("i",{staticClass:"fas fa-exclamation-circle"})])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("p",[i._v(" This page is only for those users, who already don't have account on "),e("span",{staticClass:"text-warning font-weight-bolder"},[i._v("Company Name")]),i._v(" and want to register as a new user and make your life spark ")])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"page-content"},[e("div",{staticClass:"form-v10-content"},[e("form",{staticClass:"form-detail",attrs:{action:"#",method:"post",id:"myform"}},[e("div",{staticClass:"form-left"},[e("h2",{staticClass:"text-warning mt-5"},[e("button",{staticClass:"btn btn-outline-warning border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3",attrs:{disabled:""}},[e("span",{staticClass:"h4"},[i._v("General Infomation")])])]),e("div",{staticClass:"form-row"},[e("select",{attrs:{name:"title"}},[e("option",{staticClass:"option",attrs:{value:"title"}},[i._v("Title")]),e("option",{staticClass:"option",attrs:{value:"businessman"}},[i._v("Businessman")]),e("option",{staticClass:"option",attrs:{value:"reporter"}},[i._v("Reporter")]),e("option",{staticClass:"option",attrs:{value:"secretary"}},[i._v("Secretary")])]),e("span",{staticClass:"select-btn"},[e("i",{staticClass:"zmdi zmdi-chevron-down"})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-row form-row-1"},[e("input",{staticClass:"input-text",attrs:{type:"text",name:"first_name",id:"first_name",placeholder:"First Name",required:""}})]),e("div",{staticClass:"form-row form-row-2"},[e("input",{staticClass:"input-text",attrs:{type:"text",name:"last_name",id:"last_name",placeholder:"Last Name",required:""}})])]),e("div",{staticClass:"form-row"},[e("select",{attrs:{name:"position"}},[e("option",{attrs:{value:"position"}},[i._v("Position")]),e("option",{attrs:{value:"director"}},[i._v("Director")]),e("option",{attrs:{value:"manager"}},[i._v("Manager")]),e("option",{attrs:{value:"employee"}},[i._v("Employee")])]),e("span",{staticClass:"select-btn"},[e("i",{staticClass:"zmdi zmdi-chevron-down"})])]),e("div",{staticClass:"form-row"},[e("input",{staticClass:"company",attrs:{type:"text",name:"company",id:"company",placeholder:"Company",required:""}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-row form-row-3"},[e("input",{staticClass:"business",attrs:{type:"text",name:"business",id:"business",placeholder:"Business Arena",required:""}})]),e("div",{staticClass:"form-row form-row-4"},[e("select",{attrs:{name:"employees"}},[e("option",{attrs:{value:"employees"}},[i._v("Employees")]),e("option",{attrs:{value:"trainee"}},[i._v("Trainee")]),e("option",{attrs:{value:"colleague"}},[i._v("Colleague")]),e("option",{attrs:{value:"associate"}},[i._v("Associate")])]),e("span",{staticClass:"select-btn"},[e("i",{staticClass:"zmdi zmdi-chevron-down"})])])])]),e("div",{staticClass:"form-right bg-primary"},[e("h2",{staticClass:"mt-5"},[e("button",{staticClass:"btn btn-outline-light border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3",attrs:{disabled:""}},[e("span",{staticClass:"h4"},[i._v("Contact Details")])])]),e("div",{staticClass:"form-row"},[e("input",{staticClass:"street",attrs:{type:"text",name:"street",id:"street",placeholder:"Street + Nr",required:""}})]),e("div",{staticClass:"form-row"},[e("input",{staticClass:"additional",attrs:{type:"text",name:"additional",id:"additional",placeholder:"Additional Information",required:""}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-row form-row-1"},[e("input",{staticClass:"zip",attrs:{type:"text",name:"zip",id:"zip",placeholder:"Zip Code",required:""}})]),e("div",{staticClass:"form-row form-row-2"},[e("select",{attrs:{name:"place"}},[e("option",{attrs:{value:"place"}},[i._v("Place")]),e("option",{attrs:{value:"Street"}},[i._v("Street")]),e("option",{attrs:{value:"District"}},[i._v("District")]),e("option",{attrs:{value:"City"}},[i._v("City")])]),e("span",{staticClass:"select-btn"},[e("i",{staticClass:"zmdi zmdi-chevron-down"})])])]),e("div",{staticClass:"form-row"},[e("select",{attrs:{name:"country"}},[e("option",{attrs:{value:"country"}},[i._v("Country")]),e("option",{attrs:{value:"Vietnam"}},[i._v("Vietnam")]),e("option",{attrs:{value:"Malaysia"}},[i._v("Malaysia")]),e("option",{attrs:{value:"India"}},[i._v("India")])]),e("span",{staticClass:"select-btn"},[e("i",{staticClass:"zmdi zmdi-chevron-down"})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-row form-row-1"},[e("input",{staticClass:"code",attrs:{type:"text",name:"code",id:"code",placeholder:"Code +",required:""}})]),e("div",{staticClass:"form-row form-row-2"},[e("input",{staticClass:"phone",attrs:{type:"text",name:"phone",id:"phone",placeholder:"Phone Number",required:""}})])]),e("div",{staticClass:"form-row"},[e("input",{staticClass:"input-text",attrs:{type:"text",name:"your_email",id:"your_email",required:"",pattern:"[^@]+@[^@]+.[a-zA-Z]{2,6}",placeholder:"Your Email"}})]),e("div",{staticClass:"form-checkbox"},[e("label",{staticClass:"container"},[e("p",[i._v(" I do accept the "),e("a",{staticClass:"text",attrs:{href:"#"}},[i._v("Terms and Conditions")]),i._v(" of your site. ")]),e("input",{attrs:{type:"checkbox",name:"checkbox"}}),e("span",{staticClass:"checkmark"})])]),e("div",{staticClass:"form-row-last"},[e("input",{staticClass:"register",attrs:{type:"submit",name:"register",value:"Register"}})])])])])])}],ai={},si=ai,ri=(e("6e3c"),Object(n["a"])(si,ti,ei,!1,null,null,null)),ni=ri.exports,oi={components:{Registration:ni,PrimaryNavbar:q,Footer:W}},ui=oi,ci=Object(n["a"])(ui,X,ii,!1,null,null,null),li=ci.exports,mi=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("primary-navbar"),e("Login"),e("Footer")],1)},di=[],pi=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"mt-5 alert alert-success"},[i._m(0),e("div",{staticClass:"container text-center d-flex flex-column justify-content-center h4"},[i._m(1),e("p",{staticClass:"mt-2 mb-0"},[i._v(" If you don't have an account then, "),e("router-link",{attrs:{to:"/Auth/Register"}},[i._v("Register")])],1)])]),i._m(2),e("div",[e("span",{staticClass:"text-center d-flex flex-row justify-content-center h3"},[i._v(" Don't have an account then, "),e("router-link",{attrs:{to:"/Auth/Register"}},[i._v("Register")])],1)])])},fi=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h1",{staticClass:"alert-heading text-center"},[e("i",{staticClass:"fas fa-exclamation-circle"})])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("p",[i._v(" This page is only for those users, who already have account on "),e("span",{staticClass:"text-warning font-weight-bolder"},[i._v("Company Name")]),i._v(" and have made their life spark ")])},function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"form-v10-content"},[a("form",{staticClass:"form-detail",attrs:{action:"#",method:"post",id:"myform"}},[a("div",{staticClass:"form-left"},[a("img",{staticClass:"img-fluid mt-5",attrs:{src:e("ebec"),alt:"Welcome Back SVG"}})]),a("div",{staticClass:"form-right bg-primary"},[a("h2",{staticClass:"mt-5"},[a("button",{staticClass:"btn btn-outline-light border-left-0 rounded-left-0 round-right py-3 pr-4 mb-3",attrs:{disabled:""}},[a("span",{staticClass:"h4"},[i._v("Login")])])]),a("div",{staticClass:"form-row"},[a("input",{staticClass:"street",attrs:{type:"text",name:"street",id:"street",placeholder:"Your Name Here (Optional)",required:""}})]),a("div",{staticClass:"form-row"},[a("input",{staticClass:"input-text",attrs:{type:"email",name:"your_email",id:"your_email",required:"",pattern:"[^@]+@[^@]+.[a-zA-Z]{2,6}",placeholder:"Your Email Here"}})]),a("div",{staticClass:"form-row"},[a("input",{staticClass:"additional",attrs:{type:"password",name:"additional",id:"additional",placeholder:"Your Password Here",required:""}})]),a("div",{staticClass:"form-row-last"},[a("input",{staticClass:"register",attrs:{type:"submit",name:"register",value:"Login"}})])])])])])}],vi={},gi=vi,hi=(e("2a5c"),Object(n["a"])(gi,pi,fi,!1,null,"73335a92",null)),qi=hi.exports,bi={components:{Login:qi,PrimaryNavbar:q,Footer:W}},Ci=bi,_i=Object(n["a"])(Ci,mi,di,!1,null,null,null),yi=_i.exports,xi=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("primary-navbar"),e("hero-image",{attrs:{curPlan:i.plan}}),e("div",{staticClass:"container plan-txt"},i._l(i.plan.text,(function(t,a){return e("p",{key:a,staticClass:"text-justify h5 mb-5"},[i._v(i._s(t))])})),0),e("Footer")],1)},wi=[],ki=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{attrs:{id:"hero-image"}},[a("div",{staticClass:"image",style:{backgroundImage:"url("+e("1771")("./"+i.curPlan.imageLink)+")"}},[a("div",{staticClass:"button btn border-left-0 rounded-left-0 round-right pt-4 pb-3 pr-5 mb-3 mt-5"},[a("h4",{staticClass:"text-white"},[i._v(i._s(i.curPlan.title)+" - "+i._s(i.curPlan.id))])])])])},Li=[],ji={props:["curPlan"]},$i=ji,Ei=(e("6c31"),Object(n["a"])($i,ki,Li,!1,null,"2f916938",null)),Hi=Ei.exports,Ui={components:{PrimaryNavbar:q,HeroImage:Hi,Footer:W},computed:{plan:function(){return console.log(this.$route.params.id),this.$store.getters.getCurPlan(this.$route.params.id)}}},Oi=Ui,Pi=(e("a57c"),Object(n["a"])(Oi,xi,wi,!1,null,"4f6a9850",null)),Si=Pi.exports;a["a"].use(l["a"]);var Ai=[{path:"/",name:"Home",component:K},{path:"/Auth/Register",name:"Registaration",component:li},{path:"/Auth/Login",name:"Login",component:yi},{path:"/plan/:id",name:"PlanDetails",component:Si}],Ni=new l["a"]({mode:"hash",routes:Ai,scrollBehavior:function(){return new Promise((function(i){setTimeout((function(){i({x:0,y:0})}),100)}))}}),Ti=Ni,zi=(e("7db0"),e("2f62"));a["a"].use(zi["a"]);var Fi=new zi["a"].Store({state:{plans:[{id:"001",imageLink:"card1.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]},{id:"002",imageLink:"card2.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]},{id:"003",imageLink:"card3.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]},{id:"004",imageLink:"card4.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]},{id:"005",imageLink:"card5.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]},{id:"006",imageLink:"card6.jpg",title:"Card Title",text:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!"]}]},getters:{getAllPlans:function(i){return i.plans},getCurPlan:function(i){return function(t){return i.plans.find((function(i){return i.id===t}))}}},mutations:{},actions:{},modules:{}});e("4989"),e("ab8b"),e("15f5"),e("7051");a["a"].config.productionTip=!1,new a["a"]({router:Ti,store:Fi,render:function(i){return i(c)}}).$mount("#app")},"5c0b":function(i,t,e){"use strict";var a=e("9c0c"),s=e.n(a);s.a},6477:function(i,t,e){"use strict";var a=e("4d9e"),s=e.n(a);s.a},"6c31":function(i,t,e){"use strict";var a=e("df3b"),s=e.n(a);s.a},"6c55":function(i,t,e){},"6e3c":function(i,t,e){"use strict";var a=e("6c55"),s=e.n(a);s.a},"737f":function(i,t,e){i.exports=e.p+"img/card2.c5326d49.jpg"},"75a5":function(i,t,e){i.exports=e.p+"img/card5.4553d1c6.jpg"},"85c8":function(i,t,e){i.exports=e.p+"img/slide2.74928cdc.png"},"8a98":function(i,t,e){"use strict";var a=e("36c0"),s=e.n(a);s.a},"9c0c":function(i,t,e){},"9deb":function(i,t,e){i.exports=e.p+"img/card3.6801f6bd.jpg"},a57c:function(i,t,e){"use strict";var a=e("568a"),s=e.n(a);s.a},b598:function(i,t,e){"use strict";var a=e("2275"),s=e.n(a);s.a},be45:function(i,t,e){},cd5f:function(i,t,e){},d7ba:function(i,t,e){"use strict";var a=e("be45"),s=e.n(a);s.a},df3b:function(i,t,e){},e3e1:function(i,t,e){i.exports=e.p+"img/up-and-down.7861c238.svg"},e7be:function(i,t,e){i.exports=e.p+"img/card4.e6b5de8e.jpg"},ebec:function(i,t,e){i.exports=e.p+"img/login.49107080.svg"},faf0:function(i,t,e){i.exports=e.p+"img/card6.1b563bd5.jpg"},ff1b:function(i,t,e){"use strict";var a=e("4d5a"),s=e.n(a);s.a}});
//# sourceMappingURL=app.bbe4e0cc.js.map