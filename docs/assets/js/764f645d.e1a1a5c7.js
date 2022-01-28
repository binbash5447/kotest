"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2598],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=m(n),h=r,c=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(c,s(s({ref:e},u),{},{components:n})):a.createElement(c,s({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var m=2;m<l;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},281:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],i={title:"Jsoup Matchers",slug:"jsoup-matchers.html",sidebar_label:"Jsoup"},o=void 0,m={unversionedId:"assertions/jsoup",id:"assertions/jsoup",isDocsHomePage:!1,title:"Jsoup Matchers",description:"This page lists all current matchers in the KotlinTest jsoup matchers extension library. To use this library",source:"@site/docs/assertions/jsoup.md",sourceDirName:"assertions",slug:"/assertions/jsoup-matchers.html",permalink:"/docs/assertions/jsoup-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/jsoup.md",tags:[],version:"current",frontMatter:{title:"Jsoup Matchers",slug:"jsoup-matchers.html",sidebar_label:"Jsoup"},sidebar:"assertions",previous:{title:"Compiler",permalink:"/docs/assertions/compiler-matchers.html"}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page lists all current matchers in the KotlinTest jsoup matchers extension library. To use this library\nyou need to add ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlintest-assertions-jsoup")," to your build."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveChildWithTag(tag)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has a child with the given tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveText(text)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has the given text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveAttribute(name)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has an attribute with the given name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveAttributeValue(name, value)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element have an attribute with the given value")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Elements"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"elements.shouldBePresent()")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the Elements object has some item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"elements.shouldBePresent(n)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the Elements object has N items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"elements.shouldBePresent(n)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the Elements object has N items")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTML"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveId(id)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has an attribute id with the given value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveClass(class)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has the specified class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveSrc(src)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has an attribute src with the given value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveHref(href)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has an attribute href with the given value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveElementWithId(id)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has a child with the given id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element.shouldHaveChildWithClass(id)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the element has a child with the given class")))))}d.isMDXComponent=!0}}]);