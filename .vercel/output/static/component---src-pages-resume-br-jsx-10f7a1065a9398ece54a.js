"use strict";(self.webpackChunkSabrinaSS_com=self.webpackChunkSabrinaSS_com||[]).push([[25],{2209:function(e,t,l){l.r(t),l.d(t,{Head:function(){return m}});var n=l(7294),i=l(2059),a=l(3864),r=l(5048),c=l(1400);t.default=()=>n.createElement(n.Fragment,null,n.createElement(a.Z,null),n.createElement(r.Z,{language:c}));const m=e=>{let{location:t}=e;return n.createElement(i.Z,{location:t,title:"Curriculum Vitae - Brazilian"})}},5048:function(e,t,l){var n=l(7294),i=l(5145);const a=e=>e.split(" ")[e.split(" ").length-1],r=e=>{let{language:t}=e;return n.createElement(i.cF,null,n.createElement("h1",null,"Sabrina S. Santos William de Oliveira Alves"),n.createElement("ul",null,n.createElement("li",null,t.status),n.createElement("li",null,t.live),n.createElement("li",null,n.createElement("strong",null,"contato"),"@SabrinaSS.com | ",n.createElement("strong",null,"www"),".SabrinaSS.com"),n.createElement("li",null,n.createElement("strong",null,"github"),".com/johnywalves | ",n.createElement("strong",null,"linkedin"),".com/in/johnywalves")))};t.Z=e=>{let{language:t}=e;return n.createElement(i.yI,null,n.createElement(i.sO,null,n.createElement(r,{language:t}),n.createElement(i.o2,null,n.createElement("hr",null),n.createElement("p",{className:"description"},(e=>{const t=e.split(", ").slice(1).join(", ");return t[0].toUpperCase()+t.slice(1)})(t.description))),n.createElement(i.o2,null,n.createElement("h2",null,t.experience.title," ",n.createElement("small",null,"(",t.mostRecent,")")),n.createElement("hr",null),t.experience.list.slice(0,4).map((e=>{let{date:t,title:l,institution:a,description:r}=e;return n.createElement(i.iA,{key:t},n.createElement(i.EJ,null,n.createElement("h3",null,a,n.createElement("time",null,"• ",t)),n.createElement("h4",null,l)),n.createElement("ul",null,r.map(((e,t)=>n.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})))))}))),n.createElement(i.Ux,null,n.createElement("p",null,"SabrinaSS.com"),n.createElement("p",null,"1/2"))),n.createElement(i.sO,null,n.createElement(i.o2,null,n.createElement("h2",null,t.education.title),n.createElement("hr",null),t.education.list.splice(0,4).map((e=>{let{date:l,title:r,institution:c,details:m,production:o}=e;return n.createElement(i.Xb,{key:l},n.createElement("h3",null,r,n.createElement("time",null," ","•"," ",a(l)>=(new Date).getFullYear()?t.forecastOfCompletionIn:t.finishedIn," ",a(l))," "),n.createElement("p",null,c),m&&m.map((e=>n.createElement("p",null,e))),o&&n.createElement("p",null,o.title))}))),n.createElement(i.o2,null,n.createElement("h2",null,t.skills.title),n.createElement("hr",null),n.createElement("ul",null,t.skills.list.map(((e,l)=>{let{type:a,list:r}=e;return n.createElement("li",{key:l},n.createElement(i.Xb,null,n.createElement("h3",null,a),n.createElement("p",null,r.map((e=>{let{title:t}=e;return t})).slice(0,-1).join(", "),`, ${t.and} `,r.map((e=>{let{title:t}=e;return t})).slice(-1))))})))),n.createElement(i.o2,null,n.createElement("h2",null,t.languages.title),n.createElement("hr",null),n.createElement("ul",null,t.languages.list.map(((e,t)=>{let{name:l,proficiency:i}=e;return n.createElement("li",{key:t},n.createElement("strong",null,l)," • ",i)})))),n.createElement(i.o2,null,n.createElement("h2",null,t.certification.title," ",n.createElement("small",null,"(",t.mostRecent,")")),n.createElement("hr",null),t.certification.list.splice(0,5).map((e=>{let{date:l,name:a,institute:r,time:c}=e;return n.createElement(i.Xb,{key:l},n.createElement("p",null,n.createElement("time",null,new Date(l).getFullYear()," • "),n.createElement("strong",null,a,c>0&&` (${c} ${t.hour})`)," ","| ",r))}))),n.createElement(i.Ux,null,n.createElement("p",null,"SabrinaSS.com"),n.createElement("p",null,"2/2"))))}},5145:function(e,t,l){l.d(t,{EJ:function(){return s},Ux:function(){return r},Xb:function(){return o},cF:function(){return m},iA:function(){return u},o2:function(){return c},sO:function(){return a},yI:function(){return i}});var n=l(5974);const i=n.default.main.withConfig({displayName:"styled__ResumeWrapper",componentId:"sc-8mgkl1-0"})(["width:100%;color:var(--texts);font-size:12px;font-weight:400;font-family:sans-serif;& h1{font-size:16px;font-weight:700;}& h2{font-size:14px;font-weight:700;color:var(--highlight);& small{font-size:10px;color:var(--shadow-colors);}}& h3{font-size:14px;display:flex;align-items:center;vertical-align:middle;& time{font-size:12px;font-weight:400;}}& h4{font-size:12px;font-weight:700;}& img{border-radius:40% 60% 60% 40% / 40% 70% 30% 60%;align-self:center;justify-self:center;}& p,& li{font-weight:400;line-height:140%;& strong{font-weight:700;&.tech{font-weight:500;}}}"]),a=n.default.div.withConfig({displayName:"styled__ResumeSheet",componentId:"sc-8mgkl1-1"})(["height:100vh;background-color:var(--background);padding:32px 48px 0;position:relative;"]),r=n.default.footer.withConfig({displayName:"styled__ResumeFooter",componentId:"sc-8mgkl1-2"})(["position:absolute;padding:0.5rem 0 1rem;bottom:0;width:calc(100% - 96px);border-top:1px solid var(--highlight);display:flex;flex-direction:row;justify-content:space-between;"]),c=n.default.section.withConfig({displayName:"styled__ResumeSection",componentId:"sc-8mgkl1-3"})(["display:flex;flex-direction:column;margin:8px 0 0;& h1{margin:16px 0 0 8px;}& h2{margin:4px 0 0;}& h4{margin:2px 0 0;}label{margin-bottom:4px;margin-left:16px;}& hr{border:none;border-bottom:1px solid var(--highlight);height:1px;width:100%;}& > ul{margin:4px 0;& > li{margin:4px 0 0;& > ul > li{margin:2px 0;}}}& > p{margin:0;&.description{margin-top:12px;text-align:justify;}&.cover{font-size:14px;font-weight:400;text-align:justify;margin-top:16px;&:nth-child(2),&:nth-last-child(2){margin-top:32px;}}}& time{align-items:center;vertical-align:middle;}"]),m=n.default.section.withConfig({displayName:"styled__ResumePerson",componentId:"sc-8mgkl1-4"})(["display:flex;flex-direction:column;align-items:center;margin:0 0 12px;& h1{margin:0 0 12px;}& ul{display:flex;flex-direction:column;align-items:center;& li{margin-top:2px;}}"]),o=n.default.section.withConfig({displayName:"styled__ResumeCourse",componentId:"sc-8mgkl1-5"})(["display:flex;flex-direction:column;justify-content:flex-start;gap:4px;margin:8px 0 0;&:first-of-type{margin-top:12px;}& time{margin-left:2px;}"]),u=n.default.article.withConfig({displayName:"styled__ResumeSubSection",componentId:"sc-8mgkl1-6"})(["margin:0 0 8px;& li{margin:4px 0 0;text-align:justify;}"]),s=n.default.div.withConfig({displayName:"styled__ResumeSubTitle",componentId:"sc-8mgkl1-7"})(["display:flex;flex-direction:column;justify-content:flex-start;flex-wrap:wrap;align-items:flex-start;gap:4px;margin:12px 0 6px;& h3{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;vertical-align:middle;gap:6px;}"])}}]);
//# sourceMappingURL=component---src-pages-resume-br-jsx-10f7a1065a9398ece54a.js.map