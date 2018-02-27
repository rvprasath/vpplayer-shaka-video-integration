(function() {
    var g = {};
    (function(window) {
        var k, aa = this;
        aa.cd = !0;

        function m(a, b) {
            var c = a.split("."),
                d = aa;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
        }

        function ba(a) {
            var b = p;

            function c() {}
            c.prototype = b.prototype;
            a.kd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.dd = function(a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
        /*

         Copyright 2016 Google Inc.

         Licensed under the Apache License, Version 2.0 (the "License");
         you may not use this file except in compliance with the License.
         You may obtain a copy of the License at

             http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing, software
         distributed under the License is distributed on an "AS IS" BASIS,
         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         See the License for the specific language governing permissions and
         limitations under the License.
        */
        function ca(a) {
            this.c = Math.exp(Math.log(.5) / a);
            this.b = this.a = 0
        }

        function da(a, b, c) {
            var d = Math.pow(a.c, b);
            a.a = c * (1 - d) + d * a.a;
            a.b += b
        }

        function ea(a) {
            return a.a / (1 - Math.pow(a.c, a.b))
        };

        function fa() {
            this.c = new ca(2);
            this.f = new ca(5);
            this.a = 0;
            this.b = 5E5
        }

        function ga(a) {
            return 128E3 > a.a ? a.b : Math.min(ea(a.c), ea(a.f))
        };

        function ha() {}

        function ia() {};

        function ja() {
            this.h = null;
            this.f = !1;
            this.b = new fa;
            this.g = {};
            this.a = {};
            this.i = !1;
            this.c = null
        }
        m("shaka.abr.SimpleAbrManager", ja);
        k = ja.prototype;
        k.stop = function() {
            this.h = null;
            this.f = !1;
            this.g = {};
            this.a = {};
            this.c = null
        };
        k.init = function(a) {
            this.h = a
        };
        k.chooseStreams = function(a) {
            for (var b in a) this.g[b] = a[b];
            b = {};
            if ("audio" in a) {
                var c = ka(this);
                c ? (b.audio = c, this.a.audio = c) : delete this.a.audio
            }
            "video" in a && ((c = la(this)) ? (b.video = c, this.a.video = c) : delete this.a.video);
            "text" in a && (b.text = a.text.streams[0]);
            this.c = Date.now();
            return b
        };
        k.enable = function() {
            this.f = !0
        };
        k.disable = function() {
            this.f = !1
        };
        k.segmentDownloaded = function(a, b, c) {
            var d = this.b;
            b -= a;
            16E3 > c || (a = 8E3 * c / b, b /= 1E3, d.a += c, da(d.c, b, a), da(d.f, b, a));
            if (null != this.c && this.f) a: {
                if (!this.i) {
                    if (!(128E3 <= this.b.a)) break a;
                    this.i = !0
                } else if (8E3 > Date.now() - this.c) break a;c = {};
                if (d = ka(this)) c.audio = d,
                this.a.audio = d;
                if (d = la(this)) c.video = d,
                this.a.video = d;this.c = Date.now();this.h(c)
            }
        };
        k.getBandwidthEstimate = function() {
            return ga(this.b)
        };
        k.setDefaultEstimate = function(a) {
            this.b.b = a
        };

        function ka(a) {
            a = a.g.audio;
            if (!a) return null;
            a = ma(a);
            return a[Math.floor(a.length / 2)]
        }

        function la(a) {
            var b = a.g.video;
            if (!b) return null;
            var b = ma(b),
                c = a.a.audio,
                c = c && c.bandwidth || 0;
            a = ga(a.b);
            for (var d = b[0], e = 0; e < b.length; ++e) {
                var f = b[e],
                    g = e + 1 < b.length ? b[e + 1] : {
                        bandwidth: Infinity
                    };
                f.bandwidth && (g = (g.bandwidth + c) / .85, a >= (f.bandwidth + c) / .95 && a <= g && (d = f))
            }
            return d
        }

        function ma(a) {
            return a.streams.slice(0).filter(function(a) {
                return a.allowedByApplication && a.allowedByKeySystem
            }).sort(function(a, c) {
                return a.bandwidth - c.bandwidth
            })
        };
        var na = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

        function oa(a) {
            var b;
            a instanceof oa ? (pa(this, a.R), this.ka = a.ka, this.T = a.T, qa(this, a.wa), this.O = a.O, ra(this, sa(a.a)), this.ca = a.ca) : a && (b = String(a).match(na)) ? (pa(this, b[1] || "", !0), this.ka = ta(b[2] || ""), this.T = ta(b[3] || "", !0), qa(this, b[4]), this.O = ta(b[5] || "", !0), ra(this, b[6] || "", !0), this.ca = ta(b[7] || "")) : this.a = new ua(null)
        }
        k = oa.prototype;
        k.R = "";
        k.ka = "";
        k.T = "";
        k.wa = null;
        k.O = "";
        k.ca = "";
        k.toString = function() {
            var a = [],
                b = this.R;
            b && a.push(va(b, wa, !0), ":");
            if (b = this.T) {
                a.push("//");
                var c = this.ka;
                c && a.push(va(c, wa, !0), "@");
                a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
                b = this.wa;
                null != b && a.push(":", String(b))
            }
            if (b = this.O) this.T && "/" != b.charAt(0) && a.push("/"), a.push(va(b, "/" == b.charAt(0) ? xa : ya, !0));
            (b = this.a.toString()) && a.push("?", b);
            (b = this.ca) && a.push("#", va(b, za));
            return a.join("")
        };
        k.resolve = function(a) {
            var b = new oa(this);
            "data" === b.R && (b = new oa);
            var c = !!a.R;
            c ? pa(b, a.R) : c = !!a.ka;
            c ? b.ka = a.ka : c = !!a.T;
            c ? b.T = a.T : c = null != a.wa;
            var d = a.O;
            if (c) qa(b, a.wa);
            else if (c = !!a.O) {
                if ("/" != d.charAt(0))
                    if (this.T && !this.O) d = "/" + d;
                    else {
                        var e = b.O.lastIndexOf("/"); - 1 != e && (d = b.O.substr(0, e + 1) + d)
                    }
                if (".." == d || "." == d) d = "";
                else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
                    for (var e = !d.lastIndexOf("/", 0), d = d.split("/"), f = [], g = 0; g < d.length;) {
                        var h = d[g++];
                        "." == h ? e && g == d.length && f.push("") : ".." == h ? ((1 < f.length ||
                            1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
                    }
                    d = f.join("/")
                }
            }
            c ? b.O = d : c = "" !== a.a.toString();
            c ? ra(b, sa(a.a)) : c = !!a.ca;
            c && (b.ca = a.ca);
            return b
        };

        function pa(a, b, c) {
            a.R = c ? ta(b, !0) : b;
            a.R && (a.R = a.R.replace(/:$/, ""))
        }

        function qa(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.wa = b
            } else a.wa = null
        }

        function ra(a, b, c) {
            b instanceof ua ? a.a = b : (c || (b = va(b, Aa)), a.a = new ua(b))
        }

        function ta(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
        }

        function va(a, b, c) {
            return "string" == typeof a ? (a = encodeURI(a).replace(b, Ba), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }

        function Ba(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var wa = /[#\/\?@]/g,
            ya = /[\#\?:]/g,
            xa = /[\#\?]/g,
            Aa = /[\#\?@]/g,
            za = /#/g;

        function ua(a) {
            this.b = a || null
        }
        ua.prototype.a = null;
        ua.prototype.c = null;
        ua.prototype.toString = function() {
            if (this.b) return this.b;
            if (!this.a) return "";
            var a = [],
                b;
            for (b in this.a)
                for (var c = encodeURIComponent(b), d = this.a[b], e = 0; e < d.length; e++) {
                    var f = c;
                    "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
                    a.push(f)
                }
            return this.b = a.join("&")
        };

        function sa(a) {
            var b = new ua;
            b.b = a.b;
            if (a.a) {
                var c = {},
                    d;
                for (d in a.a) c[d] = a.a[d].concat();
                b.a = c;
                b.c = a.c
            }
            return b
        };

        function q(a, b, c) {
            this.category = a;
            this.code = b;
            this.data = Array.prototype.slice.call(arguments, 2)
        }
        m("shaka.util.Error", q);
        q.prototype.toString = function() {
            return "shaka.util.Error " + JSON.stringify(this, null, "  ")
        };
        q.Category = {
            NETWORK: 1,
            TEXT: 2,
            MEDIA: 3,
            MANIFEST: 4,
            STREAMING: 5,
            DRM: 6,
            PLAYER: 7,
            CAST: 8,
            STORAGE: 9
        };
        q.Code = {
            UNSUPPORTED_SCHEME: 1E3,
            BAD_HTTP_STATUS: 1001,
            HTTP_ERROR: 1002,
            TIMEOUT: 1003,
            MALFORMED_DATA_URI: 1004,
            UNKNOWN_DATA_URI_ENCODING: 1005,
            INVALID_TEXT_HEADER: 2E3,
            INVALID_TEXT_CUE: 2001,
            UNABLE_TO_DETECT_ENCODING: 2003,
            BAD_ENCODING: 2004,
            INVALID_XML: 2005,
            INVALID_TTML: 2006,
            INVALID_MP4_TTML: 2007,
            INVALID_MP4_VTT: 2008,
            BUFFER_READ_OUT_OF_BOUNDS: 3E3,
            JS_INTEGER_OVERFLOW: 3001,
            EBML_OVERFLOW: 3002,
            EBML_BAD_FLOATING_POINT_SIZE: 3003,
            MP4_SIDX_WRONG_BOX_TYPE: 3004,
            MP4_SIDX_INVALID_TIMESCALE: 3005,
            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
            WEBM_CUES_ELEMENT_MISSING: 3007,
            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
            WEBM_INFO_ELEMENT_MISSING: 3010,
            WEBM_DURATION_ELEMENT_MISSING: 3011,
            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
            MEDIA_SOURCE_OPERATION_FAILED: 3014,
            MEDIA_SOURCE_OPERATION_THREW: 3015,
            VIDEO_ERROR: 3016,
            QUOTA_EXCEEDED_ERROR: 3017,
            UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
            DASH_INVALID_XML: 4001,
            DASH_NO_SEGMENT_INFO: 4002,
            DASH_EMPTY_ADAPTATION_SET: 4003,
            DASH_EMPTY_PERIOD: 4004,
            DASH_WEBM_MISSING_INIT: 4005,
            DASH_UNSUPPORTED_CONTAINER: 4006,
            DASH_PSSH_BAD_ENCODING: 4007,
            DASH_NO_COMMON_KEY_SYSTEM: 4008,
            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
            DASH_CONFLICTING_KEY_IDS: 4010,
            UNPLAYABLE_PERIOD: 4011,
            RESTRICTIONS_CANNOT_BE_MET: 4012,
            INVALID_STREAMS_CHOSEN: 5005,
            NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
            FAILED_TO_CREATE_CDM: 6002,
            FAILED_TO_ATTACH_TO_VIDEO: 6003,
            INVALID_SERVER_CERTIFICATE: 6004,
            FAILED_TO_CREATE_SESSION: 6005,
            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
            LICENSE_REQUEST_FAILED: 6007,
            LICENSE_RESPONSE_REJECTED: 6008,
            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
            NO_LICENSE_SERVER_GIVEN: 6012,
            OFFLINE_SESSION_REMOVED: 6013,
            EXPIRED: 6014,
            LOAD_INTERRUPTED: 7E3,
            CAST_API_UNAVAILABLE: 8E3,
            NO_CAST_RECEIVERS: 8001,
            ALREADY_CASTING: 8002,
            UNEXPECTED_CAST_ERROR: 8003,
            CAST_CANCELED_BY_USER: 8004,
            CAST_CONNECTION_TIMED_OUT: 8005,
            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
            INDEXED_DB_NOT_SUPPORTED: 9E3,
            INDEXED_DB_ERROR: 9001,
            OPERATION_ABORTED: 9002,
            REQUESTED_ITEM_NOT_FOUND: 9003,
            MALFORMED_OFFLINE_URI: 9004,
            CANNOT_STORE_LIVE_OFFLINE: 9005,
            STORE_ALREADY_IN_PROGRESS: 9006,
            NO_INIT_DATA_FOR_OFFLINE: 9007
        };

        function Ca(a, b) {
            return a.reduce(function(a, b, e) {
                return b["catch"](a.bind(null, e))
            }.bind(null, b), Promise.reject())
        }

        function u(a, b) {
            return a.concat(b)
        }

        function v() {}

        function Da(a) {
            return null != a
        }

        function Ea(a) {
            return function(b) {
                return b != a
            }
        };

        function w() {
            var a, b, c = new Promise(function(c, e) {
                a = c;
                b = e
            });
            c.resolve = a;
            c.reject = b;
            return c
        };

        function y(a) {
            this.f = !1;
            this.a = [];
            this.b = [];
            this.c = [];
            this.h = a || null
        }
        m("shaka.net.NetworkingEngine.RequestType", {
            MANIFEST: 0,
            SEGMENT: 1,
            LICENSE: 2
        });
        var Fa = {};
        m("shaka.net.NetworkingEngine.registerScheme", function(a, b) {
            Fa[a] = b
        });
        m("shaka.net.NetworkingEngine.unregisterScheme", function(a) {
            delete Fa[a]
        });
        y.prototype.wc = function(a) {
            this.b.push(a)
        };
        y.prototype.registerRequestFilter = y.prototype.wc;
        y.prototype.Yc = function(a) {
            var b = this.b;
            a = b.indexOf(a);
            0 <= a && b.splice(a, 1)
        };
        y.prototype.unregisterRequestFilter = y.prototype.Yc;
        y.prototype.Mb = function() {
            this.b = []
        };
        y.prototype.clearAllRequestFilters = y.prototype.Mb;
        y.prototype.vb = function(a) {
            this.c.push(a)
        };
        y.prototype.registerResponseFilter = y.prototype.vb;
        y.prototype.Gb = function(a) {
            var b = this.c;
            a = b.indexOf(a);
            0 <= a && b.splice(a, 1)
        };
        y.prototype.unregisterResponseFilter = y.prototype.Gb;
        y.prototype.Nb = function() {
            this.c = []
        };
        y.prototype.clearAllResponseFilters = y.prototype.Nb;

        function Ga() {
            return {
                maxAttempts: 2,
                baseDelay: 1E3,
                backoffFactor: 2,
                fuzzFactor: .5,
                timeout: 0
            }
        }

        function Ha(a, b) {
            return {
                uris: a,
                method: "GET",
                body: null,
                headers: {},
                allowCrossSiteCredentials: !1,
                retryParameters: b
            }
        }
        y.prototype.o = function() {
            this.f = !0;
            this.b = [];
            this.c = [];
            for (var a = [], b = 0; b < this.a.length; ++b) a.push(this.a[b]["catch"](v));
            return Promise.all(a)
        };
        y.prototype.request = function(a, b) {
            if (this.f) return Promise.reject();
            for (var c = Date.now(), d = this.b, e = 0; e < d.length; e++) try {
                d[e](a, b)
            } catch (l) {
                return Promise.reject(l)
            }
            for (var e = b.retryParameters || {}, d = e.maxAttempts || 1, f = e.backoffFactor || 2, g = null == e.baseDelay ? 1E3 : e.baseDelay, h = this.g(a, b, 0), e = 1; e < d; e++) h = h["catch"](this.i.bind(this, a, b, g, e % b.uris.length)), g *= f;
            this.a.push(h);
            return h.then(function(b) {
                this.a.splice(this.a.indexOf(h), 1);
                var d = Date.now();
                this.h && 1 == a && this.h(c, d, b.data.byteLength);
                return b
            }.bind(this))["catch"](function(a) {
                this.a.splice(this.a.indexOf(h),
                    1);
                return Promise.reject(a)
            }.bind(this))
        };
        y.prototype.request = y.prototype.request;
        y.prototype.g = function(a, b, c) {
            if (this.f) return Promise.reject();
            var d = new oa(b.uris[c]),
                e = d.R;
            e || (e = location.protocol, e = e.slice(0, -1), pa(d, e), b.uris[c] = d.toString());
            return (e = Fa[e]) ? e(b.uris[c], b).then(function(b) {
                for (var c = this.c, d = 0; d < c.length; d++) c[d](a, b);
                return b
            }.bind(this)) : Promise.reject(new q(1, 1E3, d))
        };
        y.prototype.i = function(a, b, c, d) {
            var e = new w,
                f = b.retryParameters || {};
            window.setTimeout(e.resolve, c * (1 + (2 * Math.random() - 1) * (null == f.fuzzFactor ? .5 : f.fuzzFactor)));
            return e.then(this.g.bind(this, a, b, d))
        };

        function Ia(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                if (c(a[d], b)) return d;
            return -1
        };

        function Ja() {
            this.a = {}
        }
        k = Ja.prototype;
        k.push = function(a, b) {
            this.a.hasOwnProperty(a) ? this.a[a].push(b) : this.a[a] = [b]
        };
        k.set = function(a, b) {
            this.a[a] = b
        };
        k.has = function(a) {
            return this.a.hasOwnProperty(a)
        };
        k.get = function(a) {
            return (a = this.a[a]) ? a.slice() : null
        };
        k.remove = function(a, b) {
            var c = this.a[a];
            if (c)
                for (var d = 0; d < c.length; ++d) c[d] == b && (c.splice(d, 1), --d)
        };
        k.keys = function() {
            var a = [],
                b;
            for (b in this.a) a.push(b);
            return a
        };

        function z() {
            this.a = new Ja
        }
        z.prototype.o = function() {
            Ka(this);
            this.a = null;
            return Promise.resolve()
        };

        function B(a, b, c, d) {
            b = new La(b, c, d);
            a.a.push(c, b)
        }
        z.prototype.ja = function(a, b) {
            for (var c = this.a.get(b) || [], d = 0; d < c.length; ++d) {
                var e = c[d];
                e.target == a && (e.ja(), this.a.remove(b, e))
            }
        };

        function Ka(a) {
            var b = a.a,
                c = [],
                d;
            for (d in b.a) c.push.apply(c, b.a[d]);
            for (b = 0; b < c.length; ++b) c[b].ja();
            a.a.a = {}
        }

        function La(a, b, c) {
            this.target = a;
            this.type = b;
            this.a = c;
            this.target.addEventListener(b, c, !1)
        }
        La.prototype.ja = function() {
            this.target && (this.target.removeEventListener(this.type, this.a, !1), this.a = this.target = null)
        };

        function Ma(a) {
            return !a || !Object.keys(a).length
        }

        function C(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        }

        function Na(a, b) {
            return Object.keys(a).reduce(function(c, d) {
                c[d] = b(a[d], d);
                return c
            }, {})
        }

        function Oa(a, b) {
            return Object.keys(a).every(function(c) {
                return b(c, a[c])
            })
        };

        function D(a) {
            if (!a) return "";
            a = new Uint8Array(a);
            239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
            a = escape(Pa(a));
            try {
                return decodeURIComponent(a)
            } catch (b) {
                throw new q(2, 2004);
            }
        }

        function Qa(a, b) {
            if (!a) return "";
            if (a.byteLength % 2) throw new q(2, 2004);
            var c;
            if (a instanceof ArrayBuffer) c = a;
            else {
                var d = new Uint8Array(a.byteLength);
                d.set(new Uint8Array(a));
                c = d.buffer
            }
            var d = a.byteLength / 2,
                e = new Uint16Array(d);
            c = new DataView(c);
            for (var f = 0; f < d; f++) e[f] = c.getUint16(2 * f, b);
            return Pa(e)
        }

        function Ra(a) {
            var b = new Uint8Array(a);
            if (239 == b[0] && 187 == b[1] && 191 == b[2]) return D(b);
            if (254 == b[0] && 255 == b[1]) return Qa(b.subarray(2), !1);
            if (255 == b[0] && 254 == b[1]) return Qa(b.subarray(2), !0);
            var c = function(a, b) {
                return a.byteLength <= b || 32 <= a[b] && 126 >= a[b]
            }.bind(null, b);
            if (b[0] || b[2]) {
                if (!b[1] && !b[3]) return Qa(a, !0);
                if (c(0) && c(1) && c(2) && c(3)) return D(a)
            } else return Qa(a, !1);
            throw new q(2, 2003);
        }

        function Sa(a) {
            a = unescape(encodeURIComponent(a));
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
            return b.buffer
        }

        function Pa(a) {
            for (var b = "", c = 0; c < a.length; c += 16E3) b += String.fromCharCode.apply(null, a.subarray(c, c + 16E3));
            return b
        };

        function Ta(a) {
            this.a = null;
            this.b = function() {
                this.a = null;
                a()
            }.bind(this)
        }

        function Ua(a) {
            null != a.a && (clearTimeout(a.a), a.a = null)
        }

        function Va(a) {
            Ua(a);
            a.a = setTimeout(a.b, 100)
        };

        function Wa(a) {
            return window.btoa(String.fromCharCode.apply(null, a)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/, "")
        }

        function Xa(a) {
            a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
            return b
        }

        function Ya(a) {
            for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2) b[c / 2] = window.parseInt(a.substr(c, 2), 16);
            return b
        }

        function Za(a) {
            for (var b = "", c = 0; c < a.length; ++c) {
                var d = a[c].toString(16);
                1 == d.length && (d = "0" + d);
                b += d
            }
            return b
        }

        function $a(a, b) {
            if (!a && !b) return !0;
            if (!a || !b || a.length != b.length) return !1;
            for (var c = 0; c < a.length; ++c)
                if (a[c] != b[c]) return !1;
            return !0
        };

        function ab(a, b, c) {
            this.l = this.h = this.m = null;
            this.A = !1;
            this.b = null;
            this.f = new z;
            this.a = [];
            this.s = [];
            this.j = new w;
            this.G = a;
            this.i = null;
            this.g = function(a) {
                this.j.reject(a);
                b(a)
            }.bind(this);
            this.w = {};
            this.J = c;
            this.v = new Ta(this.vc.bind(this));
            this.C = this.c = !1;
            this.j["catch"](function() {})
        }
        k = ab.prototype;
        k.o = function() {
            this.c = !0;
            var a = this.a.map(function(a) {
                a.ya.close()["catch"](v);
                return a.ya.closed
            });
            this.j.reject();
            this.f && a.push(this.f.o());
            this.l && a.push(this.l.setMediaKeys(null)["catch"](v));
            this.v && Ua(this.v);
            this.f = this.l = this.h = this.m = this.b = this.v = null;
            this.a = [];
            this.s = [];
            this.g = this.i = this.G = null;
            return Promise.all(a)
        };
        k.configure = function(a) {
            this.i = a
        };
        k.init = function(a, b) {
            var c = {},
                d = [];
            this.C = b;
            this.s = a.offlineSessionIds;
            bb(this, a, b || 0 < a.offlineSessionIds.length, c, d);
            return d.length ? cb(this, c, d) : (this.A = !0, Promise.resolve())
        };

        function db(a, b) {
            if (!a.h) return B(a.f, b, "encrypted", function() {
                this.f.ja(b, "encrypted");
                this.g(new q(6, 6010))
            }.bind(a)), Promise.resolve();
            a.l = b;
            var c = a.l.setMediaKeys(a.h),
                c = c["catch"](function(a) {
                    return Promise.reject(new q(6, 6003, a.message))
                }),
                d = null;
            a.b.serverCertificate && (d = a.h.setServerCertificate(a.b.serverCertificate), d = d["catch"](function(a) {
                return Promise.reject(new q(6, 6004, a.message))
            }));
            return Promise.all([c, d]).then(function() {
                if (this.c) return Promise.reject();
                eb(this);
                this.b.initData.length ||
                    this.s.length || B(this.f, this.l, "encrypted", this.bc.bind(this))
            }.bind(a))["catch"](function(a) {
                return this.c ? Promise.resolve() : Promise.reject(a)
            }.bind(a))
        }

        function fb(a, b) {
            return Promise.all(b.map(function(a) {
                return gb(this, a).then(function(a) {
                    if (a) return a.remove()
                })
            }.bind(a)))
        }

        function eb(a) {
            var b = a.b ? a.b.initData : [];
            b.forEach(function(a) {
                hb(this, a.initDataType, a.initData)
            }.bind(a));
            a.s.forEach(function(a) {
                gb(this, a)
            }.bind(a));
            b.length || a.s.length || a.j.resolve();
            return a.j
        }
        k.keySystem = function() {
            return this.b ? this.b.keySystem : ""
        };

        function ib(a) {
            return a.a.map(function(a) {
                return a.ya.sessionId
            })
        }

        function bb(a, b, c, d, e) {
            var f = jb(a),
                g = 0 <= navigator.userAgent.indexOf("Edge/");
            b.periods.forEach(function(a) {
                a.streamSets.forEach(function(a) {
                    "text" != a.type && (f && (a.drmInfos = [f]), a.drmInfos.forEach(function(b) {
                        lb(this, b);
                        var f = d[b.keySystem];
                        f || (f = {
                            audioCapabilities: [],
                            videoCapabilities: [],
                            distinctiveIdentifier: "optional",
                            persistentState: c ? "required" : "optional",
                            sessionTypes: [c ? "persistent-license" : "temporary"],
                            label: b.keySystem,
                            drmInfos: []
                        }, d[b.keySystem] = f, e.push(b.keySystem));
                        f.drmInfos.push(b);
                        b.distinctiveIdentifierRequired &&
                            (f.distinctiveIdentifier = "required");
                        b.persistentStateRequired && (f.persistentState = "required");
                        var h = "video" == a.type ? f.videoCapabilities : f.audioCapabilities,
                            A = ("video" == a.type ? b.videoRobustness : b.audioRobustness) || "";
                        a.streams.forEach(function(a) {
                            var c = a.mimeType;
                            a.codecs && (c += '; codecs="' + a.codecs + '"');
                            a.keyId && b.keyIds.push(a.keyId);
                            g && "com.microsoft.playready" == b.keySystem && h.length || h.push({
                                robustness: A,
                                contentType: c
                            })
                        }.bind(this))
                    }.bind(this)))
                }.bind(this))
            }.bind(a))
        }

        function cb(a, b, c) {
            if (1 == c.length && "" == c[0]) return Promise.reject(new q(6, 6E3));
            var d = new w,
                e = d;
            [!0, !1].forEach(function(a) {
                c.forEach(function(c) {
                    var d = b[c];
                    d.drmInfos.some(function(a) {
                        return !!a.licenseServerUri
                    }) == a && (d.audioCapabilities.length || delete d.audioCapabilities, d.videoCapabilities.length || delete d.videoCapabilities, e = e["catch"](function() {
                        return this.c ? Promise.reject() : navigator.requestMediaKeySystemAccess(c, [d])
                    }.bind(this)))
                }.bind(this))
            }.bind(a));
            e = e["catch"](function() {
                return Promise.reject(new q(6,
                    6001))
            });
            e = e.then(function(a) {
                if (this.c) return Promise.reject();
                var c = a.getConfiguration();
                this.m = (c.audioCapabilities || []).concat(c.videoCapabilities || []).map(function(a) {
                    return a.contentType
                });
                this.m.length || (this.m = null);
                c = b[a.keySystem];
                mb(this, a.keySystem, c, c.drmInfos);
                return this.b.licenseServerUri ? a.createMediaKeys() : Promise.reject(new q(6, 6012))
            }.bind(a)).then(function(a) {
                if (this.c) return Promise.reject();
                this.h = a;
                this.A = !0
            }.bind(a))["catch"](function(a) {
                if (this.c) return Promise.resolve();
                this.m = this.b = null;
                return a instanceof q ? Promise.reject(a) : Promise.reject(new q(6, 6002, a.message))
            }.bind(a));
            d.reject();
            return e
        }

        function lb(a, b) {
            var c = b.keySystem;
            if (c) {
                if (!b.licenseServerUri) {
                    var d = a.i.servers[c];
                    d && (b.licenseServerUri = d)
                }
                b.keyIds || (b.keyIds = []);
                if (c = a.i.advanced[c]) b.distinctiveIdentifierRequired || (b.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), b.persistentStateRequired || (b.persistentStateRequired = c.persistentStateRequired), b.videoRobustness || (b.videoRobustness = c.videoRobustness), b.audioRobustness || (b.audioRobustness = c.audioRobustness), b.serverCertificate || (b.serverCertificate = c.serverCertificate)
            }
        }

        function jb(a) {
            if (Ma(a.i.clearKeys)) return null;
            var b = [],
                c = [],
                d;
            for (d in a.i.clearKeys) {
                var e = a.i.clearKeys[d],
                    f = Ya(d),
                    e = Ya(e),
                    f = {
                        kty: "oct",
                        kid: Wa(f),
                        k: Wa(e)
                    };
                b.push(f);
                c.push(f.kid)
            }
            a = JSON.stringify({
                keys: b
            });
            c = JSON.stringify({
                kids: c
            });
            c = [{
                initData: new Uint8Array(Sa(c)),
                initDataType: "keyids"
            }];
            return {
                keySystem: "org.w3.clearkey",
                licenseServerUri: "data:application/json;base64," + window.btoa(a),
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                initData: c,
                keyIds: []
            }
        }

        function mb(a, b, c, d) {
            var e = [],
                f = [],
                g = [],
                h = [];
            nb(d, e, f, g, h);
            a.b = {
                keySystem: b,
                licenseServerUri: e[0],
                distinctiveIdentifierRequired: "required" == c.distinctiveIdentifier,
                persistentStateRequired: "required" == c.persistentState,
                audioRobustness: c.audioCapabilities ? c.audioCapabilities[0].robustness : "",
                videoRobustness: c.videoCapabilities ? c.videoCapabilities[0].robustness : "",
                serverCertificate: f[0],
                initData: g,
                keyIds: h
            }
        }

        function nb(a, b, c, d, e) {
            function f(a, b) {
                return a.initDataType == b.initDataType && $a(a.initData, b.initData)
            }
            a.forEach(function(a) {
                -1 == b.indexOf(a.licenseServerUri) && b.push(a.licenseServerUri);
                a.serverCertificate && -1 == Ia(c, a.serverCertificate, $a) && c.push(a.serverCertificate);
                a.initData && a.initData.forEach(function(a) {
                    -1 == Ia(d, a, f) && d.push(a)
                });
                if (a.keyIds)
                    for (var h = 0; h < a.keyIds.length; ++h) - 1 == e.indexOf(a.keyIds[h]) && e.push(a.keyIds[h])
            })
        }
        k.bc = function(a) {
            for (var b = new Uint8Array(a.initData), c = 0; c < this.a.length; ++c)
                if ($a(b, this.a[c].initData)) return;
            hb(this, a.initDataType, b)
        };

        function gb(a, b) {
            var c;
            try {
                c = a.h.createSession("persistent-license")
            } catch (f) {
                var d = new q(6, 6005, f.message);
                a.g(d);
                return Promise.reject(d)
            }
            B(a.f, c, "message", a.sb.bind(a));
            B(a.f, c, "keystatuseschange", a.nb.bind(a));
            var e = {
                initData: null,
                ya: c,
                loaded: !1
            };
            a.a.push(e);
            return c.load(b).then(function(a) {
                if (!this.c) {
                    if (a) return e.loaded = !0, this.a.every(function(a) {
                        return a.loaded
                    }) && this.j.resolve(), c;
                    this.a.splice(this.a.indexOf(e), 1);
                    this.g(new q(6, 6013))
                }
            }.bind(a), function(a) {
                this.c || (this.a.splice(this.a.indexOf(e),
                    1), this.g(new q(6, 6005, a.message)))
            }.bind(a))
        }

        function hb(a, b, c) {
            var d;
            try {
                d = a.C ? a.h.createSession("persistent-license") : a.h.createSession()
            } catch (e) {
                a.g(new q(6, 6005, e.message));
                return
            }
            B(a.f, d, "message", a.sb.bind(a));
            B(a.f, d, "keystatuseschange", a.nb.bind(a));
            a.a.push({
                initData: c,
                ya: d,
                loaded: !1
            });
            d.generateRequest(b, c.buffer)["catch"](function(a) {
                if (!this.c) {
                    for (var b = 0; b < this.a.length; ++b)
                        if (this.a[b].ya == d) {
                            this.a.splice(b, 1);
                            break
                        }
                    this.g(new q(6, 6006, a.message))
                }
            }.bind(a))
        }
        k.sb = function(a) {
            var b = a.target,
                c = Ha([this.b.licenseServerUri], this.i.retryParameters);
            c.body = a.message;
            c.method = "POST";
            "com.microsoft.playready" == this.b.keySystem && ob(c);
            this.G.request(2, c).then(function(a) {
                return this.c ? Promise.reject() : b.update(a.data)
            }.bind(this), function(a) {
                if (this.c) return Promise.resolve();
                this.g(new q(6, 6007, a))
            }.bind(this))["catch"](function(a) {
                if (this.c) return Promise.resolve();
                this.g(new q(6, 6008, a.message))
            }.bind(this))
        };

        function ob(a) {
            for (var b = Qa(a.body, !0), b = (new DOMParser).parseFromString(b, "application/xml"), c = b.getElementsByTagName("HttpHeader"), d = 0; d < c.length; ++d) a.headers[c[d].querySelector("name").textContent] = c[d].querySelector("value").textContent;
            a.body = Xa(b.querySelector("Challenge").textContent).buffer
        }
        k.nb = function(a) {
            a = a.target;
            var b;
            for (b = 0; b < this.a.length && this.a[b].ya != a; ++b);
            if (b != this.a.length) {
                var c = a.keyStatuses,
                    d = !1;
                c.forEach || (c = []);
                c.forEach(function(a, c) {
                    if ("string" == typeof c) {
                        var g = c;
                        c = a;
                        a = g
                    }
                    if ("com.microsoft.playready" == this.b.keySystem && 16 == c.byteLength) {
                        var g = new DataView(c),
                            h = g.getUint32(0, !0),
                            l = g.getUint16(4, !0),
                            n = g.getUint16(6, !0);
                        g.setUint32(0, h, !1);
                        g.setUint16(4, l, !1);
                        g.setUint16(6, n, !1)
                    }
                    "com.microsoft.playready" == this.b.keySystem && "status-pending" == a && (a = "usable");
                    "status-pending" !=
                    a && (this.a[b].loaded = !0, this.a.every(function(a) {
                        return a.loaded
                    }) && this.j.resolve());
                    "expired" == a && (d = !0);
                    g = Za(new Uint8Array(c));
                    this.w[g] = a
                }.bind(this));
                c = a.expiration - Date.now();
                if (0 > c || d && 1E3 > c) this.a.splice(b, 1), a.close();
                Va(this.v)
            }
        };
        k.vc = function() {
            Oa(this.w, function(a, b) {
                return "expired" == b
            }) && this.g(new q(6, 6014));
            this.J(this.w)
        };

        function qb() {
            var a = [],
                b = [{
                    contentType: 'video/mp4; codecs="avc1.42E01E"'
                }, {
                    contentType: 'video/webm; codecs="vp8"'
                }],
                c = [{
                    videoCapabilities: b,
                    persistentState: "required",
                    sessionTypes: ["persistent-license"]
                }, {
                    videoCapabilities: b
                }],
                d = {};
            "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(b) {
                var f = navigator.requestMediaKeySystemAccess(b, c).then(function(a) {
                    return a.createMediaKeys()
                }).then(function(a) {
                    var c = !1;
                    try {
                        a.createSession("persistent-license"), c = !0
                    } catch (f) {}
                    d[b] = {
                        persistentState: c
                    }
                }, function() {
                    d[b] = null
                });
                a.push(f)
            });
            return Promise.all(a).then(function() {
                return d
            })
        };
        var rb = {},
            sb = {};
        m("shaka.media.ManifestParser.registerParserByExtension", function(a, b) {
            sb[a] = b
        });
        m("shaka.media.ManifestParser.registerParserByMime", function(a, b) {
            rb[a] = b
        });

        function tb() {
            var a = {},
                b;
            for (b in rb) a[b] = !0;
            for (b in sb) a[b] = !0;
            ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function(b) {
                a[b] = !!rb[b]
            });
            ["mpd", "m3u8", "ism"].forEach(function(b) {
                a[b] = !!sb[b]
            });
            return a
        }

        function ub(a, b, c, d) {
            var e = d;
            e || (d = (new oa(a)).O.split("/").pop().split("."), 1 < d.length && (d = d.pop().toLowerCase(), e = sb[d]));
            if (e) return Promise.resolve(e);
            c = Ha([a], c);
            c.method = "HEAD";
            return b.request(0, c).then(function(b) {
                (b = b.headers["content-type"]) && (b = b.toLowerCase());
                return (e = rb[b]) ? e : Promise.reject(new q(4, 4E3, a))
            }, function(a) {
                return Promise.reject(a)
            })
        };

        function vb(a, b, c) {
            this.g = E[b];
            this.c = a;
            this.h = 0;
            this.f = Infinity;
            this.a = this.b = null;
            this.i = c
        }
        var E = {};
        m("shaka.media.TextEngine.registerParser", function(a, b) {
            E[a] = b
        });
        m("shaka.media.TextEngine.unregisterParser", function(a) {
            delete E[a]
        });

        function wb(a, b, c) {
            return a >= b ? null : new xb(a, b, c)
        }
        m("shaka.media.TextEngine.makeCue", wb);
        var xb = window.VTTCue || window.TextTrackCue;
        vb.prototype.o = function() {
            this.c && yb(this, function() {
                return !0
            });
            this.c = this.g = null;
            return Promise.resolve()
        };

        function zb(a, b, c, d) {
            var e = a.h;
            return Promise.resolve().then(function() {
                if (this.c) {
                    var a = this.g(b, e, c, d, this.i);
                    if (null != c && null != d) {
                        for (var g = 0; g < a.length && !(a[g].startTime >= this.f); ++g) this.c.addCue(a[g]);
                        null == this.b && (this.b = c);
                        this.a = Math.min(d, this.f)
                    }
                }
            }.bind(a))
        }
        vb.prototype.remove = function(a, b) {
            return Promise.resolve().then(function() {
                this.c && (yb(this, function(c) {
                    return c.startTime >= b || c.endTime <= a ? !1 : !0
                }), null == this.b || b <= this.b || a >= this.a || (a <= this.b && b >= this.a ? this.b = this.a = null : a <= this.b && b < this.a ? this.b = b : a > this.b && b >= this.a && (this.a = a)))
            }.bind(this))
        };

        function Ab(a, b) {
            return null == a.a || a.a < b || b < a.b ? 0 : a.a - b
        }

        function yb(a, b) {
            for (var c = a.c.cues, d = [], e = 0; e < c.length; ++e) b(c[e]) && d.push(c[e]);
            for (e = 0; e < d.length; ++e) a.c.removeCue(d[e])
        };

        function Bb(a) {
            return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
        }

        function Cb(a, b) {
            var c = 0;
            if (!a || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return c;
            for (var d = !1, e = 0; e < a.length; ++e)
                if (b + 1E-4 >= a.start(e) && b < a.end(e)) c += a.end(e) - b, d = !0;
                else if (d && .04 >= a.start(e) - a.end(e - 1)) c += a.end(e) - a.start(e), c += a.start(e) - a.end(e - 1);
            else if (0 < e && b + 1E-4 < a.start(e) && b + 1E-4 >= a.end(e - 1))
                if (.04 >= a.start(e) - b) c += a.end(e) - b, d = !0;
                else break;
            else d = !1;
            return c
        };

        function Db(a, b, c) {
            this.g = a;
            this.f = b;
            this.j = c;
            this.c = {};
            this.b = null;
            this.a = {};
            this.h = new z;
            this.i = !1
        }

        function Eb() {
            var a = {};
            'video/mp4; codecs="avc1.42E01E",audio/mp4; codecs="mp4a.40.2",video/webm; codecs="vp8",video/webm; codecs="vp9",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(b) {
                a[b] = !!E[b] || MediaSource.isTypeSupported(b);
                var c = b.split(";")[0];
                a[c] = a[c] || a[b]
            });
            return a
        }
        k = Db.prototype;
        k.o = function() {
            this.i = !0;
            var a = [],
                b;
            for (b in this.a) {
                var c = this.a[b],
                    d = c[0];
                this.a[b] = c.slice(0, 1);
                d && a.push(d.p["catch"](v));
                for (d = 1; d < c.length; ++d) c[d].p["catch"](v), c[d].p.reject()
            }
            this.b && a.push(this.b.o());
            return Promise.all(a).then(function() {
                this.h.o();
                this.b = this.j = this.f = this.g = this.h = null;
                this.c = {};
                this.a = {}
            }.bind(this))
        };
        k.init = function(a, b) {
            for (var c in a) {
                var d = a[c];
                "text" == c ? this.b = new vb(this.j, d, b) : (d = this.f.addSourceBuffer(d), B(this.h, d, "error", this.Sc.bind(this, c)), B(this.h, d, "updateend", this.va.bind(this, c)), this.c[c] = d, this.a[c] = [])
            }
        };

        function Fb(a, b) {
            var c;
            "text" == b ? c = a.b.b : (c = Gb(a, b), c = !c || 1 == c.length && 1E-6 > c.end(0) - c.start(0) ? null : 1 == c.length && 0 > c.start(0) ? 0 : c.length ? c.start(0) : null);
            return c
        }

        function Hb(a, b, c) {
            "text" == b ? (b = Ab(a.b, c), b || (b = Ab(a.b, c + .1)) && (b += .1)) : (a = Gb(a, b), b = Cb(a, c), b || (b = Cb(a, c + .1)) && (b += .1));
            return b
        }

        function Gb(a, b) {
            try {
                return a.c[b].buffered
            } catch (c) {
                return null
            }
        }

        function Ib(a, b, c, d, e) {
            return "text" == b ? zb(a.b, c, d, e) : Jb(a, b, a.Rc.bind(a, b, c))
        }
        k.remove = function(a, b, c) {
            return "text" == a ? this.b.remove(b, c) : Jb(this, a, this.xb.bind(this, a, b, c))
        };

        function Kb(a, b) {
            return "text" == b ? a.b.remove(0, Infinity) : Promise.all([Jb(a, b, a.xb.bind(a, b, 0, a.f.duration)), Jb(a, b, a.Rb.bind(a, b))])
        }

        function Lb(a, b, c) {
            return "text" == b ? (a.b.h = c, Promise.resolve()) : Jb(a, b, a.Hc.bind(a, b, c))
        }

        function Mb(a, b, c) {
            return "text" == b ? (a.b.f = c, Promise.resolve()) : Promise.all([Jb(a, b, a.Ib.bind(a, b)), Jb(a, b, a.Fc.bind(a, b, c))])
        }
        k.endOfStream = function(a) {
            return Nb(this, function() {
                a ? this.f.endOfStream(a) : this.f.endOfStream()
            }.bind(this))
        };
        k.za = function(a) {
            return Nb(this, function() {
                this.f.duration = a
            }.bind(this))
        };
        k.da = function() {
            return this.f.duration
        };
        k.Rc = function(a, b) {
            this.c[a].appendBuffer(b)
        };
        k.xb = function(a, b, c) {
            c <= b ? this.va(a) : this.c[a].remove(b, c)
        };
        k.Ib = function(a) {
            var b = this.c[a].appendWindowEnd;
            this.c[a].abort();
            this.c[a].appendWindowEnd = b;
            this.va(a)
        };
        k.Rb = function(a) {
            this.g.currentTime -= .001;
            this.va(a)
        };
        k.Hc = function(a, b) {
            this.c[a].timestampOffset = b;
            this.va(a)
        };
        k.Fc = function(a, b) {
            this.c[a].appendWindowEnd = b + .04;
            this.va(a)
        };
        k.Sc = function(a) {
            this.a[a][0].p.reject(new q(3, 3014, this.g.error ? this.g.error.code : 0))
        };
        k.va = function(a) {
            var b = this.a[a][0];
            b && (b.p.resolve(), Ob(this, a))
        };

        function Jb(a, b, c) {
            if (a.i) return Promise.reject();
            c = {
                start: c,
                p: new w
            };
            a.a[b].push(c);
            if (1 == a.a[b].length) try {
                c.start()
            } catch (d) {
                "QuotaExceededError" == d.name ? c.p.reject(new q(3, 3017, b)) : c.p.reject(new q(3, 3015, d)), Ob(a, b)
            }
            return c.p
        }

        function Nb(a, b) {
            if (a.i) return Promise.reject();
            var c = [],
                d;
            for (d in a.c) {
                var e = new w,
                    f = {
                        start: function(a) {
                            a.resolve()
                        }.bind(null, e),
                        p: e
                    };
                a.a[d].push(f);
                c.push(e);
                1 == a.a[d].length && f.start()
            }
            return Promise.all(c).then(function() {
                var a, c;
                try {
                    b()
                } catch (d) {
                    c = Promise.reject(new q(3, 3015, d))
                }
                for (a in this.c) Ob(this, a);
                return c
            }.bind(a), function() {
                return Promise.reject()
            }.bind(a))
        }

        function Ob(a, b) {
            a.a[b].shift();
            var c = a.a[b][0];
            if (c) try {
                c.start()
            } catch (d) {
                c.p.reject(new q(3, 3015, d)), Ob(a, b)
            }
        };

        function Pb(a, b, c) {
            this.a = a;
            this.L = b;
            this.D = c
        }
        m("shaka.media.InitSegmentReference", Pb);

        function F(a, b, c, d, e, f) {
            this.position = a;
            this.startTime = b;
            this.endTime = c;
            this.a = d;
            this.L = e;
            this.D = f
        }
        m("shaka.media.SegmentReference", F);

        function G(a, b) {
            this.j = a;
            this.i = b;
            this.c = this.a = Infinity;
            this.b = 1;
            this.h = this.f = 0;
            this.g = !0
        }
        m("shaka.media.PresentationTimeline", G);
        G.prototype.da = function() {
            return this.a
        };
        G.prototype.getDuration = G.prototype.da;
        G.prototype.za = function(a) {
            this.a = a
        };
        G.prototype.setDuration = G.prototype.za;
        G.prototype.Bb = function(a) {
            this.h = a
        };
        G.prototype.setClockOffset = G.prototype.Bb;
        G.prototype.Eb = function(a) {
            this.g = a
        };
        G.prototype.setStatic = G.prototype.Eb;
        G.prototype.Ub = function() {
            return this.c
        };
        G.prototype.getSegmentAvailabilityDuration = G.prototype.Ub;
        G.prototype.Db = function(a) {
            this.c = a
        };
        G.prototype.setSegmentAvailabilityDuration = G.prototype.Db;
        G.prototype.Ea = function(a, b) {
            b.length && (this.b = b.reduce(function(a, b) {
                return Math.max(a, b.endTime - b.startTime)
            }, this.b), a || (this.f = Math.max(this.f, b[0].startTime)))
        };
        G.prototype.notifySegments = G.prototype.Ea;
        G.prototype.Va = function(a) {
            this.b = Math.max(this.b, a)
        };
        G.prototype.notifyMaxSegmentDuration = G.prototype.Va;
        G.prototype.U = function() {
            return Infinity == this.a && !this.g
        };
        G.prototype.isLive = G.prototype.U;
        G.prototype.fa = function() {
            return Infinity != this.a && !this.g
        };
        G.prototype.isInProgress = G.prototype.fa;
        G.prototype.ra = function() {
            return Math.max(Math.min(this.f, this.ea()), this.sa())
        };
        G.prototype.getEarliestStart = G.prototype.ra;
        G.prototype.sa = function() {
            return Infinity == this.c ? 0 : Math.max(0, this.ea() - this.c - this.i)
        };
        G.prototype.getSegmentAvailabilityStart = G.prototype.sa;
        G.prototype.ea = function() {
            return this.U() || this.fa() ? Math.min(Math.max(0, (Date.now() + this.h) / 1E3 - this.b - this.j), this.a) : this.a
        };
        G.prototype.getSegmentAvailabilityEnd = G.prototype.ea;
        G.prototype.Ra = function() {
            return Math.max(0, this.ea() - (this.U() || this.fa() ? this.i : 0))
        };
        G.prototype.getSeekRangeEnd = G.prototype.Ra;

        function Qb(a, b, c, d, e, f) {
            this.a = a;
            this.c = b;
            this.j = c;
            this.s = d;
            this.l = e;
            this.m = f;
            this.b = new z;
            this.g = !1;
            this.h = 1;
            this.i = this.f = null;
            0 < a.readyState ? this.ob() : B(this.b, a, "loadedmetadata", this.ob.bind(this));
            B(this.b, a, "ratechange", this.ic.bind(this));
            Rb(this)
        }
        k = Qb.prototype;
        k.o = function() {
            var a = this.b.o();
            this.b = null;
            Sb(this);
            null != this.f && (window.clearInterval(this.f), this.f = null);
            this.m = this.l = this.c = this.a = null;
            return a
        };

        function Tb(a) {
            return 0 < a.a.readyState ? Ub(a, a.a.currentTime) : Vb(a)
        }

        function Vb(a) {
            return a.s ? Ub(a, a.s) : Infinity > a.c.da() ? a.c.ra() : Math.max(a.c.Ra(), a.c.ra())
        }

        function Wb(a, b) {
            b != a.g && (a.g = b, Xb(a, a.h), a.l(b))
        }

        function Rb(a) {
            Sb(a);
            a.i = window.setTimeout(a.mc.bind(a), 250)
        }

        function Sb(a) {
            a.i && (window.clearTimeout(a.i), a.i = null)
        }
        k.mc = function() {
            this.i = null;
            Rb(this);
            var a = Cb(this.a.buffered, this.a.currentTime),
                b = Bb(this.a.buffered) >= this.a.duration - .05 || this.a.ended;
            this.g ? (b || a > this.j) && Wb(this, !1) : !b && .5 > a && Wb(this, !0)
        };
        k.Qa = function() {
            return this.h
        };

        function Xb(a, b) {
            null != a.f && (window.clearInterval(a.f), a.f = null);
            a.h = b;
            a.a.playbackRate = a.g || 0 > b ? 0 : b;
            !a.g && 0 > b && (a.f = window.setInterval(function() {
                this.a.currentTime += b / 4
            }.bind(a), 250))
        }
        k.ic = function() {
            this.a.playbackRate != (this.g || 0 > this.h ? 0 : this.h) && Xb(this, this.a.playbackRate)
        };
        k.ob = function() {
            this.b.ja(this.a, "loadedmetadata");
            var a = Vb(this);
            .001 > Math.abs(this.a.currentTime - a) ? (B(this.b, this.a, "seeking", this.qb.bind(this)), B(this.b, this.a, "playing", this.pb.bind(this))) : (B(this.b, this.a, "seeking", this.kc.bind(this)), this.a.currentTime = a)
        };
        k.kc = function() {
            this.b.ja(this.a, "seeking");
            B(this.b, this.a, "seeking", this.qb.bind(this));
            B(this.b, this.a, "playing", this.pb.bind(this))
        };
        k.qb = function() {
            var a = this.a.currentTime,
                b = Yb(this, a);
            .001 < Math.abs(b - a) ? Zb(this, a, b) : this.m()
        };
        k.pb = function() {
            var a = this.a.currentTime,
                b = Yb(this, a);
            .001 < Math.abs(b - a) && Zb(this, a, b)
        };

        function Yb(a, b) {
            var c = a.c,
                d = c.ra(),
                e = c.ea();
            if (!c.U() || Infinity == c.c) return b < d ? d : b > e ? e : b;
            c = d + 1;
            d = c + a.j;
            return b >= d && b <= e || Cb(a.a.buffered, b) && b >= c && b <= e ? b : b > e ? e : e < d && b >= c && b <= e ? b : Math.min(d + 2, e)
        }

        function Zb(a, b, c) {
            a.a.currentTime = c;
            var d = 0,
                e = function() {
                    !this.a || 10 <= d++ || this.a.currentTime != b || (this.a.currentTime = c, setTimeout(e, 100))
                }.bind(a);
            setTimeout(e, 100)
        }

        function Ub(a, b) {
            var c = a.c.ra();
            if (b < c) return c;
            c = a.c.ea();
            return b > c ? c : b
        };

        function $b(a, b, c, d, e, f, g, h, l) {
            this.m = a;
            this.f = b;
            this.S = c;
            this.a = d;
            this.G = e;
            this.v = f;
            this.j = g;
            this.w = h || null;
            this.A = l || null;
            this.g = null;
            this.i = 1;
            this.C = Promise.resolve();
            this.h = [];
            this.l = {};
            this.b = {};
            this.c = this.s = this.J = !1
        }
        $b.prototype.o = function() {
            for (var a in this.b) ac(this.b[a]);
            this.g = this.b = this.l = this.h = this.A = this.w = this.j = this.v = this.G = this.C = this.a = this.S = this.f = this.m = null;
            this.c = !0;
            return Promise.resolve()
        };
        $b.prototype.configure = function(a) {
            this.g = a;
            this.m.j = this.i * Math.max(this.a.minBufferTime || 0, this.g.rebufferingGoal)
        };
        $b.prototype.init = function() {
            var a = this.G(this.a.periods[bc(this, Tb(this.m))]);
            return Ma(a) ? Promise.reject(new q(5, 5005)) : cc(this, a).then(function() {
                this.w && this.w()
            }.bind(this))
        };

        function dc(a) {
            return a.a.periods[bc(a, Tb(a.m))]
        }

        function ec(a) {
            return Na(a.b, function(a) {
                return a.stream
            })
        }

        function fc(a, b) {
            var c = {};
            c.text = b;
            return cc(a, c)
        }

        function gc(a, b, c, d) {
            var e = a.b[b];
            !e && "text" == b && a.g.ignoreTextStreamFailures ? fc(a, c) : e && (b = a.h[hc(a, c)]) && b.xa && (b = a.l[c.id]) && b.xa && e.stream != c && (e.stream = c, e.Ja = !0, d && !e.ba && (e.ga ? e.la = !0 : (ac(e), ic(a, e))))
        }

        function cc(a, b) {
            var c = bc(a, Tb(a.m)),
                d = Na(b, function(a) {
                    return a.mimeType + (a.codecs ? '; codecs="' + a.codecs + '"' : "")
                });
            a.f.init(d, a.g.useRelativeCueTimestamps);
            jc(a);
            d = C(b);
            return kc(a, d).then(function() {
                if (!this.c)
                    for (var a in b) {
                        var d = b[a];
                        this.b[a] || (this.b[a] = {
                            stream: d,
                            type: a,
                            ta: null,
                            V: null,
                            Ja: !0,
                            Ka: c,
                            endOfStream: !1,
                            ga: !1,
                            aa: null,
                            la: !1,
                            ba: !1,
                            Za: !1
                        }, lc(this, this.b[a], 0))
                    }
            }.bind(a))
        }

        function mc(a, b) {
            var c = a.h[b];
            if (c) return c.I;
            c = {
                I: new w,
                xa: !1
            };
            a.h[b] = c;
            var d = a.a.periods[b].streamSets.map(function(a) {
                return a.streams
            }).reduce(u, []);
            a.C = a.C.then(function() {
                if (!this.c) return kc(this, d)
            }.bind(a)).then(function() {
                this.c || (this.h[b].I.resolve(), this.h[b].xa = !0)
            }.bind(a))["catch"](function(a) {
                this.c || (this.h[b].I.reject(), delete this.h[b], this.j(a))
            }.bind(a));
            return c.I
        }

        function kc(a, b) {
            for (var c = [], d = 0; d < b.length; ++d) {
                var e = b[d],
                    f = a.l[e.id];
                f ? c.push(f.I) : (a.l[e.id] = {
                    I: new w,
                    xa: !1
                }, c.push(e.createSegmentIndex()))
            }
            return Promise.all(c).then(function() {
                if (!this.c)
                    for (var a = 0; a < b.length; ++a) {
                        var c = this.l[b[a].id];
                        c.xa || (c.I.resolve(), c.xa = !0)
                    }
            }.bind(a))["catch"](function(a) {
                if (!this.c) return this.l[e.id].I.reject(), delete this.l[e.id], Promise.reject(a)
            }.bind(a))
        }

        function jc(a) {
            var b = a.a.presentationTimeline.da();
            Infinity > b ? a.f.za(b) : a.f.za(Math.pow(2, 32))
        }
        $b.prototype.X = function(a) {
            if (!this.c && !a.ga && null != a.aa && !a.ba)
                if (a.aa = null, a.la) ic(this, a);
                else {
                    try {
                        var b = nc(this, a);
                        null != b && lc(this, a, b)
                    } catch (c) {
                        this.j(c);
                        return
                    }
                    b = C(this.b);
                    oc(this, a);
                    b.every(function(a) {
                        return a.endOfStream
                    }) && this.f.endOfStream()
                }
        };

        function nc(a, b) {
            var c = Tb(a.m),
                d, e;
            e = a.f;
            var f = b.type;
            e = "text" == f ? e.b.a : Bb(Gb(e, f));
            var f = b.ta && b.V ? a.a.periods[hc(a, b.ta)].startTime + b.V.endTime : c,
                g = hc(a, b.stream),
                h = bc(a, f),
                l = a.a.periods[h];
            g != h ? d = null : d = pc(a, b, c, e, h);
            if ((d ? l.startTime + d.startTime - c : Hb(a.f, b.type, c)) >= Math.max(a.i * Math.max(a.a.minBufferTime || 0, a.g.rebufferingGoal), a.i * a.g.bufferingGoal)) return .5;
            if (f >= a.a.presentationTimeline.da()) return b.endOfStream = !0, null;
            b.endOfStream = !1;
            if (h != g) return b.Ka = h, null;
            d = pc(a, b, c, e, g);
            if (!d) return 1;
            qc(a, b, c, g, d);
            return null
        }

        function pc(a, b, c, d, e) {
            if (b.V && b.stream == b.ta) return c = b.V.position + 1, rc(a, b, e, c);
            c = b.V ? b.stream.findSegmentPosition(Math.max(0, a.a.periods[hc(a, b.ta)].startTime + b.V.endTime - a.a.periods[e].startTime)) : b.stream.findSegmentPosition(Math.max(0, (d || c) - a.a.periods[e].startTime));
            if (null == c) return null;
            var f = null;
            null == d && (f = rc(a, b, e, Math.max(0, c - 1)));
            return f || rc(a, b, e, c)
        }

        function rc(a, b, c, d) {
            c = a.a.periods[c];
            b = b.stream.getSegmentReference(d);
            if (!b) return null;
            a = a.a.presentationTimeline;
            d = a.ea();
            return c.startTime + b.endTime < a.sa() || c.startTime + b.startTime > d ? null : b
        }

        function qc(a, b, c, d, e) {
            var f = a.a.periods[d],
                g = b.stream,
                h = a.a.periods[d + 1],
                l = null,
                l = h ? h.startTime : a.a.presentationTimeline.da();
            d = sc(a, b, d, l);
            b.ga = !0;
            b.Ja = !1;
            h = tc(a, e);
            Promise.all([d, h]).then(function(a) {
                if (!this.c && !this.s) return uc(this, b, c, f, g, e, a[1])
            }.bind(a)).then(function() {
                this.c || this.s || (b.ga = !1, b.Za = !1, lc(this, b, 0), vc(this, g))
            }.bind(a))["catch"](function(a) {
                this.c || this.s || (b.ga = !1, 1001 == a.code || 1002 == a.code || 1003 == a.code ? "text" == b.type && this.g.ignoreTextStreamFailures && 1001 == a.code ? delete this.b.text :
                    (this.j(a), lc(this, b, 4)) : 3017 == a.code ? wc(this, b, a) : this.j(a))
            }.bind(a))
        }

        function wc(a, b, c) {
            if (!C(a.b).some(function(a) {
                    return a != b && a.Za
                })) {
                var d = Math.round(100 * a.i);
                if (20 < d) a.i -= .2;
                else if (4 < d) a.i -= .04;
                else {
                    a.s = !0;
                    a.j(c);
                    return
                }
                b.Za = !0
            }
            lc(a, b, 4)
        }

        function sc(a, b, c, d) {
            if (!b.Ja) return Promise.resolve();
            c = Lb(a.f, b.type, a.a.periods[c].startTime - b.stream.presentationTimeOffset);
            d = null != d ? Mb(a.f, b.type, d) : Promise.resolve();
            if (!b.stream.initSegmentReference) return Promise.all([c, d]);
            a = tc(a, b.stream.initSegmentReference).then(function(a) {
                if (!this.c) return Ib(this.f, b.type, a, null, null)
            }.bind(a))["catch"](function(a) {
                b.Ja = !0;
                return Promise.reject(a)
            });
            return Promise.all([c, d, a])
        }

        function uc(a, b, c, d, e, f, g) {
            return xc(a, b, c).then(function() {
                if (!this.c) return Ib(this.f, b.type, g, f.startTime + d.startTime, f.endTime + d.startTime)
            }.bind(a)).then(function() {
                if (!this.c) return b.ta = e, b.V = f, Promise.resolve()
            }.bind(a))
        }

        function xc(a, b, c) {
            var d = Fb(a.f, b.type);
            if (null == d) return Promise.resolve();
            c = c - d - a.g.bufferBehind;
            return 0 >= c ? Promise.resolve() : a.f.remove(b.type, d, d + c).then(function() {}.bind(a))
        }

        function vc(a, b) {
            if (!a.J && (a.J = C(a.b).every(function(a) {
                    return !a.la && !a.ba && a.V
                }), a.J)) {
                var c = hc(a, b);
                a.h[c] || mc(a, c).then(function() {
                    this.v()
                }.bind(a))["catch"](v);
                for (c = 0; c < a.a.periods.length; ++c) mc(a, c)["catch"](v);
                a.A && a.A()
            }
        }

        function oc(a, b) {
            if (b.Ka != hc(a, b.stream)) {
                var c = b.Ka,
                    d = C(a.b);
                d.every(function(a) {
                    return a.Ka == c
                }) && d.every(yc) && mc(a, c).then(function() {
                    if (!this.c) {
                        var a = this.G(this.a.periods[c]),
                            b;
                        for (b in this.b)
                            if (!a[b]) {
                                this.j(new q(5, 5005));
                                return
                            }
                        for (b in a)
                            if (!(this.b[b] || "text" == b && this.g.ignoreTextStreamFailures)) {
                                this.j(new q(5, 5005));
                                return
                            }
                        for (b in this.b) {
                            gc(this, b, a[b], !1);
                            var d = this.b[b];
                            yc(d) && lc(this, d, 0)
                        }
                        this.v()
                    }
                }.bind(a))["catch"](v)
            }
        }

        function yc(a) {
            return !a.ga && null == a.aa && !a.la && !a.ba
        }

        function bc(a, b) {
            for (var c = a.a.periods.length - 1; 0 < c; --c)
                if (b >= a.a.periods[c].startTime) return c;
            return 0
        }

        function hc(a, b) {
            for (var c = 0; c < a.a.periods.length; ++c)
                for (var d = a.a.periods[c], e = 0; e < d.streamSets.length; ++e)
                    if (0 <= d.streamSets[e].streams.indexOf(b)) return c;
            return -1
        }

        function tc(a, b) {
            var c = Ha(b.a(), a.g.retryParameters);
            if (b.L || null != b.D) {
                var d = "bytes=" + b.L + "-";
                null != b.D && (d += b.D);
                c.headers.Range = d
            }
            return a.S.request(1, c).then(function(a) {
                return a.data
            })
        }

        function ic(a, b) {
            b.la = !1;
            b.ba = !0;
            Kb(a.f, b.type).then(function() {
                this.c || (b.ta = null, b.V = null, b.ba = !1, lc(this, b, 0))
            }.bind(a))
        }

        function lc(a, b, c) {
            b.aa = window.setTimeout(a.X.bind(a, b), 1E3 * c)
        }

        function ac(a) {
            null != a.aa && (window.clearTimeout(a.aa), a.aa = null)
        };

        function zc() {
            this.a = Promise.resolve();
            this.c = this.b = this.f = !1;
            this.g = new Promise(function(a) {
                this.h = a
            }.bind(this))
        }
        zc.prototype.then = function(a) {
            this.a = this.a.then(a).then(function(a) {
                return this.c ? (this.h(), Promise.reject(this.i)) : Promise.resolve(a)
            }.bind(this));
            return this
        };

        function Ac(a) {
            a.f || (a.a = a.a.then(function(a) {
                this.b = !0;
                return Promise.resolve(a)
            }.bind(a), function(a) {
                this.b = !0;
                return Promise.reject(a)
            }.bind(a)));
            a.f = !0;
            return a.a
        }

        function Bc(a, b) {
            if (a.b) return Promise.resolve();
            a.c = !0;
            a.i = b;
            return a.g
        };

        function Cc(a, b, c, d, e) {
            var f = e in d,
                g;
            for (g in b) {
                var h = e + "." + g,
                    l = f ? d[e] : c[g],
                    n = !!{
                        ".abr.manager": !0
                    }[h];
                if (f || g in a) void 0 === b[g] ? void 0 === l || f ? delete a[g] : a[g] = l : n ? a[g] = b[g] : "object" == typeof a[g] && "object" == typeof b[g] ? Cc(a[g], b[g], l, d, h) : typeof b[g] == typeof l && (a[g] = b[g])
            }
        };

        function H(a, b) {
            var c = b || {},
                d;
            for (d in c) this[d] = c[d];
            this.defaultPrevented = this.cancelable = this.bubbles = !1;
            this.timeStamp = window.performance ? window.performance.now() : Date.now();
            this.type = a;
            this.isTrusted = !1;
            this.target = this.currentTarget = null;
            this.a = !1
        }
        H.prototype.preventDefault = function() {};
        H.prototype.stopImmediatePropagation = function() {
            this.a = !0
        };
        H.prototype.stopPropagation = function() {};

        function p() {
            this.Aa = new Ja;
            this.S = this
        }
        p.prototype.addEventListener = function(a, b) {
            this.Aa.push(a, b)
        };
        p.prototype.removeEventListener = function(a, b) {
            this.Aa.remove(a, b)
        };
        p.prototype.dispatchEvent = function(a) {
            for (var b = this.Aa.get(a.type) || [], c = 0; c < b.length; ++c) {
                a.target = this.S;
                a.currentTarget = this.S;
                var d = b[c];
                try {
                    d.handleEvent ? d.handleEvent(a) : d.call(this, a)
                } catch (e) {}
                if (a.a) break
            }
            return a.defaultPrevented
        };

        function Dc(a, b, c) {
            return c == b || a >= Ec && c == b.split("-")[0] || a >= Fc && c.split("-")[0] == b.split("-")[0] ? !0 : !1
        }
        var Ec = 1,
            Fc = 2;

        function Gc(a) {
            a = a.toLowerCase().split("-");
            var b = Hc[a[0]];
            b && (a[0] = b);
            return a.join("-")
        }
        var Hc = {
            aar: "aa",
            abk: "ab",
            afr: "af",
            aka: "ak",
            alb: "sq",
            amh: "am",
            ara: "ar",
            arg: "an",
            arm: "hy",
            asm: "as",
            ava: "av",
            ave: "ae",
            aym: "ay",
            aze: "az",
            bak: "ba",
            bam: "bm",
            baq: "eu",
            bel: "be",
            ben: "bn",
            bih: "bh",
            bis: "bi",
            bod: "bo",
            bos: "bs",
            bre: "br",
            bul: "bg",
            bur: "my",
            cat: "ca",
            ces: "cs",
            cha: "ch",
            che: "ce",
            chi: "zh",
            chu: "cu",
            chv: "cv",
            cor: "kw",
            cos: "co",
            cre: "cr",
            cym: "cy",
            cze: "cs",
            dan: "da",
            deu: "de",
            div: "dv",
            dut: "nl",
            dzo: "dz",
            ell: "el",
            eng: "en",
            epo: "eo",
            est: "et",
            eus: "eu",
            ewe: "ee",
            fao: "fo",
            fas: "fa",
            fij: "fj",
            fin: "fi",
            fra: "fr",
            fre: "fr",
            fry: "fy",
            ful: "ff",
            geo: "ka",
            ger: "de",
            gla: "gd",
            gle: "ga",
            glg: "gl",
            glv: "gv",
            gre: "el",
            grn: "gn",
            guj: "gu",
            hat: "ht",
            hau: "ha",
            heb: "he",
            her: "hz",
            hin: "hi",
            hmo: "ho",
            hrv: "hr",
            hun: "hu",
            hye: "hy",
            ibo: "ig",
            ice: "is",
            ido: "io",
            iii: "ii",
            iku: "iu",
            ile: "ie",
            ina: "ia",
            ind: "id",
            ipk: "ik",
            isl: "is",
            ita: "it",
            jav: "jv",
            jpn: "ja",
            kal: "kl",
            kan: "kn",
            kas: "ks",
            kat: "ka",
            kau: "kr",
            kaz: "kk",
            khm: "km",
            kik: "ki",
            kin: "rw",
            kir: "ky",
            kom: "kv",
            kon: "kg",
            kor: "ko",
            kua: "kj",
            kur: "ku",
            lao: "lo",
            lat: "la",
            lav: "lv",
            lim: "li",
            lin: "ln",
            lit: "lt",
            ltz: "lb",
            lub: "lu",
            lug: "lg",
            mac: "mk",
            mah: "mh",
            mal: "ml",
            mao: "mi",
            mar: "mr",
            may: "ms",
            mkd: "mk",
            mlg: "mg",
            mlt: "mt",
            mon: "mn",
            mri: "mi",
            msa: "ms",
            mya: "my",
            nau: "na",
            nav: "nv",
            nbl: "nr",
            nde: "nd",
            ndo: "ng",
            nep: "ne",
            nld: "nl",
            nno: "nn",
            nob: "nb",
            nor: "no",
            nya: "ny",
            oci: "oc",
            oji: "oj",
            ori: "or",
            orm: "om",
            oss: "os",
            pan: "pa",
            per: "fa",
            pli: "pi",
            pol: "pl",
            por: "pt",
            pus: "ps",
            que: "qu",
            roh: "rm",
            ron: "ro",
            rum: "ro",
            run: "rn",
            rus: "ru",
            sag: "sg",
            san: "sa",
            sin: "si",
            slk: "sk",
            slo: "sk",
            slv: "sl",
            sme: "se",
            smo: "sm",
            sna: "sn",
            snd: "sd",
            som: "so",
            sot: "st",
            spa: "es",
            sqi: "sq",
            srd: "sc",
            srp: "sr",
            ssw: "ss",
            sun: "su",
            swa: "sw",
            swe: "sv",
            tah: "ty",
            tam: "ta",
            tat: "tt",
            tel: "te",
            tgk: "tg",
            tgl: "tl",
            tha: "th",
            tib: "bo",
            tir: "ti",
            ton: "to",
            tsn: "tn",
            tso: "ts",
            tuk: "tk",
            tur: "tr",
            twi: "tw",
            uig: "ug",
            ukr: "uk",
            urd: "ur",
            uzb: "uz",
            ven: "ve",
            vie: "vi",
            vol: "vo",
            wel: "cy",
            wln: "wa",
            wol: "wo",
            xho: "xh",
            yid: "yi",
            yor: "yo",
            zha: "za",
            zho: "zh",
            zul: "zu"
        };

        function Ic(a, b, c) {
            var d = !1;
            a.streamSets.forEach(function(a) {
                a.streams.forEach(function(f) {
                    var g = f.allowedByApplication;
                    f.allowedByApplication = !0;
                    if ("video" == a.type) {
                        if (f.width < b.minWidth || f.width > b.maxWidth || f.width > c.width || f.height < b.minHeight || f.height > b.maxHeight || f.height > c.height || f.width * f.height < b.minPixels || f.width * f.height > b.maxPixels || f.bandwidth < b.minVideoBandwidth || f.bandwidth > b.maxVideoBandwidth) f.allowedByApplication = !1
                    } else "audio" == a.type && (f.bandwidth < b.minAudioBandwidth || f.bandwidth >
                        b.maxAudioBandwidth) && (f.allowedByApplication = !1);
                    g != f.allowedByApplication && (d = !0)
                })
            });
            return d
        }

        function Jc(a, b, c) {
            var d = "",
                e = null;
            a && a.A && (d = a.keySystem(), e = a.m);
            for (a = 0; a < c.streamSets.length; ++a) {
                var f = c.streamSets[a];
                if (d && f.drmInfos.length && !f.drmInfos.some(function(a) {
                        return a.keySystem == d
                    })) c.streamSets.splice(a, 1), --a;
                else {
                    for (var g = b[f.type], h = 0; h < f.streams.length; ++h) {
                        var l = f.streams[h],
                            n = l.mimeType;
                        l.codecs && (n += '; codecs="' + l.codecs + '"');
                        E[n] || MediaSource.isTypeSupported(n) ? e && l.encrypted && 0 > e.indexOf(n) ? (f.streams.splice(h, 1), --h) : !g || l.mimeType == g.mimeType && l.codecs.split(".")[0] ==
                            g.codecs.split(".")[0] || (f.streams.splice(h, 1), --h) : (f.streams.splice(h, 1), --h)
                    }
                    f.streams.length || (c.streamSets.splice(a, 1), --a)
                }
            }
        }

        function Kc(a, b) {
            return a.streamSets.map(function(a) {
                var d = b ? b[a.type] : null;
                return a.streams.filter(function(a) {
                    return a.allowedByApplication && a.allowedByKeySystem
                }).map(function(b) {
                    return {
                        id: b.id,
                        active: d == b,
                        type: a.type,
                        bandwidth: b.bandwidth,
                        language: a.language,
                        kind: b.kind || null,
                        width: b.width || null,
                        height: b.height || null,
                        frameRate: b.frameRate || void 0,
                        codecs: b.codecs || null
                    }
                })
            }).reduce(u, [])
        }

        function Lc(a, b) {
            for (var c = 0; c < a.streamSets.length; c++)
                for (var d = a.streamSets[c], e = 0; e < d.streams.length; e++) {
                    var f = d.streams[e];
                    if (f.id == b.id) return {
                        stream: f,
                        Uc: d
                    }
                }
            return null
        }

        function Mc(a) {
            return a.streams.some(function(a) {
                return a.allowedByApplication && a.allowedByKeySystem
            })
        }

        function Nc(a, b, c) {
            var d = {};
            a.streamSets.forEach(function(a) {
                !Mc(a) || a.type in d || (d[a.type] = a)
            });
            var e = 0;
            a.streamSets.forEach(function(a) {
                if (Mc(a) && "video" == a.type) {
                    var b = Oc(a);
                    b > e ? (e = b, d.video = a) : b == e && Pc(a) < Pc(d.video) && (d.video = a)
                }
            });
            a.streamSets.forEach(function(a) {
                Mc(a) && a.primary && (d[a.type].primary ? Pc(a) < Pc(d[a.type]) && (d[a.type] = a) : d[a.type] = a)
            });
            [Fc, Ec, 0].forEach(function(e) {
                a.streamSets.forEach(function(a) {
                    if (Mc(a)) {
                        var h;
                        "audio" == a.type ? h = b.preferredAudioLanguage : "text" == a.type && (h = b.preferredTextLanguage);
                        if (h) {
                            h = Gc(h);
                            var l = Gc(a.language);
                            Dc(e, h, l) && (a.language == d[a.type].language ? Pc(a) < Pc(d[a.type]) && (d[a.type] = a) : d[a.type] = a, c && (c[a.type] = !0))
                        }
                    }
                })
            });
            return d
        }

        function Pc(a) {
            var b = 0;
            if (!a || 1 > a.streams.length) return b;
            a.streams.forEach(function(a) {
                b += a.bandwidth
            });
            return b / a.streams.length
        }

        function Oc(a) {
            var b = 0;
            if (!a) return b;
            a.streams.forEach(function(a) {
                a.height > b && (b = a.height)
            });
            return b
        };

        function I(a, b) {
            p.call(this);
            this.w = !1;
            this.f = a;
            this.m = null;
            this.v = new z;
            this.fb = new ja;
            this.na = this.c = this.l = this.b = this.i = this.oa = this.G = this.A = this.g = this.h = null;
            this.Hb = 1E9;
            this.ma = [];
            this.Na = !1;
            this.qa = !0;
            this.j = null;
            this.s = {};
            this.a = Qc(this);
            this.Ba = {
                width: Infinity,
                height: Infinity
            };
            this.C = [];
            this.X = this.J = this.pa = 0;
            b && b(this);
            this.h = new y(this.Mc.bind(this));
            this.oa = Rc(this);
            for (var c = 0; c < this.f.textTracks.length; ++c) {
                var d = this.f.textTracks[c];
                d.mode = "disabled";
                "Shaka Player TextTrack" == d.label &&
                    (this.m = d)
            }
            this.m || (this.m = this.f.addTextTrack("subtitles", "Shaka Player TextTrack"));
            this.m.mode = "hidden";
            B(this.v, this.f, "error", this.lc.bind(this))
        }
        ba(I);
        m("shaka.Player", I);
        I.prototype.o = function() {
            this.w = !0;
            var a = Promise.resolve();
            this.j && (a = Bc(this.j, new q(7, 7E3)));
            return a.then(function() {
                var a = Promise.all([Sc(this), this.v ? this.v.o() : null, this.h ? this.h.o() : null]);
                this.a = this.h = this.fb = this.v = this.m = this.f = null;
                return a
            }.bind(this))
        };
        I.prototype.destroy = I.prototype.o;
        I.version = "v2.0.1";
        var Tc = {};
        I.registerSupportPlugin = function(a, b) {
            Tc[a] = b
        };
        I.isBrowserSupported = function() {
            return !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach && !!window.MediaSource && !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration
        };
        I.probeSupport = function() {
            return qb().then(function(a) {
                var b = tb(),
                    c = Eb();
                a = {
                    manifest: b,
                    media: c,
                    drm: a
                };
                for (var d in Tc) a[d] = Tc[d]();
                return a
            })
        };
        I.prototype.load = function(a, b, c) {
            var d = this.eb(),
                e = new zc;
            this.j = e;
            this.dispatchEvent(new H("loading"));
            return Ac(e.then(function() {
                return d
            }).then(function() {
                return ub(a, this.h, this.a.manifest.retryParameters, c)
            }.bind(this)).then(function(b) {
                this.l = new b;
                this.l.configure(this.a.manifest);
                return this.l.start(a, this.h, this.La.bind(this), this.$.bind(this), this.Jc.bind(this))
            }.bind(this)).then(function(b) {
                this.c = b;
                this.na = a;
                this.g = new ab(this.h, this.$.bind(this), this.Kc.bind(this));
                this.g.configure(this.a.drm);
                return this.g.init(b, !1)
            }.bind(this)).then(function() {
                this.c.periods.forEach(this.La.bind(this));
                this.X = Date.now() / 1E3;
                return Promise.all([db(this.g, this.f), this.oa])
            }.bind(this)).then(function() {
                this.i = new Qb(this.f, this.c.presentationTimeline, 1 * Math.max(this.c.minBufferTime || 0, this.a.streaming.rebufferingGoal), b || null, this.Fb.bind(this), this.Lc.bind(this));
                this.G = new Db(this.f, this.A, this.m);
                this.b = new $b(this.i, this.G, this.h, this.c, this.Ic.bind(this), this.Kb.bind(this), this.$.bind(this));
                this.b.configure(this.a.streaming);
                return this.b.init()
            }.bind(this)).then(function() {
                this.c.periods.forEach(this.La.bind(this));
                Uc(this);
                Vc(this);
                this.a.abr.manager.init(this.bb.bind(this));
                this.j = null
            }.bind(this)))["catch"](function(a) {
                this.j == e && (this.j = null, this.dispatchEvent(new H("unloading")));
                return Promise.reject(a)
            }.bind(this))
        };
        I.prototype.load = I.prototype.load;

        function Rc(a) {
            a.A = new MediaSource;
            var b = new w;
            B(a.v, a.A, "sourceopen", b.resolve);
            a.f.src = window.URL.createObjectURL(a.A);
            return b
        }
        I.prototype.configure = function(a) {
            a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.bb.bind(this)));
            Cc(this.a, a, Qc(this), Wc(), "");
            Xc(this)
        };
        I.prototype.configure = I.prototype.configure;

        function Xc(a) {
            a.l && a.l.configure(a.a.manifest);
            a.g && a.g.configure(a.a.drm);
            a.b && (a.b.configure(a.a.streaming), a.c.periods.forEach(a.La.bind(a)), Yc(a, dc(a.b)));
            a.a.abr.enabled && !a.qa ? a.a.abr.manager.enable() : a.a.abr.manager.disable();
            a.a.abr.manager.setDefaultEstimate(a.a.abr.defaultBandwidthEstimate)
        }
        I.prototype.getConfiguration = function() {
            var a = Qc(this);
            Cc(a, this.a, Qc(this), Wc(), "");
            return a
        };
        I.prototype.getConfiguration = I.prototype.getConfiguration;
        I.prototype.Ac = function() {
            var a = Qc(this);
            a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.bb.bind(this)));
            this.a = Qc(this);
            Xc(this)
        };
        I.prototype.resetConfiguration = I.prototype.Ac;
        I.prototype.kb = function() {
            return this.h
        };
        I.prototype.getNetworkingEngine = I.prototype.kb;
        I.prototype.Sb = function() {
            return this.na
        };
        I.prototype.getManifestUri = I.prototype.Sb;
        I.prototype.U = function() {
            return this.c ? this.c.presentationTimeline.U() : !1
        };
        I.prototype.isLive = I.prototype.U;
        I.prototype.fa = function() {
            return this.c ? this.c.presentationTimeline.fa() : !1
        };
        I.prototype.isInProgress = I.prototype.fa;
        I.prototype.Dc = function() {
            var a = 0,
                b = 0;
            this.c && (b = this.c.presentationTimeline, a = b.sa(), b = b.Ra());
            return {
                start: a,
                end: b
            }
        };
        I.prototype.seekRange = I.prototype.Dc;
        I.prototype.keySystem = function() {
            return this.g ? this.g.keySystem() : ""
        };
        I.prototype.keySystem = I.prototype.keySystem;
        I.prototype.drmInfo = function() {
            return this.g ? this.g.b : null
        };
        I.prototype.drmInfo = I.prototype.drmInfo;
        I.prototype.Wb = function() {
            return this.Na
        };
        I.prototype.isBuffering = I.prototype.Wb;
        I.prototype.eb = function() {
            if (this.w) return Promise.resolve();
            this.dispatchEvent(new H("unloading"));
            if (this.j) {
                var a = new q(7, 7E3);
                return Bc(this.j, a).then(this.yb.bind(this))
            }
            return this.yb()
        };
        I.prototype.unload = I.prototype.eb;
        I.prototype.Qa = function() {
            return this.i ? this.i.Qa() : 0
        };
        I.prototype.getPlaybackRate = I.prototype.Qa;
        I.prototype.Xc = function(a) {
            this.i && Xb(this.i, a)
        };
        I.prototype.trickPlay = I.prototype.Xc;
        I.prototype.Lb = function() {
            this.i && Xb(this.i, 1)
        };
        I.prototype.cancelTrickPlay = I.prototype.Lb;
        I.prototype.getTracks = function() {
            if (!this.b) return [];
            var a = ec(this.b);
            return Kc(dc(this.b), a).filter(function(a) {
                return 0 > this.ma.indexOf(a.id)
            }.bind(this))
        };
        I.prototype.getTracks = I.prototype.getTracks;
        I.prototype.Ec = function(a, b) {
            if (this.b) {
                var c = Lc(dc(this.b), a);
                if (c) {
                    var d = c.stream;
                    d.allowedByApplication && d.allowedByKeySystem && (this.C.push({
                        timestamp: Date.now() / 1E3,
                        id: d.id,
                        type: a.type,
                        fromAdaptation: !1
                    }), c = {}, c[a.type] = d, "text" != a.type && (d = ec(this.b).text, this.configure({
                        abr: {
                            enabled: !1
                        }
                    }), c.text = d), Zc(this, c, b))
                }
            }
        };
        I.prototype.selectTrack = I.prototype.Ec;
        I.prototype.Zb = function() {
            return "showing" == this.m.mode
        };
        I.prototype.isTextTrackVisible = I.prototype.Zb;
        I.prototype.Gc = function(a) {
            this.m.mode = a ? "showing" : "hidden";
            $c(this)
        };
        I.prototype.setTextTrackVisibility = I.prototype.Gc;
        I.prototype.getStats = function() {
            ad(this);
            var a = {},
                b = {},
                c = this.f && this.f.getVideoPlaybackQuality ? this.f.getVideoPlaybackQuality() : {};
            this.b && (b = ec(this.b), a = b.video || {}, b = b.audio || {});
            return {
                width: a.width || 0,
                height: a.height || 0,
                streamBandwidth: a.bandwidth + b.bandwidth || 0,
                decodedFrames: Number(c.totalVideoFrames),
                droppedFrames: Number(c.droppedVideoFrames),
                estimatedBandwidth: this.a.abr.manager.getBandwidthEstimate(),
                playTime: this.pa,
                bufferingTime: this.J,
                switchHistory: this.C.slice(0)
            }
        };
        I.prototype.getStats = I.prototype.getStats;
        I.prototype.addTextTrack = function(a, b, c, d, e) {
            if (!this.b) return Promise.reject();
            for (var f = dc(this.b), g, h = 0; h < this.c.periods.length; h++)
                if (this.c.periods[h] == f) {
                    if (h == this.c.periods.length - 1) {
                        if (g = this.c.presentationTimeline.da() - f.startTime, Infinity == g) return Promise.reject()
                    } else g = this.c.periods[h + 1].startTime - f.startTime;
                    break
                }
            var l = {
                id: this.Hb++,
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: function() {
                    return 1
                },
                getSegmentReference: function(b) {
                    return 1 != b ? null : new F(1, 0,
                        g,
                        function() {
                            return [a]
                        }, 0, null)
                },
                initSegmentReference: null,
                presentationTimeOffset: 0,
                mimeType: d,
                codecs: e || "",
                bandwidth: 0,
                kind: c,
                encrypted: !1,
                keyId: null,
                language: b,
                allowedByApplication: !0,
                allowedByKeySystem: !0
            };
            d = {
                language: b,
                type: "text",
                primary: !1,
                drmInfos: [],
                streams: [l]
            };
            this.ma.push(l.id);
            f.streamSets.push(d);
            return fc(this.b, l).then(function() {
                if (!this.w) return this.ma.splice(this.ma.indexOf(l.id), 1), Yc(this, f), Uc(this), {
                    id: l.id,
                    active: !1,
                    type: "text",
                    bandwidth: 0,
                    language: b,
                    kind: c,
                    width: null,
                    height: null
                }
            }.bind(this))
        };
        I.prototype.addTextTrack = I.prototype.addTextTrack;
        I.prototype.Cb = function(a, b) {
            this.Ba.width = a;
            this.Ba.height = b
        };
        I.prototype.setMaxHardwareResolution = I.prototype.Cb;

        function Sc(a) {
            a.v && a.v.ja(a.A, "sourceopen");
            a.f && (a.f.removeAttribute("src"), a.f.load());
            var b = Promise.all([a.a ? a.a.abr.manager.stop() : null, a.g ? a.g.o() : null, a.G ? a.G.o() : null, a.i ? a.i.o() : null, a.b ? a.b.o() : null, a.l ? a.l.stop() : null]);
            a.g = null;
            a.G = null;
            a.i = null;
            a.b = null;
            a.l = null;
            a.c = null;
            a.na = null;
            a.oa = null;
            a.A = null;
            a.s = {};
            a.C = [];
            a.pa = 0;
            a.J = 0;
            return b
        }
        k = I.prototype;
        k.yb = function() {
            return this.l ? Sc(this).then(function() {
                this.w || (this.Fb(!1), this.oa = Rc(this))
            }.bind(this)) : Promise.resolve()
        };

        function Wc() {
            return {
                ".drm.servers": "",
                ".drm.clearKeys": "",
                ".drm.advanced": {
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    videoRobustness: "",
                    audioRobustness: "",
                    serverCertificate: null
                }
            }
        }

        function Qc(a) {
            return {
                drm: {
                    retryParameters: Ga(),
                    servers: {},
                    clearKeys: {},
                    advanced: {}
                },
                manifest: {
                    retryParameters: Ga(),
                    dash: {
                        customScheme: function(a) {
                            if (a) return null
                        },
                        clockSyncUri: ""
                    }
                },
                streaming: {
                    retryParameters: Ga(),
                    rebufferingGoal: 2,
                    bufferingGoal: 10,
                    bufferBehind: 30,
                    ignoreTextStreamFailures: !1,
                    useRelativeCueTimestamps: !1
                },
                abr: {
                    manager: a.fb,
                    enabled: !0,
                    defaultBandwidthEstimate: 5E5
                },
                preferredAudioLanguage: "",
                preferredTextLanguage: "",
                restrictions: {
                    minWidth: 0,
                    maxWidth: Infinity,
                    minHeight: 0,
                    maxHeight: Infinity,
                    minPixels: 0,
                    maxPixels: Infinity,
                    minAudioBandwidth: 0,
                    maxAudioBandwidth: Infinity,
                    minVideoBandwidth: 0,
                    maxVideoBandwidth: Infinity
                }
            }
        }
        k.La = function(a) {
            var b = this.b ? ec(this.b) : {};
            Jc(this.g, b, a);
            b = a.streamSets.some(Mc);
            Ic(a, this.a.restrictions, this.Ba) && !this.j && Uc(this);
            a = !a.streamSets.some(Mc);
            b ? a && this.$(new q(4, 4012)) : this.$(new q(4, 4011))
        };

        function Zc(a, b, c) {
            for (var d in b) {
                var e = b[d],
                    f = c || !1;
                "text" == d && (f = !0);
                a.qa ? a.s[d] = {
                    stream: e,
                    Ob: f
                } : gc(a.b, d, e, f)
            }
        }

        function ad(a) {
            if (a.c) {
                var b = Date.now() / 1E3;
                a.Na ? a.J += b - a.X : a.pa += b - a.X;
                a.X = b
            }
        }
        k.Mc = function(a, b, c) {
            this.a.abr.manager.segmentDownloaded(a, b, c)
        };
        k.Fb = function(a) {
            ad(this);
            this.Na = a;
            this.dispatchEvent(new H("buffering", {
                buffering: a
            }))
        };
        k.Lc = function() {
            if (this.b) {
                var a = this.b,
                    b;
                for (b in a.b) {
                    var c = a.b[b];
                    c.ba || 0 < Hb(a.f, b, Tb(a.m)) || c.la || (c.ga ? c.la = !0 : null == Fb(a.f, b) ? null == c.aa && lc(a, c, 0) : (ac(c), ic(a, c)))
                }
            }
        };

        function bd(a, b, c) {
            if (!C(b).some(Mc)) return a.$(new q(4, 4012)), {};
            var d = {};
            if (c) d = b;
            else {
                c = ec(a.b);
                for (var e in c) {
                    var f = c[e];
                    f.allowedByApplication && f.allowedByKeySystem && b[e].language == f.language || (d[e] = b[e])
                }
            }
            if (Ma(d)) return {};
            ia(Object.keys(d));
            var g = a.a.abr.manager.chooseStreams(d);
            return Oa(d, function(a) {
                return !!g[a]
            }) ? g : (a.$(new q(4, 4012)), {})
        }

        function Yc(a, b) {
            var c = {
                    audio: !1,
                    text: !1
                },
                d = Nc(b, a.a, c),
                e = bd(a, d),
                f;
            for (f in e) a.C.push({
                timestamp: Date.now() / 1E3,
                id: e[f].id,
                type: f,
                fromAdaptation: !0
            });
            Zc(a, e, !0);
            Vc(a);
            d.text && d.audio && c.text && d.text.language != d.audio.language && (a.m.mode = "showing", $c(a))
        }
        k.Ic = function(a) {
            this.qa = !0;
            this.a.abr.manager.disable();
            a = Nc(a, this.a);
            a = bd(this, a, !0);
            for (var b in this.s) a[b] = this.s[b].stream;
            this.s = {};
            for (b in a) this.C.push({
                timestamp: Date.now() / 1E3,
                id: a[b].id,
                type: b,
                fromAdaptation: !0
            });
            this.j || Uc(this);
            return a
        };
        k.Kb = function() {
            this.qa = !1;
            this.a.abr.enabled && this.a.abr.manager.enable();
            for (var a in this.s) {
                var b = this.s[a];
                gc(this.b, a, b.stream, b.Ob)
            }
            this.s = {}
        };
        k.bb = function(a, b) {
            var c = ec(this.b),
                d;
            for (d in a) {
                var e = a[d];
                c[d] != e ? this.C.push({
                    timestamp: Date.now() / 1E3,
                    id: e.id,
                    type: d,
                    fromAdaptation: !0
                }) : delete a[d]
            }
            if (!Ma(a) && this.b) {
                for (d in a) gc(this.b, d, a[d], b || !1);
                Vc(this)
            }
        };

        function Vc(a) {
            Promise.resolve().then(function() {
                this.w || this.dispatchEvent(new H("adaptation"))
            }.bind(a))
        }

        function Uc(a) {
            Promise.resolve().then(function() {
                this.w || this.dispatchEvent(new H("trackschanged"))
            }.bind(a))
        }

        function $c(a) {
            a.dispatchEvent(new H("texttrackvisibility"))
        }
        k.$ = function(a) {
            this.dispatchEvent(new H("error", {
                detail: a
            }))
        };
        k.Jc = function(a) {
            this.dispatchEvent(a)
        };
        k.lc = function() {
            if (this.f.error) {
                var a = this.f.error.code;
                if (1 != a) {
                    var b = this.f.error.msExtendedCode;
                    b && (0 > b && (b += Math.pow(2, 32)), b = b.toString(16));
                    this.$(new q(3, 3016, a, b))
                }
            }
        };
        k.Kc = function(a) {
            var b = ["output-restricted", "internal-error"],
                c = dc(this.b),
                d = !1;
            c.streamSets.forEach(function(c) {
                c.streams.forEach(function(c) {
                    var e = c.allowedByKeySystem;
                    c.keyId && c.keyId in a && (c.allowedByKeySystem = 0 > b.indexOf(a[c.keyId]));
                    e != c.allowedByKeySystem && (d = !0)
                })
            });
            Yc(this, c);
            d && Uc(this)
        };
        var dd = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
            ed = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
            fd = ["loop", "playbackRate"],
            gd = ["pause", "play"],
            hd = ["adaptation", "buffering", "error", "texttrackvisibility", "trackschanged"],
            id = "getConfiguration getManifestUri getPlaybackRate getTracks getStats isBuffering isLive isTextTrackVisible seekRange".split(" "),
            jd = [
                ["getConfiguration",
                    "configure"
                ]
            ],
            kd = [
                ["isTextTrackVisible", "setTextTrackVisibility"]
            ],
            ld = "configure resetConfiguration trickPlay cancelTrickPlay selectTrack setTextTrackVisibility addTextTrack".split(" "),
            md = ["load", "unload"];

        function nd(a) {
            return JSON.stringify(a, function(a, c) {
                if ("manager" != a && "function" != typeof c) {
                    if (c instanceof Event || c instanceof H) {
                        var d = {},
                            e;
                        for (e in c) {
                            var f = c[e];
                            f && "object" == typeof f || e in Event || (d[e] = f)
                        }
                        return d
                    }
                    if (c instanceof TimeRanges)
                        for (d = {
                                __type__: "TimeRanges",
                                length: c.length,
                                start: [],
                                end: []
                            }, e = 0; e < c.length; ++e) d.start.push(c.start(e)), d.end.push(c.end(e));
                    else d = "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
                    return d
                }
            })
        }

        function od(a) {
            return JSON.parse(a, function(a, c) {
                return "NaN" == c ? NaN : "-Infinity" == c ? -Infinity : "Infinity" == c ? Infinity : c && "object" == typeof c && "TimeRanges" == c.__type__ ? pd(c) : c
            })
        }

        function pd(a) {
            return {
                length: a.length,
                start: function(b) {
                    return a.start[b]
                },
                end: function(b) {
                    return a.end[b]
                }
            }
        };

        function qd(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.w = c;
            this.A = d;
            this.s = e;
            this.f = this.j = this.h = !1;
            this.v = "";
            this.a = this.i = null;
            this.b = {
                video: {},
                player: {}
            };
            this.m = 0;
            this.c = {};
            this.g = null
        }
        k = qd.prototype;
        k.o = function() {
            rd(this);
            this.a && (this.a.stop(function() {}, function() {}), this.a = null);
            this.A = this.w = this.l = null;
            this.f = this.j = this.h = !1;
            this.g = this.c = this.b = this.a = this.i = null;
            return Promise.resolve()
        };
        k.N = function() {
            return this.f
        };
        k.Ya = function() {
            return this.v
        };
        k.init = function() {
            if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
                delete window.__onGCastApiAvailable;
                this.h = !0;
                this.l();
                var a = new chrome.cast.SessionRequest(this.C),
                    a = new chrome.cast.ApiConfig(a, this.cc.bind(this), this.jc.bind(this), "origin_scoped");
                chrome.cast.initialize(a, function() {}, function() {})
            } else window.__onGCastApiAvailable = function(a) {
                a && this.init()
            }.bind(this)
        };
        k.$a = function(a) {
            this.i = a;
            this.f && sd(this, {
                type: "appData",
                appData: this.i
            })
        };
        k.cast = function(a) {
            if (!this.h) return Promise.reject(new q(8, 8E3));
            if (!this.j) return Promise.reject(new q(8, 8001));
            if (this.f) return Promise.reject(new q(8, 8002));
            this.g = new w;
            chrome.cast.requestSession(this.Wa.bind(this, a), this.lb.bind(this));
            return this.g
        };
        k.get = function(a, b) {
            if ("video" == a) {
                if (0 <= gd.indexOf(b)) return this.wb.bind(this, a, b)
            } else if ("player" == a) {
                if (0 <= ld.indexOf(b)) return this.wb.bind(this, a, b);
                if (0 <= md.indexOf(b)) return this.yc.bind(this, a, b);
                if (0 <= id.indexOf(b)) return this.tb.bind(this, a, b)
            }
            return this.tb(a, b)
        };
        k.set = function(a, b, c) {
            this.b[a][b] = c;
            sd(this, {
                type: "set",
                targetName: a,
                property: b,
                value: c
            })
        };
        k.Wa = function(a, b) {
            this.a = b;
            this.a.addUpdateListener(this.mb.bind(this));
            this.a.addMessageListener("urn:x-cast:com.google.shaka.v2", this.dc.bind(this));
            this.mb();
            sd(this, {
                type: "init",
                initState: a,
                appData: this.i
            });
            this.g.resolve()
        };
        k.lb = function(a) {
            var b = 8003;
            switch (a.code) {
                case "cancel":
                    b = 8004;
                    break;
                case "timeout":
                    b = 8005;
                    break;
                case "receiver_unavailable":
                    b = 8006
            }
            this.g.reject(new q(8, b, a))
        };
        k.tb = function(a, b) {
            return this.b[a][b]
        };
        k.wb = function(a, b) {
            sd(this, {
                type: "call",
                targetName: a,
                methodName: b,
                args: Array.prototype.slice.call(arguments, 2)
            })
        };
        k.yc = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2),
                d = new w,
                e = this.m.toString();
            this.m++;
            this.c[e] = d;
            sd(this, {
                type: "asyncCall",
                targetName: a,
                methodName: b,
                args: c,
                id: e
            });
            return d
        };
        k.cc = function(a) {
            var b = this.s();
            this.g = new w;
            this.Wa(b, a)
        };
        k.jc = function(a) {
            this.j = "available" == a;
            this.l()
        };
        k.mb = function() {
            var a = this.a ? "connected" == this.a.status : !1;
            if (this.f && !a) {
                this.A();
                for (var b in this.b) this.b[b] = {};
                rd(this)
            }
            this.v = (this.f = a) ? this.a.receiver.friendlyName : "";
            this.l()
        };

        function rd(a) {
            for (var b in a.c) {
                var c = a.c[b];
                delete a.c[b];
                c.reject(new q(7, 7E3))
            }
        }
        k.dc = function(a, b) {
            var c = od(b);
            switch (c.type) {
                case "event":
                    var d = c.targetName,
                        e = c.event;
                    this.w(d, new H(e.type, e));
                    break;
                case "update":
                    e = c.update;
                    for (d in e) {
                        var c = this.b[d] || {},
                            f;
                        for (f in e[d]) c[f] = e[d][f]
                    }
                    break;
                case "asyncComplete":
                    if (d = c.id, f = c.error, c = this.c[d], delete this.c[d], c)
                        if (f) {
                            d = new q(f.category, f.code);
                            for (e in f) d[e] = f[e];
                            c.reject(d)
                        } else c.resolve()
            }
        };

        function sd(a, b) {
            var c = nd(b);
            a.a.sendMessage("urn:x-cast:com.google.shaka.v2", c, function() {}, ha)
        };

        function K(a, b, c) {
            p.call(this);
            this.c = a;
            this.b = b;
            this.h = this.f = this.g = this.i = this.j = null;
            this.a = new qd(c, this.Nc.bind(this), this.Oc.bind(this), this.Pc.bind(this), this.jb.bind(this));
            td(this)
        }
        ba(K);
        m("shaka.cast.CastProxy", K);
        K.prototype.o = function() {
            var a = [this.h ? this.h.o() : null, this.b ? this.b.o() : null, this.a ? this.a.o() : null];
            this.a = this.h = this.i = this.j = this.b = this.c = null;
            return Promise.all(a)
        };
        K.prototype.destroy = K.prototype.o;
        K.prototype.Vb = function() {
            return this.j
        };
        K.prototype.getVideo = K.prototype.Vb;
        K.prototype.Tb = function() {
            return this.i
        };
        K.prototype.getPlayer = K.prototype.Tb;
        K.prototype.Jb = function() {
            return this.a ? this.a.h && this.a.j : !1
        };
        K.prototype.canCast = K.prototype.Jb;
        K.prototype.N = function() {
            return this.a ? this.a.N() : !1
        };
        K.prototype.isCasting = K.prototype.N;
        K.prototype.Ya = function() {
            return this.a ? this.a.Ya() : ""
        };
        K.prototype.receiverName = K.prototype.Ya;
        K.prototype.cast = function() {
            var a = this.jb();
            return this.a.cast(a).then(function() {
                return this.b.eb()
            }.bind(this))
        };
        K.prototype.cast = K.prototype.cast;
        K.prototype.$a = function(a) {
            this.a.$a(a)
        };
        K.prototype.setAppData = K.prototype.$a;
        K.prototype.Vc = function() {
            var a = this.a;
            if (a.f) {
                var b = a.s();
                chrome.cast.requestSession(a.Wa.bind(a, b), a.lb.bind(a))
            }
        };
        K.prototype.suggestDisconnect = K.prototype.Vc;

        function td(a) {
            a.a.init();
            a.h = new z;
            dd.forEach(function(a) {
                B(this.h, this.c, a, this.ad.bind(this))
            }.bind(a));
            hd.forEach(function(a) {
                B(this.h, this.b, a, this.uc.bind(this))
            }.bind(a));
            a.j = {};
            for (var b in a.c) Object.defineProperty(a.j, b, {
                configurable: !1,
                enumerable: !0,
                get: a.$c.bind(a, b),
                set: a.bd.bind(a, b)
            });
            a.i = {};
            for (b in a.b) Object.defineProperty(a.i, b, {
                configurable: !1,
                enumerable: !0,
                get: a.tc.bind(a, b)
            });
            a.g = new p;
            a.g.S = a.j;
            a.f = new p;
            a.f.S = a.i
        }
        k = K.prototype;
        k.jb = function() {
            var a = {
                video: {},
                player: {},
                playerAfterLoad: {},
                manifest: this.b.na,
                startTime: null
            };
            this.c.pause();
            fd.forEach(function(b) {
                a.video[b] = this.c[b]
            }.bind(this));
            this.c.ended || (a.startTime = this.c.currentTime);
            jd.forEach(function(b) {
                var c = b[1];
                b = this.b[b[0]]();
                a.player[c] = b
            }.bind(this));
            kd.forEach(function(b) {
                var c = b[1];
                b = this.b[b[0]]();
                a.playerAfterLoad[c] = b
            }.bind(this));
            return a
        };
        k.Nc = function() {
            this.dispatchEvent(new H("caststatuschanged"))
        };
        k.Pc = function() {
            jd.forEach(function(a) {
                var b = a[1];
                a = this.a.get("player", a[0])();
                this.b[b](a)
            }.bind(this));
            var a = this.a.get("player", "getManifestUri")(),
                b = this.a.get("video", "ended"),
                c = Promise.resolve(),
                d = this.c.autoplay,
                e = null;
            b || (e = this.a.get("video", "currentTime"));
            a && (this.c.autoplay = !1, c = this.b.load(a, e), c["catch"](function(a) {
                this.b.dispatchEvent(new H("error", {
                    detail: a
                }))
            }.bind(this)));
            var f = {};
            fd.forEach(function(a) {
                f[a] = this.a.get("video", a)
            }.bind(this));
            c.then(function() {
                fd.forEach(function(a) {
                    this.c[a] =
                        f[a]
                }.bind(this));
                kd.forEach(function(a) {
                    var b = a[1];
                    a = this.a.get("player", a[0])();
                    this.b[b](a)
                }.bind(this));
                this.c.autoplay = d;
                a && this.c.play()
            }.bind(this))
        };
        k.$c = function(a) {
            if ("addEventListener" == a) return this.g.addEventListener.bind(this.g);
            if ("removeEventListener" == a) return this.g.removeEventListener.bind(this.g);
            if (this.a.N() && !Object.keys(this.a.b.video).length) {
                var b = this.c[a];
                if ("function" != typeof b) return b
            }
            return this.a.N() ? this.a.get("video", a) : (b = this.c[a], "function" == typeof b && (b = b.bind(this.c)), b)
        };
        k.bd = function(a, b) {
            this.a.N() ? this.a.set("video", a, b) : this.c[a] = b
        };
        k.ad = function(a) {
            this.a.N() || this.g.dispatchEvent(new H(a.type, a))
        };
        k.tc = function(a) {
            return "addEventListener" == a ? this.f.addEventListener.bind(this.f) : "removeEventListener" == a ? this.f.removeEventListener.bind(this.f) : "getNetworkingEngine" == a ? this.b.kb.bind(this.b) : this.a.N() && !Object.keys(this.a.b.video).length && 0 <= id.indexOf(a) || !this.a.N() ? (a = this.b[a], a.bind(this.b)) : this.a.get("player", a)
        };
        k.uc = function(a) {
            this.a.N() || this.f.dispatchEvent(a)
        };
        k.Oc = function(a, b) {
            this.a.N() && ("video" == a ? this.g.dispatchEvent(b) : "player" == a && this.f.dispatchEvent(b))
        };

        function L(a, b, c) {
            p.call(this);
            this.b = a;
            this.a = b;
            this.i = {
                video: a,
                player: b
            };
            this.j = c || function() {};
            this.h = !1;
            this.c = !0;
            this.f = this.g = null;
            ud(this)
        }
        ba(L);
        m("shaka.cast.CastReceiver", L);
        L.prototype.Xb = function() {
            return this.h
        };
        L.prototype.isConnected = L.prototype.Xb;
        L.prototype.Yb = function() {
            return this.c
        };
        L.prototype.isIdle = L.prototype.Yb;
        L.prototype.o = function() {
            var a = this.a ? this.a.o() : Promise.resolve();
            null != this.f && window.clearTimeout(this.f);
            this.j = this.i = this.a = this.b = null;
            this.h = !1;
            this.c = !0;
            this.f = this.g = null;
            return a.then(function() {
                cast.receiver.CastReceiverManager.getInstance().stop()
            })
        };
        L.prototype.destroy = L.prototype.o;

        function ud(a) {
            var b = cast.receiver.CastReceiverManager.getInstance();
            b.onSenderConnected = a.rb.bind(a);
            b.onSenderDisconnected = a.rb.bind(a);
            b.onSystemVolumeChanged = a.Qb.bind(a);
            a.g = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
            a.g.onMessage = a.ec.bind(a);
            b.start();
            dd.forEach(function(a) {
                this.b.addEventListener(a, this.ub.bind(this, "video"))
            }.bind(a));
            hd.forEach(function(a) {
                this.a.addEventListener(a, this.ub.bind(this, "player"))
            }.bind(a));
            a.a.Cb(1920, 1080);
            a.a.addEventListener("loading", function() {
                this.c = !1;
                vd(this)
            }.bind(a));
            a.b.addEventListener("playing", function() {
                this.c = !1;
                vd(this)
            }.bind(a));
            a.a.addEventListener("unloading", function() {
                this.c = !0;
                vd(this)
            }.bind(a));
            a.b.addEventListener("ended", function() {
                window.setTimeout(function() {
                    this.b && this.b.ended && (this.c = !0, vd(this))
                }.bind(this), 5E3)
            }.bind(a))
        }
        k = L.prototype;
        k.rb = function() {
            this.h = !!cast.receiver.CastReceiverManager.getInstance().getSenders().length;
            vd(this)
        };

        function vd(a) {
            Promise.resolve().then(function() {
                this.dispatchEvent(new H("caststatuschanged"))
            }.bind(a))
        }

        function wd(a, b, c) {
            for (var d in b.player) a.a[d](b.player[d]);
            a.j(c);
            c = Promise.resolve();
            var e = a.b.autoplay;
            b.manifest && (a.b.autoplay = !1, c = a.a.load(b.manifest, b.startTime), c["catch"](function(a) {
                this.a.dispatchEvent(new H("error", {
                    detail: a
                }))
            }.bind(a)));
            c.then(function() {
                for (var a in b.video) {
                    var c = b.video[a];
                    this.b[a] = c
                }
                for (a in b.playerAfterLoad) c = b.playerAfterLoad[a], this.a[a](c);
                this.b.autoplay = e;
                b.manifest && this.b.play()
            }.bind(a))
        }
        k.ub = function(a, b) {
            this.Xa();
            xd(this, {
                type: "event",
                targetName: a,
                event: b
            })
        };
        k.Xa = function() {
            null != this.f && window.clearTimeout(this.f);
            this.f = window.setTimeout(this.Xa.bind(this), 500);
            var a = {
                video: {},
                player: {}
            };
            ed.forEach(function(b) {
                a.video[b] = this.b[b]
            }.bind(this));
            id.forEach(function(b) {
                a.player[b] = this.a[b]()
            }.bind(this));
            var b = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            b && (a.video.volume = b.level, a.video.muted = b.muted);
            xd(this, {
                type: "update",
                update: a
            })
        };
        k.Qb = function() {
            var a = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            a && xd(this, {
                type: "update",
                update: {
                    video: {
                        volume: a.level,
                        muted: a.muted
                    }
                }
            });
            xd(this, {
                type: "event",
                targetName: "video",
                event: {
                    type: "volumechange"
                }
            })
        };
        k.ec = function(a) {
            var b = od(a.data);
            switch (b.type) {
                case "init":
                    wd(this, b.initState, b.appData);
                    this.Xa();
                    break;
                case "appData":
                    this.j(b.appData);
                    break;
                case "set":
                    var c = b.targetName,
                        d = b.property,
                        e = b.value;
                    if ("video" == c)
                        if (b = cast.receiver.CastReceiverManager.getInstance(), "volume" == d) {
                            b.setSystemVolumeLevel(e);
                            break
                        } else if ("muted" == d) {
                        b.setSystemVolumeMuted(e);
                        break
                    }
                    this.i[c][d] = e;
                    break;
                case "call":
                    c = b.targetName;
                    d = b.methodName;
                    e = b.args;
                    c = this.i[c];
                    c[d].apply(c, e);
                    break;
                case "asyncCall":
                    c = b.targetName,
                        d = b.methodName, e = b.args, b = b.id, a = a.senderId, c = this.i[c], c[d].apply(c, e).then(this.Ab.bind(this, a, b, null), this.Ab.bind(this, a, b))
            }
        };
        k.Ab = function(a, b, c) {
            xd(this, {
                type: "asyncComplete",
                id: b,
                error: c
            }, a)
        };

        function xd(a, b, c) {
            a.h && (b = nd(b), c ? a.g.getCastChannel(c).send(b) : a.g.broadcast(b))
        };

        function yd(a, b) {
            var c = M(a, b);
            return 1 != c.length ? null : c[0]
        }

        function M(a, b) {
            return Array.prototype.filter.call(a.childNodes, function(a) {
                return a.tagName == b
            })
        }

        function zd(a) {
            return (a = a.firstChild) && a.nodeType == Node.TEXT_NODE ? a.nodeValue.trim() : null
        }

        function N(a, b, c, d) {
            var e = null;
            a = a.getAttribute(b);
            null != a && (e = c(a));
            return null == e ? void 0 !== d ? d : null : e
        }

        function Ad(a) {
            if (!a) return null;
            a = Date.parse(a);
            return isNaN(a) ? null : Math.floor(a / 1E3)
        }

        function O(a) {
            if (!a) return null;
            a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
            if (!a) return null;
            a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
            return isFinite(a) ? a : null
        }

        function Bd(a) {
            var b = /([0-9]+)-([0-9]+)/.exec(a);
            if (!b) return null;
            a = Number(b[1]);
            if (!isFinite(a)) return null;
            b = Number(b[2]);
            return isFinite(b) ? {
                start: a,
                end: b
            } : null
        }

        function Cd(a) {
            a = Number(a);
            return a % 1 ? null : a
        }

        function Dd(a) {
            a = Number(a);
            return !(a % 1) && 0 < a ? a : null
        }

        function Ed(a) {
            a = Number(a);
            return !(a % 1) && 0 <= a ? a : null
        }

        function Fd(a) {
            var b;
            a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1] / b[2]) : Number(a);
            return isNaN(a) ? null : a
        };
        var Gd = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        };

        function Hd(a, b) {
            var c = Id(a),
                d = null,
                e = c.filter(function(a) {
                    return "urn:mpeg:dash:mp4protection:2011" == a.zb ? (d = a.init || d, !1) : !0
                }),
                f = c.map(function(a) {
                    return a.keyId
                }).filter(Da),
                g = null;
            if (0 < f.length && (g = f[0], f.some(Ea(g)))) throw new q(4, 4010);
            f = [];
            0 < e.length ? (f = Kd(d, b, e), f.length || (f = [Ld("", d)])) : 0 < c.length && (f = C(Gd).map(function(a) {
                return Ld(a, d)
            }));
            return {
                hb: g,
                ed: d,
                drmInfos: f,
                ib: !0
            }
        }

        function Md(a, b, c) {
            var d = Hd(a, b);
            if (c.ib) {
                a = 1 == c.drmInfos.length && !c.drmInfos[0].keySystem;
                b = !d.drmInfos.length;
                if (!c.drmInfos.length || a && !b) c.drmInfos = d.drmInfos;
                c.ib = !1
            } else if (0 < d.drmInfos.length && (c.drmInfos = c.drmInfos.filter(function(a) {
                    return d.drmInfos.some(function(b) {
                        return b.keySystem == a.keySystem
                    })
                }), !c.drmInfos.length)) throw new q(4, 4008);
            return d.hb || c.hb
        }

        function Ld(a, b) {
            return {
                keySystem: a,
                licenseServerUri: "",
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                initData: b || [],
                keyIds: []
            }
        }

        function Kd(a, b, c) {
            return c.map(function(c) {
                var e = Gd[c.zb];
                return e ? [Ld(e, c.init || a)] : b(c.node) || []
            }).reduce(u, [])
        }

        function Id(a) {
            return a.map(function(a) {
                var c = a.getAttribute("schemeIdUri"),
                    d = a.getAttribute("cenc:default_KID"),
                    e = M(a, "cenc:pssh").map(zd);
                if (!c) return null;
                c = c.toLowerCase();
                if (d && (d = d.replace(/-/g, "").toLowerCase(), 0 <= d.indexOf(" "))) throw new q(4, 4009);
                var f = [];
                try {
                    f = e.map(function(a) {
                        return {
                            initDataType: "cenc",
                            initData: Xa(a)
                        }
                    })
                } catch (g) {
                    throw new q(4, 4007);
                }
                return {
                    node: a,
                    zb: c,
                    keyId: d,
                    init: 0 < f.length ? f : null
                }
            }).filter(Da)
        };
        var Nd = 1 / 15;

        function Od(a, b, c, d, e) {
            null !== e && (e = Math.round(e));
            var f = {
                RepresentationID: b,
                Number: c,
                Bandwidth: d,
                Time: e
            };
            return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function(a, b, c) {
                if ("$$" == a) return "$";
                var d = f[b];
                if (null == d) return a;
                "RepresentationID" == b && c && (c = void 0);
                a = d.toString();
                c = window.parseInt(c, 10) || 1;
                return Array(Math.max(0, c - a.length) + 1).join("0") + a
            })
        }

        function Pd(a, b, c) {
            if (c.length) {
                var d = c[0];
                d.startTime <= Nd && (c[0] = new F(d.position, 0, d.endTime, d.a, d.L, d.D));
                a || (a = c[c.length - 1], a.startTime > b || (c[c.length - 1] = new F(a.position, a.startTime, b, a.a, a.L, a.D)))
            }
        }

        function P(a, b) {
            if (!b.length) return a;
            var c = b.map(function(a) {
                return new oa(a)
            });
            return a.map(function(a) {
                return new oa(a)
            }).map(function(a) {
                return c.map(a.resolve.bind(a))
            }).reduce(u, []).map(function(a) {
                return a.toString()
            })
        }

        function Qd(a, b) {
            var c = Q(a, b, "timescale"),
                d = 1;
            c && (d = Dd(c) || 1);
            c = Q(a, b, "duration");
            (c = Dd(c || "")) && (c /= d);
            var e = Q(a, b, "startNumber"),
                f = Q(a, b, "presentationTimeOffset"),
                g = Ed(e || "");
            if (null == e || null == g) g = 1;
            var h = Rd(a, b, "SegmentTimeline"),
                e = null;
            if (h) {
                for (var e = d, l = Number(f), n = a.H.duration || Infinity, h = M(h, "S"), r = [], t = 0, A = 0; A < h.length; ++A) {
                    var x = h[A],
                        J = N(x, "t", Ed),
                        kb = N(x, "d", Ed),
                        x = N(x, "r", Cd);
                    null != J && (J -= l);
                    if (!kb) break;
                    J = null != J ? J : t;
                    x = x || 0;
                    if (0 > x)
                        if (A + 1 < h.length) {
                            x = N(h[A + 1], "t", Ed);
                            if (null == x) break;
                            else if (J >=
                                x) break;
                            x = Math.ceil((x - J) / kb) - 1
                        } else {
                            if (Infinity == n) break;
                            else if (J / e >= n) break;
                            x = Math.ceil((n * e - J) / kb) - 1
                        }
                    0 < r.length && J != t && (r[r.length - 1].end = J / e);
                    for (var Jd = 0; Jd <= x; ++Jd) t = J + kb, r.push({
                        start: J / e,
                        end: t / e
                    }), J = t
                }
                e = r
            }
            return {
                Ha: d,
                F: c,
                ha: g,
                presentationTimeOffset: Number(f) / d || 0,
                B: e
            }
        }

        function Q(a, b, c) {
            return [b(a.u), b(a.P), b(a.K)].filter(Da).map(function(a) {
                return a.getAttribute(c)
            }).reduce(function(a, b) {
                return a || b
            })
        }

        function Rd(a, b, c) {
            return [b(a.u), b(a.P), b(a.K)].filter(Da).map(function(a) {
                return yd(a, c)
            }).reduce(function(a, b) {
                return a || b
            })
        };

        function Sd(a) {
            this.b = a;
            this.c = 0 == Td;
            this.a = 0
        }
        var Td = 1;

        function Ud(a) {
            return a.a < a.b.byteLength
        }

        function Vd(a) {
            try {
                var b = a.b.getUint8(a.a)
            } catch (c) {
                Wd()
            }
            a.a += 1;
            return b
        }

        function Xd(a) {
            try {
                var b = a.b.getUint16(a.a, a.c)
            } catch (c) {
                Wd()
            }
            a.a += 2;
            return b
        }

        function R(a) {
            try {
                var b = a.b.getUint32(a.a, a.c)
            } catch (c) {
                Wd()
            }
            a.a += 4;
            return b
        }

        function Yd(a) {
            var b, c;
            try {
                a.c ? (b = a.b.getUint32(a.a, !0), c = a.b.getUint32(a.a + 4, !0)) : (c = a.b.getUint32(a.a, !1), b = a.b.getUint32(a.a + 4, !1))
            } catch (d) {
                Wd()
            }
            if (2097151 < c) throw new q(3, 3001);
            a.a += 8;
            return c * Math.pow(2, 32) + b
        }

        function Zd(a, b) {
            a.a + b > a.b.byteLength && Wd();
            var c = a.b.buffer.slice(a.a, a.a + b);
            a.a += b;
            return new Uint8Array(c)
        }

        function S(a, b) {
            a.a + b > a.b.byteLength && Wd();
            a.a += b
        }

        function $d(a) {
            var b = a.a;
            try {
                for (; Ud(a) && a.b.getUint8(a.a);) a.a += 1
            } catch (c) {
                Wd()
            }
            b = a.b.buffer.slice(b, a.a);
            a.a += 1;
            return D(b)
        }

        function Wd() {
            throw new q(3, 3E3);
        };

        function ae(a, b) {
            for (; Ud(b);) {
                var c = b.a,
                    d = R(b),
                    e = R(b);
                1 == d ? d = Yd(b) : d || (d = b.b.byteLength - c);
                if (e == a) return d;
                S(b, d - (b.a - c))
            }
            return -1
        }

        function be(a, b) {
            for (var c = new Sd(new DataView(a)), d = [
                    [1836019574, 0],
                    [1953653099, 0],
                    [1835297121, 0],
                    [1835626086, 0],
                    [1937007212, 0],
                    [1937011556, 8],
                    [b, 0]
                ], e = -1, f = 0; f < d.length; f++) {
                var g = d[f][1],
                    e = ae(d[f][0], c);
                if (-1 == e) return -1;
                S(c, g)
            }
            return e
        };

        function ce(a, b, c, d) {
            var e = [];
            a = new Sd(new DataView(a));
            var f = ae(1936286840, a);
            if (-1 == f) throw new q(3, 3004);
            var g = Vd(a);
            S(a, 3);
            S(a, 4);
            var h = R(a);
            if (!h) throw new q(3, 3005);
            var l, n;
            g ? (l = Yd(a), n = Yd(a)) : (l = R(a), n = R(a));
            S(a, 2);
            g = Xd(a);
            d = l - d;
            b = b + f + n;
            for (f = 0; f < g; f++) {
                l = R(a);
                n = (l & 2147483648) >>> 31;
                l &= 2147483647;
                var r = R(a);
                S(a, 4);
                if (1 == n) throw new q(3, 3006);
                e.push(new F(e.length, d / h, (d + r) / h, function() {
                    return c
                }, b, b + l - 1));
                d += r;
                b += l
            }
            return e
        };

        function T(a) {
            this.a = a
        }
        m("shaka.media.SegmentIndex", T);
        T.prototype.o = function() {
            this.a = null;
            return Promise.resolve()
        };
        T.prototype.destroy = T.prototype.o;
        T.prototype.find = function(a) {
            for (var b = this.a.length - 1; 0 <= b; --b) {
                var c = this.a[b];
                if (a >= c.startTime && a < c.endTime) return c.position
            }
            return null
        };
        T.prototype.find = T.prototype.find;
        T.prototype.get = function(a) {
            if (!this.a.length) return null;
            a -= this.a[0].position;
            return 0 > a || a >= this.a.length ? null : this.a[a]
        };
        T.prototype.get = T.prototype.get;
        T.prototype.Ua = function(a) {
            for (var b = [], c = 0, d = 0; c < this.a.length && d < a.length;) {
                var e = this.a[c],
                    f = a[d];
                e.startTime < f.startTime ? (b.push(e), c++) : (e.startTime > f.startTime || (.1 < Math.abs(e.endTime - f.endTime) ? b.push(f) : b.push(e), c++), d++)
            }
            for (; c < this.a.length;) b.push(this.a[c++]);
            if (b.length)
                for (c = b[b.length - 1].position + 1; d < a.length;) f = a[d++], f = new F(c++, f.startTime, f.endTime, f.a, f.L, f.D), b.push(f);
            else b = a;
            this.a = b
        };
        T.prototype.merge = T.prototype.Ua;
        T.prototype.Pa = function(a) {
            for (var b = 0; b < this.a.length && !(this.a[b].endTime > a); ++b);
            this.a.splice(0, b)
        };
        T.prototype.evict = T.prototype.Pa;

        function de(a) {
            this.b = a;
            this.a = new Sd(a);
            ee || (ee = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
        }
        var ee;

        function fe(a) {
            var b;
            b = ge(a);
            if (7 < b.length) throw new q(3, 3002);
            for (var c = 0, d = 0; d < b.length; d++) c = 256 * c + b[d];
            b = c;
            c = ge(a);
            a: {
                for (d = 0; d < ee.length; d++)
                    if ($a(c, ee[d])) {
                        d = !0;
                        break a
                    }
                d = !1
            }
            if (d) c = a.b.byteLength - a.a.a;
            else {
                if (8 == c.length && c[1] & 224) throw new q(3, 3001);
                for (var d = c[0] & (1 << 8 - c.length) - 1, e = 1; e < c.length; e++) d = 256 * d + c[e];
                c = d
            }
            c = a.a.a + c <= a.b.byteLength ? c : a.b.byteLength - a.a.a;
            d = new DataView(a.b.buffer, a.b.byteOffset + a.a.a, c);
            S(a.a, c);
            return new he(b, d)
        }

        function ge(a) {
            var b = Vd(a.a),
                c;
            for (c = 1; 8 >= c && !(b & 1 << 8 - c); c++);
            if (8 < c) throw new q(3, 3002);
            var d = new Uint8Array(c);
            d[0] = b;
            for (b = 1; b < c; b++) d[b] = Vd(a.a);
            return d
        }

        function he(a, b) {
            this.id = a;
            this.a = b
        }

        function ie(a) {
            if (8 < a.a.byteLength) throw new q(3, 3002);
            if (8 == a.a.byteLength && a.a.getUint8(0) & 224) throw new q(3, 3001);
            for (var b = 0, c = 0; c < a.a.byteLength; c++) var d = a.a.getUint8(c),
                b = 256 * b + d;
            return b
        };

        function je(a, b, c, d, e, f) {
            function g() {
                return e
            }
            var h = [];
            a = new de(a.a);
            for (var l = -1, n = -1; Ud(a.a);) {
                var r = fe(a);
                if (187 == r.id) {
                    var t = ke(r);
                    t && (r = c * (t.Zc - f), t = b + t.xc, 0 <= l && h.push(new F(h.length, l, r, g, n, t - 1)), l = r, n = t)
                }
            }
            0 <= l && h.push(new F(h.length, l, d, g, n, null));
            return h
        }

        function ke(a) {
            var b = new de(a.a);
            a = fe(b);
            if (179 != a.id) throw new q(3, 3013);
            a = ie(a);
            b = fe(b);
            if (183 != b.id) throw new q(3, 3012);
            for (var b = new de(b.a), c = 0; Ud(b.a);) {
                var d = fe(b);
                if (241 == d.id) {
                    c = ie(d);
                    break
                }
            }
            return {
                Zc: a,
                xc: c
            }
        };

        function le(a, b) {
            var c = Rd(a, b, "Initialization");
            if (!c) return null;
            var d = a.u.M,
                e = c.getAttribute("sourceURL");
            e && (d = P(a.u.M, [e]));
            var e = 0,
                f = null;
            if (c = N(c, "range", Bd)) e = c.start, f = c.end;
            return new Pb(function() {
                return d
            }, e, f)
        }

        function me(a, b) {
            var c = Q(a, ne, "presentationTimeOffset"),
                d = le(a, ne),
                e;
            e = Number(c);
            var f = a.u.mimeType.split("/")[1];
            if ("text" != a.u.contentType && "mp4" != f && "webm" != f) throw new q(4, 4006);
            if ("webm" == f && !d) throw new q(4, 4005);
            var g = Rd(a, ne, "RepresentationIndex"),
                h = Q(a, ne, "indexRange"),
                l = a.u.M,
                h = Bd(h || "");
            if (g) {
                var n = g.getAttribute("sourceURL");
                n && (l = P(a.u.M, [n]));
                h = N(g, "range", Bd, h)
            }
            if (!h) throw new q(4, 4002);
            e = oe(a, b, d, l, h.start, h.end, f, e);
            return {
                createSegmentIndex: e.createSegmentIndex,
                findSegmentPosition: e.findSegmentPosition,
                getSegmentReference: e.getSegmentReference,
                initSegmentReference: d,
                presentationTimeOffset: Number(c) || 0
            }
        }

        function oe(a, b, c, d, e, f, g, h) {
            var l = a.presentationTimeline,
                n = a.H.start,
                r = a.H.duration,
                t = b,
                A = null;
            return {
                createSegmentIndex: function() {
                    var b = [t(d, e, f), "webm" == g ? t(c.a(), c.L, c.D) : null];
                    t = null;
                    return Promise.all(b).then(function(b) {
                        var c, f = b[0];
                        b = b[1] || null;
                        if ("mp4" == g) f = ce(f, e, d, h);
                        else {
                            b = new de(new DataView(b));
                            if (440786851 != fe(b).id) throw new q(3, 3008);
                            var t = fe(b);
                            if (408125543 != t.id) throw new q(3, 3009);
                            b = t.a.byteOffset;
                            t = new de(t.a);
                            for (c = null; Ud(t.a);) {
                                var x = fe(t);
                                if (357149030 == x.id) {
                                    c = x;
                                    break
                                }
                            }
                            if (!c) throw new q(3,
                                3010);
                            t = new de(c.a);
                            c = 1E6;
                            for (x = null; Ud(t.a);) {
                                var pb = fe(t);
                                if (2807729 == pb.id) c = ie(pb);
                                else if (17545 == pb.id)
                                    if (x = pb, 4 == x.a.byteLength) x = x.a.getFloat32(0);
                                    else if (8 == x.a.byteLength) x = x.a.getFloat64(0);
                                else throw new q(3, 3003);
                            }
                            if (null == x) throw new q(3, 3011);
                            t = c / 1E9;
                            c = x * t;
                            f = fe(new de(new DataView(f)));
                            if (475249515 != f.id) throw new q(3, 3007);
                            f = je(f, b, t, c, d, h)
                        }
                        Pd(a.Oa, r, f);
                        l.Ea(n, f);
                        A = new T(f)
                    })
                },
                findSegmentPosition: function(a) {
                    return A.find(a)
                },
                getSegmentReference: function(a) {
                    return A.get(a)
                }
            }
        }

        function ne(a) {
            return a.Fa
        };

        function pe(a, b) {
            var c = le(a, qe),
                d;
            d = re(a);
            var e = Qd(a, qe),
                f = e.ha;
            f || (f = 1);
            var g = 0;
            e.F ? g = e.F * (f - 1) - e.presentationTimeOffset : e.B && 0 < e.B.length && (g = e.B[0].start);
            d = {
                F: e.F,
                startTime: g,
                ha: f,
                presentationTimeOffset: e.presentationTimeOffset,
                B: e.B,
                ua: d
            };
            if (!d.F && !d.B && 1 < d.ua.length) throw new q(4, 4002);
            if (!d.F && !a.H.duration && !d.B && 1 == d.ua.length) throw new q(4, 4002);
            if (d.B && !d.B.length) throw new q(4, 4002);
            f = e = null;
            a.K.id && a.u.id && (f = a.K.id + "," + a.u.id, e = b[f]);
            g = se(a.H.duration, d.ha, a.u.M, d);
            Pd(a.Oa, a.H.duration,
                g);
            e ? (e.Ua(g), e.Pa(a.presentationTimeline.sa() - a.H.start)) : (a.presentationTimeline.Ea(a.H.start, g), e = new T(g), f && (b[f] = e));
            return {
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: e.find.bind(e),
                getSegmentReference: e.get.bind(e),
                initSegmentReference: c,
                presentationTimeOffset: d.presentationTimeOffset
            }
        }

        function qe(a) {
            return a.Z
        }

        function se(a, b, c, d) {
            var e = d.ua.length;
            d.B && d.B.length != d.ua.length && (e = Math.min(d.B.length, d.ua.length));
            for (var f = [], g = d.startTime, h = 0; h < e; h++) {
                var l = d.ua[h],
                    n = P(c, [l.ac]),
                    r;
                r = null != d.F ? g + d.F : d.B ? d.B[h].end : g + a;
                f.push(new F(h + b, g, r, function(a) {
                    return a
                }.bind(null, n), l.start, l.end));
                g = r
            }
            return f
        }

        function re(a) {
            return [a.u.Z, a.P.Z, a.K.Z].filter(Da).map(function(a) {
                return M(a, "SegmentURL")
            }).reduce(function(a, c) {
                return 0 < a.length ? a : c
            }).map(function(a) {
                var c = a.getAttribute("media");
                a = N(a, "mediaRange", Bd, {
                    start: 0,
                    end: null
                });
                return {
                    ac: c,
                    start: a.start,
                    end: a.end
                }
            })
        };

        function te(a, b, c, d) {
            var e = ue(a),
                f;
            f = Qd(a, ve);
            var g = Q(a, ve, "media"),
                h = Q(a, ve, "index");
            f = {
                F: f.F,
                Ha: f.Ha,
                ha: f.ha,
                presentationTimeOffset: f.presentationTimeOffset,
                B: f.B,
                Ta: g,
                Da: h
            };
            g = 0 + (f.Da ? 1 : 0);
            g += f.B ? 1 : 0;
            g += f.F ? 1 : 0;
            if (!g) throw new q(4, 4002);
            1 != g && (f.Da && (f.B = null), f.F = null);
            if (!f.Da && !f.Ta) throw new q(4, 4002);
            if (f.Da) {
                c = a.u.mimeType.split("/")[1];
                if ("mp4" != c && "webm" != c) throw new q(4, 4006);
                if ("webm" == c && !e) throw new q(4, 4005);
                d = Od(f.Da, a.u.id, null, a.bandwidth || null, null);
                d = P(a.u.M, [d]);
                a = oe(a, b, e, d,
                    0, null, c, f.presentationTimeOffset)
            } else f.F ? (d || a.presentationTimeline.Va(f.F), a = we(a, f)) : (d = b = null, a.K.id && a.u.id && (d = a.K.id + "," + a.u.id, b = c[d]), g = xe(a, f), Pd(a.Oa, a.H.duration, g), b ? (b.Ua(g), b.Pa(a.presentationTimeline.sa() - a.H.start)) : (a.presentationTimeline.Ea(a.H.start, g), b = new T(g), d && (c[d] = b)), a = {
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: b.find.bind(b),
                getSegmentReference: b.get.bind(b)
            });
            return {
                createSegmentIndex: a.createSegmentIndex,
                findSegmentPosition: a.findSegmentPosition,
                getSegmentReference: a.getSegmentReference,
                initSegmentReference: e,
                presentationTimeOffset: f.presentationTimeOffset
            }
        }

        function ve(a) {
            return a.Ga
        }

        function we(a, b) {
            var c = a.H.duration,
                d = b.F,
                e = b.ha,
                f = b.Ha,
                g = b.Ta,
                h = a.bandwidth || null,
                l = a.u.id,
                n = a.u.M;
            return {
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: function(a) {
                    return 0 > a || c && a >= c ? null : Math.floor(a / d)
                },
                getSegmentReference: function(a) {
                    var b = a * d;
                    return new F(a, b, b + d, function() {
                        var c = Od(g, l, a + e, h, b * f);
                        return P(n, [c])
                    }, 0, null)
                }
            }
        }

        function xe(a, b) {
            for (var c = [], d = 0; d < b.B.length; d++) {
                var e = b.B[d].start,
                    f = d + b.ha;
                c.push(new F(f, e, b.B[d].end, function(a, b, c, d, e, f) {
                    a = Od(a, b, e, c, f);
                    return P(d, [a]).map(function(a) {
                        return a.toString()
                    })
                }.bind(null, b.Ta, a.u.id, a.bandwidth || null, a.u.M, f, (e + b.presentationTimeOffset) * b.Ha), 0, null))
            }
            return c
        }

        function ue(a) {
            var b = Q(a, ve, "initialization");
            if (!b) return null;
            var c = a.u.id,
                d = a.bandwidth || null,
                e = a.u.M;
            return new Pb(function() {
                var a = Od(b, c, null, d, null);
                return P(e, [a])
            }, 0, null)
        };

        function ye() {
            this.m = this.l = this.j = this.c = this.a = null;
            this.g = [];
            this.b = null;
            this.h = [];
            this.v = 1;
            this.i = {};
            this.s = 0;
            this.f = null;
            this.Ia = this.Ia.bind(this)
        }
        k = ye.prototype;
        k.configure = function(a) {
            this.c = a
        };
        k.start = function(a, b, c, d, e) {
            this.g = [a];
            this.a = b;
            this.j = c;
            this.l = d;
            this.m = e;
            return ze(this).then(function() {
                this.a && Ae(this, 0);
                return this.b
            }.bind(this))
        };
        k.stop = function() {
            this.a && this.a.Gb(this.Ia);
            this.c = this.m = this.l = this.j = this.a = null;
            this.g = [];
            this.b = null;
            this.h = [];
            this.i = {};
            null != this.f && (window.clearTimeout(this.f), this.f = null);
            return Promise.resolve()
        };

        function ze(a) {
            return a.a.request(0, Ha(a.g, a.c.retryParameters)).then(function(a) {
                if (this.a) return Be(this, a.data, a.uri)
            }.bind(a))
        }

        function Be(a, b, c) {
            var d = D(b),
                e = new DOMParser,
                f = null;
            b = null;
            try {
                f = e.parseFromString(d, "text/xml")
            } catch (A) {}
            f && "MPD" == f.documentElement.tagName && (b = f.documentElement);
            if (!b) throw new q(4, 4001);
            c = [c];
            d = M(b, "Location").map(zd).filter(Da);
            0 < d.length && (c = a.g = d);
            d = M(b, "BaseURL").map(zd);
            c = P(c, d);
            var g = N(b, "minBufferTime", O);
            a.s = N(b, "minimumUpdatePeriod", O, -1);
            var h = N(b, "availabilityStartTime", Ad),
                d = N(b, "timeShiftBufferDepth", O),
                l = N(b, "suggestedPresentationDelay", O),
                e = N(b, "maxSegmentDuration", O),
                f = b.getAttribute("type") ||
                "static",
                n;
            if (a.b) n = a.b.presentationTimeline;
            else {
                var r = Math.max(10, 1.5 * g);
                n = new G(h, null != l ? l : r)
            }
            var h = Ce(a, {
                    Oa: "static" != f,
                    presentationTimeline: n,
                    K: null,
                    H: null,
                    P: null,
                    u: null,
                    bandwidth: void 0
                }, c, b),
                l = h.duration,
                t = h.periods;
            n.Eb("static" == f);
            n.za(l || Infinity);
            n.Db(null != d ? d : Infinity);
            n.Va(e || 1);
            if (a.b) return Promise.resolve();
            b = M(b, "UTCTiming");
            d = n.U();
            h.Y && a.a.vb(a.Ia);
            return De(a, c, b, d).then(function(a) {
                this.a && (n.Bb(a), this.b = {
                    presentationTimeline: n,
                    periods: t,
                    offlineSessionIds: [],
                    minBufferTime: g ||
                        0
                })
            }.bind(a))
        }

        function Ce(a, b, c, d) {
            var e = N(d, "mediaPresentationDuration", O),
                f = [],
                g = 0;
            d = M(d, "Period");
            for (var h = 0; h < d.length; h++) {
                var l = d[h],
                    g = N(l, "start", O, g),
                    n = N(l, "duration", O);
                if (null == n)
                    if (h + 1 != d.length) {
                        var r = N(d[h + 1], "start", O);
                        null != r && (n = r - g)
                    } else null != e && (n = e - g);
                var l = {
                        start: g,
                        duration: n,
                        node: l,
                        Y: !1
                    },
                    t = a,
                    A = b,
                    r = l;
                A.K = Ee(r.node, null, c);
                A.H = r;
                A.K.id || (A.K.id = "__shaka_period_" + r.start);
                t = M(r.node, "AdaptationSet").map(t.rc.bind(t, A)).filter(Da);
                if (!t.length) throw new q(4, 4004);
                for (A = 0; A < t.length; A++) t[A].Y && (r.Y = !0);
                t = Fe(t);
                r = {
                    startTime: r.start,
                    streamSets: t
                };
                f.push(r);
                t = b.K.id;
                a.h.every(Ea(t)) && (a.j(r), a.h.push(t), a.b && a.b.periods.push(r));
                if (null == n) {
                    g = null;
                    break
                }
                g += n
            }
            return null != e ? {
                periods: f,
                duration: e,
                Y: l.Y
            } : {
                periods: f,
                duration: g,
                Y: l.Y
            }
        }
        k.rc = function(a, b) {
            a.P = Ee(b, a.K, null);
            var c = !1,
                d = M(b, "Role"),
                e = void 0;
            "text" == a.P.contentType && (e = "subtitle");
            for (var f = 0; f < d.length; f++) {
                var g = d[f].getAttribute("schemeIdUri");
                if (null == g || "urn:mpeg:dash:role:2011" == g) switch (g = d[f].getAttribute("value"), g) {
                    case "main":
                        c = !0;
                        break;
                    case "caption":
                    case "subtitle":
                        e = g
                }
            }
            var d = !!yd(b, "InbandEventStream"),
                h = [];
            M(b, "SupplementalProperty").forEach(function(a) {
                var b = a.getAttribute("schemeIdUri");
                ("urn:mpeg:dash:adaptation-set-switching:2016" == b || "http://dashif.org/guidelines/AdaptationSetSwitching" ==
                    b || "http://dashif.org/descriptor/AdaptationSetSwitching" == b) && (a = a.getAttribute("value")) && h.push.apply(h, a.split(","))
            });
            var l = null;
            M(b, "EssentialProperty").forEach(function(a) {
                "http://dashif.org/guidelines/trickmode" == a.getAttribute("schemeIdUri") && (l = a.getAttribute("value"))
            });
            if (null != l) return null;
            f = M(b, "ContentProtection");
            f = Hd(f, this.c.dash.customScheme);
            g = Gc(b.getAttribute("lang") || "und");
            e = M(b, "Representation").map(this.sc.bind(this, a, f, e, g)).filter(function(a) {
                return !!a
            });
            if (!e.length) throw new q(4,
                4003);
            if (!a.P.contentType) {
                var n = e[0].mimeType,
                    r = e[0].codecs,
                    t = n;
                r && (t += '; codecs="' + r + '"');
                a.P.contentType = E[t] ? "text" : n.split("/")[0]
            }
            return {
                id: a.P.id || "__fake__" + this.v++,
                contentType: a.P.contentType,
                language: g,
                $b: c,
                streams: e,
                drmInfos: f.drmInfos,
                Wc: h,
                Y: d
            }
        };
        k.sc = function(a, b, c, d, e) {
            a.u = Ee(e, a.P, null);
            if (!Ge(a.u)) return null;
            a.bandwidth = N(e, "bandwidth", Dd) || void 0;
            var f;
            f = this.zc.bind(this);
            if (a.u.Fa) f = me(a, f);
            else if (a.u.Z) f = pe(a, this.i);
            else if (a.u.Ga) f = te(a, f, this.i, !!this.b);
            else {
                var g = a.u.M,
                    h = a.H.duration || 0;
                f = {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: function(a) {
                        return 0 <= a && a < h ? 1 : null
                    },
                    getSegmentReference: function(a) {
                        return 1 != a ? null : new F(1, 0, h, function() {
                            return g
                        }, 0, null)
                    },
                    initSegmentReference: null,
                    presentationTimeOffset: 0
                }
            }
            e =
                M(e, "ContentProtection");
            e = Md(e, this.c.dash.customScheme, b);
            return {
                id: this.v++,
                createSegmentIndex: f.createSegmentIndex,
                findSegmentPosition: f.findSegmentPosition,
                getSegmentReference: f.getSegmentReference,
                initSegmentReference: f.initSegmentReference,
                presentationTimeOffset: f.presentationTimeOffset,
                mimeType: a.u.mimeType,
                codecs: a.u.codecs,
                frameRate: a.u.frameRate,
                bandwidth: a.bandwidth,
                width: a.u.width,
                height: a.u.height,
                kind: c,
                encrypted: 0 < b.drmInfos.length,
                keyId: e,
                language: d,
                allowedByApplication: !0,
                allowedByKeySystem: !0
            }
        };
        k.Qc = function() {
            this.f = null;
            var a = Date.now();
            ze(this).then(function() {
                this.a && Ae(this, (Date.now() - a) / 1E3)
            }.bind(this))["catch"](function(a) {
                this.l(a);
                this.a && Ae(this, 0)
            }.bind(this))
        };

        function Ae(a, b) {
            0 > a.s || (a.f = window.setTimeout(a.Qc.bind(a), 1E3 * Math.max(Math.max(3, a.s) - b, 0)))
        }

        function Ee(a, b, c) {
            b = b || {
                contentType: "",
                mimeType: "",
                codecs: "",
                frameRate: void 0
            };
            c = c || b.M;
            var d = M(a, "BaseURL").map(zd),
                e = a.getAttribute("contentType") || b.contentType,
                f = a.getAttribute("mimeType") || b.mimeType,
                g = N(a, "frameRate", Fd) || b.frameRate;
            e || (e = f.split("/")[0]);
            return {
                M: P(c, d),
                Fa: yd(a, "SegmentBase") || b.Fa,
                Z: yd(a, "SegmentList") || b.Z,
                Ga: yd(a, "SegmentTemplate") || b.Ga,
                width: N(a, "width", Ed) || b.width,
                height: N(a, "height", Ed) || b.height,
                contentType: e,
                mimeType: f,
                codecs: a.getAttribute("codecs") || b.codecs,
                frameRate: g,
                id: a.getAttribute("id")
            }
        }

        function Fe(a) {
            var b = {};
            a.forEach(function(a) {
                b[a.id] = [a]
            });
            a.forEach(function(a) {
                var c = b[a.id];
                a.Wc.forEach(function(a) {
                    (a = b[a]) && a != c && (c.push.apply(c, a), a.forEach(function(a) {
                        b[a.id] = c
                    }))
                })
            });
            var c = [],
                d = [];
            C(b).forEach(function(a) {
                if (!(0 <= d.indexOf(a))) {
                    d.push(a);
                    var b = new Ja;
                    a.forEach(function(a) {
                        b.push(a.contentType || "", a)
                    });
                    b.keys().forEach(function(a) {
                        var d = new Ja;
                        b.get(a).forEach(function(a) {
                            d.push(a.language, a)
                        });
                        d.keys().forEach(function(b) {
                            var e = d.get(b);
                            b = {
                                language: b,
                                type: a,
                                primary: e.some(function(a) {
                                    return a.$b
                                }),
                                drmInfos: e.map(function(a) {
                                    return a.drmInfos
                                }).reduce(u, []),
                                streams: e.map(function(a) {
                                    return a.streams
                                }).reduce(u, [])
                            };
                            c.push(b)
                        })
                    })
                }
            });
            return c
        }

        function Ge(a) {
            var b;
            b = 0 + (a.Fa ? 1 : 0);
            b += a.Z ? 1 : 0;
            b += a.Ga ? 1 : 0;
            if (!b) return "text" == a.contentType || "application" == a.contentType ? !0 : !1;
            1 != b && (a.Fa && (a.Z = null), a.Ga = null);
            return !0
        }

        function He(a, b, c, d) {
            b = P(b, [c]);
            b = Ha(b, a.c.retryParameters);
            b.method = d;
            return a.a.request(0, b).then(function(a) {
                if ("HEAD" == d) {
                    if (!a.headers || !a.headers.date) return 0;
                    a = a.headers.date
                } else a = D(a.data);
                a = Date.parse(a);
                return isNaN(a) ? 0 : a - Date.now()
            })
        }

        function De(a, b, c, d) {
            c = c.map(function(a) {
                return {
                    scheme: a.getAttribute("schemeIdUri"),
                    value: a.getAttribute("value")
                }
            });
            var e = a.c.dash.clockSyncUri;
            d && !c.length && e && c.push({
                scheme: "urn:mpeg:dash:utc:http-head:2014",
                value: e
            });
            return Ca(c, function(a) {
                var c = a.value;
                switch (a.scheme) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        return He(this, b, c, "HEAD");
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        return He(this,
                            b, c, "GET");
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        return a = Date.parse(c), isNaN(a) ? 0 : a - Date.now();
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                        return Promise.reject();
                    default:
                        return Promise.reject()
                }
            }.bind(a))["catch"](function() {
                return 0
            })
        }
        k.zc = function(a, b, c) {
            a = Ha(a, this.c.retryParameters);
            null != b && (a.headers.Range = "bytes=" + b + "-" + (null != c ? c : ""));
            return this.a.request(1, a).then(function(a) {
                return a.data
            })
        };
        k.Ia = function(a, b) {
            if (1 == a) {
                var c = new Sd(new DataView(b.data)),
                    d = ae(1701671783, c);
                if (-1 != d) {
                    var e = c.a - 8 + d;
                    S(c, 4);
                    d = $d(c);
                    if ("urn:mpeg:dash:event:2012" == d) ze(this);
                    else {
                        var f = $d(c),
                            g = R(c),
                            h = R(c),
                            l = R(c),
                            n = R(c),
                            c = Zd(c, e - c.a);
                        this.m(new H("emsg", {
                            detail: {
                                jd: d,
                                value: f,
                                Ha: g,
                                hd: h,
                                fd: l,
                                id: n,
                                gd: c
                            }
                        }))
                    }
                }
            }
        };
        sb.mpd = ye;
        rb["application/dash+xml"] = ye;

        function U(a, b) {
            var c = D(a),
                d = [],
                e = new DOMParser,
                f = null;
            try {
                f = e.parseFromString(c, "text/xml")
            } catch (n) {
                throw new q(2, 2005);
            }
            if (f) {
                var g, h;
                if (c = f.getElementsByTagName("tt")[0]) e = c.getAttribute("ttp:frameRate"), f = c.getAttribute("ttp:subFrameRate"), g = c.getAttribute("ttp:frameRateMultiplier"), h = c.getAttribute("ttp:tickRate");
                else throw new q(2, 2006);
                e = new Ie(e, f, g, h);
                f = U.b(c.getElementsByTagName("styling")[0]);
                g = U.b(c.getElementsByTagName("layout")[0]);
                c = U.b(c.getElementsByTagName("body")[0]);
                for (h = 0; h <
                    c.length; h++) {
                    var l = U.c(c[h], b, e, f, g);
                    l && d.push(l)
                }
            }
            return d
        }
        U.l = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
        U.s = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/;
        U.m = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/;
        U.v = /^(\d*\.?\d*)f$/;
        U.A = /^(\d*\.?\d*)t$/;
        U.w = /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/;
        U.j = /^(\d{1,2}|100)% (\d{1,2}|100)%$/;
        U.b = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = a.childNodes, d = 0; d < c.length; d++) {
                var e = "span" == c[d].nodeName && "p" == a.nodeName;
                c[d].nodeType != Node.ELEMENT_NODE || "br" == c[d].nodeName || e || (e = U.b(c[d]), b = b.concat(e))
            }
            b.length || b.push(a);
            return b
        };
        U.c = function(a, b, c, d, e) {
            if (!a.hasAttribute("begin") && !a.hasAttribute("end") && "" == a.textContent) return null;
            var f = U.a(a.getAttribute("begin"), c),
                g = U.a(a.getAttribute("end"), c);
            c = U.a(a.getAttribute("dur"), c);
            var h = a.textContent;
            null == g && null != c && (g = f + c);
            if (null == f || null == g) throw new q(2, 2001);
            b = wb(f + b, g + b, h);
            if (!b) return null;
            e = U.h(a, "region", e);
            U.na(b, a, e, d);
            return b
        };
        U.na = function(a, b, c, d) {
            var e, f = U.f(b, c, d, "tts:textAlign");
            f && (a.b = f);
            if (f = U.f(b, c, d, "tts:extent"))
                if (e = U.j.exec(f)) a.size = Number(e[1]);
            e = U.f(b, c, d, "tts:writingMode");
            f = !0;
            "tb" == e || "tblr" == e ? a.c = "lr" : "tbrl" == e ? a.c = "rl" : f = !1;
            if (b = U.f(b, c, d, "tts:origin"))
                if (e = U.j.exec(b)) f ? (a.position = Number(e[2]), a.a = Number(e[1])) : (a.position = Number(e[1]), a.a = Number(e[2]))
        };
        U.f = function(a, b, c, d) {
            for (var e = U.b(b), f = 0; f < e.length; f++) {
                var g = e[f].getAttribute(d);
                if (g) return g
            }
            e = U.h;
            return (a = e(b, "style", c) || e(a, "style", c)) ? a.getAttribute(d) : null
        };
        U.h = function(a, b, c) {
            if (!a || 1 > c.length) return null;
            var d = null;
            if (a = U.oa(a, b))
                for (b = 0; b < c.length; b++)
                    if (c[b].getAttribute("xml:id") == a) {
                        d = c[b];
                        break
                    }
            return d
        };
        U.oa = function(a, b) {
            for (var c = null; a && !(c = a.getAttribute(b));) {
                var d = a.parentNode;
                if (d instanceof Element) a = d;
                else break
            }
            return c
        };
        U.a = function(a, b) {
            var c = null;
            U.l.test(a) ? c = U.pa(b, a) : U.s.test(a) ? c = U.g(U.s, a) : U.m.test(a) ? c = U.g(U.m, a) : U.v.test(a) ? c = U.Aa(b, a) : U.A.test(a) ? c = U.Ba(b, a) : U.w.test(a) && (c = U.g(U.w, a));
            return c
        };
        U.Aa = function(a, b) {
            var c = U.v.exec(b);
            return Number(c[1]) / a.frameRate
        };
        U.Ba = function(a, b) {
            var c = U.A.exec(b);
            return Number(c[1]) / a.a
        };
        U.pa = function(a, b) {
            var c = U.l.exec(b),
                d = Number(c[1]),
                e = Number(c[2]),
                f = Number(c[3]),
                g = Number(c[4]),
                g = g + (Number(c[5]) || 0) / a.b,
                f = f + g / a.frameRate;
            return f + 60 * e + 3600 * d
        };
        U.g = function(a, b) {
            var c = a.exec(b);
            return c && "" != c[0] ? (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0) : null
        };

        function Ie(a, b, c, d) {
            this.frameRate = Number(a) || 30;
            this.b = Number(b) || 1;
            this.a = Number(d);
            this.a || (this.a = a ? this.frameRate * this.b : 1);
            c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= a[1] / a[2])
        }
        E["application/ttml+xml"] = U;

        function Je(a, b) {
            var c = new Sd(new DataView(a)),
                d = ae(1835295092, c);
            if (-1 != d) return U(Zd(c, d - 8).buffer, b);
            if (-1 != be(a, Je.J)) return [];
            throw new q(2, 2007);
        }
        Je.J = 1937010800;
        E['application/mp4; codecs="stpp"'] = Je;

        function Ke(a) {
            this.b = a;
            this.a = 0
        }

        function Le(a, b) {
            var c;
            b.lastIndex = a.a;
            c = (c = b.exec(a.b)) ? {
                position: c.index,
                length: c[0].length,
                Cc: c
            } : null;
            if (a.a == a.b.length || !c || c.position != a.a) return null;
            a.a += c.length;
            return c.Cc
        }

        function Me(a) {
            return a.a == a.b.length ? null : (a = Le(a, /[^ \t\n]*/gm)) ? a[0] : null
        };

        function V(a, b, c, d, e) {
            a = D(a);
            a = a.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
            a = a.split(/\n{2,}/m);
            if (!/^WEBVTT($|[ \t\n])/m.test(a[0])) throw new q(2, 2E3);
            d = [];
            for (var f = 1; f < a.length; f++) {
                var g = V.c(a[f].split("\n"), b, c, e);
                g && d.push(g)
            }
            return d
        }
        V.c = function(a, b, c, d) {
            if (1 == a.length && !a[0] || /^NOTE($|[ \t])/.test(a[0])) return null;
            var e = null;
            0 > a[0].indexOf("--\x3e") && (e = a[0], a.splice(0, 1));
            var f = new Ke(a[0]),
                g = V.a(f),
                h = Le(f, /[ \t]+--\x3e[ \t]+/g),
                l = V.a(f);
            if (null == g || !h || null == l) throw new q(2, 2001);
            g += b;
            l += b;
            d && (g += c, l += c);
            a = wb(g, l, a.slice(1).join("\n").trim());
            if (!a) return null;
            Le(f, /[ \t]+/gm);
            for (b = Me(f); b;) V.i(a, b), Le(f, /[ \t]+/gm), b = Me(f);
            null != e && (a.id = e);
            return a
        };
        V.i = function(a, b) {
            var c;
            if (c = /^align:(start|middle|end|left|right)$/.exec(b)) a.align = c[1];
            else if (c = /^vertical:(lr|rl)$/.exec(b)) a.c = c[1];
            else if (c = /^size:(\d{1,2}|100)%$/.exec(b)) a.size = Number(c[1]);
            else if (c = /^position:(\d{1,2}|100)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(c[1]), c[2] && (a.g = c[2]);
            else if (c = /^line:(\d{1,2}|100)%(?:,(start|end|center))?$/.exec(b)) a.f = !1, a.a = Number(c[1]), c[2] && (a.b = c[2]);
            else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.f = !0, a.a = Number(c[1]), c[2] && (a.b = c[2])
        };
        V.a = function(a) {
            a = Le(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
            if (!a) return null;
            var b = Number(a[2]),
                c = Number(a[3]);
            return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
        };
        E["text/vtt"] = V;
        E['text/vtt; codecs="vtt"'] = V;

        function W(a, b, c, d) {
            var e = new Sd(new DataView(a)),
                f = ae(1835295092, e);
            if (-1 != f) return W.qa(Zd(e, f - 8).buffer, b, c, d);
            if (-1 != be(a, W.ma)) return [];
            throw new q(2, 2008);
        }
        W.qa = function(a, b, c, d) {
            a = new Sd(new DataView(a));
            c += b;
            d += b;
            for (b = []; Ud(a);) {
                var e = ae(W.X, a);
                if (-1 == e) break;
                (e = W.c(Zd(a, e - 8).buffer, c, d)) && b.push(e)
            }
            return b
        };
        W.c = function(a, b, c) {
            a = new Sd(new DataView(a));
            for (var d, e, f; Ud(a);) {
                var g = R(a),
                    h = R(a),
                    l = D(Zd(a, g - 8).buffer);
                1 == g && Yd(a);
                switch (h) {
                    case W.G:
                        d = l;
                        break;
                    case W.C:
                        f = l;
                        break;
                    case W.S:
                        e = l
                }
            }
            if (!d) throw new q(2, 2008);
            b = wb(b, c, d);
            if (!b) return null;
            f && (b.id = f);
            if (e)
                for (e = new Ke(e), f = Me(e); f;) V.i(b, f), Le(e, /[ \t]+/gm), f = Me(e);
            return b
        };
        W.ma = 2004251764;
        W.X = 1987343459;
        W.G = 1885436268;
        W.C = 1768187247;
        W.S = 1937011815;
        E['application/mp4; codecs="wvtt"'] = W;
        Fa.data = function(a) {
            return new Promise(function(b) {
                var c = a.split(":");
                if (2 > c.length || "data" != c[0]) throw new q(1, 1004, a);
                c = c.slice(1).join(":").split(",");
                if (2 > c.length) throw new q(1, 1004, a);
                var d = c[0],
                    c = window.decodeURIComponent(c.slice(1).join(",")),
                    d = d.split(";"),
                    e = null;
                1 < d.length && (e = d[1]);
                if ("base64" == e) c = Xa(c).buffer;
                else {
                    if (e) throw new q(1, 1005, a);
                    c = Sa(c)
                }
                b({
                    uri: a,
                    data: c,
                    headers: {
                        "content-type": d[0]
                    }
                })
            })
        };

        function Ne(a, b) {
            return new Promise(function(c, d) {
                var e = new XMLHttpRequest;
                e.open(b.method, a, !0);
                e.responseType = "arraybuffer";
                e.timeout = b.retryParameters.timeout;
                e.withCredentials = b.allowCrossSiteCredentials;
                e.onload = function(b) {
                    b = b.target;
                    if (200 <= b.status && 299 >= b.status) {
                        var e = b.getAllResponseHeaders().split("\r\n").reduce(function(a, b) {
                            var c = b.split(": ");
                            a[c[0].toLowerCase()] = c.slice(1).join(": ");
                            return a
                        }, {});
                        b.Bc && (a = b.Bc);
                        c({
                            uri: a,
                            data: b.response,
                            headers: e
                        })
                    } else {
                        e = null;
                        try {
                            e = Ra(b.response)
                        } catch (f) {}
                        d(new q(1,
                            1001, a, b.status, e))
                    }
                };
                e.onerror = function() {
                    d(new q(1, 1002, a))
                };
                e.ontimeout = function() {
                    d(new q(1, 1003, a))
                };
                for (var f in b.headers) e.setRequestHeader(f, b.headers[f]);
                e.send(b.body)
            })
        }
        Fa.http = Ne;
        Fa.https = Ne;

        function Oe() {
            this.a = null;
            this.c = [];
            this.b = {}
        }
        k = Oe.prototype;
        k.init = function(a) {
            if (!window.indexedDB) return Promise.reject(new q(9, 9E3));
            var b = window.indexedDB.open("shaka_offline_db", 1),
                c = new w;
            b.onupgradeneeded = function(b) {
                b = b.target.result;
                for (var c in a) b.createObjectStore(c, {
                    keyPath: a[c]
                })
            };
            b.onsuccess = function(a) {
                this.a = a.target.result;
                c.resolve()
            }.bind(this);
            b.onerror = Pe.bind(null, b, c);
            return c.then(function() {
                var b = Object.keys(a);
                return Promise.all(b.map(function(a) {
                    return Qe(this, a).then(function(b) {
                        this.b[a] = b
                    }.bind(this))
                }.bind(this)))
            }.bind(this))
        };
        k.o = function() {
            return Promise.all(this.c.map(function(a) {
                try {
                    a.transaction.abort()
                } catch (b) {}
                return a.I["catch"](v)
            })).then(function() {
                this.a && (this.a.close(), this.a = null)
            }.bind(this))
        };
        k.get = function(a, b) {
            return Re(this, a, "readonly", function(a) {
                return a.get(b)
            })
        };
        k.forEach = function(a, b) {
            return Re(this, a, "readonly", function(a) {
                return a.openCursor()
            }, function(a) {
                a && (b(a.value), a["continue"]())
            })
        };

        function Se(a, b, c) {
            return Re(a, b, "readwrite", function(a) {
                return a.put(c)
            })
        }
        k.remove = function(a, b) {
            return Re(this, a, "readwrite", function(a) {
                return a["delete"](b)
            })
        };

        function Te(a, b) {
            var c = [];
            return Re(a, "segment", "readwrite", function(a) {
                return a.openCursor()
            }, function(a) {
                if (a) {
                    if (b(a.value)) {
                        var e = a["delete"](),
                            f = new w;
                        e.onsuccess = f.resolve;
                        e.onerror = Pe.bind(null, e, f);
                        c.push(f)
                    }
                    a["continue"]()
                }
            }).then(function() {
                return Promise.all(c)
            }).then(function() {
                return c.length
            })
        }

        function Qe(a, b) {
            var c = 0;
            return Re(a, b, "readonly", function(a) {
                return a.openCursor(null, "prev")
            }, function(a) {
                a && (c = a.key + 1)
            }).then(function() {
                return c
            })
        }

        function Re(a, b, c, d, e) {
            c = a.a.transaction([b], c);
            var f = d(c.objectStore(b)),
                g = new w;
            e && (f.onsuccess = function(a) {
                e(a.target.result)
            });
            f.onerror = Pe.bind(null, f, g);
            var h = {
                transaction: c,
                I: g
            };
            a.c.push(h);
            var l = function() {
                this.c.splice(this.c.indexOf(h), 1)
            }.bind(a);
            c.oncomplete = function() {
                l();
                g.resolve(f.result)
            };
            c.onerror = function(a) {
                l();
                Pe(f, g, a)
            };
            return g
        }

        function Pe(a, b, c) {
            "AbortError" == a.error.name ? b.reject(new q(9, 9002)) : b.reject(new q(9, 9001, a.error));
            c.preventDefault()
        };
        var Ue = {
            manifest: "key",
            segment: "key"
        };

        function Ve(a) {
            return {
                offlineUri: "offline:" + a.key,
                originalManifestUri: a.originalManifestUri,
                duration: a.duration,
                size: a.size,
                tracks: a.periods[0].streams.map(function(a) {
                    return {
                        id: a.id,
                        active: !1,
                        type: a.contentType,
                        bandwidth: 0,
                        language: a.language,
                        kind: a.kind || null,
                        width: a.width,
                        height: a.height,
                        frameRate: a.frameRate,
                        codecs: a.codecs
                    }
                }),
                appMetadata: a.appMetadata
            }
        };

        function We() {}
        We.prototype.configure = function() {};
        We.prototype.start = function(a) {
            var b = /^offline:([0-9]+)$/.exec(a);
            if (!b) return Promise.reject(new q(1, 9004, a));
            var c = Number(b[1]),
                d = new Oe;
            return d.init(Ue).then(function() {
                return d.get("manifest", c)
            }).then(function(a) {
                if (!a) throw new q(9, 9003, c);
                return Xe(a)
            }).then(function(a) {
                return d.o().then(function() {
                    return a
                })
            }, function(a) {
                return d.o().then(function() {
                    throw a;
                })
            })
        };
        We.prototype.stop = function() {
            return Promise.resolve()
        };

        function Xe(a) {
            var b = new G(null, 0);
            b.za(a.duration);
            var c = a.drmInfo ? [a.drmInfo] : [];
            return {
                presentationTimeline: b,
                minBufferTime: 10,
                offlineSessionIds: a.sessionIds,
                periods: a.periods.map(function(a) {
                    return {
                        startTime: a.startTime,
                        streamSets: a.streams.map(function(e) {
                            var f = e.segments.map(function(a, b) {
                                return new F(b, a.startTime, a.endTime, function() {
                                    return [a.uri]
                                }, 0, null)
                            });
                            b.Ea(a.startTime, f);
                            f = new T(f);
                            return {
                                language: e.language,
                                type: e.contentType,
                                primary: e.primary,
                                drmInfos: c,
                                streams: [{
                                    id: e.id,
                                    createSegmentIndex: Promise.resolve.bind(Promise),
                                    findSegmentPosition: f.find.bind(f),
                                    getSegmentReference: f.get.bind(f),
                                    initSegmentReference: e.initSegmentUri ? new Pb(function() {
                                        return [e.initSegmentUri]
                                    }, 0, null) : null,
                                    presentationTimeOffset: e.presentationTimeOffset,
                                    mimeType: e.mimeType,
                                    codecs: e.codecs,
                                    bandwidth: 0,
                                    width: e.width || void 0,
                                    height: e.height || void 0,
                                    kind: e.kind,
                                    encrypted: e.encrypted,
                                    keyId: e.keyId,
                                    allowedByApplication: !0,
                                    allowedByKeySystem: !0
                                }]
                            }
                        })
                    }
                })
            }
        }
        rb["application/x-offline-manifest"] = We;
        Fa.offline = function(a) {
            if (/^offline:([0-9]+)$/.exec(a)) {
                var b = {
                    uri: a,
                    data: new ArrayBuffer(0),
                    headers: {
                        "content-type": "application/x-offline-manifest"
                    }
                };
                return Promise.resolve(b)
            }
            if (b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) {
                var c = Number(b[1]),
                    d = new Oe;
                return d.init(Ue).then(function() {
                    return d.get("segment", c)
                }).then(function(b) {
                    return d.o().then(function() {
                        if (!b) throw new q(9, 9003, c);
                        return {
                            uri: a,
                            data: b.data,
                            headers: {}
                        }
                    })
                })
            }
            return Promise.reject(new q(1, 9004, a))
        };

        function Ye(a, b, c) {
            this.b = {};
            this.i = c;
            this.m = a;
            this.l = b;
            this.j = this.a = null;
            this.f = this.g = this.h = this.c = 0
        }
        Ye.prototype.o = function() {
            var a = this.j || Promise.resolve();
            this.b = {};
            this.j = this.a = this.l = this.m = this.i = null;
            return a
        };

        function Ze(a, b, c, d, e) {
            a.b[b] = a.b[b] || [];
            a.b[b].push({
                uris: c.a(),
                L: c.L,
                D: c.D,
                gb: d,
                Ca: e
            })
        }

        function $e(a, b) {
            a.c = 0;
            a.h = 0;
            a.g = 0;
            a.f = 0;
            C(a.b).forEach(function(a) {
                a.forEach(function(a) {
                    null != a.D ? this.c += a.D - a.L + 1 : this.g += a.gb
                }.bind(this))
            }.bind(a));
            a.a = b;
            a.a.size = a.c;
            var c = C(a.b).map(function(a) {
                var b = 0,
                    c = function() {
                        if (!this.i) return Promise.reject(new q(9, 9002));
                        if (b >= a.length) return Promise.resolve();
                        var g = a[b++];
                        return af(this, g).then(c)
                    }.bind(this);
                return c()
            }.bind(a));
            a.b = {};
            return a.j = Promise.all(c)
        }

        function af(a, b) {
            var c = Ha(b.uris, a.l);
            if (b.L || null != b.D) c.headers.Range = "bytes=" + b.L + "-" + (null == b.D ? "" : b.D);
            var d;
            return a.m.request(1, c).then(function(a) {
                if (!this.a) return Promise.reject(new q(9, 9002));
                d = a.data.byteLength;
                return b.Ca(a.data)
            }.bind(a)).then(function() {
                if (!this.a) return Promise.reject(new q(9, 9002));
                null == b.D ? (this.a.size += d, this.f += b.gb) : this.h += d;
                var a = (this.h + this.f) / (this.c + this.g),
                    c = Ve(this.a);
                this.i.progressCallback(c, a)
            }.bind(a))
        };

        function X(a) {
            this.a = new Oe;
            this.c = a;
            this.j = bf(this);
            this.g = null;
            this.v = !1;
            this.i = null;
            this.l = [];
            this.f = -1;
            this.m = 0;
            this.b = null;
            this.h = new Ye(a.h, a.getConfiguration().streaming.retryParameters, this.j)
        }
        m("shaka.offline.Storage", X);

        function cf() {
            return !!window.indexedDB
        }
        X.support = cf;
        X.prototype.o = function() {
            var a = this.l,
                b = this.a,
                c = this.h ? this.h.o()["catch"](function() {}).then(function() {
                    return Promise.all(a.map(function(a) {
                        return b.remove("segment", a)
                    }))
                }).then(function() {
                    return b.o()
                }) : Promise.resolve();
            this.j = this.c = this.h = this.a = null;
            return c
        };
        X.prototype.destroy = X.prototype.o;
        X.prototype.configure = function(a) {
            Cc(this.j, a, bf(this), {}, "")
        };
        X.prototype.configure = X.prototype.configure;
        X.prototype.Tc = function(a, b, c) {
            function d(a) {
                f = a
            }
            if (this.v) return Promise.reject(new q(9, 9006));
            this.v = !0;
            var e, f = null;
            return df(this).then(function() {
                Y(this);
                return ef(this, a, d, c)
            }.bind(this)).then(function(c) {
                Y(this);
                this.b = c.manifest;
                this.g = c.Pb;
                if (this.b.presentationTimeline.U() || this.b.presentationTimeline.fa()) throw new q(9, 9005, a);
                this.b.periods.forEach(this.s.bind(this));
                this.f = this.a.b.manifest++;
                this.m = 0;
                c = this.b.periods.map(this.w.bind(this));
                var d = this.g.b,
                    f = ib(this.g);
                if (d) {
                    if (!f.length) throw new q(9,
                        9007, a);
                    d.initData = []
                }
                e = {
                    key: this.f,
                    originalManifestUri: a,
                    duration: this.m,
                    size: 0,
                    periods: c,
                    sessionIds: f,
                    drmInfo: d,
                    appMetadata: b
                };
                return $e(this.h, e)
            }.bind(this)).then(function() {
                Y(this);
                if (f) throw f;
                return Se(this.a, "manifest", e)
            }.bind(this)).then(function() {
                return ff(this)
            }.bind(this)).then(function() {
                return Ve(e)
            }.bind(this))["catch"](function(a) {
                return ff(this)["catch"](v).then(function() {
                    throw a;
                })
            }.bind(this))
        };
        X.prototype.store = X.prototype.Tc;
        X.prototype.remove = function(a) {
            function b(a) {
                6013 != a.code && (e = a)
            }
            var c = a.offlineUri,
                d = /^offline:([0-9]+)$/.exec(c);
            if (!d) return Promise.reject(new q(9, 9004, c));
            var e = null,
                f, g, h = Number(d[1]);
            return df(this).then(function() {
                Y(this);
                return this.a.get("manifest", h)
            }.bind(this)).then(function(a) {
                Y(this);
                if (!a) throw new q(9, 9003, c);
                f = a;
                a = Xe(f);
                g = new ab(this.c.h, b, function() {});
                g.configure(this.c.getConfiguration().drm);
                return g.init(a, !0)
            }.bind(this)).then(function() {
                return fb(g, f.sessionIds)
            }.bind(this)).then(function() {
                return g.o()
            }.bind(this)).then(function() {
                Y(this);
                if (e) throw e;
                var b = f.periods.map(function(a) {
                        return a.streams.map(function(a) {
                            var b = a.segments.map(function(a) {
                                return Number(/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.uri)[1])
                            });
                            a.initSegmentUri && b.push(Number(/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.initSegmentUri)[1]));
                            return b
                        }).reduce(u, [])
                    }).reduce(u, []),
                    c = 0,
                    d = b.length,
                    g = this.j.progressCallback;
                return Te(this.a, function(e) {
                    e = b.indexOf(e.key);
                    0 <= e && (g(a, c / d), c++);
                    return 0 <= e
                }.bind(this))
            }.bind(this)).then(function() {
                Y(this);
                this.j.progressCallback(a,
                    1);
                return this.a.remove("manifest", h)
            }.bind(this))
        };
        X.prototype.remove = X.prototype.remove;
        X.prototype.list = function() {
            var a = [];
            return df(this).then(function() {
                Y(this);
                return this.a.forEach("manifest", function(b) {
                    a.push(Ve(b))
                })
            }.bind(this)).then(function() {
                return a
            })
        };
        X.prototype.list = X.prototype.list;

        function ef(a, b, c, d) {
            function e() {}
            var f = a.c.h,
                g = a.c.getConfiguration(),
                h, l, n;
            return ub(b, f, g.manifest.retryParameters, d).then(function(a) {
                Y(this);
                n = new a;
                n.configure(g.manifest);
                return n.start(b, f, this.s.bind(this), c)
            }.bind(a)).then(function(a) {
                Y(this);
                h = a;
                l = new ab(f, c, e);
                l.configure(g.drm);
                return l.init(h, !0)
            }.bind(a)).then(function() {
                Y(this);
                return gf(h)
            }.bind(a)).then(function() {
                Y(this);
                return eb(l)
            }.bind(a)).then(function() {
                Y(this);
                return n.stop()
            }.bind(a)).then(function() {
                Y(this);
                return {
                    manifest: h,
                    Pb: l
                }
            }.bind(a))["catch"](function(a) {
                if (n) return n.stop().then(function() {
                    throw a;
                });
                throw a;
            })
        }
        X.prototype.A = function(a) {
            var b = [],
                c = a.filter(function(a) {
                    return "video" == a.type && 480 >= a.height
                });
            c.sort(function(a, b) {
                return b.bandwidth - a.bandwidth
            });
            c.length && b.push(c[0]);
            for (var d = Gc(this.c.getConfiguration().preferredAudioLanguage), c = [0, Ec, Fc], e = a.filter(function(a) {
                    return "audio" == a.type
                }), c = c.map(function(a) {
                    return e.filter(function(b) {
                        b = Gc(b.language);
                        return Dc(a, d, b)
                    })
                }), f = e, g = 0; g < c.length; g++) c[g].length && (f = c[g]);
            f.sort(function(a, b) {
                return a.bandwidth - b.bandwidth
            });
            f.length && b.push(f[Math.floor(f.length /
                2)]);
            var c = Gc(this.c.getConfiguration().preferredTextLanguage),
                h = Dc.bind(null, Fc, c);
            b.push.apply(b, a.filter(function(a) {
                var b = Gc(a.language);
                return "text" == a.type && h(b)
            }));
            return b
        };

        function bf(a) {
            return {
                trackSelectionCallback: a.A.bind(a),
                progressCallback: function(a, c) {
                    if (a || c) return null
                }
            }
        }

        function df(a) {
            return a.a.a ? Promise.resolve() : a.a.init(Ue)
        }
        X.prototype.s = function(a) {
            function b(a, b, c) {
                b = b.filter(function(a) {
                    return a.type == c
                });
                return 0 == b.length ? null : Lc(a, b[0]).stream
            }
            var c = {};
            this.i && (c = {
                video: b(this.b.periods[0], this.i, "video"),
                audio: b(this.b.periods[0], this.i, "audio")
            });
            Jc(this.g, c, a);
            Ic(a, this.c.getConfiguration().restrictions, {
                width: Infinity,
                height: Infinity
            })
        };

        function ff(a) {
            var b = a.g ? a.g.o() : Promise.resolve();
            a.g = null;
            a.b = null;
            a.v = !1;
            a.i = null;
            a.l = [];
            a.f = -1;
            return b
        }

        function gf(a) {
            a = a.periods.map(function(a) {
                return a.streamSets
            }).reduce(u, []).map(function(a) {
                return a.streams
            }).reduce(u, []);
            return Promise.all(a.map(function(a) {
                return a.createSegmentIndex()
            }))
        }
        X.prototype.w = function(a) {
            var b = Kc(a, null),
                b = this.j.trackSelectionCallback(b);
            this.i || (this.i = b, this.b.periods.forEach(this.s.bind(this)));
            for (var c = b.length - 1; 0 < c; --c) {
                for (var d = !1, e = c - 1; 0 <= e; --e)
                    if (b[c].type == b[e].type && b[c].kind == b[e].kind && b[c].language == b[e].language) {
                        d = !0;
                        break
                    }
                if (d) break
            }
            b = b.map(function(b) {
                b = Lc(a, b);
                return hf(this, a, b.Uc, b.stream)
            }.bind(this));
            return {
                startTime: a.startTime,
                streams: b
            }
        };

        function hf(a, b, c, d) {
            for (var e = [], f = a.b.presentationTimeline.ra(), g = f, h = d.findSegmentPosition(f), l = null != h ? d.getSegmentReference(h) : null; l;) {
                var n = a.a.b.segment++;
                Ze(a.h, c.type, l, (l.endTime - l.startTime) * d.bandwidth / 8, function(a, b, c, d) {
                    b = {
                        key: a,
                        data: d,
                        manifestKey: this.f,
                        streamNumber: c,
                        segmentNumber: b
                    };
                    this.l.push(a);
                    return Se(this.a, "segment", b)
                }.bind(a, n, l.position, d.id));
                e.push({
                    startTime: l.startTime,
                    endTime: l.endTime,
                    uri: "offline:" + a.f + "/" + d.id + "/" + n
                });
                g = l.endTime + b.startTime;
                l = d.getSegmentReference(++h)
            }
            a.m =
                Math.max(a.m, g - f);
            b = null;
            d.initSegmentReference && (n = a.a.b.segment++, b = "offline:" + a.f + "/" + d.id + "/" + n, Ze(a.h, c.type, d.initSegmentReference, 0, function(a, b) {
                var c = {
                    key: n,
                    data: b,
                    manifestKey: this.f,
                    streamNumber: a,
                    segmentNumber: -1
                };
                this.l.push(n);
                return Se(this.a, "segment", c)
            }.bind(a, d.id)));
            return {
                id: d.id,
                primary: c.primary,
                presentationTimeOffset: d.presentationTimeOffset || 0,
                contentType: c.type,
                mimeType: d.mimeType,
                codecs: d.codecs,
                frameRate: d.frameRate,
                kind: d.kind,
                language: c.language,
                width: d.width || null,
                height: d.height ||
                    null,
                initSegmentUri: b,
                encrypted: d.encrypted,
                keyId: d.keyId,
                segments: e
            }
        }

        function Y(a) {
            if (!a.c) throw new q(9, 9002);
        }
        Tc.offline = cf;
        m("shaka.polyfill.installAll", function() {
            for (var a = 0; a < jf.length; ++a) jf[a]()
        });
        var jf = [];

        function kf(a) {
            jf.push(a)
        }
        m("shaka.polyfill.register", kf);

        function lf(a) {
            var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
                b = new Event(b, a);
            a.target.dispatchEvent(b)
        }
        kf(function() {
            if (window.Document) {
                var a = Element.prototype;
                a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
                a = Document.prototype;
                a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen;
                "fullscreenElement" in document || Object.defineProperty(document, "fullscreenElement", {
                    get: function() {
                        return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
                    }
                });
                document.addEventListener("webkitfullscreenchange",
                    lf);
                document.addEventListener("webkitfullscreenerror", lf);
                document.addEventListener("mozfullscreenchange", lf);
                document.addEventListener("mozfullscreenerror", lf);
                document.addEventListener("MSFullscreenChange", lf);
                document.addEventListener("MSFullscreenError", lf)
            }
        });

        function mf(a) {
            this.c = [];
            this.b = [];
            this.a = [];
            for (a = new Sd(new DataView(a.buffer)); Ud(a);) {
                var b = ae(1886614376, a);
                if (-1 == b) break;
                var c = a.a - 8,
                    d = Vd(a);
                if (1 < d) S(a, b - (a.a - c));
                else {
                    S(a, 3);
                    var e = Za(Zd(a, 16)),
                        f = [];
                    if (0 < d)
                        for (var d = R(a), g = 0; g < d; ++g) {
                            var h = Za(Zd(a, 16));
                            f.push(h)
                        }
                    d = R(a);
                    S(a, d);
                    this.b.push.apply(this.b, f);
                    this.c.push(e);
                    this.a.push({
                        start: c,
                        end: a.a - 1
                    });
                    a.a != c + b && S(a, b - (a.a - c))
                }
            }
        };

        function nf(a, b) {
            try {
                var c = new of (a, b);
                return Promise.resolve(c)
            } catch (d) {
                return Promise.reject(d)
            }
        }

        function of (a, b) {
            this.keySystem = a;
            for (var c = !1, d = 0; d < b.length; ++d) {
                var e = b[d],
                    f = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: e.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: e.label
                    },
                    g = !1;
                if (e.audioCapabilities)
                    for (var h = 0; h < e.audioCapabilities.length; ++h) {
                        var l = e.audioCapabilities[h];
                        if (l.contentType) {
                            var g = !0,
                                n = l.contentType.split(";")[0];
                            MSMediaKeys.isTypeSupported(this.keySystem, n) && (f.audioCapabilities.push(l), c = !0)
                        }
                    }
                if (e.videoCapabilities)
                    for (h =
                        0; h < e.videoCapabilities.length; ++h) l = e.videoCapabilities[h], l.contentType && (g = !0, n = l.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, n) && (f.videoCapabilities.push(l), c = !0));
                g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
                "required" == e.persistentState && (f.persistentState = "required", f.sessionTypes = ["persistent-license"]);
                if (c) {
                    this.a = f;
                    return
                }
            }
            c = Error("Unsupported keySystem");
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        } of .prototype.createMediaKeys = function() {
            var a = new pf(this.keySystem);
            return Promise.resolve(a)
        }; of .prototype.getConfiguration = function() {
            return this.a
        };

        function qf(a) {
            var b = this.mediaKeys;
            b && b != a && rf(b, null);
            delete this.mediaKeys;
            return (this.mediaKeys = a) ? rf(a, this) : Promise.resolve()
        }

        function pf(a) {
            this.a = new MSMediaKeys(a);
            this.b = new z
        }
        pf.prototype.createSession = function(a) {
            if ("temporary" != (a || "temporary")) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            return new sf(this.a)
        };
        pf.prototype.setServerCertificate = function() {
            return Promise.reject(Error("setServerCertificate not supported on this platform."))
        };

        function rf(a, b) {
            function c() {
                b.msSetMediaKeys(d.a);
                b.removeEventListener("loadedmetadata", c)
            }
            Ka(a.b);
            if (!b) return Promise.resolve();
            B(a.b, b, "msneedkey", tf);
            var d = a;
            try {
                return 1 <= b.readyState ? b.msSetMediaKeys(a.a) : b.addEventListener("loadedmetadata", c), Promise.resolve()
            } catch (e) {
                return Promise.reject(e)
            }
        }

        function sf(a) {
            p.call(this);
            this.c = null;
            this.g = a;
            this.b = this.a = null;
            this.f = new z;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new w;
            this.keyStatuses = new uf
        }
        ba(sf);
        k = sf.prototype;
        k.generateRequest = function(a, b) {
            this.a = new w;
            try {
                this.c = this.g.createSession("video/mp4", new Uint8Array(b), null), B(this.f, this.c, "mskeymessage", this.hc.bind(this)), B(this.f, this.c, "mskeyadded", this.fc.bind(this)), B(this.f, this.c, "mskeyerror", this.gc.bind(this)), vf(this, "status-pending")
            } catch (c) {
                this.a.reject(c)
            }
            return this.a
        };
        k.load = function() {
            return Promise.reject(Error("MediaKeySession.load not yet supported"))
        };
        k.update = function(a) {
            this.b = new w;
            try {
                this.c.update(new Uint8Array(a))
            } catch (b) {
                this.b.reject(b)
            }
            return this.b
        };
        k.close = function() {
            try {
                this.c.close(), this.closed.resolve(), Ka(this.f)
            } catch (a) {
                this.closed.reject(a)
            }
            return this.closed
        };
        k.remove = function() {
            return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
        };

        function tf(a) {
            var b = document.createEvent("CustomEvent");
            b.initCustomEvent("encrypted", !1, !1, null);
            b.initDataType = "cenc";
            if (a = a.initData) {
                var c = new mf(a);
                if (!(1 >= c.a.length)) {
                    for (var d = [], e = 0; e < c.a.length; e++) d.push(a.subarray(c.a[e].start, c.a[e].end + 1));
                    e = wf;
                    a = [];
                    for (c = 0; c < d.length; ++c) {
                        for (var f = !1, g = 0; g < a.length && !(f = e ? e(d[c], a[g]) : d[c] === a[g]); ++g);
                        f || a.push(d[c])
                    }
                    for (e = d = 0; e < a.length; e++) d += a[e].length;
                    d = new Uint8Array(d);
                    for (e = c = 0; e < a.length; e++) d.set(a[e], c), c += a[e].length;
                    a = d
                }
            }
            b.initData =
                a;
            this.dispatchEvent(b)
        }

        function wf(a, b) {
            return $a(a, b)
        }
        k.hc = function(a) {
            this.a && (this.a.resolve(), this.a = null);
            this.dispatchEvent(new H("message", {
                messageType: void 0 == this.keyStatuses.Sa() ? "licenserequest" : "licenserenewal",
                message: a.message.buffer
            }))
        };
        k.fc = function() {
            this.a ? (vf(this, "usable"), this.a.resolve(), this.a = null) : this.b && (vf(this, "usable"), this.b.resolve(), this.b = null)
        };
        k.gc = function() {
            var a = Error("EME PatchedMediaKeysMs key error");
            a.errorCode = this.c.error;
            if (this.a) this.a.reject(a), this.a = null;
            else if (this.b) this.b.reject(a), this.b = null;
            else switch (this.c.error.code) {
                case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                    vf(this, "output-not-allowed");
                default:
                    vf(this, "internal-error")
            }
        };

        function vf(a, b) {
            a.keyStatuses.ab(b);
            a.dispatchEvent(new H("keystatuseschange"))
        }

        function uf() {
            this.size = 0;
            this.a = void 0
        }
        var xf;
        k = uf.prototype;
        k.ab = function(a) {
            this.size = void 0 == a ? 0 : 1;
            this.a = a
        };
        k.Sa = function() {
            return this.a
        };
        k.forEach = function(a) {
            this.a && a(this.a, xf)
        };
        k.get = function(a) {
            if (this.has(a)) return this.a
        };
        k.has = function(a) {
            var b = xf;
            return this.a && $a(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
        };
        k.keys = function() {};

        function yf() {
            return Promise.reject(Error("The key system specified is not supported."))
        }

        function zf(a) {
            return a ? Promise.reject(Error("MediaKeys not supported.")) : Promise.resolve()
        }

        function Af() {
            throw new TypeError("Illegal constructor.");
        }
        Af.prototype.createSession = function() {};
        Af.prototype.setServerCertificate = function() {};

        function Bf() {
            throw new TypeError("Illegal constructor.");
        }
        Bf.prototype.getConfiguration = function() {};
        Bf.prototype.createMediaKeys = function() {};

        function Cf(a, b) {
            try {
                var c = new Df(a, b);
                return Promise.resolve(c)
            } catch (d) {
                return Promise.reject(d)
            }
        }

        function Ef(a) {
            var b = this.mediaKeys;
            b && b != a && Ff(b, null);
            delete this.mediaKeys;
            (this.mediaKeys = a) && Ff(a, this);
            return Promise.resolve()
        }

        function Df(a, b) {
            this.a = this.keySystem = a;
            var c = !0;
            "org.w3.clearkey" == a && (this.a = "webkit-org.w3.clearkey", c = !1);
            var d = !1,
                e;
            e = document.getElementsByTagName("video");
            e = e.length ? e[0] : document.createElement("video");
            for (var f = 0; f < b.length; ++f) {
                var g = b[f],
                    h = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: g.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: g.label
                    },
                    l = !1;
                if (g.audioCapabilities)
                    for (var n = 0; n < g.audioCapabilities.length; ++n) {
                        var r =
                            g.audioCapabilities[n];
                        r.contentType && (l = !0, e.canPlayType(r.contentType.split(";")[0], this.a) && (h.audioCapabilities.push(r), d = !0))
                    }
                if (g.videoCapabilities)
                    for (n = 0; n < g.videoCapabilities.length; ++n) r = g.videoCapabilities[n], r.contentType && (l = !0, e.canPlayType(r.contentType, this.a) && (h.videoCapabilities.push(r), d = !0));
                l || (d = e.canPlayType("video/mp4", this.a) || e.canPlayType("video/webm", this.a));
                "required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) : d = !1);
                if (d) {
                    this.b =
                        h;
                    return
                }
            }
            c = "Unsupported keySystem";
            if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
            c = Error(c);
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        Df.prototype.createMediaKeys = function() {
            var a = new Gf(this.a);
            return Promise.resolve(a)
        };
        Df.prototype.getConfiguration = function() {
            return this.b
        };

        function Gf(a) {
            this.g = a;
            this.b = null;
            this.a = new z;
            this.c = [];
            this.f = {}
        }

        function Ff(a, b) {
            a.b = b;
            Ka(a.a);
            b && (B(a.a, b, "webkitneedkey", a.qc.bind(a)), B(a.a, b, "webkitkeymessage", a.pc.bind(a)), B(a.a, b, "webkitkeyadded", a.nc.bind(a)), B(a.a, b, "webkitkeyerror", a.oc.bind(a)))
        }
        k = Gf.prototype;
        k.createSession = function(a) {
            var b = a || "temporary";
            if ("temporary" != b && "persistent-license" != b) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            a = this.b || document.createElement("video");
            a.src || (a.src = "about:blank");
            b = new Hf(a, this.g, b);
            this.c.push(b);
            return b
        };
        k.setServerCertificate = function() {
            return Promise.reject(Error("setServerCertificate not supported on this platform."))
        };
        k.qc = function(a) {
            this.b.dispatchEvent(new H("encrypted", {
                initDataType: "webm",
                initData: a.initData
            }))
        };
        k.pc = function(a) {
            var b = If(this, a.sessionId);
            b && (a = new H("message", {
                messageType: void 0 == b.keyStatuses.Sa() ? "licenserequest" : "licenserenewal",
                message: a.message
            }), b.b && (b.b.resolve(), b.b = null), b.dispatchEvent(a))
        };
        k.nc = function(a) {
            if (a = If(this, a.sessionId)) Jf(a, "usable"), a.a && a.a.resolve(), a.a = null
        };
        k.oc = function(a) {
            var b = If(this, a.sessionId);
            if (b) {
                var c = Error("EME v0.1b key error");
                c.errorCode = a.errorCode;
                c.errorCode.systemCode = a.systemCode;
                !a.sessionId && b.b ? (c.method = "generateRequest", 45 == a.systemCode && (c.message = "Unsupported session type."), b.b.reject(c), b.b = null) : a.sessionId && b.a ? (c.method = "update", b.a.reject(c), b.a = null) : (c = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? Jf(b, "output-restricted") : 1 == c ? Jf(b, "expired") : Jf(b, "internal-error"))
            }
        };

        function If(a, b) {
            var c = a.f[b];
            return c ? c : (c = a.c.shift()) ? (c.sessionId = b, a.f[b] = c) : null
        }

        function Hf(a, b, c) {
            p.call(this);
            this.f = a;
            this.h = !1;
            this.a = this.b = null;
            this.c = b;
            this.g = c;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new w;
            this.keyStatuses = new Kf
        }
        ba(Hf);

        function Lf(a, b, c) {
            if (a.h) return Promise.reject(Error("The session is already initialized."));
            a.h = !0;
            var d;
            try {
                if ("persistent-license" == a.g)
                    if (c) d = new Uint8Array(Sa("LOAD_SESSION|" + c));
                    else {
                        var e = Sa("PERSISTENT|"),
                            f = new Uint8Array(e.byteLength + b.byteLength);
                        f.set(new Uint8Array(e), 0);
                        f.set(new Uint8Array(b), e.byteLength);
                        d = f
                    }
                else d = new Uint8Array(b)
            } catch (g) {
                return Promise.reject(g)
            }
            a.b = new w;
            try {
                a.f.webkitGenerateKeyRequest(a.c, d)
            } catch (g) {
                if ("InvalidStateError" != g.name) return a.b = null, Promise.reject(g);
                setTimeout(function() {
                    try {
                        this.f.webkitGenerateKeyRequest(this.c, d)
                    } catch (a) {
                        this.b.reject(a), this.b = null
                    }
                }.bind(a), 10)
            }
            return a.b
        }
        k = Hf.prototype;
        k.cb = function(a, b) {
            if (this.a) this.a.then(this.cb.bind(this, a, b))["catch"](this.cb.bind(this, a, b));
            else {
                this.a = a;
                var c, d;
                "webkit-org.w3.clearkey" == this.c ? (c = D(b), d = JSON.parse(c), "oct" != d.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null), c = Xa(d.keys[0].k), d = Xa(d.keys[0].kid)) : (c = new Uint8Array(b), d = null);
                try {
                    this.f.webkitAddKey(this.c, c, d, this.sessionId)
                } catch (e) {
                    this.a.reject(e), this.a = null
                }
            }
        };

        function Jf(a, b) {
            a.keyStatuses.ab(b);
            a.dispatchEvent(new H("keystatuseschange"))
        }
        k.generateRequest = function(a, b) {
            return Lf(this, b, null)
        };
        k.load = function(a) {
            return "persistent-license" == this.g ? Lf(this, null, a) : Promise.reject(Error("Not a persistent session."))
        };
        k.update = function(a) {
            var b = new w;
            this.cb(b, a);
            return b
        };
        k.close = function() {
            if ("persistent-license" != this.g) {
                if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                try {
                    this.f.webkitCancelKeyRequest(this.c, this.sessionId)
                } catch (a) {}
            }
            this.closed.resolve();
            return this.closed
        };
        k.remove = function() {
            return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close()
        };

        function Kf() {
            this.size = 0;
            this.a = void 0
        }
        var Mf;
        k = Kf.prototype;
        k.ab = function(a) {
            this.size = void 0 == a ? 0 : 1;
            this.a = a
        };
        k.Sa = function() {
            return this.a
        };
        k.forEach = function(a) {
            this.a && a(this.a, Mf)
        };
        k.get = function(a) {
            if (this.has(a)) return this.a
        };
        k.has = function(a) {
            var b = Mf;
            return this.a && $a(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
        };
        k.keys = function() {};
        kf(function() {
            !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? (Mf = (new Uint8Array([0])).buffer, navigator.requestMediaKeySystemAccess = Cf, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ef, window.MediaKeys = Gf, window.MediaKeySystemAccess = Df) : window.MSMediaKeys ? (xf = (new Uint8Array([0])).buffer, delete HTMLMediaElement.prototype.mediaKeys,
                HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = qf, window.MediaKeys = pf, window.MediaKeySystemAccess = of , navigator.requestMediaKeySystemAccess = nf) : (navigator.requestMediaKeySystemAccess = yf, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = zf, window.MediaKeys = Af, window.MediaKeySystemAccess = Bf))
        });
        kf(function() {
            if (window.MediaSource) {
                var a = navigator.vendor,
                    b = navigator.appVersion;
                if (a && b && !(0 > a.indexOf("Apple")))
                    if (0 <= b.indexOf("Version/8")) window.MediaSource = null;
                    else {
                        var c = MediaSource.prototype.addSourceBuffer;
                        MediaSource.prototype.addSourceBuffer = function() {
                            var a = c.apply(this, arguments);
                            a.abort = function() {};
                            return a
                        }
                    }
            }
        });

        function Z(a) {
            this.c = [];
            this.b = [];
            this.ia = Nf;
            if (a) try {
                a(this.W.bind(this), this.a.bind(this))
            } catch (b) {
                this.a(b)
            }
        }
        var Nf = 0;

        function Of(a) {
            var b = new Z;
            b.W(a);
            return b
        }

        function Pf(a) {
            var b = new Z;
            b.a(a);
            return b
        }

        function Qf(a) {
            function b(a, b, c) {
                a.ia == Nf && (e[b] = c, d++, d == e.length && a.W(e))
            }
            var c = new Z;
            if (!a.length) return c.W([]), c;
            for (var d = 0, e = Array(a.length), f = c.a.bind(c), g = 0; g < a.length; ++g) a[g] && a[g].then ? a[g].then(b.bind(null, c, g), f) : b(c, g, a[g]);
            return c
        }

        function Rf(a) {
            for (var b = new Z, c = b.W.bind(b), d = b.a.bind(b), e = 0; e < a.length; ++e) a[e] && a[e].then ? a[e].then(c, d) : c(a[e]);
            return b
        }
        Z.prototype.then = function(a, b) {
            var c = new Z;
            switch (this.ia) {
                case 1:
                    Sf(this, c, a);
                    break;
                case 2:
                    Sf(this, c, b);
                    break;
                case Nf:
                    this.c.push({
                        I: c,
                        Ca: a
                    }), this.b.push({
                        I: c,
                        Ca: b
                    })
            }
            return c
        };
        Z.prototype["catch"] = function(a) {
            return this.then(void 0, a)
        };
        Z.prototype.W = function(a) {
            if (this.ia == Nf) {
                this.Ma = a;
                this.ia = 1;
                for (a = 0; a < this.c.length; ++a) Sf(this, this.c[a].I, this.c[a].Ca);
                this.c = [];
                this.b = []
            }
        };
        Z.prototype.a = function(a) {
            if (this.ia == Nf) {
                this.Ma = a;
                this.ia = 2;
                for (a = 0; a < this.b.length; ++a) Sf(this, this.b[a].I, this.b[a].Ca);
                this.c = [];
                this.b = []
            }
        };

        function Sf(a, b, c) {
            Tf.push(function() {
                if (c && "function" == typeof c) {
                    try {
                        var a = c(this.Ma)
                    } catch (f) {
                        b.a(f);
                        return
                    }
                    var e;
                    try {
                        e = a && a.then
                    } catch (f) {
                        b.a(f);
                        return
                    }
                    a instanceof Z ? a == b ? b.a(new TypeError("Chaining cycle detected")) : a.then(b.W.bind(b), b.a.bind(b)) : e ? Uf(a, e, b) : b.W(a)
                } else 1 == this.ia ? b.W(this.Ma) : b.a(this.Ma)
            }.bind(a));
            null == Vf && (Vf = Wf(Xf))
        }

        function Uf(a, b, c) {
            try {
                var d = !1;
                b.call(a, function(a) {
                    if (!d) {
                        d = !0;
                        var b;
                        try {
                            b = a && a.then
                        } catch (g) {
                            c.a(g);
                            return
                        }
                        b ? Uf(a, b, c) : c.W(a)
                    }
                }, c.a.bind(c))
            } catch (e) {
                c.a(e)
            }
        }

        function Xf() {
            for (; Tf.length;) {
                null != Vf && (Yf(Vf), Vf = null);
                var a = Tf;
                Tf = [];
                for (var b = 0; b < a.length; ++b) a[b]()
            }
        }

        function Wf() {
            return 0
        }

        function Yf() {}
        var Vf = null,
            Tf = [];
        kf(function(a) {
            window.setImmediate ? (Wf = function(a) {
                return window.setImmediate(a)
            }, Yf = function(a) {
                return window.clearImmediate(a)
            }) : (Wf = function(a) {
                return window.setTimeout(a, 0)
            }, Yf = function(a) {
                return window.clearTimeout(a)
            });
            if (!window.Promise || a) window.Promise = Z, window.Promise.resolve = Of, window.Promise.reject = Pf, window.Promise.all = Qf, window.Promise.race = Rf, window.Promise.prototype.then = Z.prototype.then, window.Promise.prototype["catch"] = Z.prototype["catch"]
        });

        function Zf() {
            return {
                droppedVideoFrames: this.webkitDroppedFrameCount,
                totalVideoFrames: this.webkitDecodedFrameCount,
                corruptedVideoFrames: 0,
                creationTime: NaN,
                totalFrameDelay: 0
            }
        }
        kf(function() {
            if (window.HTMLVideoElement) {
                var a = HTMLVideoElement.prototype;
                !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = Zf)
            }
        });
    }.call(g, this));
    if (typeof(module) != "undefined" && module.exports) module.exports = g.shaka;
    else if (typeof(define) != "undefined" && define.amd) define(function() {
        return g.shaka
    });
    else this.shaka = g.shaka;
})();