import{a as b,r as d,b as y,e as f,f as w,o as u,h as p,i as k,w as S,j as C,k as e,t as n,u as t,l as I,v as T,m as B,F as m,p as V,q as $,s as H,x as M}from"./entry.09808d03.js";const N=l=>(H("data-v-9ab02578"),l=l(),M(),l),D={class:"msg"},F={class:"count"},L={class:"headtitle"},j={class:"input-area"},q={class:"progress"},z=N(()=>e("span",null,"Boxs wrapper max width is:",-1)),E={class:"progress-value"},J={class:"box"},P={__name:"index",setup(l){let c=d("Hello World!"),s=d(9),a=d(80),_=y(()=>`${c.value}~${s.value}`);const v=r=>{c.value=r.target.value},h=()=>{s.value++},x=()=>{s.value>1?s.value--:s.value};return f({title:_,meta:[{hid:"description",name:"description",content:"My custom description"}]}),(r,i)=>{const g=w("el-button");return u(),p(m,null,[k(g,{onClick:i[0]||(i[0]=o=>r.$router.push("three"))},{default:S(()=>[C("Switch To ThreeJs Playground")]),_:1}),e("div",D,"My message to the world is:"+n(t(c)),1),e("div",F,"Let's count:"+n(t(s)),1),e("div",L,"Headtitle is:"+n(t(_)),1),e("div",j,[e("input",{class:"inout",placeholder:"please input msg",type:"text",onInput:v},null,32),e("button",{class:"button",onClick:h},"increase"),e("button",{class:"button",onClick:x},"decrease")]),e("div",q,[z,I(e("input",{min:"0",max:"100",type:"range",name:"progress",id:"my-progress","onUpdate:modelValue":i[1]||(i[1]=o=>B(a)?a.value=o:a=o)},null,512),[[T,t(a)]]),e("div",E,n(t(a))+"%",1)]),e("div",{class:"dynamic-boxs",style:$({"--max-width":`${t(a)}%`})},[(u(!0),p(m,null,V(t(s),o=>(u(),p("div",J,n(o),1))),256))],4)],64)}}},U=b(P,[["__scopeId","data-v-9ab02578"]]);export{U as default};
