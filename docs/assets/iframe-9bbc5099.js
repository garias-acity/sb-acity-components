import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const E="modulepreload",d=function(i,_){return new URL(i,_).href},m={},r=function(_,n,c){if(!n||n.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${O}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),o)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/stories/Configure.mdx":async()=>r(()=>import("./Configure-3061d330.js"),["./Configure-3061d330.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-e39c668a.js","./index-932496f1.js","./index-d37d4223.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url),"./src/stories/Page.stories.ts":async()=>r(()=>import("./Page.stories-071fb88c.js"),["./Page.stories-071fb88c.js","./_commonjsHelpers-de833af9.js","./index-356e4a49.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./Header-bc81b5da.js","./Button-3638d0c8.js","./Button-bc1a867b.css","./Header-a6911580.css","./Page.stories-ece1482a.css"],import.meta.url),"./src/stories/Mylabel.stories.ts":async()=>r(()=>import("./Mylabel.stories-7a1e1774.js"),["./Mylabel.stories-7a1e1774.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./Mylabel.stories-1ad6a616.css"],import.meta.url),"./src/stories/Header.stories.ts":async()=>r(()=>import("./Header.stories-d02447d0.js"),["./Header.stories-d02447d0.js","./Header-bc81b5da.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./Button-3638d0c8.js","./Button-bc1a867b.css","./Header-a6911580.css"],import.meta.url),"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-885f19a8.js"),["./Button.stories-885f19a8.js","./Button-3638d0c8.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./Button-bc1a867b.css"],import.meta.url),"./src/stories/BoxItem.stories.ts":async()=>r(()=>import("./BoxItem.stories-897df91a.js"),["./BoxItem.stories-897df91a.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./BoxItem.stories-bc375302.css"],import.meta.url)};async function P(i){return f[i]()}const{composeConfigs:T,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([r(()=>import("./config-0c314017.js"),["./config-0c314017.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-063a39db.js","./index-932496f1.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-9ab6d7b3.js"),[],import.meta.url),r(()=>import("./preview-bed967c6.js"),[],import.meta.url),r(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2059b184.js"),[],import.meta.url),r(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b3c37142.js"),[],import.meta.url),r(()=>import("./preview-6751e51d.js"),["./preview-6751e51d.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-21938596.js"),["./preview-21938596.js","./preview-5117c895.css"],import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-9bbc5099.js.map