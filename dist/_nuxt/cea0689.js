(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{303:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("91514ac2",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(303)},315:function(t,e,r){var n=r(77)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]),n.push([t.i,'*{font-family:"Quantico",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}',""]),n.locals={},t.exports=n},322:function(t,e,r){"use strict";r.r(e);var n=r(11),o=(r(43),r(108),r(295)),l={name:"Register",data:function(){return{email:"",user:"",password:"",warn:"",err:""}},components:{},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(o.a)("https://btozlwgodrieiivvilno.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0b3psd2dvZHJpZWlpdnZpbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzQ2NDksImV4cCI6MTk4NDk1MDY0OX0.mCLYF2ZKas2hOfAUapacMUqysLPLgKfz3tRp99MrIYg"),!(t.password.length<8)){e.next=4;break}return alert("Password must be at least 8 characters long"),e.abrupt("return");case 4:return e.next=6,r.auth.signInWithPassword({email:t.email,password:t.password});case 6:n=e.sent,data=n.data,(l=n.error)?(t.err=l.message,console.log(l.message)):(t.user=data.user.email,setTimeout((function(){t.$router.push("/Category")}),2e3));case 10:case"end":return e.stop()}}),e)})))()}}},c=(r(314),r(76)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},[e("div",{staticClass:"mx-auto max-w-lg"},[e("h1",{staticClass:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl"},[t._v("\n        Welcome Back :)\n      ")]),t._v(" "),e("h1",{staticClass:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl"},[t._v("\n        Track Your Buddy\n      ")]),t._v(" "),e("p",{staticClass:"mx-auto mt-4 max-w-md text-center text-gray-500"},[t._v("\n        With Just a single token you can track your Buddy! Right from your comfort Zone!\n      ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.user,expression:"user"}],staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.user)+" Logged In!\n      ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.err,expression:"err"}],staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.err)+"!\n      ")]),t._v(" "),e("form",{staticClass:"mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("p",{staticClass:"text-lg font-medium"},[t._v("Sign in to your account")]),t._v(" "),e("div",[e("label",{staticClass:"text-sm font-medium",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("div",{staticClass:"relative mt-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("span",{staticClass:"absolute inset-y-0 right-4 inline-flex items-center"},[e("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}})])])])]),t._v(" "),e("div",[e("label",{staticClass:"text-sm font-medium",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"relative mt-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100",attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("span",{staticClass:"absolute inset-y-0 right-4 inline-flex items-center"},[e("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}),t._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}})])])])]),t._v(" "),e("button",{staticClass:"block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white",attrs:{type:"submit"}},[t._v("\n          Sign in\n        ")]),t._v(" "),e("p",{staticClass:"text-center text-sm text-gray-500"},[t._v("\n          No account?\n          "),e("Nuxt-Link",{staticClass:"underline",attrs:{to:"/"}},[t._v("Sign up")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);