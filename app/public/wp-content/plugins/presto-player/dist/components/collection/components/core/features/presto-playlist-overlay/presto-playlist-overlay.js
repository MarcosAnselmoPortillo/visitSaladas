import{h,Host}from"@stencil/core";export class PrestoPlaylistOverlay{constructor(){this.nextItemTitle=void 0,this.nextItemString=void 0,this.transitionDuration=5,this.isLastItem=!1,this.animating=!1,this.show=!1}handleShow(){this.show&&!this.isLastItem?(setTimeout((()=>{this.animating=!0}),200),this.timeout=setTimeout((()=>{this.show&&this.handleNext()}),1e3*(this.transitionDuration||5)+200)):this.animating=!1}handleRewatch(){this.rewatch.emit()}handleNext(){this.next.emit()}disconnectedCallback(){clearTimeout(this.timeout)}handleAnimatingChange(t){t||clearTimeout(this.timeout)}render(){var t,e,i,o,s,l;if(!this.show)return h(Host,null,h("div",{style:{display:"none"}}));const n=(null===(e=null===(t=null===window||void 0===window?void 0:window.prestoPlayer)||void 0===t?void 0:t.i18n)||void 0===e?void 0:e.upNext)||"Up Nexts",a=(null===(o=null===(i=null===window||void 0===window?void 0:window.prestoPlayer)||void 0===i?void 0:i.i18n)||void 0===o?void 0:o.startOver)||"Start Over",r=(null===(l=null===(s=null===window||void 0===window?void 0:window.prestoPlayer)||void 0===s?void 0:s.i18n)||void 0===l?void 0:l.rewatch)||"Rewatch";return h("div",{class:"playlist__overlay",onClick:t=>{t.preventDefault(),t.stopImmediatePropagation(),this.animating=!1}},h("div",{class:"playlist__overlay-wrap"},this.isLastItem?h("p",null,a,":"):h("p",null,n,":"),h("h2",null,this.nextItemTitle),h("div",{class:"playlist__overlay-buttons"},h("button",{class:"previous",onClick:()=>this.handleRewatch()},h("svg",{width:"15",height:"9",viewBox:"0 0 15 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M15 0V9L8 4.5L15 0Z",fill:"white"}),h("path",{d:"M7 0V9L0 4.5L7 0Z",fill:"white"})),r),h("button",{class:{next:!0,"fill-button":this.animating},onClick:t=>{t.preventDefault(),t.stopImmediatePropagation(),this.handleNext()}},h("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M0 0V12L9.5 6L0 0Z",fill:"black"})),this.isLastItem?a:"Next "+((null==this?void 0:this.nextItemString)||"Video")))))}static get is(){return"presto-playlist-overlay"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["presto-playlist-overlay.scss"]}}static get styleUrls(){return{$:["presto-playlist-overlay.css"]}}static get properties(){return{nextItemTitle:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Title of the upcoming next playlist item"},attribute:"next-item-title",reflect:!1},nextItemString:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"String for the Button that says `Next Video`"},attribute:"next-item-string",reflect:!1},transitionDuration:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Transition duration for next video."},attribute:"transition-duration",reflect:!1,defaultValue:"5"},isLastItem:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Flag to handle if this item is the last item in the list."},attribute:"is-last-item",reflect:!1,defaultValue:"false"},show:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Visibility flag for the Overlay"},attribute:"show",reflect:!1,defaultValue:"false"}}}static get states(){return{animating:{}}}static get events(){return[{method:"rewatch",name:"rewatch",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Rewatch item event"},complexType:{original:"void",resolved:"void",references:{}}},{method:"next",name:"next",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Next item play event"},complexType:{original:"void",resolved:"void",references:{}}}]}static get watchers(){return[{propName:"show",methodName:"handleShow"},{propName:"animating",methodName:"handleAnimatingChange"}]}}