(function(){"use strict";var t={5645:function(t,e,n){var r=n(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),e("main",[e("GameBoard")],1)])},s=[function(){var t=this,e=t._self._c;return e("header",[e("h1",[t._v("Simon game")])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-board"},[e("game-control",{on:{"start-game":t.handleStartGame}}),e("div",{staticClass:"round-counter"},[t._v("Round: "+t._s(t.currentRound))]),e("div",{staticClass:"buttons"},t._l(["red","blue","green","yellow"],(function(n){return e("game-button",{key:n,attrs:{color:n,isActive:t.activeColor===n,playSound:t.playSound},on:{"button-click":t.handleButtonClick}})})),1),t.gameOver?e("div",{staticClass:"overlay"},[t._v(" Game Over! Score: "+t._s(t.sequence.length-1)+" "),e("button",{on:{click:t.startGame}},[t._v("Restart")])]):t._e()],1)},i=[],u=(n(4114),function(){var t=this,e=t._self._c;return e("div",{class:["button",t.color,t.buttonState],on:{mousedown:t.pressButton,mouseup:t.releaseButton,mouseleave:t.releaseButton,touchstart:function(e){return e.preventDefault(),t.pressButton.apply(null,arguments)},touchend:function(e){return e.preventDefault(),t.releaseButton.apply(null,arguments)},click:t.handleClick}})}),l=[],c={props:{color:String,isActive:Boolean,playSound:Function},computed:{buttonState(){return this.isPressed?"pressed":this.isActive?"active":""}},data(){return{isPressed:!1}},methods:{pressButton(){this.isPressed=!0,this.playSound(this.color)},releaseButton(){this.isPressed=!1},handleClick(){this.$emit("button-click",this.color)}},watch:{isActive(){this.$nextTick((()=>{this.playSound(this.color)}))}}},h=c,d=n(1656),f=(0,d.A)(h,u,l,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-control"},[e("button",{staticClass:"start-button",on:{click:t.startGame}},[t._v("Start Game")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],staticClass:"select-difficulty",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.difficulty=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"easy"}},[t._v("Easy")]),e("option",{attrs:{value:"medium"}},[t._v("Medium")]),e("option",{attrs:{value:"hard"}},[t._v("Hard")])])])},m=[],y={name:"GameControl",data(){return{difficulty:"easy"}},methods:{startGame(){this.$emit("start-game",this.difficulty)}}},g=y,b=(0,d.A)(g,v,m,!1,null,null,null),_=b.exports,C={components:{GameButton:p,GameControl:_},data(){return{sequence:[],userInput:[],activeColor:"",gameOver:!1,gameDelay:1e3,currentRound:0}},methods:{handleStartGame(t){this.setGameDifficulty(t),this.startGame()},setGameDifficulty(t){switch(t){case"easy":this.gameDelay=1500;break;case"medium":this.gameDelay=1e3;break;case"hard":this.gameDelay=400;break}},startGame(){this.sequence=[],this.userInput=[],this.gameOver=!1,this.addColor(),this.currentRound=1},addColor(){const t=["red","blue","green","yellow"];this.sequence.push(t[Math.floor(Math.random()*t.length)]),this.playSequence(),this.currentRound++},playSequence(){let t=0;const e=setInterval((()=>{this.activeColor=this.sequence[t],this.playSound(this.activeColor),t++,t>=this.sequence.length&&(setTimeout((()=>{this.activeColor=""}),this.gameDelay),clearInterval(e))}),this.gameDelay)},handleButtonClick(t){this.userInput.push(t),this.checkInput()},checkInput(){for(let t=0;t<this.userInput.length;t++)if(this.userInput[t]!==this.sequence[t])return void(this.gameOver=!0);this.userInput.length===this.sequence.length&&(this.userInput=[],setTimeout((()=>{this.addColor()}),1e3))},playSound(t){const e=new Audio(`/sounds/${t}.mp3`);e.play()}}},k=C,S=(0,d.A)(k,a,i,!1,null,null,null),w=S.exports,G={name:"App",components:{GameBoard:w}},O=G,A=(0,d.A)(O,o,s,!1,null,null,null),B=A.exports;r.Ay.config.productionTip=!1,r.Ay.config.devtools=!0,new r.Ay({render:t=>t(B)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],s=t[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,s<a&&(a=s));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,a=r[0],i=r[1],u=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var c=u(n)}for(e&&e(r);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},r=self["webpackChunksimon_game"]=self["webpackChunksimon_game"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5645)}));r=n.O(r)})();
//# sourceMappingURL=app.652ab6d2.js.map