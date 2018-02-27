
/**
 * https://github.com/rvprasath/vpplayer
 * © COPYRIGHT 2017-2018 Vpplayer v1.0
 * Licensed under the MIT license
 * @author vishnu prasath
 */

(function($) {
	$.fn.vpplayer = function(options) {

		$.fn.vpplayer.defaults = {
			playBackSpeed : ["1.75","1.5","1","0.75","0.5"],
			shakaBufferingGoal : 200
		}

		var h = $.extend({}, $.fn.vpplayer.defaults, options);
		
		(function(){
			if(h.streamingType == undefined){
				h.quality = undefined;
				url();
			}else if(h.streamingType.toUpperCase() == "SHAKA-PLAYER/DASH"){
				if(h.quality == undefined){
					mu();
				}else{
					mqu();
				}
			}
		}());
		
		function url(){
			if(h.url == undefined){
				throw new Error("vpplayer requires url to play the video");
			}
		}
		
		function mu(){		
			if(obs(h.manifestUrl) > 1){
				throw new Error("manifestUrl accepts only one url if no quality is defined");
			}
			if(obs(h.manifestUrl) == 0){
				throw new Error("vpplayer requires manifestUrl to play the video");
			}
		}
		
		function mqu(){
			if(obs(h.manifestUrl) == 0){
				throw new Error("vpplayer requires manifestUrl to play the video");
			}else{
				if(h.quality.length == obs(h.manifestUrl)){
					for(var i=0; i<h.quality.length; i++){
						if(h.manifestUrl[parseInt(h.quality[i])] == undefined){
							throw new Error("The given manifest url quality does not match with quality parameters");
						}
					}
				}else{
					throw new Error("The number of manifest url does not match with number of quality");
				}
			}
		}
		
		function obs(o){
			var s=0,k;
			for(k in o){
				if(o.hasOwnProperty(k)){
					s++;
				}
			}
			return s;
		}

		h.w = function(){
			return window;
		}

		h.ev = function(el, evn, fn){
			return el.addEventListener(evn, fn);
		}

		h.nd = function(){
			return document;
		}

		var o = function() {
			return Object.constructor();
		}

		h.c = new o;
		h.v = new o;		
		
		String.prototype.con = function cn(s){
			var a = this.split("");
			for(var i=0; i<=a.length; i++){
				if(a[i] == s){
					return true;
				}
			}
			return false;
		}
		
		h.d = function(c, s, t, cs) {
			var tx,l;
			var e = document.createElement(c);
			if (s != undefined) {
				if(typeof s == "object" && s.constructor === Object){
					e.setAttribute(s.a,s.v);
				}else{
				s.forEach(function(z){
					e.setAttribute(z.a, z.v);
				});
				}
			}
			if (t != undefined) {
				tx = document.createTextNode(t);
				e.appendChild(tx);
			}
			if(cs != undefined){
				if(typeof cs == "object" && cs.constructor === Object){
					e.setAttribute("style",cs.a+":"+cs.v);
				}else{
				cs.forEach(function(sc, i){
					if(sc != undefined){
					if(i == 0){
						l = sc.a+":"+sc.v+";";
					}else{
						l += sc.a+":"+sc.v+";";
					}
					}
				});
				e.setAttribute("style",l);
			}
			}
			return e;
		}

		h.dns = function(c, s, t, cs) {
			var tx,l;
			var e = document.createElementNS("http://www.w3.org/2000/svg", c);
			if (s != undefined) {
				if(typeof s == "object" && s.constructor === Object){
					e.setAttribute(s.a,s.v);
				}else{
				s.forEach(function(z){
					e.setAttribute(z.a, z.v);
				});
				}
			}
			if (t != undefined) {
				tx = document.createTextNode(t);
				e.appendChild(tx);
			}
			if(cs != undefined){
				if(typeof cs == "object" && cs.constructor === Object){
					e.setAttribute("style",cs.a+":"+cs.v);
				}else{
				cs.forEach(function(sc, i){
					if(sc != undefined){
					if(i == 0){
						l = sc.a+":"+sc.v+";";
					}else{
						l += sc.a+":"+sc.v+";";
					}
					}
				});
				e.setAttribute("style",l);
			}
			}
			return e;
		}


h.const = {
	ptpl :	"M 12,26 25,18 18.5,14 12,10 z",
	ptpa :	"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z",
	ptvh :	"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",
	ptvl :	"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
	ptvm :	"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",
	ptmx :	"M4,15 L4,15 4,3 15,3 M4,20 L4,20 4,33 15,33 M20,33 L20,33 32,33 32,21 M32,15 L32,15 32,3 20,3",
	ptmn :	"M13,3 L13,3 13,13 4,13 M4,23 L4,23 13,23 13,33 M22,33 L22,33 22,23 32,23 M32,13 L32,13 22,13 22,3",
	ptqs :	"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"
}

		h.ct = function(e,t){
			var f;
			f = document.createTextNode(t);
			e.innerHTML = "";
			e.appendChild(f);
		}
		if(h.view != undefined){
			h.vwl = h.view.toLowerCase();
		}

		if(h.playerType == "audio"){
			apl(cP, $(this)).evl();
		}else if(h.playerType == "video"){
			return vpl(cvp, $(this)).rtevl();	
		}else{
			throw new Error("playerType must be called to invoke player");
		}


		function apl(fn, t){			
		return {
				pl: t.each(
				function() {
					t.hide().html(fn()).fadeIn();
					iP();
					var cP = $('.track-name');
					cP.each(function() {
								var m = $(this), indent = m.width();
								m.cP = function() {
									indent--;
									m.css('text-indent', indent);
									if (indent < (-1
											* m.children('div#trackName')
													.width() - 20)) {
										indent = m.width();
									}
								};
								m.data('interval', setInterval(m.cP,
										1000 / 60));
							});
					
				}),
				evl: function(){
					h.ev(h.c.ply,"click",pL);
					h.ev(h.c.pE,"click",kpct);
					h.ev(h.nd(),"click",kpcf);
					h.ev(h.nd(),"keypress",kpk);
					h.ev(h.c.vl, "mouseover", vso);
					h.ev(h.c.vl, "mouseleave", vsl);
					h.ev(h.c.vr, "change", vlcc);
					h.ev(h.c.vr, "input", vlci);
					h.ev(h.c.vF, "click", vlck);
					h.ev(h.c.rwd,"click", r);
					h.ev(h.c.fwd,"click", f);
					h.ev(h.c.rpF, "click", lp);
					h.ev(h.c.rng, "input", ski);
					h.ev(h.c.rng, "change", skc);
					h.ev(h.c.vr, "input", glc);
				}
			}
		}

		function vpl(fn, t){
			return {
				pl: t.each(function() {
							t.hide().html(fn()).fadeIn();
							if(!h.autoPlay){h.v.ol.setAttribute("class", "play-animate fplay");h.sctlf=false;h.ev(h.v.ol, "mousedown", ppan);}else{h.v.ol.setAttribute("class","");h.sctlf=true;};
							lu();
						}),
				rtevl: function(){
					ipvr();
					h.v.vel.oncanplay = function(){
						ivp();
						if(h.autoPlay != undefined && h.autoPlay){
							vplpa();
						}
						h.ev(h.v.vpcplp, "click",  vplpa);
						h.ev(h.v.vctlm, "click", vpfs);
						if(/*@cc_on!@*/false || !!document.documentMode){
						h.ev(h.nd(),"keydown", function(e){if(e.keyCode === 27){e.preventDefault();efs();return false;}
						});
						}
						h.ev(h.nd(),"mozfullscreenchange", efswm);
						h.ev(h.nd(),"webkitfullscreenchange", efswm);

						h.ev(h.v.vppr, "mousedown", pmd);
						h.ev(h.nd().getElementsByTagName("html")[0], "mousemove", pmm);
						h.ev(h.nd().getElementsByTagName("html")[0], "mouseup", pmu);

						h.ev(h.v.vslbc, "mousedown", vmd);
						h.ev(h.nd().getElementsByTagName("html")[0], "mousemove", vmm);
						h.ev(h.nd().getElementsByTagName("html")[0], "mouseup", vmu);
						h.ev(h.v.vpplvh, "click", vmt);
						h.ev(h.v.vpplvl, "click", vmt);
						h.ev(h.v.vpplvm, "click", vmt);

						h.ev(h.v.vppr, "mouseenter", pme);
						h.ev(h.v.vppr, "mouseleave", pml);
						h.ev(h.v.vppr, "mousemove", pmmv);

						h.ev(h.v.vppls, "click", vpse);
						h.ev(h.nd().getElementsByTagName("html")[0], "click", vpsl);

						h.ev(h.v.vpplv, "mouseenter", vpve);
						h.ev(h.v.vpplv, "mouseleave", vpvl)

						h.ev(h.v.vpplspc, "click", vppspe);
						/*h.ev(h.nd().getElementsByTagName("html")[0], "click", vppspl);*/

						h.sp = h.nd().getElementsByClassName(h.v.vpplspl.getAttribute("class"));
						for(var i=0; i<h.sp.length; i++){
							h.ev(h.sp[i], "click", plysp);
						}

						if(h.streamingType != undefined){
						if(h.streamingType.toUpperCase() == "SHAKA-PLAYER/DASH"){
						h.qlt = h.nd().getElementsByClassName(h.v.vpq.getAttribute("class").split(" ")[0]);
						for(var i=0; i<h.qlt.length; i++){
							h.ev(h.qlt[i], "click", qltp);
						}
						}
						}

						h.ev(h.v.vpqsc, "mouseover", strot);
						h.ev(h.v.vpqsc, "mouseleave", strrot);

						h.ev(h.nd(),"keydown",kypf);
						h.ev(h.v.ol, "mousedown", ppan);
						h.ev(h.v.pc, "mouseenter", scnt);
						h.ev(h.v.pc, "mousemove", mscnt);
						h.ev(h.v.pc, "mouseleave", hcnt);
						h.ev(h.v.pc, "contextmenu", cntx);
						h.ev(h.nd(), "click", cntxcl);

					}
					return h.v.vel;
				}
			}
		}

		function lu(){
			if(h.streamingType == undefined){
					h.v.vel.setAttribute("src", h.url);
			}else{
				if(h.streamingType.toUpperCase() == "SHAKA-PLAYER/DASH"){
					loadManifest(h.manifestUrl[1080], h.v.vel);
				}
			}	
		}
	

	/*-------------AUDIO PLAYER------------*/

	function cP() {
		h.c.pE = h.d("div", {
			a : "id",
			v : "vpplayer"
		},undefined,
		(h.playerColor != undefined)?(
				(h.playerColor.con(","))?(
				[{a:"background",v:"linear-gradient(" + h.playerColor+ ")"},
				  {a:"background",v:"-webkit-linear-gradient(" + h.playerColor+ ")"},
				  {a:"background",v:"-moz-linear-gradient(" + h.playerColor+ ")"},((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined)
				]):[{a:"background",v:h.playerColor},((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined)]
				
		):((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined));

		var pE = h.c.pE;
		
		h.c.pc = h.d("div", {
			a : "class",
			v : "track-picture-container"
		},undefined,
		(h.playerColor != undefined)?(
				(h.playerColor.con(","))?(
					[{a:"box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]},
					 {a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]},
					 {a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]}]
					):([{a:"box-shadow",v:"inset -1px 0px 0px " + h.playerColor},
						{a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.playerColor},
						{a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.playerColor}])
				
		):undefined);

		h.c.pl = h.d("div", {
			a : "class",
			v : "playerName"
		},"vpplayer",undefined);

		h.c.trkcr = h.d("div", {
			a : "class",
			v : "track-container"
		},undefined,(h.vwl == "basic" || h.vwl == "minimal")?{a:"width",v:"100%"}:undefined);
		
		h.c.hF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-music playerHeadPhone"
		},undefined,undefined);
		
		
		h.c.pF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-play"
		},undefined,undefined);

		
		h.c.rF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-backward"
		},undefined,undefined);
		
		h.c.fF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-forward"
		},undefined,undefined);
		
		h.c.vF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-volume-up"
		},undefined,undefined);

		h.c.rpF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-repeat"
		},undefined,undefined);
		
		h.c.asl = h.d("source", 
				[{a : "src",v : h.src},(h.type != undefined)?({a:"type",v:h.type}):({a:"type",v:"audio/mpeg"})],
				
				undefined,undefined);
		
		h.c.a = h.d("audio", {
			a : "id",
			v : "audio"
		},undefined,undefined);
	
		h.c.ac = h.d("div",undefined,undefined,undefined);
		
		h.c.a.appendChild(h.c.asl);
		h.c.ac.appendChild(h.c.a);

		h.c.eql = h.d("div", {
			a : "class",
			v : "equalizer"
		},undefined,undefined);
	
		h.c.b = [];
		for(var j=0; j<=32; j++){
			h.c.b[j] = h.d("div", {
				a : "class",
				v : "bar"
			},undefined,(h.equalizerColor != undefined)?
		(!h.equalizerColor.con(","))?({a:"background",v:h.equalizerColor}):undefined
		:undefined);
			h.c.eql.appendChild(h.c.b[j]);
		}

		h.c.tnd = h.d("div", {
			a : "class",
			v : "track-name-details"
		},undefined,
		(h.displayColor != undefined)?(
				(h.displayColor.con(","))?(
					[{a:"box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]},
					 {a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]},
					 {a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]}]
					):([{a:"box-shadow",v:"inset -1px 0px 0px " + h.displayColor},
						{a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.displayColor},
						{a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.displayColor}])
				
		):undefined);
		
		h.c.tnd.appendChild(h.c.eql);
	
		h.c.tn = h.d("div", {
			a : "class",
			v : "track-name"
		},undefined,(h.trackNameColor != undefined)?
		(!h.trackNameColor.con(","))?({a:"color",v:h.trackNameColor}):undefined
		:undefined);

		h.c.trkscrl = h.d("div", {
			a : "id",
			v : "trackName"
		},(h.preloadMessage != undefined)?h.preloadMessage:"LOADING",undefined);
		h.c.tn.appendChild(h.c.trkscrl);
		
		h.c.tcr = h.d("div", {
			a : "class",
			v : "track-data-element-container"
		},undefined,
		(h.displayColor != undefined)?(
				(h.displayColor.con(","))?([
						{a:"background",v:"linear-gradient(" + h.displayColor+ ")"},
						{a:"background",v:"-webkit-linear-gradient(" + h.displayColor+ ")"},
						{a:"background",v:"-moz-linear-gradient(" + h.displayColor+ ")"}
					]):({a:"background",v:h.displayColor})
				
		):undefined);

		h.c.tcc = h.d("div", {
			a : "class",
			v : "track-control-container"
		},undefined,(h.vwl == "minimal")?{a:"height",v:"100%"}:undefined);

		h.c.tsc = h.d("div", {
			a : "class",
			v : "track-seek-container"
		},undefined,undefined);

		h.c.tcec = h.d("div", {
			a : "class",
			v : "track-controlelements-container"
		},undefined,undefined);
		
		h.c.tsh = h.d("div", {
			a : "class",
			v : "track-seekbar-handler"
		},undefined,undefined);

		h.c.tc = h.d("div", {
			a : "class",
			v : "track-completed"
		},undefined,undefined);
		
		h.c.tbr = h.d("div", {
			a : "class",
			v : "track-buffer"
		},undefined,undefined);

		h.c.tm = h.d("div", {
			a : "class",
			v : "time"
		},undefined,undefined);

		h.c.rng = h.d("input", 
				[{a:"type", v:"range"},{a:"class",v:"seeker"},{a:"id",v:"seekBar"},{a:"value",v:0}],undefined,undefined);

		h.c.stt = h.d("div", {
			a : "class",
			v : "startTime"
		},"--:--",undefined);

		h.c.edt = h.d("div", {
			a : "class",
			v : "endTime"
		},"--:--",undefined);

		h.c.tcg = h.d("div", {
			a : "class",
			v : "track-control-group"
		},undefined,undefined);

		h.c.vc = h.d("div", {
			a : "class",
			v : "volume-container"
		},undefined,undefined);
		
		h.c.plnres = h.d("span", {
			a : "class",
			v : "playerNameRes"
		},"vpplayer",undefined);
		
		h.c.rwd = h.d("div", {
			a : "class",
			v : "rewind"
		},undefined,undefined);
		
		h.c.ply = h.d("div", {
			a : "class",
			v : "play"
		},undefined,undefined);
		
		h.c.fwd = h.d("div", {
			a : "class",
			v : "forward"
		},undefined,undefined);

		h.c.rp = h.d("div", {
			a : "class",
			v : "repeat"
		},undefined,undefined);

		h.c.vl = h.d("div", {
			a : "class",
			v : "volume"
		},undefined,undefined);

		h.c.vrc = h.d("div", {
			a : "class",
			v : "volume-range-container"
		},undefined,undefined);

		h.c.vr = h.d("input", 
			[{a : "class",v : "volumeRange"},{a:"type",v:"range"},{a:"min",v:"0"},{a:"max",v:"100"},{a:"value",v:"100"}],
			undefined,undefined);
		
		h.c.vl.appendChild(h.c.vF);
		h.c.vrc.appendChild(h.c.vr);
		h.c.vl.appendChild(h.c.vrc);
		h.c.vc.appendChild(h.c.vl);

		h.c.rwd.appendChild(h.c.rF);
		h.c.ply.appendChild(h.c.pF);
		h.c.fwd.appendChild(h.c.fF);
		h.c.rp.appendChild(h.c.rpF);

		h.c.tcg.appendChild(h.c.rwd);
		h.c.tcg.appendChild(h.c.ply);
		h.c.tcg.appendChild(h.c.fwd);
		h.c.tcg.appendChild(h.c.rp);

		h.c.tcec.appendChild(h.c.tcg);
		h.c.tcec.appendChild(h.c.vc);
		h.c.tcec.appendChild(h.c.plnres);

		h.c.tm.appendChild(h.c.stt);
		h.c.tm.appendChild(h.c.edt);

		h.c.tsh.appendChild(h.c.tm);
		h.c.tsh.appendChild(h.c.rng);

		h.c.tsc.appendChild(h.c.tsh);
		h.c.tsc.appendChild(h.c.tc);
		h.c.tsc.appendChild(h.c.tbr);

		h.c.tcc.appendChild(h.c.tsc);
		h.c.tcc.appendChild(h.c.tcec);

		h.c.tcr.appendChild(h.c.tnd);
		h.c.tcr.appendChild(h.c.tn);

		h.c.trkcr.appendChild(h.c.ac);
		if(h.vwl != "minimal"){
		h.c.trkcr.appendChild(h.c.tcr);
		}
		h.c.trkcr.appendChild(h.c.tcc);

		h.c.pc.appendChild(h.c.hF);
		h.c.pc.appendChild(h.c.pl);
		if(h.vwl != "basic" && h.vwl != "minimal"){
			h.c.pE.appendChild(h.c.pc);
		}
		h.c.pE.appendChild(h.c.trkcr);

		return h.c.pE;
	}

	function iP() {
		var interval = setInterval(
				function() {
					
						if(h.vwl == "basic" || h.vwl == "minimal"){
							h.c.plnres.style.opacity = 1;
						}
						if(!isNaN(h.c.a.duration)){
							h.ct(h.c.stt, sm(h.c.a.currentTime));
							h.ct(h.c.edt, sm(h.c.a.duration));
							h.c.rng.setAttribute("min", h.c.a.currentTime);
							h.c.rng.setAttribute("max", Math.ceil(h.c.a.duration));
							h.c.rng.value = h.c.a.currentTime;
							if (h.trackName != undefined) {
							h.c.trkscrl.innerHTML = h.trackName;
							h.c.vpre = (h.c.vr.value/100);
							h.c.vrpre = h.c.vr.value;
							h.c.rpfl = 0;
						} else {
							h.c.trkscrl.innerHTML = "Untitled Track";
						}
						clearInterval(interval);
						}
				}, 500);
	}

	function uT() {
		h.upt = setInterval(function() {
			if(!h.c.a.paused){
			h.ct(h.c.stt, sm(h.c.a.currentTime));
			h.ct(h.c.edt, sm(h.c.a.duration));
			h.c.rng.value = Math.ceil(h.c.a.currentTime);
			eq(1);
			if(Math.round(h.c.a.currentTime) == Math.round(h.c.a.duration)){
				rpa();
				eq(0);
				clearInterval(h.upt);
				h.c.rng.value = 0;
				if(h.c.rpfl == 1){
					var lpi =  setTimeout(function(){
						h.c.ply.click();
				}, 2000);
				}
			}
			if(h.c.vr.value == 0){
				h.c.vF.setAttribute("class","glyphicon glyphicon glyphicon-volume-off");
			}else if(h.c.vr.value <= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-down");
			}else if(h.c.vr.value >= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-up");
			}
			}
		}, 100);
	}

	function pL() {
			if(h.c.a.duration > 0){
			if(this.children[0].getAttribute("class") == "glyphicon glyphicon-play"){
				h.c.a.play();
				this.setAttribute("class", "pause");
				this.children[0].setAttribute("class", "glyphicon glyphicon-pause");
				uT();
			}else if(this.children[0].getAttribute("class") == "glyphicon glyphicon-pause"){
				h.c.a.pause();
				this.setAttribute("class", "play");
				this.children[0].setAttribute("class", "glyphicon glyphicon-play");
				clearInterval(h.upt);
			}
			}
	}

	function ski(e) {
			h.c.a.currentTime = this.value;
	}
	function skc(e) {
			h.c.a.currentTime = this.value;
	}

	function kpct(e){
			h.fl = true;
	}
	function kpcf(e){
			if(!(h.c.pE.contains(e.target))){
				h.fl = false;
			}
	}
	function kpk(e){
				if(e.which ==  32 && h.fl == true){
					h.c.ply.click();
				}
	}

	function vso(e){
			h.c.vrc.style.opacity = 1;
			if(h.w().innerWidth >= 610){
				h.c.vrc.style.width = 60+"px";
			}else if(h.w().innerWidth <= 610 && h.w().innerWidth >= 300){
				h.c.vrc.style.width = 55+"px";	
			}else if(h.w().innerWidth <= 300){
				h.c.vrc.style.width = 25+"px";
			}
	}
	function vsl(e){
			h.c.vrc.style.opacity = 0;
			h.c.vrc.style.width = 0+"px";		
	}

	function vlcc(e){
			h.c.a.volume = (this.value/100);
	}
	function vlci(e){
			h.c.a.volume = (this.value/100);
	}
	function vlck(e){
			if(h.c.a.volume != 0){
				h.c.vpre = h.c.a.volume;
				h.c.vpreic = this.getAttribute("class");
				h.c.vrpre = h.c.vr.value;
				this.setAttribute("class","glyphicon glyphicon-volume-off");
				h.c.a.volume = 0;
				h.c.vr.value = 0;
			}else if(h.c.a.volume == 0){
				this.setAttribute("class",h.c.vpreic);
				h.c.a.volume = h.c.vpre;
				h.c.vr.value = h.c.vrpre;
			}
	}

	function glc(e){
		if(h.c.vr.value == 0){
				h.c.vF.setAttribute("class","glyphicon glyphicon glyphicon-volume-off");
			}else if(h.c.vr.value <= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-down");
			}else if(h.c.vr.value >= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-up");
			}
	}

	function r(e){
			if(iap()){
			h.c.a.currentTime = (h.c.a.currentTime)-5;
			}
	}
	function f(e){
			if(iap()){
			h.c.a.currentTime = (h.c.a.currentTime)+5;
			}
	}

	function lp(e){
			if(h.c.rpfl == 0){
			this.style.textShadow = "0px 0px 10px #ffffff";
			h.c.rpfl = 1;
		}else if(h.c.rpfl == 1){
			this.style.textShadow = "1px 1px 3px #000";
			h.c.rpfl = 0;
		}
	}

	function iap(){
		if(!(h.c.a.paused)){
			return true;
		}else{
			return false;
		}
	}

	function eq(f) {
		if(f == 1){
		[].forEach.call(h.c.b, function(b) {
			b.style.height = "100%";
			b.style.margin = "0px 1% 0px 0px";
			b.style.transform = "scaleY(" + ((Math.random() * 100) / 90)
					+ ")";
		});
	}else{
		[].forEach.call(h.c.b, function(b) {
			b.style.height = "10%";
			b.style.margin = "21px 1% 0px 0px";
			b.style.transform = "scaleY(1)";
		});
	}
	}

	function sm(secs) {
		var hr = Math.floor(secs / 3600);
		var min = Math.floor((secs - (hr * 3600)) / 60);
		var sec = Math.floor(secs - (hr * 3600) - (min * 60));
		if (min < 10) {
			min = "0" + min;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		if(hr > 0){
			return hr + ':' + min + ':' + sec;
		}else{
			return min + ':' + sec;
		}
	}

	function rpa() {
			h.c.ply.children[0].setAttribute("class", "glyphicon glyphicon-play");
			h.c.ply.setAttribute("class", "play");
			clearInterval(h.upt);
	}

	/*------------VIDEO PLAYER--------------*/

	function cvp(){

		h.v.pc = h.d("div", {
			a : "id",
			v : "vp-video-player-container"
		},undefined,undefined);

		h.v.gt = h.d("div", {
			a : "id",
			v : "vp-video-player-gradient-top"
		},undefined,undefined);

		h.v.ol = h.d("div", {
			a : "id",
			v : "vp-video-player-overlay"
		},undefined,undefined);

		h.v.vec = h.d("div", {
			a : "id",
			v : "vp-video-player-container-videoelement"
		},undefined,undefined);

		h.v.vel = h.d("video", [{
			a : "id",
			v : "vp-video-player"
		},{
			a:"src",
			v:""
		},{
			a:"poster",
			v:(h.poster != undefined)?h.poster:"",
		}],undefined,undefined);

		h.v.vpctl = h.d("div", {
			a : "id",
			v : "vp-video-player-controls"
		},undefined,undefined);

		h.v.vppc = h.d("div", {
			a : "id",
			v : "vp-player-progress-container"
		},undefined,undefined);

		h.v.vppr = h.d("div", {
			a : "id",
			v : "vp-player-progress"
		},undefined,undefined);

		h.v.vpbf = h.d("div", {
			a : "id",
			v : "vp-video-player-buffer"
		},undefined,undefined);

		h.v.vppp = h.d("div", {
			a : "id",
			v : "vp-video-player-played"
		},undefined,undefined);

		h.v.vptmb1 = h.d("span", {
			a : "class",
			v : "vp-player-time-bar"
		},undefined,undefined);

		h.v.vpct = h.d("span", {
			a : "id",
			v : "vp-video-player-current-time"
		},"--:--",undefined);

		h.v.vpts = h.d("span", undefined , " / " ,undefined);

		h.v.vptmb2 = h.d("span", {
			a : "class",
			v : "vp-player-time-bar"
		},undefined,undefined);

		h.v.vpd = h.d("span", {
			a : "id",
			v : "vp-video-player-duration"
		},"--:--",undefined);

		h.v.vptmc = h.d("div", {
			a : "class",
			v : "vp-video-time-container"
		},undefined,undefined);

		h.v.vpcplp = h.d("div", {
			a : "id",
			v : "vp-player-controls-plpa"
		},undefined,undefined);

		h.v.vpplc = h.d("div", {
			a : "class",
			v : "vp-player-play-container"
		},undefined,undefined);

		h.v.svgpl = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthpl = h.dns("path", [{
			a : "class",
			v : "vp-player-play"
		},{a:"d", v: h.const.ptpl}],undefined,undefined);

		h.v.vppac = h.d("div", {
			a : "class",
			v : "vp-player-pause-container controlHide"
		},undefined,undefined);

		h.v.svgpa = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthpa = h.dns("path", [{
			a : "class",
			v : "vp-player-pause"
		},{a:"d", v: h.const.ptpa}],undefined,undefined);

		h.v.vpplv = h.d("div", {
			a : "class",
			v : "vp-video-player-volume"
		},undefined,undefined);

		h.v.vpplvh = h.d("div", {
			a : "class",
			v : "vp-video-player-volume-high-container"
		},undefined,undefined);

		h.v.svgvh = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthvh = h.dns("path", [{
			a : "class",
			v : "vp-video-player-volume-high"
		},{a:"d", v:h.const.ptvh}],undefined,undefined);

		h.v.vpplvl = h.d("div", {
			a : "class",
			v : "vp-video-player-volume-low-container controlHide"
		},undefined,undefined);

		h.v.svgvl = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthvl = h.dns("path", [{
			a : "class",
			v : "vp-video-player-volume-low"
		},{a:"d", v:h.const.ptvl}],undefined,undefined);

		h.v.vpplvm = h.d("div", {
			a : "class",
			v : "vp-video-player-volume-mute-container controlHide"
		},undefined,undefined);

		h.v.svgvm = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthvm = h.dns("path", [{
			a : "class",
			v : "vp-video-player-volume-mute"
		},{a:"d", v:h.const.ptvm}],undefined,undefined);

		h.v.vsl = h.d("div", {
			a : "class",
			v : "vp-video-player-volume-slider"
		},undefined,undefined);

		h.v.vslbc = h.d("div", {
			a : "class",
			v : "vp-video-player-sliderbar-container"
		},undefined,undefined);

		h.v.vslb = h.d("div", {
			a : "class",
			v : "vp-video-player-sliderbar"
		},undefined,undefined);

		h.v.vctlm = h.d("div", {
			a : "id",
			v : "vp-player-controls-maxmin"
		},undefined,undefined);

		h.v.vpmx = h.d("div", {
			a : "class",
			v : "vp-player-max"
		},undefined,undefined);

		h.v.svgmx = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthmx = h.dns("path", [{
			a : "class",
			v : "vp-player-maxmin-control"
		},{a:"d", v:h.const.ptmx}],undefined,undefined);

		h.v.vpmn = h.d("div", {
			a : "class",
			v : "vp-player-min controlHide"
		},undefined,undefined);

		h.v.svgmn = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthmn = h.dns("path", [{
			a : "class",
			v : "vp-player-maxmin-control"
		},{a:"d", v:h.const.ptmn}],undefined,undefined);

		h.v.vppls = h.d("div", {
			a : "id",
			v : "vp-video-player-settings"
		},undefined,undefined);

		h.v.vpqc = h.d("div", {
			a : "class",
			v : "vp-video-player-quality-popup-container"
		},undefined,undefined);

		if(h.quality!= undefined){
			h.quality.sort(function(a,b){return parseInt(b)-parseInt(a);});
			var l = 1;
			for(var i=0;i<((h.quality.length)+l);i++){
				if((i == h.quality.length)?true:!isNaN(parseInt(h.quality[i]))){
					if(i == h.quality.length){
						h.quality.push("Auto");
						l = 0;
					}
				h.v.vpq = h.d("div",[(h.quality[i] == "Auto")?{a : "class", v : "vp-video-player-quality-popup optionHover"}:{a : "class", v : "vp-video-player-quality-popup"},
				{a : "id", v : (l==1)?parseInt(h.quality[i]):h.quality[i]}],(l==1)?parseInt(h.quality[i]):h.quality[i],undefined);
				h.v.vpqc.appendChild(h.v.vpq);
			}else{
				throw new Error("The given quality value is not a number");
			}
			}
		}else{
				h.v.vpq = h.d("div", {
					a : "class",
					v : "vp-video-player-quality-popup optionHover"
				},"Auto",undefined);
			h.v.vpqc.appendChild(h.v.vpq);
		}

		h.v.vpqsc = h.d("div", {
			a : "class",
			v : "vp-video-player-quality-setting-container"
		},undefined,undefined);

		h.v.svgq = h.dns("svg", [{a:"height", v:"100%"},
		{a:"version", v:"1.1"},{a:"viewBox", v:"0 0 36 36"},{a:"width", v:"100%"}],undefined,undefined);

		h.v.pthq = h.dns("path", [{
			a : "class",
			v : "vp-video-player-quality-setting"
		},{a:"d", v:h.const.ptqs}],undefined,undefined);


		h.v.vpplspc = h.d("div", {
			a : "class",
			v : "vp-video-player-playback-speed-container"
		},undefined,undefined);

		h.v.vpplsps = h.d("div", {
			a : "class",
			v : "vp-video-player-playback-select"
		},undefined,undefined);

		
		if(h.playBackSpeed != undefined){
			if(h.playBackSpeed.indexOf("1") == -1){
				h.playBackSpeed.push("1");
			}
			h.playBackSpeed.sort(function(a,b){return parseFloat(b)-parseFloat(a);});
			for(var i=0;i<h.playBackSpeed.length;i++){
				if(!isNaN(parseFloat(h.playBackSpeed[i]))){
					h.v.vpplspl = h.d("div", [(h.playBackSpeed[i] == 1)?{a : "class", v : "vp-video-player-playback-select-list optionHover"}:{a : "class", v : "vp-video-player-playback-select-list"},
					{
					a : "id",
					v : parseFloat(h.playBackSpeed[i]),
				}],parseFloat(h.playBackSpeed[i])+"x",undefined);
				h.v.vpplsps.appendChild(h.v.vpplspl);
				}else{
					throw new Error("The given playBackSpeed is not a number");
				}
			}
		}


		h.v.vpplsp = h.d("div", {
			a : "class",
			v : "vp-video-player-playback-speed"
		},"1x",undefined);


		h.v.vec.appendChild(h.v.vel);

		h.v.vppr.appendChild(h.v.vpbf);
		h.v.vppr.appendChild(h.v.vppp);
		h.v.vptmb2.appendChild(h.v.vpd);
		h.v.vptmb1.appendChild(h.v.vpct);
		h.v.vptmb1.appendChild(h.v.vpts);
		h.v.vppc.appendChild(h.v.vppr);
		h.v.vptmc.appendChild(h.v.vptmb1);
		h.v.vptmc.appendChild(h.v.vptmb2);

		h.v.svgpl.appendChild(h.v.pthpl);
		h.v.vpplc.appendChild(h.v.svgpl);
		h.v.svgpa.appendChild(h.v.pthpa);
		h.v.vppac.appendChild(h.v.svgpa);
		h.v.vpcplp.appendChild(h.v.vpplc);
		h.v.vpcplp.appendChild(h.v.vppac);

		h.v.svgvh.appendChild(h.v.pthvh);
		h.v.vpplvh.appendChild(h.v.svgvh);
		h.v.svgvl.appendChild(h.v.pthvl);
		h.v.vpplvl.appendChild(h.v.svgvl);
		h.v.svgvm.appendChild(h.v.pthvm);
		h.v.vpplvm.appendChild(h.v.svgvm);

		h.v.vslbc.appendChild(h.v.vslb);
		h.v.vsl.appendChild(h.v.vslbc);

		h.v.vpplv.appendChild(h.v.vpplvh);
		h.v.vpplv.appendChild(h.v.vpplvl);
		h.v.vpplv.appendChild(h.v.vpplvm);
		h.v.vpplv.appendChild(h.v.vsl);

		h.v.svgmx.appendChild(h.v.pthmx);
		h.v.vpmx.appendChild(h.v.svgmx);
		h.v.svgmn.appendChild(h.v.pthmn);
		h.v.vpmn.appendChild(h.v.svgmn);
		h.v.vctlm.appendChild(h.v.vpmx);
		h.v.vctlm.appendChild(h.v.vpmn);

		h.v.svgq.appendChild(h.v.pthq);
		h.v.vpqsc.appendChild(h.v.svgq);
		h.v.vppls.appendChild(h.v.vpqc);
		h.v.vppls.appendChild(h.v.vpqsc);

		h.v.vpplspc.appendChild(h.v.vpplsps);
		h.v.vpplspc.appendChild(h.v.vpplsp);

		h.v.vpctl.appendChild(h.v.vppc);
		h.v.vpctl.appendChild(h.v.vpcplp);
		h.v.vpctl.appendChild(h.v.vptmc);
		h.v.vpctl.appendChild(h.v.vpplv);
		h.v.vpctl.appendChild(h.v.vctlm);
		h.v.vpctl.appendChild(h.v.vppls);
		h.v.vpctl.appendChild(h.v.vpplspc);

		h.v.pc.appendChild(h.v.gt);
		h.v.pc.appendChild(h.v.ol);
		h.v.pc.appendChild(h.v.vec);
		h.v.pc.appendChild(h.v.vpctl);

		return h.v.pc;
	}

	function ipvr(){
		h.skf = 1;
		h.ppf = 0;
		h.fsf = 0;
		h.qfl = true;
		h.pspfl = true;
		h.vfl = true;
		h.v.vlmf = true;
		var cv = ck("volume");
		var ckv = ck("volumeHeight");
		if(cv != "" && cv != null){
			h.v.vel.volume = cv;
		}else{
			h.v.vel.volume = 0.8;
			cv = 0.8;
		}
		if(ckv != "" && ckv != null){
			h.v.vslb.style.height = ckv;
		}else{
			h.v.vslb.style.height = 80+"%";
		}
		cv = cv*100;
		vctlf(cv);
		h.v.vlmps = 80;
		h.kypffl = false;
		h.qtyfl = false;
	}

	function ivp(){

		h.vpintvl = setInterval(function(){
			cdwt();

			for (var i = 0; i < h.v.vel.buffered.length; i++) {
            	if (h.v.vel.buffered.start(h.v.vel.buffered.length - 1 - i) < h.v.vel.currentTime) {
               		h.v.vpbf.style.width = (h.v.vel.buffered.end(h.v.vel.buffered.length - 1 - i) / h.v.vel.duration) * 100 + "%";
                	break;
            	}
       		}
			h.v.vppp.style.width = ((h.v.vel.currentTime*h.min)/h.wprcnt)+"%";
			h.v.vpct.innerHTML = sm(h.v.vel.currentTime);
			h.v.vpd.innerHTML = sm(h.v.vel.duration);
			h.v.vel.onended = function(){
				ivp();
				ipvr();
				h.v.vel.setAttribute("poster", h.poster);
				h.ppf = 1;
				vplpa();
				clearInterval(h.vpintvl);
				
			}

		}, 100);

	}

	function cdwt(){
		h.min = (h.v.vppr.offsetWidth/100)/h.v.vel.duration;
		h.towid = (h.v.vppr.offsetWidth/100);
		h.wprcnt  = (h.towid/100);
		h.sec = ((h.v.vppr.offsetWidth/100)/60)/h.v.vel.duration;
	}

	function vplpa(e){
		
		if(h.ppf == 0){
			h.v.vpplc.setAttribute("class","vp-player-play-container controlHide");
			h.v.vppac.setAttribute("class","vp-player-pause-container");
			h.v.vel.play();
			h.ppf = 1;
		}
		else{
			h.v.vppac.setAttribute("class","vp-player-pause-container controlHide");
			h.v.vpplc.setAttribute("class","vp-player-play-container");
			h.v.vel.pause();
			h.ppf = 0;
		}
		if(e != undefined){
			if(h.v.vpcplp.contains(e.target)){
				fpn();
			}
			}
	}


	function vpfs(){
		if(h.fsf == 0){
			ofs();
			if (h.v.pc.requestFullscreen) {
				h.v.pc.requestFullscreen();
			} else if (h.v.pc.webkitRequestFullscreen) {
				h.v.pc.webkitRequestFullscreen();
			} else if (h.v.pc.mozRequestFullScreen) {
				h.v.pc.mozRequestFullScreen();
			} else if (h.v.pc.msRequestFullscreen) {
				h.v.pc.msRequestFullscreen();
			}
			
		}else{			
			efs();
			if (h.nd().exitFullscreen) {
				h.nd().exitFullscreen();
			} else if (h.nd().webkitExitFullscreen) {
				h.nd().webkitExitFullscreen();
			} else if (h.nd().mozCancelFullScreen) {
				h.nd().mozCancelFullScreen();
			} else if (h.nd().msExitFullscreen) {
				h.nd().msExitFullscreen();
			}
		}
	}
	function ofs(){
		if(h.fsf == 0){
			h.v.pc.setAttribute("class", "playerFullScreen");
			h.v.vel.setAttribute("class", "videoFullScreen");
			h.v.vpmx.setAttribute("class", "vp-player-max controlHide");
			h.v.vpmn.removeAttribute("class", "controlHide");
			h.v.vpmn.setAttribute("class", "vp-player-min");
			h.fsf = 1;
			h.fswm = 0;
		}			
	}
	function efs(){
		if(h.fsf == 1){
			h.v.pc.removeAttribute("class", "playerFullScreen");
			h.v.vel.removeAttribute("class", "videoFullScreen");
			h.v.vpmx.removeAttribute("class", "controlHide");
			h.v.vpmx.setAttribute("class", "vp-player-max");
			h.v.vpmn.setAttribute("class", "vp-player-min controlHide");
			h.fsf = 0;
			h.fswm == 1;
		}
	}
	function efswm(){
		if(h.fswm == 1 && h.fsf == 1){
			h.v.pc.removeAttribute("class", "playerFullScreen");
			h.v.vel.removeAttribute("class", "videoFullScreen");
			h.v.vpmx.removeAttribute("class", "controlHide");
			h.v.vpmx.setAttribute("class", "vp-player-max");
			h.v.vpmn.setAttribute("class", "vp-player-min controlHide");
			h.fsf = 0;
		}else{
			h.fswm = 1;
		}
	}

	function sk(e, t){
		h.skm = ((e.pageX-t.offset().left)/100);
		h.v.vel.currentTime = h.skm/h.min;
	}

	var pmdf = 1;
	function pmd(e){
		if(e.which == 3){
    		return false;
    	}
  		pmdf = 0;
    	sk(e, $(this));
    	
   	}

   	function pmm(e){
   		if(pmdf == 0){
    	sk(e, $(h.v.vppr));
    	h.v.vppp.style.width = ((h.v.vel.currentTime*h.min)/h.wprcnt)+"%";
  	  }
   	}

   	function pmu(e){
   		 if(e.which == 3){
	    	return false;
	    }
    	if(pmdf == 0){

    	sk(e, $(h.v.vppr));

    }
    	pmdf = 1;
    	mscnt();
   	}

   	function sktmtlp(e, t){
	 	h.skm = ((e.pageX-t.offset().left)/100);
	 	return (h.skm/h.min);
	}

	function pme(e){
		cdwt();

		h.v.vpttltp = h.d("div", {
			a : "class",
			v : "vp-video-player-time-tooltip"
		},"--:--",undefined);

		if(h.thumbnail != undefined){
		h.v.vppsf = h.d("div", {
			a : "class",
			v : "vp-video-player-seek-frame"
		},undefined,undefined);
		}

		$(h.v.vpttltp).appendTo(h.v.pc);
		$(h.v.vppsf).appendTo(h.v.pc);

		if(h.fsf == 0){
				var s = (parseInt($(h.v.pc).parents().css("margin-top")) == 0)?(parseInt($(h.v.pc).parents().css("padding-top")) == 0)?parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).parents().css("padding-top"))+parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).offset().top);
				h.v.vpttltp.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+parseInt(s)+12)+"px";
				if(h.thumbnail != undefined){
				h.v.vppsf.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+parseInt(s)+30)+"px";
				}
		}else{
				h.v.vpttltp.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+12)+"px";
				if(h.thumbnail != undefined){
				h.v.vppsf.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+30)+"px";
				}
		}
		
		h.v.vpttltp.style.left = e.pageX-10-$(this).offset().left+"px";
		if(h.thumbnail != undefined){
		h.v.vppsf.style.left = e.pageX-(Math.abs(12-(h.thumbnail.width)/2))-$(this).offset().left+"px";
		}
		h.v.vpttltp.innerText = sm(sktmtlp(e, $(this)));

		h.v.vppr.className = "progressHover";

	}

	function pml(e){
		$(h.v.vppsf).remove();
		$(h.v.vpttltp).remove();
		h.v.vppr.className = "";
	}

	function pmmv(e){
		cdwt();
		if(h.fsf == 0){
				var s = (parseInt($(h.v.pc).parents().css("margin-top")) == 0)?(parseInt($(h.v.pc).parents().css("padding-top")) == 0)?parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).parents().css("padding-top"))+parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).offset().top);
				h.v.vpttltp.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+parseInt(s)+12)+"px";
				if(h.thumbnail != undefined){
				h.v.vppsf.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+parseInt(s)+30)+"px";
				}

		}else{
				h.v.vpttltp.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+12)+"px";
				if(h.thumbnail != undefined){
				h.v.vppsf.style.bottom = Math.abs(h.v.pc.offsetHeight-$(this).offset().top+30)+"px";
			}
		}
		h.v.vpttltp.style.left = e.pageX-10-$(this).offset().left+"px";
		if(h.thumbnail != undefined){
		h.v.vppsf.style.left = e.pageX-(Math.abs(12-(h.thumbnail.width)/2))-$(this).offset().left+"px";
		}

		h.v.vpttltp.innerText = sm(sktmtlp(e, $(this)));
		if(h.thumbnail != undefined){
		skthm(e, $(this));
		}
	}

	function skthm(e, t){
		var pv = h.thumbnail.width,ph=h.thumbnail.height,nh=h.thumbnail.nh,nv=h.thumbnail.nv;
		var defaultSec = Math.floor(sktmtlp(e, t));
		var sec = Math.floor(defaultSec/h.thumbnail.secPerFrame);
		var tsld = (nv*nh)*h.thumbnail.secPerFrame;
		var tslds = tsld*h.thumbnail.thumbnailUrl.length;
		h.v.vppsf.style.background = "url('"+h.thumbnail.thumbnailUrl[(Math.ceil(defaultSec/tsld)-1)]+"')";
		h.v.vppsf.style.backgroundPosition = (-((sec%nh)+1-1)*pv)+"px "+(-((Math.ceil((sec+1)/nh)-1)*ph))+"px";
		h.v.vppsf.style.backgroundSize = (nh*pv)+"px "+(nv*ph)+"px";
		h.v.vppsf.style.height = ph+"px";
		h.v.vppsf.style.width = pv+"px";
	}

	function vpse(e){
	if(h.qfl){
		$(h.v.vpqc).fadeIn(100);
		h.qfl = false;
	}else{
		if($(h.v.vpqc).is(':visible')){
			$(h.v.vpqc).fadeOut(100);
			h.qfl = true;
		}
	}
	}

	function vpsl(e){
	if(!h.qfl){
		if(!(h.v.vppls.contains(e.target))){
			$(h.v.vpqc).fadeOut(100);
			h.qfl = true;
		}
	}
	if(!h.pspfl){
		if(!(h.v.vpplspc.contains(e.target))){
			$(h.v.vpplsps).fadeOut(100);
			h.pspfl = true;
		}
	}
	if(h.v.pc.contains(e.target)){
		h.kypffl = true;
	}else{
		h.kypffl = false;
	}
	}

	function vppspe(e){
	if(h.pspfl){
		$(h.v.vpplsps).fadeIn(100);
		h.pspfl = false;
	}else{
		if($(h.v.vpplsps).is(':visible')){
			$(h.v.vpplsps).fadeOut(100);
			h.pspfl = true;
		}
	}
	}

