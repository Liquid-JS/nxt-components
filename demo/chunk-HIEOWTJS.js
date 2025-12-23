import{a as N}from"./chunk-IZ5GPYED.js";import{a as C}from"./chunk-Z7SSVJDS.js";import"./chunk-I4SIGM37.js";import{a as k}from"./chunk-KHIDPEKI.js";import"./chunk-PCYHYZ5B.js";import{a as S}from"./chunk-JRB4VBZR.js";import{a as D}from"./chunk-GS43QFX5.js";import{e as x}from"./chunk-XOC3E5YB.js";import"./chunk-F5UKHNUZ.js";import"./chunk-4N55BW22.js";import"./chunk-23OK65BD.js";import"./chunk-LXFWAVMM.js";import{Ab as v,Bb as l,Cb as s,Db as n,Eb as p,Ta as d,Ub as y,gc as a,hc as w,ib as M,qc as f,vb as m,wb as g,yb as T,zb as b}from"./chunk-JGD7IGNT.js";import"./chunk-FBFWB55K.js";var h={pipes:[],interfaces:[{name:"DateTimeFormats",id:"interface-DateTimeFormats-6c90bae76745def59658cb3d35926c39ac0dcc870fd892a58d8338effc8cd2e41f5abc61837394dd14d84b065ecddb853ec85abb0ab481d26e513b51ddd94089",file:"src/lib/class/date-time-format.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"dateA11yLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:9},{name:"datePickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:6},{name:"fullPickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:5},{name:"monthYearA11yLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:10},{name:"monthYearLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:8},{name:"parseInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:4},{name:"timePickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:7}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"DateTimeInputEvent",id:"interface-DateTimeInputEvent-04c04b616a28f44f520b3b807c2fa7f68946d0aed4918cb89a0ad94041a99d07728d5dd53b6e680c9fe4fcbffd989ea3759a7305bb7f16217bab9fefc60cd6e1",file:"src/lib/date-time/date-time-picker-input.directive.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"input",deprecated:!1,deprecationMessage:"",type:"HTMLInputElement",indexKey:"",optional:!1,description:"",line:26},{name:"source",deprecated:!1,deprecationMessage:"",type:"DateTimeInputDirective<T>",indexKey:"",optional:!1,description:"",line:24},{name:"value",deprecated:!1,deprecationMessage:"",type:"T | Array<T | undefined>",indexKey:"",optional:!0,description:"",line:25}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"DialogPosition",id:"interface-DialogPosition-4a5cc972ea4fd58137b36490bb46f10f72adf28448f3dd7ba895c5dab9c9b64c5bcaeb80d912415b6cab3d110f67b1e38866a98d7017a5db0e095e76a617528f",file:"src/lib/class/dialog-config.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"bottom",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s bottom position</p>
`,line:13,rawdescription:`
Override for the dialog's bottom position`},{name:"left",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s left position</p>
`,line:16,rawdescription:`
Override for the dialog's left position`},{name:"right",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s right position</p>
`,line:19,rawdescription:`
Override for the dialog's right position`},{name:"top",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s top position</p>
`,line:10,rawdescription:`
Override for the dialog's top position`}],indexSignatures:[],kind:171,description:`<p>Possible overrides for a dialog&#39;s position</p>
`,rawdescription:`
Possible overrides for a dialog's position`,methods:[],extends:[]},{name:"MomentDateTimeAdapterOptions",id:"interface-MomentDateTimeAdapterOptions-0da93b659e9ef12339010d313f0a246cc1a1daea9e0861851e8f3c3b3ad3a3c0d4f458e003e450ab0e6651ee6201a6c8d1df04b6279a1d8483add9de8233c296",file:"moment-adapter/src/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"useUtc",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Turns the use of utc dates on or off.
Changing this will change how the DateTimePicker output value.
{@default false}</p>
`,line:12,rawdescription:`

Turns the use of utc dates on or off.
Changing this will change how the DateTimePicker output value.
{@default false}
`}],indexSignatures:[],kind:171,description:`<p>Configurable options for {@see MomentDateAdapter}</p>
`,rawdescription:`
Configurable options for {@see MomentDateAdapter}`,methods:[],extends:[]}],injectables:[{name:"DateTimeIntl",id:"injectable-DateTimeIntl-8b0bec7d84f2fe09348369566984ae269fb5c54b627371ffc71efa765b2ee407e42ee96604bffc7fc7e56dba9a8a3d379aca5ca010bb896a2ad00a7a0032f8eb",file:"src/lib/date-time/date-time-picker-intl.service.ts",properties:[{name:"cancelBtnLabel",defaultValue:"$localize`:@@nxt-pick-datetime.cancel:Cancel`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the cancel button</p>
`,line:62,rawdescription:`
A label for the cancel button`},{name:"changes",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"Subject<void>",indexKey:"",optional:!1,description:`<p>Stream that emits whenever the labels here are changed. Use this to notify
components if the labels have changed after initialization.</p>
`,line:17,rawdescription:`

Stream that emits whenever the labels here are changed. Use this to notify
components if the labels have changed after initialization.
`,modifierKind:[148]},{name:"downHourLabel",defaultValue:"$localize`:@@nxt-pick-datetime.down-hour:Minus a hour`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the down hour button (used by screen readers).</p>
`,line:35,rawdescription:`
A label for the down hour button (used by screen readers).`},{name:"downMinuteLabel",defaultValue:"$localize`:@@nxt-pick-datetime.down-minute:Minus a minute`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the down minute button (used by screen readers).</p>
`,line:29,rawdescription:`
A label for the down minute button (used by screen readers).`},{name:"downSecondLabel",defaultValue:"$localize`:@@nxt-pick-datetime.down-second:Minus a second`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the down second button (used by screen readers).</p>
`,line:23,rawdescription:`
A label for the down second button (used by screen readers).`},{name:"hour12AMLabel",defaultValue:"$localize`:@@nxt-pick-datetime.time-am:AM`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the hour12 button (AM)</p>
`,line:74,rawdescription:`
A label for the hour12 button (AM)`},{name:"hour12PMLabel",defaultValue:"$localize`:@@nxt-pick-datetime.time-pm:PM`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the hour12 button (PM)</p>
`,line:77,rawdescription:`
A label for the hour12 button (PM)`},{name:"nextMonthLabel",defaultValue:"$localize`:@@nxt-pick-datetime.next-month:Next month`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the next month button (used by screen readers)</p>
`,line:41,rawdescription:`
A label for the next month button (used by screen readers)`},{name:"nextMultiYearLabel",defaultValue:"$localize`:@@nxt-pick-datetime.next-multi-year:Next 21 years`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the next multi-year button (used by screen readers)</p>
`,line:53,rawdescription:`
A label for the next multi-year button (used by screen readers)`},{name:"nextYearLabel",defaultValue:"$localize`:@@nxt-pick-datetime.next-year:Next year`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the next year button (used by screen readers)</p>
`,line:47,rawdescription:`
A label for the next year button (used by screen readers)`},{name:"prevMonthLabel",defaultValue:"$localize`:@@nxt-pick-datetime.prev-month:Previous month`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the previous month button (used by screen readers)</p>
`,line:38,rawdescription:`
A label for the previous month button (used by screen readers)`},{name:"prevMultiYearLabel",defaultValue:"$localize`:@@nxt-pick-datetime.prev-multi-year:Previous 21 years`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the previous multi-year button (used by screen readers)</p>
`,line:50,rawdescription:`
A label for the previous multi-year button (used by screen readers)`},{name:"prevYearLabel",defaultValue:"$localize`:@@nxt-pick-datetime.prev-year:Previous year`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the previous year button (used by screen readers)</p>
`,line:44,rawdescription:`
A label for the previous year button (used by screen readers)`},{name:"rangeFromLabel",defaultValue:"$localize`:@@nxt-pick-datetime.from:From`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the range &#39;from&#39; in picker info</p>
`,line:68,rawdescription:`
A label for the range 'from' in picker info`},{name:"rangeToLabel",defaultValue:"$localize`:@@nxt-pick-datetime.to:To`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the range &#39;to&#39; in picker info</p>
`,line:71,rawdescription:`
A label for the range 'to' in picker info`},{name:"setBtnLabel",defaultValue:"$localize`:@@nxt-pick-datetime.set:Set`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the set button</p>
`,line:65,rawdescription:`
A label for the set button`},{name:"switchToMonthViewLabel",defaultValue:"$localize`:@@nxt-pick-datetime.switch-to-month:Change to month view`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the &#39;switch to month view&#39; button (used by screen readers)</p>
`,line:56,rawdescription:`
A label for the 'switch to month view' button (used by screen readers)`},{name:"switchToMultiYearViewLabel",defaultValue:"$localize`:@@nxt-pick-datetime.switch-to-year-month:Choose month and year`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the &#39;switch to year view&#39; button (used by screen readers)</p>
`,line:59,rawdescription:`
A label for the 'switch to year view' button (used by screen readers)`},{name:"upHourLabel",defaultValue:"$localize`:@@nxt-pick-datetime.up-hour:Add a hour`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the up hour button (used by screen readers).</p>
`,line:32,rawdescription:`
A label for the up hour button (used by screen readers).`},{name:"upMinuteLabel",defaultValue:"$localize`:@@nxt-pick-datetime.up-minute:Add a minute`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the up minute button (used by screen readers).</p>
`,line:26,rawdescription:`
A label for the up minute button (used by screen readers).`},{name:"upSecondLabel",defaultValue:"$localize`:@@nxt-pick-datetime.up-second:Add a second`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A label for the up second button (used by screen readers).</p>
`,line:20,rawdescription:`
A label for the up second button (used by screen readers).`}],methods:[],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,extends:[],type:"injectable"},{name:"MomentDateTimeAdapter",id:"injectable-MomentDateTimeAdapter-0da93b659e9ef12339010d313f0a246cc1a1daea9e0861851e8f3c3b3ad3a3c0d4f458e003e450ab0e6651ee6201a6c8d1df04b6279a1d8483add9de8233c296",file:"moment-adapter/src/date-time-adapter.class.ts",properties:[{name:"_localeChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A stream that emits when the locale changes</p>
`,line:8,rawdescription:`
A stream that emits when the locale changes`,modifierKind:[124],inheritance:{file:"DateTimeAdapter"}},{name:"locale",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:`<p>The locale to use for all dates</p>
`,line:5,rawdescription:`
The locale to use for all dates`,modifierKind:[124],inheritance:{file:"DateTimeAdapter"}},{name:"millisecondsInDay",defaultValue:"86400000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a day</p>
`,line:14,rawdescription:`
total milliseconds in a day`,modifierKind:[124,148],inheritance:{file:"DateTimeAdapter"}},{name:"milliseondsInMinute",defaultValue:"60000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a minute</p>
`,line:17,rawdescription:`
total milliseconds in a minute`,modifierKind:[124,148],inheritance:{file:"DateTimeAdapter"}}],methods:[{name:"addCalendarDays",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:184,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"addCalendarMonths",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:180,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"addCalendarYears",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:176,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"clone",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:232,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"createDate",args:[{name:"year",type:"number",deprecated:!1,deprecationMessage:""},{name:"month",type:"number",deprecated:!1,deprecationMessage:""},{name:"date",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:200,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"year",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"month",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"date",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"createDate",args:[{name:"year",type:"number",deprecated:!1,deprecationMessage:""},{name:"month",type:"number",deprecated:!1,deprecationMessage:""},{name:"date",type:"number",deprecated:!1,deprecationMessage:""},{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"}],optional:!1,returnType:"Moment",typeParameters:[],line:201,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"year",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"month",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"date",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}}]},{name:"deserialize",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment | undefined",typeParameters:[],line:260,deprecated:!1,deprecationMessage:"",rawdescription:`

Returns the given value if given a valid Moment or undefined. Deserializes valid ISO 8601 strings
(https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
string into undefined. Returns an invalid date for all other values.
`,description:`<p>Returns the given value if given a valid Moment or undefined. Deserializes valid ISO 8601 strings
(<a href="https://www.ietf.org/rfc/rfc3339.txt">https://www.ietf.org/rfc/rfc3339.txt</a>) and valid Date objects into valid Moments and empty
string into undefined. Returns an invalid date for all other values.</p>
`,modifierKind:[164],jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"differenceInCalendarDays",args:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:116,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"format",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:240,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDate",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:92,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDateNames",args:[],optional:!1,returnType:"string[]",typeParameters:[],line:138,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"getDay",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:88,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDayOfWeekNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getHours",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMinutes",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:100,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMonth",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:84,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMonthNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:124,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getNumDaysInMonth",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getSeconds",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:104,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getTime",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:108,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getYear",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:80,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getYearName",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"invalid",args:[],optional:!1,returnType:"Moment",typeParameters:[],line:168,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"isDateInstance",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:172,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isEqual",args:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:146,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isSameDay",args:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isValid",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:164,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"now",args:[],optional:!1,returnType:"Moment",typeParameters:[],line:236,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"parse",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""},{name:"parseFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment | undefined",typeParameters:[],line:248,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"parseFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setHours",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:188,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setLocale",args:[{name:"locale",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:66,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"locale",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setMinutes",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:192,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setSeconds",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Moment",typeParameters:[],line:196,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"toIso8601",args:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:142,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Moment",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"clampDate",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"T",typeParameters:[],line:270,deprecated:!1,deprecationMessage:"",rawdescription:`

Clamp the given date between min and max dates.
`,description:`<p>Clamp the given date between min and max dates.</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"compare",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:195,deprecated:!1,deprecationMessage:"",rawdescription:`

Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.
`,description:`<p>Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"compareYear",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:221,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if two given dates are in the same year
1 if the first date's year is after the second,
-1 if the first date's year is before the second
0 if two given dates are in the same year
`,description:`<p>Check if two given dates are in the same year
1 if the first date&#39;s year is after the second,
-1 if the first date&#39;s year is before the second
0 if two given dates are in the same year</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"options",type:"MomentDateTimeAdapterOptions",deprecated:!1,deprecationMessage:"",optional:!0}],line:52,jsdoctags:[{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"options",type:"MomentDateTimeAdapterOptions",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:["DateTimeAdapter"],type:"injectable"},{name:"NativeDateTimeAdapter",id:"injectable-NativeDateTimeAdapter-18a64e0f7bcadd1a83a07ea86234e3f6e2a363ab95fb183863f9925dd127b2b850369e1ce16c03fe9ae2e7508e68370b1499bad74c867a1b29a464f206fff484",file:"native-adapter/src/date-time-adapter.class.ts",properties:[{name:"useUtcForDisplay",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Whether to use <code>timeZone: &#39;utc&#39;</code> with <code>Intl.DateTimeFormat</code> when formatting dates.
Without this <code>Intl.DateTimeFormat</code> sometimes chooses the wrong timeZone, which can throw off
the result. (e.g. in the en-US locale <code>new Date(1800, 7, 14).toLocaleDateString()</code>
will produce <code>&#39;8/13/1800&#39;</code>.</p>
`,line:108,rawdescription:"\n\nWhether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.\nWithout this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off\nthe result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`\nwill produce `'8/13/1800'`.\n"},{name:"_localeChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A stream that emits when the locale changes</p>
`,line:8,rawdescription:`
A stream that emits when the locale changes`,modifierKind:[124],inheritance:{file:"DateTimeAdapter"}},{name:"locale",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:`<p>The locale to use for all dates</p>
`,line:5,rawdescription:`
The locale to use for all dates`,modifierKind:[124],inheritance:{file:"DateTimeAdapter"}},{name:"millisecondsInDay",defaultValue:"86400000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a day</p>
`,line:14,rawdescription:`
total milliseconds in a day`,modifierKind:[124,148],inheritance:{file:"DateTimeAdapter"}},{name:"milliseondsInMinute",defaultValue:"60000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a minute</p>
`,line:17,rawdescription:`
total milliseconds in a minute`,modifierKind:[124,148],inheritance:{file:"DateTimeAdapter"}}],methods:[{name:"addCalendarDays",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:310,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"addCalendarMonths",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:294,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"addCalendarYears",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:290,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"clone",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:393,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"createDate",args:[{name:"year",type:"number",deprecated:!1,deprecationMessage:""},{name:"month",type:"number",deprecated:!1,deprecationMessage:""},{name:"date",type:"number",deprecated:!1,deprecationMessage:""},{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"}],optional:!1,returnType:"Date",typeParameters:[],line:335,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"year",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"month",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"date",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"deserialize",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date | undefined",typeParameters:[],line:445,deprecated:!1,deprecationMessage:"",rawdescription:`

Returns the given value if given a valid Date or undefined. Deserializes valid ISO 8601 strings
(https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into undefined. Returns an
invalid date for all other values.
`,description:`<p>Returns the given value if given a valid Date or undefined. Deserializes valid ISO 8601 strings
(<a href="https://www.ietf.org/rfc/rfc3339.txt">https://www.ietf.org/rfc/rfc3339.txt</a>) into valid Dates and empty string into undefined. Returns an
invalid date for all other values.</p>
`,modifierKind:[164],jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"differenceInCalendarDays",args:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number | undefined",typeParameters:[],line:166,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"format",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:408,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDate",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:136,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDateNames",args:[],optional:!1,returnType:"string[]",typeParameters:[],line:237,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"getDay",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:132,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getDayOfWeekNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:221,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getHours",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:140,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMinutes",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:144,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMonth",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getMonthNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:206,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getNumDaysInMonth",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:156,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getSeconds",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:148,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getTime",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:152,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getYear",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"number",typeParameters:[],line:124,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"getYearName",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:195,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"invalid",args:[],optional:!1,returnType:"Date",typeParameters:[],line:282,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"isDateInstance",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:286,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isEqual",args:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:256,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isSameDay",args:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:""},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:264,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dateLeft",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateRight",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"isValid",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:278,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"now",args:[],optional:!1,returnType:"Date",typeParameters:[],line:404,deprecated:!1,deprecationMessage:"",inheritance:{file:"DateTimeAdapter"}},{name:"parse",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""},{name:"_parseFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date | undefined",typeParameters:[],line:432,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"_parseFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setHours",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:317,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setMinutes",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:323,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setSeconds",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:329,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"toIso8601",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:252,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"clampDate",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"T",typeParameters:[],line:270,deprecated:!1,deprecationMessage:"",rawdescription:`

Clamp the given date between min and max dates.
`,description:`<p>Clamp the given date between min and max dates.</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"compare",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:195,deprecated:!1,deprecationMessage:"",rawdescription:`

Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.
`,description:`<p>Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"compareYear",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:221,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if two given dates are in the same year
1 if the first date's year is after the second,
-1 if the first date's year is before the second
0 if two given dates are in the same year
`,description:`<p>Check if two given dates are in the same year
1 if the first date&#39;s year is after the second,
-1 if the first date&#39;s year is before the second
0 if two given dates are in the same year</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}},{name:"setLocale",args:[{name:"locale",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:262,deprecated:!1,deprecationMessage:"",rawdescription:`

Sets the locale used for all dates.
`,description:`<p>Sets the locale used for all dates.</p>
`,jsdoctags:[{name:"locale",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeAdapter"}}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"platform",type:"Platform",deprecated:!1,deprecationMessage:""},{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0}],line:108,jsdoctags:[{name:"platform",type:"Platform",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:["DateTimeAdapter"],type:"injectable"}],guards:[],interceptors:[],classes:[{name:"CalendarCell",id:"class-CalendarCell-8b66a02c7a6703844af69f723d1ddd07fba9e9affb65ec2001b9711dc468b248134f194bd26b676dce39db3f370eccf6376a09c6bc2f589a56ba7e0885230443",file:"src/lib/date-time/calendar-body/calendar-body.component.ts",deprecated:!1,deprecationMessage:"",type:"class",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"number",deprecated:!1,deprecationMessage:""},{name:"displayValue",type:"string",deprecated:!1,deprecationMessage:""},{name:"ariaLabel",type:"string",deprecated:!1,deprecationMessage:""},{name:"enabled",type:"boolean",deprecated:!1,deprecationMessage:""},{name:"out",type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false"},{name:"cellClass",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"''"}],line:5,jsdoctags:[{name:"value",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"displayValue",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ariaLabel",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"enabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"out",type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false",tagName:{text:"param"}},{name:"cellClass",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"''",tagName:{text:"param"}}]},inputsClass:[],outputsClass:[],properties:[{name:"ariaLabel",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:9,modifierKind:[125]},{name:"cellClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:12,modifierKind:[125]},{name:"displayValue",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:8,modifierKind:[125]},{name:"enabled",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:10,modifierKind:[125]},{name:"out",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:11,modifierKind:[125]},{name:"value",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:7,modifierKind:[125]}],methods:[],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]},{name:"DateTimeAdapter",id:"class-DateTimeAdapter-7622ca721878cc22ee5e4711b0b6f4bc482f75f918ff26ddf4660c2c0035db5939a07bfe8951de85e5b0edc4e2869dbcc4d91c9935196767a75ea9fcc999d83e",file:"src/lib/class/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"class",inputsClass:[],outputsClass:[],properties:[{name:"_localeChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A stream that emits when the locale changes</p>
`,line:8,rawdescription:`
A stream that emits when the locale changes`,modifierKind:[124]},{name:"locale",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:`<p>The locale to use for all dates</p>
`,line:5,rawdescription:`
The locale to use for all dates`,modifierKind:[124]},{name:"millisecondsInDay",defaultValue:"86400000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a day</p>
`,line:14,rawdescription:`
total milliseconds in a day`,modifierKind:[124,148]},{name:"milliseondsInMinute",defaultValue:"60000",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>total milliseconds in a minute</p>
`,line:17,rawdescription:`
total milliseconds in a minute`,modifierKind:[124,148]}],methods:[{name:"addCalendarDays",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:138,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the specified number of days to the given date
`,description:`<p>Add the specified number of days to the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"addCalendarMonths",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:133,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the specified number of months to the given date
`,description:`<p>Add the specified number of months to the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"addCalendarYears",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the specified number of years to the given date
`,description:`<p>Add the specified number of years to the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"clampDate",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"T",typeParameters:[],line:270,deprecated:!1,deprecationMessage:"",rawdescription:`

Clamp the given date between min and max dates.
`,description:`<p>Clamp the given date between min and max dates.</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"min",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"max",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"clone",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"T",typeParameters:[],line:172,deprecated:!1,deprecationMessage:"",rawdescription:`

Clone the given date
`,description:`<p>Clone the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"compare",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:195,deprecated:!1,deprecationMessage:"",rawdescription:`

Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.
`,description:`<p>Compare two given dates
1 if the first date is after the second,
-1 if the first date is before the second
0 if dates are equal.</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"compareYear",args:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:221,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if two given dates are in the same year
1 if the first date's year is after the second,
-1 if the first date's year is before the second
0 if two given dates are in the same year
`,description:`<p>Check if two given dates are in the same year
1 if the first date&#39;s year is after the second,
-1 if the first date&#39;s year is before the second
0 if two given dates are in the same year</p>
`,jsdoctags:[{name:"first",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"second",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"createDate",args:[{name:"year",type:"number",deprecated:!1,deprecationMessage:""},{name:"month",type:"number",deprecated:!1,deprecationMessage:""},{name:"date",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:159,deprecated:!1,deprecationMessage:"",rawdescription:`

Creates a date with the given year, month, date, hour, minute and second. Does not allow over/under-flow of the
month and date.
`,description:`<p>Creates a date with the given year, month, date, hour, minute and second. Does not allow over/under-flow of the
month and date.</p>
`,modifierKind:[128],jsdoctags:[{name:"year",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"month",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"date",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"createDate",args:[{name:"year",type:"number",deprecated:!1,deprecationMessage:""},{name:"month",type:"number",deprecated:!1,deprecationMessage:""},{name:"date",type:"number",deprecated:!1,deprecationMessage:""},{name:"hours",type:"number",deprecated:!1,deprecationMessage:""},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:""},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:160,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"year",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"month",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"date",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"deserialize",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:249,deprecated:!1,deprecationMessage:"",rawdescription:`

Attempts to deserialize a value to a valid date object. This is different from parsing in that
deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
string). The default implementation does not allow any deserialization, it simply checks that
the given value is already a valid date object or null. The \`<mat-datepicker>\` will call this
method on all of it's \`@Input()\` properties that accept dates. It is therefore possible to
support passing values from your backend directly to these properties by overriding this method
to also deserialize the format used by your backend.
`,description:`<p>Attempts to deserialize a value to a valid date object. This is different from parsing in that
deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
string). The default implementation does not allow any deserialization, it simply checks that
the given value is already a valid date object or null. The <code>&lt;mat-datepicker&gt;</code> will call this
method on all of it&#39;s <code>@Input()</code> properties that accept dates. It is therefore possible to
support passing values from your backend directly to these properties by overriding this method
to also deserialize the format used by your backend.</p>
`,jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"differenceInCalendarDays",args:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number | undefined",typeParameters:[],line:73,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the number of calendar days between the given dates.
If dateLeft is before dateRight, it would return positive value
If dateLeft is after dateRight, it would return negative value
`,description:`<p>Get the number of calendar days between the given dates.
If dateLeft is before dateRight, it would return positive value
If dateLeft is after dateRight, it would return negative value</p>
`,modifierKind:[128],jsdoctags:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"format",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:182,deprecated:!1,deprecationMessage:"",rawdescription:`

Formats a date as a string according to the given format.
`,description:`<p>Formats a date as a string according to the given format.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"displayFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getDate",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:41,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the day num of the given date
`,description:`<p>Get the day num of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getDateNames",args:[],optional:!1,returnType:"string[]",typeParameters:[],line:93,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets a list of names for the dates of the month.
`,description:`<p>Gets a list of names for the dates of the month.</p>
`,modifierKind:[128]},{name:"getDay",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:36,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the day of the week of the given date
0 -- Sunday
6 -- Saturday
`,description:`<p>Get the day of the week of the given date
0 -- Sunday
6 -- Saturday</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getDayOfWeekNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:88,deprecated:!1,deprecationMessage:"",rawdescription:`

Get a list of week names
`,description:`<p>Get a list of week names</p>
`,modifierKind:[128],jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getHours",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:46,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the hours of the given date
`,description:`<p>Get the hours of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getMinutes",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:51,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the minutes of the given date
`,description:`<p>Get the minutes of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getMonth",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:29,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the month of the given date
0 -- January
11 -- December
`,description:`<p>Get the month of the given date
0 -- January
11 -- December</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getMonthNames",args:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string[]",typeParameters:[],line:83,deprecated:!1,deprecationMessage:"",rawdescription:`

Get a list of month names
`,description:`<p>Get a list of month names</p>
`,modifierKind:[128],jsdoctags:[{name:"style",type:'"long" | "short" | "narrow"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getNumDaysInMonth",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:66,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets the number of days in the month of the given date.
`,description:`<p>Gets the number of days in the month of the given date.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getSeconds",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:56,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the seconds of the given date
`,description:`<p>Get the seconds of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getTime",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:61,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the milliseconds timestamp of the given date
`,description:`<p>Get the milliseconds timestamp of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getYear",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"number",typeParameters:[],line:22,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the year of the given date
`,description:`<p>Get the year of the given date</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"getYearName",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"string",typeParameters:[],line:78,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets the name for the year of the given date.
`,description:`<p>Gets the name for the year of the given date.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"invalid",args:[],optional:!1,returnType:"T",typeParameters:[],line:118,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets date instance that is not valid.
`,description:`<p>Gets date instance that is not valid.</p>
`,modifierKind:[128]},{name:"isDateInstance",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:123,deprecated:!1,deprecationMessage:"",rawdescription:`

Checks whether the given object is considered a date instance by this DateTimeAdapter.
`,description:`<p>Checks whether the given object is considered a date instance by this DateTimeAdapter.</p>
`,modifierKind:[128],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"isEqual",args:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:103,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the give dates are equal
`,description:`<p>Check if the give dates are equal</p>
`,modifierKind:[128],jsdoctags:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"isSameDay",args:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:108,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the give dates are the same day
`,description:`<p>Check if the give dates are the same day</p>
`,modifierKind:[128],jsdoctags:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"isValid",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:113,deprecated:!1,deprecationMessage:"",rawdescription:`

Checks whether the given date is valid.
`,description:`<p>Checks whether the given date is valid.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"now",args:[],optional:!1,returnType:"T",typeParameters:[],line:177,deprecated:!1,deprecationMessage:"",rawdescription:`

Get a new moment
`,description:`<p>Get a new moment</p>
`,modifierKind:[128]},{name:"parse",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""},{name:"parseFormat",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:187,deprecated:!1,deprecationMessage:"",rawdescription:`

Parse a user-provided value to a Date Object
`,description:`<p>Parse a user-provided value to a Date Object</p>
`,modifierKind:[128],jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"parseFormat",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setHours",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:143,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the hours to the given date.
`,description:`<p>Set the hours to the given date.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setLocale",args:[{name:"locale",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:262,deprecated:!1,deprecationMessage:"",rawdescription:`

Sets the locale used for all dates.
`,description:`<p>Sets the locale used for all dates.</p>
`,jsdoctags:[{name:"locale",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setMinutes",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:148,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the minutes to the given date.
`,description:`<p>Set the minutes to the given date.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setSeconds",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""},{name:"amount",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T",typeParameters:[],line:153,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the seconds to the given date.
`,description:`<p>Set the seconds to the given date.</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"amount",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"toIso8601",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:98,deprecated:!1,deprecationMessage:"",rawdescription:`

Return a Date object as a string, using the ISO standard
`,description:`<p>Return a Date object as a string, using the ISO standard</p>
`,modifierKind:[128],jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],indexSignatures:[],extends:[],accessors:{localeChanges:{name:"localeChanges",getSignature:{name:"localeChanges",type:"",returnType:"Observable<void>",line:9}}},hostBindings:[],hostListeners:[]},{name:"DialogConfig",id:"class-DialogConfig-4a5cc972ea4fd58137b36490bb46f10f72adf28448f3dd7ba895c5dab9c9b64c5bcaeb80d912415b6cab3d110f67b1e38866a98d7017a5db0e095e76a617528f",file:"src/lib/class/dialog-config.class.ts",deprecated:!1,deprecationMessage:"",type:"class",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:116},inputsClass:[],outputsClass:[],properties:[{name:"ariaDescribedBy",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>ID of the element that describes the dialog.</p>
`,line:26,rawdescription:`

ID of the element that describes the dialog.
`},{name:"autoFocus",defaultValue:"true",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Whether to focus the dialog when the dialog is isOpen</p>
`,line:31,rawdescription:`

Whether to focus the dialog when the dialog is isOpen
`},{name:"backdropClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string | string[]",indexKey:"",optional:!0,description:`<p>Custom class for the backdrop</p>
`,line:70,rawdescription:`

Custom class for the backdrop
`},{name:"backdropStyle",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!0,description:`<p>Custom style for the backdrop</p>
`,line:39,rawdescription:`

Custom style for the backdrop
`},{name:"closeOnNavigation",defaultValue:"true",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!0,description:`<p>Whether the dialog should close when the user goes backwards/forwards in history.</p>
`,line:75,rawdescription:`

Whether the dialog should close when the user goes backwards/forwards in history.
`},{name:"data",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!0,description:`<p>Data being injected into the child component</p>
`,line:42,rawdescription:`
Data being injected into the child component`},{name:"disableClose",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!0,description:`<p>Whether the user can use escape or clicking outside to close a modal</p>
`,line:45,rawdescription:`
Whether the user can use escape or clicking outside to close a modal`},{name:"event",deprecated:!1,deprecationMessage:"",type:"MouseEvent",indexKey:"",optional:!0,description:`<p>Mouse Event</p>
`,line:65,rawdescription:`

Mouse Event
`},{name:"hasBackdrop",defaultValue:"true",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!0,description:`<p>Whether the dialog has a backdrop</p>
`,line:34,rawdescription:`
Whether the dialog has a backdrop`},{name:"height",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Height of the dialog</p>
`,line:81,rawdescription:`
Height of the dialog`},{name:"id",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>ID for the modal. If omitted, a unique one will be generated.</p>
`,line:50,rawdescription:`

ID for the modal. If omitted, a unique one will be generated.
`},{name:"maxHeight",deprecated:!1,deprecationMessage:"",type:"number | string",indexKey:"",optional:!0,description:`<p>The max-height of the overlay panel.
If a number is provided, pixel units are assumed.</p>
`,line:105,rawdescription:`

The max-height of the overlay panel.
If a number is provided, pixel units are assumed.
`},{name:"maxWidth",defaultValue:"'85vw'",deprecated:!1,deprecationMessage:"",type:"number | string",indexKey:"",optional:!0,description:`<p>The max-width of the overlay panel.
If a number is provided, pixel units are assumed.</p>
`,line:99,rawdescription:`

The max-width of the overlay panel.
If a number is provided, pixel units are assumed.
`},{name:"minHeight",deprecated:!1,deprecationMessage:"",type:"number | string",indexKey:"",optional:!0,description:`<p>The min-height of the overlay panel.
If a number is provided, pixel units are assumed.</p>
`,line:93,rawdescription:`

The min-height of the overlay panel.
If a number is provided, pixel units are assumed.
`},{name:"minWidth",deprecated:!1,deprecationMessage:"",type:"number | string",indexKey:"",optional:!0,description:`<p>The min-width of the overlay panel.
If a number is provided, pixel units are assumed.</p>
`,line:87,rawdescription:`

The min-width of the overlay panel.
If a number is provided, pixel units are assumed.
`},{name:"paneClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string | string[]",indexKey:"",optional:!0,description:`<p>Custom class for the pane</p>
`,line:60,rawdescription:`

Custom class for the pane
`},{name:"position",deprecated:!1,deprecationMessage:"",type:"DialogPosition",indexKey:"",optional:!0,description:`<p>Position overrides</p>
`,line:108,rawdescription:`
Position overrides`},{name:"role",defaultValue:"'dialog'",deprecated:!1,deprecationMessage:"",type:'"dialog" | "alertdialog"',indexKey:"",optional:!0,description:`<p>The ARIA role of the dialog element.</p>
`,line:55,rawdescription:`

The ARIA role of the dialog element.
`},{name:"scrollStrategy",defaultValue:"new NoopScrollStrategy()",deprecated:!1,deprecationMessage:"",type:"ScrollStrategy",indexKey:"",optional:!0,description:`<p>The scroll strategy when the dialog is open
Learn more this from <a href="https://material.angular.io/cdk/overlay/overview#scroll-strategies">https://material.angular.io/cdk/overlay/overview#scroll-strategies</a></p>
`,line:114,rawdescription:`

The scroll strategy when the dialog is open
Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
`},{name:"viewContainerRef",deprecated:!1,deprecationMessage:"",type:"ViewContainerRef",indexKey:"",optional:!0,description:"",line:116},{name:"width",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Width of the dialog</p>
`,line:78,rawdescription:`
Width of the dialog`}],methods:[],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]},{name:"DialogRef",id:"class-DialogRef-009425b800da35207ecae3c8043c8ff01f3e58b5a3890a650009936c248d391091eb385e3677698881da5af9a3042c205e669734ffa477017e4aa7d93d060963",file:"src/lib/class/dialog-ref.class.ts",deprecated:!1,deprecationMessage:"",type:"class",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"overlayRef",type:"OverlayRef",deprecated:!1,deprecationMessage:""},{name:"container",type:"DialogContainerComponent",deprecated:!1,deprecationMessage:""},{name:"id",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"location",type:"Location",deprecated:!1,deprecationMessage:"",optional:!0}],line:28,jsdoctags:[{name:"overlayRef",type:"OverlayRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"container",type:"DialogContainerComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"id",type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"location",type:"Location",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},inputsClass:[],outputsClass:[],properties:[{name:"componentInstance",deprecated:!1,deprecationMessage:"",type:"T",indexKey:"",optional:!0,description:`<p>The instance of component isOpen into modal</p>
`,line:25,rawdescription:`

The instance of component isOpen into modal
`},{name:"disableClose",defaultValue:"!!this.container.config?.disableClose",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Whether the user is allowed to close the dialog</p>
`,line:28,rawdescription:`
Whether the user is allowed to close the dialog`}],methods:[{name:"afterClosed",args:[],optional:!1,returnType:"any",typeParameters:[],line:159,deprecated:!1,deprecationMessage:""},{name:"afterOpen",args:[],optional:!1,returnType:"any",typeParameters:[],line:151,deprecated:!1,deprecationMessage:""},{name:"backdropClick",args:[],optional:!1,returnType:"any",typeParameters:[],line:93,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets an observable that emits when the overlay's backdrop has been clicked.
`,description:`<p>Gets an observable that emits when the overlay&#39;s backdrop has been clicked.</p>
`},{name:"beforeClose",args:[],optional:!1,returnType:"any",typeParameters:[],line:155,deprecated:!1,deprecationMessage:""},{name:"close",args:[{name:"dialogResult",type:"any",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:73,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dialogResult",type:"any",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"isAnimating",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:147,deprecated:!1,deprecationMessage:""},{name:"keydownEvents",args:[],optional:!1,returnType:"any",typeParameters:[],line:100,deprecated:!1,deprecationMessage:"",rawdescription:`

Gets an observable that emits when keydown events are targeted on the overlay.
`,description:`<p>Gets an observable that emits when keydown events are targeted on the overlay.</p>
`},{name:"updatePosition",args:[{name:"position",type:"DialogPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"",typeParameters:[],line:109,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the dialog's position.

`,description:`<p>Updates the dialog&#39;s position.</p>
`,jsdoctags:[{name:{pos:3504,end:3512,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"position"},type:"DialogPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:3498,end:3503,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"param"},comment:`<p>New dialog position.</p>
`}]},{name:"updateSize",args:[{name:"width",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'auto'"},{name:"height",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'auto'"}],optional:!1,returnType:"",typeParameters:[],line:141,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the dialog's width and height.

`,description:`<p>Updates the dialog&#39;s width and height.</p>
`,jsdoctags:[{name:{pos:4363,end:4368,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"width"},type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'auto'",tagName:{pos:4357,end:4362,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"param"},comment:`<p>New width of the dialog.</p>
`},{name:{pos:4409,end:4415,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"height"},type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'auto'",tagName:{pos:4403,end:4408,kind:80,id:0,flags:16842752,transformFlags:0,escapedText:"param"},comment:`<p>New height of the dialog.</p>
`}]}],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]}],directives:[{name:"DateTimeDirective",id:"directive-DateTimeDirective-68e854004e9f3a7d7ed4cff85bc02d93b9d274cc232d5db5cbf85ec5a4c78043228bea33828b36d1f8a993f19a3255195ab2d12cd869bc972fdc7c6f22f892a9",file:"src/lib/class/date-time.class.ts",type:"directive",description:"",rawdescription:`
`,providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,modifierKind:[148],required:!1},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,modifierKind:[148],required:!1},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,rawdescription:`

When true, the timer will be in 12-hour format mode
`,modifierKind:[148],required:!1},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,rawdescription:`

When true, shows a timer to configure the seconds value
`,modifierKind:[148],required:!1},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",type:"ViewType",indexKey:"",optional:!1,description:`<p>The view that the calendar should start on</p>
`,line:35,rawdescription:`

The view that the calendar should start on
`,modifierKind:[148],required:!1},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Hours to change per step</p>
`,line:40,rawdescription:`

Hours to change per step
`,modifierKind:[148],required:!1},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Minutes to change per step</p>
`,line:45,rawdescription:`

Minutes to change per step
`,modifierKind:[148],required:!1},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Seconds to change per step</p>
`,line:50,rawdescription:`

Seconds to change per step
`,modifierKind:[148],required:!1}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148]},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128]},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128]}],methodsClass:[{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T | Array<T | undefined>",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:90,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"date",type:"T | Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:98,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:120,jsdoctags:[{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{selected:{name:"selected",getSignature:{name:"selected",type:"",returnType:"T | undefined",line:66}},selecteds:{name:"selecteds",getSignature:{name:"selecteds",type:"",returnType:"Array<T | undefined>",line:68}},dateTimeFilter:{name:"dateTimeFilter",getSignature:{name:"dateTimeFilter",type:"",returnType:"DateFilter | undefined",line:70}},max:{name:"max",getSignature:{name:"max",type:"",returnType:"T | undefined",line:72}},min:{name:"min",getSignature:{name:"min",type:"",returnType:"T | undefined",line:74}},selectMode:{name:"selectMode",getSignature:{name:"selectMode",type:"",returnType:"SelectMode | undefined",line:76}},startAt:{name:"startAt",getSignature:{name:"startAt",type:"",returnType:"T | undefined",line:78}},isOpen:{name:"isOpen",getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:80}},pickerMode:{name:"pickerMode",getSignature:{name:"pickerMode",type:"",returnType:"PickerMode",line:82}},pickerType:{name:"pickerType",getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:84}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:86}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:88}},formatString:{name:"formatString",getSignature:{name:"formatString",type:"string",returnType:"string",line:100}},disabled:{name:"disabled",getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:118}}}},{name:"DateTimeInputDirective",id:"directive-DateTimeInputDirective-04c04b616a28f44f520b3b807c2fa7f68946d0aed4918cb89a0ad94041a99d07728d5dd53b6e680c9fe4fcbffd989ea3759a7305bb7f16217bab9fefc60cd6e1",file:"src/lib/date-time/date-time-picker-input.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"input[nxtDateTime]",providers:[{name:"NXT_DATETIME_VALUE_ACCESSOR"},{name:"NXT_DATETIME_VALIDATORS"}],exportAs:"nxtDateTimeInput",hostDirectives:[],standalone:!1,inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",rawdescription:`

A function to filter available date & time
`,description:`<p>A function to filter available date &amp; time</p>
`,line:51,type:"DateFilter | undefined",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date & time picker input is disabled`,description:`<p>Whether the date &amp; time picker input is disabled</p>
`,line:62,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,line:95,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,line:83,type:"T",decorators:[]},{name:"nxtDateTime",deprecated:!1,deprecationMessage:"",rawdescription:`

The date & time picker this input is associated with
`,description:`<p>The date &amp; time picker this input is associated with</p>
`,line:42,type:"DateTimeComponent<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`,line:114,type:"SelectMode",decorators:[]},{name:"value",deprecated:!1,deprecationMessage:"",line:138,type:"T",decorators:[]},{name:"values",deprecated:!1,deprecationMessage:"",line:160,type:"Array<T>",decorators:[]},{name:"rangeSeparator",defaultValue:"'~'",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>The character to separate the &#39;from&#39; and &#39;to&#39; in input value</p>
`,line:134,rawdescription:`

The character to separate the 'from' and 'to' in input value
`,modifierKind:[148],required:!1}],outputsClass:[{name:"dateTimeChange",defaultValue:"new EventEmitter<DateTimeInputEvent<T>>()",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nCallback to invoke when `change` event is fired on this `<input>`\n",description:`<p>Callback to invoke when <code>change</code> event is fired on this <code>&lt;input&gt;</code></p>
`,line:190,type:"EventEmitter"},{name:"dateTimeInput",defaultValue:"new EventEmitter<DateTimeInputEvent<T>>()",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nCallback to invoke when an `input` event is fired on this `<input>`.\n",description:`<p>Callback to invoke when an <code>input</code> event is fired on this <code>&lt;input&gt;</code>.</p>
`,line:196,type:"EventEmitter"}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"blur",args:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:480},{name:"change",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:497},{name:"input",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:485},{name:"keydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",rawdescription:`

Open the picker when user hold alt + ArrowDown
`,description:`<p>Open the picker when user hold alt + ArrowDown</p>
`,line:472}],propertiesClass:[{name:"disabledChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the disabled state has changed</p>
`,line:353,rawdescription:`
Emits when the disabled state has changed`,modifierKind:[148]},{name:"dtPicker",deprecated:!1,deprecationMessage:"",type:"DateTimeComponent<T>",indexKey:"",optional:!0,description:`<p>The date-time-picker that this input is associated with</p>
`,line:215,rawdescription:`
The date-time-picker that this input is associated with`},{name:"valueChange",defaultValue:"new EventEmitter<Array<T | undefined> | T | undefined>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the value changes (either due to user input or programmatic change)</p>
`,line:350,rawdescription:`
Emits when the value changes (either due to user input or programmatic change)`,modifierKind:[148]}],methodsClass:[{name:"formatNativeInputValue",args:[],optional:!1,returnType:"void",typeParameters:[],line:516,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the native input property 'value'
`,description:`<p>Set the native input property &#39;value&#39;</p>
`},{name:"handleBlurOnHost",args:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:480,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'blur', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleChangeOnHost",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:497,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'change', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleInputOnHost",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:485,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'input', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleKeydownOnHost",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:472,deprecated:!1,deprecationMessage:"",rawdescription:`

Open the picker when user hold alt + ArrowDown
`,description:`<p>Open the picker when user hold alt + ArrowDown</p>
`,decorators:[{name:"HostListener",stringifiedArguments:"'keydown', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:405,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:430,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:397,deprecated:!1,deprecationMessage:""},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:448,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:452,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnValidatorChange",args:[{name:"fn",type:"function",deprecated:!1,deprecationMessage:"",function:[]}],optional:!1,returnType:"void",typeParameters:[],line:464,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"function",deprecated:!1,deprecationMessage:"",function:[],tagName:{text:"param"}}]},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:456,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"validate",args:[{name:"c",type:"AbstractControl",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"any",typeParameters:[],line:460,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"c",type:"AbstractControl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"writeValue",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:439,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],implements:["OnInit","AfterContentInit","OnDestroy","ControlValueAccessor","Validator"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elmRef",type:"ElementRef<HTMLInputElement>",deprecated:!1,deprecationMessage:""},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:383,jsdoctags:[{name:"elmRef",type:"ElementRef<HTMLInputElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{dateTime:{name:"dateTime",setSignature:{name:"dateTime",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"DateTimeComponent<T>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:42,rawdescription:`

The date & time picker this input is associated with
`,description:`<p>The date &amp; time picker this input is associated with</p>
`,jsdoctags:[{name:"value",type:"DateTimeComponent<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:51,rawdescription:`

A function to filter available date & time
`,description:`<p>A function to filter available date &amp; time</p>
`,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:55}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:66,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"",returnType:"",line:62,rawdescription:`
Whether the date & time picker input is disabled`,description:`<p>Whether the date &amp; time picker input is disabled</p>
`}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:87,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:83,rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:99,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:95,rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:118,jsdoctags:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"",line:114,rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`}},value:{name:"value",setSignature:{name:"value",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:142,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"value",type:"",returnType:"",line:138}},values:{name:"values",setSignature:{name:"values",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:164,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"values",type:"",returnType:"",line:160}},elementRef:{name:"elementRef",getSignature:{name:"elementRef",type:"",returnType:"",line:198}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:202}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:206}}}},{name:"DateTimeTriggerDirective",id:"directive-DateTimeTriggerDirective-195962cb0219900f75c24f58fa7326b5edd02a5ff5782ed3354c9f14f394093db6f9e71595fdc92b0e2890aa82b27bf57ca5a8bba204cb1703db9e2e80a15098",file:"src/lib/date-time/date-time-picker-trigger.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtDateTimeTrigger]",providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"disabled",deprecated:!1,deprecationMessage:"",line:14,type:"boolean",decorators:[]},{name:"dtPicker",defaultValue:"undefined, { alias: 'nxtDateTimeTrigger' }",deprecated:!1,deprecationMessage:"",type:"DateTimeComponent<T>",indexKey:"",optional:!1,description:"",line:10,modifierKind:[148],required:!1}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"click",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:53}],propertiesClass:[],methodsClass:[{name:"handleClickOnHost",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:53,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'click', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:43,deprecated:!1,deprecationMessage:""},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:37,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:47,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:34,deprecated:!1,deprecationMessage:""}],extends:[],implements:["OnInit","OnChanges","AfterContentInit","OnDestroy"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""}],line:28,jsdoctags:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:18,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:14}}}}],components:[{name:"CalendarComponent",id:"component-CalendarComponent-8fc4d7c01c9c6c4d29cbd34cf0ef19eafae982a8affee863f0c3fcacfb598368a8963bdc24ac5f2885ba323765236f6c2d8637bc04d4a358c50867c686f2964c",file:"src/lib/date-time/calendar/calendar.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-calendar",styleUrls:["./calendar.component.scss"],styles:[],templateUrl:["./calendar.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"max",deprecated:!1,deprecationMessage:"",line:60,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:40,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:80,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:95,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:106,type:"Array<T>",decorators:[]},{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",type:"DateFilter<T>",indexKey:"",optional:!1,description:`<p>Date filter for the month and year view</p>
`,line:30,rawdescription:`

Date filter for the month and year view
`,modifierKind:[148],required:!1},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Set the first day of week</p>
`,line:35,rawdescription:`

Set the first day of week
`,modifierKind:[148],required:!1},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Whether to hide dates in other months at the start or end of the current month</p>
`,line:125,rawdescription:`

Whether to hide dates in other months at the start or end of the current month
`,modifierKind:[148],required:!1},{name:"selectMode",deprecated:!1,deprecationMessage:"",type:"SelectMode",indexKey:"",optional:!1,description:"",line:90,modifierKind:[148],required:!1},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",type:'"month" | "year" | "multi-years"',indexKey:"",optional:!1,description:`<p>The view that the calendar should start in</p>
`,line:120,rawdescription:`

The view that the calendar should start in
`,modifierKind:[148],required:!1}],outputsClass:[{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected month

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected month</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:153,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when the currently picker moment changes`,description:`<p>Emits when the currently picker moment changes</p>
`,line:129,type:"EventEmitter"},{name:"selectedChange",defaultValue:"new EventEmitter<T | undefined>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when the currently selected date changes`,description:`<p>Emits when the currently selected date changes</p>
`,line:133,type:"EventEmitter"},{name:"userSelection",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is selected`,description:`<p>Emits when any date is selected</p>
`,line:137,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:145,type:"EventEmitter"}],propertiesClass:[{name:"dateTimeFilterForViews",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date filter for the month and year view</p>
`,line:222,rawdescription:`

Date filter for the month and year view
`}],methodsClass:[{name:"dateSelected",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:315,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"focusActiveCell",args:[],optional:!1,returnType:"void",typeParameters:[],line:378,deprecated:!1,deprecationMessage:"",rawdescription:`

Focus to the host element
`,description:`<p>Focus to the host element</p>
`},{name:"goToDateInView",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""},{name:"view",type:'"month" | "year" | "multi-years"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:331,deprecated:!1,deprecationMessage:"",rawdescription:`

Change the pickerMoment value and switch to a specific view
`,description:`<p>Change the pickerMoment value and switch to a specific view</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"view",type:'"month" | "year" | "multi-years"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handlePickerMomentChange",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:343,deprecated:!1,deprecationMessage:"",rawdescription:`

Change the pickerMoment value
`,description:`<p>Change the pickerMoment value</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"nextButtonEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:369,deprecated:!1,deprecationMessage:"",rawdescription:`

Whether the next period button is enabled.
`,description:`<p>Whether the next period button is enabled.</p>
`},{name:"nextClicked",args:[],optional:!1,returnType:"void",typeParameters:[],line:307,deprecated:!1,deprecationMessage:"",rawdescription:`

Handles user clicks on the next button.
`,description:`<p>Handles user clicks on the next button.</p>
`},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:269,deprecated:!1,deprecationMessage:""},{name:"ngAfterViewChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:273,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:280,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:267,deprecated:!1,deprecationMessage:""},{name:"prevButtonEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:360,deprecated:!1,deprecationMessage:"",rawdescription:`

Whether the previous period button is enabled.
`,description:`<p>Whether the previous period button is enabled.</p>
`},{name:"previousClicked",args:[],optional:!1,returnType:"void",typeParameters:[],line:296,deprecated:!1,deprecationMessage:"",rawdescription:`

Handles user clicks on the previous button.
`,description:`<p>Handles user clicks on the previous button.</p>
`},{name:"selectMonthInYearView",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:395,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectYearInMultiYearView",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:391,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"toggleViews",args:[],optional:!1,returnType:"void",typeParameters:[],line:288,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggle between month view and year view
`,description:`<p>Toggle between month view and year view</p>
`},{name:"userSelected",args:[],optional:!1,returnType:"void",typeParameters:[],line:353,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"CdkMonitorFocus"},{name:"MonthViewComponent",type:"component"},{name:"YearViewComponent",type:"component"},{name:"MultiYearViewComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:251,jsdoctags:[{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","AfterViewChecked","OnDestroy"],accessors:{min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:44,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:40}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:64,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:60}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:84,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:80}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:99,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:95}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:110,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:106}},periodButtonText:{name:"periodButtonText",getSignature:{name:"periodButtonText",type:"string",returnType:"string",line:155}},periodButtonLabel:{name:"periodButtonLabel",getSignature:{name:"periodButtonLabel",type:"string",returnType:"string",line:164}},prevButtonLabel:{name:"prevButtonLabel",getSignature:{name:"prevButtonLabel",type:"",returnType:"",line:170}},nextButtonLabel:{name:"nextButtonLabel",getSignature:{name:"nextButtonLabel",type:"",returnType:"",line:179}},currentView:{name:"currentView",setSignature:{name:"currentView",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"view",type:'"month" | "year" | "multi-years" | undefined',deprecated:!1,deprecationMessage:""}],returnType:"void",line:193,jsdoctags:[{name:"view",type:'"month" | "year" | "multi-years" | undefined',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"currentView",type:"",returnType:"",line:189}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:198}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:202}},showControlArrows:{name:"showControlArrows",getSignature:{name:"showControlArrows",type:"boolean",returnType:"boolean",line:211}},isMonthView:{name:"isMonthView",getSignature:{name:"isMonthView",type:"",returnType:"",line:215}}}},{name:"DateTimeComponent",id:"component-DateTimeComponent-43052a4cde04aedc376357278fa461e084fad45733c50959660879a6eac60921979a083967661d8760bab3954b2f5e58fb3aff4d989c6168e607a7b06aa2ee34",file:"src/lib/date-time/date-time-picker/date-time-picker.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time",styleUrls:["./date-time-picker.component.scss"],styles:[],templateUrl:["./date-time-picker.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`,line:118,type:"boolean",decorators:[]},{name:"isOpen",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the calendar is open`,description:`<p>Whether the calendar is open</p>
`,line:133,type:"boolean",decorators:[]},{name:"pickerMode",deprecated:!1,deprecationMessage:"",rawdescription:`

The style the picker would open as

-    \`'popup'\` - display picker attached to the trigger element
-    \`'dialog'\` - display picker as a dialog
`,description:`<p>The style the picker would open as</p>
<ul>
<li><code>&#39;popup&#39;</code> - display picker attached to the trigger element</li>
<li><code>&#39;dialog&#39;</code> - display picker as a dialog</li>
</ul>
`,line:103,type:"PickerMode",decorators:[]},{name:"pickerType",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the type of the dateTime picker

-    \`'both'\` - show both calendar and timer
-    \`'calendar'\` - show only calendar
-    \`'timer'\` - show only timer
`,description:`<p>Set the type of the dateTime picker</p>
<ul>
<li><code>&#39;both&#39;</code> - show both calendar and timer</li>
<li><code>&#39;calendar&#39;</code> - show only calendar</li>
<li><code>&#39;timer&#39;</code> - show only timer</li>
</ul>
`,line:82,type:"PickerType",decorators:[]},{name:"startAt",deprecated:!1,deprecationMessage:"",rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`,line:45,type:"T",decorators:[]},{name:"backdropClass",deprecated:!1,deprecationMessage:"",type:"string | string[]",indexKey:"",optional:!1,description:`<p>Custom class for the picker backdrop</p>
`,line:33,rawdescription:`
Custom class for the picker backdrop`,modifierKind:[148],required:!1},{name:"panelClass",deprecated:!1,deprecationMessage:"",type:"string | string[]",indexKey:"",optional:!1,description:`<p>Custom class for the picker overlay pane</p>
`,line:36,rawdescription:`
Custom class for the picker overlay pane`,modifierKind:[148],required:!1},{name:"scrollStrategy",deprecated:!1,deprecationMessage:"",type:"ScrollStrategy",indexKey:"",optional:!1,description:`<p>The scroll strategy when the picker is open (see <a href="https://material.angular.io/cdk/overlay/overview#scroll-strategies">CDK documentation</a>)</p>
`,line:147,rawdescription:`

The scroll strategy when the picker is open (see [CDK documentation](https://material.angular.io/cdk/overlay/overview#scroll-strategies))
`,modifierKind:[148],required:!1},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,rawdescription:`

When true, the timer will be in 12-hour format mode
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,rawdescription:`

When true, shows a timer to configure the seconds value
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",type:"ViewType",indexKey:"",optional:!1,description:`<p>The view that the calendar should start on</p>
`,line:35,rawdescription:`

The view that the calendar should start on
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Hours to change per step</p>
`,line:40,rawdescription:`

Hours to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Minutes to change per step</p>
`,line:45,rawdescription:`

Minutes to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Seconds to change per step</p>
`,line:50,rawdescription:`

Seconds to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}}],outputsClass:[{name:"close",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback when the picker is closed
`,description:`<p>Callback when the picker is closed</p>
`,line:161,type:"EventEmitter"},{name:"isOpenChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits when picker open state changes
`,description:`<p>Emits when picker open state changes</p>
`,line:183,type:"EventEmitter"},{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected month in year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:177,type:"EventEmitter"},{name:"open",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback when the picker is opened
`,description:`<p>Callback when the picker is opened</p>
`,line:154,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected year in multi-year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected year in multi-year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:169,type:"EventEmitter"}],propertiesClass:[{name:"confirmSelectedChange",defaultValue:"new EventEmitter<Array<T | undefined> | T>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emit when the selected value has been confirmed</p>
`,line:188,rawdescription:`

Emit when the selected value has been confirmed
`,modifierKind:[148]},{name:"disabledChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the date time picker is disabled</p>
`,line:193,rawdescription:`

Emits when the date time picker is disabled
`,modifierKind:[148]},{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`,inheritance:{file:"DateTimeDirective"}},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148],inheritance:{file:"DateTimeDirective"}},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128],inheritance:{file:"DateTimeDirective"}},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128],inheritance:{file:"DateTimeDirective"}}],methodsClass:[{name:"close",args:[],optional:!1,returnType:"void",typeParameters:[],line:418,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the picker
`,description:`<p>Hide the picker</p>
`},{name:"confirmSelect",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:476,deprecated:!1,deprecationMessage:"",rawdescription:`

Confirm the selected value
`,description:`<p>Confirm the selected value</p>
`,jsdoctags:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:282,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:280,deprecated:!1,deprecationMessage:""},{name:"open",args:[],optional:!1,returnType:"void",typeParameters:[],line:310,deprecated:!1,deprecationMessage:""},{name:"registerInput",args:[{name:"inputDirective",type:"DateTimeInputDirective<T>",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:293,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"inputDirective",type:"DateTimeInputDirective<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:371,deprecated:!1,deprecationMessage:"",rawdescription:`

Selects the given date
`,description:`<p>Selects the given date</p>
`,jsdoctags:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:411,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view
`,description:`<p>Emits selected month in year view</p>
`,jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:404,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year in multi-year view
`,description:`<p>Emits the selected year in multi-year view</p>
`,jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"overlay",type:"Overlay",deprecated:!1,deprecationMessage:""},{name:"viewContainerRef",type:"ViewContainerRef",deprecated:!1,deprecationMessage:""},{name:"dialogService",type:"DialogService",deprecated:!1,deprecationMessage:""},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""},{name:"defaultScrollStrategy",type:"function",deprecated:!1,deprecationMessage:"",function:[]},{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0}],line:258,jsdoctags:[{name:"overlay",type:"Overlay",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"viewContainerRef",type:"ViewContainerRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dialogService",type:"DialogService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"defaultScrollStrategy",type:"function",deprecated:!1,deprecationMessage:"",function:[],tagName:{text:"param"}},{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:["DateTimeDirective"],implements:["OnInit","OnDestroy"],accessors:{startAt:{name:"startAt",setSignature:{name:"startAt",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:67,jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"startAt",type:"",returnType:"",line:45,rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`}},pickerType:{name:"pickerType",setSignature:{name:"pickerType",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:""}],returnType:"void",line:86,jsdoctags:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:82,rawdescription:`

Set the type of the dateTime picker

-    \`'both'\` - show both calendar and timer
-    \`'calendar'\` - show only calendar
-    \`'timer'\` - show only timer
`,description:`<p>Set the type of the dateTime picker</p>
<ul>
<li><code>&#39;both&#39;</code> - show both calendar and timer</li>
<li><code>&#39;calendar&#39;</code> - show only calendar</li>
<li><code>&#39;timer&#39;</code> - show only timer</li>
</ul>
`}},pickerMode:{name:"pickerMode",setSignature:{name:"pickerMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"PickerMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:107,jsdoctags:[{name:"mode",type:"PickerMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMode",type:"",returnType:"",line:103,rawdescription:`

The style the picker would open as

-    \`'popup'\` - display picker attached to the trigger element
-    \`'dialog'\` - display picker as a dialog
`,description:`<p>The style the picker would open as</p>
<ul>
<li><code>&#39;popup&#39;</code> - display picker attached to the trigger element</li>
<li><code>&#39;dialog&#39;</code> - display picker as a dialog</li>
</ul>
`}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:122,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:118,rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`}},isOpen:{name:"isOpen",setSignature:{name:"isOpen",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:137,jsdoctags:[{name:"val",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:133,rawdescription:`
Whether the calendar is open`,description:`<p>Whether the calendar is open</p>
`}},dtInput:{name:"dtInput",getSignature:{name:"dtInput",type:"",returnType:"",line:210}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:219,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:215}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:229,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:225}},min:{name:"min",getSignature:{name:"min",type:"",returnType:"",line:235,rawdescription:`
The minimum selectable date`,description:`<p>The minimum selectable date</p>
`}},max:{name:"max",getSignature:{name:"max",type:"",returnType:"",line:240,rawdescription:`
The maximum selectable date`,description:`<p>The maximum selectable date</p>
`}},dateTimeFilter:{name:"dateTimeFilter",getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:244}},selectMode:{name:"selectMode",getSignature:{name:"selectMode",type:"",returnType:"",line:248}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"",returnType:"",line:252}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"",returnType:"",line:256}}}},{name:"DateTimeInlineComponent",id:"component-DateTimeInlineComponent-7bdf095500c631437a2642de96432d9028d80bc4bc1087a99dfbb0f1a25600f8927ebddc85dd928fdd9e68b221b4ebcb8f00d5294a75e15e4ed5cfb5fa8f889d",file:"src/lib/date-time/date-time-inline/date-time-inline.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[{name:"NXT_DATETIME_VALUE_ACCESSOR"}],selector:"nxt-date-time-inline",styleUrls:["./date-time-inline.component.scss"],styles:[],templateUrl:["./date-time-inline.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",rawdescription:`
A function to filter available date & time`,description:`<p>A function to filter available date &amp; time</p>
`,line:122,type:"any",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`,line:52,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,line:145,type:"T | undefined",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,line:133,type:"T | undefined",decorators:[]},{name:"pickerType",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the type of the dateTime picker

-    \`'both'\` - show both calendar and timer
-    \`'calendar'\` - show only calendar
-    \`'timer'\` - show only timer
`,description:`<p>Set the type of the dateTime picker</p>
<ul>
<li><code>&#39;both&#39;</code> - show both calendar and timer</li>
<li><code>&#39;calendar&#39;</code> - show only calendar</li>
<li><code>&#39;timer&#39;</code> - show only timer</li>
</ul>
`,line:39,type:"PickerType",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`,line:70,type:"SelectMode",decorators:[]},{name:"startAt",deprecated:!1,deprecationMessage:"",rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`,line:94,type:"T",decorators:[]},{name:"value",deprecated:!1,deprecationMessage:"",line:156,type:"T",decorators:[]},{name:"values",deprecated:!1,deprecationMessage:"",line:169,type:"any",decorators:[]},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,rawdescription:`

When true, the timer will be in 12-hour format mode
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,rawdescription:`

When true, shows a timer to configure the seconds value
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",type:"ViewType",indexKey:"",optional:!1,description:`<p>The view that the calendar should start on</p>
`,line:35,rawdescription:`

The view that the calendar should start on
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Hours to change per step</p>
`,line:40,rawdescription:`

Hours to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Minutes to change per step</p>
`,line:45,rawdescription:`

Minutes to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Seconds to change per step</p>
`,line:50,rawdescription:`

Seconds to change per step
`,modifierKind:[148],required:!1,inheritance:{file:"DateTimeDirective"}}],outputsClass:[{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected month in year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:202,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected year in multi-year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected year in multi-year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:194,type:"EventEmitter"}],propertiesClass:[{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`,inheritance:{file:"DateTimeDirective"}},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148],inheritance:{file:"DateTimeDirective"}},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128],inheritance:{file:"DateTimeDirective"}},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128],inheritance:{file:"DateTimeDirective"}}],methodsClass:[{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:262,deprecated:!1,deprecationMessage:""},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:285,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:289,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:297,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:321,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view
`,description:`<p>Emits selected month in year view</p>
`,jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:314,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year in multi-year view
`,description:`<p>Emits the selected year in multi-year view</p>
`,jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:293,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"writeValue",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:268,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"DateTimeContainerComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:251,jsdoctags:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:["DateTimeDirective"],implements:["OnInit","ControlValueAccessor"],accessors:{pickerType:{name:"pickerType",setSignature:{name:"pickerType",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:""}],returnType:"void",line:43,jsdoctags:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:39,rawdescription:`

Set the type of the dateTime picker

-    \`'both'\` - show both calendar and timer
-    \`'calendar'\` - show only calendar
-    \`'timer'\` - show only timer
`,description:`<p>Set the type of the dateTime picker</p>
<ul>
<li><code>&#39;both&#39;</code> - show both calendar and timer</li>
<li><code>&#39;calendar&#39;</code> - show only calendar</li>
<li><code>&#39;timer&#39;</code> - show only timer</li>
</ul>
`}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:56,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:52,rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:74,jsdoctags:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"",line:70,rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`}},startAt:{name:"startAt",setSignature:{name:"startAt",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:113,jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"startAt",type:"",returnType:"",line:94,rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:126,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:122,rawdescription:`
A function to filter available date & time`,description:`<p>A function to filter available date &amp; time</p>
`}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:133,rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:138}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:145,rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:150}},value:{name:"value",setSignature:{name:"value",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:160,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"value",type:"",returnType:"",line:156}},values:{name:"values",setSignature:{name:"values",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:173,jsdoctags:[{name:"values",type:"Array<T | undefined> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"values",type:"",returnType:"",line:169}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:209,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:205}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:219,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:215}},isOpen:{name:"isOpen",getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:224}},pickerMode:{name:"pickerMode",getSignature:{name:"pickerMode",type:"",returnType:"PickerMode",line:228}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:232}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:236}}}},{name:"MonthViewComponent",id:"component-MonthViewComponent-055c7f0724adbe0efb539a57361f1186919b8431de4f394f6e45552d486c996318c7c4ffa472d2c4d342d1e77327e8ff251d6da8cb30f570fdd7451a5b49060e",file:"src/lib/date-time/calendar-month-view/calendar-month-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-month-view",styleUrls:["./calendar-month-view.component.scss"],styles:[],templateUrl:["./calendar-month-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:131,type:"any",decorators:[]},{name:"firstDayOfWeek",deprecated:!1,deprecationMessage:"",line:36,type:"number",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:162,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:146,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:102,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:72,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:88,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:57,type:"SelectMode",decorators:[]},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Whether to hide dates in other months at the start or end of the current month</p>
`,line:28,rawdescription:`

Whether to hide dates in other months at the start or end of the current month
`,modifierKind:[148],required:!1}],outputsClass:[{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:243,type:"EventEmitter"},{name:"selectedChange",defaultValue:"new EventEmitter<T | undefined>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new date is selected
`,description:`<p>Callback to invoke when a new date is selected</p>
`,line:233,type:"EventEmitter"},{name:"userSelection",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when any date is selected.
`,description:`<p>Callback to invoke when any date is selected.</p>
`,line:239,type:"EventEmitter"}],propertiesClass:[{name:"firstRowOffset",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:227},{name:"selectedDates",deprecated:!1,deprecationMessage:"",type:"Array<number | undefined>",indexKey:"",optional:!0,description:`<p>An array to hold all selectedDates&#39; value
the value is the day number in current month</p>
`,line:224,rawdescription:`

An array to hold all selectedDates' value
the value is the day number in current month
`},{name:"todayDate",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!0,description:`<p>The date of the month that today falls on.</p>
`,line:218,rawdescription:`

The date of the month that today falls on.
`}],methodsClass:[{name:"handleCalendarKeydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:312,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle keydown event on calendar body
`,description:`<p>Handle keydown event on calendar body</p>
`,jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"isSameMonth",args:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:548,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the give dates are defined and in the same month
`,description:`<p>Check if the give dates are defined and in the same month</p>
`,jsdoctags:[{name:"dateLeft",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}},{name:"dateRight",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:271,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:276,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:261,deprecated:!1,deprecationMessage:""},{name:"selectCalendarCell",args:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:284,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle a calendarCell selected
`,description:`<p>Handle a calendarCell selected</p>
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"CalendarBodyComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:252,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","OnDestroy"],accessors:{firstDayOfWeek:{name:"firstDayOfWeek",setSignature:{name:"firstDayOfWeek",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"void",line:40,jsdoctags:[{name:"val",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"firstDayOfWeek",type:"number",returnType:"number",line:36}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:61,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:57}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:76,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:72}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:92,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:88}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:106,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:102}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:135,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:131}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:150,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:146}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:166,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:162}},weekdays:{name:"weekdays",getSignature:{name:"weekdays",type:"",returnType:"",line:177}},days:{name:"days",getSignature:{name:"days",type:"",returnType:"",line:182}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"",line:186}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:197}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:201}}}},{name:"MultiYearViewComponent",id:"component-MultiYearViewComponent-14909d369830c623a2460c1152f9bb4cab4f5500cf089f21f036968252171de9d84b4bd7af3faa7bb48fe81877fa128562e964d3673a697c5abbeb80e485514a",file:"src/lib/date-time/calendar-multi-year-view/calendar-multi-year-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-multi-year-view",styleUrls:["./calendar-multi-year-view.component.scss"],styles:[],templateUrl:["./calendar-multi-year-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:96,type:"any",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:125,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:110,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:76,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:46,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:62,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:31,type:"SelectMode",decorators:[]}],outputsClass:[{name:"change",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new month is selected
`,description:`<p>Callback to invoke when a new month is selected</p>
`,line:190,type:"EventEmitter"},{name:"keyboardEnter",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when use keyboard enter to select a calendar cell`,description:`<p>Emits when use keyboard enter to select a calendar cell</p>
`,line:206,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:202,type:"EventEmitter<T>"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:198,type:"EventEmitter"}],propertiesClass:[],methodsClass:[{name:"generateYearList",args:[],optional:!1,returnType:"void",typeParameters:[],line:283,deprecated:!1,deprecationMessage:""},{name:"handleCalendarKeydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:318,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"nextEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:314,deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the next period button is enabled`,description:`<p>Whether the next period button is enabled</p>
`},{name:"nextYearList",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:277,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate the next year list
`,description:`<p>Generate the next year list</p>
`,jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:232,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:229,deprecated:!1,deprecationMessage:""},{name:"previousEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:306,deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the previous period button is enabled`,description:`<p>Whether the previous period button is enabled</p>
`},{name:"prevYearList",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:268,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate the previous year list
`,description:`<p>Generate the previous year list</p>
`,jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectCalendarCell",args:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:241,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle a calendarCell selected
`,description:`<p>Handle a calendarCell selected</p>
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"CalendarBodyComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""}],line:221,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit"],accessors:{selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:35,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:31}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:50,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:46}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:66,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:62}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:80,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:76}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:100,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:96}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:114,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:110}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:129,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:125}},todayYear:{name:"todayYear",getSignature:{name:"todayYear",type:"",returnType:"",line:138}},years:{name:"years",getSignature:{name:"years",type:"",returnType:"",line:143}},selectedYears:{name:"selectedYears",getSignature:{name:"selectedYears",type:"",returnType:"",line:148}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:154}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:158}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"number | undefined",line:163}},tableHeader:{name:"tableHeader",getSignature:{name:"tableHeader",type:"",returnType:"string | undefined",line:170}},prevButtonLabel:{name:"prevButtonLabel",getSignature:{name:"prevButtonLabel",type:"string",returnType:"string",line:177}},nextButtonLabel:{name:"nextButtonLabel",getSignature:{name:"nextButtonLabel",type:"string",returnType:"string",line:181}}}},{name:"TimerComponent",id:"component-TimerComponent-176f89ec159be684644d5c9ee906c6f938c609b0e118c510d2a9bb013f768b346c086a5deeff201be9af04ddeff21c376f857fffd417f4166946e86632eb0a95",file:"src/lib/date-time/timer/timer.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-timer",styleUrls:["./timer.component.scss"],styles:[],templateUrl:["./timer.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"max",deprecated:!1,deprecationMessage:"",line:45,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:33,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:21,type:"T",decorators:[]},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Whether the timer is in hour12 format</p>
`,line:64,rawdescription:`

Whether the timer is in hour12 format
`,modifierKind:[148],required:!1},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Whether to show the second&#39;s timer</p>
`,line:59,rawdescription:`

Whether to show the second's timer
`,modifierKind:[148],required:!1},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Hours to change per step</p>
`,line:69,rawdescription:`

Hours to change per step
`,modifierKind:[148],required:!1},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Minutes to change per step</p>
`,line:74,rawdescription:`

Minutes to change per step
`,modifierKind:[148],required:!1},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",indexKey:"",optional:!1,description:`<p>Seconds to change per step</p>
`,line:79,rawdescription:`

