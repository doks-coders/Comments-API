(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{292:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"user-retrieval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-retrieval"}},[t._v("#")]),t._v(" User Retrieval")]),t._v(" "),s("h2",{attrs:{id:"get-the-specific-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-specific-user"}},[t._v("#")]),t._v(" Get the Specific user")]),t._v(" "),s("p",[t._v("The specified endpoint is designed to retrieve a specific user's profile, providing comprehensive details about their activity. By utilizing this endpoint, users can access a lot of information about the individual, including their email, comments, and posts.")]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("ul",[s("li",[t._v("HTTP Method: "),s("code",[t._v("GET")])]),t._v(" "),s("li",[t._v("accept : "),s("code",[t._v("application/json")])]),t._v(" "),s("li",[t._v("Content Type : "),s("code",[t._v("application/json")])]),t._v(" "),s("li",[t._v("URL: "),s("code",[t._v("https://comments-api-production.up.railway.app/users/get-specific-user/{userid}")])])]),t._v(" "),s("h2",{attrs:{id:"params-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params-parameters"}},[t._v("#")]),t._v(" Params Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("userId")])]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("The User Id")])])])]),t._v(" "),s("h2",{attrs:{id:"request-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request example")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" \\ \n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://comments-api-production.up.railway.app/users/get-specific-user/{userId}'")]),t._v(" \\ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept : application/json'")]),t._v(" \\ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type : application/json'")]),t._v(" \\ \n")])])]),s("h2",{attrs:{id:"expected-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expected-responses"}},[t._v("#")]),t._v(" Expected Responses:")]),t._v(" "),s("h3",{attrs:{id:"user-profile-gotten"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-profile-gotten"}},[t._v("#")]),t._v(" User Profile Gotten")]),t._v(" "),s("p",[t._v("Successfully retrieved the user profile")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"responseValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daniel Odokuma"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guonnie@gmail.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-29T17:34:44.860Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-29T17:34:44.860Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allcomments"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v('"My mummy said'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' \n they built the cars"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-30T10:29:34.464Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-30T10:29:34.491Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allitems"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Who Invented the first mirror"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-29T17:36:25.116Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-04-29T17:36:25.116Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h2",{attrs:{id:"other-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-responses"}},[t._v("#")]),t._v(" Other Responses:")]),t._v(" "),s("h3",{attrs:{id:"user-cannot-be-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-cannot-be-found"}},[t._v("#")]),t._v(" User Cannot be Found")]),t._v(" "),s("p",[t._v("This user cannot be found on the database")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This user cannot be found"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not found"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h2",{attrs:{id:"playground"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playground"}},[t._v("#")]),t._v(" Playground")]),t._v(" "),s("VuepressApiPlayground",{attrs:{url:"https://comments-api-production.up.railway.app/users/get-specific-user/{userId}",showURL:!0,showMethod:!0,method:"get",headers:{accept:"application/json","Content-Type":"application/json"},body:[],params:[{name:"userId",value:"1",type:"number"}],query:[]}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);