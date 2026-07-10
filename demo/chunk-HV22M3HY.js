import{a as _}from"./chunk-SG5BLIT7.js";import{a as H}from"./chunk-2PXTOGLG.js";import"./chunk-2A7FGDUN.js";import{a as K}from"./chunk-PXUBA2CG.js";import"./chunk-KCF4DK7K.js";import{a as w,b as I}from"./chunk-56ZJUJYJ.js";import"./chunk-53WNKIOE.js";import"./chunk-HNOXVDUQ.js";import"./chunk-XWM6OXBC.js";import"./chunk-CVTLYADI.js";import"./chunk-DIPWT75C.js";import"./chunk-FTL6NDCY.js";import{Ab as m,Bb as h,Eb as v,Fb as x,Gb as c,Hb as o,Ib as s,Jb as r,Za as n,Zb as u,kc as d,lc as M,mb as b,uc as f}from"./chunk-47HMMRUW.js";import"./chunk-F5DYP4RK.js";var y={pipes:[{name:"GistFilePipe",id:"pipe-GistFilePipe-e943cd33ea18ea65dc3111664e7791d09847b0be06621fc0e9afaa38cdb48a2b5dc72ac93914198e0ccffc216d9191a0eaf5ea5836b7b00b34f8378d4aee6e95",file:"extras/src/gist.ts",type:"pipe",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,properties:[],methods:[{name:"transform",coverageIgnore:!1,args:[{name:"gist",type:"Gist | null",optional:!0,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""},{name:"fileName",type:"string | null",optional:!0,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"GistFile | undefined",typeParameters:[],line:8,deprecated:!1,deprecationMessage:"",rawdescription:`
`,description:"",jsdoctags:[{name:"gist",type:"Gist | null",optional:!0,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"fileName",type:"string | null",optional:!0,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],standalone:!1,ngname:"gistFile",relationships:{incoming:[],outgoing:[]}}],interfaces:[{name:"ChangeStatus",id:"interface-ChangeStatus-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"ChangeStatus",properties:[{name:"additions",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:72,rawdescription:`
`},{name:"deletions",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:73,rawdescription:`
`},{name:"total",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:71,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"Files",id:"interface-Files-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"Files",properties:[],indexSignatures:[{id:"index-declaration-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",args:[{name:"fileName",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],returnType:"GistFile",line:94,deprecated:!1,deprecationMessage:"",rawdescription:`
`,description:""}],kind:182,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"Gist",id:"interface-Gist-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"Gist",properties:[{name:"comments",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:112,rawdescription:`
`},{name:"comments_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:114,rawdescription:`
`},{name:"commits_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:101,rawdescription:`
`},{name:"created_at",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Date",indexKey:"",optional:!1,description:"",line:109,rawdescription:`
`},{name:"description",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:111,rawdescription:`
`},{name:"files",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Files",indexKey:"",optional:!1,description:"",line:107,rawdescription:`
`},{name:"forks",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"any[]",indexKey:"",optional:!1,description:"",line:116,rawdescription:`
`},{name:"forks_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:100,rawdescription:`
`},{name:"git_pull_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:104,rawdescription:`
`},{name:"git_push_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:105,rawdescription:`
`},{name:"history",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"History[]",indexKey:"",optional:!1,description:"",line:117,rawdescription:`
`},{name:"html_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:106,rawdescription:`
`},{name:"id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:102,rawdescription:`
`},{name:"node_id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:103,rawdescription:`
`},{name:"owner",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Owner",indexKey:"",optional:!1,description:"",line:115,rawdescription:`
`},{name:"public",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:108,rawdescription:`
`},{name:"truncated",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:118,rawdescription:`
`},{name:"updated_at",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Date",indexKey:"",optional:!1,description:"",line:110,rawdescription:`
`},{name:"url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:99,rawdescription:`
`},{name:"user",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!0,description:"",line:113,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"GistFile",id:"interface-GistFile-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"GistFile",properties:[{name:"content",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:91,rawdescription:`
`},{name:"filename",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:85,rawdescription:`
`},{name:"language",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:87,rawdescription:`
`},{name:"raw_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:88,rawdescription:`
`},{name:"size",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:89,rawdescription:`
`},{name:"truncated",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:90,rawdescription:`
`},{name:"type",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:86,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"GistOptions",id:"interface-GistOptions-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"GistOptions",properties:[{name:"clientId",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:10,rawdescription:`
`},{name:"clientSecret",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:11,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"HighlightJSOptions",id:"interface-HighlightJSOptions-a8576e1b98801dce4c7d719cf982fa239e4b03066304d208e4c64b1257762543db8f3cfd4c15066defefaf5bc9ba34ea8a17bf064f92515b6bab45f43903f006",file:"src/lib/highlight.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"HighlightJSOptions",properties:[{name:"coreLibraryLoader",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"function",indexKey:"",optional:!0,description:"",line:17,rawdescription:`
`},{name:"fullLibraryLoader",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"function",indexKey:"",optional:!0,description:"",line:18,rawdescription:`
`},{name:"highlightOptions",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Partial<HLJSOptions>",indexKey:"",optional:!0,description:"",line:14,rawdescription:`
`},{name:"languages",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Record<string, () => Promise<LanguageFn>>",indexKey:"",optional:!0,description:"",line:16,rawdescription:`
`},{name:"lineNumbersLoader",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"function",indexKey:"",optional:!0,description:"",line:19,rawdescription:`
`},{name:"lineNumbersOptions",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"LineNumbersOptions",indexKey:"",optional:!0,description:"",line:15,rawdescription:`
`},{name:"themePath",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:"",line:20,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"History",id:"interface-History-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"History",properties:[{name:"change_status",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"ChangeStatus",indexKey:"",optional:!1,description:"",line:80,rawdescription:`
`},{name:"committed_at",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Date",indexKey:"",optional:!1,description:"",line:79,rawdescription:`
`},{name:"url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:81,rawdescription:`
`},{name:"user",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"User",indexKey:"",optional:!1,description:"",line:77,rawdescription:`
`},{name:"version",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:78,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"LineNumbersOptions",id:"interface-LineNumbersOptions-a8576e1b98801dce4c7d719cf982fa239e4b03066304d208e4c64b1257762543db8f3cfd4c15066defefaf5bc9ba34ea8a17bf064f92515b6bab45f43903f006",file:"src/lib/highlight.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"LineNumbersOptions",properties:[{name:"singleLine",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!0,description:"",line:10,rawdescription:`
`},{name:"startFrom",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!0,description:"",line:9,rawdescription:`
`}],indexSignatures:[],kind:172,description:`<p>Full documentation is available here <a href="https://highlightjs.readthedocs.io/en/latest/api.html">https://highlightjs.readthedocs.io/en/latest/api.html</a></p>
`,rawdescription:`

Full documentation is available here https://highlightjs.readthedocs.io/en/latest/api.html
`,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"Owner",id:"interface-Owner-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"Owner",properties:[{name:"avatar_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:32,rawdescription:`
`},{name:"events_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:43,rawdescription:`
`},{name:"followers_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:36,rawdescription:`
`},{name:"following_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:37,rawdescription:`
`},{name:"gists_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:38,rawdescription:`
`},{name:"gravatar_id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:33,rawdescription:`
`},{name:"html_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:35,rawdescription:`
`},{name:"id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:30,rawdescription:`
`},{name:"login",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:29,rawdescription:`
`},{name:"node_id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:31,rawdescription:`
`},{name:"organizations_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:41,rawdescription:`
`},{name:"received_events_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:44,rawdescription:`
`},{name:"repos_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:42,rawdescription:`
`},{name:"site_admin",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:46,rawdescription:`
`},{name:"starred_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:39,rawdescription:`
`},{name:"subscriptions_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:40,rawdescription:`
`},{name:"type",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:45,rawdescription:`
`},{name:"url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:34,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}},{name:"User",id:"interface-User-471a6072f6f55d3a8b5e033f233112be076f90933e804904563a8141b62520944cd979d7468c58f4846266ddd2ac6938351172e3b0cc8f95e8bf77e1231c23f6",file:"extras/src/gist.model.ts",deprecated:!1,deprecationMessage:"",type:"interface",displayName:"User",properties:[{name:"avatar_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:53,rawdescription:`
`},{name:"events_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:64,rawdescription:`
`},{name:"followers_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:57,rawdescription:`
`},{name:"following_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:58,rawdescription:`
`},{name:"gists_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:59,rawdescription:`
`},{name:"gravatar_id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:54,rawdescription:`
`},{name:"html_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:56,rawdescription:`
`},{name:"id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:51,rawdescription:`
`},{name:"login",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:50,rawdescription:`
`},{name:"node_id",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:52,rawdescription:`
`},{name:"organizations_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:62,rawdescription:`
`},{name:"received_events_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:65,rawdescription:`
`},{name:"repos_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:63,rawdescription:`
`},{name:"site_admin",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:67,rawdescription:`
`},{name:"starred_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:60,rawdescription:`
`},{name:"subscriptions_url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:61,rawdescription:`
`},{name:"type",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:66,rawdescription:`
`},{name:"url",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:55,rawdescription:`
`}],indexSignatures:[],kind:172,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}}],injectables:[{name:"HighlightJS",id:"injectable-HighlightJS-083aa106e1d9ea667b56977793e1d3616956e8dcde3b0751110814d6269cd188aa3764d3271e4463af9d0112a3072b2b309f60cc91313e24a6b97506953e4c99",file:"src/lib/highlight.service.ts",coverageIgnore:!1,properties:[{name:"hljs",coverageIgnore:!1,defaultValue:"this.loader.hljs.value",deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:"",line:12,rawdescription:`
`,modifierKind:[148]}],methods:[],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,extends:[],providedIn:"root",type:"injectable",relationships:{incoming:[],outgoing:[]}},{name:"HighlightLoader",id:"injectable-HighlightLoader-568e1cd7f7499591651501145fb2ecb2b771aa9daf72161f4e766f4fb7137138147c79065a3bc44f5e4af5adbb75435af2e71022c601487ed52c65cdfeaf8929",file:"src/lib/highlight.loader.ts",coverageIgnore:!1,properties:[{name:"hljs",coverageIgnore:!1,defaultValue:`resource({
        loader: () => this.loadLibrary()
            .then(async hljs => {
                if (this.options?.lineNumbersLoader) {
                    const plugin = await this.options.lineNumbersLoader();
                    (hljs as any).lineNumbersBlock = plugin.activateLineNumbers(this.document)
                }

                hljs.configure({
                    __emitter: TokenTreeEmitter
                })

                if (this.options?.highlightOptions)
                    hljs.configure(this.options.highlightOptions)

                return hljs
            })
            .finally(this._t)
    }).asReadonly()`,deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:"",line:17,rawdescription:`
`,modifierKind:[148]}],methods:[{name:"setTheme",coverageIgnore:!1,args:[{name:"path",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:84,deprecated:!1,deprecationMessage:"",rawdescription:`

Reload theme styles
`,description:`<p>Reload theme styles</p>
`,jsdoctags:[{name:"path",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:37,rawdescription:`
`},extends:[],providedIn:"root",type:"injectable",relationships:{incoming:[],outgoing:[]}},{name:"HighlightLoaderStub",id:"injectable-HighlightLoaderStub-c9a63001c98f69e8e0a29b16dcffddabee53b89db80c3e94c73296125a7821930ba258b276f67135571099e5f27131d3c89208ace511ea2bedb161c9a6884871",file:"src/test-helpers.ts",coverageIgnore:!1,properties:[{name:"hljs",coverageIgnore:!1,defaultValue:`resource({\r
        loader: () => this.ready\r
    }).asReadonly()`,deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:"",line:18,rawdescription:`
`,modifierKind:[148]},{name:"ready",coverageIgnore:!1,defaultValue:`new Promise<HLJSApi>((resolve) => {\r
        (hljs as any).lineNumbersBlock = activateLineNumbers(document)\r
        resolve(hljs)\r
    })`,deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:"",line:13,rawdescription:`
`}],methods:[],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,extends:[],providedIn:"root",type:"injectable",relationships:{incoming:[],outgoing:[]}}],guards:[],interceptors:[],classes:[],directives:[{name:"HighlightAutoDirective",id:"directive-HighlightAutoDirective-1ae948816a7d8a8df64defd41f6e587026a7d67922426e4506a492a3cf9309a1464edba598c4a814e627008539d6ffc63b01ac0f8abfc82acd521d0730c4f583",file:"src/lib/highlight-auto.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtHighlightAuto]",providers:[{name:"HighlightAutoDirective",type:"directive"}],hostDirectives:[],standalone:!1,inputsClass:[{name:"nxtHighlightAuto",coverageIgnore:!1,defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:`<p>Code to highlight</p>
`,line:22,rawdescription:`

Code to highlight
`,modifierKind:[148],required:!1},{name:"languages",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string[]",indexKey:"",optional:!1,description:`<p>An optional array of language names and aliases restricting detection to only those languages</p>
<p>The subset can also be set with configure, but the local parameter overrides the option if set.</p>
`,line:34,rawdescription:`

An optional array of language names and aliases restricting detection to only those languages

The subset can also be set with configure, but the local parameter overrides the option if set.
`,modifierKind:[148],required:!1}],outputsClass:[{name:"highlighted",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"AutoHighlightResult",indexKey:"",optional:!1,description:`<p>Stream that emits when code string is highlighted</p>
`,line:39,rawdescription:`

Stream that emits when code string is highlighted
`,modifierKind:[148],required:!1}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"highlightResult",coverageIgnore:!1,defaultValue:"signal<AutoHighlightResult | undefined>(undefined)",deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:`<p>Highlighted result</p>
`,line:27,rawdescription:`

Highlighted result
`,modifierKind:[148],inheritance:{file:"HighlightBase"}},{name:"code",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"InputSignal<string | undefined>",indexKey:"",optional:!1,description:`<p>Code to highlight</p>
`,line:27,rawdescription:`

Code to highlight
`,modifierKind:[128,148],inheritance:{file:"HighlightBase"}},{name:"highlighted",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"OutputEmitterRef<HighlightResult | AutoHighlightResult | undefined>",indexKey:"",optional:!1,description:`<p>Stream that emits when code string is highlighted</p>
`,line:37,rawdescription:`

Stream that emits when code string is highlighted
`,modifierKind:[128,148],inheritance:{file:"HighlightBase"}},{name:"hljs",coverageIgnore:!1,defaultValue:"inject(HighlightJS)",deprecated:!1,deprecationMessage:"",type:"HighlightJS",indexKey:"",optional:!1,description:"",line:19,rawdescription:`
`,modifierKind:[124,148],inheritance:{file:"HighlightBase"}}],methodsClass:[{name:"highlightElement",coverageIgnore:!1,args:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"any",typeParameters:[],line:41,deprecated:!1,deprecationMessage:"",rawdescription:`
`,description:"",modifierKind:[124],jsdoctags:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"HighlightBase"}}],coverageIgnore:!1,extends:["HighlightBase"],relationships:{incoming:[],outgoing:[{name:"HighlightBase",type:"directive"}]}},{name:"HighlightBase",id:"directive-HighlightBase-df840e5d216ba0295b8c2e7f6d30b2301529e1fade87a58a30d8edb012081aa79f2fe6eb611f36f90f6e05d0c055af79cbc75047f35f8907ae795b920d9628e1",file:"src/lib/highlight-base.directive.ts",type:"directive",description:"",rawdescription:`
`,providers:[],hostDirectives:[],standalone:!1,inputsClass:[],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"code",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"InputSignal<string | undefined>",indexKey:"",optional:!1,description:`<p>Code to highlight</p>
`,line:27,rawdescription:`

Code to highlight
`,modifierKind:[128,148]},{name:"highlighted",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"OutputEmitterRef<HighlightResult | AutoHighlightResult | undefined>",indexKey:"",optional:!1,description:`<p>Stream that emits when code string is highlighted</p>
`,line:37,rawdescription:`

Stream that emits when code string is highlighted
`,modifierKind:[128,148]},{name:"highlightResult",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"WritableSignal<HighlightResult | AutoHighlightResult | undefined>",indexKey:"",optional:!1,description:`<p>Highlighted result</p>
`,line:32,rawdescription:`

Highlighted result
`,modifierKind:[128,148]},{name:"hljs",coverageIgnore:!1,defaultValue:"inject(HighlightJS)",deprecated:!1,deprecationMessage:"",type:"HighlightJS",indexKey:"",optional:!1,description:"",line:19,rawdescription:`
`,modifierKind:[124,148]}],methodsClass:[{name:"highlightElement",coverageIgnore:!1,args:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"HighlightResult | AutoHighlightResult | undefined",typeParameters:[],line:56,deprecated:!1,deprecationMessage:"",rawdescription:`
`,description:"",modifierKind:[124,128],jsdoctags:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],coverageIgnore:!1,extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:37,rawdescription:`
`},relationships:{incoming:[{name:"HighlightAutoDirective",type:"directive"},{name:"HighlightDirective",type:"directive"}],outgoing:[]}},{name:"HighlightDirective",id:"directive-HighlightDirective-8575170a9665974d3b46d55a73ec452e2d642ea619e90debbe0a4b2c4da89131aaba1029c6b914dcab6e406d737b37fb3991cc662dd81d36a0b0ba8ce1155819",file:"src/lib/highlight.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtHighlight]",providers:[{name:"HighlightDirective",type:"directive"}],hostDirectives:[],standalone:!1,inputsClass:[{name:"nxtHighlight",coverageIgnore:!1,defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:`<p>Code to highlight</p>
`,line:23,rawdescription:`

Code to highlight
`,modifierKind:[148],required:!1},{name:"ignoreIllegals",coverageIgnore:!1,defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>An optional flag, when set to true it forces highlighting to finish even in case of detecting
illegal syntax for the language instead of throwing an exception</p>
`,line:39,rawdescription:`

An optional flag, when set to true it forces highlighting to finish even in case of detecting
illegal syntax for the language instead of throwing an exception
`,modifierKind:[148],required:!1},{name:"language",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:`<p>The language name highlight only one language</p>
`,line:33,rawdescription:`

The language name highlight only one language
`,modifierKind:[148],required:!0}],outputsClass:[{name:"highlighted",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"HighlightResult",indexKey:"",optional:!1,description:`<p>Stream that emits when code string is highlighted</p>
`,line:46,rawdescription:`

Stream that emits when code string is highlighted
`,modifierKind:[148],required:!1}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"highlightResult",coverageIgnore:!1,defaultValue:"signal<HighlightResult | undefined>(undefined)",deprecated:!1,deprecationMessage:"",type:"unknown",indexKey:"",optional:!1,description:`<p>Highlighted result</p>
`,line:28,rawdescription:`

Highlighted result
`,modifierKind:[148],inheritance:{file:"HighlightBase"}},{name:"code",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"InputSignal<string | undefined>",indexKey:"",optional:!1,description:`<p>Code to highlight</p>
`,line:27,rawdescription:`

Code to highlight
`,modifierKind:[128,148],inheritance:{file:"HighlightBase"}},{name:"highlighted",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"OutputEmitterRef<HighlightResult | AutoHighlightResult | undefined>",indexKey:"",optional:!1,description:`<p>Stream that emits when code string is highlighted</p>
`,line:37,rawdescription:`

Stream that emits when code string is highlighted
`,modifierKind:[128,148],inheritance:{file:"HighlightBase"}},{name:"hljs",coverageIgnore:!1,defaultValue:"inject(HighlightJS)",deprecated:!1,deprecationMessage:"",type:"HighlightJS",indexKey:"",optional:!1,description:"",line:19,rawdescription:`
`,modifierKind:[124,148],inheritance:{file:"HighlightBase"}}],methodsClass:[{name:"highlightElement",coverageIgnore:!1,args:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"any",typeParameters:[],line:48,deprecated:!1,deprecationMessage:"",rawdescription:`
`,description:"",jsdoctags:[{name:"code",type:"string",optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"HighlightBase"}}],coverageIgnore:!1,extends:["HighlightBase"],relationships:{incoming:[],outgoing:[{name:"HighlightBase",type:"directive"}]}},{name:"HighlightLineNumbersDirective",id:"directive-HighlightLineNumbersDirective-91fcfb4576ce7321ff3c1128f5964cc27e81846639b8ee6452744a84f980555ce8a953e7d87003295069005a424a8d5c430793bca93461938b12c9d967c0c289",file:"line-numbers/src/line-numbers.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtHighlight][lineNumbers], [nxtHighlightAuto][lineNumbers]",providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"singleLine",coverageIgnore:!1,defaultValue:"this.options?.singleLine",deprecated:!1,deprecationMessage:"",type:"boolean | undefined",indexKey:"",optional:!1,description:"",line:26,rawdescription:`
`,modifierKind:[148],required:!1},{name:"startFrom",coverageIgnore:!1,defaultValue:"this.options?.startFrom",deprecated:!1,deprecationMessage:"",type:"number | undefined",indexKey:"",optional:!1,description:"",line:22,rawdescription:`
`,modifierKind:[148],required:!1}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[],methodsClass:[],coverageIgnore:!1,extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:28,rawdescription:`
`},relationships:{incoming:[],outgoing:[]}}],components:[],modules:[],miscellaneous:{variables:[{name:"NXT_HIGHLIGHT_FILE_LOCATION",ctype:"miscellaneous",subtype:"variable",file:"extras/src/code-file-location.ts",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"unknown",defaultValue:`new InjectionToken<CodeFileLocation>('NXT_HIGHLIGHT_FILE_LOCATION', {\r
    providedIn: 'root',\r
    factory: CODE_FILE_LOCATION_FACTORY\r
})`,rawdescription:"Injection token used to provide the current location to `codeFromUrl` pipe.\r\nUsed to handle server-side rendering and to stub out during unit tests.",description:`<p>Injection token used to provide the current location to <code>codeFromUrl</code> pipe.
Used to handle server-side rendering and to stub out during unit tests.</p>
`}],functions:[{name:"activateLineNumbers",file:"line-numbers/src/line-numbers-lib.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"activateLineNumbers",args:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:""}],jsdoctags:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"afterTimeout",file:"src/test-helpers.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"afterTimeout",args:[{name:"timeout",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"Promise<void>",jsdoctags:[{name:"timeout",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"fileResource",file:"extras/src/code-loader.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"Code resource by URL",description:`<p>Code resource by URL</p>
`,displayName:"fileResource",args:[{name:"url",deprecated:!1,deprecationMessage:""},{name:"_options",deprecated:!1,deprecationMessage:"",defaultValue:"{}"}],jsdoctags:[{name:{pos:1625,end:1628,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"url"},deprecated:!1,deprecationMessage:"",tagName:{pos:1619,end:1624,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"param"},comment:`<p>File raw link</p>
`},{name:"_options",deprecated:!1,deprecationMessage:"",defaultValue:"{}",tagName:{text:"param"}}]},{name:"gistResource",file:"extras/src/code-loader.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"Gist resource by id",description:`<p>Gist resource by id</p>
`,displayName:"gistResource",args:[{name:"id",deprecated:!1,deprecationMessage:""},{name:"options",type:"Omit",deprecated:!1,deprecationMessage:"",optional:!0}],jsdoctags:[{name:{pos:2439,end:2441,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"id"},deprecated:!1,deprecationMessage:"",tagName:{pos:2433,end:2438,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"param"},comment:`<p>Gist ID</p>
`},{name:"options",type:"Omit",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"provideGistOptions",file:"extras/src/gist.model.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideGistOptions",args:[{name:"options",type:"GistOptions",deprecated:!1,deprecationMessage:""}],returnType:"Provider[]",jsdoctags:[{name:"options",type:"GistOptions",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"provideHighlightOptions",file:"src/lib/highlight.model.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideHighlightOptions",args:[{name:"options",type:"HighlightJSOptions",deprecated:!1,deprecationMessage:""}],jsdoctags:[{name:"options",type:"HighlightJSOptions",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],typealiases:[],enumerations:[],groupedVariables:{"extras/src/code-file-location.ts":[{name:"NXT_HIGHLIGHT_FILE_LOCATION",ctype:"miscellaneous",subtype:"variable",file:"extras/src/code-file-location.ts",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"unknown",defaultValue:`new InjectionToken<CodeFileLocation>('NXT_HIGHLIGHT_FILE_LOCATION', {\r
    providedIn: 'root',\r
    factory: CODE_FILE_LOCATION_FACTORY\r
})`,rawdescription:"Injection token used to provide the current location to `codeFromUrl` pipe.\r\nUsed to handle server-side rendering and to stub out during unit tests.",description:`<p>Injection token used to provide the current location to <code>codeFromUrl</code> pipe.
Used to handle server-side rendering and to stub out during unit tests.</p>
`}]},groupedFunctions:{"line-numbers/src/line-numbers-lib.ts":[{name:"activateLineNumbers",file:"line-numbers/src/line-numbers-lib.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"activateLineNumbers",args:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:""}],jsdoctags:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],"src/test-helpers.ts":[{name:"afterTimeout",file:"src/test-helpers.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"afterTimeout",args:[{name:"timeout",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"Promise<void>",jsdoctags:[{name:"timeout",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],"extras/src/code-loader.ts":[{name:"fileResource",file:"extras/src/code-loader.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"Code resource by URL",description:`<p>Code resource by URL</p>
`,displayName:"fileResource",args:[{name:"url",deprecated:!1,deprecationMessage:""},{name:"_options",deprecated:!1,deprecationMessage:"",defaultValue:"{}"}],jsdoctags:[{name:{pos:1625,end:1628,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"url"},deprecated:!1,deprecationMessage:"",tagName:{pos:1619,end:1624,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"param"},comment:`<p>File raw link</p>
`},{name:"_options",deprecated:!1,deprecationMessage:"",defaultValue:"{}",tagName:{text:"param"}}]},{name:"gistResource",file:"extras/src/code-loader.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"Gist resource by id",description:`<p>Gist resource by id</p>
`,displayName:"gistResource",args:[{name:"id",deprecated:!1,deprecationMessage:""},{name:"options",type:"Omit",deprecated:!1,deprecationMessage:"",optional:!0}],jsdoctags:[{name:{pos:2439,end:2441,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"id"},deprecated:!1,deprecationMessage:"",tagName:{pos:2433,end:2438,kind:80,id:0,flags:16777216,transformFlags:0,escapedText:"param"},comment:`<p>Gist ID</p>
`},{name:"options",type:"Omit",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]}],"extras/src/gist.model.ts":[{name:"provideGistOptions",file:"extras/src/gist.model.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideGistOptions",args:[{name:"options",type:"GistOptions",deprecated:!1,deprecationMessage:""}],returnType:"Provider[]",jsdoctags:[{name:"options",type:"GistOptions",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],"src/lib/highlight.model.ts":[{name:"provideHighlightOptions",file:"src/lib/highlight.model.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideHighlightOptions",args:[{name:"options",type:"HighlightJSOptions",deprecated:!1,deprecationMessage:""}],jsdoctags:[{name:"options",type:"HighlightJSOptions",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}]},groupedEnumerations:{},groupedTypeAliases:{}}};var j=()=>["shell"],C=()=>["typescript"],O=()=>["html"],L=(e,l)=>l.selector;function S(e,l){e&1&&r(0,"br")}function k(e,l){if(e&1&&r(0,"app-inputs-table",5),e&2){let a=u().$implicit;c("inputs",a.inputs)}}function D(e,l){if(e&1&&r(0,"app-outputs-table",6),e&2){let a=u().$implicit;c("outputs",a.outputs)}}function F(e,l){if(e&1&&(m(0,S,1,0,"br"),o(1,"h3",4),d(2),s(),m(3,k,1,1,"app-inputs-table",5),m(4,D,1,1,"app-outputs-table",6)),e&2){let a=l.$implicit,t=l.$index;h(t>0?0:-1),n(2),M(a.selector),n(),h(a.inputs.length?3:-1),n(),h(a.outputs.length?4:-1)}}var U=(()=>{class e{constructor(){this.installScript="npm install --save nxt-highlightjs highlight.js",this.loadFull=`import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js')
        })
    ]
}`,this.loadConfig=`import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            lineNumbersLoader: () => import('nxt-highlightjs/line-numbers'), // Optional, add line numbers if needed
            languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                css: () => import('highlight.js/lib/languages/css'),
                xml: () => import('highlight.js/lib/languages/xml')
            },
            themePath: 'path-to-theme.css' // Optional, useful for dynamic theme changes
        })
    ]
}`,this.includeHTML=`<pre><code [nxtHighlight]="code"
    language="html"></code></pre>`,this.inps=["[nxtHighlight]","[nxtHighlightAuto]"].map(a=>{let t=[...y.components,...y.directives].find(i=>i.selector==a),p=(t?.inputsClass.sort((i,g)=>i.line-g.line)??[]).map(i=>{if("defaultValue"in i&&typeof i.defaultValue=="string"){let g=i.defaultValue?.match(/alias:[\s\n\r]*["']([^"']+)["']/);g?.[1]&&(i.name=g[1]),i.defaultValue=i.defaultValue.split(",")[0]}return i}),N=t?.outputsClass.sort((i,g)=>i.line-g.line)??[];return{selector:a,inputs:p,outputs:N}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=b({type:e,selectors:[["app-getting-started"]],decls:24,vars:12,consts:[["title","Getting started | nxt-highlightjs","description","Getting started with Angular highlightjs"],[1,"h4"],[3,"code","languages"],[1,"h3"],[1,"h5"],[3,"inputs"],[3,"outputs"]],template:function(t,p){t&1&&(r(0,"app-meta",0),o(1,"app-content-wrap")(2,"h1"),d(3,"Getting started with nxt-highlightjs"),s(),o(4,"h2",1),d(5,"Installing"),s(),r(6,"app-code-block",2)(7,"br"),o(8,"h2",1),d(9,"Load and configure Highlight.js"),s(),r(10,"app-code-block",2)(11,"br"),o(12,"p"),d(13,"Above code loads the entire Highlight.js library. To improve performance you might want to load only the core library and neccesary languages."),s(),r(14,"app-code-block",2)(15,"br"),o(16,"h2",1),d(17,"Include it in HTML template"),s(),r(18,"app-code-block",2)(19,"br"),o(20,"h2",3),d(21,"Configuration options"),s(),v(22,F,5,4,null,null,L),s()),t&2&&(n(6),c("code",p.installScript)("languages",f(8,j)),n(4),c("code",p.loadFull)("languages",f(9,C)),n(4),c("code",p.loadConfig)("languages",f(10,C)),n(4),c("code",p.includeHTML)("languages",f(11,O)),n(4),x(p.inps))},dependencies:[I,w,K,H,_],encapsulation:2})}}return e})();export{U as GettingStartedComponent};
