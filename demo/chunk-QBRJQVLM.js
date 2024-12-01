import{a as C}from"./chunk-GBGVDW4K.js";import{l as N}from"./chunk-F3445E5L.js";import{a as k}from"./chunk-3T7MXR5R.js";import{a as S}from"./chunk-ZBKZT2L3.js";import{a as D}from"./chunk-GCMA5LZM.js";import"./chunk-6KFMFN6W.js";import"./chunk-GWRIFBQG.js";import"./chunk-KFRXRWD3.js";import"./chunk-EXM4H7MB.js";import"./chunk-GY4FM7MU.js";import"./chunk-C6AHEN2N.js";import{$a as p,$b as b,Eb as s,Fb as n,Gb as o,Hb as M,Ib as T,Pc as v,Qb as u,Qc as w,Yc as x,_b as a,gc as g,lb as h,rb as m,yb as i}from"./chunk-VG3EUPM3.js";import"./chunk-FBFWB55K.js";var y={pipes:[],interfaces:[{name:"DateTimeFormats",id:"interface-DateTimeFormats-6c90bae76745def59658cb3d35926c39ac0dcc870fd892a58d8338effc8cd2e41f5abc61837394dd14d84b065ecddb853ec85abb0ab481d26e513b51ddd94089",file:"src/lib/class/date-time-format.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"dateA11yLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:9},{name:"datePickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:6},{name:"fullPickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:5},{name:"monthYearA11yLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:10},{name:"monthYearLabel",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:8},{name:"parseInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:4},{name:"timePickerInput",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:"",line:7}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"DateTimeInputEvent",id:"interface-DateTimeInputEvent-12c7d22c16548022f6bcfffc534b568c887f80a7d3e41e660e00fd11110724c9ff7eef2f3a646c8b35eef1e581fbd28540e6fa4b2b88b11cb0371599fc9e042a",file:"src/lib/date-time/date-time-picker-input.directive.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"input",deprecated:!1,deprecationMessage:"",type:"HTMLInputElement",indexKey:"",optional:!1,description:"",line:26},{name:"source",deprecated:!1,deprecationMessage:"",type:"DateTimeInputDirective<T>",indexKey:"",optional:!1,description:"",line:24},{name:"value",deprecated:!1,deprecationMessage:"",type:"T | Array<T | undefined>",indexKey:"",optional:!0,description:"",line:25}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"DialogPosition",id:"interface-DialogPosition-4a5cc972ea4fd58137b36490bb46f10f72adf28448f3dd7ba895c5dab9c9b64c5bcaeb80d912415b6cab3d110f67b1e38866a98d7017a5db0e095e76a617528f",file:"src/lib/class/dialog-config.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"bottom",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s bottom position</p>
`,line:13,rawdescription:`
Override for the dialog's bottom position`},{name:"left",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s left position</p>
`,line:16,rawdescription:`
Override for the dialog's left position`},{name:"right",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s right position</p>
`,line:19,rawdescription:`
Override for the dialog's right position`},{name:"top",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!0,description:`<p>Override for the dialog&#39;s top position</p>
`,line:10,rawdescription:`
Override for the dialog's top position`}],indexSignatures:[],kind:171,description:`<p>Possible overrides for a dialog&#39;s position</p>
`,rawdescription:`
Possible overrides for a dialog's position`,methods:[],extends:[]},{name:"MomentDateTimeAdapterOptions",id:"interface-MomentDateTimeAdapterOptions-e3f62a848294742aad816d29469100f4fe1e8cebc810485ca4c383b8892e6ad10459a08c67e871262f0bc61891166ada2495fdec9b17add272a68c661c8bf251",file:"moment-adapter/src/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[{name:"useUtc",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:`<p>Turns the use of utc dates on or off.
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
`,extends:[],type:"injectable"},{name:"MomentDateTimeAdapter",id:"injectable-MomentDateTimeAdapter-e3f62a848294742aad816d29469100f4fe1e8cebc810485ca4c383b8892e6ad10459a08c67e871262f0bc61891166ada2495fdec9b17add272a68c661c8bf251",file:"moment-adapter/src/date-time-adapter.class.ts",properties:[{name:"_localeChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A stream that emits when the locale changes</p>
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
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"platform",type:"Platform",deprecated:!1,deprecationMessage:""},{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0}],line:108,jsdoctags:[{name:"platform",type:"Platform",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeLocale",type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:["DateTimeAdapter"],type:"injectable"}],guards:[],interceptors:[],classes:[{name:"CalendarCell",id:"class-CalendarCell-e17c357c8babd006d3d10aa7f4d95003c1788c8a28b099a5eda0013f94b39a7d036f9ed381fb94124611f859035143c0c85c38608257c3a76df97561e674bb12",file:"src/lib/date-time/calendar-body/calendar-body.component.ts",deprecated:!1,deprecationMessage:"",type:"class",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"number",deprecated:!1,deprecationMessage:""},{name:"displayValue",type:"string",deprecated:!1,deprecationMessage:""},{name:"ariaLabel",type:"string",deprecated:!1,deprecationMessage:""},{name:"enabled",type:"boolean",deprecated:!1,deprecationMessage:""},{name:"out",type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false"},{name:"cellClass",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"''"}],line:5,jsdoctags:[{name:"value",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"displayValue",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ariaLabel",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"enabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"out",type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false",tagName:{text:"param"}},{name:"cellClass",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"''",tagName:{text:"param"}}]},inputsClass:[],outputsClass:[],properties:[{name:"ariaLabel",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:9,modifierKind:[125]},{name:"cellClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:12,modifierKind:[125]},{name:"displayValue",deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:"",line:8,modifierKind:[125]},{name:"enabled",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:10,modifierKind:[125]},{name:"out",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",indexKey:"",optional:!1,description:"",line:11,modifierKind:[125]},{name:"value",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:7,modifierKind:[125]}],methods:[],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]},{name:"DateTimeAdapter",id:"class-DateTimeAdapter-7622ca721878cc22ee5e4711b0b6f4bc482f75f918ff26ddf4660c2c0035db5939a07bfe8951de85e5b0edc4e2869dbcc4d91c9935196767a75ea9fcc999d83e",file:"src/lib/class/date-time-adapter.class.ts",deprecated:!1,deprecationMessage:"",type:"class",inputsClass:[],outputsClass:[],properties:[{name:"_localeChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>A stream that emits when the locale changes</p>
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
`}]}],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]}],directives:[{name:"DateTimeDirective",id:"directive-DateTimeDirective-0e42441cb6672965b475ee857b40b1c89778903745395d43ddbcb6f172b137c6cd548c1c2e1606d17e0330d368031fea338768dbf82190ed64810401860fbfe4",file:"src/lib/class/date-time.class.ts",type:"directive",description:"",rawdescription:`
`,providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,type:"number",decorators:[]},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,type:"boolean",decorators:[]},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, the timer will be in 12-hour format mode
`,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,type:"boolean",decorators:[]},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, shows a timer to configure the seconds value
`,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,type:"boolean",decorators:[]},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",rawdescription:`

