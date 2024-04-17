System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>h});var a={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}};function n(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}const r={date:n({formats:{full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:n({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var i={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"};function o(t){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,u=null!=a&&a.width?String(a.width):t.defaultWidth;n=t.values[u]||t.values[o]}return n[t.argumentCallback?t.argumentCallback(e):e]}}const u={ordinalNumber:function(t,e){var a=Number(t);switch(null==e?void 0:e.unit){case"date":return a+"日";case"hour":return a+"時";case"minute":return a+"分";case"second":return a+"秒";default:return"第 "+a}},era:o({values:{narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:o({values:{narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},defaultWidth:"wide"}),day:o({values:{narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},defaultWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},defaultWidth:"wide",formattingValues:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},defaultFormattingWidth:"wide"})};function d(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(u))return a}(d):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(u))return a}(d);return o=t.valueCallback?t.valueCallback(l):l,{value:o=a.valueCallback?a.valueCallback(o):o,rest:e.slice(u.length)}}}var l,s={ordinalNumber:(l={matchPattern:/^(第\s*)?\d+(日|時|分|秒)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(l.matchPattern);if(!a)return null;var n=a[0],r=t.match(l.parsePattern);if(!r)return null;var i=l.valueCallback?l.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(n.length)}}),era:d({matchPatterns:{narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(前)/i,/^(公元)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},defaultParseWidth:"any"})};const h={code:"zh-TW",formatDistance:function(t,e,n){var r,i=a[t];return r="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",String(e)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?r+"內":r+"前":r},formatLong:r,formatRelative:function(t,e,a,n){return i[t]},localize:u,match:s,options:{weekStartsOn:1,firstWeekContainsDate:4}};return e})())}}}));