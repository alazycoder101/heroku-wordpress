(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[18],{114:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return O}));var s=r(0),c=(r(10),r(13)),n=r(50),o=r(44),a=r(5),i=r.n(a),u=r(4),l=r.n(u),d=r(504);r(145);const b=e=>{let{status:t="default"}=e;switch(t){case"error":return"woocommerce-error";case"success":return"woocommerce-message";case"info":case"warning":return"woocommerce-info"}return""};var E=e=>{let{className:t,notices:r,removeNotice:c}=e;const n=r.filter(e=>"snackbar"!==e.type);if(!n.length)return null;const o=l()(t,"wc-block-components-notices");return Object(s.createElement)("div",{className:o},n.map(e=>Object(s.createElement)(d.a,i()({key:"store-notice-"+e.id},e,{className:l()("wc-block-components-notices__notice",b(e)),onRemove:()=>{e.isDismissible&&c(e.id)}}),e.content)))};const m=Object(s.createContext)({notices:[],createNotice:(e,t,r)=>{},removeNotice:(e,t)=>{},setIsSuppressed:e=>{},context:"wc/core"}),p=()=>Object(s.useContext)(m),O=e=>{let{children:t,className:r="",createNoticeContainer:a=!0,context:i="wc/core"}=e;const{createNotice:u,removeNotice:l}=Object(c.useDispatch)("core/notices"),[d,b]=Object(s.useState)(!1),{dispatchStoreEvent:p}=Object(n.a)(),{isEditor:O}=Object(o.b)(),f=Object(s.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(e,t,{...r,context:r.context||i}),p("store-notice-create",{status:e,content:t,options:r})}),[u,p,i]),h=Object(s.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;l(e,t)}),[l,i]),{notices:j}=Object(c.useSelect)(e=>({notices:e("core/notices").getNotices(i)}),[i]),_={notices:j,createNotice:f,removeNotice:h,context:i,setIsSuppressed:b},g=d?null:Object(s.createElement)(E,{className:r,notices:_.notices,removeNotice:_.removeNotice,isEditor:O});return Object(s.createElement)(m.Provider,{value:_},a&&g,t)}},117:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var s=r(0),c=r(7),n=r(25),o=r.n(n);const a=Object(s.createContext)({getValidationError:()=>"",setValidationErrors:e=>{},clearValidationError:e=>{},clearAllValidationErrors:()=>{},hideValidationError:()=>{},showValidationError:()=>{},showAllValidationErrors:()=>{},hasValidationErrors:!1,getValidationErrorId:e=>e}),i=()=>Object(s.useContext)(a),u=e=>{let{children:t}=e;const[r,n]=Object(s.useState)({}),i=Object(s.useCallback)(e=>r[e],[r]),u=Object(s.useCallback)(e=>{const t=r[e];return!t||t.hidden?"":"validate-error-"+e},[r]),l=Object(s.useCallback)(e=>{n(t=>{if(!t[e])return t;const{[e]:r,...s}=t;return s})},[]),d=Object(s.useCallback)(()=>{n({})},[]),b=Object(s.useCallback)(e=>{e&&n(t=>(e=Object(c.pickBy)(e,(e,r)=>!("string"!=typeof e.message||t.hasOwnProperty(r)&&o()(t[r],e))),0===Object.values(e).length?t:{...t,...e}))},[]),E=Object(s.useCallback)((e,t)=>{n(r=>{if(!r.hasOwnProperty(e))return r;const s={...r[e],...t};return o()(r[e],s)?r:{...r,[e]:s}})},[]),m={getValidationError:i,setValidationErrors:b,clearValidationError:l,clearAllValidationErrors:d,hideValidationError:Object(s.useCallback)(e=>{E(e,{hidden:!0})},[E]),showValidationError:Object(s.useCallback)(e=>{E(e,{hidden:!1})},[E]),showAllValidationErrors:Object(s.useCallback)(()=>{n(e=>{const t={};return Object.keys(e).forEach(r=>{e[r].hidden&&(t[r]={...e[r],hidden:!1})}),0===Object.values(t).length?e:{...e,...t}})},[]),hasValidationErrors:Object.keys(r).length>0,getValidationErrorId:u};return Object(s.createElement)(a.Provider,{value:m},t)}},145:function(e,t){},148:function(e,t){},149:function(e,t){},169:function(e,t){},206:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(0),c=(r(10),r(117));r(169);const n=e=>{let{errorMessage:t="",propertyName:r="",elementId:n=""}=e;const{getValidationError:o,getValidationErrorId:a}=Object(c.b)();if(!t||"string"!=typeof t){const e=o(r)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(s.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(s.createElement)("p",{id:a(n)},t))}},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(93);const c=(e,t)=>function(r){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const n=s.a.addEventCallback(e,r,c);return t(n),()=>{t(s.a.removeEventCallback(e,n.id))}}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const s=(e,t)=>e[t]?Array.from(e[t].values()).sort((e,t)=>e.priority-t.priority):[];var c=r(35);const n=async(e,t,r)=>{const c=s(e,t),n=[];for(const e of c)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},o=async(e,t,r)=>{const n=[],o=s(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if("object"!=typeof t||null===t)continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(c.a)(t)||Object(c.b)(t))return n.push(t),n;n.push(t)}catch(e){return console.error(e),n.push({type:"error"}),n}return n}},256:function(e,t){},262:function(e,t,r){"use strict";t.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},263:function(e,t,r){"use strict";var s=r(0),c=(r(10),r(4)),n=r.n(c),o=r(1),a=r(48),i=r(481);const u={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},l={status:u.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},d={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:b,SET_IDLE:E,SET_DISABLED:m,SET_PROCESSING:p,SET_BEFORE_PROCESSING:O,SET_AFTER_PROCESSING:f,SET_PROCESSING_RESPONSE:h,SET_HAS_ERROR:j,SET_NO_ERROR:_,SET_QUANTITY:g,SET_REQUEST_PARAMS:v}=d,S=()=>({type:E}),y=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?j:_;return{type:t}},{SET_PRISTINE:R,SET_IDLE:N,SET_DISABLED:C,SET_PROCESSING:P,SET_BEFORE_PROCESSING:k,SET_AFTER_PROCESSING:T,SET_PROCESSING_RESPONSE:A,SET_HAS_ERROR:w,SET_NO_ERROR:I,SET_QUANTITY:D,SET_REQUEST_PARAMS:F}=d,{PRISTINE:V,IDLE:x,DISABLED:B,PROCESSING:q,BEFORE_PROCESSING:L,AFTER_PROCESSING:G}=u,M=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,{quantity:r,type:s,data:c}=arguments.length>1?arguments[1]:void 0;switch(s){case R:e=l;break;case N:e=t.status!==x?{...t,status:x}:t;break;case C:e=t.status!==B?{...t,status:B}:t;break;case D:e=r!==t.quantity?{...t,quantity:r}:t;break;case F:e={...t,requestParams:{...t.requestParams,...c}};break;case A:e={...t,processingResponse:c};break;case P:e=t.status!==q?{...t,status:q,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case k:e=t.status!==L?{...t,status:L,hasError:!1}:t;break;case T:e=t.status!==G?{...t,status:G}:t;break;case w:e=t.hasError?t:{...t,hasError:!0},e=t.status===q||t.status===L?{...e,status:x}:e;break;case I:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&s!==R&&e.status===V&&(e.status=x),e};var Q=r(93),W=r(219);const H=e=>({onAddToCartAfterProcessingWithSuccess:Object(W.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(W.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(W.a)("add_to_cart_before_processing",e)});var U=r(220),K=r(117),Y=r(45),J=r(35);const X=Object(s.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),z=()=>Object(s.useContext)(X),Z=e=>{var t,r,c,n;let{children:d,product:E,showFormElements:j}=e;const[_,R]=Object(s.useReducer)(M,l),[N,C]=Object(s.useReducer)(Q.b,{}),P=Object(a.a)(N),{addErrorNotice:k,removeNotices:T}=Object(Y.a)(),{setValidationErrors:A}=Object(K.b)(),{isSuccessResponse:w,isErrorResponse:I,isFailResponse:D}=Object(J.c)(),F=Object(s.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:H(C).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:H(C).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:H(C).onAddToCartBeforeProcessing}),[C]),V=Object(s.useMemo)(()=>({resetForm:()=>{R({type:b})},submitForm:()=>{R({type:O})},setQuantity:e=>{R((e=>({type:g,quantity:e}))(e))},setHasError:e=>{R(y(e))},setRequestParams:e=>{R((e=>({type:v,data:e}))(e))},setAfterProcessing:e=>{R({type:h,data:e}),R({type:f})}}),[]);Object(s.useEffect)(()=>{const e=_.status,t=!E.id||!Object(i.a)(E);e!==u.DISABLED||t?e!==u.DISABLED&&t&&R({type:m}):R(S())},[_.status,E,R]),Object(s.useEffect)(()=>{_.status===u.BEFORE_PROCESSING&&(T("error"),Object(U.a)(P,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&k(t),r&&A(r)}),R(S())):R({type:p})}))},[_.status,A,k,T,R,P]),Object(s.useEffect)(()=>{if(_.status===u.AFTER_PROCESSING){const e={processingResponse:_.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:s}=e;(I(e)||D(e))&&r&&(t=!0,k(r,s?{context:s}:void 0))}),t};if(_.hasError)return void Object(U.b)(P,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var s;const t=(null===(s=e.processingResponse)||void 0===s?void 0:s.message)||Object(o.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block");k(t,{id:"add-to-cart"})}R(S())});Object(U.b)(P,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?R(y(!0)):R(S())})}},[_.status,_.hasError,_.processingResponse,V,k,I,D,w,P]);const x=Object(i.b)(E),B={product:E,productType:E.type||"simple",productIsPurchasable:Object(i.a)(E),productHasOptions:E.has_options||!1,supportsFormElements:x,showFormElements:j&&x,quantity:_.quantity||(null==E||null===(t=E.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==E||null===(r=E.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==E||null===(c=E.add_to_cart)||void 0===c?void 0:c.maximum)||99,multipleOf:(null==E||null===(n=E.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:_.requestParams,isIdle:_.status===u.IDLE,isDisabled:_.status===u.DISABLED,isProcessing:_.status===u.PROCESSING,isBeforeProcessing:_.status===u.BEFORE_PROCESSING,isAfterProcessing:_.status===u.AFTER_PROCESSING,hasError:_.hasError,eventRegistration:F,dispatchActions:V};return Object(s.createElement)(X.Provider,{value:B},d)};var $=r(12),ee=r.n($),te=r(17),re=r(217),se=r(38),ce=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:c,hasError:n,isProcessing:a,requestParams:i}=z(),{hasValidationErrors:u,showAllValidationErrors:l}=Object(K.b)(),{addErrorNotice:d,removeNotice:b}=Object(Y.a)(),{receiveCart:E}=Object(se.a)(),[m,p]=Object(s.useState)(!1),O=!n&&a,f=Object(s.useCallback)(()=>!u||(l(),{type:"error"}),[u,l]);Object(s.useEffect)(()=>{const e=c.onAddToCartBeforeProcessing(f,0);return()=>{e()}},[c,f]);const h=Object(s.useCallback)(()=>{p(!0),b("add-to-cart");const s={id:t.id||0,quantity:r,...i};ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then(t=>{ee.a.setNonce(t.headers),t.json().then((function(r){t.ok?E(r):(r.body&&r.body.message?d(Object(te.decodeEntities)(r.body.message),{id:"add-to-cart"}):d(Object(o.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block"),{id:"add-to-cart"}),e.setHasError()),Object(re.b)({preserveCartData:!0}),e.setAfterProcessing(r),p(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&E(t.data.cart),e.setHasError(),e.setAfterProcessing(t),p(!1)}))})},[t,d,b,E,e,r,i]);return Object(s.useEffect)(()=>{O&&!m&&h()},[O,h,m]),null};const ne=e=>{let{children:t,product:r,showFormElements:c}=e;return Object(s.createElement)(K.a,null,Object(s.createElement)(Z,{product:r,showFormElements:c},t,Object(s.createElement)(ce,null)))};var oe=r(28),ae=r(7),ie=r(57),ue=(r(256),r(69)),le=r(112),de=r(509),be=r(50),Ee=r(328);const me=e=>{let{className:t,href:r,text:c,onClick:n}=e;return Object(s.createElement)(ue.a,{className:t,href:r,onClick:n,rel:"nofollow"},c)},pe=e=>{let{className:t,quantityInCart:r,isProcessing:c,isDisabled:n,isDone:a,onClick:i}=e;return Object(s.createElement)(ue.a,{className:t,disabled:n,showSpinner:c,onClick:i},a&&r>0?Object(o.sprintf)(
/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(o.__)("Add to cart","woo-gutenberg-products-block"),!!a&&Object(s.createElement)(le.a,{icon:de.a}))};var Oe=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:c,productType:n,isDisabled:a,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=z(),{parentName:b}=Object(oe.useInnerBlockLayoutContext)(),{dispatchStoreEvent:E}=Object(be.a)(),{cartQuantity:m}=Object(Ee.a)(c.id||0),[p,O]=Object(s.useState)(!1),f=c.add_to_cart||{url:"",text:""};return Object(s.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||O(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===n)&&t?Object(s.createElement)(pe,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:m,isDisabled:a,isProcessing:i,isDone:p,onClick:()=>{d.submitForm(),E("cart-add-item",{product:c,listName:b})}}):Object(s.createElement)(me,{className:"wc-block-components-product-add-to-cart-button",href:f.url,text:f.text||Object(o.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{E("product-view-link",{product:c,listName:b})}})},fe=r(123),he=e=>{let{disabled:t,min:r,max:c,step:n=1,value:o,onChange:a}=e;const i=void 0!==c,u=Object(fe.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(c/n)*n)),t=Math.max(t,Math.ceil(r/n)*n),t=Math.floor(t/n)*n,t!==e&&a(t)},300);return Object(s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:c,step:n,hidden:1===c,disabled:t,onChange:e=>{a(e.target.value),u(e.target.value)}})},je=e=>{let{reason:t=Object(o.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")}=e;return Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},_e=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(s.createElement)(je,null):e.id&&!e.is_in_stock?Object(s.createElement)(je,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(Oe,null))},ge=(r(327),r(528)),ve=r(8),Se=r(206);const ye={value:"",label:Object(o.__)("Select an option","woo-gutenberg-products-block")};var Re=e=>{let{attributeName:t,options:r=[],value:c="",onChange:a=(()=>{}),errorMessage:i=Object(o.__)("Please select a value.","woo-gutenberg-products-block")}=e;const{getValidationError:u,setValidationErrors:l,clearValidationError:d}=Object(K.b)(),b=t,E=u(b)||{};return Object(ve.useEffect)(()=>{c?d(b):l({[b]:{message:i,hidden:!0}})},[c,b,i,d,l]),Object(ve.useEffect)(()=>()=>{d(b)},[b,d]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(s.createElement)(ge.a,{label:Object(te.decodeEntities)(t),value:c||"",options:[ye,...r],onChange:a,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":E.message&&!E.hidden})}),Object(s.createElement)(Se.a,{propertyName:b,elementId:b}))},Ne=r(49);const Ce=(e,t,r)=>{const s=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return s;const c=Object.keys(e);return s.filter(e=>c.every(s=>{const c=r[s]||"",n=t["id:"+e].attributes[s];return""===c||null===n||n===c}))};var Pe=e=>{let{attributes:t,variationAttributes:r,setRequestParams:c}=e;const n=Object(a.a)(t),o=Object(a.a)(r),[i,u]=Object(s.useState)(0),[l,d]=Object(s.useState)({}),[b,E]=Object(s.useState)(!1),m=Object(s.useMemo)(()=>((e,t,r)=>{const s={},c=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return c.forEach(c=>{const o=e[c],a={...r,[c]:null},i=n?Ce(e,t,a):null,u=null!==i?i.map(e=>t["id:"+e].attributes[c]):null;s[c]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:s}=e;return null===t||t.includes(null)||t.includes(s)?{value:s,label:Object(te.decodeEntities)(r)}:null}).filter(Boolean)}(o.terms,u)}),s})(n,o,l),[l,n,o]);return Object(s.useEffect)(()=>{if(!b){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(Ne.a)(e))return{};const t=Object.keys(e),r={};return 0===t.length||t.forEach(t=>{const s=e[t],c=s.terms.filter(e=>e.default);var n;c.length>0&&(r[s.name]=null===(n=c[0])||void 0===n?void 0:n.slug)}),r}(t);e&&d({...e}),E(!0)}},[l,t,b]),Object(s.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(n).length?u(((e,t,r)=>Ce(e,t,r)[0]||0)(n,o,l)):i>0&&u(0)},[l,i,n,o]),Object(s.useEffect)(()=>{c({id:i,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[c,i,l]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(s.createElement)(Re,{key:e,attributeName:e,options:m[e],value:l[e],onChange:t=>{d({...l,[e]:t})}})))},ke=e=>{let{product:t,dispatchers:r}=e;const c=(e=>e?Object(ae.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(t.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:s}=e;t["id:"+r]={id:r,attributes:s.reduce((e,t)=>{let{name:r,value:s}=t;return e[r]=s,e},{})}}),t})(t.variations);return 0===Object.keys(c).length||0===n.length?null:Object(s.createElement)(Pe,{attributes:c,variationAttributes:n,setRequestParams:r.setRequestParams})},Te=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(s.createElement)(je,null):e.id&&!e.is_in_stock?Object(s.createElement)(je,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(ke,{product:e,dispatchers:a}),Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(Oe,null))},Ae=()=>Object(s.createElement)(Oe,null),we=r(511),Ie=()=>Object(s.createElement)(we.a,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element."),De=()=>Object(s.createElement)(Ie,null);const Fe=()=>{const{showFormElements:e,productType:t}=z();return e?"variable"===t?Object(s.createElement)(Te,null):"grouped"===t?Object(s.createElement)(De,null):"external"===t?Object(s.createElement)(Ae,null):"simple"===t||"variation"===t?Object(s.createElement)(_e,null):null:Object(s.createElement)(Oe,null)};t.a=Object(ie.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:c}=Object(oe.useProductDataContext)(),o=n()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ae.isEmpty)(c)});return Object(s.createElement)(ne,{product:c,showFormElements:r},Object(s.createElement)("div",{className:o},Object(s.createElement)(Fe,null)))})},327:function(e,t){},328:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s=r(0),c=r(13),n=r(15),o=r(17),a=r(38),i=r(45);const u=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},l=e=>{const{addItemToCart:t}=Object(c.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:l}=Object(a.a)(),{addErrorNotice:d,removeNotice:b}=Object(i.a)(),[E,m]=Object(s.useState)(!1),p=Object(s.useRef)(u(r,e));return Object(s.useEffect)(()=>{const t=u(r,e);t!==p.current&&(p.current=t)},[r,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:E,cartIsLoading:l,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return m(!0),t(e,r).then(()=>{b("add-to-cart")}).catch(e=>{d(Object(o.decodeEntities)(e.message),{context:"wc/all-products",id:"add-to-cart",isDismissible:!0})}).finally(()=>{m(!1)})}}}},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return d}));var s=r(49);let c,n;!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(c||(c={})),function(e){e.PAYMENTS="wc/payment-area",e.EXPRESS_PAYMENTS="wc/express-payment-area"}(n||(n={}));const o=(e,t)=>Object(s.a)(e)&&"type"in e&&e.type===t,a=e=>o(e,c.SUCCESS),i=e=>o(e,c.ERROR),u=e=>o(e,c.FAIL),l=e=>!Object(s.a)(e)||void 0===e.retry||!0===e.retry,d=()=>({responseTypes:c,noticeContexts:n,shouldRetry:l,isSuccessResponse:a,isErrorResponse:i,isFailResponse:u})},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(0),c=r(114);const n=()=>{const{notices:e,createNotice:t,removeNotice:r,setIsSuppressed:n}=Object(c.b)(),o=Object(s.useRef)(e);Object(s.useEffect)(()=>{o.current=e},[e]);const a=Object(s.useMemo)(()=>({hasNoticesOfType:e=>o.current.some(t=>t.type===e),removeNotices:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.current.forEach(t=>{null!==e&&t.status!==e||r(t.id)})},removeNotice:r}),[r]),i=Object(s.useMemo)(()=>({addDefaultNotice:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t("default",e,{...r})},addErrorNotice:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t("error",e,{...r})},addWarningNotice:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t("warning",e,{...r})},addInfoNotice:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t("info",e,{...r})},addSuccessNotice:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t("success",e,{...r})}}),[t]);return{notices:e,...a,...i,setIsSuppressed:n}}},48:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(0),c=r(25),n=r.n(c);function o(e){const t=Object(s.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));const s=e=>e.is_purchasable||!1,c=e=>["simple","variable"].includes(e.type||"simple")},533:function(e,t,r){"use strict";r.r(t);var s=r(57),c=r(263),n=r(262);t.default=Object(s.withFilteredAttributes)(n.a)(c.a)},69:function(e,t,r){"use strict";var s=r(5),c=r.n(s),n=r(0),o=r(135),a=r(4),i=r.n(a),u=r(91);r(148),t.a=e=>{let{className:t,showSpinner:r=!1,children:s,variant:a="contained",...l}=e;const d=i()("wc-block-components-button",t,a,{"wc-block-components-button--loading":r});return Object(n.createElement)(o.a,c()({className:d},l),r&&Object(n.createElement)(u.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},s))}},91:function(e,t,r){"use strict";var s=r(0);r(149),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var s=r(7);let c;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(c||(c={}));const n={addEventCallback:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(s.uniqueId)(),type:c.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:(e,t)=>({id:t,type:c.REMOVE_EVENT_CALLBACK,eventType:e})},o={},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:r,id:s,callback:n,priority:a}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case c.ADD_EVENT_CALLBACK:return i.set(s,{priority:a,callback:n}),{...e,[r]:i};case c.REMOVE_EVENT_CALLBACK:return i.delete(s),{...e,[r]:i}}}}}]);