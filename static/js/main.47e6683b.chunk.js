(this["webpackJsonp20-my-professional-react-portfolio"]=this["webpackJsonp20-my-professional-react-portfolio"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(6),s=c.n(r),a=(c(11),c(2)),l=(c(12),c(0));var j=function(e){var t=e.aboutSelected,c=e.setAboutSelected,n=e.contactSelected,i=e.setContactSelected,r=e.portfolioSelected,s=e.setPortfolioSelected,a=e.resumeSelected,j=e.setResumeSelected;return Object(l.jsxs)("header",{className:"flex-row px-1 bannerBG bannerContainer",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{children:[Object(l.jsxs)("span",{role:"img","aria-label":"portfolio",children:[" ","\ud83d\udcc1"]})," ","James Canlas Jr"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(!0),i(!1),s(!1),j(!1)},children:"About Me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(r&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(!1),i(!1),s(!0),j(!1)},children:"Portfolio"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(!1),i(!0),s(!1),j(!1)},children:"Contact"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(!1),i(!1),s(!1),j(!0)},children:"Resume"})})]})})]})};var o=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"About Me?"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"Will eventually fill out about me.(In progress)"})})]})};var b=function(){return Object(l.jsxs)("section",{id:"resume",children:[Object(l.jsx)("h1",{children:"RESUME"}),Object(l.jsx)("h2",{children:"Links"}),Object(l.jsx)("a",{href:"https://docs.google.com/document/d/1l755J1tcfGE07MHBPLrP0dqeLAWNfwU8UNCIAvvRwhA/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"Resume Link"}),Object(l.jsx)("h2",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"javaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responisive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h2",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySql, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"})]})]})},d=c(3),h=c(5);var m=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(a.a)(e,2),c=t[0],i=t[1],r=c.name,s=c.email,j=c.message,o=Object(n.useState)(""),b=Object(a.a)(o,2),m=b[0],O=b[1];function A(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),O(t?"":"Your email is invalid.")}else e.target.name,e.target.value.length?O(""):O("".concat(e.target.name," is required."));m||i(Object(h.a)(Object(h.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:r,onBlur:A})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:s,onBlur:A})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:A})]}),m&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:m})}),Object(l.jsx)("button",{type:"submit",onSubmit:function(e){e.preventDefault(),console.log(c)},children:"Submit"})]})]})};var O=function(){var e=Object(n.useState)([{name:"The Bloc(complete overhaul of Bloc)",deployedLink:"https://the-bloc.herokuapp.com/",githubLink:"https://github.com/jmrendon48/bloc-2.0",imgId:0},{name:"Bloc",deployedLink:"https://the-bloc.herokuapp.com/",githubLink:"https://github.com/jcc83267/Hrd-Cpy",imgId:1},{name:"Budget Tracker",deployedLink:"https://jcc83267-budget-tracker.herokuapp.com/",githubLink:"https://github.com/jcc83267/19-Budget-Tracker",imgId:2},{name:"Event Planner",deployedLink:"https://jcc83267.github.io/Event-Planner/",githubLink:"",imgId:3},{name:"Weather Dashboard",deployedLink:"https://jcc83267.github.io/06-Weather-Dashboard/",githubLink:"https://github.com/jcc83267/06-Weather-Dashboard",imgId:4},{name:"Work Day Scheduler",deployedLink:"https://jcc83267.github.io/05-Work-Day-Scheduler/",githubLink:"https://github.com/jcc83267/05-Work-Day-Scheduler",imgId:5},{name:"Runbuddy",deployedLink:"https://the-bloc.herokuapp.com/",githubLink:"https://jcc83267.github.io/run-buddy/",imgId:6}]),t=Object(a.a)(e,1)[0],c=t.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsxs)("span",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("a",{href:"".concat(e.deployedLink),target:"_blank",rel:"noreferrer",children:"Deployed link"}),Object(l.jsx)("a",{href:e.githubLink,target:"_blank",rel:"noreferrer",children:"github link"})]}),Object(l.jsx)("div",{className:"project".concat(t," divBG")}),Object(l.jsx)("br",{})]})}));return console.log(t[1].name),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("div",{className:"portfolioBox",children:c})]})};var A=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(!1),s=Object(a.a)(r,2),d=s[0],h=s[1],A=Object(n.useState)(!1),u=Object(a.a)(A,2),g=u[0],x=u[1],p=Object(n.useState)(!1),f=Object(a.a)(p,2),v=f[0],k=f[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{aboutSelected:c,setAboutSelected:i,contactSelected:d,setContactSelected:h,portfolioSelected:g,setPortfolioSelected:x,resumeSelected:v,setResumeSelected:k}),Object(l.jsxs)("main",{children:[c?Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(o,{})," "]}):Object(l.jsx)(l.Fragment,{children:" "}),g?Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(O,{})," "]}):Object(l.jsx)(l.Fragment,{children:" "}),d?Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(m,{})," "]}):Object(l.jsx)(l.Fragment,{children:" "}),v?Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(b,{})," "]}):Object(l.jsx)(l.Fragment,{children:" "})]}),Object(l.jsx)("footer",{className:"App",style:{textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"20px",height:"75px",width:"100%"},children:Object(l.jsxs)("span",{children:[Object(l.jsx)("a",{href:"https://github.com/jcc83267",className:"icons",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Github icon with link"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/james-canlas-426728b7/",className:"icons",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII=",alt:"linkedin icon with link"})}),Object(l.jsx)("a",{href:"https://stackoverflow.com/users/15820853/jcc83267",className:"icons",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAMAAAD0W0NJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF/3IA/5ZB/////86m/+fU//Pp/7d8/9u+AtmlhgAAAh5JREFUeNrsmMGSwiAQRJ0Bhv//41WjMQlDEq116LL6Hffgvhq6gXC5EEIIIYQQQgghhBDyISkBy0lWFVy7oqoF1S/pnQy7sBMGPLsbkMs7T08L5Oq+xlcR/ezlx/gxfowfdPxse8RCxU+aKSHF735F2aQMKH6PlUyY8atPjYwYv8WYVgXBiN/CYrOOGPGbiuGJYMTvdUHeFqRgxK8u/TLe7mdLv0VBUHY/6xSkgux+vYIUlMPXL4j4pYEpCM7h6xekwtz9/IIU9Q9lkIKMiV9OcrIgI+J3m0mV3QvMvJoD4jeNKcupgoTHbw5UsRNXrPlPWcI3uUbQKYjFVmM9oebftgWpocVIumFT47YgJWxhr2jLusZNQST0yLUjwf43SNTDRSuYrVeQAcet5VZwWeM8+i4v+4Jp+F1AqhPCucbmfJ5HC6YdQQG457mCjxrfCjL+hdSt8SSYId5vj/aZ8YIH+8xwvH0m/PPR5J19Jrq191u8iZyrcfzwnrGqnTGuBMO3vNV0SnId5xrHn7XtBpIdx4dg/HmhPtfPXmlqHH8VEO2ziaPUAbdQPaATxxHPZF3yMEexWvSc46gpytXxhN/Y52RLeT+FcbvIjmN3qevZH/me3l4cDUSvE0cB0nPieEHTWzkWTL1nHBOw3r//yE/o6RtQj3rUox71eKhRj3rUo95XHvM+hHrUox71qEcIIYQQQgghhBBCCPlN/gQYAGR+G2jYjqfiAAAAAElFTkSuQmCC",alt:"Stackoverflow icon with link"})})]})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.47e6683b.chunk.js.map