The view that the calendar should start on
`,description:`<p>The view that the calendar should start on</p>
`,line:35,type:"ViewType",decorators:[]},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Hours to change per step
`,description:`<p>Hours to change per step</p>
`,line:40,type:"number",decorators:[]},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Minutes to change per step
`,description:`<p>Minutes to change per step</p>
`,line:45,type:"number",decorators:[]},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Seconds to change per step
`,description:`<p>Seconds to change per step</p>
`,line:50,type:"number",decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148]},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128]},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128]}],methodsClass:[{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T | Array<T | undefined>",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:90,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"date",type:"T | Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:98,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",modifierKind:[128],jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:120,jsdoctags:[{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{selected:{name:"selected",getSignature:{name:"selected",type:"",returnType:"T | undefined",line:66}},selecteds:{name:"selecteds",getSignature:{name:"selecteds",type:"",returnType:"Array<T | undefined>",line:68}},dateTimeFilter:{name:"dateTimeFilter",getSignature:{name:"dateTimeFilter",type:"",returnType:"DateFilter | undefined",line:70}},max:{name:"max",getSignature:{name:"max",type:"",returnType:"T | undefined",line:72}},min:{name:"min",getSignature:{name:"min",type:"",returnType:"T | undefined",line:74}},selectMode:{name:"selectMode",getSignature:{name:"selectMode",type:"",returnType:"SelectMode | undefined",line:76}},startAt:{name:"startAt",getSignature:{name:"startAt",type:"",returnType:"T | undefined",line:78}},isOpen:{name:"isOpen",getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:80}},pickerMode:{name:"pickerMode",getSignature:{name:"pickerMode",type:"",returnType:"PickerMode",line:82}},pickerType:{name:"pickerType",getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:84}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:86}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:88}},formatString:{name:"formatString",getSignature:{name:"formatString",type:"string",returnType:"string",line:100}},disabled:{name:"disabled",getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:118}}}},{name:"DateTimeInputDirective",id:"directive-DateTimeInputDirective-12c7d22c16548022f6bcfffc534b568c887f80a7d3e41e660e00fd11110724c9ff7eef2f3a646c8b35eef1e581fbd28540e6fa4b2b88b11cb0371599fc9e042a",file:"src/lib/date-time/date-time-picker-input.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"input[nxtDateTime]",providers:[{name:"NXT_DATETIME_VALUE_ACCESSOR"},{name:"NXT_DATETIME_VALIDATORS"}],exportAs:"nxtDateTimeInput",hostDirectives:[],standalone:!1,inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",rawdescription:`

A function to filter available date & time
`,description:`<p>A function to filter available date &amp; time</p>
`,line:52,type:"DateFilter | undefined",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date & time picker input is disabled`,description:`<p>Whether the date &amp; time picker input is disabled</p>
`,line:63,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,line:96,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,line:84,type:"T",decorators:[]},{name:"nxtDateTime",deprecated:!1,deprecationMessage:"",rawdescription:`

The date & time picker this input is associated with
`,description:`<p>The date &amp; time picker this input is associated with</p>
`,line:43,type:"DateTimeComponent<T>",decorators:[]},{name:"rangeSeparator",defaultValue:"'~'",deprecated:!1,deprecationMessage:"",rawdescription:`

The character to separate the 'from' and 'to' in input value
`,description:`<p>The character to separate the &#39;from&#39; and &#39;to&#39; in input value</p>
`,line:136,type:"string",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`,line:115,type:"SelectMode",decorators:[]},{name:"value",deprecated:!1,deprecationMessage:"",line:140,type:"T",decorators:[]},{name:"values",deprecated:!1,deprecationMessage:"",line:162,type:"Array<T>",decorators:[]}],outputsClass:[{name:"dateTimeChange",defaultValue:"new EventEmitter<DateTimeInputEvent<T>>()",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nCallback to invoke when `change` event is fired on this `<input>`\n",description:`<p>Callback to invoke when <code>change</code> event is fired on this <code>&lt;input&gt;</code></p>
`,line:192,type:"EventEmitter"},{name:"dateTimeInput",defaultValue:"new EventEmitter<DateTimeInputEvent<T>>()",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nCallback to invoke when an `input` event is fired on this `<input>`.\n",description:`<p>Callback to invoke when an <code>input</code> event is fired on this <code>&lt;input&gt;</code>.</p>
`,line:198,type:"EventEmitter"}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"blur",args:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:482},{name:"change",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:499},{name:"input",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:487},{name:"keydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",rawdescription:`

Open the picker when user hold alt + ArrowDown
`,description:`<p>Open the picker when user hold alt + ArrowDown</p>
`,line:474}],propertiesClass:[{name:"disabledChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the disabled state has changed</p>
`,line:355,rawdescription:`
Emits when the disabled state has changed`,modifierKind:[148]},{name:"dtPicker",deprecated:!1,deprecationMessage:"",type:"DateTimeComponent<T>",indexKey:"",optional:!0,description:`<p>The date-time-picker that this input is associated with</p>
`,line:217,rawdescription:`
The date-time-picker that this input is associated with`},{name:"valueChange",defaultValue:"new EventEmitter<Array<T | undefined> | T | undefined>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the value changes (either due to user input or programmatic change)</p>
`,line:352,rawdescription:`
Emits when the value changes (either due to user input or programmatic change)`,modifierKind:[148]}],methodsClass:[{name:"formatNativeInputValue",args:[],optional:!1,returnType:"void",typeParameters:[],line:518,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the native input property 'value'
`,description:`<p>Set the native input property &#39;value&#39;</p>
`},{name:"handleBlurOnHost",args:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:482,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'blur', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"_event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleChangeOnHost",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:499,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'change', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleInputOnHost",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:487,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'input', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handleKeydownOnHost",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:474,deprecated:!1,deprecationMessage:"",rawdescription:`

Open the picker when user hold alt + ArrowDown
`,description:`<p>Open the picker when user hold alt + ArrowDown</p>
`,decorators:[{name:"HostListener",stringifiedArguments:"'keydown', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:407,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:432,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:399,deprecated:!1,deprecationMessage:""},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:450,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:454,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnValidatorChange",args:[{name:"fn",type:"function",deprecated:!1,deprecationMessage:"",function:[]}],optional:!1,returnType:"void",typeParameters:[],line:466,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"function",deprecated:!1,deprecationMessage:"",function:[],tagName:{text:"param"}}]},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:458,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"validate",args:[{name:"c",type:"AbstractControl",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"any",typeParameters:[],line:462,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"c",type:"AbstractControl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"writeValue",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:441,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],implements:["OnInit","AfterContentInit","OnDestroy","ControlValueAccessor","Validator"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elmRef",type:"ElementRef<HTMLInputElement>",deprecated:!1,deprecationMessage:""},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:385,jsdoctags:[{name:"elmRef",type:"ElementRef<HTMLInputElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{dateTime:{name:"dateTime",setSignature:{name:"dateTime",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"DateTimeComponent<T>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:43,rawdescription:`

The date & time picker this input is associated with
`,description:`<p>The date &amp; time picker this input is associated with</p>
`,jsdoctags:[{name:"value",type:"DateTimeComponent<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:52,rawdescription:`

A function to filter available date & time
`,description:`<p>A function to filter available date &amp; time</p>
`,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:56}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:67,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"",returnType:"",line:63,rawdescription:`
Whether the date & time picker input is disabled`,description:`<p>Whether the date &amp; time picker input is disabled</p>
`}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:88,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:84,rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:100,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:96,rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:119,jsdoctags:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"",line:115,rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`}},value:{name:"value",setSignature:{name:"value",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:144,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"value",type:"",returnType:"",line:140}},values:{name:"values",setSignature:{name:"values",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:166,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"values",type:"",returnType:"",line:162}},elementRef:{name:"elementRef",getSignature:{name:"elementRef",type:"",returnType:"",line:200}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:204}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:208}}}},{name:"DateTimeTriggerDirective",id:"directive-DateTimeTriggerDirective-7730a278e0f64c1626bfa72ae64eecaffc44ca4b647c1fd7cf2e7b6a895d95d4316d19d579d80866ef71afb2f5dc7c7fedfaa7350c25ba956dc03acd76edfc23",file:"src/lib/date-time/date-time-picker-trigger.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtDateTimeTrigger]",providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"disabled",deprecated:!1,deprecationMessage:"",line:16,type:"boolean",decorators:[]},{name:"nxtDateTimeTrigger",deprecated:!1,deprecationMessage:"",line:12,type:"DateTimeComponent<T>",decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"click",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:55}],propertiesClass:[],methodsClass:[{name:"handleClickOnHost",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:55,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'click', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:""},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:39,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:49,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:36,deprecated:!1,deprecationMessage:""}],extends:[],implements:["OnInit","OnChanges","AfterContentInit","OnDestroy"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""}],line:30,jsdoctags:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:20,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:16}}}}],components:[{name:"CalendarComponent",id:"component-CalendarComponent-264a43929fd0a7420476773a82d9a4cc56471a4bfc7ae5e336fe844a845c2c30f89f778198b80ceebb61a44037ee307556931ea61dc793b2bd553e3686061db6",file:"src/lib/date-time/calendar/calendar.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-calendar",styleUrls:["./calendar.component.scss"],styles:[],templateUrl:["./calendar.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",rawdescription:`

Date filter for the month and year view
`,description:`<p>Date filter for the month and year view</p>
`,line:22,type:"DateFilter<T>",decorators:[]},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the first day of week
`,description:`<p>Set the first day of week</p>
`,line:28,type:"number",decorators:[]},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Whether to hide dates in other months at the start or end of the current month
`,description:`<p>Whether to hide dates in other months at the start or end of the current month</p>
`,line:121,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:53,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:33,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:73,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:89,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:100,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:84,type:"SelectMode",decorators:[]},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",rawdescription:`

The view that the calendar should start in
`,description:`<p>The view that the calendar should start in</p>
`,line:115,type:'"month" | "year" | "multi-years"',decorators:[]}],outputsClass:[{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected month

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected month</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:149,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when the currently picker moment changes`,description:`<p>Emits when the currently picker moment changes</p>
`,line:125,type:"EventEmitter"},{name:"selectedChange",defaultValue:"new EventEmitter<T | undefined>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when the currently selected date changes`,description:`<p>Emits when the currently selected date changes</p>
`,line:129,type:"EventEmitter"},{name:"userSelection",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is selected`,description:`<p>Emits when any date is selected</p>
`,line:133,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:141,type:"EventEmitter"}],propertiesClass:[{name:"dateTimeFilterForViews",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date filter for the month and year view</p>
`,line:217,rawdescription:`

Date filter for the month and year view
`}],methodsClass:[{name:"dateSelected",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:307,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"focusActiveCell",args:[],optional:!1,returnType:"void",typeParameters:[],line:370,deprecated:!1,deprecationMessage:"",rawdescription:`

Focus to the host element
`,description:`<p>Focus to the host element</p>
`},{name:"goToDateInView",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""},{name:"view",type:'"month" | "year" | "multi-years"',deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:323,deprecated:!1,deprecationMessage:"",rawdescription:`

Change the pickerMoment value and switch to a specific view
`,description:`<p>Change the pickerMoment value and switch to a specific view</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"view",type:'"month" | "year" | "multi-years"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"handlePickerMomentChange",args:[{name:"date",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:335,deprecated:!1,deprecationMessage:"",rawdescription:`

Change the pickerMoment value
`,description:`<p>Change the pickerMoment value</p>
`,jsdoctags:[{name:"date",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"nextButtonEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:361,deprecated:!1,deprecationMessage:"",rawdescription:`

Whether the next period button is enabled.
`,description:`<p>Whether the next period button is enabled.</p>
`},{name:"nextClicked",args:[],optional:!1,returnType:"void",typeParameters:[],line:299,deprecated:!1,deprecationMessage:"",rawdescription:`

Handles user clicks on the next button.
`,description:`<p>Handles user clicks on the next button.</p>
`},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:261,deprecated:!1,deprecationMessage:""},{name:"ngAfterViewChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:265,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:272,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:259,deprecated:!1,deprecationMessage:""},{name:"prevButtonEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:352,deprecated:!1,deprecationMessage:"",rawdescription:`

Whether the previous period button is enabled.
`,description:`<p>Whether the previous period button is enabled.</p>
`},{name:"previousClicked",args:[],optional:!1,returnType:"void",typeParameters:[],line:288,deprecated:!1,deprecationMessage:"",rawdescription:`

Handles user clicks on the previous button.
`,description:`<p>Handles user clicks on the previous button.</p>
`},{name:"selectMonthInYearView",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:387,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectYearInMultiYearView",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:383,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"toggleViews",args:[],optional:!1,returnType:"void",typeParameters:[],line:280,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggle between month view and year view
`,description:`<p>Toggle between month view and year view</p>
`},{name:"userSelected",args:[],optional:!1,returnType:"void",typeParameters:[],line:345,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:243,jsdoctags:[{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","AfterViewChecked","OnDestroy"],accessors:{min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:37,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:33}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:57,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:53}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:77,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:73}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:93,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:89}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:104,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:100}},periodButtonText:{name:"periodButtonText",getSignature:{name:"periodButtonText",type:"string",returnType:"string",line:151}},periodButtonLabel:{name:"periodButtonLabel",getSignature:{name:"periodButtonLabel",type:"string",returnType:"string",line:160}},prevButtonLabel:{name:"prevButtonLabel",getSignature:{name:"prevButtonLabel",type:"",returnType:"",line:166}},nextButtonLabel:{name:"nextButtonLabel",getSignature:{name:"nextButtonLabel",type:"",returnType:"",line:175}},currentView:{name:"currentView",setSignature:{name:"currentView",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"view",type:'"month" | "year" | "multi-years" | undefined',deprecated:!1,deprecationMessage:""}],returnType:"void",line:189,jsdoctags:[{name:"view",type:'"month" | "year" | "multi-years" | undefined',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"currentView",type:"",returnType:"",line:185}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:194}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:198}},showControlArrows:{name:"showControlArrows",getSignature:{name:"showControlArrows",type:"boolean",returnType:"boolean",line:206}},isMonthView:{name:"isMonthView",getSignature:{name:"isMonthView",type:"",returnType:"",line:210}}}},{name:"DateTimeComponent",id:"component-DateTimeComponent-425c1817dbd313969ea8a9bf7f8443eb21be3e22582e45f621649fe9572a15fe614c51dc9193b0405e0da6fc6ed630e850566eb7f59d39ec41a8b521f778e30f",file:"src/lib/date-time/date-time-picker/date-time-picker.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time",styleUrls:["./date-time-picker.component.scss"],styles:[],templateUrl:["./date-time-picker.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"backdropClass",deprecated:!1,deprecationMessage:"",rawdescription:`
Custom class for the picker backdrop`,description:`<p>Custom class for the picker backdrop</p>
`,line:51,type:"string | string[]",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`,line:137,type:"boolean",decorators:[]},{name:"isOpen",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the calendar is open`,description:`<p>Whether the calendar is open</p>
`,line:152,type:"boolean",decorators:[]},{name:"panelClass",deprecated:!1,deprecationMessage:"",rawdescription:`
Custom class for the picker overlay pane`,description:`<p>Custom class for the picker overlay pane</p>
`,line:55,type:"string | string[]",decorators:[]},{name:"pickerMode",deprecated:!1,deprecationMessage:"",rawdescription:`

The style the picker would open as

-    \`'popup'\` - display picker attached to the trigger element
-    \`'dialog'\` - display picker as a dialog
`,description:`<p>The style the picker would open as</p>
<ul>
<li><code>&#39;popup&#39;</code> - display picker attached to the trigger element</li>
<li><code>&#39;dialog&#39;</code> - display picker as a dialog</li>
</ul>
`,line:122,type:"PickerMode",decorators:[]},{name:"pickerType",deprecated:!1,deprecationMessage:"",rawdescription:`

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
`,line:101,type:"PickerType",decorators:[]},{name:"scrollStrategy",deprecated:!1,deprecationMessage:"",rawdescription:`

The scroll strategy when the picker is open (see [CDK documentation](https://material.angular.io/cdk/overlay/overview#scroll-strategies))
`,description:`<p>The scroll strategy when the picker is open (see <a href="https://material.angular.io/cdk/overlay/overview#scroll-strategies">CDK documentation</a>)</p>
`,line:167,type:"ScrollStrategy",decorators:[]},{name:"startAt",deprecated:!1,deprecationMessage:"",rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`,line:64,type:"T",decorators:[]},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, the timer will be in 12-hour format mode
`,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, shows a timer to configure the seconds value
`,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",rawdescription:`

The view that the calendar should start on
`,description:`<p>The view that the calendar should start on</p>
`,line:35,type:"ViewType",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Hours to change per step
`,description:`<p>Hours to change per step</p>
`,line:40,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Minutes to change per step
`,description:`<p>Minutes to change per step</p>
`,line:45,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Seconds to change per step
`,description:`<p>Seconds to change per step</p>
`,line:50,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}}],outputsClass:[{name:"close",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback when the picker is closed
`,description:`<p>Callback when the picker is closed</p>
`,line:181,type:"EventEmitter"},{name:"isOpenChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits when picker open state changes
`,description:`<p>Emits when picker open state changes</p>
`,line:203,type:"EventEmitter"},{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected month in year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:197,type:"EventEmitter"},{name:"open",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback when the picker is opened
`,description:`<p>Callback when the picker is opened</p>
`,line:174,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected year in multi-year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected year in multi-year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:189,type:"EventEmitter"}],propertiesClass:[{name:"confirmSelectedChange",defaultValue:"new EventEmitter<Array<T | undefined> | T>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emit when the selected value has been confirmed</p>
`,line:208,rawdescription:`

Emit when the selected value has been confirmed
`,modifierKind:[148]},{name:"disabledChange",defaultValue:"new EventEmitter<boolean>()",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Emits when the date time picker is disabled</p>
`,line:213,rawdescription:`

Emits when the date time picker is disabled
`,modifierKind:[148]},{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`,inheritance:{file:"DateTimeDirective"}},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148],inheritance:{file:"DateTimeDirective"}},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128],inheritance:{file:"DateTimeDirective"}},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128],inheritance:{file:"DateTimeDirective"}}],methodsClass:[{name:"close",args:[],optional:!1,returnType:"void",typeParameters:[],line:436,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the picker
`,description:`<p>Hide the picker</p>
`},{name:"confirmSelect",args:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:494,deprecated:!1,deprecationMessage:"",rawdescription:`

Confirm the selected value
`,description:`<p>Confirm the selected value</p>
`,jsdoctags:[{name:"_event",type:"any",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:300,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:298,deprecated:!1,deprecationMessage:""},{name:"open",args:[],optional:!1,returnType:"void",typeParameters:[],line:328,deprecated:!1,deprecationMessage:""},{name:"registerInput",args:[{name:"input",type:"DateTimeInputDirective<T>",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:311,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"input",type:"DateTimeInputDirective<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:389,deprecated:!1,deprecationMessage:"",rawdescription:`

Selects the given date
`,description:`<p>Selects the given date</p>
`,jsdoctags:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:429,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view
`,description:`<p>Emits selected month in year view</p>
`,jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:422,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year in multi-year view
`,description:`<p>Emits the selected year in multi-year view</p>
`,jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"overlay",type:"Overlay",deprecated:!1,deprecationMessage:""},{name:"viewContainerRef",type:"ViewContainerRef",deprecated:!1,deprecationMessage:""},{name:"dialogService",type:"DialogService",deprecated:!1,deprecationMessage:""},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"defaultScrollStrategy",type:"function",deprecated:!1,deprecationMessage:"",function:[]},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""},{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0}],line:278,jsdoctags:[{name:"overlay",type:"Overlay",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"viewContainerRef",type:"ViewContainerRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dialogService",type:"DialogService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"defaultScrollStrategy",type:"function",deprecated:!1,deprecationMessage:"",function:[],tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:["DateTimeDirective"],implements:["OnInit","OnDestroy"],accessors:{startAt:{name:"startAt",setSignature:{name:"startAt",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:86,jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"startAt",type:"",returnType:"",line:64,rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`}},pickerType:{name:"pickerType",setSignature:{name:"pickerType",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:""}],returnType:"void",line:105,jsdoctags:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:101,rawdescription:`

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
`}},pickerMode:{name:"pickerMode",setSignature:{name:"pickerMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"PickerMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:126,jsdoctags:[{name:"mode",type:"PickerMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMode",type:"",returnType:"",line:122,rawdescription:`

The style the picker would open as

-    \`'popup'\` - display picker attached to the trigger element
-    \`'dialog'\` - display picker as a dialog
`,description:`<p>The style the picker would open as</p>
<ul>
<li><code>&#39;popup&#39;</code> - display picker attached to the trigger element</li>
<li><code>&#39;dialog&#39;</code> - display picker as a dialog</li>
</ul>
`}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:141,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:137,rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`}},isOpen:{name:"isOpen",setSignature:{name:"isOpen",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:156,jsdoctags:[{name:"val",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:152,rawdescription:`
Whether the calendar is open`,description:`<p>Whether the calendar is open</p>
`}},dtInput:{name:"dtInput",getSignature:{name:"dtInput",type:"",returnType:"",line:230}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:239,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:235}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:249,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:245}},min:{name:"min",getSignature:{name:"min",type:"",returnType:"",line:255,rawdescription:`
The minimum selectable date`,description:`<p>The minimum selectable date</p>
`}},max:{name:"max",getSignature:{name:"max",type:"",returnType:"",line:260,rawdescription:`
The maximum selectable date`,description:`<p>The maximum selectable date</p>
`}},dateTimeFilter:{name:"dateTimeFilter",getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:264}},selectMode:{name:"selectMode",getSignature:{name:"selectMode",type:"",returnType:"",line:268}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"",returnType:"",line:272}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"",returnType:"",line:276}}}},{name:"DateTimeInlineComponent",id:"component-DateTimeInlineComponent-3e4a2b2b4d9b6a887620dd2c839f9c48a7d9bfba6ddeb993307b6607d985742c6abc70094f43525b2d58985524d13797455d4b8f10138767fd2c1657d003c0bf",file:"src/lib/date-time/date-time-inline/date-time-inline.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[{name:"NXT_DATETIME_VALUE_ACCESSOR"}],selector:"nxt-date-time-inline",styleUrls:["./date-time-inline.component.scss"],styles:[],templateUrl:["./date-time-inline.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",rawdescription:`
A function to filter available date & time`,description:`<p>A function to filter available date &amp; time</p>
`,line:121,type:"any",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`,line:51,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,line:144,type:"T | undefined",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,line:132,type:"T | undefined",decorators:[]},{name:"pickerType",deprecated:!1,deprecationMessage:"",rawdescription:`

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
`,line:38,type:"PickerType",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`,line:69,type:"SelectMode",decorators:[]},{name:"startAt",deprecated:!1,deprecationMessage:"",rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`,line:93,type:"T",decorators:[]},{name:"value",deprecated:!1,deprecationMessage:"",line:155,type:"T",decorators:[]},{name:"values",deprecated:!1,deprecationMessage:"",line:168,type:"any",decorators:[]},{name:"firstDayOfWeek",defaultValue:"0",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the first day of week

Valid values are from 0 [Sunday] to 6 [Saturday]
`,description:`<p>Set the first day of week</p>
<p>Valid values are from 0 [Sunday] to 6 [Saturday]</p>
`,line:57,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

If true, don't show dates from preious / next month on the calendar month view
`,description:`<p>If true, don&#39;t show dates from preious / next month on the calendar month view</p>
`,line:62,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, the timer will be in 12-hour format mode
`,description:`<p>When true, the timer will be in 12-hour format mode</p>
`,line:30,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

When true, shows a timer to configure the seconds value
`,description:`<p>When true, shows a timer to configure the seconds value</p>
`,line:25,type:"boolean",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"startView",defaultValue:"'month'",deprecated:!1,deprecationMessage:"",rawdescription:`

The view that the calendar should start on
`,description:`<p>The view that the calendar should start on</p>
`,line:35,type:"ViewType",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Hours to change per step
`,description:`<p>Hours to change per step</p>
`,line:40,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Minutes to change per step
`,description:`<p>Minutes to change per step</p>
`,line:45,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Seconds to change per step
`,description:`<p>Seconds to change per step</p>
`,line:50,type:"number",decorators:[],inheritance:{file:"DateTimeDirective"}}],outputsClass:[{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected month in year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:201,type:"EventEmitter"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected year in multi-year view

This doesn't imply a change on the selected date.
`,description:`<p>Emits selected year in multi-year view</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:193,type:"EventEmitter"}],propertiesClass:[{name:"dateTimeChecker",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:`<p>Date Time Checker to check if the give dateTime is selectable</p>
`,line:111,rawdescription:`

Date Time Checker to check if the give dateTime is selectable
`,inheritance:{file:"DateTimeDirective"}},{name:"id",defaultValue:"`nxt-dt-picker-${nextUniqueId++}`",deprecated:!1,deprecationMessage:"",type:"",indexKey:"",optional:!1,description:"",line:64,modifierKind:[148],inheritance:{file:"DateTimeDirective"}},{name:"monthSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:94,modifierKind:[128],inheritance:{file:"DateTimeDirective"}},{name:"yearSelected",deprecated:!1,deprecationMessage:"",type:"EventEmitter<T>",indexKey:"",optional:!1,description:"",line:92,modifierKind:[128],inheritance:{file:"DateTimeDirective"}}],methodsClass:[{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:261,deprecated:!1,deprecationMessage:""},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:281,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:285,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"select",args:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:293,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"date",type:"T[] | T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectMonth",args:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:317,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits selected month in year view
`,description:`<p>Emits selected month in year view</p>
`,jsdoctags:[{name:"normalizedMonth",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"selectYear",args:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:310,deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year in multi-year view
`,description:`<p>Emits the selected year in multi-year view</p>
`,jsdoctags:[{name:"normalizedYear",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:289,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"writeValue",args:[{name:"value",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:266,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getValidDate",args:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"T | undefined",typeParameters:[],line:128,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"obj",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"DateTimeDirective"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:250,jsdoctags:[{name:"changeDetector",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:["DateTimeDirective"],implements:["OnInit","ControlValueAccessor"],accessors:{pickerType:{name:"pickerType",setSignature:{name:"pickerType",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:""}],returnType:"void",line:42,jsdoctags:[{name:"val",type:"PickerType",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerType",type:"",returnType:"PickerType",line:38,rawdescription:`

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
`}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:55,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:51,rawdescription:`
Whether the date time picker should be disabled`,description:`<p>Whether the date time picker should be disabled</p>
`}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:73,jsdoctags:[{name:"mode",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"",line:69,rawdescription:"\n\nThe picker select mode\n\n-    `'single'` - select a single date\n-    `'range'` - select a range [from, to]\n-    `'rangeFrom'` - an open range with a fixed start date\n-    `'rangeTo'` - an open range with a fixed end date\n",description:`<p>The picker select mode</p>
<ul>
<li><code>&#39;single&#39;</code> - select a single date</li>
<li><code>&#39;range&#39;</code> - select a range [from, to]</li>
<li><code>&#39;rangeFrom&#39;</code> - an open range with a fixed start date</li>
<li><code>&#39;rangeTo&#39;</code> - an open range with a fixed end date</li>
</ul>
`}},startAt:{name:"startAt",setSignature:{name:"startAt",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:112,jsdoctags:[{name:"date",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"startAt",type:"",returnType:"",line:93,rawdescription:`

The date to show when picker opens

Defaults to selected date (if available) or current date.
`,description:`<p>The date to show when picker opens</p>
<p>Defaults to selected date (if available) or current date.</p>
`}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:125,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:121,rawdescription:`
A function to filter available date & time`,description:`<p>A function to filter available date &amp; time</p>
`}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:132,rawdescription:`
The minimum valid date`,description:`<p>The minimum valid date</p>
`,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:137}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:144,rawdescription:`
The maximum valid date`,description:`<p>The maximum valid date</p>
`,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:149}},value:{name:"value",setSignature:{name:"value",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:159,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"value",type:"",returnType:"",line:155}},values:{name:"values",setSignature:{name:"values",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:172,jsdoctags:[{name:"values",type:"Array<T | undefined> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"values",type:"",returnType:"",line:168}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:208,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:204}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:218,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:214}},isOpen:{name:"isOpen",getSignature:{name:"isOpen",type:"boolean",returnType:"boolean",line:223}},pickerMode:{name:"pickerMode",getSignature:{name:"pickerMode",type:"",returnType:"PickerMode",line:227}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:231}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:235}}}},{name:"MonthViewComponent",id:"component-MonthViewComponent-adc50fd4730f3f2ac4c1863d0d949a530ff5cccd2bdf3e2a2dd640e390b8dfc8f4badfee40997841fb9a1e617acdb3f9186f3543843aaa5662c9059d43594718",file:"src/lib/date-time/calendar-month-view/calendar-month-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-month-view",styleUrls:["./calendar-month-view.component.scss"],styles:[],templateUrl:["./calendar-month-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:130,type:"any",decorators:[]},{name:"firstDayOfWeek",deprecated:!1,deprecationMessage:"",line:35,type:"number",decorators:[]},{name:"hideOtherMonths",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Whether to hide dates in other months at the start or end of the current month
`,description:`<p>Whether to hide dates in other months at the start or end of the current month</p>
`,line:27,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:161,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:145,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:101,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:71,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:87,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:56,type:"SelectMode",decorators:[]}],outputsClass:[{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:242,type:"EventEmitter"},{name:"selectedChange",defaultValue:"new EventEmitter<T | undefined>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new date is selected
`,description:`<p>Callback to invoke when a new date is selected</p>
`,line:232,type:"EventEmitter"},{name:"userSelection",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when any date is selected.
`,description:`<p>Callback to invoke when any date is selected.</p>
`,line:238,type:"EventEmitter"}],propertiesClass:[{name:"firstRowOffset",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:"",line:226},{name:"selectedDates",deprecated:!1,deprecationMessage:"",type:"Array<number | undefined>",indexKey:"",optional:!0,description:`<p>An array to hold all selectedDates&#39; value
the value is the day number in current month</p>
`,line:223,rawdescription:`

An array to hold all selectedDates' value
the value is the day number in current month
`},{name:"todayDate",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!0,description:`<p>The date of the month that today falls on.</p>
`,line:217,rawdescription:`

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
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:252,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","OnDestroy"],accessors:{firstDayOfWeek:{name:"firstDayOfWeek",setSignature:{name:"firstDayOfWeek",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"void",line:39,jsdoctags:[{name:"val",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"firstDayOfWeek",type:"number",returnType:"number",line:35}},selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:60,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:56}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:75,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:71}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:91,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:87}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:105,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:101}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:134,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:130}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:149,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:145}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:165,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:161}},weekdays:{name:"weekdays",getSignature:{name:"weekdays",type:"",returnType:"",line:176}},days:{name:"days",getSignature:{name:"days",type:"",returnType:"",line:181}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"",line:185}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:196}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:200}}}},{name:"MultiYearViewComponent",id:"component-MultiYearViewComponent-3d057b723a1cbb83276cde7a4d5c0080cee4af02b2ee1cc16c8ee54711af145cc86c18aa98e35e05adc437025bb8f57f8edbbbb4568f3fe672a58a9240b5920f",file:"src/lib/date-time/calendar-multi-year-view/calendar-multi-year-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-multi-year-view",styleUrls:["./calendar-multi-year-view.component.scss"],styles:[],templateUrl:["./calendar-multi-year-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:94,type:"any",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:123,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:108,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:74,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:44,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:60,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:29,type:"SelectMode",decorators:[]}],outputsClass:[{name:"change",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new month is selected
`,description:`<p>Callback to invoke when a new month is selected</p>
`,line:188,type:"EventEmitter"},{name:"keyboardEnter",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when use keyboard enter to select a calendar cell`,description:`<p>Emits when use keyboard enter to select a calendar cell</p>
`,line:204,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:200,type:"EventEmitter<T>"},{name:"yearSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:196,type:"EventEmitter"}],propertiesClass:[],methodsClass:[{name:"generateYearList",args:[],optional:!1,returnType:"void",typeParameters:[],line:282,deprecated:!1,deprecationMessage:""},{name:"handleCalendarKeydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:317,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"nextEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:313,deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the next period button is enabled`,description:`<p>Whether the next period button is enabled</p>
`},{name:"nextYearList",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:276,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate the next year list
`,description:`<p>Generate the next year list</p>
`,jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:231,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:228,deprecated:!1,deprecationMessage:""},{name:"previousEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:305,deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the previous period button is enabled`,description:`<p>Whether the previous period button is enabled</p>
`},{name:"prevYearList",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:267,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate the previous year list
`,description:`<p>Generate the previous year list</p>
`,jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"selectCalendarCell",args:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:240,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle a calendarCell selected
`,description:`<p>Handle a calendarCell selected</p>
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""}],line:220,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit"],accessors:{selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:33,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:29}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:48,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:44}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:64,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:60}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:78,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:74}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:98,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:94}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:112,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:108}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:127,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:123}},todayYear:{name:"todayYear",getSignature:{name:"todayYear",type:"",returnType:"",line:136}},years:{name:"years",getSignature:{name:"years",type:"",returnType:"",line:141}},selectedYears:{name:"selectedYears",getSignature:{name:"selectedYears",type:"",returnType:"",line:146}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:152}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:156}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"number | undefined",line:161}},tableHeader:{name:"tableHeader",getSignature:{name:"tableHeader",type:"",returnType:"string | undefined",line:168}},prevButtonLabel:{name:"prevButtonLabel",getSignature:{name:"prevButtonLabel",type:"string",returnType:"string",line:175}},nextButtonLabel:{name:"nextButtonLabel",getSignature:{name:"nextButtonLabel",type:"string",returnType:"string",line:179}}}},{name:"TimerComponent",id:"component-TimerComponent-f8cd57c88e5e2c4ff18e2de780f975794f353f1bde8f3a5b94d74c0fa607a391543b48d6950a7c55170528571670632a98730bbe980617da8330abbe74b4f2d5",file:"src/lib/date-time/timer/timer.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-timer",styleUrls:["./timer.component.scss"],styles:[],templateUrl:["./timer.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"hour12Timer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Whether the timer is in hour12 format
`,description:`<p>Whether the timer is in hour12 format</p>
`,line:63,type:"boolean",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:42,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:30,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:18,type:"T",decorators:[]},{name:"showSecondsTimer",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Whether to show the second's timer
`,description:`<p>Whether to show the second&#39;s timer</p>
`,line:57,type:"boolean",decorators:[]},{name:"stepHour",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Hours to change per step
`,description:`<p>Hours to change per step</p>
`,line:69,type:"number",decorators:[]},{name:"stepMinute",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Minutes to change per step
`,description:`<p>Minutes to change per step</p>
`,line:75,type:"number",decorators:[]},{name:"stepSecond",defaultValue:"1",deprecated:!1,deprecationMessage:"",rawdescription:`

Seconds to change per step
`,description:`<p>Seconds to change per step</p>
`,line:81,type:"number",decorators:[]}],outputsClass:[{name:"selectedChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",line:153,type:"EventEmitter"}],propertiesClass:[],methodsClass:[{name:"downHourEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:254,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down hour button is enabled
`,description:`<p>Check if the down hour button is enabled</p>
`},{name:"downMinuteEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:274,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down minute button is enabled
`,description:`<p>Check if the down minute button is enabled</p>
`},{name:"downSecondEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:294,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the down second button is enabled
`,description:`<p>Check if the down second button is enabled</p>
`},{name:"focus",args:[],optional:!1,returnType:"void",typeParameters:[],line:180,deprecated:!1,deprecationMessage:"",rawdescription:`

Focus to the host element
`,description:`<p>Focus to the host element</p>
`},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:175,deprecated:!1,deprecationMessage:""},{name:"setHourValue",args:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:205,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setHourValueViaInput",args:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:195,deprecated:!1,deprecationMessage:"",rawdescription:`

Set the hour value via typing into timer box input
We need this to handle the hour value when the timer is in hour12 mode
`,description:`<p>Set the hour value via typing into timer box input
We need this to handle the hour value when the timer is in hour12 mode</p>
`,jsdoctags:[{name:"hours",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setMeridiem",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:223,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setMinuteValue",args:[{name:"minutes",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:211,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"minutes",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setSecondValue",args:[{name:"seconds",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:217,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"seconds",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"upHourEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:244,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up hour button is enabled
`,description:`<p>Check if the up hour button is enabled</p>
`},{name:"upMinuteEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:264,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up minute button is enabled
`,description:`<p>Check if the up minute button is enabled</p>
`},{name:"upSecondEnabled",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:284,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the up second button is enabled
`,description:`<p>Check if the up second button is enabled</p>
`}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:""},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:""},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""}],line:165,jsdoctags:[{name:"ngZone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"elmRef",type:"ElementRef<HTMLElement>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"pickerIntl",type:"DateTimeIntl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit"],accessors:{pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:22,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:18}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:34,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:30}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:46,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:42}},hourValue:{name:"hourValue",getSignature:{name:"hourValue",type:"number",returnType:"number",line:83}},hourBoxValue:{name:"hourBoxValue",getSignature:{name:"hourBoxValue",type:"number",returnType:"number",line:92,rawdescription:`

The value would be displayed in hourBox.
We need this because the value displayed in hourBox it not
the same as the hourValue when the timer is in hour12Timer mode.
`,description:`<p>The value would be displayed in hourBox.
We need this because the value displayed in hourBox it not
the same as the hourValue when the timer is in hour12Timer mode.</p>
`}},minuteValue:{name:"minuteValue",getSignature:{name:"minuteValue",type:"number",returnType:"number",line:114}},secondValue:{name:"secondValue",getSignature:{name:"secondValue",type:"number",returnType:"number",line:118}},upHourButtonLabel:{name:"upHourButtonLabel",getSignature:{name:"upHourButtonLabel",type:"string",returnType:"string",line:122}},downHourButtonLabel:{name:"downHourButtonLabel",getSignature:{name:"downHourButtonLabel",type:"string",returnType:"string",line:126}},upMinuteButtonLabel:{name:"upMinuteButtonLabel",getSignature:{name:"upMinuteButtonLabel",type:"string",returnType:"string",line:130}},downMinuteButtonLabel:{name:"downMinuteButtonLabel",getSignature:{name:"downMinuteButtonLabel",type:"string",returnType:"string",line:134}},upSecondButtonLabel:{name:"upSecondButtonLabel",getSignature:{name:"upSecondButtonLabel",type:"string",returnType:"string",line:138}},downSecondButtonLabel:{name:"downSecondButtonLabel",getSignature:{name:"downSecondButtonLabel",type:"string",returnType:"string",line:142}},hour12ButtonLabel:{name:"hour12ButtonLabel",getSignature:{name:"hour12ButtonLabel",type:"string",returnType:"string",line:146}}}},{name:"YearViewComponent",id:"component-YearViewComponent-f5385a9a5561b015df024413c20f6f67edd739f5ed697275dddb2071d0513eb2a7a264951870037a66a4ee2ea696282517c67f1fbd0cde4ddebba40a5f566079",file:"src/lib/date-time/calendar-year-view/calendar-year-view.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-date-time-year-view",styleUrls:["./calendar-year-view.component.scss"],styles:[],templateUrl:["./calendar-year-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateTimeFilter",deprecated:!1,deprecationMessage:"",line:94,type:"any",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",line:123,type:"T",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",line:108,type:"T",decorators:[]},{name:"pickerMoment",deprecated:!1,deprecationMessage:"",line:71,type:"T",decorators:[]},{name:"selected",deprecated:!1,deprecationMessage:"",line:43,type:"T",decorators:[]},{name:"selecteds",deprecated:!1,deprecationMessage:"",line:55,type:"Array<T>",decorators:[]},{name:"selectMode",deprecated:!1,deprecationMessage:"",line:28,type:"SelectMode",decorators:[]}],outputsClass:[{name:"change",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Callback to invoke when a new month is selected
`,description:`<p>Callback to invoke when a new month is selected</p>
`,line:178,type:"EventEmitter"},{name:"keyboardEnter",defaultValue:"new EventEmitter<void>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when use keyboard enter to select a calendar cell`,description:`<p>Emits when use keyboard enter to select a calendar cell</p>
`,line:194,type:"EventEmitter"},{name:"monthSelected",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Emits the selected year

This doesn't imply a change on the selected date.
`,description:`<p>Emits the selected year</p>
<p>This doesn&#39;t imply a change on the selected date.</p>
`,line:186,type:"EventEmitter"},{name:"pickerMomentChange",defaultValue:"new EventEmitter<T>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Emits when any date is activated`,description:`<p>Emits when any date is activated</p>
`,line:190,type:"EventEmitter"}],propertiesClass:[{name:"selectedMonths",deprecated:!1,deprecationMessage:"",type:"Array<number | undefined>",indexKey:"",optional:!0,description:`<p>An array to hold all selectedDates&#39; month value
the value is the month number in current year</p>
`,line:171,rawdescription:`

An array to hold all selectedDates' month value
the value is the month number in current year
`},{name:"todayMonth",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!0,description:"",line:165}],methodsClass:[{name:"handleCalendarKeydown",args:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:272,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle keydown event on calendar body
`,description:`<p>Handle keydown event on calendar body</p>
`,jsdoctags:[{name:"event",type:"KeyboardEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterContentInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:222,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:227,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:215,deprecated:!1,deprecationMessage:""},{name:"selectCalendarCell",args:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:235,deprecated:!1,deprecationMessage:"",rawdescription:`

Handle a calendarCell selected
`,description:`<p>Handle a calendarCell selected</p>
`,jsdoctags:[{name:"cell",type:"CalendarCell",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],preserveWhitespaces:!1,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:""},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:""}],line:204,jsdoctags:[{name:"cdRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeAdapter",type:"DateTimeAdapter<T>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"dateTimeFormats",type:"DateTimeFormats",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit","AfterContentInit","OnDestroy"],accessors:{selectMode:{name:"selectMode",setSignature:{name:"selectMode",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:""}],returnType:"void",line:32,jsdoctags:[{name:"val",type:"SelectMode",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selectMode",type:"",returnType:"SelectMode",line:28}},selected:{name:"selected",setSignature:{name:"selected",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:47,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selected",type:"",returnType:"",line:43}},selecteds:{name:"selecteds",setSignature:{name:"selecteds",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:""}],returnType:"void",line:59,jsdoctags:[{name:"values",type:"Array<T | undefined>",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"selecteds",type:"",returnType:"",line:55}},pickerMoment:{name:"pickerMoment",setSignature:{name:"pickerMoment",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:75,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"pickerMoment",type:"",returnType:"",line:71}},dateTimeFilter:{name:"dateTimeFilter",setSignature:{name:"dateTimeFilter",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:98,jsdoctags:[{name:"filter",type:"DateFilter<T> | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"dateTimeFilter",type:"",returnType:"",line:94}},min:{name:"min",setSignature:{name:"min",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:112,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"min",type:"",returnType:"",line:108}},max:{name:"max",setSignature:{name:"max",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:127,jsdoctags:[{name:"value",type:"T | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"max",type:"",returnType:"",line:123}},months:{name:"months",getSignature:{name:"months",type:"",returnType:"",line:138}},activeCell:{name:"activeCell",getSignature:{name:"activeCell",type:"",returnType:"number | undefined",line:142}},isInSingleMode:{name:"isInSingleMode",getSignature:{name:"isInSingleMode",type:"boolean",returnType:"boolean",line:149}},isInRangeMode:{name:"isInRangeMode",getSignature:{name:"isInRangeMode",type:"boolean",returnType:"boolean",line:153}}}}],modules:[{name:"DateTimeModule",id:"module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7",description:"",deprecationMessage:"",deprecated:!1,file:"src/lib/date-time/date-time.module.ts",methods:[],children:[{type:"providers",elements:[{name:"DateTimeIntl"}]},{type:"declarations",elements:[{name:"CalendarComponent"},{name:"DateTimeComponent"},{name:"DateTimeInlineComponent"},{name:"DateTimeInputDirective"},{name:"DateTimeTriggerDirective"},{name:"MonthViewComponent"},{name:"MultiYearViewComponent"},{name:"TimerComponent"},{name:"YearViewComponent"}]},{type:"imports",elements:[]},{type:"exports",elements:[{name:"CalendarComponent"},{name:"DateTimeComponent"},{name:"DateTimeInlineComponent"},{name:"DateTimeInputDirective"},{name:"DateTimeTriggerDirective"},{name:"MonthViewComponent"},{name:"MultiYearViewComponent"},{name:"TimerComponent"},{name:"YearViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"MomentDateTimeModule",id:"module-MomentDateTimeModule-411db2f07279caee2f4b4467dc79b0f4e77faa9d1af798f640a58981f1819361c0e6378efdcca20cbde9c72292fd26acaf7204a01e12b1a357c9459f42df160c",description:"",deprecationMessage:"",deprecated:!1,file:"moment-adapter/src/moment-adapter.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[]},{type:"exports",elements:[]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"NativeDateTimeModule",id:"module-NativeDateTimeModule-cc0adcb3de1fc1f7eca94b434d5a76051e247e35ba29221f745ad7681919370962a2709d0b15813b8ee3c7cabd2acdb566c934ded1ef507f4c436dfe1252fa2b",description:"",deprecationMessage:"",deprecated:!1,file:"native-adapter/src/native-adapter.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[]},{type:"exports",elements:[]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:{variables:[{name:"NXT_DATE_TIME_FORMATS",ctype:"miscellaneous",subtype:"variable",file:"src/lib/class/date-time-format.class.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<DateTimeFormats>('NXT_DATE_TIME_FORMATS')",rawdescription:"InjectionToken for date time picker that can be used to override default format",description:`<p>InjectionToken for date time picker that can be used to override default format</p>
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
`}]},groupedFunctions:{"moment-adapter/src/moment-adapter.module.ts":[{name:"provideMomentDateTimeAdapter",file:"moment-adapter/src/moment-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"}],"native-adapter/src/native-adapter.module.ts":[{name:"provideNativeDateTimeAdapter",file:"native-adapter/src/native-adapter.module.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:"",args:[],returnType:"Provider[]"}]},groupedEnumerations:{},groupedTypeAliases:{"src/lib/class/date-time.class.ts":[{name:"DateFilter",ctype:"miscellaneous",subtype:"typealias",rawtype:"function",file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:184},{name:"PickerMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"popup" | "dialog" | "inline"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"PickerType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"both" | "calendar" | "timer"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"RenderItem",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "date"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SelectMode",ctype:"miscellaneous",subtype:"typealias",rawtype:'"single" | "range" | "rangeFrom" | "rangeTo"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ViewType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"month" | "year" | "multi-years"',file:"src/lib/class/date-time.class.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}]}}};var j=()=>["shell"],E=()=>["typescript"],I=()=>["html"];function V(t,c){t&1&&o(0,"br")}function K(t,c){if(t&1&&o(0,"app-inputs-table",10),t&2){let r=u().$implicit;i("inputs",r.inputs)}}function O(t,c){if(t&1&&o(0,"app-outputs-table",11),t&2){let r=u().$implicit;i("outputs",r.outputs)}}function F(t,c){if(t&1&&(M(0),m(1,V,1,0,"br",6),s(2,"h3",7),a(3),n(),m(4,K,1,1,"app-inputs-table",8)(5,O,1,1,"app-outputs-table",9),T()),t&2){let r=c.$implicit,d=c.index;p(),i("ngIf",d>0),p(2),b(r.selector),p(),i("ngIf",r.inputs.length),p(),i("ngIf",r.outputs.length)}}var U=(()=>{class t{constructor(){this.installScript="npm install --save nxt-pick-datetime",this.importModule=`import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'

@NgModule({
    ...
    imports: [
        ...
        DateTimeModule,
        NativeDateTimeModule
    ]
})`,this.includeHTML=`<input [nxtDateTime]="picker"
    [nxtDateTimeTrigger]="picker"
    placeholder="Date and time">
<nxt-date-time #picker></nxt-date-time>
`,this.inps=["nxt-date-time","input[nxtDateTime]","[nxtDateTimeTrigger]","nxt-date-time-inline"].map(r=>{let d=[...y.components,...y.directives].find(e=>e.selector==r),l=(d?.inputsClass.sort((e,f)=>e.line-f.line)??[]).map(e=>{switch(e.name){case"pickerType":e.defaultValue="'both'";break;case"pickerMode":e.defaultValue="'popup'";break;case"disabled":e.defaultValue="false";break;case"isOpen":e.defaultValue="false";break;case"selectMode":e.defaultValue="'single'";break;case"values":e.type="Array<T>";break;case"min":case"max":e.type="T";break;case"dateTimeFilter":e.type="DateFilter<T>";break;case"scrollStrategy":e.defaultValue="BlockScrollStrategy";break}return e}),A=d?.outputsClass.sort((e,f)=>e.line-f.line)??[];return{selector:r,inputs:l,outputs:A}})}static{this.\u0275fac=function(d){return new(d||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-getting-started"]],decls:36,vars:10,consts:[["title","Getting started | nxt-pick-datetime","description","Getting started with Angular date and time picker."],[1,"h4"],[3,"code","languages"],["routerLink","../custom-adapter"],[1,"h3"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"h5"],[3,"inputs",4,"ngIf"],[3,"outputs",4,"ngIf"],[3,"inputs"],[3,"outputs"]],template:function(d,l){d&1&&(o(0,"app-meta",0),s(1,"app-content-wrap")(2,"h1"),a(3,"Getting started with nxt-pick-datetime"),n(),s(4,"h2",1),a(5,"Installing"),n(),o(6,"app-code-block",2)(7,"br"),s(8,"h2",1),a(9,"Import main module and DateTime adapter provider"),n(),s(10,"p"),a(11,"The date & time picker was built to be date implementation agnostic. It comes with two modules providing date adapter implementation, or you can provide your own adapter by implementing "),s(12,"code"),a(13,"DateTimeAdapter"),n(),a(14," (see "),s(15,"a",3),a(16,"documentation"),n(),a(17,")."),n(),s(18,"ul")(19,"li")(20,"code"),a(21,"NativeDateTimeModule"),n(),a(22," - support for native JavaScript Date object"),n(),s(23,"li")(24,"code"),a(25,"MomentDateTimeModule"),n(),a(26," - support for MomentJs"),n()(),o(27,"app-code-block",2)(28,"br"),s(29,"h2",1),a(30,"Use it in a template"),n(),o(31,"app-code-block",2)(32,"br"),s(33,"h2",4),a(34,"Configuration options"),n(),m(35,F,6,4,"ng-container",5),n()),d&2&&(p(6),i("code",l.installScript)("languages",g(7,j)),p(21),i("code",l.importModule)("languages",g(8,E)),p(4),i("code",l.includeHTML)("languages",g(9,I)),p(4),i("ngForOf",l.inps))},dependencies:[S,D,x,v,w,k,N,C],styles:["app-inputs-table[_ngcontent-%COMP%] + br[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%], app-outputs-table[_ngcontent-%COMP%] + br[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();export{U as GettingStartedComponent};
