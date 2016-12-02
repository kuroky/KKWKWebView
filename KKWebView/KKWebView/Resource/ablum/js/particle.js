var particle;!function(t){var e=function(){function t(){this.reset()}var e=(__define,t);return p=e.prototype,p.reset=function(){this.x=0,this.y=0,this.scale=1,this.rotation=0,this.alpha=1,this.currentTime=0,this.totalTime=1e3},t}();t.Particle=e,egret.registerClass(e,"particle.Particle")}(particle||(particle={}));var particle;!function(t){var e=function(e){function i(t,i){e.call(this),this._pool=[],this.frameTime=0,this.particles=[],this._emitterX=0,this._emitterY=0,this.emissionTime=-1,this.maxParticles=200,this.numParticles=0,this.particleClass=null,this.particleMeasureRect=new egret.Rectangle,this.transformForMeasure=new egret.Matrix,this.transformForRender=new egret.Matrix,this.emissionRate=i,this.texture=t,this.$renderRegion=new egret.sys.Region}__extends(i,e);var a=__define,r=i;return p=r.prototype,p.getParticle=function(){var e;return e=this._pool.length?this._pool.pop():this.particleClass?new this.particleClass:new t.Particle},p.removeParticle=function(t){var e=this.particles.indexOf(t);return-1!=e?(t.reset(),this.particles.splice(e,1),this._pool.push(t),this.numParticles--,!0):!1},p.initParticle=function(t){t.x=this.emitterX,t.y=this.emitterY,t.currentTime=0,t.totalTime=1e3},p.updateRelativeBounds=function(t){t?(null==this.relativeContentBounds&&(this.relativeContentBounds=new egret.Rectangle),this.relativeContentBounds.copyFrom(t),this.relativeContentBounds.x+=this.emitterX,this.relativeContentBounds.y+=this.emitterY):this.relativeContentBounds=null,this.mask=this.relativeContentBounds},a(p,"emitterBounds",function(){return this._emitterBounds},function(t){this._emitterBounds=t,this.updateRelativeBounds(t)}),a(p,"emitterX",function(){return this._emitterX},function(t){this._emitterX=t,this.updateRelativeBounds(this.emitterBounds)}),a(p,"emitterY",function(){return this._emitterY},function(t){this._emitterY=t,this.updateRelativeBounds(this.emitterBounds)}),p.start=function(t){void 0===t&&(t=-1),0!=this.emissionRate&&(this.emissionTime=t,egret.Ticker.getInstance().register(this.update,this))},p.stop=function(t){void 0===t&&(t=!1),this.emissionTime=0,egret.Ticker.getInstance().unregister(this.update,this),t&&this.clear()},p.update=function(t){if(-1==this.emissionTime||this.emissionTime>0){for(this.frameTime+=t;this.frameTime>0;)this.numParticles<this.maxParticles&&this.addOneParticle(),this.frameTime-=this.emissionRate;-1!=this.emissionTime&&(this.emissionTime-=t,this.emissionTime<0&&(this.emissionTime=0))}for(var e,i=0;i<this.numParticles;)e=this.particles[i],e.currentTime<e.totalTime?(this.advanceParticle(e,t),e.currentTime+=t,i++):this.removeParticle(e);this.$invalidateContentBounds(),0==this.numParticles&&0==this.emissionTime&&(this.stop(),this.dispatchEventWith(egret.Event.COMPLETE))},p.$measureContentBounds=function(t){if(this.relativeContentBounds)return void t.copyFrom(this.relativeContentBounds);if(this.numParticles>0){for(var e,i=this.texture,a=Math.round(i.$getScaleBitmapWidth()),r=Math.round(i.$getScaleBitmapHeight()),s=egret.Rectangle.create(),n=0;n<this.numParticles;n++){e=this.particles[n],this.transformForMeasure.identity(),this.appendTransform(this.transformForMeasure,e.x,e.y,e.scale,e.scale,e.rotation,0,0,a/2,r/2),this.particleMeasureRect.setEmpty(),this.particleMeasureRect.width=a,this.particleMeasureRect.height=r;var c=egret.sys.Region.create();if(c.updateRegion(this.particleMeasureRect,this.transformForMeasure),0==n)s.setTo(c.minX,c.minY,c.maxX-c.minX,c.maxY-c.minY);else{var l=Math.min(s.x,c.minX),h=Math.min(s.y,c.minY),o=Math.max(s.right,c.maxX),m=Math.max(s.bottom,c.maxY);s.setTo(l,h,o-l,m-h)}egret.sys.Region.release(c)}t.setTo(s.x,s.y,s.width,s.height),egret.Rectangle.release(s)}},p.setCurrentParticles=function(t){for(var e=this.numParticles;t>e&&this.numParticles<this.maxParticles;e++)this.addOneParticle()},p.changeTexture=function(t){this.texture!=t&&(this.texture=t)},p.clear=function(){for(;this.particles.length;)this.removeParticle(this.particles[0]);this.numParticles=0},p.addOneParticle=function(){var t=this.getParticle();this.initParticle(t),t.totalTime>0&&(this.particles.push(t),this.numParticles++)},p.advanceParticle=function(t,e){t.y-=e/6},p.$render=function(t){if(this.numParticles>0){var e=this.texture;t.imageSmoothingEnabled=!1;for(var i,a=Math.round(e.$getScaleBitmapWidth()),r=Math.round(e.$getScaleBitmapHeight()),s=e._offsetX,n=e._offsetY,c=e._bitmapX,l=e._bitmapY,h=e._bitmapWidth,o=e._bitmapHeight,m=0;m<this.numParticles;m++)i=this.particles[m],this.transformForRender.identity(),this.transformForRender.copyFrom(this.$renderMatrix),this.appendTransform(this.transformForRender,i.x,i.y,i.scale,i.scale,i.rotation,0,0,a/2,r/2),t.setTransform(this.transformForRender.a,this.transformForRender.b,this.transformForRender.c,this.transformForRender.d,this.transformForRender.tx,this.transformForRender.ty),t.globalAlpha=i.alpha,t.drawImage(e._bitmapData,c,l,h,o,s,n,a,r)}},p.appendTransform=function(t,e,i,a,r,s,n,c,l,h){if(s%360)var o=s,m=egret.NumberUtils.cos(o),u=egret.NumberUtils.sin(o);else m=1,u=0;return n||c?(t.append(egret.NumberUtils.cos(c),egret.NumberUtils.sin(c),-egret.NumberUtils.sin(n),egret.NumberUtils.cos(n),e,i),t.append(m*a,u*a,-u*r,m*r,0,0)):t.append(m*a,u*a,-u*r,m*r,e,i),(l||h)&&(t.tx-=l*t.a+h*t.c,t.ty-=l*t.b+h*t.d),t},i}(egret.DisplayObject);t.ParticleSystem=e,egret.registerClass(e,"particle.ParticleSystem")}(particle||(particle={}));var particle;!function(t){var e=function(t){function e(){t.apply(this,arguments)}__extends(e,t);var i=(__define,e);return p=i.prototype,p.reset=function(){t.prototype.reset.call(this),this.startX=0,this.startY=0,this.velocityX=0,this.velocityY=0,this.radialAcceleration=0,this.tangentialAcceleration=0,this.rotationDelta=0,this.scaleDelta=0},e}(t.Particle);t.GravityParticle=e,egret.registerClass(e,"particle.GravityParticle")}(particle||(particle={}));var particle;!function(t){var e=function(e){function i(i,a){e.call(this,i,200),this.parseConfig(a),this.emissionRate=this.lifespan/this.maxParticles,this.particleClass=t.GravityParticle}__extends(i,e);var a=(__define,i);return p=a.prototype,p.parseConfig=function(t){function e(t){return"undefined"==typeof t?0:t}if(this.emitterX=e(t.emitter.x),this.emitterY=e(t.emitter.y),this.emitterXVariance=e(t.emitterVariance.x),this.emitterYVariance=e(t.emitterVariance.y),this.gravityX=e(t.gravity.x),this.gravityY=e(t.gravity.y),1==t.useEmitterRect){var i=new egret.Rectangle;i.x=e(t.emitterRect.x),i.y=e(t.emitterRect.y),i.width=e(t.emitterRect.width),i.height=e(t.emitterRect.height),this.emitterBounds=i}this.maxParticles=e(t.maxParticles),this.speed=e(t.speed),this.speedVariance=e(t.speedVariance),this.lifespan=Math.max(.01,e(t.lifespan)),this.lifespanVariance=e(t.lifespanVariance),this.emitAngle=e(t.emitAngle),this.emitAngleVariance=e(t.emitAngleVariance),this.startSize=e(t.startSize),this.startSizeVariance=e(t.startSizeVariance),this.endSize=e(t.endSize),this.endSizeVariance=e(t.endSizeVariance),this.startRotation=e(t.startRotation),this.startRotationVariance=e(t.startRotationVariance),this.endRotation=e(t.endRotation),this.endRotationVariance=e(t.endRotationVariance),this.radialAcceleration=e(t.radialAcceleration),this.radialAccelerationVariance=e(t.radialAccelerationVariance),this.tangentialAcceleration=e(t.tangentialAcceleration),this.tangentialAccelerationVariance=e(t.tangentialAccelerationVariance),this.startAlpha=e(t.startAlpha),this.startAlphaVariance=e(t.startAlphaVariance),this.endAlpha=e(t.endAlpha),this.endAlphaVariance=e(t.endAlphaVariance)},p.initParticle=function(t){var e=t,a=i.getValue(this.lifespan,this.lifespanVariance);if(e.currentTime=0,e.totalTime=a>0?a:0,!(0>=a)){e.x=i.getValue(this.emitterX,this.emitterXVariance),e.y=i.getValue(this.emitterY,this.emitterYVariance),e.startX=this.emitterX,e.startY=this.emitterY;var r=i.getValue(this.emitAngle,this.emitAngleVariance),s=i.getValue(this.speed,this.speedVariance);e.velocityX=s*egret.NumberUtils.cos(r),e.velocityY=s*egret.NumberUtils.sin(r),e.radialAcceleration=i.getValue(this.radialAcceleration,this.radialAccelerationVariance),e.tangentialAcceleration=i.getValue(this.tangentialAcceleration,this.tangentialAccelerationVariance);var n=i.getValue(this.startSize,this.startSizeVariance);.1>n&&(n=.1);var c=i.getValue(this.endSize,this.endSizeVariance);.1>c&&(c=.1);var l=this.texture.textureWidth;e.scale=n/l,e.scaleDelta=(c-n)/a/l;var h=i.getValue(this.startRotation,this.startRotationVariance),o=i.getValue(this.endRotation,this.endRotationVariance);e.rotation=h,e.rotationDelta=(o-h)/a;var m=i.getValue(this.startAlpha,this.startAlphaVariance),u=i.getValue(this.endAlpha,this.endAlphaVariance);e.alpha=m,e.alphaDelta=(u-m)/a}},i.getValue=function(t,e){return t+e*(2*Math.random()-1)},p.advanceParticle=function(t,e){var i=t;e/=1e3;var a=i.totalTime-i.currentTime;e=a>e?e:a,i.currentTime+=e;var r=i.x-i.startX,s=i.y-i.startY,n=Math.sqrt(r*r+s*s);.01>n&&(n=.01);var c=r/n,l=s/n,h=c,o=l;c*=i.radialAcceleration,l*=i.radialAcceleration;var m=h;h=-o*i.tangentialAcceleration,o=m*i.tangentialAcceleration,i.velocityX+=e*(this.gravityX+c+h),i.velocityY+=e*(this.gravityY+l+o),i.x+=i.velocityX*e,i.y+=i.velocityY*e,i.scale+=i.scaleDelta*e*1e3,i.rotation+=i.rotationDelta*e*1e3,i.alpha+=i.alphaDelta*e*1e3},i}(t.ParticleSystem);t.GravityParticleSystem=e,egret.registerClass(e,"particle.GravityParticleSystem")}(particle||(particle={}));