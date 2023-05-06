(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"item-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-creation"}},[t._v("#")]),t._v(" Item Creation")]),t._v(" "),a("h2",{attrs:{id:"create-an-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-item"}},[t._v("#")]),t._v(" Create an item")]),t._v(" "),a("p",[t._v("The designated endpoint is specifically intended for the creation of items that can be commented on by users. This endpoint enables platform owners and administrators to easily add new items to their platform, such as articles, products, or posts, and allow users to provide comments and feedback. To utilize this endpoint, users can send a POST request with the name of the item they wish to create,  The API will then validate the request and add the item to the platform, assigning it a unique identifier that can be used to retrieve the item's details.")]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("ul",[a("li",[t._v("HTTP Method: "),a("code",[t._v("POST")])]),t._v(" "),a("li",[t._v("accept : "),a("code",[t._v("application/json")])]),t._v(" "),a("li",[t._v("Content Type : "),a("code",[t._v("application/json")])]),t._v(" "),a("li",[t._v("Authorization : "),a("code",[t._v("bearer userjwt")])]),t._v(" "),a("li",[t._v("URL: "),a("code",[t._v("https://comments-api-production.up.railway.app/items/create-item")])])]),t._v(" "),a("h2",{attrs:{id:"body-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-parameters"}},[t._v("#")]),t._v(" Body Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("The name of the item entering the database")])])])]),t._v(" "),a("h2",{attrs:{id:"request-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" \\ \n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://comments-api-production.up.railway.app/items/create-item'")]),t._v(" \\ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept : application/json'")]),t._v(" \\ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type : application/json'")]),t._v(" \\ \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization : bearer userjwt'")]),t._v(" \\ \n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d  '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Konoha Headband"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("' \n")])])]),a("h2",{attrs:{id:"expected-responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expected-responses"}},[t._v("#")]),t._v(" Expected Responses:")]),t._v(" "),a("h3",{attrs:{id:"item-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-created"}},[t._v("#")]),t._v(" Item Created")]),t._v(" "),a("p",[t._v("You have successfully created an item")]),t._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"responseValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Item Created Successfully"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"itemId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),a("h2",{attrs:{id:"other-responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-responses"}},[t._v("#")]),t._v(" Other Responses:")]),t._v(" "),a("h3",{attrs:{id:"unauthorised-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unauthorised-access"}},[t._v("#")]),t._v(" Unauthorised Access")]),t._v(" "),a("p",[t._v("You are not allowed to create an item")]),t._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),a("h2",{attrs:{id:"playground"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playground"}},[t._v("#")]),t._v(" Playground")]),t._v(" "),a("VuepressApiPlayground",{attrs:{url:"https://comments-api-production.up.railway.app/items/create-item",showURL:!0,showMethod:!0,method:"post",headers:{accept:"application/json","Content-Type":"application/json",Authorization:"Bearer userJWT"},body:[{name:"name",value:"Konoha Headband",type:"string"}],params:[],query:[]}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);