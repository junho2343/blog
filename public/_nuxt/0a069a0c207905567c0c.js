(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{405:function(t,e,n){},407:function(t,e,n){"use strict";var r=n(405);n.n(r).a},420:function(t,e,n){},423:function(t,e,n){"use strict";var r={props:["list"]},c=(n(407),n(15)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list",class:t.$store.state.common.isMobile?"mobile":""},[t.list&&t.list.mainImage&&t.list.mainImage.url?n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.list.mainImage.url+")"}}):n("div",{staticClass:"errorImage"}),t._v(" "),n("div",[n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[t._v(t._s(t.list.title))]),t._v(" "),n("div",{staticClass:"writer"},[t._v("작성자: "+t._s(t.list.writer))])])])])}),[],!1,null,"03c13d7e",null);e.a=component.exports},437:function(t,e,n){"use strict";var r=n(420);n.n(r).a},442:function(t,e,n){"use strict";n.r(e);n(73),n(193),n(64),n(142),n(40),n(37),n(63);var r=n(35),c=n.n(r),o={components:{list:n(423).a},data:function(){var t=this.$store.state.post,e=Object.keys(t).filter((function(e){return t[e]&&t[e].length<=0}));return{postStoreData:t,search:"",postList:[],necessaryCollectionList:e}},computed:{allPostData:function(){var t=[];return t=this.listData&&this.listData.length>0?this.listData:t.concat(this.postStoreData.travel,this.postStoreData.movie,this.postStoreData.tech)},searchPostData:function(){var t=this.search.trim();return this.allPostData.filter((function(e){var n=e.contents.replace(/(<([^>]+)>)/gi,"");return e.title.indexOf(t)>=0||n.indexOf(t)>=0}))}},methods:{getAllPostData:function(){var t=this,e=c.a.firestore(),n=this.necessaryCollectionList.map((function(t){return{name:t,query:e.collectionGroup(t)}}));Object.values(n).forEach((function(e){e.query.get().then((function(n){var r=[],c={};n.forEach((function(n){var data=Object.assign({id:n.id,type:e.name},n.data());r.push(data),t.postList.push(data),t.$store.commit("postView/saveData",data)})),c[e.name]=[].concat(r),t.$store.commit("post/saveData",c)}))}))},selectView:function(t,e){this.$router.push({path:"/".concat(t,"/view"),query:{id:e}})}},mounted:function(){this.necessaryCollectionList&&this.necessaryCollectionList.length>0&&this.getAllPostData()}},l=(n(437),n(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",class:t.$store.state.common.isMobile?"mobile":""},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"searchWrap"},[n("div",{staticClass:"search"},[n("div",{staticClass:"title"},[t._v("개발자 서재우")]),t._v(" "),n("div",{staticClass:"inputWrap"},[n("input",{attrs:{type:"text",placeholder:"Search Topic"},domProps:{value:t.search},on:{input:function(e){t.search=e.target.value}}})])])]),t._v(" "),n("div",{staticClass:"listWrap"},[n("div",{staticClass:"title"},[n("div",[n("span",{staticClass:"bold"},[t._v(t._s(t.search?'"'+t.search+'"':"All")+" Topic")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.search&&t.searchPostData&&0>=t.searchPostData.length?n("span",{staticClass:"no"},[t._v("- no result")]):t._e()])],1)]),t._v(" "),n("transition-group",{staticClass:"itemWrap",attrs:{name:"slide-bottom-fade",tag:"div"}},t._l(t.search&&t.searchPostData&&t.searchPostData.length>0?t.searchPostData:t.allPostData,(function(e,r){return n("list",{key:""+e+r,class:e.type,attrs:{list:e},nativeOn:{click:function(n){return t.selectView(e.type,e.id)}}})})),1)],1)])])}),[],!1,null,"69074a85",null);e.default=component.exports}}]);