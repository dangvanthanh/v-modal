export default(function(e,t,i,n,o,r,s,a,d,l){"boolean"!=typeof s&&(d=a,a=s,s=!1);var h,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),n&&(c._scopeId=n),r?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=h):t&&(h=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),h)if(c.functional){var f=c.render;c.render=function(e,t){return h.call(t),f(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,h):[h]}return i}({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],attrs:{"aria-hidden":"true"}},[this._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{tabindex:"-1"}},[t("div",{attrs:{role:"dialog","aria-modal":"true","aria-labelledby":""}},[t("header",[t("button",{attrs:{"aria-label":"Close modal"}})]),this._v(" "),t("div")])])}]},void 0,{name:"modal",props:{isShow:{type:Boolean,required:!0}},created:function(){window.addEventListener("keydown",this.hideModal)},methods:{hideModal:function(e){27==e.keyCode&&this.isShow&&this.$emit("close")}}},void 0,!1,void 0,void 0,void 0));
