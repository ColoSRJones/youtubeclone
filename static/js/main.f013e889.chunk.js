(this.webpackJsonpyoutubeclone=this.webpackJsonpyoutubeclone||[]).push([[0],{42:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},48:function(e,t,a){e.exports=a.p+"static/media/Youtube-Logo-Header.1d9bda1a.jpg"},52:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=a(28),l=a.n(o),s=a(41),u=a(20),m=a(21),p=a(26),d=a(25),h=a(42),v=a.n(h),b=a(112),f=a(107),g=a(113),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){return e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a),t.preventDefault()},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(g.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(r.a.Component),y=a(111),S=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");console.log(t.id.videoId);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(f.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(y.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle2"},t.snippet.description)))},x=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(y.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},w=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(x,{onVideoSelect:a,key:t,video:e})}));return r.a.createElement(b.a,{container:!0,spacing:10},n)},j=a(47),V=a.n(j).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),k=a(48),O=a.n(k),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get("search",{params:{part:"snippet",maxResults:4,key:"AIzaSyBXngWHp90fHRWGlL1FHo8bcNocL0QLSgQ",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("Siberian Husky Puppy")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(b.a,{justify:"center",container:!0,spacing:10},r.a.createElement("img",{className:v.a.image,src:O.a,alt:"YouTube Clone"}),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(b.a,{container:!0,spacing:10},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(E,{onFormSubmit:this.handleSubmit})),r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(S,{video:t})),r.a.createElement(b.a,{item:!0,xs:4},r.a.createElement(w,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(C,null),document.querySelector("#root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f013e889.chunk.js.map