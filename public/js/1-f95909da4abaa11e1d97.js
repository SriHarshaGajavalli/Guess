webpackJsonp([1],{142:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=i(0),s=(i.n(a),i(1)),l=(i.n(s),i(52)),c=i(145),u=(i.n(c),function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}()),p=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={largenedImageIndex:-1},e}return r(t,e),u(t,[{key:"enlargeImage",value:function(e){this.state.largenedImageIndex===e?this.setState({largenedImageIndex:-1}):this.setState({largenedImageIndex:e,ahead:!0})}},{key:"render",value:function(){var e=this;return i.i(a.h)("div",{className:this.props.mode+"-tiles"},this.props.images&&this.props.images.map(function(t,n){var o="background-image:url("+t+");";return i.i(a.h)("div",{className:n===e.state.largenedImageIndex?"large tile":"tile",style:e.state.largenedImageIndex!==-1&&n!==e.state.largenedImageIndex?"opacity: 0.1":""},i.i(a.h)("div",{className:"pic",style:o,onClick:e.enlargeImage.bind(e,n)}))}),"preview"==this.props.mode&&i.i(a.h)(l.a,{level:this.props.level}))}}]),t}(a.Component);t.a=p},143:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=i(0),s=(i.n(a),i(1)),l=(i.n(s),i(4)),c=(i.n(l),i(51)),u=i(16),p=(i.n(u),function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}()),h=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isLoading:!1,stretchWindow:!1,winHeight:0,enableSocialLogin:!1},e}return r(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;i.i(c.a)(function(t){var i=t.firebase;e.firebase=i,e.setState({enableSocialLogin:!0})}),window.dialogPolyfill&&(dialogPolyfill.registerDialog(this.nameDialog.base),dialogPolyfill.registerDialog(this.offlineDialog.base))}},{key:"login",value:function(){var e=this;if(this.setState({isLoading:!0}),navigator.onLine){var t=this.firebase,i=new t.auth.GoogleAuthProvider;t.auth().signInWithPopup(i).then(function(t){e.props.setUser({authToken:t.credential.idToken})}).catch(function(e){console.log("woops, cant get your profile!",e)})}else this.offlineDialog.showModal()}},{key:"sendGuestName",value:function(){var e=this.state.guestName;this.nameDialog.close(),e&&e.length>1&&(navigator.onLine?this.props.setUser({authToken:null,name:e}):this.offlineDialog.showModal())}},{key:"render",value:function(){var e=this;return i.i(a.h)("div",{className:"screen-splash",style:this.state.stretchWindow?"height:"+this.state.winHeight+"px":""},i.i(a.h)("div",{className:"logo-container"},i.i(a.h)("img",{src:"/images/logo.svg",className:"logo",alt:"guess logo"})),i.i(a.h)("div",{className:"loading"},this.state.isLoading||this.props.user.name?i.i(a.h)(s.Progress,{indeterminate:!0}):i.i(a.h)("div",null,i.i(a.h)("div",{className:"btn-google"},i.i(a.h)(s.Button,{raised:!0,onClick:this.login.bind(this),disabled:!this.state.enableSocialLogin},i.i(a.h)("div",null,"Sign in with Google"))),i.i(a.h)("div",{className:"btn-guest"},i.i(a.h)(s.Button,{raised:!0,onClick:function(){e.setState({winHeight:window.innerHeight,stretchWindow:!0},function(){e.nameDialog.showModal()})}},"Continue as guest")))),i.i(a.h)(s.Dialog,{ref:function(t){e.nameDialog=t}},i.i(a.h)(s.Dialog.Title,null,"Guest name"),i.i(a.h)(s.Dialog.Content,null,"Please let us know your name",i.i(a.h)(s.TextField,{maxlength:"20",ref:function(t){return e.nameField=t},onChange:function(t){e.setState({guestName:t.target.value})},value:this.state.guestName,onKeyUp:function(t){"Enter"===t.key&&(document.activeElement&&document.activeElement.blur(),e.sendGuestName())}})),i.i(a.h)(s.Dialog.Actions,null,i.i(a.h)(s.Button,{colored:!0,onClick:this.sendGuestName.bind(this)},"Done"),i.i(a.h)(s.Button,{onClick:function(){e.setState({winHeight:window.innerHeight,stretchWindow:!0},function(){e.nameDialog.close()})}},"Cancel"))),i.i(a.h)(s.Dialog,{ref:function(t){e.offlineDialog=t}},i.i(a.h)(s.Dialog.Title,null,"Offline!"),i.i(a.h)(s.Dialog.Content,null,"Woops, you need to be online for signing in."),i.i(a.h)(s.Dialog.Actions,null,i.i(a.h)(s.Button,{colored:!0,onClick:function(){e.offlineDialog.close()}},"Okay"))))}}]),t}(a.Component);t.a=h},144:function(e,t,i){t=e.exports=i(140)(),t.push([e.i,'.play-tiles,.preview-tiles{position:relative;text-align:center;width:100%;left:0;right:0;margin:40px auto}.play-tiles .tile,.preview-tiles .tile{position:relative;width:50%;float:left;padding:4px;will-change:transform opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform opacity;transition-property:-webkit-transform opacity;transition-property:transform opacity;transition-property:transform opacity,-webkit-transform opacity}.play-tiles .pic,.preview-tiles .pic{border:4px solid #455a64;box-shadow:0 0 8px #111;border-radius:3px;width:100%;background-size:cover;background-position:50%}.play-tiles .level,.preview-tiles .level{position:absolute;left:0;right:0;bottom:0;top:0;margin:auto}.play-tiles .mdl-typography--title,.preview-tiles .mdl-typography--title{font-size:14px}.play-tiles:after,.preview-tiles:after{content:"";display:table;clear:both}.preview-tiles{max-width:300px}.preview-tiles .pic{height:15%}.play-tiles{max-width:400px;min-width:320px}.play-tiles .tile{width:50%}.play-tiles .pic{height:20%}.play-tiles .large.tile{z-index:2}.play-tiles .large.tile:first-child{-webkit-transform:translate3d(50%,50%,0) scale(1.8);transform:translate3d(50%,50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(2){-webkit-transform:translate3d(-50%,50%,0) scale(1.8);transform:translate3d(-50%,50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(3){-webkit-transform:translate3d(50%,-50%,0) scale(1.8);transform:translate3d(50%,-50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(4){-webkit-transform:translate3d(-50%,-50%,0) scale(1.8);transform:translate3d(-50%,-50%,0) scale(1.8)}',""])},145:function(e,t,i){var n=i(144);"string"==typeof n&&(n=[[e.i,n,""]]);i(141)(n,{});n.locals&&(e.exports=n.locals)},152:function(e,t,i){t=e.exports=i(140)(),t.push([e.i,".screen-home .container-play{text-align:center;margin-top:-30px}.screen-home .mdl-button{font-size:24px;padding:8px;height:auto;width:200px}.screen-home .random{display:auto}",""])},158:function(e,t,i){var n=i(152);"string"==typeof n&&(n=[[e.i,n,""]]);i(141)(n,{});n.locals&&(e.exports=n.locals)},56:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),s=(i.n(a),i(4)),l=(i.n(s),i(1)),c=(i.n(l),i(10)),u=(i.n(c),i(143)),p=i(5),h=i(9),d=i(142),f=i(158),g=(i.n(f),function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}()),m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),g(t,[{key:"componentDidUpdate",value:function(e,t){!e.userReducer.name&&this.props.userReducer.name&&this.props.wordReducer.words.length<25&&this.props.dispatch(p.g(this.props.wordReducer.lastWord||0)),!e.wordReducer.wordsLoaded&&this.props.wordReducer.wordsLoaded&&this.props.wordReducer.giveNotificateionHint&&this.props.dispatch({type:p.a})}},{key:"startPlay",value:function(){i.i(c.route)("/play")}},{key:"render",value:function(){var e=this;return this.props.wordReducer.wordsLoaded?i.i(a.h)("div",{className:"screen-home"},(0==this.props.wordReducer.words.length||!this.props.userReducer.name)&&i.i(a.h)(u.a,{showHome:this.showHome,user:this.props.userReducer,setUser:function(t){t.authToken?e.props.dispatch(h.b({authToken:t.authToken})):e.props.dispatch(h.b({name:t.name}))}}),i.i(a.h)("div",null,i.i(a.h)(d.a,{images:this.props.wordReducer.words[0]&&this.props.wordReducer.words[0].images,level:this.props.userReducer.level,mode:"preview"})),i.i(a.h)("div",{className:"container-play"},i.i(a.h)(l.Button,{accent:!0,raised:!0,onCLick:this.startPlay.bind(this)},"Play"))):null}}]),t}(a.Component);t.default=i.i(s.connect)(function(e){return{wordReducer:e.wordReducer,userReducer:e.userReducer}})(m)}});