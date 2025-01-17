import{f as O,h as z,j as N}from"./chunk-Q3SHZU4Z.mjs";import{$ as S,Fa as se,G as Y,Ga as w,J as ee,O as R,Q as l,T as te,V as H,_ as v,ba as re,ca as ne,da as ae,g as D,ia as B,ja as oe,k as f,l as J,m as K,n as _,o as y,p as C,r as t,s as P,ta as ie,v as X,w as Q}from"./chunk-QQTONVSJ.mjs";import{a as E}from"./chunk-QOU6ONXK.mjs";import"./chunk-JR5VT52U.mjs";import{c as a}from"./chunk-Y5FTINFI.mjs";var V={position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},$={...V,borderRadius:6,background:"rgba(136, 85, 255, 0.3)",color:"#85F",border:"1px dashed #85F",flexDirection:"column"},ge={onClick:{type:l.EventHandler},onMouseEnter:{type:l.EventHandler},onMouseLeave:{type:l.EventHandler}},ye={type:l.Number,title:"Font Size",min:2,max:200,step:1,displayStepper:!0},be={font:{type:l.Boolean,title:"Font",defaultValue:!1,disabledTitle:"Default",enabledTitle:"Custom"},fontFamily:{type:l.String,title:"Family",placeholder:"Inter",hidden:({font:e})=>!e},fontWeight:{type:l.Enum,title:"Weight",options:[100,200,300,400,500,600,700,800,900],optionTitles:["Thin","Extra-light","Light","Regular","Medium","Semi-bold","Bold","Extra-bold","Black"],hidden:({font:e})=>!e}};function j(){return _(()=>R.current()===R.canvas,[])}var ve={borderRadius:{title:"Radius",type:l.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0}};var Se={padding:{type:l.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding"}};function k({type:e,url:r,html:o,style:n={}}){return e==="url"&&r?t(Ve,{url:r,style:n}):e==="html"&&o?t(Me,{html:o,style:n}):t(we,{style:n})}te(k,{type:{type:l.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:l.String,description:"Some websites don\u2019t support embedding.",hidden(e){return e.type!=="url"}},html:{title:"HTML",type:l.String,displayTextArea:!0,hidden(e){return e.type!=="html"}}});function we({style:e}){return t("div",{style:{minHeight:fe(e),...$,overflow:"hidden",...e},children:t("div",{style:U,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function Ve({url:e,style:r}){let o=!r.height;/[a-z]+:\/\//.test(e)||(e="https://"+e);let n=j(),[c,m]=C(n?void 0:!1);if(f(()=>{if(!n)return;let p=!0;m(void 0);async function M(){let u=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(e));if(u.status==200){let{isBlocked:h}=await u.json();p&&m(h)}else{let h=await u.text();console.error(h);let b=new Error("This site can\u2019t be reached.");m(b)}}return M().catch(u=>{console.error(u),m(u)}),()=>{p=!1}},[e]),n&&o)return t(I,{message:"URL embeds do not support auto height.",style:r});if(!e.startsWith("https://"))return t(I,{message:"Unsupported protocol.",style:r});if(c===void 0)return t(Ie,{});if(c instanceof Error)return t(I,{message:c.message,style:r});if(c===!0){let p=`Can\u2019t embed ${e} due to its content security policy.`;return t(I,{message:p,style:r})}return t("iframe",{src:e,style:{...de,...r},loading:"lazy",fetchPriority:n?"low":"auto",referrerPolicy:"no-referrer",sandbox:ke(n)})}var de={width:"100%",height:"100%",border:"none"};function ke(e){let r=["allow-same-origin","allow-scripts"];return e||r.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),r.join(" ")}function Me({html:e,...r}){if(e.includes("<\/script>")){let n=e.includes("</spline-viewer>"),c=e.includes("<!-- framer-direct-embed -->");return n||c?t(Re,{html:e,...r}):t(_e,{html:e,...r})}return t(Ee,{html:e,...r})}function _e({html:e,style:r}){let o=y(),[n,c]=C(0);f(()=>{var u;let h=(u=o.current)===null||u===void 0?void 0:u.contentWindow;function b(T){if(T.source!==h)return;let x=T.data;if(typeof x!="object"||x===null)return;let F=x.embedHeight;typeof F=="number"&&c(F)}return a.addEventListener("message",b),h?.postMessage("getEmbedHeight","*"),()=>{a.removeEventListener("message",b)}},[]);let m=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,p={...de,...r};return!r.height&&(p.height=n+"px"),t("iframe",{ref:o,style:p,srcDoc:m})}function Re({html:e,style:r}){let o=y();return f(()=>{let n=o.current;if(n)return n.innerHTML=e,ue(n),()=>{n.innerHTML=""}},[e]),t("div",{ref:o,style:{...me,...r}})}function Ee({html:e,style:r}){return t("div",{style:{...me,...r},dangerouslySetInnerHTML:{__html:e}})}var me={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function ue(e){if(e instanceof Element&&e.tagName==="SCRIPT"){let r=document.createElement("script");r.text=e.innerHTML;for(let{name:o,value:n}of e.attributes)r.setAttribute(o,n);e.parentElement.replaceChild(r,e)}else for(let r of e.childNodes)ue(r)}function Ie(){return t("div",{className:"framerInternalUI-componentPlaceholder",style:{...V,overflow:"hidden"},children:t("div",{style:U,children:"Loading\u2026"})})}function I({message:e,style:r}){return t("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:fe(r),...V,overflow:"hidden",...r},children:t("div",{style:U,children:e})})}var U={textAlign:"center",minWidth:140};function fe(e){if(!e.height)return 200}var Le=w(k),Te=w(z),Fe=w(N),Ae=w(O),Pe={HqJEVki9J:"(min-width: 1200px)",OoeJrX9y4:"(min-width: 810px) and (max-width: 1199px)",Qt2Ckv5Pk:"(max-width: 809px)"};var pe="framer-ZmLy5",He={HqJEVki9J:"framer-v-9sfllt",OoeJrX9y4:"framer-v-93ei09",Qt2Ckv5Pk:"framer-v-qykw7p"},Z=E(),Be={Desktop:"HqJEVki9J",Phone:"Qt2Ckv5Pk",Tablet:"OoeJrX9y4"},Oe=({height:e,id:r,width:o,...n})=>{var c,m;return{...n,variant:(m=(c=Be[n.variant])!==null&&c!==void 0?c:n.variant)!==null&&m!==void 0?m:"HqJEVki9J"}},ze=D(function(e,r){let{activeLocale:o,setLocale:n}=ee(),{style:c,className:m,layoutId:p,variant:M,...u}=Oe(e);f(()=>{let d=E(void 0,o);if(d.robots){let g=document.querySelector('meta[name="robots"]');g?g.setAttribute("content",d.robots):(g=document.createElement("meta"),g.setAttribute("name","robots"),g.setAttribute("content",d.robots),document.head.appendChild(g))}},[void 0,o]),K(()=>{let d=E(void 0,o);if(document.title=d.title||"",d.viewport){var g;(g=document.querySelector('meta[name="viewport"]'))===null||g===void 0||g.setAttribute("content",d.viewport)}let q=d.bodyClassName;if(q){let A=document.body;A.classList.forEach(W=>W.startsWith("framer-body-")&&A.classList.remove(W)),A.classList.add(`${d.bodyClassName}-framer-ZmLy5`)}return()=>{q&&document.body.classList.remove(`${d.bodyClassName}-framer-ZmLy5`)}},[void 0,o]);let[h,b]=ie(M,Pe,!1),T=void 0,x=y(null),F=Y(),he=J(),G=[];return ne({}),t(ae.Provider,{value:{primaryVariantId:"HqJEVki9J",variantClassNames:He},children:P(Q,{id:p??he,children:[P(X.div,{...u,className:H(pe,...G,"framer-9sfllt",m),ref:r??x,style:{...c},children:[t(v,{children:t(S,{className:"framer-186dhyk-container",children:t(k,{height:"100%",html:`<iframe
    src="https://www.chatbase.co/chatbot-iframe/XAb6DxGN5RqYW7x2NbUAE"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
></iframe>`,id:"kPlHTlCyx",layoutId:"kPlHTlCyx",style:{height:"100%",width:"100%"},type:"html",url:"",width:"100%"})})}),t(v,{height:65,width:"100vw",y:0,children:t(S,{className:"framer-a51dop-container",children:t(B,{breakpoint:h,overrides:{OoeJrX9y4:{variant:"HLGbBmUcg"},Qt2Ckv5Pk:{variant:"HLGbBmUcg"}},children:t(z,{height:"100%",id:"dXP5hxssz",layoutId:"dXP5hxssz",style:{width:"100%"},variant:"Vdk3xYYnn",width:"100%"})})})}),t("div",{className:"framer-ckibbl","data-framer-name":"Fixed",name:"Fixed",children:t(oe,{links:[{href:{webPageId:"augiA20Il"},implicitPathVariables:void 0},{href:{webPageId:"augiA20Il"},implicitPathVariables:void 0},{href:{webPageId:"augiA20Il"},implicitPathVariables:void 0}],children:d=>t(v,{children:t(S,{className:"framer-1q48r41-container",children:t(B,{breakpoint:h,overrides:{OoeJrX9y4:{xVbX6QGDH:d[1]},Qt2Ckv5Pk:{xVbX6QGDH:d[2]}},children:t(N,{height:"100%",id:"RMqvWvvgI",layoutId:"RMqvWvvgI",OGXMNp5Wo:"var(--token-e64503a1-f5d0-4984-b8ac-5de3aa8b6218, rgb(247, 96, 0))",style:{width:"100%"},variant:"YkCubO8VN",width:"100%",xVbX6QGDH:d[0],zY4vmBGp4:"Home"})})})})})}),t(v,{children:t(S,{className:"framer-1ygqr8i-container",layoutScroll:!0,children:t(O,{height:"100%",id:"qBcH2b1oa",layoutId:"qBcH2b1oa",opacity:.05,style:{height:"100%",width:"100%"},width:"100%"})})})]}),t("div",{className:H(pe,...G),id:"overlay"})]})})}),Ne=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",`.${Z.bodyClassName}-framer-ZmLy5 { background: hsl(0, 0%, 0%); }`,".framer-ZmLy5.framer-1f2r54l, .framer-ZmLy5 .framer-1f2r54l { display: block; }",".framer-ZmLy5.framer-9sfllt { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 800px; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",".framer-ZmLy5 .framer-186dhyk-container { flex: none; height: 400px; left: calc(50.00000000000002% - 600px / 2); position: absolute; top: calc(50.00000000000002% - 400px / 2); width: 600px; z-index: 1; }",".framer-ZmLy5 .framer-a51dop-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 3; }",".framer-ZmLy5 .framer-ckibbl { align-content: center; align-items: center; background-color: var(--token-e64503a1-f5d0-4984-b8ac-5de3aa8b6218, #f76000); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px; position: fixed; width: 100%; z-index: 4; }",".framer-ZmLy5 .framer-1q48r41-container { flex: none; height: auto; position: relative; width: 200px; }",".framer-ZmLy5 .framer-1ygqr8i-container { bottom: -4px; flex: none; left: -16px; opacity: 0.2; position: fixed; right: -16px; top: -4px; z-index: 1; }","@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-ZmLy5.framer-9sfllt, .framer-ZmLy5 .framer-ckibbl { gap: 0px; } .framer-ZmLy5.framer-9sfllt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZmLy5.framer-9sfllt > :first-child { margin-top: 0px; } .framer-ZmLy5.framer-9sfllt > :last-child { margin-bottom: 0px; } .framer-ZmLy5 .framer-ckibbl > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-ZmLy5 .framer-ckibbl > :first-child { margin-left: 0px; } .framer-ZmLy5 .framer-ckibbl > :last-child { margin-right: 0px; } }",`@media (min-width: 810px) and (max-width: 1199px) { .${Z.bodyClassName}-framer-ZmLy5 { background: hsl(0, 0%, 0%); } .framer-ZmLy5.framer-9sfllt { width: 810px; }}`,`@media (max-width: 809px) { .${Z.bodyClassName}-framer-ZmLy5 { background: hsl(0, 0%, 0%); } .framer-ZmLy5.framer-9sfllt { width: 390px; } .framer-ZmLy5 .framer-a51dop-container { z-index: 5; }}`],L=re(ze,Ne,"framer-ZmLy5"),qr=L;L.displayName="404";L.defaultProps={height:800,width:1200};se(L,[{explicitInter:!0,fonts:[]},...Le,...Te,...Fe,...Ae],{supportsExplicitInterCodegen:!0});var Wr={exports:{Props:{type:"tsType",annotations:{framerContractVersion:"1"}},default:{type:"reactComponent",name:"FramerfcgX6gjhd",slots:[],annotations:{framerContractVersion:"1",framerDisplayContentsDiv:"false",framerCanvasComponentVariantDetails:'{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OoeJrX9y4":{"layout":["fixed","auto"]},"Qt2Ckv5Pk":{"layout":["fixed","auto"]}}}',framerIntrinsicHeight:"800",framerIntrinsicWidth:"1200",framerResponsiveScreen:"",framerImmutableVariables:"true",framerComponentViewportWidth:"true"}},__FramerMetadata__:{type:"variable"}}};export{Wr as __FramerMetadata__,qr as default};
//# sourceMappingURL=X5itfIXK45sH8gXxFevaxXD1s_TGhsuAmyap-EFLdqw.N2O4DL5O.mjs.map
