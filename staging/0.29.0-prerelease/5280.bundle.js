/*! For license information please see 5280.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_kie_tools_serverless_logic_web_tools=self.webpackChunk_kie_tools_serverless_logic_web_tools||[]).push([[5280],{25280:(e,t,s)=>{s.r(t),s.d(t,{conf:()=>o,language:()=>n});var o={comments:{lineComment:"#"}},n={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}}}]);