Seconds to change per step
`,modifierKind:[148],required:!1}],outputsClass:[{name:"selectedChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",line:151,type:"EventEmitter"}],propertiesClass:[],methodsClass:[{name:"downHourEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:253,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down hour button is enabled
`,description:`<p>Check if the down hour button is enabled</p>
`},{name:"downMinuteEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:273,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down minute button is enabled
`,description:`<p>Check if the down minute button is enabled</p>
`},{name:"downSecondEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:293,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down second button is enabled
`,description:`<p>Check if the down second button is enabled</p>
`},{name:"focus",args:[],optional:!1,returnType:"void",typeParameters:[],line:178,deprecated:!1,deprecationMessage:"",rawdescription:`

Focus to the host element
`,description:`<p>Focus to the host element</p>
`},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:173,deprecated:!1,deprecationMessage:""},{name:"setHourValue",args:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:204,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setHourValueViaInput",args:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:193,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the hour value via typing into timer box input
We need this to handle the hour value when the timer is in hour12 mode
`,description:`<p>Set the hour value via typing into timer box input
We need this to handle the hour value when the timer is in hour12 mode</p>
`,jsdoctags:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setMeridiem",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:222,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setMinuteValue",args:[{name:"minutes",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:210,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setSecondValue",args:[{name:"seconds",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:216,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"upHourEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:243,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up hour button is enabled
`,description:`<p>Check if the up hour button is enabled</p>
`},{name:"upMinuteEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:263,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up minute button is enabled
`,description:`<p>Check if the up minute button is enabled</p>
`},{name:"upSecondEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:283,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up second button is enabled
`,description:`<p>Check if the up second button is enabled</p>
`}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"TimerBoxComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""}],line:163,jsdoctags:[{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit"],accessors:{pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:25,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:21}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:37,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:33}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:49,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:45}},hourValue:{name:"hourValue",getSignature:{name:"hourValue",type:"number",returnType:"number",line:81}},hourBoxValue:{name:"hourBoxValue",getSignature:{name:"hourBoxValue",type:"number",returnType:"number",line:90,rawdescription:`

The value would be displayed in hourBox.
We need this because the value displayed in hourBox it not
the same as the hourValue when the timer is in hour12Timer mode.
`,description:`<p>The value would be displayed in hourBox.
We need this because the value displayed in hourBox it not
the same as the hourValue when the timer is in hour12Timer mode.</p>
`}},minuteValue:{name:"minuteValue",getSignature:{name:"minuteValue",type:"number",returnType:"number",line:112}},secondValue:{name:"secondValue",getSignature:{name:"secondValue",type:"number",returnType:"number",line:116}},upHourButtonLabel:{name:"upHourButtonLabel",getSignature:{name:"upHourButtonLabel",type:"string",returnType:"string",line:120}},downHourButtonLabel:{name:"downHourButtonLabel",getSignature:{name:"downHourButtonLabel",type:"string",returnType:"string",line:124}},upMinuteButtonLabel:{name:"upMinuteButtonLabel",getSignature:{name:"upMinuteButtonLabel",type:"string",returnType:"string",line:128}},downMinuteButtonLabel:{name:"downMinuteButtonLabel",getSignature:{name:"downMinuteButtonLabel",type:"string",returnType:"string",line:132}},upSecondButtonLabel:{name:"upSecondButtonLabel",getSignature:{name:"upSecondButtonLabel",type:"string",returnType:"string",line:136}},downSecondButtonLabel:{name:"downSecondButtonLabel",getSignature:{name:"downSecondButtonLabel",type:"string",returnType:"string",line:140}},hour12ButtonLabel:{name:"hour12ButtonLabel",getSignature:{name:"hour12ButtonLabel",type:"string",returnType:"string",line:144}}}},{name:"YearViewComponent",id:"component-YearViewComponent-e9a54a4fbe943245ba7bf0151f883e45751cb7023b99bc9268bb2d5858424befff9f6e5868efeb70819af822c361212b712cc1bb73cc3c40721fd2e00b4d9b5c",file:"src/lib/date-time/calendar-year-view/calendar-year-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-year-view",styleUrls:["./calendar-year-view.component.scss"],styles:[],templateUrl:["./calendar-year-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:96,type:"any",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:125,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:110,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:73,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:45,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:57,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:30,type:"SelectMode",decorators:[]}],outputsClass:[{name:"change",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new month is selected
`,description:`<p>Callback to invoke when a new month is selected</p>
`,line:180,type:"EventEmitter"},{name:"keyboardEnter",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when use keyboard enter to select a calendar cell`,description:`<p>Emits when use keyboard enter to select a calendar cell</p>
`,line:196,type:"EventEmitter"},{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:188,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:192,type:"EventEmitter"}],propertiesClass:[{name:"selectedMonths",deprecated:!1,deprecationMessage:"",type:"Array<number | undefined>",indexKey:"",optional:!0,description:`<p>An array to hold all selectedDates&#39; month value
the value is the month number in current year</p>
`,line:173,rawdescription:`

An array to hold all selectedDates' month value
the value is the month number in current year
`},{name:"todayMonth",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!0,description:"",line:167}],methodsClass:[{name:"handleCalendarKeydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:273,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle keydown event on calendar body
`,description:`<p>Handle keydown event on calendar body</p>
`,jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:223,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:228,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:216,deprecated:!1,deprecationMessage:""},{name:"selectCalendarCell",args:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:236,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle a calendarCell selected
`,description:`<p>Handle a calendarCell selected</p>
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"CalendarBodyComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:205,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","OnDestroy"],accessors:{selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:34,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:30}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:49,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:45}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:61,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:57}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:77,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:73}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:100,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:96}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:114,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:110}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:129,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:125}},months:{name:"months",getSignature:{name:"months",type:"",returnType:"",line:140}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"number | undefined",line:144}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:151}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:155}}}}],modules:[{name:"DateTimeModule",id:"module-DateTimeModule-40b49b59d34db481386b5506c04c3e39498c4a68b22bacb41a5fa9aabc246dcb67f3912838555613a0a822cd6ac3082b0958631073cdfc843092d042568ea437",description:"",deprecationMessage:"use standalone imports",deprecated:!0,file:"src/lib/date-time/date-time.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"CalendarComponent"},{name:"DateTimeComponent"},{name:"DateTimeInlineComponent"},{name:"DateTimeInputDirective"},{name:"DateTimeTriggerDirective"},{name:"MonthViewComponent"},{name:"MultiYearViewComponent"},{name:"TimerComponent"},{name:"YearViewComponent"}]},{type:"exports",elements:[{name:"CalendarComponent"},{name:"DateTimeComponent"},{name:"DateTimeInlineComponent"},{name:"DateTimeInputDirective"},{name:"DateTimeTriggerDirective"},{name:"MonthViewComponent"},{name:"MultiYearViewComponent"},{name:"TimerComponent"},{name:"YearViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"MomentDateTimeModule",id:"module-MomentDateTimeModule-1efe9f1d5d0db1fe4299e02e5aba67ca59a65778406445ebb0eda59a127566e2de0166c9a8c7140f5d78246398e583b6943879d7881daf64e92f458b46b23e32",description:"",deprecationMessage:"use provideMomentDateTimeAdapter",deprecated:!0,file:"moment-adapter/src/moment-adapter.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[]},{type:"exports",elements:[]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"NativeDateTimeModule",id:"module-NativeDateTimeModule-cf8a685c77e7eaaee67e7e00a21a12a911aaa8132b964f098ac8624ea6dbf30fd83b60ac98071a94de82ab1991e995164b87918ae807d76e10e1e9b20b753a76",description:"",deprecationMessage:"use provideNativeDateTimeAdapter",deprecated:!0,file:"native-adapter/src/native-adapter.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[]},{type:"exports",elements:[]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:{variables:[{name:"NXT_DATE_TIME_FORMATS",ctype:"miscellaneous",subtype:"variable",file:"src/lib/class/date-time-format.class.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<DateTimeFormats>('NXT_DATE_TIME_FORMATS')",rawdescription:"InjectionToken for date time picker that can be used to override default format",description:`<p>InjectionToken for date time picker that can be used to override default format</p>
`},{name:"NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS",ctype:"miscellaneous",subtype:"variable",file:"moment-adapter/src/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:`new InjectionToken<MomentDateTimeAdapterOptions>(\r
    'NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {\r
        providedIn: 'root',\r
        factory: NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY\r
    })`,rawdescription:"InjectionToken for moment date adapter to configure options",description:`<p>InjectionToken for moment date adapter to configure options</p>
`}],functions:[{name:"provideMomentDateTimeAdapter",file:"moment-adapter/src/moment-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"},{name:"provideNativeDateTimeAdapter",file:"native-adapter/src/native-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"}],typealiases:[{name:"DateFilter",ctype:"miscellaneous",subtype:"typealias",rawtype:"function",file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:184},{name:"PickerMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"popup" | "dialog" | "inline"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"PickerType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"both" | "calendar" | "timer"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"RenderItem",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "date"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SelectMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"single" | "range" | "rangeFrom" | "rangeTo"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ViewType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"month" | "year" | "multi-years"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],enumerations:[],groupedVariables:{"src/lib/class/date-time-format.class.ts":[{name:"NXT_DATE_TIME_FORMATS",ctype:"miscellaneous",subtype:"variable",file:"src/lib/class/date-time-format.class.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<DateTimeFormats>('NXT_DATE_TIME_FORMATS')",rawdescription:"InjectionToken for date time picker that can be used to override default format",description:`<p>InjectionToken for date time picker that can be used to override default format</p>
`}],"moment-adapter/src/date-time-adapter.class.ts":[{name:"NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS",ctype:"miscellaneous",subtype:"variable",file:"moment-adapter/src/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:`new InjectionToken<MomentDateTimeAdapterOptions>(\r
    'NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {\r
        providedIn: 'root',\r
        factory: NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY\r
    })`,rawdescription:"InjectionToken for moment date adapter to configure options",description:`<p>InjectionToken for moment date adapter to configure options</p>
