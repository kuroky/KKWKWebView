var base;
!
function(t) {
	var e = function() {
			function t() {
				this._totalReqsCount = 0, this._loadedReqsCount = 0, this._textures = []
			}
			var e = (__define, t);
			return p = e.prototype, p.loadUrl = function(t, e, h, i, s) {
				this._textures.length = 0, this._totalReqsCount = t.length, this._loadedReqsCount = 0, this._endCallback = e, this._endCallbackThis = h, this._proCallback = i, this._proCallbackThis = s;
				for (var a = 0, g = t.length; g > a; ++a) {
					var d = new egret.URLLoader;
					d.dataFormat = egret.URLLoaderDataFormat.TEXTURE, d.addEventListener(egret.Event.COMPLETE, this.oneLoadFinish, this), d.addEventListener(egret.IOErrorEvent.IO_ERROR, this.oneError, this), d.load(new egret.URLRequest(t[a]))
				}
			}, p.oneError = function() {
				console.warn("resource load failed!"), void 0 != this._proCallback && this._proCallback.call(this._proCallbackThis, this._loadedReqsCount + 1, this._totalReqsCount), ++this._loadedReqsCount >= this._totalReqsCount && void 0 != this._endCallback && this._endCallback.call(this._endCallbackThis, this._textures)
			}, p.oneLoadFinish = function(t) {
				this._textures.push(t.target.data), void 0 != this._proCallback && this._proCallback.call(this._proCallbackThis, this._loadedReqsCount + 1, this._totalReqsCount), ++this._loadedReqsCount >= this._totalReqsCount && void 0 != this._endCallback && this._endCallback.call(this._endCallbackThis, this._textures)
			}, t
		}();
	t.PictureLoader = e, egret.registerClass(e, "base.PictureLoader")
}(base || (base = {}));
var base;
!
function(t) {
	var e = function() {
			function t() {}
			var e = (__define, t);
			return p = e.prototype, p.init = function() {
				var t = window;
				this.jsTunnel = t.jsTunnel;
				var e = this;
				this.jsTunnel.egretCallBack = function(t) {
					e.callBack(t)
				}
			}, p.callExtendJs = function(t) {
				return this.jsTunnel.callExtend.apply(void 0, t)
			}, p.callBack = function(t) {
				console.log("in callBack", t)
			}, t
		}();
	t.JsTunnel = e, egret.registerClass(e, "base.JsTunnel");
	var h = function(t) {
			function e() {
				t.call(this), this._wxPhotos = []
			}
			__extends(e, t);
			var h = (__define, e);
			return p = h.prototype, p.play = function(t) {
				this._wxPhotos = t, this.start()
			}, p.start = function() {}, e
		}(egret.DisplayObjectContainer);
	t.Player = h, egret.registerClass(h, "base.Player")
}(base || (base = {}));
var m20;
!
function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addBg, this)
			}
			__extends(e, t);
			var h = (__define, e);
			return p = h.prototype, p.addBg = function() {
				this.stage_width = this.stage.stageWidth, this.stage_height = this.stage.stageHeight, this.bg_one()
			}, p.bg_one = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_bg_1"), e.width = this.stage_width, e.height = this.stage_height, t.addChild(e);
				var h = new egret.Bitmap;
				h.texture = RES.getRes("m20_yunduo.yd_1");
				var i = h.width / h.height;
				h.width = .7 * this.stage_width, h.height = h.width / i, h.x = 0, h.y = 0, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_t");
				var a = s.width / s.height;
				s.width = .12 * this.stage_width, s.height = s.width / a, s.anchorOffsetX = s.width / 2, s.anchorOffsetY = 0, s.x = .12 * this.stage_width, s.y = .07 * this.stage_height, t.addChild(s), egret.Tween.get(s, {
					loop: !0
				}).to({
					rotation: -5
				}, 250).to({
					rotation: 0
				}, 250).to({
					rotation: 5
				}, 250).to({
					rotation: 0
				}, 250);
				var g = new egret.Bitmap;
				g.texture = RES.getRes("m20_x");
				var d = g.width / g.height;
				g.width = .15 * this.stage_width, g.height = g.width / d, g.anchorOffsetX = g.width / 2, g.anchorOffsetY = 0, g.x = .23 * this.stage_width, g.y = .12 * this.stage_height, t.addChild(g);
				var r = new egret.Bitmap;
				r.texture = RES.getRes("m20_h");
				var n = r.width / r.height;
				r.width = .15 * this.stage_width, r.height = r.width / n, r.anchorOffsetX = r.width / 2, r.anchorOffsetY = 0, r.x = .35 * this.stage_width, r.y = .06 * this.stage_height, t.addChild(r), egret.Tween.get(r, {
					loop: !0
				}).to({
					rotation: -5
				}, 250).to({
					rotation: 0
				}, 250).to({
					rotation: 5
				}, 250).to({
					rotation: 0
				}, 250);
				var w = new egret.Bitmap;
				w.texture = RES.getRes("m20_y");
				var o = w.width / w.height;
				w.width = .17 * this.stage_width, w.height = w.width / o, w.anchorOffsetX = w.width / 2, w.anchorOffsetY = 0, w.x = .47 * this.stage_width, w.y = .11 * this.stage_height, t.addChild(w), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.bg_two()
				}, this, 28500)
			}, p.bg_two = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_bg_2"), e.width = this.stage_width, e.height = this.stage_height, t.addChild(e);
				var h = new egret.Bitmap;
				h.texture = RES.getRes("m20_p4");
				var i = h.width / h.height;
				h.width = .3 * this.stage_width, h.height = h.width / i, h.x = this.stage_width, h.y = .2 * this.stage_height, t.addChild(h), egret.Tween.get(h, {
					loop: !0
				}).to({
					x: -h.width,
					y: .05 * -this.stage_height
				}, 1e4), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.bg_three()
				}, this, 34e3)
			}, p.bg_three = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_bg_3"), e.width = this.stage_width, e.height = this.stage_height, t.addChild(e), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.bg_one()
				}, this, 27e3)
			}, e
		}(egret.DisplayObjectContainer);
	t.Background = e, egret.registerClass(e, "m20.Background")
}(m20 || (m20 = {}));
var m20;
!
function(t) {
	var e = function(t) {
			function e(e) {
				t.call(this), this.idx = 0, this.a = 0, this.b = 0, this.texturs = e, this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addPicture, this)
			}
			__extends(e, t);
			var h = (__define, e);
			return p = h.prototype, p.addPicture = function() {
				this.stage_width = this.stage.stageWidth, this.stage_height = this.stage.stageHeight, egret.setTimeout(function() {
					this.p_1()
				}, this, 1e3)
			}, p.p_1 = function() {
				var t = new egret.Sprite;
				t.width = .85 * this.stage_width, t.height = 1.2 * t.width, t.x = this.stage_width + t.width / 2, t.y = .25 * this.stage_height + t.height / 2, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, t.scaleX = t.scaleY = .3;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t), egret.Tween.get(t).to({
					x: this.stage_width / 2,
					scaleX: 1,
					scaleY: 1,
					rotation: 360
				}, 1e3);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .83 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = t.width / 2, h.y = t.height / 2, h.anchorOffsetX = h.width / 2, h.anchorOffsetY = h.height / 2, t.addChild(h), egret.Tween.get(t).wait(3e3).to({
					alpha: 0
				}, 1e3), egret.setTimeout(function() {
					this.removeChild(t), this.p12()
				}, this, 4e3)
			}, p.p12 = function() {
				var t = new egret.Bitmap;
				t.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var e = t.width / t.height;
				t.width = .8 * this.stage_width, t.height = t.width / e, t.x = this.stage_width / 2, t.y = this.stage_height / 2, t.scaleX = t.scaleY = .3, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, this.addChild(t), egret.Tween.get(t).to({
					scaleX: 1,
					scaleY: 1
				}, 2e3), egret.Tween.get(t).wait(3e3).to({
					alpha: 0
				}, 1e3), egret.setTimeout(function() {
					this.removeChild(t), this.p2()
				}, this, 4e3)
			}, p.p2 = function() {
				this.a++;
				var t = new egret.Bitmap;
				t.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var e = t.width / t.height;
				t.width = .8 * this.stage_width, t.height = t.width / e, t.x = 1.5 * -t.width, t.y = this.stage_height / 2, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, t.scaleX = t.scaleY = .5, this.addChild(t), egret.Tween.get(t).to({
					x: .5 * this.stage_width,
					rotation: 360
				}, 1e3).to({
					scaleX: 1.1,
					scaleY: 1.1
				}, 2e3).wait(250).to({
					scaleX: .5,
					scaleY: .5
				}, 1e3).to({
					x: this.stage_width + t.width / 2,
					rotation: 720,
					alpha: 0
				}, 1e3), egret.setTimeout(function() {
					this.a++, this.a > 4 ? (this.a = 0, this.removeChild(t), this.p3()) : (this.removeChild(t), this.p2())
				}, this, 5500)
			}, p.p3 = function() {
				var t = new egret.Bitmap;
				t.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var e = t.width / t.height;
				t.width = .8 * this.stage_width, t.height = t.width / e, t.x = this.stage_width / 2, t.y = this.stage_height / 2, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, this.addChild(t);
				var h = new egret.Shape;
				h.graphics.beginFill(16711680, 1), h.graphics.drawRect(0, 0, t.width, t.height), h.graphics.endFill(), h.y = -t.height, this.addChild(h), t.mask = h, egret.Tween.get(h).to({
					y: 0
				}, 1e3), egret.Tween.get(t).wait(2e3).to({
					scaleX: 0
				}, 1e3).call(function() {
					this.removeChild(t), this.p4()
				}, this)
			}, p.p4 = function() {
				var t = new egret.Bitmap;
				t.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var e = t.width / t.height;
				t.width = .8 * this.stage_width, t.height = t.width / e, t.x = 1.5 * -t.width, t.y = this.stage_height / 2, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, this.addChild(t), egret.Tween.get(t).to({
					x: .5 * this.stage_width
				}, 2e3).to({
					scaleX: 1.1,
					scaleY: 1.1
				}, 2e3).to({
					scaleX: .5,
					scaleY: .5,
					x: .35 * this.stage_width,
					y: .45 * this.stage_height,
					rotation: -390
				}, 1e3).wait(7e3).to({
					alpha: 0
				}, 1e3).call(function() {
					this.removeChild(t)
				}, this);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx];
				var i = h.width / h.height;
				h.width = .8 * this.stage_width, h.height = h.width / i, h.x = this.stage_width + .5 * h.width, h.y = this.stage_height / 2, h.anchorOffsetX = h.width / 2, h.anchorOffsetY = h.height / 2, this.addChild(h), egret.Tween.get(h).wait(6e3).to({
					x: .5 * this.stage_width
				}, 2e3).to({
					scaleX: 1.1,
					scaleY: 1.1
				}, 2e3).to({
					scaleX: .5,
					scaleY: .5,
					x: .75 * this.stage_width,
					y: .7 * this.stage_height,
					rotation: -330
				}, 1e3).wait(2e3).to({
					alpha: 0
				}, 1e3).call(function() {
					this.removeChild(h)
				}, this), egret.setTimeout(function() {
					this.p5()
				}, this, 14e3)
			}, p.p5 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = 0, t.y = 0, this.addChild(t);
				var e = new egret.Sprite;
				e.width = .47 * this.stage_width, e.height = e.width, e.x = 0, e.y = .01 * this.stage_height, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.rotation = 90;
				var h = new egret.Rectangle(0, 0, e.width, e.height);
				e.mask = h, t.addChild(e), egret.Tween.get(e).to({
					x: .02 * this.stage_width,
					rotation: 0
				}, 1e3);
				var i = new egret.Bitmap;
				i.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var s = i.width / i.height;
				s > 1 ? (i.height = e.height, i.width = i.height * s) : (i.width = e.width, i.height = i.width / s), i.x = (e.width - i.width) / 2, i.y = (e.height - i.height) / 2, e.addChild(i);
				var a = new egret.Sprite;
				a.width = .47 * this.stage_width, a.height = a.width, a.x = .53 * this.stage_width + a.width, a.y = .01 * this.stage_height, a.anchorOffsetX = a.width, a.anchorOffsetY = 0, a.rotation = -90;
				var g = new egret.Rectangle(0, 0, a.width, a.height);
				a.mask = g, t.addChild(a), egret.Tween.get(a).to({
					x: .51 * this.stage_width + a.width,
					rotation: 0
				}, 1e3);
				var d = new egret.Bitmap;
				d.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var r = d.width / d.height;
				r > 1 ? (d.height = a.height, d.width = d.height * r) : (d.width = a.width, d.height = d.width / r), d.x = (a.width - d.width) / 2, d.y = (a.height - d.height) / 2, a.addChild(d);
				var n = new egret.Sprite;
				n.width = .47 * this.stage_width, n.height = n.width, n.x = 0, n.y = .32 * this.stage_height + n.height, n.anchorOffsetX = 0, n.anchorOffsetY = n.height, n.rotation = -90;
				var w = new egret.Rectangle(0, 0, n.width, n.height);
				n.mask = w, t.addChild(n), egret.Tween.get(n).wait(1e3).to({
					x: .02 * this.stage_width,
					rotation: 0
				}, 1e3);
				var o = new egret.Bitmap;
				o.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var _ = o.width / o.height;
				_ > 1 ? (o.height = n.height, o.width = o.height * _) : (o.width = n.width, o.height = o.width / _), o.x = (n.width - o.width) / 2, o.y = (n.height - o.height) / 2, n.addChild(o);
				var l = new egret.Sprite;
				l.width = .47 * this.stage_width, l.height = l.width, l.x = .53 * this.stage_width + l.width, l.y = .32 * this.stage_height + l.height, l.anchorOffsetX = l.width, l.anchorOffsetY = l.height, l.rotation = 90;
				var x = new egret.Rectangle(0, 0, l.width, l.height);
				l.mask = x, t.addChild(l), egret.Tween.get(l).wait(1e3).to({
					x: .51 * this.stage_width + l.width,
					rotation: 0
				}, 1e3);
				var c = new egret.Bitmap;
				c.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var u = c.width / c.height;
				u > 1 ? (c.height = l.height, c.width = c.height * u) : (c.width = l.width, c.height = c.width / u), c.x = (l.width - c.width) / 2, c.y = (l.height - c.height) / 2, l.addChild(c), egret.Tween.get(t).wait(4e3).to({
					y: -this.stage_height
				}, 1e3).call(function() {
					this.removeChild(t), this.p6()
				}, this)
			}, p.p6 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = 1.3 * t.width, t.x = 0, t.y = -this.stage_height;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_center_mask"), s.width = 2 * t.width, s.height = 2 * t.height, s.anchorOffsetX = s.width / 2, s.anchorOffsetY = s.height / 2, s.x = t.width / 2, s.y = t.height / 2, t.addChild(s), egret.Tween.get(t).to({
					y: (this.stage_height - t.height) / 2
				}, 1e3).wait(3e3).to({
					x: -this.stage_width
				}, 1e3).call(function() {
					this.removeChild(t), this.p7()
				}, this), egret.Tween.get(s).wait(1e3).to({
					x: .2 * t.width,
					y: .7 * t.height
				}, 250).to({
					x: .2 * t.width,
					y: .2 * t.height
				}, 250).to({
					x: .6 * t.width,
					y: .2 * t.height
				}, 250).to({
					x: .5 * t.width,
					y: .5 * t.height
				}, 250).to({
					scaleX: 5,
					scaleY: 5
				}, 1e3)
			}, p.p7 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = 1.3 * t.width, t.x = 0, t.y = -this.stage_height;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_center_mask"), s.width = 2 * t.width, s.height = 2 * t.height, s.anchorOffsetX = s.width / 2, s.anchorOffsetY = s.height / 2, s.x = t.width / 2, s.y = t.height / 2, t.addChild(s), egret.Tween.get(t).to({
					y: (this.stage_height - t.height) / 2
				}, 1e3).wait(3e3).to({
					x: -this.stage_width
				}, 1e3).call(function() {
					this.removeChild(t), this.p8()
				}, this), egret.Tween.get(s).wait(1e3).to({
					x: .2 * t.width,
					y: .7 * t.height
				}, 250).to({
					x: .2 * t.width,
					y: .2 * t.height
				}, 250).to({
					x: .6 * t.width,
					y: .2 * t.height
				}, 250).to({
					x: .5 * t.width,
					y: .5 * t.height
				}, 250).to({
					scaleX: 5,
					scaleY: 5
				}, 1e3)
			}, p.p8 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = 1.3 * t.width, t.x = 0, t.y = -this.stage_height;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_top_mask"), s.width = t.width, s.height = .5 * t.height, s.x = 0, s.y = 0, t.addChild(s);
				var a = new egret.Bitmap;
				a.texture = RES.getRes("m20_bottom_mask"), a.width = t.width, a.height = .5 * t.height, a.x = 0, a.y = .5 * t.height, t.addChild(a), egret.Tween.get(t).to({
					y: (this.stage_height - t.height) / 2
				}, 1e3).wait(3e3).to({
					x: -this.stage_width
				}, 1e3).call(function() {
					this.removeChild(t), this.p9()
				}, this), egret.Tween.get(s).wait(1e3).to({
					y: -t.height / 2
				}, 1e3), egret.Tween.get(a).wait(1e3).to({
					y: t.height
				}, 1e3)
			}, p.p9 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = 1.3 * t.width, t.x = 0, t.y = -this.stage_height;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_top_mask"), s.width = t.width, s.height = .5 * t.height, s.x = 0, s.y = 0, t.addChild(s);
				var a = new egret.Bitmap;
				a.texture = RES.getRes("m20_bottom_mask"), a.width = t.width, a.height = .5 * t.height, a.x = 0, a.y = .5 * t.height, t.addChild(a), egret.Tween.get(t).to({
					y: (this.stage_height - t.height) / 2
				}, 1e3).wait(3e3).to({
					x: -this.stage_width
				}, 1e3).call(function() {
					this.removeChild(t), this.p10()
				}, this), egret.Tween.get(s).wait(1e3).to({
					y: -t.height / 2
				}, 1e3), egret.Tween.get(a).wait(1e3).to({
					y: t.height
				}, 1e3)
			}, p.p10 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = 1.3 * t.width, t.x = 0, t.y = -this.stage_height;
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_hui_mask"), s.width = t.width, s.height = t.height, s.x = 0, s.y = 0, t.addChild(s), egret.Tween.get(t).to({
					y: (this.stage_height - t.height) / 2
				}, 1e3).wait(3e3).to({
					x: -this.stage_width
				}, 1e3).call(function() {
					this.removeChild(t), this.p11()
				}, this), egret.Tween.get(s).wait(1e3).to({
					y: -t.height
				}, 1e3)
			}, p.p11 = function() {
				this.b++;
				var t = new egret.Sprite;
				t.width = .6 * this.stage_width, t.height = 1.3 * t.width, t.x = -t.width, t.y = .4 * (this.stage_height - t.height);
				var e = new egret.Rectangle(0, 0, t.width, t.height);
				t.mask = e, this.addChild(t);
				var h = new egret.Bitmap;
				h.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var i = h.width / h.height;
				i > .77 ? (h.height = t.height, h.width = h.height * i) : (h.width = t.width, h.height = h.width / i), h.x = (t.width - h.width) / 2, h.y = (t.height - h.height) / 2, t.addChild(h), egret.Tween.get(t).to({
					x: .75 * -t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).to({
					x: .5 * -t.width,
					y: (this.stage_height - t.height) / 2
				}, 250).to({
					x: .25 * -t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).to({
					x: 0,
					y: (this.stage_height - t.height) / 2
				}, 250).to({
					x: .25 * t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).wait(1e3).to({
					x: .5 * t.width,
					y: (this.stage_height - t.height) / 2
				}, 250).to({
					x: .75 * t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).to({
					x: t.width,
					y: (this.stage_height - t.height) / 2
				}, 250).to({
					x: 1.25 * t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).to({
					x: 1.5 * t.width,
					y: (this.stage_height - t.height) / 2
				}, 250).to({
					x: 1.75 * t.width,
					y: (this.stage_height - t.height) / 2 + .05 * this.stage_height
				}, 250).to({
					x: 2 * t.width,
					y: (this.stage_height - t.height) / 2
				}, 250), egret.setTimeout(function() {
					this.b++, this.b > 4 ? (this.b = 0, this.removeChild(t), this.p13()) : (this.removeChild(t), this.p11())
				}, this, 4e3)
			}, p.p13 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = 0, t.y = 0, this.addChild(t), egret.Tween.get(t).wait(4e3).to({
					y: this.stage_height
				}, 1e3);
				var e = new egret.Sprite;
				e.width = 260, e.height = 1.2 * e.width, e.x = .5 * this.stage_width, e.y = -e.height, e.anchorOffsetX = e.width / 2, e.anchorOffsetY = e.height / 2;
				var h = new egret.Rectangle(0, 0, e.width, e.height);
				e.mask = h, t.addChild(e);
				var i = new egret.Bitmap;
				i.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var s = i.width / i.height;
				s > .83 ? (i.height = e.height, i.width = i.height * s) : (i.width = e.width, i.height = i.width / s), i.x = (e.width - i.width) / 2, i.y = (e.height - i.height) / 2, e.addChild(i), egret.Tween.get(e).to({
					y: .18 * this.stage_height
				}, 1e3);
				var a = new egret.Sprite;
				a.width = 208, a.height = 1.2 * a.width, a.x = 0, a.y = .5 * this.stage_height, a.anchorOffsetX = 0, a.anchorOffsetY = a.height, a.rotation = -90;
				var g = new egret.Rectangle(0, 0, a.width, a.height);
				a.mask = g, t.addChild(a);
				var d = new egret.Bitmap;
				d.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var r = d.width / d.height;
				r > .83 ? (d.height = a.height, d.width = d.height * r) : (d.width = a.width, d.height = d.width / r), d.x = (a.width - d.width) / 2, d.y = (a.height - d.height) / 2, a.addChild(d), egret.Tween.get(a).wait(1e3).to({
					rotation: 45
				}, 1e3);
				var n = new egret.Sprite;
				n.width = 206, n.height = 1.2 * n.width, n.x = this.stage_width, n.y = .5 * this.stage_height, n.anchorOffsetX = n.width, n.anchorOffsetY = n.height, n.rotation = 90;
				var w = new egret.Rectangle(0, 0, n.width, n.height);
				n.mask = w, t.addChild(n);
				var o = new egret.Bitmap;
				o.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var _ = o.width / o.height;
				_ > .83 ? (o.height = n.height, o.width = o.height * _) : (o.width = n.width, o.height = o.width / _), o.x = (n.width - o.width) / 2, o.y = (n.height - o.height) / 2, n.addChild(o), egret.Tween.get(n).wait(1e3).to({
					rotation: -45
				}, 1e3);
				var l = new egret.Sprite;
				l.width = 260, l.height = 1.2 * l.width, l.x = .5 * this.stage_width, l.y = -l.height, l.anchorOffsetX = l.width / 2, l.anchorOffsetY = l.height / 2;
				var x = new egret.Rectangle(0, 0, e.width, e.height);
				l.mask = x, t.addChild(l);
				var c = new egret.Bitmap;
				c.texture = this.texturs[this.idx], this.idx = ++this.idx % this.texturs.length;
				var u = c.width / c.height;
				u > .83 ? (c.height = l.height, c.width = c.height * u) : (c.width = l.width, c.height = c.width / u), c.x = (l.width - c.width) / 2, c.y = (l.height - c.height) / 2, l.addChild(c), egret.Tween.get(l).wait(2e3).to({
					y: .755 * this.stage_height
				}, 1e3), egret.setTimeout(function() {
					this.p_1()
				}, this, 5e3)
			}, e
		}(egret.DisplayObjectContainer);
	t.PicturePanel = e, egret.registerClass(e, "m20.PicturePanel")
}(m20 || (m20 = {}));
var m20;
!
function(t) {
	var e = function(e) {
			function h() {
				e.call(this)
			}
			__extends(h, e);
			var i = (__define, h);
			return p = i.prototype, p.start = function() {
				var e = new t.Background;
				this.addChildAt(e, 0);
				var h = new t.PicturePanel(this._wxPhotos);
				this.addChildAt(h, 1);
				var i = new t.TopPanle;
				this.addChildAt(i, 2)
			}, h
		}(base.Player);
	t.Player = e, egret.registerClass(e, "m20.Player")
}(m20 || (m20 = {}));
var m20;
!
function(t) {
	var e = function(t) {
			function e() {
				t.call(this), this.start_1_set = 1, this.start_2_set = 1, this.start_3_set = 1, this.start_4_set = 1, this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addBg, this)
			}
			__extends(e, t);
			var h = (__define, e);
			return p = h.prototype, p.addBg = function() {
				this.stage_width = this.stage.stageWidth, this.stage_height = this.stage.stageHeight, this.top_1()
			}, p.top_1 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_small_person");
				var h = e.width / e.height;
				e.width = .4 * this.stage_width, e.height = e.width / h, e.x = this.stage_width, e.y = .05 * this.stage_height, t.addChild(e), egret.Tween.get(e, {
					loop: !0
				}).to({
					x: .4 * this.stage_width
				}, 4e3).to({
					x: this.stage_width
				}, 4e3);
				var i = new egret.Bitmap;
				i.texture = RES.getRes("m20_star1.star_11"), i.x = .95 * this.stage_width - i.width, i.y = .05 * this.stage_height, t.addChild(i), egret.setInterval(function() {
					this.start_1_set += 1, 2 == this.start_1_set ? i.texture = RES.getRes("m20_star1.star_12") : 3 == this.start_1_set && (this.start_1_set = 1, i.texture = RES.getRes("m20_star1.star_11"))
				}, this, 200);
				var s = new egret.Bitmap;
				s.texture = RES.getRes("m20_star2.star_21");
				var a = s.width / s.height;
				s.width = .15 * this.stage_width, s.height = s.width / a, s.x = .05 * this.stage_width, s.y = .92 * this.stage_height - s.height, t.addChild(s), egret.setInterval(function() {
					this.start_2_set += 1, 2 == this.start_2_set ? s.texture = RES.getRes("m20_star2.star_22") : 3 == this.start_2_set && (this.start_2_set = 1, s.texture = RES.getRes("m20_star2.star_21"))
				}, this, 200);
				var g = new egret.Bitmap;
				g.texture = RES.getRes("m20_star3.star_31");
				var d = g.width / g.height;
				g.width = .15 * this.stage_width, g.height = g.width / d, g.x = .95 * this.stage_width - g.width, g.y = .92 * this.stage_height - g.height, t.addChild(g), egret.setInterval(function() {
					this.start_3_set += 1, 2 == this.start_3_set ? g.texture = RES.getRes("m20_star3.star_32") : 3 == this.start_3_set && (this.start_3_set = 1, g.texture = RES.getRes("m20_star3.star_31"))
				}, this, 200), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.top_2()
				}, this, 28500)
			}, p.top_2 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_p2");
				var h = e.width / e.height;
				e.width = .3 * this.stage_width, e.height = e.width / h, e.x = .05 * this.stage_width, e.y = .4 * this.stage_height, t.addChild(e), egret.Tween.get(e, {
					loop: !0
				}).to({
					y: .42 * this.stage_height
				}, 500).to({
					y: .4 * this.stage_height
				}, 500).to({
					y: .38 * this.stage_height
				}, 500).to({
					y: .4 * this.stage_height
				}, 500);
				var i = new egret.Bitmap;
				i.texture = RES.getRes("m20_p1");
				var s = i.width / i.height;
				i.width = .3 * this.stage_width, i.height = i.width / s, i.x = .65 * this.stage_width, i.y = .5 * this.stage_height, t.addChild(i), egret.Tween.get(i, {
					loop: !0
				}).to({
					y: .48 * this.stage_height
				}, 500).to({
					y: .5 * this.stage_height
				}, 500).to({
					y: .52 * this.stage_height
				}, 500).to({
					y: .5 * this.stage_height
				}, 500);
				var a = new egret.Bitmap;
				a.texture = RES.getRes("m20_p3");
				var g = a.width / a.height;
				a.width = .4 * this.stage_width, a.height = a.width / g, a.x = this.stage_width - a.width, a.y = this.stage_height - a.height, t.addChild(a);
				var d = new egret.Bitmap;
				d.texture = RES.getRes("m20_star1.star_11"), d.x = .95 * this.stage_width - d.width, d.y = .05 * this.stage_height, t.addChild(d), egret.setInterval(function() {
					this.start_1_set += 1, 2 == this.start_1_set ? d.texture = RES.getRes("m20_star1.star_12") : 3 == this.start_1_set && (this.start_1_set = 1, d.texture = RES.getRes("m20_star1.star_11"))
				}, this, 200);
				var r = new egret.Bitmap;
				r.texture = RES.getRes("m20_star2.star_21");
				var n = r.width / r.height;
				r.width = .15 * this.stage_width, r.height = r.width / n, r.x = .05 * this.stage_width, r.y = .92 * this.stage_height - r.height, t.addChild(r), egret.setInterval(function() {
					this.start_2_set += 1, 2 == this.start_2_set ? r.texture = RES.getRes("m20_star2.star_22") : 3 == this.start_2_set && (this.start_2_set = 1, r.texture = RES.getRes("m20_star2.star_21"))
				}, this, 200);
				var w = new egret.Bitmap;
				w.texture = RES.getRes("m20_star3.star_31");
				var o = w.width / w.height;
				w.width = .15 * this.stage_width, w.height = w.width / o, w.x = .95 * this.stage_width - w.width, w.y = .92 * this.stage_height - w.height, t.addChild(w), egret.setInterval(function() {
					this.start_3_set += 1, 2 == this.start_3_set ? w.texture = RES.getRes("m20_star3.star_32") : 3 == this.start_3_set && (this.start_3_set = 1, w.texture = RES.getRes("m20_star3.star_31"))
				}, this, 200), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.top_3()
				}, this, 34e3)
			}, p.top_3 = function() {
				var t = new egret.Sprite;
				t.width = this.stage_width, t.height = this.stage_height, t.x = this.stage_width, t.y = 0, this.addChild(t), egret.Tween.get(t).to({
					x: 0
				}, 500);
				var e = new egret.Bitmap;
				e.texture = RES.getRes("m20_p5");
				var h = e.width / e.height;
				e.width = .15 * this.stage_width, e.height = e.width / h, e.x = this.stage_width - e.width, e.y = this.stage_height - e.height, t.addChild(e), egret.Tween.get(e, {
					loop: !0
				}).wait(1e3).to({
					y: this.stage_height
				}, 1e3).to({
					y: this.stage_height - e.height
				}, 1e3);
				var i = new egret.Bitmap;
				i.texture = RES.getRes("m20_p6"), i.x = 0, i.y = .6 * this.stage_height, t.addChild(i), egret.setInterval(function() {
					this.start_4_set += 1, 2 == this.start_4_set ? i.texture = RES.getRes("m20_p7") : 3 == this.start_4_set ? i.texture = RES.getRes("m20_p8") : 4 == this.start_4_set && (this.start_4_set = 1, i.texture = RES.getRes("m20_p6"))
				}, this, 500), egret.setTimeout(function() {
					egret.Tween.get(t).to({
						x: -this.stage_width
					}, 500).call(function() {
						this.removeChild(t)
					}, this), this.top_1()
				}, this, 27e3)
			}, e
		}(egret.DisplayObjectContainer);
	t.TopPanle = e, egret.registerClass(e, "m20.TopPanle")
}(m20 || (m20 = {}));
var Main = function(t) {
		function e() {
			t.call(this), this.jsTunnel = new base.JsTunnel, this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(e, t);
		var h = (__define, e);
		return p = h.prototype, p.onAddToStage = function() {
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), RES.loadConfig(e.resJsonPath, e.resFolder), this.jsTunnel.init(), this.jsTunnel.callExtendJs(["changeLoaderText", "加载模板中"])
		}, p.onConfigComplete = function() {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceError, this), RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.loadGroup("m20")
		}, p.onResourceLoadComplete = function() {
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.jsTunnel.callExtendJs(["changeLoaderText", "加载图片中"]);
			var t = this.jsTunnel.callExtendJs(["getPics"]),
				e = new base.PictureLoader;
			e.loadUrl(t, this.onCreateScene, this, this.onPicProgress, this)
		}, p.onResourceProgress = function(t) {
			this.jsTunnel.callExtendJs(["changeLoaderPro", t.itemsLoaded, t.itemsTotal])
		}, p.onPicProgress = function(t, e) {
			this.jsTunnel.callExtendJs(["changeLoaderPro", t, e])
		}, p.onResourceError = function(t) {
			console.warn("Group:" + t.groupName + " has failed to load"), this.onResourceLoadComplete(t)
		}, p.onCreateScene = function(t) {
			var e = new m20.Player;
			this.addChild(e), e.play(t), this.jsTunnel.callExtendJs(["initFinish"])
		}, e.resStaticDomain = "/mobanxiangce", e.resFolder = e.resStaticDomain + "/Public/Image/", e.resJsonPath = e.resStaticDomain + "/Public/moban/20/resource.json", e
	}(egret.DisplayObjectContainer);
egret.registerClass(Main, "Main");