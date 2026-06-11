"use strict";
(self.webpackChunktowerrush = self.webpackChunktowerrush || []).push([
    [300], {
        8440: (t, e, i) => {
            i.d(e, {
                M: () => o,
                x: () => a
            });
            var s = i(1851),
                r = i(8820);
            const n = class t {
                constructor(e) {
                    this.stage = new r.W2, e = Object.assign({
                        forceCanvas: !1
                    }, e), this.renderer = (0, s.e6)(e), t._plugins.forEach((t => {
                        t.init.call(this, e)
                    }))
                }
                render() {
                    this.renderer.render(this.stage)
                }
                get view() {
                    return this.renderer ? .view
                }
                get screen() {
                    return this.renderer ? .screen
                }
                destroy(e, i) {
                    const s = t._plugins.slice(0);
                    s.reverse(), s.forEach((t => {
                        t.destroy.call(this)
                    })), this.stage.destroy(i), this.stage = null, this.renderer.destroy(e), this.renderer = null
                }
            };
            n._plugins = [];
            let o = n;
            s.Rw.handleByList(s.nw.Application, o._plugins);
            class a {
                static init(t) {
                    Object.defineProperty(this, "resizeTo", {
                        set(t) {
                            globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (globalThis.addEventListener("resize", this.queueResize), this.resize())
                        },
                        get() {
                            return this._resizeTo
                        }
                    }), this.queueResize = () => {
                        this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame((() => this.resize())))
                    }, this.cancelResize = () => {
                        this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null)
                    }, this.resize = () => {
                        if (!this._resizeTo) return;
                        let t, e;
                        if (this.cancelResize(), this._resizeTo === globalThis.window) t = globalThis.innerWidth, e = globalThis.innerHeight;
                        else {
                            const {
                                clientWidth: i,
                                clientHeight: s
                            } = this._resizeTo;
                            t = i, e = s
                        }
                        this.renderer.resize(t, e), this.render()
                    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
                }
                static destroy() {
                    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
                }
            }
            a.extension = s.nw.Application, s.Rw.add(a)
        },
        6522: (t, e, i) => {
            i.d(e, {
                T: () => n,
                P: () => a
            });
            var s = i(1851),
                r = i(8820);
            class n extends r.W2 {
                constructor(t = 1500, e, i = 16384, r = !1) {
                    super(), i > 16384 && (i = 16384), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = i, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = s.T$.NORMAL, this.autoResize = r, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e), this._tintColor = new s.Il(0), this.tintRgb = new Float32Array(3), this.tint = 16777215
                }
                setProperties(t) {
                    t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
                }
                updateTransform() {
                    this.displayObjectUpdateTransform()
                }
                get tint() {
                    return this._tintColor.value
                }
                set tint(t) {
                    this._tintColor.setValue(t), this._tintColor.toRgbArray(this.tintRgb)
                }
                render(t) {
                    !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", (() => this.onChildrenChange(0)))), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
                }
                onChildrenChange(t) {
                    const e = Math.floor(t / this._batchSize);
                    for (; this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
                    this._bufferUpdateIDs[e] = ++this._updateID
                }
                dispose() {
                    if (this._buffers) {
                        for (let t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                        this._buffers = null
                    }
                }
                destroy(t) {
                    super.destroy(t), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
                }
            }
            class o {
                constructor(t, e, i) {
                    this.geometry = new s.wG, this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
                    for (let i = 0; i < t.length; ++i) {
                        let r = t[i];
                        r = {
                            attributeName: r.attributeName,
                            size: r.size,
                            uploadFunction: r.uploadFunction,
                            type: r.type || s.vK.FLOAT,
                            offset: r.offset
                        }, e[i] ? this.dynamicProperties.push(r) : this.staticProperties.push(r)
                    }
                    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
                }
                initBuffers() {
                    const t = this.geometry;
                    let e = 0;
                    this.indexBuffer = new s.lW(s.P6.createIndicesForQuads(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
                    for (let t = 0; t < this.dynamicProperties.length; ++t) {
                        const i = this.dynamicProperties[t];
                        i.offset = e, e += i.size, this.dynamicStride += i.size
                    }
                    const i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
                    this.dynamicData = new Float32Array(i), this.dynamicDataUint32 = new Uint32Array(i), this.dynamicBuffer = new s.lW(this.dynamicData, !1, !1);
                    let r = 0;
                    this.staticStride = 0;
                    for (let t = 0; t < this.staticProperties.length; ++t) {
                        const e = this.staticProperties[t];
                        e.offset = r, r += e.size, this.staticStride += e.size
                    }
                    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
                    this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new s.lW(this.staticData, !0, !1);
                    for (let e = 0; e < this.dynamicProperties.length; ++e) {
                        const i = this.dynamicProperties[e];
                        t.addAttribute(i.attributeName, this.dynamicBuffer, 0, i.type === s.vK.UNSIGNED_BYTE, i.type, 4 * this.dynamicStride, 4 * i.offset)
                    }
                    for (let e = 0; e < this.staticProperties.length; ++e) {
                        const i = this.staticProperties[e];
                        t.addAttribute(i.attributeName, this.staticBuffer, 0, i.type === s.vK.UNSIGNED_BYTE, i.type, 4 * this.staticStride, 4 * i.offset)
                    }
                }
                uploadDynamic(t, e, i) {
                    for (let r = 0; r < this.dynamicProperties.length; r++) {
                        const n = this.dynamicProperties[r];
                        n.uploadFunction(t, e, i, n.type === s.vK.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
                    }
                    this.dynamicBuffer._updateID++
                }
                uploadStatic(t, e, i) {
                    for (let r = 0; r < this.staticProperties.length; r++) {
                        const n = this.staticProperties[r];
                        n.uploadFunction(t, e, i, n.type === s.vK.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
                    }
                    this.staticBuffer._updateID++
                }
                destroy() {
                    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
                }
            }
            class a extends s.bO {
                constructor(t) {
                    super(t), this.shader = null, this.properties = null, this.tempMatrix = new s.y3, this.properties = [{
                        attributeName: "aVertexPosition",
                        size: 2,
                        uploadFunction: this.uploadVertices,
                        offset: 0
                    }, {
                        attributeName: "aPositionCoord",
                        size: 2,
                        uploadFunction: this.uploadPosition,
                        offset: 0
                    }, {
                        attributeName: "aRotation",
                        size: 1,
                        uploadFunction: this.uploadRotation,
                        offset: 0
                    }, {
                        attributeName: "aTextureCoord",
                        size: 2,
                        uploadFunction: this.uploadUvs,
                        offset: 0
                    }, {
                        attributeName: "aColor",
                        size: 1,
                        type: s.vK.UNSIGNED_BYTE,
                        uploadFunction: this.uploadTint,
                        offset: 0
                    }], this.shader = s.ex.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", {}), this.state = s.ZM.for2d()
                }
                render(t) {
                    const e = t.children,
                        i = t._maxSize,
                        r = t._batchSize,
                        n = this.renderer;
                    let o = e.length;
                    if (0 === o) return;
                    o > i && !t.autoResize && (o = i);
                    let a = t._buffers;
                    a || (a = t._buffers = this.generateBuffers(t));
                    const h = e[0]._texture.baseTexture,
                        l = h.alphaMode > 0;
                    this.state.blendMode = s.P6.correctBlendMode(t.blendMode, l), n.state.set(this.state);
                    const d = n.gl,
                        c = t.worldTransform.copyTo(this.tempMatrix);
                    c.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(!0), this.shader.uniforms.uColor = s.Il.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, l).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
                    let u = !1;
                    for (let i = 0, s = 0; i < o; i += r, s += 1) {
                        let h = o - i;
                        h > r && (h = r), s >= a.length && a.push(this._generateOneMoreBuffer(t));
                        const l = a[s];
                        l.uploadDynamic(e, i, h);
                        const c = t._bufferUpdateIDs[s] || 0;
                        u = u || l._updateID < c, u && (l._updateID = t._updateID, l.uploadStatic(e, i, h)), n.geometry.bind(l.geometry), d.drawElements(d.TRIANGLES, 6 * h, d.UNSIGNED_SHORT, 0)
                    }
                }
                generateBuffers(t) {
                    const e = [],
                        i = t._maxSize,
                        s = t._batchSize,
                        r = t._properties;
                    for (let t = 0; t < i; t += s) e.push(new o(this.properties, r, s));
                    return e
                }
                _generateOneMoreBuffer(t) {
                    const e = t._batchSize,
                        i = t._properties;
                    return new o(this.properties, i, e)
                }
                uploadVertices(t, e, i, s, r, n) {
                    let o = 0,
                        a = 0,
                        h = 0,
                        l = 0;
                    for (let d = 0; d < i; ++d) {
                        const i = t[e + d],
                            c = i._texture,
                            u = i.scale.x,
                            p = i.scale.y,
                            f = c.trim,
                            g = c.orig;
                        f ? (a = f.x - i.anchor.x * g.width, o = a + f.width, l = f.y - i.anchor.y * g.height, h = l + f.height) : (o = g.width * (1 - i.anchor.x), a = g.width * -i.anchor.x, h = g.height * (1 - i.anchor.y), l = g.height * -i.anchor.y), s[n] = a * u, s[n + 1] = l * p, s[n + r] = o * u, s[n + r + 1] = l * p, s[n + 2 * r] = o * u, s[n + 2 * r + 1] = h * p, s[n + 3 * r] = a * u, s[n + 3 * r + 1] = h * p, n += 4 * r
                    }
                }
                uploadPosition(t, e, i, s, r, n) {
                    for (let o = 0; o < i; o++) {
                        const i = t[e + o].position;
                        s[n] = i.x, s[n + 1] = i.y, s[n + r] = i.x, s[n + r + 1] = i.y, s[n + 2 * r] = i.x, s[n + 2 * r + 1] = i.y, s[n + 3 * r] = i.x, s[n + 3 * r + 1] = i.y, n += 4 * r
                    }
                }
                uploadRotation(t, e, i, s, r, n) {
                    for (let o = 0; o < i; o++) {
                        const i = t[e + o].rotation;
                        s[n] = i, s[n + r] = i, s[n + 2 * r] = i, s[n + 3 * r] = i, n += 4 * r
                    }
                }
                uploadUvs(t, e, i, s, r, n) {
                    for (let o = 0; o < i; ++o) {
                        const i = t[e + o]._texture._uvs;
                        i ? (s[n] = i.x0, s[n + 1] = i.y0, s[n + r] = i.x1, s[n + r + 1] = i.y1, s[n + 2 * r] = i.x2, s[n + 2 * r + 1] = i.y2, s[n + 3 * r] = i.x3, s[n + 3 * r + 1] = i.y3, n += 4 * r) : (s[n] = 0, s[n + 1] = 0, s[n + r] = 0, s[n + r + 1] = 0, s[n + 2 * r] = 0, s[n + 2 * r + 1] = 0, s[n + 3 * r] = 0, s[n + 3 * r + 1] = 0, n += 4 * r)
                    }
                }
                uploadTint(t, e, i, r, n, o) {
                    for (let a = 0; a < i; ++a) {
                        const i = t[e + a],
                            h = s.Il.shared.setValue(i._tintRGB).toPremultiplied(i.alpha, i.texture.baseTexture.alphaMode > 0);
                        r[o] = h, r[o + n] = h, r[o + 2 * n] = h, r[o + 3 * n] = h, o += 4 * n
                    }
                }
                destroy() {
                    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
                }
            }
            a.extension = {
                name: "particle",
                type: s.nw.RendererPlugin
            }, s.Rw.add(a)
        },
        8656: (t, e, i) => {
            i.d(e, {
                K: () => n
            });
            var s = i(1851),
                r = i(540);
            class n extends r.j {
                constructor(t, e = !0) {
                    super(t[0] instanceof s.xE ? t[0] : t[0].texture), this._textures = null, this._durations = null, this._autoUpdate = e, this._isConnectedToTicker = !1, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = t
                }
                stop() {
                    this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (s.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1))
                }
                play() {
                    this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (s.vB.shared.add(this.update, this, s.uF.HIGH), this._isConnectedToTicker = !0))
                }
                gotoAndStop(t) {
                    this.stop(), this.currentFrame = t
                }
                gotoAndPlay(t) {
                    this.currentFrame = t, this.play()
                }
                update(t) {
                    if (!this._playing) return;
                    const e = this.animationSpeed * t,
                        i = this.currentFrame;
                    if (null !== this._durations) {
                        let i = this._currentTime % 1 * this._durations[this.currentFrame];
                        for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
                        const s = Math.sign(this.animationSpeed * t);
                        for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * s, this._currentTime += s;
                        this._currentTime += i / this._durations[this.currentFrame]
                    } else this._currentTime += e;
                    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i || this.animationSpeed < 0 && this.currentFrame > i) && this.onLoop(), this.updateTexture())
                }
                updateTexture() {
                    const t = this.currentFrame;
                    this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame))
                }
                destroy(t) {
                    this.stop(), super.destroy(t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
                }
                static fromFrames(t) {
                    const e = [];
                    for (let i = 0; i < t.length; ++i) e.push(s.xE.from(t[i]));
                    return new n(e)
                }
                static fromImages(t) {
                    const e = [];
                    for (let i = 0; i < t.length; ++i) e.push(s.xE.from(t[i]));
                    return new n(e)
                }
                get totalFrames() {
                    return this._textures.length
                }
                get textures() {
                    return this._textures
                }
                set textures(t) {
                    if (t[0] instanceof s.xE) this._textures = t, this._durations = null;
                    else {
                        this._textures = [], this._durations = [];
                        for (let e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                    }
                    this._previousFrame = null, this.gotoAndStop(0), this.updateTexture()
                }
                get currentFrame() {
                    let t = Math.floor(this._currentTime) % this._textures.length;
                    return t < 0 && (t += this._textures.length), t
                }
                set currentFrame(t) {
                    if (t < 0 || t > this.totalFrames - 1) throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
                    const e = this.currentFrame;
                    this._currentTime = t, e !== this.currentFrame && this.updateTexture()
                }
                get playing() {
                    return this._playing
                }
                get autoUpdate() {
                    return this._autoUpdate
                }
                set autoUpdate(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (s.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (s.vB.shared.add(this.update, this), this._isConnectedToTicker = !0))
                }
            }
        },
        6010: (t, e, i) => {
            i.d(e, {
                o: () => o,
                S: () => l
            });
            var s = i(1851),
                r = i(540);
            const n = new s.E9;
            class o extends r.j {
                constructor(t, e = 100, i = 100) {
                    super(t), this.tileTransform = new s.wx, this._width = e, this._height = i, this.uvMatrix = this.texture.uvMatrix || new s.UX(t), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1
                }
                get clampMargin() {
                    return this.uvMatrix.clampMargin
                }
                set clampMargin(t) {
                    this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
                }
                get tileScale() {
                    return this.tileTransform.scale
                }
                set tileScale(t) {
                    this.tileTransform.scale.copyFrom(t)
                }
                get tilePosition() {
                    return this.tileTransform.position
                }
                set tilePosition(t) {
                    this.tileTransform.position.copyFrom(t)
                }
                _onTextureUpdate() {
                    this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
                }
                _render(t) {
                    const e = this._texture;
                    !e || !e.valid || (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
                }
                _calculateBounds() {
                    const t = this._width * -this._anchor._x,
                        e = this._height * -this._anchor._y,
                        i = this._width * (1 - this._anchor._x),
                        s = this._height * (1 - this._anchor._y);
                    this._bounds.addFrame(this.transform, t, e, i, s)
                }
                getLocalBounds(t) {
                    return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new s.Ae), t = this._localBoundsRect), this._bounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
                }
                containsPoint(t) {
                    this.worldTransform.applyInverse(t, n);
                    const e = this._width,
                        i = this._height,
                        s = -e * this.anchor._x;
                    if (n.x >= s && n.x < s + e) {
                        const t = -i * this.anchor._y;
                        if (n.y >= t && n.y < t + i) return !0
                    }
                    return !1
                }
                destroy(t) {
                    super.destroy(t), this.tileTransform = null, this.uvMatrix = null
                }
                static from(t, e) {
                    const i = t instanceof s.xE ? t : s.xE.from(t, e);
                    return new o(i, e.width, e.height)
                }
                get width() {
                    return this._width
                }
                set width(t) {
                    this._width = t
                }
                get height() {
                    return this._height
                }
                set height(t) {
                    this._height = t
                }
            }
            var a = "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n";
            const h = new s.y3;
            class l extends s.bO {
                constructor(t) {
                    super(t), t.runners.contextChange.add(this), this.quad = new s.ud, this.state = s.ZM.for2d()
                }
                contextChange() {
                    const t = this.renderer,
                        e = {
                            globals: t.globalUniforms
                        };
                    this.simpleShader = s.ex.from(a, "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n", e), this.shader = t.context.webGLVersion > 1 ? s.ex.from("#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n", e) : s.ex.from(a, "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n", e)
                }
                render(t) {
                    const e = this.renderer,
                        i = this.quad;
                    let r = i.vertices;
                    r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
                    const n = t.uvRespectAnchor ? t.anchor.x : 0,
                        o = t.uvRespectAnchor ? t.anchor.y : 0;
                    r = i.uvs, r[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, i.invalidate();
                    const a = t._texture,
                        l = a.baseTexture,
                        d = l.alphaMode > 0,
                        c = t.tileTransform.localTransform,
                        u = t.uvMatrix;
                    let p = l.isPowerOfTwo && a.frame.width === l.width && a.frame.height === l.height;
                    p && (l._glTextures[e.CONTEXT_UID] ? p = l.wrapMode !== s.Nt.CLAMP : l.wrapMode === s.Nt.CLAMP && (l.wrapMode = s.Nt.REPEAT));
                    const f = p ? this.simpleShader : this.shader,
                        g = a.width,
                        m = a.height,
                        _ = t._width,
                        x = t._height;
                    h.set(c.a * g / _, c.b * g / x, c.c * m / _, c.d * m / x, c.tx / _, c.ty / x), h.invert(), p ? h.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0), f.uniforms.uClampFrame = u.uClampFrame, f.uniforms.uClampOffset = u.uClampOffset), f.uniforms.uTransform = h.toArray(!0), f.uniforms.uColor = s.Il.shared.setValue(t.tint).premultiply(t.worldAlpha, d).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = a, e.shader.bind(f), e.geometry.bind(i), this.state.blendMode = s.P6.correctBlendMode(t.blendMode, d), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
                }
            }
            l.extension = {
                name: "tilingSprite",
                type: s.nw.RendererPlugin
            }, s.Rw.add(l)
        },
        8013: (t, e, i) => {
            i.d(e, {
                UP: () => g,
                d0: () => n,
                Xz: () => w,
                SQ: () => o,
                Lq: () => a,
                lx: () => h,
                jv: () => d,
                A0: () => b
            });
            var s = i(1851),
                r = i(4014);
            class n {
                constructor() {
                    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = []
                }
            }
            class o {
                static test(t) {
                    return "string" == typeof t && t.startsWith("info face=")
                }
                static parse(t) {
                    const e = t.match(/^[a-z]+\s+.+$/gm),
                        i = {
                            info: [],
                            common: [],
                            page: [],
                            char: [],
                            chars: [],
                            kerning: [],
                            kernings: [],
                            distanceField: []
                        };
                    for (const t in e) {
                        const s = e[t].match(/^[a-z]+/gm)[0],
                            r = e[t].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                            n = {};
                        for (const t in r) {
                            const e = r[t].split("="),
                                i = e[0],
                                s = e[1].replace(/"/gm, ""),
                                o = parseFloat(s),
                                a = isNaN(o) ? s : o;
                            n[i] = a
                        }
                        i[s].push(n)
                    }
                    const s = new n;
                    return i.info.forEach((t => s.info.push({
                        face: t.face,
                        size: parseInt(t.size, 10)
                    }))), i.common.forEach((t => s.common.push({
                        lineHeight: parseInt(t.lineHeight, 10)
                    }))), i.page.forEach((t => s.page.push({
                        id: parseInt(t.id, 10),
                        file: t.file
                    }))), i.char.forEach((t => s.char.push({
                        id: parseInt(t.id, 10),
                        page: parseInt(t.page, 10),
                        x: parseInt(t.x, 10),
                        y: parseInt(t.y, 10),
                        width: parseInt(t.width, 10),
                        height: parseInt(t.height, 10),
                        xoffset: parseInt(t.xoffset, 10),
                        yoffset: parseInt(t.yoffset, 10),
                        xadvance: parseInt(t.xadvance, 10)
                    }))), i.kerning.forEach((t => s.kerning.push({
                        first: parseInt(t.first, 10),
                        second: parseInt(t.second, 10),
                        amount: parseInt(t.amount, 10)
                    }))), i.distanceField.forEach((t => s.distanceField.push({
                        distanceRange: parseInt(t.distanceRange, 10),
                        fieldType: t.fieldType
                    }))), s
                }
            }
            class a {
                static test(t) {
                    const e = t;
                    return "string" != typeof t && "getElementsByTagName" in t && e.getElementsByTagName("page").length && null !== e.getElementsByTagName("info")[0].getAttribute("face")
                }
                static parse(t) {
                    const e = new n,
                        i = t.getElementsByTagName("info"),
                        s = t.getElementsByTagName("common"),
                        r = t.getElementsByTagName("page"),
                        o = t.getElementsByTagName("char"),
                        a = t.getElementsByTagName("kerning"),
                        h = t.getElementsByTagName("distanceField");
                    for (let t = 0; t < i.length; t++) e.info.push({
                        face: i[t].getAttribute("face"),
                        size: parseInt(i[t].getAttribute("size"), 10)
                    });
                    for (let t = 0; t < s.length; t++) e.common.push({
                        lineHeight: parseInt(s[t].getAttribute("lineHeight"), 10)
                    });
                    for (let t = 0; t < r.length; t++) e.page.push({
                        id: parseInt(r[t].getAttribute("id"), 10) || 0,
                        file: r[t].getAttribute("file")
                    });
                    for (let t = 0; t < o.length; t++) {
                        const i = o[t];
                        e.char.push({
                            id: parseInt(i.getAttribute("id"), 10),
                            page: parseInt(i.getAttribute("page"), 10) || 0,
                            x: parseInt(i.getAttribute("x"), 10),
                            y: parseInt(i.getAttribute("y"), 10),
                            width: parseInt(i.getAttribute("width"), 10),
                            height: parseInt(i.getAttribute("height"), 10),
                            xoffset: parseInt(i.getAttribute("xoffset"), 10),
                            yoffset: parseInt(i.getAttribute("yoffset"), 10),
                            xadvance: parseInt(i.getAttribute("xadvance"), 10)
                        })
                    }
                    for (let t = 0; t < a.length; t++) e.kerning.push({
                        first: parseInt(a[t].getAttribute("first"), 10),
                        second: parseInt(a[t].getAttribute("second"), 10),
                        amount: parseInt(a[t].getAttribute("amount"), 10)
                    });
                    for (let t = 0; t < h.length; t++) e.distanceField.push({
                        fieldType: h[t].getAttribute("fieldType"),
                        distanceRange: parseInt(h[t].getAttribute("distanceRange"), 10)
                    });
                    return e
                }
            }
            class h {
                static test(t) {
                    return !("string" != typeof t || !t.includes("<font>")) && a.test(s.Xd.ADAPTER.parseXML(t))
                }
                static parse(t) {
                    return a.parse(s.Xd.ADAPTER.parseXML(t))
                }
            }
            const l = [o, a, h];

            function d(t) {
                for (let e = 0; e < l.length; e++)
                    if (l[e].test(t)) return l[e];
                return null
            }

            function c(t, e, i, n, o, a, h) {
                const l = i.text,
                    d = i.fontProperties;
                e.translate(n, o), e.scale(a, a);
                const c = h.strokeThickness / 2,
                    u = -h.strokeThickness / 2;
                if (e.font = h.toFontString(), e.lineWidth = h.strokeThickness, e.textBaseline = h.textBaseline, e.lineJoin = h.lineJoin, e.miterLimit = h.miterLimit, e.fillStyle = function(t, e, i, s, n, o) {
                        const a = i.fill;
                        if (!Array.isArray(a)) return a;
                        if (1 === a.length) return a[0];
                        let h;
                        const l = i.dropShadow ? i.dropShadowDistance : 0,
                            d = i.padding || 0,
                            c = t.width / s - l - 2 * d,
                            u = t.height / s - l - 2 * d,
                            p = a.slice(),
                            f = i.fillGradientStops.slice();
                        if (!f.length) {
                            const t = p.length + 1;
                            for (let e = 1; e < t; ++e) f.push(e / t)
                        }
                        if (p.unshift(a[0]), f.unshift(0), p.push(a[a.length - 1]), f.push(1), i.fillGradientType === r.M_.LINEAR_VERTICAL) {
                            h = e.createLinearGradient(c / 2, d, c / 2, u + d);
                            let t = 0;
                            const s = (o.fontProperties.fontSize + i.strokeThickness) / u;
                            for (let e = 0; e < n.length; e++) {
                                const i = o.lineHeight * e;
                                for (let e = 0; e < p.length; e++) {
                                    let r = 0;
                                    r = "number" == typeof f[e] ? f[e] : e / p.length;
                                    const n = i / u + r * s;
                                    let o = Math.max(t, n);
                                    o = Math.min(o, 1), h.addColorStop(o, p[e]), t = o
                                }
                            }
                        } else {
                            h = e.createLinearGradient(d, u / 2, c + d, u / 2);
                            const t = p.length + 1;
                            let i = 1;
                            for (let e = 0; e < p.length; e++) {
                                let s;
                                s = "number" == typeof f[e] ? f[e] : i / t, h.addColorStop(s, p[e]), i++
                            }
                        }
                        return h
                    }(t, e, h, a, [l], i), e.strokeStyle = h.stroke, h.dropShadow) {
                    const t = h.dropShadowColor,
                        i = h.dropShadowBlur * a,
                        r = h.dropShadowDistance * a;
                    e.shadowColor = s.Il.shared.setValue(t).setAlpha(h.dropShadowAlpha).toRgbaString(), e.shadowBlur = i, e.shadowOffsetX = Math.cos(h.dropShadowAngle) * r, e.shadowOffsetY = Math.sin(h.dropShadowAngle) * r
                } else e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
                h.stroke && h.strokeThickness && e.strokeText(l, c, u + i.lineHeight - d.descent), h.fill && e.fillText(l, c, u + i.lineHeight - d.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)"
            }

            function u(t) {
                return Array.from ? Array.from(t) : t.split("")
            }

            function p(t) {
                return t.codePointAt ? t.codePointAt(0) : t.charCodeAt(0)
            }
            const f = class t {
                constructor(t, e, i) {
                    const [r] = t.info, [n] = t.common, [o] = t.page, [a] = t.distanceField, h = s.P6.getResolutionOfUrl(o.file), l = {};
                    this._ownsTextures = i, this.font = r.face, this.size = r.size, this.lineHeight = n.lineHeight / h, this.chars = {}, this.pageTextures = l;
                    for (let i = 0; i < t.page.length; i++) {
                        const {
                            id: r,
                            file: n
                        } = t.page[i];
                        l[r] = e instanceof Array ? e[i] : e[n], a ? .fieldType && "none" !== a.fieldType && (l[r].baseTexture.alphaMode = s.iw.NO_PREMULTIPLIED_ALPHA, l[r].baseTexture.mipmap = s.KI.OFF)
                    }
                    for (let e = 0; e < t.char.length; e++) {
                        const {
                            id: i,
                            page: r
                        } = t.char[e];
                        let {
                            x: n,
                            y: o,
                            width: a,
                            height: d,
                            xoffset: c,
                            yoffset: u,
                            xadvance: p
                        } = t.char[e];
                        n /= h, o /= h, a /= h, d /= h, c /= h, u /= h, p /= h;
                        const f = new s.Ae(n + l[r].frame.x / h, o + l[r].frame.y / h, a, d);
                        this.chars[i] = {
                            xOffset: c,
                            yOffset: u,
                            xAdvance: p,
                            kerning: {},
                            texture: new s.xE(l[r].baseTexture, f),
                            page: r
                        }
                    }
                    for (let e = 0; e < t.kerning.length; e++) {
                        let {
                            first: i,
                            second: s,
                            amount: r
                        } = t.kerning[e];
                        i /= h, s /= h, r /= h, this.chars[s] && (this.chars[s].kerning[i] = r)
                    }
                    this.distanceFieldRange = a ? .distanceRange, this.distanceFieldType = a ? .fieldType ? .toLowerCase() ? ? "none"
                }
                destroy() {
                    for (const t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;
                    for (const t in this.pageTextures) this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;
                    this.chars = null, this.pageTextures = null
                }
                static install(e, i, r) {
                    let o;
                    if (e instanceof n) o = e;
                    else {
                        const t = d(e);
                        if (!t) throw new Error("Unrecognized data format for font.");
                        o = t.parse(e)
                    }
                    i instanceof s.xE && (i = [i]);
                    const a = new t(o, i, r);
                    return t.available[a.font] = a, a
                }
                static uninstall(e) {
                    const i = t.available[e];
                    if (!i) throw new Error(`No font found named '${e}'`);
                    i.destroy(), delete t.available[e]
                }
                static from(e, i, o) {
                    if (!e) throw new Error("[BitmapFont] Property `name` is required.");
                    const {
                        chars: a,
                        padding: h,
                        resolution: l,
                        textureWidth: d,
                        textureHeight: f,
                        ...g
                    } = Object.assign({}, t.defaultOptions, o), m = function(t) {
                        "string" == typeof t && (t = [t]);
                        const e = [];
                        for (let i = 0, s = t.length; i < s; i++) {
                            const s = t[i];
                            if (Array.isArray(s)) {
                                if (2 !== s.length) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
                                const t = s[0].charCodeAt(0),
                                    i = s[1].charCodeAt(0);
                                if (i < t) throw new Error("[BitmapFont]: Invalid character range.");
                                for (let s = t, r = i; s <= r; s++) e.push(String.fromCharCode(s))
                            } else e.push(...u(s))
                        }
                        if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
                        return e
                    }(a), _ = i instanceof r.pn ? i : new r.pn(i), x = d, y = new n;
                    y.info[0] = {
                        face: _.fontFamily,
                        size: _.fontSize
                    }, y.common[0] = {
                        lineHeight: _.fontSize
                    };
                    let S, v, w, T = 0,
                        C = 0,
                        b = 0;
                    const A = [],
                        I = [];
                    for (let t = 0; t < m.length; t++) {
                        S || (S = s.Xd.ADAPTER.createCanvas(), S.width = d, S.height = f, v = S.getContext("2d"), w = new s.VL(S, {
                            resolution: l,
                            ...g
                        }), A.push(w), I.push(new s.xE(w)), y.page.push({
                            id: I.length - 1,
                            file: ""
                        }));
                        const e = m[t],
                            i = r._A.measureText(e, _, !1, S),
                            n = i.width,
                            o = Math.ceil(i.height),
                            a = Math.ceil(("italic" === _.fontStyle ? 2 : 1) * n);
                        if (C >= f - o * l) {
                            if (0 === C) throw new Error(`[BitmapFont] textureHeight ${f}px is too small (fontFamily: '${_.fontFamily}', fontSize: ${_.fontSize}px, char: '${e}')`);
                            --t, S = null, v = null, w = null, C = 0, T = 0, b = 0;
                            continue
                        }
                        if (b = Math.max(o + i.fontProperties.descent, b), a * l + T >= x) {
                            if (0 === T) throw new Error(`[BitmapFont] textureWidth ${d}px is too small (fontFamily: '${_.fontFamily}', fontSize: ${_.fontSize}px, char: '${e}')`);
                            --t, C += b * l, C = Math.ceil(C), T = 0, b = 0;
                            continue
                        }
                        c(S, v, i, T, C, l, _);
                        const u = p(i.text);
                        y.char.push({
                            id: u,
                            page: I.length - 1,
                            x: T / l,
                            y: C / l,
                            width: a,
                            height: o,
                            xoffset: 0,
                            yoffset: 0,
                            xadvance: n - (_.dropShadow ? _.dropShadowDistance : 0) - (_.stroke ? _.strokeThickness : 0)
                        }), T += (a + 2 * h) * l, T = Math.ceil(T)
                    }
                    if (!o ? .skipKerning)
                        for (let t = 0, e = m.length; t < e; t++) {
                            const i = m[t];
                            for (let t = 0; t < e; t++) {
                                const e = m[t],
                                    s = v.measureText(i).width,
                                    r = v.measureText(e).width,
                                    n = v.measureText(i + e).width - (s + r);
                                n && y.kerning.push({
                                    first: p(i),
                                    second: p(e),
                                    amount: n
                                })
                            }
                        }
                    const M = new t(y, I, !0);
                    return void 0 !== t.available[e] && t.uninstall(e), t.available[e] = M, M
                }
            };
            f.ALPHA = [
                ["a", "z"],
                ["A", "Z"], " "
            ], f.NUMERIC = [
                ["0", "9"]
            ], f.ALPHANUMERIC = [
                ["a", "z"],
                ["A", "Z"],
                ["0", "9"], " "
            ], f.ASCII = [
                [" ", "~"]
            ], f.defaultOptions = {
                resolution: 1,
                textureWidth: 512,
                textureHeight: 512,
                padding: 4,
                chars: f.ALPHANUMERIC
            }, f.available = {};
            let g = f;
            var m = i(8820),
                _ = i(6723);
            const x = [],
                y = [],
                S = [],
                v = class t extends m.W2 {
                    constructor(e, i = {}) {
                        super();
                        const {
                            align: r,
                            tint: n,
                            maxWidth: o,
                            letterSpacing: a,
                            fontName: h,
                            fontSize: l
                        } = Object.assign({}, t.styleDefaults, i);
                        if (!g.available[h]) throw new Error(`Missing BitmapFont "${h}"`);
                        this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = r, this._tintColor = new s.Il(n), this._font = void 0, this._fontName = h, this._fontSize = l, this.text = e, this._maxWidth = o, this._maxLineHeight = 0, this._letterSpacing = a, this._anchor = new s.AB((() => {
                            this.dirty = !0
                        }), this, 0, 0), this._roundPixels = s.Xd.ROUND_PIXELS, this.dirty = !0, this._resolution = s.Xd.RESOLUTION, this._autoResolution = !0, this._textureCache = {}
                    }
                    updateText() {
                        const t = g.available[this._fontName],
                            e = this.fontSize,
                            i = e / t.size,
                            r = new s.E9,
                            n = [],
                            o = [],
                            a = [],
                            h = u(this._text.replace(/(?:\r\n|\r)/g, "\n") || " "),
                            l = this._maxWidth * t.size / e,
                            d = "none" === t.distanceFieldType ? x : y;
                        let c = null,
                            f = 0,
                            m = 0,
                            v = 0,
                            w = -1,
                            T = 0,
                            C = 0,
                            b = 0,
                            A = 0;
                        for (let e = 0; e < h.length; e++) {
                            const i = h[e],
                                d = p(i);
                            if (/(?:\s)/.test(i) && (w = e, T = f, A++), "\r" === i || "\n" === i) {
                                o.push(f), a.push(-1), m = Math.max(m, f), ++v, ++C, r.x = 0, r.y += t.lineHeight, c = null, A = 0;
                                continue
                            }
                            const u = t.chars[d];
                            if (!u) continue;
                            c && u.kerning[c] && (r.x += u.kerning[c]);
                            const g = S.pop() || {
                                texture: s.xE.EMPTY,
                                line: 0,
                                charCode: 0,
                                prevSpaces: 0,
                                position: new s.E9
                            };
                            g.texture = u.texture, g.line = v, g.charCode = d, g.position.x = Math.round(r.x + u.xOffset + this._letterSpacing / 2), g.position.y = Math.round(r.y + u.yOffset), g.prevSpaces = A, n.push(g), f = g.position.x + Math.max(u.xAdvance - u.xOffset, u.texture.orig.width), r.x += u.xAdvance + this._letterSpacing, b = Math.max(b, u.yOffset + u.texture.height), c = d, -1 !== w && l > 0 && r.x > l && (++C, s.P6.removeItems(n, 1 + w - C, 1 + e - w), e = w, w = -1, o.push(T), a.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0), m = Math.max(m, T), v++, r.x = 0, r.y += t.lineHeight, c = null, A = 0)
                        }
                        const I = h[h.length - 1];
                        "\r" !== I && "\n" !== I && (/(?:\s)/.test(I) && (f = T), o.push(f), m = Math.max(m, f), a.push(-1));
                        const M = [];
                        for (let t = 0; t <= v; t++) {
                            let e = 0;
                            "right" === this._align ? e = m - o[t] : "center" === this._align ? e = (m - o[t]) / 2 : "justify" === this._align && (e = a[t] < 0 ? 0 : (m - o[t]) / a[t]), M.push(e)
                        }
                        const D = n.length,
                            E = {},
                            F = [],
                            L = this._activePagesMeshData;
                        d.push(...L);
                        for (let e = 0; e < D; e++) {
                            const i = n[e].texture,
                                r = i.baseTexture.uid;
                            if (!E[r]) {
                                let e = d.pop();
                                if (!e) {
                                    const i = new _.xc;
                                    let r, n;
                                    "none" === t.distanceFieldType ? (r = new _.rY(s.xE.EMPTY), n = s.T$.NORMAL) : (r = new _.rY(s.xE.EMPTY, {
                                        program: s.$r.from("// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n", "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // Gamma correction for coverage-like alpha\r\n  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r\n  float gamma = mix(1.0, 1.0 / 2.2, luma);\r\n  float coverage = pow(uColor.a * alpha, gamma);  \r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, coverage);\r\n}\r\n"),
                                        uniforms: {
                                            uFWidth: 0
                                        }
                                    }), n = s.T$.NORMAL_NPM);
                                    const o = new _.Kj(i, r);
                                    o.blendMode = n, e = {
                                        index: 0,
                                        indexCount: 0,
                                        vertexCount: 0,
                                        uvsCount: 0,
                                        total: 0,
                                        mesh: o,
                                        vertices: null,
                                        uvs: null,
                                        indices: null
                                    }
                                }
                                e.index = 0, e.indexCount = 0, e.vertexCount = 0, e.uvsCount = 0, e.total = 0;
                                const {
                                    _textureCache: n
                                } = this;
                                n[r] = n[r] || new s.xE(i.baseTexture), e.mesh.texture = n[r], e.mesh.tint = this._tintColor.value, F.push(e), E[r] = e
                            }
                            E[r].total++
                        }
                        for (let t = 0; t < L.length; t++) F.includes(L[t]) || this.removeChild(L[t].mesh);
                        for (let t = 0; t < F.length; t++) F[t].mesh.parent !== this && this.addChild(F[t].mesh);
                        this._activePagesMeshData = F;
                        for (const t in E) {
                            const e = E[t],
                                i = e.total;
                            if (!(e.indices ? .length > 6 * i) || e.vertices.length < 2 * _.Kj.BATCHABLE_SIZE) e.vertices = new Float32Array(8 * i), e.uvs = new Float32Array(8 * i), e.indices = new Uint16Array(6 * i);
                            else {
                                const t = e.total,
                                    i = e.vertices;
                                for (let e = 4 * t * 2; e < i.length; e++) i[e] = 0
                            }
                            e.mesh.size = 6 * i
                        }
                        for (let t = 0; t < D; t++) {
                            const e = n[t];
                            let s = e.position.x + M[e.line] * ("justify" === this._align ? e.prevSpaces : 1);
                            this._roundPixels && (s = Math.round(s));
                            const r = s * i,
                                o = e.position.y * i,
                                a = e.texture,
                                h = E[a.baseTexture.uid],
                                l = a.frame,
                                d = a._uvs,
                                c = h.index++;
                            h.indices[6 * c + 0] = 0 + 4 * c, h.indices[6 * c + 1] = 1 + 4 * c, h.indices[6 * c + 2] = 2 + 4 * c, h.indices[6 * c + 3] = 0 + 4 * c, h.indices[6 * c + 4] = 2 + 4 * c, h.indices[6 * c + 5] = 3 + 4 * c, h.vertices[8 * c + 0] = r, h.vertices[8 * c + 1] = o, h.vertices[8 * c + 2] = r + l.width * i, h.vertices[8 * c + 3] = o, h.vertices[8 * c + 4] = r + l.width * i, h.vertices[8 * c + 5] = o + l.height * i, h.vertices[8 * c + 6] = r, h.vertices[8 * c + 7] = o + l.height * i, h.uvs[8 * c + 0] = d.x0, h.uvs[8 * c + 1] = d.y0, h.uvs[8 * c + 2] = d.x1, h.uvs[8 * c + 3] = d.y1, h.uvs[8 * c + 4] = d.x2, h.uvs[8 * c + 5] = d.y2, h.uvs[8 * c + 6] = d.x3, h.uvs[8 * c + 7] = d.y3
                        }
                        this._textWidth = m * i, this._textHeight = (r.y + t.lineHeight) * i;
                        for (const t in E) {
                            const e = E[t];
                            if (0 !== this.anchor.x || 0 !== this.anchor.y) {
                                let t = 0;
                                const i = this._textWidth * this.anchor.x,
                                    s = this._textHeight * this.anchor.y;
                                for (let r = 0; r < e.total; r++) e.vertices[t++] -= i, e.vertices[t++] -= s, e.vertices[t++] -= i, e.vertices[t++] -= s, e.vertices[t++] -= i, e.vertices[t++] -= s, e.vertices[t++] -= i, e.vertices[t++] -= s
                            }
                            this._maxLineHeight = b * i;
                            const s = e.mesh.geometry.getBuffer("aVertexPosition"),
                                r = e.mesh.geometry.getBuffer("aTextureCoord"),
                                n = e.mesh.geometry.getIndex();
                            s.data = e.vertices, r.data = e.uvs, n.data = e.indices, s.update(), r.update(), n.update()
                        }
                        for (let t = 0; t < n.length; t++) S.push(n[t]);
                        this._font = t, this.dirty = !1
                    }
                    updateTransform() {
                        this.validate(), this.containerUpdateTransform()
                    }
                    _render(t) {
                        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0);
                        const {
                            distanceFieldRange: e,
                            distanceFieldType: i,
                            size: s
                        } = g.available[this._fontName];
                        if ("none" !== i) {
                            const {
                                a: i,
                                b: r,
                                c: n,
                                d: o
                            } = this.worldTransform, a = Math.sqrt(i * i + r * r), h = Math.sqrt(n * n + o * o), l = (Math.abs(a) + Math.abs(h)) / 2, d = this.fontSize / s, c = t._view.resolution;
                            for (const t of this._activePagesMeshData) t.mesh.shader.uniforms.uFWidth = l * e * d * c
                        }
                        super._render(t)
                    }
                    getLocalBounds() {
                        return this.validate(), super.getLocalBounds()
                    }
                    validate() {
                        const t = g.available[this._fontName];
                        if (!t) throw new Error(`Missing BitmapFont "${this._fontName}"`);
                        this._font !== t && (this.dirty = !0), this.dirty && this.updateText()
                    }
                    get tint() {
                        return this._tintColor.value
                    }
                    set tint(t) {
                        if (this.tint !== t) {
                            this._tintColor.setValue(t);
                            for (let e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t
                        }
                    }
                    get align() {
                        return this._align
                    }
                    set align(t) {
                        this._align !== t && (this._align = t, this.dirty = !0)
                    }
                    get fontName() {
                        return this._fontName
                    }
                    set fontName(t) {
                        if (!g.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
                        this._fontName !== t && (this._fontName = t, this.dirty = !0)
                    }
                    get fontSize() {
                        return this._fontSize ? ? g.available[this._fontName].size
                    }
                    set fontSize(t) {
                        this._fontSize !== t && (this._fontSize = t, this.dirty = !0)
                    }
                    get anchor() {
                        return this._anchor
                    }
                    set anchor(t) {
                        "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
                    }
                    get text() {
                        return this._text
                    }
                    set text(t) {
                        t = String(t ? ? ""), this._text !== t && (this._text = t, this.dirty = !0)
                    }
                    get maxWidth() {
                        return this._maxWidth
                    }
                    set maxWidth(t) {
                        this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
                    }
                    get maxLineHeight() {
                        return this.validate(), this._maxLineHeight
                    }
                    get textWidth() {
                        return this.validate(), this._textWidth
                    }
                    get letterSpacing() {
                        return this._letterSpacing
                    }
                    set letterSpacing(t) {
                        this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
                    }
                    get roundPixels() {
                        return this._roundPixels
                    }
                    set roundPixels(t) {
                        t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0)
                    }
                    get textHeight() {
                        return this.validate(), this._textHeight
                    }
                    get resolution() {
                        return this._resolution
                    }
                    set resolution(t) {
                        this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
                    }
                    destroy(t) {
                        const {
                            _textureCache: e
                        } = this, i = "none" === g.available[this._fontName].distanceFieldType ? x : y;
                        i.push(...this._activePagesMeshData);
                        for (const t of this._activePagesMeshData) this.removeChild(t.mesh);
                        this._activePagesMeshData = [], i.filter((t => e[t.mesh.texture.baseTexture.uid])).forEach((t => {
                            t.mesh.texture = s.xE.EMPTY
                        }));
                        for (const t in e) e[t].destroy(), delete e[t];
                        this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(t)
                    }
                };
            v.styleDefaults = {
                align: "left",
                tint: 16777215,
                maxWidth: 0,
                letterSpacing: 0
            };
            let w = v;
            var T = i(961);
            const C = [".xml", ".fnt"],
                b = {
                    extension: {
                        type: s.nw.LoadParser,
                        priority: T.Q2.Normal
                    },
                    name: "loadBitmapFont",
                    test: t => C.includes(s.P6.path.extname(t).toLowerCase()),
                    testParse: async t => o.test(t) || h.test(t),
                    async parse(t, e, i) {
                        const r = o.test(t) ? o.parse(t) : h.parse(t),
                            {
                                src: n
                            } = e,
                            {
                                page: a
                            } = r,
                            l = [];
                        for (let t = 0; t < a.length; ++t) {
                            const e = a[t].file;
                            let i = s.P6.path.join(s.P6.path.dirname(n), e);
                            i = (0, T.uz)(i, n), l.push(i)
                        }
                        const d = await i.load(l),
                            c = l.map((t => d[t]));
                        return g.install(r, c, !0)
                    },
                    load: async (t, e) => (await s.Xd.ADAPTER.fetch(t)).text(),
                    unload(t) {
                        t.destroy()
                    }
                };
            s.Rw.add(b)
        },
        4014: (t, e, i) => {
            i.d(e, {
                M_: () => s,
                xv: () => m,
                _A: () => h,
                pn: () => c
            });
            var s = (t => (t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", t))(s || {}),
                r = i(1851),
                n = i(540);
            const o = {
                    willReadFrequently: !0
                },
                a = class t {
                    static get experimentalLetterSpacingSupported() {
                        let e = t._experimentalLetterSpacingSupported;
                        if (void 0 !== e) {
                            const i = r.Xd.ADAPTER.getCanvasRenderingContext2D().prototype;
                            e = t._experimentalLetterSpacingSupported = "letterSpacing" in i || "textLetterSpacing" in i
                        }
                        return e
                    }
                    constructor(t, e, i, s, r, n, o, a, h) {
                        this.text = t, this.style = e, this.width = i, this.height = s, this.lines = r, this.lineWidths = n, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h
                    }
                    static measureText(e, i, s, r = t._canvas) {
                        s = s ? ? i.wordWrap;
                        const n = i.toFontString(),
                            a = t.measureFont(n);
                        0 === a.fontSize && (a.fontSize = i.fontSize, a.ascent = i.fontSize);
                        const h = r.getContext("2d", o);
                        h.font = n;
                        const l = (s ? t.wordWrap(e, i, r) : e).split(/(?:\r\n|\r|\n)/),
                            d = new Array(l.length);
                        let c = 0;
                        for (let e = 0; e < l.length; e++) {
                            const s = t._measureText(l[e], i.letterSpacing, h);
                            d[e] = s, c = Math.max(c, s)
                        }
                        let u = c + i.strokeThickness;
                        i.dropShadow && (u += i.dropShadowDistance);
                        const p = i.lineHeight || a.fontSize + i.strokeThickness;
                        let f = Math.max(p, a.fontSize + 2 * i.strokeThickness) + i.leading + (l.length - 1) * (p + i.leading);
                        return i.dropShadow && (f += i.dropShadowDistance), new t(e, i, u, f, l, d, p + i.leading, c, a)
                    }
                    static _measureText(e, i, s) {
                        let r = !1;
                        t.experimentalLetterSpacingSupported && (t.experimentalLetterSpacing ? (s.letterSpacing = `${i}px`, s.textLetterSpacing = `${i}px`, r = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
                        let n = s.measureText(e).width;
                        return n > 0 && (r ? n -= i : n += (t.graphemeSegmenter(e).length - 1) * i), n
                    }
                    static wordWrap(e, i, s = t._canvas) {
                        const r = s.getContext("2d", o);
                        let n = 0,
                            a = "",
                            h = "";
                        const l = Object.create(null),
                            {
                                letterSpacing: d,
                                whiteSpace: c
                            } = i,
                            u = t.collapseSpaces(c),
                            p = t.collapseNewlines(c);
                        let f = !u;
                        const g = i.wordWrapWidth + d,
                            m = t.tokenize(e);
                        for (let e = 0; e < m.length; e++) {
                            let s = m[e];
                            if (t.isNewline(s)) {
                                if (!p) {
                                    h += t.addLine(a), f = !u, a = "", n = 0;
                                    continue
                                }
                                s = " "
                            }
                            if (u) {
                                const e = t.isBreakingSpace(s),
                                    i = t.isBreakingSpace(a[a.length - 1]);
                                if (e && i) continue
                            }
                            const o = t.getFromCache(s, d, l, r);
                            if (o > g)
                                if ("" !== a && (h += t.addLine(a), a = "", n = 0), t.canBreakWords(s, i.breakWords)) {
                                    const e = t.wordWrapSplit(s);
                                    for (let o = 0; o < e.length; o++) {
                                        let c = e[o],
                                            u = c,
                                            p = 1;
                                        for (; e[o + p];) {
                                            const r = e[o + p];
                                            if (t.canBreakChars(u, r, s, o, i.breakWords)) break;
                                            c += r, u = r, p++
                                        }
                                        o += p - 1;
                                        const m = t.getFromCache(c, d, l, r);
                                        m + n > g && (h += t.addLine(a), f = !1, a = "", n = 0), a += c, n += m
                                    }
                                } else {
                                    a.length > 0 && (h += t.addLine(a), a = "", n = 0);
                                    const i = e === m.length - 1;
                                    h += t.addLine(s, !i), f = !1, a = "", n = 0
                                }
                            else o + n > g && (f = !1, h += t.addLine(a), a = "", n = 0), (a.length > 0 || !t.isBreakingSpace(s) || f) && (a += s, n += o)
                        }
                        return h += t.addLine(a, !1), h
                    }
                    static addLine(e, i = !0) {
                        return e = t.trimRight(e), i ? `${e}\n` : e
                    }
                    static getFromCache(e, i, s, r) {
                        let n = s[e];
                        return "number" != typeof n && (n = t._measureText(e, i, r) + i, s[e] = n), n
                    }
                    static collapseSpaces(t) {
                        return "normal" === t || "pre-line" === t
                    }
                    static collapseNewlines(t) {
                        return "normal" === t
                    }
                    static trimRight(e) {
                        if ("string" != typeof e) return "";
                        for (let i = e.length - 1; i >= 0; i--) {
                            const s = e[i];
                            if (!t.isBreakingSpace(s)) break;
                            e = e.slice(0, -1)
                        }
                        return e
                    }
                    static isNewline(e) {
                        return "string" == typeof e && t._newlines.includes(e.charCodeAt(0))
                    }
                    static isBreakingSpace(e, i) {
                        return "string" == typeof e && t._breakingSpaces.includes(e.charCodeAt(0))
                    }
                    static tokenize(e) {
                        const i = [];
                        let s = "";
                        if ("string" != typeof e) return i;
                        for (let r = 0; r < e.length; r++) {
                            const n = e[r],
                                o = e[r + 1];
                            t.isBreakingSpace(n, o) || t.isNewline(n) ? ("" !== s && (i.push(s), s = ""), i.push(n)) : s += n
                        }
                        return "" !== s && i.push(s), i
                    }
                    static canBreakWords(t, e) {
                        return e
                    }
                    static canBreakChars(t, e, i, s, r) {
                        return !0
                    }
                    static wordWrapSplit(e) {
                        return t.graphemeSegmenter(e)
                    }
                    static measureFont(e) {
                        if (t._fonts[e]) return t._fonts[e];
                        const i = {
                                ascent: 0,
                                descent: 0,
                                fontSize: 0
                            },
                            s = t._canvas,
                            r = t._context;
                        r.font = e;
                        const n = t.METRICS_STRING + t.BASELINE_SYMBOL,
                            o = Math.ceil(r.measureText(n).width);
                        let a = Math.ceil(r.measureText(t.BASELINE_SYMBOL).width);
                        const h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
                        if (a = a * t.BASELINE_MULTIPLIER | 0, 0 === o || 0 === h) return t._fonts[e] = i, i;
                        s.width = o, s.height = h, r.fillStyle = "#f00", r.fillRect(0, 0, o, h), r.font = e, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, a);
                        const l = r.getImageData(0, 0, o, h).data,
                            d = l.length,
                            c = 4 * o;
                        let u = 0,
                            p = 0,
                            f = !1;
                        for (u = 0; u < a; ++u) {
                            for (let t = 0; t < c; t += 4)
                                if (255 !== l[p + t]) {
                                    f = !0;
                                    break
                                }
                            if (f) break;
                            p += c
                        }
                        for (i.ascent = a - u, p = d - c, f = !1, u = h; u > a; --u) {
                            for (let t = 0; t < c; t += 4)
                                if (255 !== l[p + t]) {
                                    f = !0;
                                    break
                                }
                            if (f) break;
                            p -= c
                        }
                        return i.descent = u - a, i.fontSize = i.ascent + i.descent, t._fonts[e] = i, i
                    }
                    static clearMetrics(e = "") {
                        e ? delete t._fonts[e] : t._fonts = {}
                    }
                    static get _canvas() {
                        if (!t.__canvas) {
                            let e;
                            try {
                                const i = new OffscreenCanvas(0, 0);
                                if (i.getContext("2d", o) ? .measureText) return t.__canvas = i, i;
                                e = r.Xd.ADAPTER.createCanvas()
                            } catch {
                                e = r.Xd.ADAPTER.createCanvas()
                            }
                            e.width = e.height = 10, t.__canvas = e
                        }
                        return t.__canvas
                    }
                    static get _context() {
                        return t.__context || (t.__context = t._canvas.getContext("2d", o)), t.__context
                    }
                };
            a.METRICS_STRING = "|ÉqÅ", a.BASELINE_SYMBOL = "M", a.BASELINE_MULTIPLIER = 1.4, a.HEIGHT_MULTIPLIER = 2, a.graphemeSegmenter = (() => {
                if ("function" == typeof Intl ? .Segmenter) {
                    const t = new Intl.Segmenter;
                    return e => [...t.segment(e)].map((t => t.segment))
                }
                return t => [...t]
            })(), a.experimentalLetterSpacing = !1, a._fonts = {}, a._newlines = [10, 13], a._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
            let h = a;
            const l = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
                d = class t {
                    constructor(t) {
                        this.styleID = 0, this.reset(), p(this, t, t)
                    }
                    clone() {
                        const e = {};
                        return p(e, this, t.defaultStyle), new t(e)
                    }
                    reset() {
                        p(this, t.defaultStyle, t.defaultStyle)
                    }
                    get align() {
                        return this._align
                    }
                    set align(t) {
                        this._align !== t && (this._align = t, this.styleID++)
                    }
                    get breakWords() {
                        return this._breakWords
                    }
                    set breakWords(t) {
                        this._breakWords !== t && (this._breakWords = t, this.styleID++)
                    }
                    get dropShadow() {
                        return this._dropShadow
                    }
                    set dropShadow(t) {
                        this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                    }
                    get dropShadowAlpha() {
                        return this._dropShadowAlpha
                    }
                    set dropShadowAlpha(t) {
                        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
                    }
                    get dropShadowAngle() {
                        return this._dropShadowAngle
                    }
                    set dropShadowAngle(t) {
                        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                    }
                    get dropShadowBlur() {
                        return this._dropShadowBlur
                    }
                    set dropShadowBlur(t) {
                        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                    }
                    get dropShadowColor() {
                        return this._dropShadowColor
                    }
                    set dropShadowColor(t) {
                        const e = u(t);
                        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                    }
                    get dropShadowDistance() {
                        return this._dropShadowDistance
                    }
                    set dropShadowDistance(t) {
                        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                    }
                    get fill() {
                        return this._fill
                    }
                    set fill(t) {
                        const e = u(t);
                        this._fill !== e && (this._fill = e, this.styleID++)
                    }
                    get fillGradientType() {
                        return this._fillGradientType
                    }
                    set fillGradientType(t) {
                        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                    }
                    get fillGradientStops() {
                        return this._fillGradientStops
                    }
                    set fillGradientStops(t) {
                        (function(t, e) {
                            if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length) return !1;
                            for (let i = 0; i < t.length; ++i)
                                if (t[i] !== e[i]) return !1;
                            return !0
                        })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
                    }
                    get fontFamily() {
                        return this._fontFamily
                    }
                    set fontFamily(t) {
                        this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                    }
                    get fontSize() {
                        return this._fontSize
                    }
                    set fontSize(t) {
                        this._fontSize !== t && (this._fontSize = t, this.styleID++)
                    }
                    get fontStyle() {
                        return this._fontStyle
                    }
                    set fontStyle(t) {
                        this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                    }
                    get fontVariant() {
                        return this._fontVariant
                    }
                    set fontVariant(t) {
                        this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                    }
                    get fontWeight() {
                        return this._fontWeight
                    }
                    set fontWeight(t) {
                        this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                    }
                    get letterSpacing() {
                        return this._letterSpacing
                    }
                    set letterSpacing(t) {
                        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                    }
                    get lineHeight() {
                        return this._lineHeight
                    }
                    set lineHeight(t) {
                        this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                    }
                    get leading() {
                        return this._leading
                    }
                    set leading(t) {
                        this._leading !== t && (this._leading = t, this.styleID++)
                    }
                    get lineJoin() {
                        return this._lineJoin
                    }
                    set lineJoin(t) {
                        this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                    }
                    get miterLimit() {
                        return this._miterLimit
                    }
                    set miterLimit(t) {
                        this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                    }
                    get padding() {
                        return this._padding
                    }
                    set padding(t) {
                        this._padding !== t && (this._padding = t, this.styleID++)
                    }
                    get stroke() {
                        return this._stroke
                    }
                    set stroke(t) {
                        const e = u(t);
                        this._stroke !== e && (this._stroke = e, this.styleID++)
                    }
                    get strokeThickness() {
                        return this._strokeThickness
                    }
                    set strokeThickness(t) {
                        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                    }
                    get textBaseline() {
                        return this._textBaseline
                    }
                    set textBaseline(t) {
                        this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                    }
                    get trim() {
                        return this._trim
                    }
                    set trim(t) {
                        this._trim !== t && (this._trim = t, this.styleID++)
                    }
                    get whiteSpace() {
                        return this._whiteSpace
                    }
                    set whiteSpace(t) {
                        this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
                    }
                    get wordWrap() {
                        return this._wordWrap
                    }
                    set wordWrap(t) {
                        this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                    }
                    get wordWrapWidth() {
                        return this._wordWrapWidth
                    }
                    set wordWrapWidth(t) {
                        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                    }
                    toFontString() {
                        const t = "number" == typeof this.fontSize ? `${this.fontSize}px` : this.fontSize;
                        let e = this.fontFamily;
                        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                        for (let t = e.length - 1; t >= 0; t--) {
                            let i = e[t].trim();
                            !/([\"\'])[^\'\"]+\1/.test(i) && !l.includes(i) && (i = `"${i}"`), e[t] = i
                        }
                        return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`
                    }
                };
            d.defaultStyle = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAlpha: 1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "black",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: s.LINEAR_VERTICAL,
                fillGradientStops: [],
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                leading: 0,
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                trim: !1,
                whiteSpace: "pre",
                wordWrap: !1,
                wordWrapWidth: 100
            };
            let c = d;

            function u(t) {
                const e = r.Il.shared,
                    i = t => {
                        const i = e.setValue(t);
                        return 1 === i.alpha ? i.toHex() : i.toRgbaString()
                    };
                return Array.isArray(t) ? t.map(i) : i(t)
            }

            function p(t, e, i) {
                for (const s in i) Array.isArray(e[s]) ? t[s] = e[s].slice() : t[s] = e[s]
            }
            const f = {
                    texture: !0,
                    children: !1,
                    baseTexture: !0
                },
                g = class t extends n.j {
                    constructor(e, i, s) {
                        let n = !1;
                        s || (s = r.Xd.ADAPTER.createCanvas(), n = !0), s.width = 3, s.height = 3;
                        const o = r.xE.from(s);
                        o.orig = new r.Ae, o.trim = new r.Ae, super(o), this._ownCanvas = n, this.canvas = s, this.context = s.getContext("2d", {
                            willReadFrequently: !0
                        }), this._resolution = t.defaultResolution ? ? r.Xd.RESOLUTION, this._autoResolution = t.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = i, this.localStyleID = -1
                    }
                    static get experimentalLetterSpacing() {
                        return h.experimentalLetterSpacing
                    }
                    static set experimentalLetterSpacing(t) {
                        r.P6.deprecation("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), h.experimentalLetterSpacing = t
                    }
                    updateText(t) {
                        const e = this._style;
                        if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), !this.dirty && t) return;
                        this._font = this._style.toFontString();
                        const i = this.context,
                            s = h.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                            n = s.width,
                            o = s.height,
                            a = s.lines,
                            l = s.lineHeight,
                            d = s.lineWidths,
                            c = s.maxLineWidth,
                            u = s.fontProperties;
                        let p, f;
                        this.canvas.width = Math.ceil(Math.ceil(Math.max(1, n) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, o) + 2 * e.padding) * this._resolution), i.scale(this._resolution, this._resolution), i.clearRect(0, 0, this.canvas.width, this.canvas.height), i.font = this._font, i.lineWidth = e.strokeThickness, i.textBaseline = e.textBaseline, i.lineJoin = e.lineJoin, i.miterLimit = e.miterLimit;
                        const g = e.dropShadow ? 2 : 1;
                        for (let t = 0; t < g; ++t) {
                            const n = e.dropShadow && 0 === t,
                                h = n ? Math.ceil(Math.max(1, o) + 2 * e.padding) : 0,
                                g = h * this._resolution;
                            if (n) {
                                i.fillStyle = "black", i.strokeStyle = "black";
                                const t = e.dropShadowColor,
                                    s = e.dropShadowBlur * this._resolution,
                                    n = e.dropShadowDistance * this._resolution;
                                i.shadowColor = r.Il.shared.setValue(t).setAlpha(e.dropShadowAlpha).toRgbaString(), i.shadowBlur = s, i.shadowOffsetX = Math.cos(e.dropShadowAngle) * n, i.shadowOffsetY = Math.sin(e.dropShadowAngle) * n + g
                            } else i.fillStyle = this._generateFillStyle(e, a, s), i.strokeStyle = e.stroke, i.shadowColor = "black", i.shadowBlur = 0, i.shadowOffsetX = 0, i.shadowOffsetY = 0;
                            let m = (l - u.fontSize) / 2;
                            l - u.fontSize < 0 && (m = 0);
                            for (let t = 0; t < a.length; t++) p = e.strokeThickness / 2, f = e.strokeThickness / 2 + t * l + u.ascent + m, "right" === e.align ? p += c - d[t] : "center" === e.align && (p += (c - d[t]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(a[t], p + e.padding, f + e.padding - h, !0), e.fill && this.drawLetterSpacing(a[t], p + e.padding, f + e.padding - h)
                        }
                        this.updateTexture()
                    }
                    drawLetterSpacing(t, e, i, s = !1) {
                        const r = this._style.letterSpacing;
                        let n = !1;
                        if (h.experimentalLetterSpacingSupported && (h.experimentalLetterSpacing ? (this.context.letterSpacing = `${r}px`, this.context.textLetterSpacing = `${r}px`, n = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), 0 === r || n) return void(s ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i));
                        let o = e;
                        const a = h.graphemeSegmenter(t);
                        let l = this.context.measureText(t).width,
                            d = 0;
                        for (let t = 0; t < a.length; ++t) {
                            const e = a[t];
                            s ? this.context.strokeText(e, o, i) : this.context.fillText(e, o, i);
                            let n = "";
                            for (let e = t + 1; e < a.length; ++e) n += a[e];
                            d = this.context.measureText(n).width, o += l - d + r, l = d
                        }
                    }
                    updateTexture() {
                        const t = this.canvas;
                        if (this._style.trim) {
                            const e = r.P6.trimCanvas(t);
                            e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
                        }
                        const e = this._texture,
                            i = this._style,
                            s = i.trim ? 0 : i.padding,
                            n = e.baseTexture;
                        e.trim.width = e._frame.width = t.width / this._resolution, e.trim.height = e._frame.height = t.height / this._resolution, e.trim.x = -s, e.trim.y = -s, e.orig.width = e._frame.width - 2 * s, e.orig.height = e._frame.height - 2 * s, this._onTextureUpdate(), n.setRealSize(t.width, t.height, this._resolution), e.updateUvs(), this.dirty = !1
                    }
                    _render(t) {
                        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t)
                    }
                    updateTransform() {
                        this.updateText(!0), super.updateTransform()
                    }
                    getBounds(t, e) {
                        return this.updateText(!0), -1 === this._textureID && (t = !1), super.getBounds(t, e)
                    }
                    getLocalBounds(t) {
                        return this.updateText(!0), super.getLocalBounds.call(this, t)
                    }
                    _calculateBounds() {
                        this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                    }
                    _generateFillStyle(t, e, i) {
                        const r = t.fill;
                        if (!Array.isArray(r)) return r;
                        if (1 === r.length) return r[0];
                        let n;
                        const o = t.dropShadow ? t.dropShadowDistance : 0,
                            a = t.padding || 0,
                            h = this.canvas.width / this._resolution - o - 2 * a,
                            l = this.canvas.height / this._resolution - o - 2 * a,
                            d = r.slice(),
                            c = t.fillGradientStops.slice();
                        if (!c.length) {
                            const t = d.length + 1;
                            for (let e = 1; e < t; ++e) c.push(e / t)
                        }
                        if (d.unshift(r[0]), c.unshift(0), d.push(r[r.length - 1]), c.push(1), t.fillGradientType === s.LINEAR_VERTICAL) {
                            n = this.context.createLinearGradient(h / 2, a, h / 2, l + a);
                            const s = i.fontProperties.fontSize + t.strokeThickness;
                            for (let t = 0; t < e.length; t++) {
                                const r = i.lineHeight * (t - 1) + s,
                                    o = i.lineHeight * t;
                                let a = o;
                                t > 0 && r > o && (a = (o + r) / 2);
                                const h = o + s,
                                    u = i.lineHeight * (t + 1);
                                let p = h;
                                t + 1 < e.length && u < h && (p = (h + u) / 2);
                                const f = (p - a) / l;
                                for (let t = 0; t < d.length; t++) {
                                    let e = 0;
                                    e = "number" == typeof c[t] ? c[t] : t / d.length;
                                    let i = Math.min(1, Math.max(0, a / l + e * f));
                                    i = Number(i.toFixed(5)), n.addColorStop(i, d[t])
                                }
                            }
                        } else {
                            n = this.context.createLinearGradient(a, l / 2, h + a, l / 2);
                            const t = d.length + 1;
                            let e = 1;
                            for (let i = 0; i < d.length; i++) {
                                let s;
                                s = "number" == typeof c[i] ? c[i] : e / t, n.addColorStop(s, d[i]), e++
                            }
                        }
                        return n
                    }
                    destroy(t) {
                        "boolean" == typeof t && (t = {
                            children: t
                        }), t = Object.assign({}, f, t), super.destroy(t), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
                    }
                    get width() {
                        return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
                    }
                    set width(t) {
                        this.updateText(!0);
                        const e = r.P6.sign(this.scale.x) || 1;
                        this.scale.x = e * t / this._texture.orig.width, this._width = t
                    }
                    get height() {
                        return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                    }
                    set height(t) {
                        this.updateText(!0);
                        const e = r.P6.sign(this.scale.y) || 1;
                        this.scale.y = e * t / this._texture.orig.height, this._height = t
                    }
                    get style() {
                        return this._style
                    }
                    set style(t) {
                        t = t || {}, this._style = t instanceof c ? t : new c(t), this.localStyleID = -1, this.dirty = !0
                    }
                    get text() {
                        return this._text
                    }
                    set text(t) {
                        t = String(t ? ? ""), this._text !== t && (this._text = t, this.dirty = !0)
                    }
                    get resolution() {
                        return this._resolution
                    }
                    set resolution(t) {
                        this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
                    }
                };
            g.defaultAutoResolution = !0;
            let m = g
        }
    }
]);