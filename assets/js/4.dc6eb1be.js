(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{326:function(e,l,n){},334:function(e,l,n){"use strict";n.r(l);n(326);var t={name:"Styles"},i=n(25),a=Object(i.a)(t,void 0,void 0,!1,null,null,null);l.default=a.exports},361:function(e,l,n){"use strict";n.r(l);var t=n(164),i=(n(334),{name:"tableGrid",components:{VueGoodTable:t.a},props:{rows:{type:Array,default:function(){return[]}}},data:function(){return{columns:[{label:"Physical name",field:"physical_name"},{label:"Logical name",field:"logical_name"},{label:"Type",field:"type"},{label:"Digit",field:"digit",type:"number"},{label:"Not Null",field:"not_null"},{label:"Default value",field:"default_value",html:!0},{label:"Description",field:"description",html:!0}]}},methods:{getRows:function(){return[{physical_name:"id",logical_name:"id",type:"int",not_null:"True",description:"Primary key. auto increment"},{physical_name:"password",logical_name:"パスワード",type:"string",digit:30,not_null:"True",default_value:"<code>qwerty12345</code>",description:"crypt"},{physical_name:"name",logical_name:"名前",type:"string",digit:100,not_null:"True",description:"full name"},{physical_name:"email",logical_name:"Eメール",type:"string",digit:100,not_null:"True",description:"login id"},{physical_name:"gender",logical_name:"性別",type:"tinyint",not_null:"-",description:"<a href='#性別-gender'>性別</a>"}]}}}),a=n(25),o=Object(a.a)(i,(function(){var e=this.$createElement,l=this._self._c||e;return l("div",[l("vue-good-table",{attrs:{columns:this.columns,rows:this.getRows(),"line-numbers":!0,styleClass:"vgt-table condensed"}})],1)}),[],!1,null,null,null);l.default=o.exports}}]);