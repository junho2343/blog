(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{438:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("cc32eb6c",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n(438)},445:function(t,e,n){var o=n(31)(!1);o.push([t.i,".postView[data-v-13ce213e]{width:100%;max-width:1200px;margin:0 auto;padding:0 0 80px}",""]),t.exports=o},456:function(t,e,n){"use strict";n.r(e);var o=n(12),r=(n(67),{props:{post:{type:Object,default:function(){}}}}),c=(n(444),n(18)),d={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,d,l,title,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.route,r=o.params,c=r.category,d=r.id,e.next=4,n("".concat(c,"/").concat(d),{deep:!0}).fetch();case 4:return l=e.sent,title=l.title,m=l.description,f=l.coverImage,e.abrupt("return",{title:title,description:m,coverImage:f,post:l});case 7:case"end":return e.stop()}}),e)})))()},components:{PostView:Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postView markdown-body"},[n("nuxt-content",{attrs:{document:t.post}})],1)}),[],!1,null,"13ce213e",null).exports},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:image",name:"og:image",content:this.coverImage},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:description",name:"og:description",content:this.description}]}}},l=Object(c.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostView",{attrs:{post:t.post}})}),[],!1,null,null,null);e.default=l.exports}}]);