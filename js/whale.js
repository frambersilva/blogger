/*!
 * Whale v1.5.5
 * Copyright 2017-2019 zkreations
 * Developed by José Gregorio (fb.com/JGMateran)
 * Licensed under MIT (github.com/zkreations/whale/blob/master/LICENSE)
 */
var whale=function(){
	"use strict";


	function e(t,n){
		return e.addElements(t,n)
	}

	function t(e,t){
		for(var n=0,a=e.length;n<a&&!1!==t.call(e[n],n,e[n]);n++);
			return e
	}

	function n(e){
		return e.trim()
	}

	function a(e){
		return(" "+(e.getAttribute("class")||"")+" ").replace(/[\t\r\n\f]/g," ")
	}

	function r(e,t){
		return-1<a(e).indexOf(t)
	}

	function l(e,l){
		var o=a(e);t(l.split(" "),
			(function(t,a){a=n(a),r(e,a)||(o+=a+" ")})),
		e.setAttribute("class",n(o))}function o(e,r){t(r.split(" "),(function(t,r){e.setAttribute("class",n(a(e).replace(" "+n(r)+" "," ")))}))}

	function s(e,n){t(n.split(" "),(function(t,n){(r(e,n)?o:l)(e,n)}))}return e.extend=function(e){var t,n,a,r=1,l=arguments.length;for(r===l&&(e=this,r--);r<l;r++)if(null!=(t=arguments[r]))for(a in t)(n=t[a])!==e[a]&&(e[a]=n);return e},t([l,o,s],(function(e,n){n.collection=function(e,a){t(e,(function(e,t){n(t,a)}))}})),e.components={},e.addElements=function(t,n){var a;if(n)e.components[t]=n;else for(a in t)e.components[a]=t[a];return this},e.extend({trim:n,forEach:t,hasClass:r,addClass:l,removeClass:o,toggleClass:s}),window.addEventListener("DOMContentLoaded",(function(){var t,n=e.components;for(t in n)for(var a=0,r=document.querySelectorAll("."+t),l=r.length,o=n[t];a<l;a++)new o(r[a],a,t)})),e}();!function(){"use strict";function e(e){var t=this.classes;whale.forEach(e.querySelectorAll("a"),(function(e,n){var a=n.parentNode,r=a.querySelectorAll("ul"),l=a.querySelectorAll("a"),o=document.createElement("span"),s=r[0];r.length&&(whale.addClass(a,t.parent),whale.addClass(o,t.arrow),n.appendChild(o),n.addEventListener("click",(function(e){e.preventDefault(),whale.hasClass(s,t.active)?(whale.removeClass.collection(r,t.active),whale.removeClass.collection(l,t.active)):whale.addClass.collection([n,s],t.active)})))}))}e.prototype={classes:{active:"is-active",parent:"is-parent",arrow:"is-arrow"}};whale.addElements({}).addElements({"wjs-menu":e})
}();