var vmdf = 1;
	function vpve(e){
	if(h.vfl){
		$(h.v.vsl).fadeIn(100);
		h.vfl = false;
	}
	}

	function vpvl(e){
	if(!h.vfl){
		if(vmdf == 1){
		$(h.v.vsl).fadeOut(100);
	}
		h.vfl = true;
	}
	}
	
	function vmd(e){
		if(e.which == 3){
    		return false;
    	}
  		vmdf = 0;
  		vlsevn(e);	
   	}

   	function vmm(e){
   		if(vmdf == 0){
    		vlsevn(e);
    	}
   	}

   	function vmu(e){
   		 if(e.which == 3){
	    	return false;
	    }
    	if(vmdf == 0){
    }
    	vmdf = 1;
    	if(!($(h.v.vsl).is(':hover')) && !($(h.v.vpplv).is(':hover'))){
    		$(h.v.vsl).fadeOut(100);
    	}
   	}

   	function vlsevn(e){
   		h.v.vlvl = Math.floor(100-(e.pageY-$(h.v.vsl).offset().top-parseInt(cmpstl(h.v.vsl))));
    		if(h.v.vlvl <= 100){
    			h.v.vslb.style.height = h.v.vlvl+"%";
    			h.v.vel.volume = (h.v.vlvl/100) < 0? 0:(h.v.vlvl/100);
    			h.nd().cookie = "volume="+h.v.vel.volume;
				h.nd().cookie = "volumeHeight="+h.v.vslb.style.height;
    			h.v.vlmps = h.v.vlvl;
    			vctlf(h.v.vlvl);
    		}
   	}

   	function cmpstl(e){
   		var s = e.currentStyle || window.getComputedStyle(e);
   		return s.padding;
   	}

   	function vctlf(e){
   		if(e > 50){
    		h.v.vpplvh.setAttribute("class","vp-video-player-volume-high-container");
    		h.v.vpplvl.setAttribute("class","vp-video-player-volume-low-container controlHide");
    		h.v.vpplvm.setAttribute("class","vp-video-player-volume-mute-container controlHide");
    	}
    	if(e < 50){
    		h.v.vpplvh.setAttribute("class","vp-video-player-volume-high-container controlHide");
    		h.v.vpplvl.setAttribute("class","vp-video-player-volume-low-container");
    		h.v.vpplvm.setAttribute("class","vp-video-player-volume-mute-container controlHide");
    	}
    	if(e <= 0){
    		h.v.vpplvh.setAttribute("class","vp-video-player-volume-high-container controlHide");
    		h.v.vpplvl.setAttribute("class","vp-video-player-volume-low-container controlHide");
    		h.v.vpplvm.setAttribute("class","vp-video-player-volume-mute-container");
    	}
   	}

   	function vmt(e){
   		if(h.v.vlmf){
   			vctlf(0);
   			h.v.vel.volume = 0;
   			h.v.vslb.style.height = 0+"%"
   			h.nd().cookie = "volume="+h.v.vel.volume;
			h.nd().cookie = "volumeHeight="+h.v.vslb.style.height;
   			h.v.vlmf = false;
   		}else{
   			vctlf(h.v.vlmps);
   			h.v.vel.volume = (h.v.vlmps/100);
   			h.v.vslb.style.height = h.v.vlmps+"%"
   			h.nd().cookie = "volume="+h.v.vel.volume;
			h.nd().cookie = "volumeHeight="+h.v.vslb.style.height;
   			h.v.vlmf = true;
   		}
   	}

   	function plysp(e){
   		for(var i=0; i<h.sp.length; i++){
			h.sp[i].className = "vp-video-player-playback-select-list";
		}
		this.className = "vp-video-player-playback-select-list optionHover";
		h.v.vel.playbackRate = parseFloat(this.getAttribute("id"));
   		h.ct(h.v.vpplsp, parseFloat(this.getAttribute("id"))+"x");
   	}

   	function qltp(e){
   		h.qtyfl = true;
   		for(var i=0; i<h.qlt.length; i++){
			h.qlt[i].className = "vp-video-player-quality-popup";
		}
		this.className = "vp-video-player-quality-popup optionHover";
		h.qltcrtm = h.v.vel.currentTime;
		loadManifest(h.manifestUrl[parseFloat(this.getAttribute("id"))], h.v.vel);
		if(h.fsf == 1){
		h.fsf = 0;
		}else{
		h.fsf = 1;
		}
		vpfs();

   	}

   	function strot(e){
   		this.className = "vp-video-player-quality-setting-container rotate";
   	}

   function strrot(e){
   		this.className = "vp-video-player-quality-setting-container";
   	}

   	function kypf(e){
   		if(h.kypffl){
   			
   			mscnt();
   		if(e.which == 32){
   			e.preventDefault();
   			vplpa();
   			fpn();
   			scnt();
   		
   		}
   		if(e.which == 39){
   			e.preventDefault();
   			h.v.vel.currentTime = (h.v.vel.currentTime+2);
   		}
   		if(e.which == 37){
   			e.preventDefault();
   			h.v.vel.currentTime = (h.v.vel.currentTime-2);
   		}
   	}
   	}
   	
   	function ppan(e){
   		e.preventDefault();
   		if(h.v.pc.contains(h.ab)){
   			h.v.pc.removeChild(h.ab);
   		}
   		if(e.which == 3){
   			h.ab = h.d("a", [{
			a : "class",
			v : "vp-player-about"
			},{
			a:"href",
			v:"https://github.com/rvprasath/vpplayer"
			},{
			a:"target",
			v: "_blank"
			}],"vpplayer v1.0",undefined);

			h.v.pc.appendChild(h.ab);
			var t = (parseInt($(h.v.pc).parents().css("margin-top")) == 0)?(parseInt($(h.v.pc).parents().css("padding-top")) == 0)?parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).parents().css("padding-top"))+parseInt($(h.v.pc).parents().offset().top):parseInt($(h.v.pc).offset().top);
			var l = e.pageX-$(this).offset().left
			h.ab.style.top = (e.pageY-t-1)+"px";
			h.ab.style.left = l+"px";

   		}
   		if(e.which == 1){
   		if(h.v.ol.getAttribute("class") != ""){
   		if(h.v.ol.getAttribute("class").split(" ")[1] == "fplay"){
   			h.sctlf = true;
   			$(h.v.ol).fadeIn(150);
   			
   		}
   	}
   		if(!isNaN(h.v.vel.duration)){
   			vplpa();
   			fpn();
   		}
   		scnt();
   			mscnt();
   		}
   	}
   	
   	function fpn(e){
			if(h.ppf == 0){
			h.v.ol.setAttribute("class", "play-animate");
			}else{
				if(h.v.ol.getAttribute("class") == "play-animate"){
				h.v.ol.setAttribute("class", "");
				}			
				setTimeout(function(){
					h.v.ol.setAttribute("class", "pause-animate");
					setTimeout(function(){
						if(h.v.ol.getAttribute("class") == "pause-animate"){
						h.v.ol.setAttribute("class", "");
						}
					},500);
				},100);
			}
   	}

   	function scnt(e){
   		if(h.sctlf){
   		$(h.v.vpctl).stop().fadeIn(150);
   		$(h.v.gt).stop().fadeIn(150);
   		h.v.pc.style.cursor = "default";
   		}
   	}

   	var t;
   	function mscnt(e){
   		h.v.pc.style.cursor = "default";
   		if(h.sctlf){
   		if(t !== undefined){
   			window.clearTimeout(t);
   		if(!($(h.v.vpctl).is(':visible'))){
   		$(h.v.vpctl).fadeIn(150);
   		$(h.v.gt).fadeIn(150);
   		}
   		}
   		if(h.ppf == 1){
   		t = setTimeout(function(){
   			if(!($(h.v.vpctl).is(':hover'))){
   			h.v.pc.style.cursor = "none";
   			if(pmdf == 1){
   			$(h.v.vpctl).fadeOut(150);
   			$(h.v.gt).fadeOut(150);
   		}
   			}
   		},2000);
   	}
   }
   	}

   	function hcnt(e){
   		if(h.sctlf){
   			if(h.ppf == 1){
   			if(pmdf == 1){
   		$(h.v.vpctl).stop().fadeOut(150);
   		$(h.v.gt).stop().fadeOut(150);	
   	}
   	}
   	}
   	}

   	function cntx(event){
   		event.preventDefault();
   		return true;
   	}

   	function cntxcl(e){
   		if(h.v.pc.contains(h.ab)){
		h.v.pc.removeChild(h.ab);
   		}
	}

   	function loadManifest(mpd, elm){
   		var pl = h.d("video", [{
			a : "id",
			v : "vp-video-player"
		},{
			a:"src",
			v:""
		}],undefined,undefined);
	
		h.v.vel.remove();
		h.v.vel = pl;
   		h.v.vec.appendChild(h.v.vel);
   		h.mpd = mpd;
   		h.elm = h.v.vel;
   		vplpa();
   		initPlayerSupport();
   		vlprv();
   	}
   	
   	function vlprv(e){
   		var cv = ck("volume");
		var ckv = ck("volumeHeight");
   		if(cv != "" && cv != null){
			h.v.vel.volume = cv;
		}else{
			h.v.vel.volume = 0.8;
		}
		if(ckv != "" && ckv != null){
			h.v.vslb.style.height = ckv;
		}else{
			h.v.vslb.style.height = 80+"%";
		}
   	}

   	function cnpl(){
	 	ivp();
	 	if(h.qtyfl){
	    vplpa();
	 	}
	    if(h.qltcrtm != undefined){
		    h.v.vel.currentTime = h.qltcrtm;
		}
	    h.qtyfl = false;
}

	function ck(e){
		    var v = e + "=";
		    var dc = document.cookie;
		    var ca = dc.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(v) == 0) {
		            return c.substring(v.length, c.length);
		        }
		    }
		    return "";
}

   	function initPlayerSupport() {
		  shaka.polyfill.installAll();
		  if (shaka.Player.isBrowserSupported()) {
		    initPlayer();
		  } else {
		    console.error('Browser not supported!');
		  }
	}

		function initPlayer() {
		  var player = new shaka.Player(h.elm);
		  player.configure({
			  preferredTextLanguage: 'el',
			  streaming: {
			    bufferingGoal: h.shakaBufferingGoal
				}
		});
		  window.player = player;
		  player.addEventListener('error', onErrorEvent);
		  player.load(h.mpd).then(function() {
		    console.log('The video has now been loaded!');
		    h.v.vel.onloadeddata = function(){
		   cnpl();
		    }
		  }).catch(onError);
		}

		var onErrorEvent = function(event) {
		  onError(event.detail);
		}

		var onError = function(error) {
		  console.error('Error code', error.code, 'object', error);
		}
};
}(jQuery));