`}]},groupedFunctions:{"moment-adapter/src/moment-adapter.module.ts":[{name:"provideMomentDateTimeAdapter",file:"moment-adapter/src/moment-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"}],"native-adapter/src/native-adapter.module.ts":[{name:"provideNativeDateTimeAdapter",file:"native-adapter/src/native-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"}]},groupedEnumerations:{},groupedTypeAliases:{"src/lib/class/date-time.class.ts":[{name:"DateFilter",ctype:"miscellaneous",subtype:"typealias",rawtype:"function",file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:184},{name:"PickerMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"popup" | "dialog" | "inline"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"PickerType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"both" | "calendar" | "timer"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"RenderItem",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "date"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SelectMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"single" | "range" | "rangeFrom" | "rangeTo"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ViewType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"month" | "year" | "multi-years"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}]}}};var j=()=>["shell"],E=()=>["typescript"],K=()=>["html"];function V(t,c){t&1&&p(0,"br")}function I(t,c){if(t&1&&p(0,"app-inputs-table",6),t&2){let r=y().$implicit;l("inputs",r.inputs)}}function O(t,c){if(t&1&&p(0,"app-outputs-table",7),t&2){let r=y().$implicit;l("outputs",r.outputs)}}function F(t,c){if(t&1&&(m(0,V,1,0,"br"),s(1,"h3",5),a(2),n(),m(3,I,1,1,"app-inputs-table",6),m(4,O,1,1,"app-outputs-table",7)),t&2){let r=c.$implicit,i=c.$index;g(i>0?0:-1),d(2),w(r.selector),d(),g(r.inputs.length?3:-1),d(),g(r.outputs.length?4:-1)}}var G=(()=>{class t{constructor(){this.installScript="npm install --save nxt-pick-datetime",this.loadConfig=`import { ApplicationConfig } from '@angular/core'
import { provideNativeDateTimeAdapter } from 'nxt-pick-datetime/native-adapter'

