webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),u=n(31),i=r(u),l=n(161),c=r(l),f=n(301),d=r(f),s=n(432),p=r(s),v=n(433),g=r(v);(0,g["default"])(d["default"],p["default"],"app"),i["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(162),d=r(f),s=n(1),p=r(s),v=n(174),g=r(v),h=n(300),y=r(h),b=n(341),m=r(b),O=n(179),E=n(344),_=r(E),j=(i=(0,O.DragDropContext)(_["default"]),i(l=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return p["default"].createElement("div",{className:"wrapper"},p["default"].createElement("div",{className:"header"},p["default"].createElement("h1",null,"My Kanban")),p["default"].createElement("button",{className:"add-lane",onClick:this.addLane},"+ Add Lane"),p["default"].createElement(d["default"],{stores:[m["default"]],inject:{lanes:function(){return m["default"].getState().lanes}}},p["default"].createElement(g["default"],null)))}},{key:"addLane",value:function(){y["default"].create({name:"New lane",editing:!0})}}]),t}(p["default"].Component))||l);t["default"]=j},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(175),i=r(u),l=n(300),c=r(l);t["default"]=function(e){var t=e.lanes;return a["default"].createElement("div",{className:"lanes"},t.map(function(e){return a["default"].createElement(i["default"],{className:"lane",id:e.id,key:e.id,lane:e,onLaneMove:c["default"].moveLane})}))}},175:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,c,f,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(162),v=r(p),g=n(1),h=r(g),y=n(176),b=r(y),m=n(315),O=r(m),E=n(316),_=r(E),j=n(300),k=r(j),w=n(177),C=r(w),N=n(179),P=n(299),S=r(P),M={beginDrag:function(e){return{id:e.id}}},D={hover:function(e,t){var n=e.id,r=t.getItem(),o=t.getItemType(),a=r.id;o===S["default"].NOTE?e.lane.notes.length||k["default"].attachToLane({laneId:e.lane.id,noteId:a}):o===S["default"].LANE&&a!==n&&e.onLaneMove({sourceId:a,targetId:n})}},T=(l=(0,N.DragSource)(S["default"].LANE,M,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,N.DropTarget)([S["default"].NOTE,S["default"].LANE],D,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.addNote=function(e){e.stopPropagation();var t=r.props.lane.id,n=O["default"].create({task:"New task",editing:!0});k["default"].attachToLane({noteId:n.id,laneId:t})},r.deleteNote=function(e,t){t.stopPropagation();var n=r.props.lane.id;k["default"].detachFromLane({laneId:n,noteId:e}),O["default"]["delete"](e)},r.editName=function(e){var t=r.props.lane.id;return e.trim()?void k["default"].update({id:t,name:e,editing:!1}):void k["default"].update({id:t,editing:!1})},r.deleteLane=function(){var e=r.props.lane.id,t=r.props.lane.notes;t.forEach(function(e){O["default"]["delete"](e.id)}),k["default"]["delete"](e)},r.activateLaneEdit=function(){var e=r.props.lane.id;k["default"].update({id:e,editing:!0})},o=n,u(r,o)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.lane,a=e.isDragging,u=(e.onLaneMove,o(e,["connectDragSource","connectDropTarget","lane","isDragging","onLaneMove"])),i=r.editing?function(e){return e}:t;return i(n(h["default"].createElement("div",d({style:{opacity:a?0:1}},u),h["default"].createElement("div",{className:"lane-header",onClick:this.activateLaneEdit},h["default"].createElement(C["default"],{className:"lane-name",editing:r.editing,value:r.name,onEdit:this.editName}),h["default"].createElement("div",{className:"lane-delete"},h["default"].createElement("button",{onClick:this.deleteLane},"X"))),h["default"].createElement(v["default"],{stores:[_["default"]],inject:{notes:function(){return _["default"].getNotesByIds(r.notes)}}},h["default"].createElement(b["default"],{onValueClick:this.activateNoteEdit,onEdit:this.editNote,onColorEdit:this.editColor,onDelete:this.deleteNote})),h["default"].createElement("div",{className:"lane-add-note"},h["default"].createElement("button",{onClick:this.addNote},"+ Add Note")))))}},{key:"editNote",value:function(e,t){return t.trim()?void O["default"].update({id:e,task:t,editing:!1}):void O["default"].update({id:e,editing:!1})}},{key:"editColor",value:function(e){_["default"].updateColor(e)}},{key:"activateNoteEdit",value:function(e){O["default"].update({id:e,editing:!0})}}]),t}(h["default"].Component))||f)||f);t["default"]=T},176:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(177),i=r(u),l=n(178),c=r(l),f=n(300),d=r(f);t["default"]=function(e){var t=e.notes,n=e.onValueClick,r=e.onEdit,o=e.onColorEdit,u=e.onDelete;return a["default"].createElement("ul",{className:"notes"},t.map(function(e){return a["default"].createElement(c["default"],{className:"note",id:e.id,key:e.id,editing:e.editing,bgcolor:e.bgcolor,onMove:d["default"].move},a["default"].createElement(i["default"],{editing:e.editing,value:e.task,bgcolor:e.bgcolor,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onColorEdit:o.bind(null,e.id),onDelete:u.bind(null,e.id)}))}))}},177:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),d=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.setSelectionRange(0,r.props.value.length):null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onColorEdit,t=r.props.onDelete;return f["default"].createElement("div",null,e?r.renderColorEdit():null,f["default"].createElement("span",{className:"value",onClick:r.props.onValueClick},r.props.value),t?r.renderDelete():null)},r.renderColorEdit=function(){return f["default"].createElement("button",{className:"options",onClick:r.props.onColorEdit})},r.renderDelete=function(){return f["default"].createElement("button",{style:{backgroundColor:r.props.bgcolor},className:"delete",onClick:r.props.onDelete},"X")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},o=n,u(r,o)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=o(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=d},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,c,f,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),v=r(p),g=n(179),h=n(299),y=r(h),b={beginDrag:function(e){return{id:e.id}}},m={hover:function(e,t){var n=e.id,r=t.getItem(),o=r.id;o!==n&&e.onMove({sourceId:o,targetId:n})}},O=(l=(0,g.DragSource)(y["default"].NOTE,b,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,g.DropTarget)(y["default"].NOTE,m,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,a=(e.onMove,e.id,e.editing),u=o(e,["connectDragSource","connectDropTarget","isDragging","onMove","id","editing"]),i=a?function(e){return e}:t;return i(n(v["default"].createElement("li",d({style:{opacity:r?0:1,backgroundColor:this.props.bgcolor}},u),u.children)))}}]),t}(v["default"].Component))||f)||f);t["default"]=O},299:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note",LANE:"lane"}},300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(301),a=r(o);t["default"]=a["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move","moveLane")},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(302),a=r(o),u=new a["default"];t["default"]=u},315:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(301),a=r(o);t["default"]=a["default"].generateActions("create","update","delete")},316:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(317),l=r(i),c=n(301),f=r(c),d=n(315),s=r(d),p=function(){function e(){o(this,e);this.bindActions(s["default"]),this.notes=[],this.exportPublicMethods({getNotesByIds:this.getNotesByIds.bind(this)})}return u(e,[{key:"create",value:function(e){var t=this.notes;return e.id=l["default"].v4(),e.bgcolor=bgColorOptions[0],this.setState({notes:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.notes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({notes:t})}},{key:"updateColor",value:function(e){var t=this.notes.filter(function(n){return t.id===e?t:void 0}),n=bgColorOptions.indexOf(t.bgColor),r=n===bgColorOptions.length-1?bgColorOptions[0]:bgColorOptions[n+1];update({updatedNoteId:e,bgColor:r})}},{key:"delete",value:function(e){this.setState({notes:this.notes.filter(function(t){return t.id!==e})})}},{key:"getNotesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.notes.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}}]),e}();t["default"]=f["default"].createStore(p,"NoteStore")},341:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(317),l=r(i),c=n(301),f=r(c),d=n(300),s=r(d),p=n(342),v=r(p),g=function(){function e(){o(this,e),this.bindActions(s["default"]),this.lanes=[]}return u(e,[{key:"create",value:function(e){var t=this.lanes;e.id=l["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=this.lanes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({lanes:t})}},{key:"delete",value:function(e){this.setState({lanes:this.lanes.filter(function(t){return t.id!==e})})}},{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return-1!==e.notes.indexOf(n)&&(e.notes=e.notes.filter(function(e){return e!==n})),e.id===t&&(-1!==e.notes.indexOf(n)?console.warn("Already attached note to lane",r):e.notes.push(n)),e});this.setState({lanes:r})}},{key:"detachFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.id===t&&(e.notes=e.notes.filter(function(e){return e!==n})),e});this.setState({lanes:r})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,o=r.filter(function(e){return-1!==e.notes.indexOf(t)})[0],a=r.filter(function(e){return-1!==e.notes.indexOf(n)})[0],u=o.notes.indexOf(t),i=a.notes.indexOf(n);o===a?o.notes=(0,v["default"])(o.notes,{$splice:[[u,1],[i,0,t]]}):(o.notes.splice(u,1),a.notes.splice(i,0,t)),this.setState({lanes:r})}},{key:"moveLane",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,o=r.filter(function(e){return e.id===t})[0],a=r.filter(function(e){return e.id===n})[0],u=r.indexOf(o),i=r.indexOf(a);r[u]=a,r[i]=o,this.setState({lanes:r})}}]),e}();t["default"]=f["default"].createStore(g,"LaneStore")},432:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},433:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,a["default"])(e);try{e.bootstrap(t.get(n))}catch(o){console.error("Failed to bootstrap data",o)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var o=n(434),a=r(o)},434:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});