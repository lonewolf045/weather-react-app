(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],[,,,,,,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=(a(18),a(7)),o=a.n(c),l=a(9),h=a(1),m=a(2),p=a(5),u=a(3),d=a(4),f=(a(20),a(8),a(6),a(21),a(22),a(23),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"assignIcons",value:function(){return!0===this.props.isOn?"wi wi-celsius left":"wi wi-fahrenheit right"}},{key:"assignClass",value:function(){return!0===this.props.isOn?"left":"right"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className},r.a.createElement("input",{checked:this.props.isOn,onChange:function(){e.props.onClick()},className:"react-switch-checkbox",id:"react-switch-new",type:"checkbox"}),r.a.createElement("label",{className:"".concat(this.props.class," react-switch-label"),htmlFor:"react-switch-new"},r.a.createElement("i",{className:"".concat(this.assignIcons()," tempIcon")}),r.a.createElement("span",{className:"react-switch-button"})))}}]),a}(r.a.Component)),w=(a(24),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"pexelLogo flexI"},r.a.createElement("a",{href:"https://www.pexels.com",target:"_blank"},r.a.createElement("img",{className:"logo",src:"https://images.pexels.com/lib/api/pexels-white.png",alt:"Pexel"}))),r.a.createElement("div",{className:"photographer flexI"},"Clicked by : ",r.a.createElement("a",{href:this.props.photographer[1],target:"_blank"},this.props.photographer[0])),r.a.createElement("div",{className:"oWM flexI"},r.a.createElement("a",{href:"https://openweathermap.org/",target:"_blank"},r.a.createElement("img",{className:"logo",src:"https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/OPENWEATHER-300x136.png",alt:"OWM"}))),r.a.createElement("div",{className:"gitHub flexI"},r.a.createElement("a",{href:"https://github.com/lonewolf045/weather-react-app",target:"_blank"},r.a.createElement("i",{class:"fab fa-github"}))))}}]),a}(r.a.Component)),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).windDirection=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],e.src="http://openweathermap.org/img/wn/".concat(e.props.weather.appearance.icon,".png"),e}return Object(m.a)(a,[{key:"convertToF",value:function(e){return 9*e/5+32}},{key:"handleToogle",value:function(){this.props.handleToogle(),console.log(this.props.backgroundImage)}},{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundImage:"url(".concat(this.props.backgroundImage.src.original,")")},id:"weatherTile"},r.a.createElement("div",{className:"tile"},r.a.createElement("div",{className:"weatherName"},this.props.weather.name,",",this.props.weather.country),r.a.createElement("div",{className:"wIcon"},r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("i",{className:this.props.weather.appearance.iconUrl}))),r.a.createElement("div",{className:"wI"},r.a.createElement("div",{className:"wTemp"},"Celsius"===this.props.tempUnit?r.a.createElement("div",{className:"weatherTemp"},(this.props.weather.main.temp-273).toFixed(0),"\xb0"):r.a.createElement("div",{className:"weatherTemp"},this.convertToF(this.props.weather.main.temp-273).toFixed(0),"\xb0"),"Celsius"===this.props.tempUnit?r.a.createElement("div",{className:"weatherTempFeels"},"Feels like: ",(this.props.weather.main.feels_like-273).toFixed(0),"\xb0"):r.a.createElement("div",{className:"weatherTempFeels"},"Feels like: ",this.convertToF(this.props.weather.main.feels_like-273).toFixed(0),"\xb0")),r.a.createElement("div",{className:"wWind"},r.a.createElement("div",{className:"weatherWindSpeed"},r.a.createElement("i",{className:"fas fa-wind"}),(2.23694*this.props.weather.wind.speed).toFixed(2)," MPH"),r.a.createElement("div",{className:"weatherWindDirection"},r.a.createElement("i",{className:this.props.weather.wind.direcUrl}),this.windDirection[Math.round(this.props.weather.wind.deg/22.5)]))),r.a.createElement("div",{className:"wInfo"},r.a.createElement("div",{className:"weatherHumidity"},r.a.createElement("i",{className:"wi wi-humidity"})," ",this.props.weather.main.humidity,"%"),r.a.createElement("div",{className:"weatherPressure"},r.a.createElement("i",{className:"wi wi-barometer"})," ",this.props.weather.main.pressure," hPa")),r.a.createElement(f,{className:"toogleSwitch",isOn:this.props.isOn,onClick:this.handleToogle.bind(this),class:this.props.weather.appearance.iconUrl.split(" ")[2]})),r.a.createElement(w,{photographer:[this.props.backgroundImage.photographer,this.props.backgroundImage.photographer_url]}))}}]),a}(r.a.Component),b=(a(25),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"setCity",value:function(e){this.props.detail.enteredCity=e.target.value}},{key:"handleSubmit",value:function(e){console.log(this.props.detail.enteredCity),this.props.handleSubmit(this.props.detail.enteredCity)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"heading"},"Weather"),r.a.createElement("div",{className:"locationSearch"},r.a.createElement("input",{className:"locationInput",onChange:this.setCity.bind(this)}),r.a.createElement("button",{className:"locationSubmit",onClick:this.handleSubmit.bind(this)},r.a.createElement("i",{className:"fas fa-search"})))))}}]),a}(r.a.Component));b.defaultProps={detail:{enteredCity:""}};var v=b,E=(a(26),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("div",{className:"errorMessage"},r.a.createElement("i",{className:"fas fa-exclamation-triangle error-icon"}),r.a.createElement("div",null,"Error 404: Not Found")))}}]),a}(r.a.Component)),N=a(12),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={weather:null,city:"",tempUnit:"Celsius",isOn:!0,fetched:!0},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleData=n.handleData.bind(Object(p.a)(n)),n.handleToogle=n.handleToogle.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.handleSubmit("New Delhi")}},{key:"handleToogle",value:function(){var e,t=this;e="Celsius"===this.state.tempUnit?"Fahrenhiet":"Celsius",console.log("Entered"),this.setState((function(t){return{isOn:!t.isOn,tempUnit:e}}),(function(){console.log(t.state)}))}},{key:"handleData",value:function(e){var t=this;this.setState({weather:{appearance:e.weather[0],main:e.main,wind:e.wind,name:e.name,country:e.sys.country,date:new Date(1e3*e.dt-1e3*e.timezone),backgroundImage:e.backgroundImage},fetched:!0},(function(){console.log(t.state.weather,t.state)}))}},{key:"getBackgroundImage",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(N.a)("563492ad6f91700001000001f0bee6436bc64621b8f0736144ac4671"),n="".concat(t.weather[0].description),e.next=4,a.photos.search({query:n,per_page:1,page:Math.round(100*Math.random())});case 4:return r=e.sent,console.log(r.photos[0]),e.abrupt("return",r.photos[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getWeather",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=e1a30bf2f5ec7db7e65fcfac6fc61d03"),e.next=4,fetch(a,{mode:"cors"});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log(r),r.weather[0].iconUrl={"01d":"fas fa-sun sun","01n":"fas fa-moon moon","02d":"fas fa-cloud-sun rain-sun","02n":"fas fa-cloud-moon rain-moon","03d":"fas fa-cloud day","03n":"fas fa-cloud night","04d":"fas fa-cloud-meatball day","04n":"fas fa-cloud-meatball night","09d":"fas fa-cloud-showers-heavy day","09n":"fas fa-cloud-showers-heavy night","10d":"fas fa-cloud-sun-rain rain-sun","10n":"fas fa-cloud-moon-rain rain-moon","11d":"fas fa-bolt bolt-day","11n":"fas fa-bolt bolt-night","13d":"far fa-snowflake day","13n":"far fa-snowflake night","50d":"fas fa-smog day","50n":"fas fa-smog night"}[r.weather[0].icon],r.wind.direcUrl="wi wi-wind towards-".concat(r.wind.deg,"-deg"),e.next=13,this.getBackgroundImage(r);case 13:r.backgroundImage=e.sent,this.handleData(r),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),this.setState({fetched:!1}),console.error(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){var t=this;console.log("Pressed"),this.setState({city:e,weather:null},(function(){return t.getWeather(t.state.city)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement(v,{handleSubmit:this.handleSubmit}),this.state.weather?r.a.createElement(g,{weather:this.state.weather,isOn:this.state.isOn,tempUnit:this.state.tempUnit,handleToogle:this.handleToogle,backgroundImage:this.state.weather.backgroundImage}):this.state.fetched?r.a.createElement("div",null):r.a.createElement(E,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.4ca22371.chunk.js.map