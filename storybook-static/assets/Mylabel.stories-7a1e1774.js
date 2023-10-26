import{j as S}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:o,size:g="normal",allCaps:v=!1,color:_="primary",fontColor:x="#000"})=>S.jsx("div",{className:`${g} text-${_} label`,style:{color:x},children:v?o.toLocaleUpperCase():o});try{s.displayName="Mylabel",s.__docgenInfo={description:`AllCaps boolean
color: text-primary... 
font-color?: string`,displayName:"Mylabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:"#000"},description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"example/Mylabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{allCaps:{control:"boolean"},size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps label",allCaps:!0}},r={args:{label:"Secondary label",color:"secondary"}},l={args:{label:"CustomColor label",fontColor:"#f00"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps label',
    allCaps: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'secondary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,C,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor label',
    fontColor: '#f00'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const V=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,V as __namedExportsOrder,M as default};
//# sourceMappingURL=Mylabel.stories-7a1e1774.js.map