export const appConfig: ApplicationConfig = {
    providers: [
        provideNativeDateTimeAdapter()
    ]
}`,this.includeHTML=`<input [nxtDateTime]="picker"
    [nxtDateTimeTrigger]="picker"
    placeholder="Date and time">
<nxt-date-time #picker></nxt-date-time>
`,this.inps=["nxt-date-time","input[nxtDateTime]","[nxtDateTimeTrigger]","nxt-date-time-inline"].map(r=>{let i=[...h.components,...h.directives].find(e=>e.selector==r),o=(i?.inputsClass.sort((e,u)=>e.line-u.line)??[]).map(e=>{switch(e.name){case"pickerType":e.defaultValue="'both'";break;case"pickerMode":e.defaultValue="'popup'";break;case"disabled":e.defaultValue="false";break;case"isOpen":e.defaultValue="false";break;case"selectMode":e.defaultValue="'single'";break;case"values":e.type="Array<T>";break;case"min":case"max":e.type="T";break;case"dateTimeFilter":e.type="DateFilter<T>";break;case"scrollStrategy":e.defaultValue="BlockScrollStrategy";break}return e}),A=i?.outputsClass.sort((e,u)=>e.line-u.line)??[];return{selector:r,inputs:o,outputs:A}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-getting-started"]],decls:37,vars:9,consts:[["title","Getting started | nxt-pick-datetime","description","Getting started with Angular date and time picker."],[1,"h4"],[3,"code","languages"],["routerLink","../custom-adapter"],[1,"h3"],[1,"h5"],[3,"inputs"],[3,"outputs"]],template:function(i,o){i&1&&(p(0,"app-meta",0),s(1,"app-content-wrap")(2,"h1"),a(3,"Getting started with nxt-pick-datetime"),n(),s(4,"h2",1),a(5,"Installing"),n(),p(6,"app-code-block",2)(7,"br"),s(8,"h2",1),a(9,"Configure DateTime adapter provider"),n(),s(10,"p"),a(11,"The date & time picker was built to be date implementation agnostic. It comes with two date adapter implementations, or you can provide your own adapter by implementing "),s(12,"code"),a(13,"DateTimeAdapter"),n(),a(14," (see "),s(15,"a",3),a(16,"documentation"),n(),a(17,")."),n(),s(18,"ul")(19,"li")(20,"code"),a(21,"provideNativeDateTimeAdapter"),n(),a(22," - support for native JavaScript Date object"),n(),s(23,"li")(24,"code"),a(25,"provideMomentDateTimeAdapter"),n(),a(26," - support for MomentJs"),n()(),p(27,"app-code-block",2)(28,"br"),s(29,"h2",1),a(30,"Use it in a template"),n(),p(31,"app-code-block",2)(32,"br"),s(33,"h2",4),a(34,"Configuration options"),n(),b(35,F,5,4,null,null,T),n()),i&2&&(d(6),l("code",o.installScript)("languages",f(6,j)),d(21),l("code",o.loadConfig)("languages",f(7,E)),d(4),l("code",o.includeHTML)("languages",f(8,K)),d(4),v(o.inps))},dependencies:[S,D,k,C,N,x],styles:["app-inputs-table[_ngcontent-%COMP%] + br[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%], app-outputs-table[_ngcontent-%COMP%] + br[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();export{G as GettingStartedComponent};
