import{_ as we}from"./logo_circle-CFpan6rn.js";import{r,u as Ce,a as P,h as Ve,i as F,w as l,f as i,o as v,e,d as c,j as g,c as S,b as s,t as D,v as Oe,F as $e,k as Ie,l as Se,D as De,I as Ue,s as ze,J as Ge,z as Ne,p as Pe,g as Fe}from"./index-CmL7frSQ.js";import{u as Y}from"./userStore-DcTAcukX.js";import{d as Be,e as B,f as Z,g as Je,c as Re}from"./shop-BcByMoMy.js";import{_ as Ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./request-BkvxYv-M.js";const u=V=>(Pe("data-v-a0bbd435"),V=V(),Fe(),V),qe=u(()=>s("img",{style:{width:"60px","margin-left":"2rem"},src:we,alt:"logo"},null,-1)),Ae=u(()=>s("div",{class:"flex-grow"},null,-1)),Le=u(()=>s("br",null,null,-1)),Me=u(()=>s("span",null,"首页",-1)),Te=u(()=>s("span",null,"订单管理",-1)),je=u(()=>s("span",null,"雇员管理",-1)),He=u(()=>s("span",null,"菜品管理",-1)),Ke=u(()=>s("span",null,"账 号 设 置",-1)),Qe=u(()=>s("br",null,null,-1)),We={key:1},Xe=u(()=>s("br",null,null,-1)),Ye={class:"pagination-container"},Ze=u(()=>s("p",{style:{"text-align":"center","font-size":"30px"}},"新 订 单",-1)),el=u(()=>s("br",null,null,-1)),ll=u(()=>s("br",null,null,-1)),tl={class:"button-container",style:{"text-align":"right"}},ol={style:{"margin-right":"20px"}},nl=u(()=>s("br",null,null,-1)),al={key:1,style:{"margin-left":"32%"}},sl={class:"dialog-footer"},il=u(()=>s("span",{style:{"margin-left":"2.5%"}},"订单详情：",-1)),ul=u(()=>s("br",null,null,-1)),dl=u(()=>s("br",null,null,-1)),cl={style:{"font-weight":"bold","text-align":"right"}},rl=u(()=>s("br",null,null,-1)),_l={class:"dialog-footer"},ml={__name:"addOrder",setup(V){const ee=r("1"),le=Y().getUsername,y=Ce(),J=r([]),b=r(null),R=r(1),k=r(null),te=Y().getUsername,x=r(!1),O=r(!1),E=r(0),m=r(0),d=r([]),w=P({key:""}),h=P({username:"",pay_way:""}),oe=P({username:[{required:!0,message:"用户账户不能为空",trigger:"blur"}],pay_way:[{required:!0,message:"请选择订单支付方式",trigger:"blur"}]});function ne(t){d.value.length===0?alert("请先添加菜品到订单中！"):(k.value=JSON.parse(JSON.stringify(t)),x.value=!0)}function ae(){!b.value||!k.value||b.value.validate(t=>{if(t){let o={username:h.username,pay_way:h.pay_way,ord_list:JSON.stringify(d.value),money:m.value,user:te,ord_condition:"",ord_id:""};se(o),x.value=!1}else console.error("提交表单验证失败")})}const se=t=>{t.pay_way==="挂起订单"?(t.ord_condition="未支付",B(t).then(function(o){console.log(o),alert("订单创建成功，顾客支付后请手动前往订单管理修改订单状态！"),d.value=[],m.value=0}).catch(function(o){console.log(o)})):t.pay_way==="支付卡"?(t.ord_condition="已支付",B(t).then(function(o){t.ord_id=o.id,Z(t).then(function(a){Je(t).then(function(p){console.log(p),alert("订单创建成功！"),d.value=[],m.value=0}).catch(function(p){console.log(p)})}).catch(function(a){console.log(a)})}).catch(function(o){console.log(o)})):(t.ord_condition="已支付",B(t).then(function(o){t.ord_id=o.id,Z(t).then(function(a){console.log(a),alert("订单创建成功！"),d.value=[],m.value=0}).catch(function(a){console.log(a)})}).catch(function(o){console.log(o)}))},ie=()=>{b.value&&b.value.resetFields()},U=(t,o)=>{Be(t,5,o,le).then(function(a){J.value=a.data.map(p=>p),E.value=a.total}).catch(function(a){console.log(a)})},ue=t=>{U(t,1)};function de(t){k.value=t,O.value=!0}const ce=t=>{const o=d.value.findIndex(a=>a.dish_name===t.dish_name);if(o>-1)d.value[o].count+=1;else{const a={dish_id:t.id,dish_name:t.dish_name,dish_price:t.dish_price,count:1};d.value.push(a)}z()},z=()=>{let t=0;d.value.length===0?m.value=0:(d.value.forEach(o=>{t+=o.dish_price*o.count}),m.value=t)},re=t=>{d.value[t].count>0&&(d.value[t].count+=1),z()},_e=t=>{d.value[t].count>1?d.value[t].count-=1:d.value.splice(t,1),z()},me=t=>{U(w.key,t)};Ve(()=>{U("",1)});const q=()=>{y.push("/shop/index")},pe=()=>{y.push("/shop/addOrder")},fe=()=>{y.push("/shop/order")},he=()=>{y.push("/shop/me")},ve=()=>{y.push("/shop/dish")},ge=()=>{y.push("/shop/emp")},A=()=>{localStorage.removeItem("userInfo"),Re().then(function(t){console.log(t)}).catch(function(t){console.log(t)})};return(t,o)=>{const a=i("el-menu-item"),p=i("el-menu"),ye=i("el-header"),C=i("el-icon"),L=i("el-sub-menu"),$=i("el-col"),M=i("el-row"),T=i("el-input"),I=i("el-form-item"),_=i("el-button"),j=i("el-form"),H=i("el-card"),f=i("el-table-column"),K=i("el-image"),Q=i("el-table"),be=i("el-pagination"),W=i("el-dialog"),G=i("el-option"),ke=i("el-select"),xe=i("el-main"),X=i("el-container");return v(),F(X,{style:{height:"100vh"}},{default:l(()=>[e(ye,{class:"header-menu"},{default:l(()=>[e(p,{"default-active":ee.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1},{default:l(()=>[qe,e(a,{onClick:q,index:"1",style:{"font-weight":"bold","margin-left":"3rem"}},{default:l(()=>[c(" 内 部 餐 饮 系 统 - 商 户 端 ")]),_:1}),Ae,e(a,{index:"2",onClick:A},{default:l(()=>[c("退 出 登 录")]),_:1})]),_:1},8,["default-active"])]),_:1}),e(X,null,{default:l(()=>[e(M,{class:"tac"},{default:l(()=>[e($,{span:24},{default:l(()=>[Le,e(p,{"default-active":"2",class:"el-menu-vertical-demo"},{default:l(()=>[e(a,{index:"1",onClick:q},{default:l(()=>[e(C,null,{default:l(()=>[e(g(Ie))]),_:1}),Me]),_:1}),e(L,{index:"2"},{title:l(()=>[e(C,null,{default:l(()=>[e(g(Se))]),_:1}),Te]),default:l(()=>[e(a,{index:"2-1",onClick:pe},{default:l(()=>[c("下单")]),_:1}),e(a,{index:"2-2",onClick:fe},{default:l(()=>[c("订单管理")]),_:1})]),_:1}),e(a,{index:"3",onClick:ge},{default:l(()=>[e(C,null,{default:l(()=>[e(g(De))]),_:1}),je]),_:1}),e(a,{index:"4",onClick:ve},{default:l(()=>[e(C,null,{default:l(()=>[e(g(Ue))]),_:1}),He]),_:1}),e(L,{index:"5"},{title:l(()=>[e(C,null,{default:l(()=>[e(g(ze))]),_:1}),Ke]),default:l(()=>[e(a,{index:"5-1",onClick:he},{default:l(()=>[c("个 人 中 心")]),_:1}),e(a,{index:"5-2",onClick:A},{default:l(()=>[c("退 出 账 号")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(xe,{style:{"background-image":"none"}},{default:l(()=>[e(M,null,{default:l(()=>[e($,{class:"col2",span:15},{default:l(()=>[e(H,{class:"box-card",shadow:"hover",style:{width:"100%"}},{default:l(()=>[e(j,{inline:!0,model:w,"label-width":"50%",style:{"margin-left":"21%"},class:"demo-form-inline search-form","status-icon":""},{default:l(()=>[e(I,{label:"菜品名",prop:"key","label-width":"20%"},{default:l(()=>[e(T,{modelValue:w.key,"onUpdate:modelValue":o[0]||(o[0]=n=>w.key=n),style:{width:"300px"},clearable:""},null,8,["modelValue"])]),_:1}),e(I,null,{default:l(()=>[e(_,{onClick:o[1]||(o[1]=n=>ue(w.key)),type:"primary"},{default:l(()=>[c("搜索")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),Qe,e(Q,{data:J.value},{default:l(()=>[e(f,{prop:"dish_name",label:"菜品名"}),e(f,{prop:"dish_img",label:"菜品图片"},{default:l(n=>[n.row.dish_img?(v(),F(K,{key:0,src:n.row.dish_img,style:{width:"80px",height:"80px"},fit:"cover"},null,8,["src"])):(v(),S("span",We,"暂无"))]),_:1}),e(f,{prop:"dish_price",label:"菜品价格"}),e(f,{label:"操作"},{default:l(n=>[e(_,{type:"primary",size:"small",onClick:N=>de(n.row)},{default:l(()=>[c("大图")]),_:2},1032,["onClick"]),e(_,{type:"success",size:"small",onClick:N=>ce(n.row)},{default:l(()=>[c("添加")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),Xe,s("div",Ye,[e(be,{"current-page":R.value,"onUpdate:currentPage":o[2]||(o[2]=n=>R.value=n),"page-size":5,layout:"prev, pager, next",total:E.value,onCurrentChange:me},null,8,["current-page","total"])])]),_:1}),e($,{span:1}),e($,{span:8},{default:l(()=>[e(H,{class:"box-card",shadow:"hover"},{default:l(()=>[Ze,el,e(Q,{data:d.value},{default:l(()=>[e(f,{prop:"dish_name",label:"菜品名"}),e(f,{prop:"dish_price",label:"单价"}),e(f,{prop:"count",label:"数量"}),e(f,{label:"操作",width:"100"},{default:l(n=>[e(_,{size:"small",type:"success",icon:g(Ge),circle:"",onClick:N=>re(n.$index)},null,8,["icon","onClick"]),e(_,{size:"small",type:"danger",icon:g(Ne),circle:"",onClick:N=>_e(n.$index)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"]),ll,s("div",tl,[s("span",ol,"总价："+D(m.value),1),e(_,{type:"primary",onClick:ne},{default:l(()=>[c("提交订单")]),_:1})])]),_:1})]),_:1})]),_:1}),e(W,{style:{"margin-left":"40vh","margin-top":"18vh"},modelValue:O.value,"onUpdate:modelValue":o[4]||(o[4]=n=>O.value=n),title:"菜品大图",width:"500"},{footer:l(()=>[s("div",sl,[e(_,{type:"info",onClick:o[3]||(o[3]=n=>O.value=!1)},{default:l(()=>[c(" 确认 ")]),_:1})])]),default:l(()=>[nl,k.value.dish_img?(v(),F(K,{key:0,src:k.value.dish_img,style:{width:"100%",height:"100%"},fit:"cover"},null,8,["src"])):(v(),S("span",al,"暂无图片，可修改后查看"))]),_:1},8,["modelValue"]),e(W,{style:{"margin-right":"65vh","margin-top":"25vh"},modelValue:x.value,"onUpdate:modelValue":o[8]||(o[8]=n=>x.value=n),title:"订单结算",width:"500"},{footer:l(()=>[s("div",_l,[e(_,{onClick:o[7]||(o[7]=n=>{x.value=!1,ie(b.value)})},{default:l(()=>[c("取消")]),_:1}),e(_,{type:"primary",onClick:ae},{default:l(()=>[c(" 结算 ")]),_:1})])]),default:l(()=>[e(j,{ref_key:"ruleFormRef3",ref:b,model:h,rules:oe,"label-width":"17%",class:"demo-form","status-icon":""},{default:l(()=>[il,(v(!0),S($e,null,Oe(d.value,n=>(v(),S("span",{key:n.dish_id},D(n.dish_name)+" x "+D(n.count)+"，",1))),128)),ul,dl,s("h2",cl,"总价："+D(m.value),1),rl,e(I,{label:"客户账号",prop:"username"},{default:l(()=>[e(T,{modelValue:h.username,"onUpdate:modelValue":o[5]||(o[5]=n=>h.username=n)},null,8,["modelValue"])]),_:1}),e(I,{label:"结算方式",prop:"pay_way"},{default:l(()=>[e(ke,{modelValue:h.pay_way,"onUpdate:modelValue":o[6]||(o[6]=n=>h.pay_way=n)},{default:l(()=>[e(G,{label:"支付卡",value:"支付卡"}),e(G,{label:"移动支付",value:"移动支付"}),e(G,{style:{color:"red"},label:"稍后支付（ 挂起订单 ）",value:"挂起订单"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},bl=Ee(ml,[["__scopeId","data-v-a0bbd435"]]);export{bl as default};
