(this.webpackJsonpege12generator=this.webpackJsonpege12generator||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),l=a.n(r),i=(a(13),a(1)),c=a(2),m=a(3),o=a(5),u=a(4),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u041f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c IP-\u0430\u0434\u0440\u0435\u0441\u0443 \u0443\u0437\u043b\u0430 \u0438 \u043c\u0430\u0441\u043a\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438:",s.a.createElement("br",null),"IP-\u0430\u0434\u0440\u0435\u0441: ",this.state.ip.join(".")," \u041c\u0430\u0441\u043a\u0430: ",this.state.mask.join(".")),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u043c\u0430\u0441\u043a\u0443 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041d\u0430\u0439\u0434\u0451\u043c \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0443\u044e \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044e."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",this.getBinaryAdress(this.state.mask),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",s.a.createElement("span",{className:"important"},this.getBinaryAdress(this.state.net))," "),s.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0432\u0438\u0434 \u0438 \u0437\u0430\u043f\u0438\u0448\u0435\u043c \u043e\u0442\u0432\u0435\u0442"),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.net.join("."))))}}]),a}(s.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0441\u043b\u0435\u0432\u0430 \u0431\u0430\u0439\u0442\u0430 \u043c\u0430\u0441\u043a\u0438? \u041e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u0430\u0439\u0442 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinary(this.state.ip[2]),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinary(this.state.mask[2])),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinary(this.state.net[2])),s.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0432\u0438\u0434 \u0438 \u0437\u0430\u043f\u0438\u0448\u0435\u043c \u043e\u0442\u0432\u0435\u0442"),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.mask[2])))}}]),a}(s.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0414\u043b\u044f \u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0441\u043a\u0438 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e?"),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u0412 \u043c\u0430\u0441\u043a\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442 ",this.state.minCount," \u0434\u043e ",this.state.maxCount," \u0435\u0434\u0438\u043d\u0438\u0446."),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.maskCount)))}}]),a}(s.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinary(n.state.minMask[2]),t=n.getBinary(n.state.maxMask[2]);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u043e \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0441\u043b\u0435\u0432\u0430 \u0431\u0430\u0439\u0442\u0430 \u043c\u0430\u0441\u043a\u0438? \u041e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u0430\u0439\u0442 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinary(this.state.ip[2]),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinary(this.state.net[2])),s.a.createElement("p",null," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u0430\u0439\u0442 \u043c\u0430\u0441\u043a\u0438 \u0442\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043c\u0435\u0442 \u0432\u0438\u0434 ",this.getBinary(this.state.minMask[2]),". \u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0432\u0438\u0434 \u0438 \u0437\u0430\u043f\u0438\u0448\u0435\u043c \u043e\u0442\u0432\u0435\u0442."),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.minMask[2])))}}]),a}(s.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinary(n.state.minMask[2]),t=n.getBinary(n.state.maxMask[2]);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0441\u043b\u0435\u0432\u0430 \u0431\u0430\u0439\u0442\u0430 \u043c\u0430\u0441\u043a\u0438? \u041e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u0430\u0439\u0442 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinary(this.state.ip[2]),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinary(this.state.net[2])),s.a.createElement("p",null," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u0430\u0439\u0442 \u043c\u0430\u0441\u043a\u0438 \u0442\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043c\u0435\u0442 \u0432\u0438\u0434 ",this.getBinary(this.state.maxMask[2]),". \u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0432\u0438\u0434 \u0438 \u0437\u0430\u043f\u0438\u0448\u0435\u043c \u043e\u0442\u0432\u0435\u0442."),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.maxMask[2])))}}]),a}(s.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0435\u0434\u0438\u043d\u0438\u0446 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0435\u0434\u0438\u043d\u0438\u0446 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",this.state.minCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.minCount)))}}]),a}(s.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0435\u0434\u0438\u043d\u0438\u0446 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0435\u0434\u0438\u043d\u0438\u0446 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",this.state.maxCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",this.state.maxCount)))}}]),a}(s.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",32-this.state.maxCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",32-this.state.maxCount)))}}]),a}(s.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438."),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",32-this.state.minCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",32-this.state.minCount)))}}]),a}(s.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0435\u0442\u0438?"),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 \u043a\u0430\u043a \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0434\u0432\u043e\u0439\u043a\u0438. \u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",32-this.state.minCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",Math.pow(2,32-this.state.minCount))))}}]),a}(s.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getBinary=function(e){return e.toString(2).padStart(8,"0")},n.getBinaryAdress=function(e){return e.map((function(e){return n.getBinary(e)})).join(".")},n.getBinaryMask=function(){var e=n.getBinaryAdress(n.state.minMask),t=n.getBinaryAdress(n.state.maxMask);return[].map.call(e,(function(a,n){return e[n]===t[n]?a:"*"}))},n.showAnswer=function(){return n.setState({showAnswer:!n.state.showAnswer})},n.state=Object(i.a)({},e.data),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"\u0414\u043b\u044f \u0443\u0437\u043b\u0430 \u0441 IP \u0430\u0434\u0440\u0435\u0441\u043e\u043c ",this.state.ip.join(".")," \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d ",this.state.net.join("."),". \u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u043e \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0435\u0442\u0438?"),s.a.createElement("p",{onClick:this.showAnswer},s.a.createElement("span",{className:"hintButton"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:")),s.a.createElement("div",{className:this.state.showAnswer?"":"hide"},s.a.createElement("p",null,"\u0417\u0430\u043f\u0438\u0448\u0435\u043c IP \u0430\u0434\u0440\u0435\u0441 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u043a\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u044f."),s.a.createElement("p",{className:"code"},s.a.createElement("span",{className:"bold"},"IP\xa0\xa0")," ",this.getBinaryAdress(this.state.ip),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Mask")," ",s.a.createElement("span",{className:"important"},this.getBinaryMask()),s.a.createElement("br",null),s.a.createElement("span",{className:"bold"},"Net\xa0")," ",this.getBinaryAdress(this.state.net)),s.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 \u043a\u0430\u043a \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0434\u0432\u043e\u0439\u043a\u0438. \u041d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u0435\u0439 \u0432 \u043c\u0430\u0441\u043a\u0435 - ",32-this.state.maxCount),s.a.createElement("p",null,s.a.createElement("span",{className:"bold"},"\u041e\u0442\u0432\u0435\u0442:")," ",Math.pow(2,32-this.state.maxCount))))}}]),a}(s.a.Component);a(14);function A(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}function j(e){for(var t=[],a=[0,128,192,224,240,248,252,254,255],n=0;n<4;n++)e>8?t.push(a[8]):t.push(a[e]),e=e>=8?e-=8:0;return t}for(var k=j(A(17,23)),v=function(e){for(var t=[],a=function(){for(var e=[],t=0;t<4;t++)e.push(A(10,223));return e}(),n=0;n<4;n++)t.push(a[n]&e[n]);return t}(k),M=function(e,t){for(var a=[],n=0;n<4;n++)255===t[n]?a.push(e[n]):a.push(e[n]+A(1,255-t[n]-1));return a}(v,k),O=0,C=33,I=-1,P=function(e){var t=j(e);t.every((function(e,a){return(M[a]&t[a])===v[a]}))&&(O++,e<C&&(C=e),e>I&&(I=e))},S=0;S<=32;S++)P(S);var x={mask:k,net:v,ip:M,maskCount:O,minCount:C,maxCount:I,minMask:j(C),maxMask:j(I)},T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getRandomTask=function(){var e=[];return n.state.maskCount>1?(e.push(s.a.createElement(E,{data:n.state}),s.a.createElement(w,{data:n.state}),s.a.createElement(f,{data:n.state}),s.a.createElement(g,{data:n.state}),s.a.createElement(y,{data:n.state})),0<n.state.minMask[2]&&n.state.minMask[2]<255&&e.push(s.a.createElement(d,{data:n.state})),0<n.state.minMask[2]&&n.state.minMask[2]<255&&e.push(s.a.createElement(b,{data:n.state})),Math.pow(2,32-n.state.maxCount)<1024&&e.push(s.a.createElement(N,{data:n.state})),Math.pow(2,32-n.state.minCount)<1024&&e.push(s.a.createElement(B,{data:n.state}))):e.push(s.a.createElement(h,{data:n.state}),s.a.createElement(p,{data:n.state})),e[Math.floor(Math.random()*e.length)]},n.state=Object(i.a)(Object(i.a)({},x),{},{showAnswer:!1}),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("span",{className:"number"},"12")," \u0412 \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0441\u0435\u0442\u0435\u0439 TCP/IP \u043c\u0430\u0441\u043a\u043e\u0439 \u0441\u0435\u0442\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0435, \u043a\u0430\u043a\u0430\u044f \u0447\u0430\u0441\u0442\u044c IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0443\u0437\u043b\u0430 \u0441\u0435\u0442\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0430\u0434\u0440\u0435\u0441\u0443 \u0441\u0435\u0442\u0438, \u0430 \u043a\u0430\u043a\u0430\u044f \u2013 \u043a \u0430\u0434\u0440\u0435\u0441\u0443 \u0441\u0430\u043c\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0435\u0442\u0438. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432 \u043c\u0430\u0441\u043a\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 (\u0432 \u0441\u0442\u0430\u0440\u0448\u0438\u0445 \u0440\u0430\u0437\u0440\u044f\u0434\u0430\u0445) \u0441\u0442\u043e\u044f\u0442 \u0435\u0434\u0438\u043d\u0438\u0446\u044b, \u0430 \u0437\u0430\u0442\u0435\u043c \u0441 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u2013 \u043d\u0443\u043b\u0438. \u041e\u0431\u044b\u0447\u043d\u043e \u043c\u0430\u0441\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u0442\u0435\u043c \u0436\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c, \u0447\u0442\u043e \u0438 IP-\u0430\u0434\u0440\u0435\u0441, \u2013 \u0432 \u0432\u0438\u0434\u0435 \u0447\u0435\u0442\u044b\u0440\u0451\u0445 \u0431\u0430\u0439\u0442\u043e\u0432, \u043f\u0440\u0438\u0447\u0451\u043c \u043a\u0430\u0436\u0434\u044b\u0439 \u0431\u0430\u0439\u0442 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430. \u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u0438 \u043a \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 IP-\u0430\u0434\u0440\u0435\u0441\u0443 \u0443\u0437\u043b\u0430 \u0438 \u043c\u0430\u0441\u043a\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 IP-\u0430\u0434\u0440\u0435\u0441 \u0443\u0437\u043b\u0430 \u0440\u0430\u0432\u0435\u043d 131.32.255.131, \u0430 \u043c\u0430\u0441\u043a\u0430 \u0440\u0430\u0432\u043d\u0430 255.255.240.0, \u0442\u043e \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0440\u0430\u0432\u0435\u043d 131.32.240.0."),this.getRandomTask())}}]),a}(s.a.Component);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2cb7e3ba.chunk.js.map