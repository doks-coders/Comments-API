(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{292:function(t,s,e){"use strict";e.r(s);var a=e(14),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"remove-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-item"}},[t._v("#")]),t._v(" Remove Item")]),t._v(" "),s("h2",{attrs:{id:"deleting-a-specific-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-specific-item"}},[t._v("#")]),t._v(" Deleting a Specific Item")]),t._v(" "),s("p",[t._v("The designated endpoint is intended for deleting specific items from the database,\nproviding a powerful tool for platform owners and administrators to maintain the integrity and relevance of their platform's content. This endpoint enables authorized users to remove items that are no longer relevant, outdated,\nor inappropriate, ensuring that their platform's content remains current and high-quality.")]),t._v(" "),s("p",[t._v("To use this endpoint, users can send a DELETE request with the item's unique identifier,\nwhich the API will then verify and delete from the platform's database. The endpoint is\ndesigned to be highly secure, requiring appropriate authorization and authentication to\nensure that only authorized users have the ability to delete items from the database.")]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("ul",[s("li",[t._v("HTTP Method: "),s("code",[t._v("DELETE")])]),t._v(" "),s("li",[t._v("accept : "),s("code",[t._v("application/json")])]),t._v(" "),s("li",[t._v("Content Type : "),s("code",[t._v("application/json")])]),t._v(" "),s("li",[t._v("Authorization : "),s("code",[t._v("bearer userjwt")])]),t._v(" "),s("li",[t._v("URL: "),s("code",[t._v("https://comments-api-production.up.railway.app/items/delete-item/{itemid}")])])]),t._v(" "),s("h2",{attrs:{id:"params-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params-parameters"}},[t._v("#")]),t._v(" Params Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("itemId")])]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("This is the id of the item")])])])]),t._v(" "),s("h2",{attrs:{id:"request-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-example"}},[t._v("#")]),t._v(" Request example")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" \\ \n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://comments-api-production.up.railway.app/items/delete-item/{itemId}'")]),t._v(" \\ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept : application/json'")]),t._v(" \\ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type : application/json'")]),t._v(" \\ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization : bearer userjwt'")]),t._v(" \\ \n")])])]),s("h2",{attrs:{id:"expected-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expected-responses"}},[t._v("#")]),t._v(" Expected Responses:")]),t._v(" "),s("h3",{attrs:{id:"item-deleted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-deleted"}},[t._v("#")]),t._v(" Item Deleted")]),t._v(" "),s("p",[t._v("You have successfully deleted the item")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"responseValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deleted Successfully"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h2",{attrs:{id:"other-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-responses"}},[t._v("#")]),t._v(" Other Responses:")]),t._v(" "),s("h3",{attrs:{id:"unauthorised-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unauthorised-access"}},[t._v("#")]),t._v(" Unauthorised Access")]),t._v(" "),s("p",[t._v("this jwt is invalid")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h3",{attrs:{id:"missing-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missing-item"}},[t._v("#")]),t._v(" Missing Item")]),t._v(" "),s("p",[t._v("This Item cannot be found")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This resource cannot be found"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not found"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h3",{attrs:{id:"unauthorised-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unauthorised-user"}},[t._v("#")]),t._v(" Unauthorised User")]),t._v(" "),s("p",[t._v("this email is not associated with this account")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your email is not associated with this resource"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n")])])]),s("h2",{attrs:{id:"playground"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playground"}},[t._v("#")]),t._v(" Playground")]),t._v(" "),s("VuepressApiPlayground",{attrs:{url:"https://comments-api-production.up.railway.app/items/delete-item/{itemId}",showURL:!0,showMethod:!0,method:"delete",headers:{accept:"application/json","Content-Type":"application/json",Authorization:"Bearer userJWT"},body:[],params:[{name:"itemId",value:"1",type:"number"}],query:[]}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);