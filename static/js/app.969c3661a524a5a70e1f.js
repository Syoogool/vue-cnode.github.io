webpackJsonp([1],{"01h8":function(t,e){},"2Dwc":function(t,e){},"5gcp":function(t,e){},E51W:function(t,e){},FAxa:function(t,e){},NHnr:function(t,e,n){"use strict";function s(t){var e=(Date.now()-Date.parse(t))/1e3;return e>60?e/60>60?e/60/60>24?e/60/60/24>30?e/60/60/24/30>12?~~(e/60/60/24/30/12)+"年前":~~(e/60/60/24/30)+"月前":~~(e/60/60/24)+"天前":~~(e/60/60)+"小时前":~~(e/60)+"分钟前":~~e+"秒前"}Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("a9wy"),o=n.n(i),r={name:"header-nav",data:function(){return{user:null}},computed:{userInfo:function(){var t=JSON.parse(window.sessionStorage.getItem("user"));return t?(console.log(t),t):this.$store.state.userInfo}},methods:{sendToParent:function(){this.$emit("receiveChildEvent",this.$route.params.id)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"header-nav",on:{click:t.sendToParent}},[t.userInfo.loginname?n("router-link",{attrs:{to:"/user/"+t.userInfo.loginname,tag:"li"}},[n("img",{staticClass:"user-img",attrs:{src:t.userInfo.avatar_url}}),t._v(" "),n("span",{staticClass:"user-name"},[t._v(" "+t._s(t.userInfo.loginname)+" ")])]):n("router-link",{attrs:{to:"/login",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("perm_identity")]),t._v(" "),n("span",[t._v("登陆")])]),t._v(" "),n("router-link",{attrs:{to:"/",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("home")]),t._v(" "),n("span",[t._v("全部")])]),t._v(" "),n("router-link",{attrs:{to:"/good",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("thumb_up")]),t._v(" "),n("span",[t._v("精华")])]),t._v(" "),n("router-link",{attrs:{to:"/share",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("share")]),t._v(" "),n("span",[t._v("分享")])]),t._v(" "),n("router-link",{attrs:{to:"/ask",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("question_answer")]),t._v(" "),n("span",[t._v("问答")])]),t._v(" "),n("router-link",{attrs:{to:"/job",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("group")]),t._v(" "),n("span",[t._v("招聘")])]),t._v(" "),n("router-link",{attrs:{to:"/dev",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("build")]),t._v(" "),n("span",[t._v("测试")])]),t._v(" "),n("router-link",{attrs:{to:"/syoogool/message",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("info")]),t._v(" "),n("span",[t._v("消息")])]),t._v(" "),n("router-link",{attrs:{to:"/syoogool/about",tag:"li"}},[n("i",{staticClass:"material-icons"},[t._v("account_box")]),t._v(" "),n("span",[t._v("关于")])])],1)},staticRenderFns:[]},l={name:"app",data:function(){return{navTitle:"",slideout:null,topTitle:""}},mounted:function(){function t(t){t.preventDefault(),e.close()}var e=new o.a({panel:this.$refs.panel,menu:this.$refs.menu,padding:240,tolerance:70}),n=this.$refs.header;this.slideout=e,e.on("translate",function(t){n.style.transform="translateX("+t+"px)"}),e.on("beforeopen",function(){n.style.transition="transform 300ms ease",n.style.transform="translateX(240px)",this.panel.classList.add("panel-open")}),e.on("beforeclose",function(){n.style.transition="transform 300ms ease",n.style.transform="translateX(0px)",this.panel.classList.remove("panel-open"),this.panel.removeEventListener("click",t)}),e.on("open",function(){n.style.transition="",this.panel.addEventListener("click",t)}),e.on("close",function(){n.style.transition=""})},methods:{toggleSlide:function(){this.slideout.toggle()},childCallBack:function(t){this.topTitle=t,this.toggleSlide()}},components:{HeaderNav:n("VU/8")(r,c,!1,function(t){n("FAxa")},"data-v-d9ccae30",null).exports}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"menu",attrs:{id:"menu"}},[n("HeaderNav",{on:{receiveChildEvent:t.childCallBack}})],1),t._v(" "),n("header",{ref:"header",staticClass:"fix-header"},[n("i",{staticClass:"material-icons toggle-button",on:{click:t.toggleSlide}},[t._v("menu")]),t._v(" "),n("span",{staticClass:"top-title",domProps:{textContent:t._s(t.topTitle)}}),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"material-icons create"},[t._v("create")])])],1),t._v(" "),n("main",{ref:"panel",staticClass:"panel"},[n("router-view")],1)])},staticRenderFns:[]},p=n("VU/8")(l,u,!1,function(t){n("uUIN")},null,null).exports,v=n("/ocq"),d=n("Dd8w"),h=n.n(d),m=n("NYxO"),f={data:function(){return{loading:!1,error:null}},name:"content",created:function(){this.fetchdata("https://cnodejs.org/api/v1/topics?page=1")},computed:{topics:function(){return this.$store.state.all}},methods:h()({},Object(m.b)(["fetchdata"]))},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t.loading?n("p",[t._v("loading...")]):t._e(),t._v(" "),t.error?n("p",[t._v(t._s(t.error))]):t._e(),t._v(" "),t._l(t.topics,function(e){return n("ul",{key:e.id,staticClass:"content-ul"},[n("Li",{staticClass:"list-item"},[n("router-link",{attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))])],1)],1)})],2)},staticRenderFns:[]},g=n("VU/8")(f,_,!1,function(t){n("5gcp")},"data-v-3c1db466",null).exports,b=n("mtWM"),C=n.n(b),k={name:"comment",props:["replies"],data:function(){return{repliesReverse:this.replies.reverse()}},computed:{userInfo:function(){var t=JSON.parse(window.sessionStorage.getItem("user"));return t||this.$store.state.userInfo}},methods:{isUps:function(t){return t.includes(this.userInfo.id)},upReply:function(t){var e=this;if(this.userInfo.id){var n="https://cnodejs.org/api/v1/reply/"+t.id+"/ups?accesstoken="+this.userInfo.token;C.a.post(n).then(function(n){if(console.log(n.data),"down"===n.data.action){var s=t.ups.indexOf(e.userInfo.id);t.ups.splice(s,1)}else t.ups.push(e.userInfo.id)}).catch(function(t){return console.log(t.toString()),!1})}else this.$router.push({name:"login",params:{redirect:encodeURIComponent(this.$route.path)}})},timeAgo:function(t){return s(t)}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.repliesReverse,function(e,s){return n("li",{key:e.id,staticClass:"reply-item"},[n("div",{staticClass:"author"},[n("img",{attrs:{src:e.author.avatar_url,alt:"头像"}}),t._v(" "),n("span",[t._v(t._s(e.author.loginname))]),t._v(" "),n("span",[t._v("发布于"+t._s(t.timeAgo(e.create_at)))])]),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.content)}}),t._v(" "),n("span",{staticClass:"good"},[n("i",{staticClass:"material-icons orange600",class:{active:t.isUps(e.ups)},on:{click:function(n){t.upReply(e)}}},[t._v("thumb_up")]),t._v(" "),n("span",[t._v(t._s(e.ups.length))])])])}))},staticRenderFns:[]},y=n("VU/8")(k,w,!1,function(t){n("gTDX")},"data-v-68af992c",null).exports,I={name:"comment",props:["replies"],data:function(){return{comment:""}},computed:{userInfo:function(){var t=JSON.parse(window.sessionStorage.user);return t||this.$store.state.userInfo}},methods:{isLogin:function(){this.userInfo.id||this.$router.push({name:"login"})},addReply:function(){var t=this,e="https://cnodejs.org/api/v1/topic/"+this.$route.params.id+"/replies";C.a.post(e,{content:this.comment,accesstoken:this.userInfo.token}).then(function(e){console.log(e.data);var n=new Date;t.replies.push({author:{avatar_url:t.userInfo.avatar_url,loginname:t.userInfo.loginname},id:t.userInfo.id,content:t.comment,create_at:n,is_uped:!1,reply_id:e.data.reply_id,ups:[]})}).catch(function(t){return console.log(t.toString()),!1})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-box"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"comment",attrs:{placeholder:"写下你的评论..."},domProps:{value:t.comment},on:{focus:t.isLogin,input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("button",{staticClass:"submit",on:{click:t.addReply}},[t._v("确定")])])},staticRenderFns:[]},$=n("VU/8")(I,x,!1,function(t){n("VKk2")},null,null).exports,L={name:"postDetails",data:function(){return{isLoading:!1,post:{author:{avatar_url:"",loginname:""},id:"",content:"",create_at:"",replies:[],title:""}}},created:function(){var t=this,e="https://cnodejs.org/api/v1/topic/"+this.$route.params.id;this.isLoading=!0,this.fetchpost(e).then(function(){t.isLoading=!1,t.post=t.$store.state.post})},methods:h()({},Object(m.b)(["fetchpost"]),{timeAgo:function(t){return s(t)}}),components:{ReplyList:y,Comment:$}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-details"},[t.isLoading?n("div",{staticClass:"line-scale-pulse-out"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")]):n("div",[n("h3",[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"author"},[n("img",{attrs:{src:t.post.author.avatar_url,alt:"头像"}}),t._v(" \n      "),n("span",[t._v(t._s(t.post.author.loginname))]),t._v(" \n      "),n("span",[t._v("发布于"+t._s(t.timeAgo(t.post.create_at)))]),t._v(" \n      "),n("span",[t._v(t._s(t.post.visit_count)+"次浏览")]),t._v(" \n      ")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),n("Comment",{attrs:{replies:t.post.replies},on:{"update:replies":function(e){t.$set(t.post,"replies",e)}}}),t._v(" "),n("p",{staticClass:"reply-count"},[t._v(t._s(t.post.reply_count)+"回复")]),t._v(" "),n("ul",{staticClass:"reply"},[n("ReplyList",{attrs:{replies:t.post.replies}})],1)],1)])},staticRenderFns:[]},S=n("VU/8")(L,R,!1,function(t){n("x5Sx")},"data-v-4c18973a",null).exports,E=n("//Fk"),T=n.n(E),A=n("Gu7T"),U=n.n(A),F=n("mvHQ"),N=n.n(F),P={props:["posts"],methods:{getLabel:function(t){if(t.top)return"置顶";if(t.good)return"精华";switch(t.tab){case"share":return"分享";case"good":return"精华";case"ask":return"问答";case"job":return"招聘";case"top":return"置顶";case"dev":return"测试"}},timeAgo:function(t){return s(t)}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.posts,function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"item-title"},[n("router-link",{attrs:{to:"/topic/"+e.id}},[t._v("\r\n        "+t._s(e.title)+"\r\n      ")])],1),t._v(" "),n("div",{staticClass:"item-author"},[n("router-link",{attrs:{to:"/user/"+e.author.loginname}},[n("div",{staticClass:"chip"},[n("img",{staticClass:"item-img",attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v("\r\n           "+t._s(e.author.loginname)+"\r\n        ")])]),t._v(" "),n("span",{staticClass:"item-count"},[t._v(t._s(e.reply_count)+"回复")]),t._v(" "),n("span",{staticClass:"item-last-reply"},[t._v(t._s(t.timeAgo(e.last_reply_at)))])],1)])}))},staticRenderFns:[]},j=n("VU/8")(P,V,!1,function(t){n("01h8")},"data-v-fc755d16",null).exports,D={name:"contentGood",data:function(){return{isLoading:!1,error:null,page:1,topic:null,canRun:!0,posts:[]}},mounted:function(){this.init(),window.addEventListener("scroll",this.scrollProcessor)},destroyed:function(){window.removeEventListener("scroll",this.scrollProcessor)},beforeRouteLeave:function(t,e,n){"postDetails"===t.name&&(window.sessionStorage.posts=N()(this.posts),window.sessionStorage.page=N()(this.page)),n()},methods:{init:function(){var t=this;this.posts=[],this.page=1;var e=this.topic||this.$route.params.id;this.topic=this.$route.params.id;var n="https://cnodejs.org/api/v1/topics?tab="+e+"&page="+this.page,s=window.sessionStorage.posts;s&&s.length>2?(this.posts=JSON.parse(window.sessionStorage.posts),this.page=JSON.parse(window.sessionStorage.page),window.sessionStorage.removeItem("posts"),window.sessionStorage.removeItem("page")):this.fetchData(n).then(function(e){var n;t.posts=(n=t.posts).concat.apply(n,U()(e.data.data))})},fetchData:function(t){var e=this;return new T.a(function(n,s){e.error=null,e.isLoading=!0,C.a.get(t).then(function(t){e.isLoading=!1,n(t)}).catch(function(t){e.error=t.toString(),s(t)})})},scrollProcessor:function(){var t=document.documentElement.scrollHeight-document.documentElement.scrollTop-document.documentElement.clientHeight;if(console.log(t),t<700){if(!this.canRun)return;this.canRun=!1,this.page+=1;var e=this;setTimeout(function(){var t="https://cnodejs.org/api/v1/topics?tab="+e.$route.path.slice(1)+"&page="+e.page;e.fetchData(t).then(function(t){var n;e.posts=(n=e.posts).concat.apply(n,U()(t.data.data))}),e.canRun=!0},1e3)}}},watch:{$route:function(t,e){"goodContent"===t.name&&"goodContent"===e.name&&(this.topic=this.$route.params.id,this.init())}},components:{ListItem:j}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-good"},[e("ul",{ref:"reference",staticClass:"content-ul"},[e("ListItem",{attrs:{posts:this.posts}})],1),this._v(" "),this.isLoading?e("div",{staticClass:"line-scale-pulse-out"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div"),this._v(" "),e("div"),this._v(" "),e("div")]):this._e(),this._v(" "),this.error?e("p",[this._v(this._s(this.error))]):this._e()])},staticRenderFns:[]},H=n("VU/8")(D,O,!1,function(t){n("Na+R")},"data-v-c6ae724a",null).exports,q={data:function(){return{isLoading:!1,error:!1,activeTab:"tab1",post:{data:{avatar_url:null,loginname:null,score:null,recent_replies:null,recent_topics:null}}}},mounted:function(){var t=this,e="https://cnodejs.org/api/v1/user/"+this.$route.params.id;this.isLoading=!0,this.fetch(e).then(function(e){t.post=e.data,t.isLoading=!1})},methods:{handleTabChange:function(t){this.activeTab=t},fetch:function(t){return new T.a(function(e,n){C.a.get(t).then(function(t){console.log(t),e(t)}).catch(function(t){n(t)})})}},components:{ListItem:j}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-profile"},[this.isLoading?e("div",{staticClass:"line-scale-pulse-out"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div"),this._v(" "),e("div"),this._v(" "),e("div")]):this._e(),this._v(" "),this.error?e("p",[this._v(this._s(this.error))]):e("div",[e("div",{staticClass:"img-box"},[e("img",{staticClass:"img",attrs:{src:this.post.data.avatar_url}}),this._v(" "),e("h3",[this._v(this._s(this.post.data.loginname))])]),this._v(" "),e("p",[this._v(this._s(this.post.data.score)+"积分")]),this._v(" "),e("mu-tabs",{attrs:{value:this.activeTab},on:{change:this.handleTabChange}},[e("mu-tab",{attrs:{value:"tab1",title:"最近回复"}}),this._v(" "),e("mu-tab",{attrs:{value:"tab2",title:"最新发布"}}),this._v(" "),e("mu-tab",{attrs:{value:"tab3",title:"话题收藏"}})],1),this._v(" "),"tab1"===this.activeTab?e("div",[e("ul",[e("h3",[this._v("最近参与的话题")]),this._v(" "),e("ListItem",{attrs:{posts:this.post.data.recent_replies}})],1)]):this._e(),this._v(" "),"tab2"===this.activeTab?e("div",[e("ul",[e("h4",[this._v("最近创建的话题")]),this._v(" "),e("ListItem",{attrs:{posts:this.post.data.recent_topics}})],1)]):this._e(),this._v(" "),"tab3"===this.activeTab?e("div",[e("h2",[this._v("tab three")])]):this._e()],1)])},staticRenderFns:[]},J=n("VU/8")(q,X,!1,function(t){n("waFZ")},null,null).exports,M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("h3",[this._v("Hello")])])}]},G=n("VU/8")({name:"about"},M,!1,function(t){n("rsmP")},"data-v-09a59804",null).exports,W={name:"login",data:function(){return{token:null,data:null}},methods:{submit:function(){var t=this,e="https://cnodejs.org/api/v1/accesstoken?accesstoken="+this.token;C.a.post(e).then(function(e){var n=e.data,s={id:n.id,loginname:n.loginname,avatar_url:n.avatar_url,token:t.token};t.data=s,console.log(s),t.$store.dispatch("getUserInfo",s),t.$router.push("/good"),window.sessionStorage.user=N()(s)}).catch(function(t){console.log(t)})}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("mu-text-field",{attrs:{label:"token",hintText:"输入token"},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}}),t._v(" "),n("mu-raised-button",{attrs:{label:"登陆"},on:{click:t.submit}}),t._v(" "),n("p",{staticStyle:{"padding-left":"50px"}},[t._v("f4534249-4043-4f78-95a3-1c8bb18af29c")])],1)},staticRenderFns:[]},z=n("VU/8")(W,B,!1,function(t){n("VXbz")},"data-v-2e76868e",null).exports,K={name:"createPost",data:function(){return{tab:"",title:"",content:""}},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{submit:function(){C.a.post("https://cnodejs.org/api/v1/topics",{tab:this.tab,title:this.title,content:this.content,accesstoken:this.userInfo.token}).then(function(t){console.log(t.data)}).catch(function(t){return console.log(t.toString()),!1})}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-post"},[n("h1",[t._v("新建主题")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("span",[t._v("发布到分类")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],staticClass:"tab",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.tab=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"share"}},[t._v("分享")]),t._v(" "),n("option",{attrs:{value:"dev"}},[t._v("测试")]),t._v(" "),n("option",{attrs:{value:"good"}},[t._v("精华")]),t._v(" "),n("option",{attrs:{value:"ask"}},[t._v("问答")])])]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"name",attrs:{type:"text",placeholder:"请输入主题名"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"content",attrs:{placeholder:"主题内容..."},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("div",[n("button",{staticClass:"submit",on:{click:t.submit}},[t._v("确定")])])])])},staticRenderFns:[]},Z=n("VU/8")(K,Q,!1,function(t){n("2Dwc")},"data-v-f83b0e78",null).exports;a.default.use(v.a);var Y=new v.a({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"home",component:g},{path:"/login",name:"login",component:z,meta:{requiresAuth:!1}},{path:"/create",component:Z},{path:"/:id",name:"goodContent",component:H,meta:{requiresAuth:!1},beforeEnter:function(t,e,n){n()}},{path:"/syoogool/about",name:"about",component:G,meta:{requiresAuth:!0}},{path:"/topic/:id",name:"postDetails",component:S,meta:{requiresAuth:!1}},{path:"/user/:id",component:J,meta:{requiresAuth:!1}}]});a.default.use(m.a);var tt={savedata:function(t,e){var n;t.all=(n=t.all).concat.apply(n,U()(e.data.data))},savepost:function(t,e){t.post=e.data.data},userInfo:function(t,e){t.userInfo=e}},et={fetchdata:function(t,e){var n=t.commit;(function(t){return new T.a(function(e,n){C.a.get(t).then(function(t){e(t)}).catch(function(t){n(t)})})})(e).then(function(t){n("savedata",t)})},fetchpost:function(t,e){var n=t.commit;return new T.a(function(t,s){C.a.get(e).then(function(e){n("savepost",e),t(e)})})},getUserInfo:function(t,e){(0,t.commit)("userInfo",e)}},nt=new m.a.Store({state:{userInfo:{avatar_url:"",loginname:"",id:""},post:{author:{avatar_url:"",loginname:""},id:"",is_collect:"",content:"",create_at:"",replies:[],title:""}},actions:et,mutations:tt}),st={install:function(t){Object.defineProperty(t.prototype,"$slideout",{value:o.a})}},at=(n("uMhA"),n("u64Q")),it=n.n(at);n("E51W"),n("t+Gu");a.default.use(it.a),a.default.use(st),a.default.config.productionTip=!1,Y.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?nt.state.userInfo.id?n():n({path:"/login",query:{redirect:t.FullPath}}):n()}),new a.default({el:"#app",router:Y,store:nt,template:"<App/>",components:{App:p}})},"Na+R":function(t,e){},VKk2:function(t,e){},VXbz:function(t,e){},gTDX:function(t,e){},rsmP:function(t,e){},"t+Gu":function(t,e){},uMhA:function(t,e){},uUIN:function(t,e){},waFZ:function(t,e){},x5Sx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.969c3661a524a5a70e1f.js.map