import{$ as d,a as e}from"./request-BkvxYv-M.js";const g=(o,n)=>new Promise((c,t)=>{e("api/customer/account/signin",{username:o,password:n}).then(function(a){a.code===0?(location.href="#/index",c(a.data)):(alert(a.info),t(a.data))}).catch(function(a){console.log(a),t(a)})}),h=(o,n,c,t,a,i,f)=>new Promise((l,m)=>{e("api/customer/account/register",{username:o,password:n,name:c,email:t,sex:a,birth:i,tel:f}).then(function(u){u.code===0?(alert("注册成功，验证码已发送到您的邮箱！"),location.href="#/active",l(u.data)):(alert(u.info),m(u.data))}).catch(function(u){console.log(u),m(u)})}),r=(o,n)=>new Promise((c,t)=>{e("api/customer/account/active",{code:o,username:n}).then(function(a){a.code===0?(alert("激活成功！"),location.href="#/login",c(a.data)):(alert(a.info),t(a.data))}).catch(function(a){console.log(a),t(a)})}),$=o=>new Promise((n,c)=>{e("api/customer/account/resetPass",{email:o}).then(function(t){t.code===0?(alert("邮件发送成功！请前往邮箱获取重置验证码。"),location.href="#/resetDone",n(t.data)):(alert(t.info),c(t.data))}).catch(function(t){console.log(t),c(t)})}),w=(o,n,c)=>new Promise((t,a)=>{e("api/customer/account/resetDone",{email:c,password:o,code:n}).then(function(i){i.code===0?(alert("重置密码成功！请使用新密码登录。"),location.href="#/login",t(i.data)):(alert(i.info),a(i.data))}).catch(function(i){console.log(i),a(i)})}),P=()=>new Promise((o,n)=>{d("api/customer/account/signout",{}).then(function(c){c.code===0?(location.href="#/login",localStorage.clear(),sessionStorage.clear(),o(c.data)):(alert(c.info),n(c.data))}).catch(function(c){console.log(c),n(c)})}),y=o=>new Promise((n,c)=>{d("api/customer/customer",{action:"query",username:o}).then(function(t){t.code===0?n(t.list):(alert(t.info),c(t.data))}).catch(function(t){console.log(t),c(t)})}),_=o=>new Promise((n,c)=>{e("api/customer/customer",{action:"delete",cus_id:o}).then(function(t){t.code===0?(alert("删除成功！"),n(t.data)):(alert(t.info),c(t.data))}).catch(function(t){console.log(t),c(t)})}),C=(o,n)=>new Promise((c,t)=>{e("api/customer/customer",{action:"update",cus_id:o,cus_data:{fname:n.fname,tel:n.tel,sex:n.sex,birth:n.birth,address:n.address}}).then(function(a){a.code===0?c(a.data):(alert(a.info),t(a.data))}).catch(function(a){console.log(a),t(a)})}),b=o=>new Promise((n,c)=>{e("api/customer/paycard",{action:"register",username:o}).then(function(t){t.code===0?n(t.data):(alert(t.msg),c(t.data))}).catch(function(t){console.log(t),c(t)})}),v=(o,n)=>new Promise((c,t)=>{e("api/customer/paycard",{action:"active",card_id:o,code:n}).then(function(a){a.code===0?c(a.data):(alert(a.msg),t(a.data))}).catch(function(a){console.log(a),t(a)})}),x=o=>new Promise((n,c)=>{e("api/customer/paycard",{action:"delete",card_number:o}).then(function(t){t.code===0?n(t.data):(alert(t.msg),c(t.data))}).catch(function(t){console.log(t),c(t)})}),I=(o,n,c)=>new Promise((t,a)=>{e("api/customer/paycard",{action:"update",card_number:o,money:n,code:c}).then(function(i){i.code===0?t(i.data):(alert(i.msg),a(i.data))}).catch(function(i){console.log(i),a(i)})}),D=o=>new Promise((n,c)=>{d("api/customer/paycard",{action:"query",username:o}).then(function(t){t.code===0?n(t.data):(alert(t.msg),c(t.data))}).catch(function(t){console.log(t),c(t)})}),q=(o,n,c,t,a)=>new Promise((i,f)=>{d("api/customer/order",{username:o,start_time:n,end_time:c,pagesize:t,pagenum:a}).then(function(l){l.code===0?i({data:l.data,total:l.total}):(alert(l.msg),f(l.data))}).catch(function(l){console.log(l),f(l)})}),z=(o,n,c)=>new Promise((t,a)=>{d("api/customer/notice",{username:o,pagesize:n,pagenum:c}).then(function(i){i.code===0?t({data:i.list,total:i.total}):(alert(i.info),a(i.list))}).catch(function(i){console.log(i),a(i)})});export{g as $,y as a,P as b,h as c,r as d,$ as e,w as f,q as g,z as h,b as i,x as j,D as k,I as l,v as m,C as n,_ as o};
