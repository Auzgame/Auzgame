"use strict";(self.webpackChunkcrazygames_gameframe=self.webpackChunkcrazygames_gameframe||[]).push([[7318],{38563:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(47313),i=r(85541),o=r(46417);const s=n.memo((e=>(0,o.jsx)(i.Z,{...e,width:"24",height:"24",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.40033 4.44945C10.5543 2.43547 13.4458 2.43547 14.5998 4.44945L21.528 16.5411C22.6732 18.5398 21.2493 21.0611 18.9282 21.0611H5.07184C2.75081 21.0611 1.32687 18.5398 2.47213 16.5411L9.40033 4.44945ZM12.8644 5.44375C12.4788 4.7707 11.5213 4.7707 11.1357 5.44375L4.20745 17.5354C3.81311 18.2236 4.31367 19.0611 5.07184 19.0611H18.9282C19.6864 19.0611 20.187 18.2236 19.7926 17.5354L12.8644 5.44375ZM12 8.98477C12.5523 8.98477 13 9.43248 13 9.98477V12C13 12.5523 12.5523 13 12 13C11.4478 13 11 12.5523 11 12V9.98477C11 9.43248 11.4478 8.98477 12 8.98477ZM11 16.0306C11 15.4783 11.4478 15.0306 12 15.0306H12.01C12.5623 15.0306 13.01 15.4783 13.01 16.0306C13.01 16.5829 12.5623 17.0306 12.01 17.0306H12C11.4478 17.0306 11 16.5829 11 16.0306Z"})})))},61139:(e,t,r)=>{r.d(t,{S:()=>_,Z:()=>V});var n=r(82937),i=r(47313),o=r(52797),s=r(46604),a=r(77626),l=r(42669),c=r(12398),d=r(57484),h=r(93825),u=r(90831);const p=()=>{const{category:e,altGame:t,gameStatus:r}=(0,u.NI)();return"unavailable"===r?null===t||void 0===t?void 0:t.category:e};var m=r(19314),x=r(46417);class g extends i.Component{constructor(e){super(e),this.videoRef=void 0,this.onMouseEnter=()=>{const e=this.videoRef.current;e&&e.play(),this.setState({isHovered:!0})},this.onMouseLeave=()=>{const e=this.videoRef.current;e&&e.pause(),this.setState({isHovered:!1})},this.state={isHovered:!1},this.videoRef=i.createRef()}render(){const{gameName:e,rating:t,gameLink:r,tracker:i,video:o,thumbnail:s,autoplayVideo:u,target:g,gameThumbContainerCustomStyle:v}=this.props,Z=(0,m.U)();return(0,x.jsx)(d.vN,{className:"gameThumbContainer",style:v,onMouseEnter:u?void 0:this.onMouseEnter,onMouseLeave:u?void 0:this.onMouseLeave,children:(0,x.jsx)("a",{href:r,onClick:i||void 0,target:g||"_blank",children:(0,x.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,x.jsx)(d.wT,{item:!0,children:(0,x.jsx)(c.Z,{ref:this.videoRef,video:o,thumbnail:s,autoplay:u})}),t&&(0,x.jsx)(d.sF,{item:!0,className:"rating",children:t}),(0,x.jsxs)(n.ZP,{item:!0,className:"gameTitleContainer",sx:{mt:"20px",p:"10px"},children:[(0,x.jsx)(d.Aw,{className:"gameTitle",children:e}),(0,x.jsx)(l.Z,{variant:"caption",className:"gameCategory",style:{color:"white",opacity:Z?1:.5,textTransform:"uppercase",letterSpacing:8},children:p()})]}),(0,x.jsx)(n.ZP,{item:!0,container:!0,className:"buttonContainer",sx:{margin:"15px 0"},justifyContent:"center",children:(0,x.jsx)(h.Z,{children:(0,x.jsx)(a.Z,{id:"buttons.playNow"})})})]})})})}}const v=g;var Z=r(8226),y=r(31080);const j=e=>{let{onClick:t,className:r,responsive:n,customStyle:i,children:o,variant:s="contained"}=e;return(0,x.jsx)(y.v,{responsive:!!n,variant:s,className:r,onClick:t,style:i,children:o})},b=()=>{},f=e=>{let{tracker:t,closer:r,children:i,leaveUrl:o,showCloseText:s}=e;const c=r||b;return(0,x.jsxs)(n.ZP,{container:!0,direction:"column",alignItems:"center",children:[(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)("a",{href:o,target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer",children:(0,x.jsx)(j,{onClick:e=>{t(e),c()},children:i})})}),s&&(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)(l.Z,{sx:{color:"primary.contrastText"},variant:"subtitle1",children:(0,x.jsxs)(n.ZP,{container:!0,direction:"row",alignItems:"center",onClick:c,style:{cursor:"pointer"},children:[(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)(Z.Z,{})}),(0,x.jsxs)(n.ZP,{item:!0,children:["\xa0",(0,x.jsx)(a.Z,{id:"error.generic.orCloseAndBack"})]})]})})})]})};var w=r(42379);const C=(0,w.ZP)("button")((()=>({background:"linear-gradient(to bottom, #0086cb 0%, #0282c5 100%)",fallbacks:{background:"#3498db"},cursor:"pointer","-webkit-border-radius":15,"-moz-border-radius":15,borderRadius:15,textShadow:"1px 1px 3px #666666",color:"#ffffff",fontSize:20,fontWeight:"bold",textDecoration:"none",border:"solid #1f628d 3px",textTransform:"uppercase",display:"block",margin:"0 auto",marginLeft:"auto",marginRight:"auto",padding:"30px 15px","&:hover":{background:"#00a6e7",backgroundImage:"linear-gradient(to bottom, #00a6e7, #1a91cf)",textDecoration:"none"}}))),k=(0,w.ZP)("div")((e=>{let{theme:{palette:t}}=e;return{color:t.primary.contrastText,textAlign:"center",fontSize:20}})),P=(0,w.ZP)(n.ZP,{shouldForwardProp:e=>"compactTitle"!==e})((e=>{let{theme:{breakpoints:t,spacing:r},compactTitle:n}=e;return{height:"100%",flexDirection:"column",[t.up("sm")]:{flexDirection:"row"},...n&&{"& .labelTextContainerWithAlt":{[t.up("sm")]:{width:"40%"}},"& .errorTitle":{marginBottom:r()},"& .errorSubheading":{fontSize:"3vw",[t.up("sm")]:{fontSize:"2vw"},lineHeight:1.5,marginBottom:r()}}}})),B=(0,w.ZP)(n.ZP)((e=>{let{theme:{breakpoints:t}}=e;return{color:"white",width:"55%",[t.up("sm")]:{width:"35%"}}})),T=(0,w.ZP)(n.ZP)((e=>{let{theme:{breakpoints:t}}=e;return{maxWidth:"78%",[t.up("sm")]:{maxWidth:"40%"}}})),S=e=>({color:"white",opacity:.8,marginTop:10,fontSize:"0.8em",textAlign:"center","& a":{color:e.palette.secondary.main,"&:hover":{cursor:"pointer",color:e.palette.secondary.dark}}}),M=(0,w.ZP)(n.ZP)((e=>{let{theme:t}=e;return{...S(t)}})),L=(0,w.ZP)("div")((e=>{let{theme:t}=e;return{...S(t)}})),R=(0,w.ZP)(l.Z)((e=>{let{theme:{breakpoints:t}}=e;return{fontSize:"9vw",[t.up("sm")]:{fontSize:"7vw"},fontWeight:900,textAlign:"center",lineHeight:1,color:"white",transform:"rotate(-3deg)"}})),W=(0,w.ZP)(l.Z)((e=>{let{theme:{breakpoints:t}}=e;return{fontSize:"3.5vw",[t.up("sm")]:{fontSize:"2.5vw"},textAlign:"center",color:"white",width:"100%"}})),A=(0,w.ZP)("div")((e=>{let{theme:{breakpoints:t}}=e;return{width:"100%",height:"20%",position:"relative",display:"none",[t.up("sm")]:{display:"flex",justifyContent:"flex-end"},"& svg":{width:"50% !important",float:"right"}}})),N=()=>{};class I extends i.Component{constructor(e){super(e),this.inputRef=void 0,this.copyToClipboard=e=>{const t=this.inputRef.current;if(t){t.select();const e=document.execCommand("Copy");this.setState({copied:e})}},this.state={copied:!1},this.inputRef=i.createRef()}render(){const{closer:e,children:t,leaveUrl:r,showCloseText:i}=this.props,o=e||N;return(0,x.jsxs)(n.ZP,{container:!0,direction:"column",alignItems:"center",children:[(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)(l.Z,{variant:"h5",sx:{color:"primary.contrastText"},children:t})}),(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsxs)(C,{onClick:this.copyToClipboard,children:[(0,x.jsx)("div",{children:(0,x.jsx)("input",{ref:this.inputRef,type:"url",value:r,style:{width:500,background:"transparent",color:"white",border:"none"}})}),this.renderCopiedText()]})}),i&&(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)(l.Z,{sx:{color:"primary.contrastText"},variant:"body2",children:(0,x.jsxs)(n.ZP,{container:!0,direction:"row",alignItems:"center",onClick:o,style:{cursor:"pointer"},children:[(0,x.jsx)(n.ZP,{item:!0,children:(0,x.jsx)(Z.Z,{})}),(0,x.jsxs)(n.ZP,{item:!0,children:["\xa0",(0,x.jsx)(a.Z,{id:"error.generic.orCloseAndBack"})]})]})})})]})}renderCopiedText(){return this.state.copied?(0,x.jsx)(l.Z,{variant:"subtitle1",style:{float:"right"},children:(0,x.jsx)(a.Z,{id:"error.generic.linkCopied"})}):null}}const z=I;var U=r(38563);const E=e=>{let{children:t}=e;return(0,x.jsxs)(n.ZP,{container:!0,children:[(0,x.jsx)(n.ZP,{item:!0,xs:1}),(0,x.jsx)(n.ZP,{item:!0,xs:1,children:(0,x.jsx)(l.Z,{sx:{color:"text.secondary"},children:(0,x.jsx)(U.Z,{style:{color:"white",fontSize:"5em",opacity:.7}})})}),(0,x.jsx)(n.ZP,{item:!0,container:!0,xs:8,alignItems:"center",style:{marginLeft:16},children:(0,x.jsx)(k,{children:t})}),(0,x.jsx)(n.ZP,{item:!0,xs:2})]})};var G=r(69121),H=r(85541);const O=i.memo((e=>(0,x.jsx)(H.Z,{...e,width:"199",height:"101",viewBox:"0 0 199 101",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M116.645 24.904l9.612 13.836 40.964 6.253C122.062 72.937 84.826 81.06 56.561 68.802 19.148 52.575 19.234.484 19.148 0L0 5.7c.389 2.18 10.031 53.623 52.727 71.983\n            9.747 4.19 20.346 6.283 31.774 6.283 23.324 0 50.098-8.749 80.05-26.122l-17.696 36.238 5.493 6.918 46.348-66.786-82.051-9.31z"})})));var D=r(86857);const F=o.GA.Instance;function _(e,t){return function(r){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return F.trackButtonClick(n,t.gameSlug)}}class J extends i.Component{constructor(e){super(e),this.sandboxed=void 0,this.sandboxed=s.Z.isSandboxed()}render(){return this.props.showAlternativeGame?this.renderLayoutWithAlternative():this.renderLayoutWithoutAlternatives()}renderLayoutWithAlternative(){const{alternativeAction:e,altGame:t,title:r,message:n,compactTitle:l,shouldShowGDPRNotice:c}=this.props,{countryCode:d}=(0,G.bG)(),h=t?()=>F.trackButtonClick(o.J.AlternativeGame,t.gameSlug):void 0,u=void 0!==c?c:(0,G.I)(d)&&s.Z.isEmbeddedExternally();return(0,x.jsxs)(P,{compactTitle:!!l,container:!0,justifyContent:"space-around",alignItems:"center",children:[(0,x.jsxs)(B,{item:!0,className:"labelTextContainerWithAlt",container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[(0,x.jsx)(R,{variant:"h6",children:r||(0,x.jsx)(a.Z,{id:"error.generic.mainTitle"})}),(0,x.jsx)(W,{variant:"subtitle1",className:"errorSubheading",children:n}),(0,x.jsx)(A,{children:(0,x.jsx)(O,{style:{fill:"#58538a",width:"100%",height:"100%",verticalAlign:"middle"}})})]}),!!t&&(0,x.jsxs)(T,{item:!0,children:[(0,x.jsx)(v,{...t,tracker:h,gameThumbContainerCustomStyle:{maxWidth:"42vh",margin:"auto"}}),e&&(0,x.jsx)(L,{children:e})]}),u&&(0,x.jsx)(i.Suspense,{fallback:null,children:(0,x.jsx)(D.Z,{})})]})}renderLayoutWithoutAlternatives(){const{alternativeAction:e}=this.props;return(0,x.jsxs)(n.ZP,{container:!0,direction:"column",spacing:8,alignItems:"center",children:[(0,x.jsx)(n.ZP,{item:!0,style:{width:"100%"},children:this.renderErrorMessage()}),(0,x.jsx)(n.ZP,{item:!0,children:this.renderExitButton()}),e&&(0,x.jsx)(M,{item:!0,children:e})]})}renderErrorMessage(){return(0,x.jsx)(E,{children:this.props.message})}renderExitButton(){return this.sandboxed?this.renderSandbox():this.renderButton()}renderSandbox(){const{leaveButtonUrl:e,close:t,showCloseText:r}=this.props;return e?(0,x.jsx)(z,{closer:t,showCloseText:r,leaveUrl:e,children:this.sandboxMessage()}):null}renderButton(){const{leaveButtonUrl:e,tracker:t,close:r,showCloseText:n,leaveButtonMessage:i,customButton:o}=this.props;return o?(0,x.jsx)(o,{}):e?(0,x.jsx)(f,{tracker:t,closer:r,showCloseText:n,leaveUrl:e,children:i}):null}sandboxMessage(){return this.props.sandboxMessage?this.props.sandboxMessage:(0,x.jsx)(a.Z,{id:"error.sandbox.copyAndPasteLink"})}}const V=J},47318:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(47313),i=r(8242),o=r(87308),s=r(90831),a=r(50009),l=r(52797),c=r(46604),d=r(77626),h=r(61139),u=r(69121),p=r(46417);const m={textDecoration:"underline",fontWeight:"bolder",color:"#FFF"};class x extends n.Component{constructor(e){super(e),this.config=void 0,this.config=(0,s.NI)()}render(){return this.isRecentBrowser()?(0,p.jsx)(h.Z,{tracker:()=>Promise.resolve(),showCloseText:!1,message:this.createOverlayMessageForRecentBrowser()}):(0,p.jsx)(h.Z,{showCloseText:!1,message:this.createOverlayMessage(),leaveButtonMessage:this.createLeaveButtonMessage(),leaveButtonUrl:this.createLeaveButtonUrl(),tracker:(0,h.S)(l.J.SimilarGames,this.config)})}isRecentBrowser(){var e,t;const r=(0,u.Tb)();return!!((0,o.vU)()&&parseInt((null===(e=r.rawBrowser)||void 0===e?void 0:e.version)||"0")>90)||!!((0,o.i7)()&&parseInt((null===(t=r.rawBrowser)||void 0===t?void 0:t.version)||"0")>90)}createOverlayMessage(){return(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)(d.Z,{id:"error.unity.browserNotSupported",values:{gameName:this.config.gameName}})})}createOverlayMessageForRecentBrowser(){return(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)(d.Z,{id:"error.unity.browserWithoutWebGL",values:{link:(0,p.jsx)("a",{href:"https://get.webgl.org/webgl2/enable.html",target:"_blank",rel:"noopener noreferrer",style:m,children:(0,p.jsx)(d.Z,{id:"error.unity.browserWithoutWebGLLinkLabel"})})}})})}createLeaveButtonMessage(){return(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,{id:"error.generic.playOurOtherCatGames",values:{category:this.config.category}})})}createLeaveButtonUrl(){const e=this.config,t=(0,a.Z)(),r=l.O.UnityUnavailableRedirect;return c.Z.utmUrl(e.categoryLink,t,r)}}const g=(0,i.Z)(x);class v extends n.Component{render(){const{device:e,...t}=this.props;return this.isIE()?null:(0,p.jsx)(g,{...t})}isIE(){const{device:e}=this.props;return e.isIE}}const Z=(0,i.Z)(v)},42669:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(63366),i=r(87462),o=r(47313),s=r(83061),a=r(39028),l=r(21921),c=r(42379),d=r(32772),h=r(28170),u=r(32298);function p(e){return(0,u.Z)("MuiTypography",e)}(0,r(77430).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(46417);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,h.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTypography"}),o=(e=>Z[e]||e)(r.color),c=(0,a.Z)((0,i.Z)({},r,{color:o})),{align:u="inherit",className:y,component:j,gutterBottom:b=!1,noWrap:f=!1,paragraph:w=!1,variant:C="body1",variantMapping:k=v}=c,P=(0,n.Z)(c,x),B=(0,i.Z)({},c,{align:u,color:o,className:y,component:j,gutterBottom:b,noWrap:f,paragraph:w,variant:C,variantMapping:k}),T=j||(w?"p":k[C]||v[C])||"span",S=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:s}=e,a={root:["root",o,"inherit"!==e.align&&`align${(0,h.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,l.Z)(a,p,s)})(B);return(0,m.jsx)(g,(0,i.Z)({as:T,ref:t,ownerState:B,className:(0,s.Z)(S.root,y)},P))}))}}]);