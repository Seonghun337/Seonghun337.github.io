(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=h(t||a||[]);return i&&i.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,v=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+o+s+a+i+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(_,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return i.length>1?d.default.createElement("picture",null,r(i),s):s})),_=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},h,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));_.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,v=e.itemProp,E=e.loading,O=e.draggable,z=m||g;if(!z)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:R?1:0,transition:j?"opacity "+y+"ms":"none"},s),N="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&k,s,f),P={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:v},T=this.state.isHydrated?h(z):z[0];if(m)return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),T.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:z,generateSources:I}),T.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(z),d.default.createElement(_,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},T,{imageVariants:z}))}}));if(g){var M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},N&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},j&&k)}),T.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:z,generateSources:I}),T.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,x(z),d.default.createElement(_,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},T,{imageVariants:z}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}R.propTypes={resolutions:j,sizes:H,fixed:N(c.default.oneOfType([j,c.default.arrayOf(j)])),fluid:N(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=R;t.default=k},KqfF:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(i.forwardRef)((function(e,t){var a=e.color,i=e.size,s=o(e,["color","size"]);return r.a.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:a},s),r.a.createElement("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"}))}));s.defaultProps={color:"currentColor",size:"1em"};var l=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=Object(i.forwardRef)((function(e,t){var a=e.color,i=e.size,n=c(e,["color","size"]);return r.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:a},n),r.a.createElement("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}))}));u.defaultProps={color:"currentColor",size:"1em"};var f=u;t.a=function(e){return"Globe"==e.name?r.a.createElement(l,{width:e.width,height:e.height}):"ChevronRight"==e.name?r.a.createElement(f,{width:e.width,height:e.height}):r.a.createElement("div",null,"invalid icon...")}},Zttt:function(e,t,a){"use strict";var i=a("dI71"),r=a("q1tI"),n=a.n(r),o=(a("qhky"),a("vOnD")),s=a("ZMKu"),l=a("Wbzz"),d=o.b.div.withConfig({displayName:"style__NavBar",componentId:"xatp61-0"})(["width:100%;height:90px;margin:0;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end;padding-bottom:8px;"]),c=Object(o.b)(l.Link).withConfig({displayName:"style__NavItem",componentId:"xatp61-1"})(['font-size:16px;display:inline-block;margin-left:52px;margin-bottom:8px;vertical-align:middle;transform:perspective(1px) translateZ(0);& ~ .active:before{right:0;}&:before{content:"";position:absolute;left:0;right:100%;bottom:-5px;background:#31C7FF;height:2px;transition-property:right;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:before,&:focus:before,&:active:before{right:0;}']),u=a("OKcn"),f=[{title:"About",slug:"/"},{title:"Work",slug:"/work/"},{title:"Blog",slug:"/blog/"}],p=function(){return n.a.createElement(u.a,{background:!0},n.a.createElement(d,null,n.a.createElement(c,null),"   ",f.map((function(e,t){return n.a.createElement(c,{key:"nav-item-"+t,to:e.slug,activeClassName:"active"},e.title)}))))},h=a("oe4a"),m=a("l1Iz"),g=o.b.div.withConfig({displayName:"Footer__IconWrapper",componentId:"sc-1hy4wdp-0"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:30px;"]),b=o.b.a.withConfig({displayName:"Footer__ContactIcon",componentId:"sc-1hy4wdp-1"})(["margin:0 10px;color:",";"],(function(e){return e.theme.colors.black})),y=o.b.div.withConfig({displayName:"Footer__FooterText",componentId:"sc-1hy4wdp-2"})(["font-size:10px;font-weight:200;text-align:center;margin-top:15px;margin-bottom:30px;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(u.a,{background:!0},n.a.createElement(g,null,n.a.createElement(b,{href:"https://github.com/Seonghun337"},n.a.createElement(h.a,{width:"40",height:"40"})),n.a.createElement(b,{href:"mailto:sung2687@gmail.com"},n.a.createElement(m.a,{width:"40",height:"40"}))),n.a.createElement(y,null,"designed by Seonghun"))},t}(r.Component),v=a("upwP"),x=(o.b.div.withConfig({displayName:"Layout__StyledLayout",componentId:"sc-117p9u7-0"})([""]),function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(o.a,{theme:v.a},n.a.createElement(s.a,{exitBeforeEnter:!0},n.a.createElement(p,null),n.a.createElement(s.b.div,{initial:{y:0,opacity:0},animate:{y:30,opacity:1},exit:{opacity:0},transition:{delay:.2}},this.props.children,n.a.createElement(w,null))))},t}(r.Component));t.a=x},bT4f:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("vOnD"),o=a("9eSz"),s=a.n(o),l=n.b.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1ttppwa-0"})(["width:600px;height:300px;display:flex;padding:25px 30px;background-color:white;margin:0 auto;box-shadow:0 3px 10px gray;box-sizing:border-box;",""],(function(e){if(1==e.hoverActive)return"\n                    &:hover{\n                        transform: scale(1.03,1.03);\n                        filter: brightness(95%);\n                    }\n                    transition: transform .1s linear;\n                \n                "})),d=Object(n.b)(s.a).withConfig({displayName:"style__ThumbnailBox",componentId:"sc-1ttppwa-1"})(["width:50%;background-color:gray;"]),c=n.b.div.withConfig({displayName:"style__CenterPadding",componentId:"sc-1ttppwa-2"})(["width:30px;height:100%;"]),u=n.b.div.withConfig({displayName:"style__ContentBox",componentId:"sc-1ttppwa-3"})(["width:50%;"]),f=n.b.div.withConfig({displayName:"style__TitleBox",componentId:"sc-1ttppwa-4"})(["font-size:25px;font-weight:600;margin:0;"]),p=n.b.div.withConfig({displayName:"style__TeamBox",componentId:"sc-1ttppwa-5"})(["font-size:12px;font-weight:150;text-align:right;"]),h=n.b.div.withConfig({displayName:"style__DescBox",componentId:"sc-1ttppwa-6"})(["font-size:12px;font-weight:100;margin:40px 0 16px 0;line-height:19px;"]),m=n.b.div.withConfig({displayName:"style__StackBox",componentId:"sc-1ttppwa-7"})(["font-size:12px;font-weight:150;margin:16px auto;"]),g=Object(n.c)(["0%{transform:translate(0px);}50%{transform:translate(4px);}100%{transform:translate(0px);}"]),b=n.b.div.withConfig({displayName:"style__ViewMore",componentId:"sc-1ttppwa-8"})(["width:100%;font-size:17px;margin-top:40px;",":hover &{animation:"," .7s 0s linear infinite;}"],l,g),y=a("KqfF");t.a=function(e){return r.a.createElement(l,{hoverActive:e.hoverActive},r.a.createElement(u,null,r.a.createElement(f,null,e.title),r.a.createElement(p,null,"with ",e.team),r.a.createElement(h,null,e.desc),r.a.createElement(m,null,e.stack),r.a.createElement(b,null,"자세히보기",r.a.createElement(y.a,{name:"ChevronRight",width:"12",height:"12"}))),r.a.createElement(c,null),r.a.createElement(d,{fluid:e.thumbnail.childImageSharp.fluid,alt:e.title}))}},qsEC:function(e,t,a){"use strict";var i=a("dI71"),r=a("q1tI"),n=a.n(r),o=a("vOnD"),s=o.b.div.withConfig({displayName:"Saparator__Wrapper",componentId:"sw378p-0"})(["width:100%;display:flex;justify-content:",""],(function(e){return e.isLeft?"flex-start":"center"})),l=o.b.div.withConfig({displayName:"Saparator__OuterShape",componentId:"sw378p-1"})(["width:4px;height:36px;border-left:1px solid;"]),d=o.b.div.withConfig({displayName:"Saparator__InnerShape",componentId:"sw378p-2"})(["width:4px;height:24px;border-right:1px solid;"]),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(s,{isLeft:this.props.isLeft},n.a.createElement(l,null,n.a.createElement(d,null)))},t}(r.Component);t.a=c},s6vo:function(e,t,a){"use strict";var i=a("dI71"),r=a("q1tI"),n=a.n(r),o=a("vOnD").b.h1.withConfig({displayName:"IntroTitle__Title",componentId:"ekdoz4-0"})(["font-size:20px;font-weight:400;width:100%;display:flex;",";margin:30px auto;"],(function(e){if(!e.isLeft)return"\n                justify-content: center;\n            "})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(o,{isLeft:this.props.isLeft},this.props.title)},t}(r.Component);t.a=s}}]);
//# sourceMappingURL=e40d5592b610d24691b31bfc04e1f906e6820c94-d0e3b612229f6c0a99ba.js.map