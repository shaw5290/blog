!(function () {
  "use strict";
  var e,
    t,
    n,
    a,
    i = {
      44596: function (e, t, n) {
        var a = n(31808),
          i = n(38151),
          r = TypeError;
        e.exports = function (e) {
          if (a(e)) return e;
          throw r(i(e) + " is not a function");
        };
      },
      9316: function (e, t, n) {
        var a = n(31808),
          i = String,
          r = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || a(e)) return e;
          throw r("Can't set " + i(e) + " as a prototype");
        };
      },
      58521: function (e, t, n) {
        var a = n(15537),
          i = n(91026),
          r = n(3002).f,
          o = a("unscopables"),
          s = Array.prototype;
        void 0 === s[o] && r(s, o, { configurable: !0, value: i(null) }),
          (e.exports = function (e) {
            s[o][e] = !0;
          });
      },
      12051: function (e, t, n) {
        var a = n(97124).charAt;
        e.exports = function (e, t, n) {
          return t + (n ? a(e, t).length : 1);
        };
      },
      87787: function (e, t, n) {
        var a = n(88304),
          i = TypeError;
        e.exports = function (e, t) {
          if (a(t, e)) return e;
          throw i("Incorrect invocation");
        };
      },
      79308: function (e, t, n) {
        var a = n(27627),
          i = String,
          r = TypeError;
        e.exports = function (e) {
          if (a(e)) return e;
          throw r(i(e) + " is not an object");
        };
      },
      27530: function (e, t, n) {
        var a = n(82144),
          i = n(17725),
          r = n(76075),
          o = n(99266),
          s = n(95409),
          c = n(92701),
          d = n(2103),
          u = n(88990),
          l = n(34431),
          h = n(19463),
          b = Array;
        e.exports = function (e) {
          var t = r(e),
            n = c(this),
            f = arguments.length,
            p = f > 1 ? arguments[1] : void 0,
            y = void 0 !== p;
          y && (p = a(p, f > 2 ? arguments[2] : void 0));
          var m,
            w,
            g,
            _,
            v,
            x,
            k = h(t),
            S = 0;
          if (!k || (this === b && s(k)))
            for (m = d(t), w = n ? new this(m) : b(m); m > S; S++)
              (x = y ? p(t[S], S) : t[S]), u(w, S, x);
          else
            for (
              v = (_ = l(t, k)).next, w = n ? new this() : [];
              !(g = i(v, _)).done;
              S++
            )
              (x = y ? o(_, p, [g.value, S], !0) : g.value), u(w, S, x);
          return (w.length = S), w;
        };
      },
      96039: function (e, t, n) {
        var a = n(17794),
          i = n(97913),
          r = n(2103),
          o = function (e) {
            return function (t, n, o) {
              var s,
                c = a(t),
                d = r(c),
                u = i(o, d);
              if (e && n != n) {
                for (; d > u; ) if ((s = c[u++]) != s) return !0;
              } else
                for (; d > u; u++)
                  if ((e || u in c) && c[u] === n) return e || u || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      14501: function (e, t, n) {
        var a = n(97913),
          i = n(2103),
          r = n(88990),
          o = Array,
          s = Math.max;
        e.exports = function (e, t, n) {
          for (
            var c = i(e),
              d = a(t, c),
              u = a(void 0 === n ? c : n, c),
              l = o(s(u - d, 0)),
              h = 0;
            d < u;
            d++, h++
          )
            r(l, h, e[d]);
          return (l.length = h), l;
        };
      },
      626: function (e, t, n) {
        var a = n(14501),
          i = Math.floor,
          r = function (e, t) {
            var n = e.length,
              c = i(n / 2);
            return n < 8 ? o(e, t) : s(e, r(a(e, 0, c), t), r(a(e, c), t), t);
          },
          o = function (e, t) {
            for (var n, a, i = e.length, r = 1; r < i; ) {
              for (a = r, n = e[r]; a && t(e[a - 1], n) > 0; ) e[a] = e[--a];
              a !== r++ && (e[a] = n);
            }
            return e;
          },
          s = function (e, t, n, a) {
            for (var i = t.length, r = n.length, o = 0, s = 0; o < i || s < r; )
              e[o + s] =
                o < i && s < r
                  ? a(t[o], n[s]) <= 0
                    ? t[o++]
                    : n[s++]
                  : o < i
                  ? t[o++]
                  : n[s++];
            return e;
          };
        e.exports = r;
      },
      99266: function (e, t, n) {
        var a = n(79308),
          i = n(55887);
        e.exports = function (e, t, n, r) {
          try {
            return r ? t(a(n)[0], n[1]) : t(n);
          } catch (t) {
            i(e, "throw", t);
          }
        };
      },
      38555: function (e, t, n) {
        var a = n(52058),
          i = a({}.toString),
          r = a("".slice);
        e.exports = function (e) {
          return r(i(e), 8, -1);
        };
      },
      25786: function (e, t, n) {
        var a = n(32709),
          i = n(31808),
          r = n(38555),
          o = n(15537)("toStringTag"),
          s = Object,
          c =
            "Arguments" ===
            r(
              (function () {
                return arguments;
              })()
            );
        e.exports = a
          ? r
          : function (e) {
              var t, n, a;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = s(e)), o))
                ? n
                : c
                ? r(t)
                : "Object" === (a = r(t)) && i(t.callee)
                ? "Arguments"
                : a;
            };
      },
      85609: function (e, t, n) {
        var a = n(48496),
          i = n(7464),
          r = n(94086),
          o = n(3002);
        e.exports = function (e, t, n) {
          for (var s = i(t), c = o.f, d = r.f, u = 0; u < s.length; u++) {
            var l = s[u];
            a(e, l) || (n && a(n, l)) || c(e, l, d(t, l));
          }
        };
      },
      16382: function (e, t, n) {
        var a = n(79645);
        e.exports = !a(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      62526: function (e) {
        e.exports = function (e, t) {
          return { value: e, done: t };
        };
      },
      60859: function (e, t, n) {
        var a = n(40369),
          i = n(3002),
          r = n(56373);
        e.exports = a
          ? function (e, t, n) {
              return i.f(e, t, r(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      56373: function (e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      88990: function (e, t, n) {
        var a = n(7171),
          i = n(3002),
          r = n(56373);
        e.exports = function (e, t, n) {
          var o = a(t);
          o in e ? i.f(e, o, r(0, n)) : (e[o] = n);
        };
      },
      4259: function (e, t, n) {
        var a = n(32303),
          i = n(3002);
        e.exports = function (e, t, n) {
          return (
            n.get && a(n.get, t, { getter: !0 }),
            n.set && a(n.set, t, { setter: !0 }),
            i.f(e, t, n)
          );
        };
      },
      96561: function (e, t, n) {
        var a = n(31808),
          i = n(3002),
          r = n(32303),
          o = n(91105);
        e.exports = function (e, t, n, s) {
          s || (s = {});
          var c = s.enumerable,
            d = void 0 !== s.name ? s.name : t;
          if ((a(n) && r(n, d, s), s.global)) c ? (e[t] = n) : o(t, n);
          else {
            try {
              s.unsafe ? e[t] && (c = !0) : delete e[t];
            } catch (e) {}
            c
              ? (e[t] = n)
              : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !s.nonConfigurable,
                  writable: !s.nonWritable,
                });
          }
          return e;
        };
      },
      38308: function (e, t, n) {
        var a = n(96561);
        e.exports = function (e, t, n) {
          for (var i in t) a(e, i, t[i], n);
          return e;
        };
      },
      91105: function (e, t, n) {
        var a = n(27990),
          i = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            i(a, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            a[e] = t;
          }
          return t;
        };
      },
      40369: function (e, t, n) {
        var a = n(79645);
        e.exports = !a(function () {
          return (
            7 !==
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      71857: function (e) {
        var t = "object" == typeof document && document.all,
          n = void 0 === t && void 0 !== t;
        e.exports = { all: t, IS_HTMLDDA: n };
      },
      54799: function (e, t, n) {
        var a = n(27990),
          i = n(27627),
          r = a.document,
          o = i(r) && i(r.createElement);
        e.exports = function (e) {
          return o ? r.createElement(e) : {};
        };
      },
      28685: function (e) {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      53981: function (e, t, n) {
        var a = n(54799)("span").classList,
          i = a && a.constructor && a.constructor.prototype;
        e.exports = i === Object.prototype ? void 0 : i;
      },
      17366: function (e) {
        e.exports =
          ("undefined" != typeof navigator && String(navigator.userAgent)) ||
          "";
      },
      1579: function (e, t, n) {
        var a,
          i,
          r = n(27990),
          o = n(17366),
          s = r.process,
          c = r.Deno,
          d = (s && s.versions) || (c && c.version),
          u = d && d.v8;
        u && (i = (a = u.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])),
          !i &&
            o &&
            (!(a = o.match(/Edge\/(\d+)/)) || a[1] >= 74) &&
            (a = o.match(/Chrome\/(\d+)/)) &&
            (i = +a[1]),
          (e.exports = i);
      },
      54577: function (e) {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      88903: function (e, t, n) {
        var a = n(27990),
          i = n(94086).f,
          r = n(60859),
          o = n(96561),
          s = n(91105),
          c = n(85609),
          d = n(69168);
        e.exports = function (e, t) {
          var n,
            u,
            l,
            h,
            b,
            f = e.target,
            p = e.global,
            y = e.stat;
          if ((n = p ? a : y ? a[f] || s(f, {}) : (a[f] || {}).prototype))
            for (u in t) {
              if (
                ((h = t[u]),
                (l = e.dontCallGetSet ? (b = i(n, u)) && b.value : n[u]),
                !d(p ? u : f + (y ? "." : "#") + u, e.forced) && void 0 !== l)
              ) {
                if (typeof h == typeof l) continue;
                c(h, l);
              }
              (e.sham || (l && l.sham)) && r(h, "sham", !0), o(n, u, h, e);
            }
        };
      },
      79645: function (e) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      84902: function (e, t, n) {
        n(28610);
        var a = n(2330),
          i = n(96561),
          r = n(34530),
          o = n(79645),
          s = n(15537),
          c = n(60859),
          d = s("species"),
          u = RegExp.prototype;
        e.exports = function (e, t, n, l) {
          var h = s(e),
            b = !o(function () {
              var t = {};
              return (
                (t[h] = function () {
                  return 7;
                }),
                7 !== ""[e](t)
              );
            }),
            f =
              b &&
              !o(function () {
                var t = !1,
                  n = /a/;
                return (
                  "split" === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[d] = function () {
                      return n;
                    }),
                    (n.flags = ""),
                    (n[h] = /./[h])),
                  (n.exec = function () {
                    return (t = !0), null;
                  }),
                  n[h](""),
                  !t
                );
              });
          if (!b || !f || n) {
            var p = a(/./[h]),
              y = t(h, ""[e], function (e, t, n, i, o) {
                var s = a(e),
                  c = t.exec;
                return c === r || c === u.exec
                  ? b && !o
                    ? { done: !0, value: p(t, n, i) }
                    : { done: !0, value: s(n, t, i) }
                  : { done: !1 };
              });
            i(String.prototype, e, y[0]), i(u, h, y[1]);
          }
          l && c(u[h], "sham", !0);
        };
      },
      59878: function (e, t, n) {
        var a = n(62023),
          i = Function.prototype,
          r = i.apply,
          o = i.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (a
            ? o.bind(r)
            : function () {
                return o.apply(r, arguments);
              });
      },
      82144: function (e, t, n) {
        var a = n(2330),
          i = n(44596),
          r = n(62023),
          o = a(a.bind);
        e.exports = function (e, t) {
          return (
            i(e),
            void 0 === t
              ? e
              : r
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      62023: function (e, t, n) {
        var a = n(79645);
        e.exports = !a(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      17725: function (e, t, n) {
        var a = n(62023),
          i = Function.prototype.call;
        e.exports = a
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      92697: function (e, t, n) {
        var a = n(40369),
          i = n(48496),
          r = Function.prototype,
          o = a && Object.getOwnPropertyDescriptor,
          s = i(r, "name"),
          c = s && "something" === function () {}.name,
          d = s && (!a || (a && o(r, "name").configurable));
        e.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: d };
      },
      65911: function (e, t, n) {
        var a = n(52058),
          i = n(44596);
        e.exports = function (e, t, n) {
          try {
            return a(i(Object.getOwnPropertyDescriptor(e, t)[n]));
          } catch (e) {}
        };
      },
      2330: function (e, t, n) {
        var a = n(38555),
          i = n(52058);
        e.exports = function (e) {
          if ("Function" === a(e)) return i(e);
        };
      },
      52058: function (e, t, n) {
        var a = n(62023),
          i = Function.prototype,
          r = i.call,
          o = a && i.bind.bind(r, r);
        e.exports = a
          ? o
          : function (e) {
              return function () {
                return r.apply(e, arguments);
              };
            };
      },
      91553: function (e, t, n) {
        var a = n(27990),
          i = n(31808);
        e.exports = function (e, t) {
          return arguments.length < 2
            ? ((n = a[e]), i(n) ? n : void 0)
            : a[e] && a[e][t];
        };
      },
      19463: function (e, t, n) {
        var a = n(25786),
          i = n(30692),
          r = n(80276),
          o = n(33820),
          s = n(15537)("iterator");
        e.exports = function (e) {
          if (!r(e)) return i(e, s) || i(e, "@@iterator") || o[a(e)];
        };
      },
      34431: function (e, t, n) {
        var a = n(17725),
          i = n(44596),
          r = n(79308),
          o = n(38151),
          s = n(19463),
          c = TypeError;
        e.exports = function (e, t) {
          var n = arguments.length < 2 ? s(e) : t;
          if (i(n)) return r(a(n, e));
          throw c(o(e) + " is not iterable");
        };
      },
      30692: function (e, t, n) {
        var a = n(44596),
          i = n(80276);
        e.exports = function (e, t) {
          var n = e[t];
          return i(n) ? void 0 : a(n);
        };
      },
      20378: function (e, t, n) {
        var a = n(52058),
          i = n(76075),
          r = Math.floor,
          o = a("".charAt),
          s = a("".replace),
          c = a("".slice),
          d = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          u = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, n, a, l, h) {
          var b = n + e.length,
            f = a.length,
            p = u;
          return (
            void 0 !== l && ((l = i(l)), (p = d)),
            s(h, p, function (i, s) {
              var d;
              switch (o(s, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return c(t, 0, n);
                case "'":
                  return c(t, b);
                case "<":
                  d = l[c(s, 1, -1)];
                  break;
                default:
                  var u = +s;
                  if (0 === u) return i;
                  if (u > f) {
                    var h = r(u / 10);
                    return 0 === h
                      ? i
                      : h <= f
                      ? void 0 === a[h - 1]
                        ? o(s, 1)
                        : a[h - 1] + o(s, 1)
                      : i;
                  }
                  d = a[u - 1];
              }
              return void 0 === d ? "" : d;
            })
          );
        };
      },
      27990: function (e, t, n) {
        var a = function (e) {
          return e && e.Math === Math && e;
        };
        e.exports =
          a("object" == typeof globalThis && globalThis) ||
          a("object" == typeof window && window) ||
          a("object" == typeof self && self) ||
          a("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          this ||
          Function("return this")();
      },
      48496: function (e, t, n) {
        var a = n(52058),
          i = n(76075),
          r = a({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return r(i(e), t);
          };
      },
      80642: function (e) {
        e.exports = {};
      },
      62086: function (e, t, n) {
        var a = n(91553);
        e.exports = a("document", "documentElement");
      },
      16938: function (e, t, n) {
        var a = n(40369),
          i = n(79645),
          r = n(54799);
        e.exports =
          !a &&
          !i(function () {
            return (
              7 !==
              Object.defineProperty(r("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      29860: function (e, t, n) {
        var a = n(52058),
          i = n(79645),
          r = n(38555),
          o = Object,
          s = a("".split);
        e.exports = i(function () {
          return !o("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" === r(e) ? s(e, "") : o(e);
            }
          : o;
      },
      30449: function (e, t, n) {
        var a = n(52058),
          i = n(31808),
          r = n(57322),
          o = a(Function.toString);
        i(r.inspectSource) ||
          (r.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = r.inspectSource);
      },
      47776: function (e, t, n) {
        var a,
          i,
          r,
          o = n(19514),
          s = n(27990),
          c = n(27627),
          d = n(60859),
          u = n(48496),
          l = n(57322),
          h = n(53273),
          b = n(80642),
          f = "Object already initialized",
          p = s.TypeError,
          y = s.WeakMap;
        if (o || l.state) {
          var m = l.state || (l.state = new y());
          (m.get = m.get),
            (m.has = m.has),
            (m.set = m.set),
            (a = function (e, t) {
              if (m.has(e)) throw p(f);
              return (t.facade = e), m.set(e, t), t;
            }),
            (i = function (e) {
              return m.get(e) || {};
            }),
            (r = function (e) {
              return m.has(e);
            });
        } else {
          var w = h("state");
          (b[w] = !0),
            (a = function (e, t) {
              if (u(e, w)) throw p(f);
              return (t.facade = e), d(e, w, t), t;
            }),
            (i = function (e) {
              return u(e, w) ? e[w] : {};
            }),
            (r = function (e) {
              return u(e, w);
            });
        }
        e.exports = {
          set: a,
          get: i,
          has: r,
          enforce: function (e) {
            return r(e) ? i(e) : a(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = i(t)).type !== e)
                throw p("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      95409: function (e, t, n) {
        var a = n(15537),
          i = n(33820),
          r = a("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (i.Array === e || o[r] === e);
        };
      },
      31808: function (e, t, n) {
        var a = n(71857),
          i = a.all;
        e.exports = a.IS_HTMLDDA
          ? function (e) {
              return "function" == typeof e || e === i;
            }
          : function (e) {
              return "function" == typeof e;
            };
      },
      92701: function (e, t, n) {
        var a = n(52058),
          i = n(79645),
          r = n(31808),
          o = n(25786),
          s = n(91553),
          c = n(30449),
          d = function () {},
          u = [],
          l = s("Reflect", "construct"),
          h = /^\s*(?:class|function)\b/,
          b = a(h.exec),
          f = !h.exec(d),
          p = function (e) {
            if (!r(e)) return !1;
            try {
              return l(d, u, e), !0;
            } catch (e) {
              return !1;
            }
          },
          y = function (e) {
            if (!r(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!b(h, c(e));
            } catch (e) {
              return !0;
            }
          };
        (y.sham = !0),
          (e.exports =
            !l ||
            i(function () {
              var e;
              return (
                p(p.call) ||
                !p(Object) ||
                !p(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? y
              : p);
      },
      69168: function (e, t, n) {
        var a = n(79645),
          i = n(31808),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var n = c[s(e)];
            return n === u || (n !== d && (i(t) ? a(t) : !!t));
          },
          s = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          c = (o.data = {}),
          d = (o.NATIVE = "N"),
          u = (o.POLYFILL = "P");
        e.exports = o;
      },
      80276: function (e) {
        e.exports = function (e) {
          return null == e;
        };
      },
      27627: function (e, t, n) {
        var a = n(31808),
          i = n(71857),
          r = i.all;
        e.exports = i.IS_HTMLDDA
          ? function (e) {
              return "object" == typeof e ? null !== e : a(e) || e === r;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : a(e);
            };
      },
      81566: function (e) {
        e.exports = !1;
      },
      44003: function (e, t, n) {
        var a = n(91553),
          i = n(31808),
          r = n(88304),
          o = n(40144),
          s = Object;
        e.exports = o
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = a("Symbol");
              return i(t) && r(t.prototype, s(e));
            };
      },
      55887: function (e, t, n) {
        var a = n(17725),
          i = n(79308),
          r = n(30692);
        e.exports = function (e, t, n) {
          var o, s;
          i(e);
          try {
            if (!(o = r(e, "return"))) {
              if ("throw" === t) throw n;
              return n;
            }
            o = a(o, e);
          } catch (e) {
            (s = !0), (o = e);
          }
          if ("throw" === t) throw n;
          if (s) throw o;
          return i(o), n;
        };
      },
      32282: function (e, t, n) {
        var a = n(8678).IteratorPrototype,
          i = n(91026),
          r = n(56373),
          o = n(71508),
          s = n(33820),
          c = function () {
            return this;
          };
        e.exports = function (e, t, n, d) {
          var u = t + " Iterator";
          return (
            (e.prototype = i(a, { next: r(+!d, n) })),
            o(e, u, !1, !0),
            (s[u] = c),
            e
          );
        };
      },
      58994: function (e, t, n) {
        var a = n(88903),
          i = n(17725),
          r = n(81566),
          o = n(92697),
          s = n(31808),
          c = n(32282),
          d = n(56285),
          u = n(27323),
          l = n(71508),
          h = n(60859),
          b = n(96561),
          f = n(15537),
          p = n(33820),
          y = n(8678),
          m = o.PROPER,
          w = o.CONFIGURABLE,
          g = y.IteratorPrototype,
          _ = y.BUGGY_SAFARI_ITERATORS,
          v = f("iterator"),
          x = "keys",
          k = "values",
          S = "entries",
          j = function () {
            return this;
          };
        e.exports = function (e, t, n, o, f, y, O) {
          c(n, t, o);
          var P,
            C,
            T,
            $ = function (e) {
              if (e === f && L) return L;
              if (!_ && e in A) return A[e];
              switch (e) {
                case x:
                case k:
                case S:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this);
              };
            },
            R = t + " Iterator",
            E = !1,
            A = e.prototype,
            I = A[v] || A["@@iterator"] || (f && A[f]),
            L = (!_ && I) || $(f),
            U = ("Array" === t && A.entries) || I;
          if (
            (U &&
              (P = d(U.call(new e()))) !== Object.prototype &&
              P.next &&
              (r || d(P) === g || (u ? u(P, g) : s(P[v]) || b(P, v, j)),
              l(P, R, !0, !0),
              r && (p[R] = j)),
            m &&
              f === k &&
              I &&
              I.name !== k &&
              (!r && w
                ? h(A, "name", k)
                : ((E = !0),
                  (L = function () {
                    return i(I, this);
                  }))),
            f)
          )
            if (((C = { values: $(k), keys: y ? L : $(x), entries: $(S) }), O))
              for (T in C) (_ || E || !(T in A)) && b(A, T, C[T]);
            else a({ target: t, proto: !0, forced: _ || E }, C);
          return (
            (r && !O) || A[v] === L || b(A, v, L, { name: f }), (p[t] = L), C
          );
        };
      },
      8678: function (e, t, n) {
        var a,
          i,
          r,
          o = n(79645),
          s = n(31808),
          c = n(27627),
          d = n(91026),
          u = n(56285),
          l = n(96561),
          h = n(15537),
          b = n(81566),
          f = h("iterator"),
          p = !1;
        [].keys &&
          ("next" in (r = [].keys())
            ? (i = u(u(r))) !== Object.prototype && (a = i)
            : (p = !0)),
          !c(a) ||
          o(function () {
            var e = {};
            return a[f].call(e) !== e;
          })
            ? (a = {})
            : b && (a = d(a)),
          s(a[f]) ||
            l(a, f, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: a, BUGGY_SAFARI_ITERATORS: p });
      },
      33820: function (e) {
        e.exports = {};
      },
      2103: function (e, t, n) {
        var a = n(60468);
        e.exports = function (e) {
          return a(e.length);
        };
      },
      32303: function (e, t, n) {
        var a = n(52058),
          i = n(79645),
          r = n(31808),
          o = n(48496),
          s = n(40369),
          c = n(92697).CONFIGURABLE,
          d = n(30449),
          u = n(47776),
          l = u.enforce,
          h = u.get,
          b = String,
          f = Object.defineProperty,
          p = a("".slice),
          y = a("".replace),
          m = a([].join),
          w =
            s &&
            !i(function () {
              return 8 !== f(function () {}, "length", { value: 8 }).length;
            }),
          g = String(String).split("String"),
          _ = (e.exports = function (e, t, n) {
            "Symbol(" === p(b(t), 0, 7) &&
              (t = "[" + y(b(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
              n && n.getter && (t = "get " + t),
              n && n.setter && (t = "set " + t),
              (!o(e, "name") || (c && e.name !== t)) &&
                (s
                  ? f(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              w &&
                n &&
                o(n, "arity") &&
                e.length !== n.arity &&
                f(e, "length", { value: n.arity });
            try {
              n && o(n, "constructor") && n.constructor
                ? s && f(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var a = l(e);
            return (
              o(a, "source") ||
                (a.source = m(g, "string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = _(function () {
          return (r(this) && h(this).source) || d(this);
        }, "toString");
      },
      6357: function (e) {
        var t = Math.ceil,
          n = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var a = +e;
            return (a > 0 ? n : t)(a);
          };
      },
      26779: function (e, t, n) {
        var a = n(40369),
          i = n(52058),
          r = n(17725),
          o = n(79645),
          s = n(88071),
          c = n(28559),
          d = n(43740),
          u = n(76075),
          l = n(29860),
          h = Object.assign,
          b = Object.defineProperty,
          f = i([].concat);
        e.exports =
          !h ||
          o(function () {
            if (
              a &&
              1 !==
                h(
                  { b: 1 },
                  h(
                    b({}, "a", {
                      enumerable: !0,
                      get: function () {
                        b(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              n = Symbol("assign detection"),
              i = "abcdefghijklmnopqrst";
            return (
              (e[n] = 7),
              i.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 !== h({}, e)[n] || s(h({}, t)).join("") !== i
            );
          })
            ? function (e, t) {
                for (
                  var n = u(e), i = arguments.length, o = 1, h = c.f, b = d.f;
                  i > o;

                )
                  for (
                    var p,
                      y = l(arguments[o++]),
                      m = h ? f(s(y), h(y)) : s(y),
                      w = m.length,
                      g = 0;
                    w > g;

                  )
                    (p = m[g++]), (a && !r(b, y, p)) || (n[p] = y[p]);
                return n;
              }
            : h;
      },
      91026: function (e, t, n) {
        var a,
          i = n(79308),
          r = n(48065),
          o = n(54577),
          s = n(80642),
          c = n(62086),
          d = n(54799),
          u = n(53273),
          l = "prototype",
          h = "script",
          b = u("IE_PROTO"),
          f = function () {},
          p = function (e) {
            return "<" + h + ">" + e + "</" + h + ">";
          },
          y = function (e) {
            e.write(p("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          m = function () {
            try {
              a = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t, n;
            m =
              "undefined" != typeof document
                ? document.domain && a
                  ? y(a)
                  : ((t = d("iframe")),
                    (n = "java" + h + ":"),
                    (t.style.display = "none"),
                    c.appendChild(t),
                    (t.src = String(n)),
                    (e = t.contentWindow.document).open(),
                    e.write(p("document.F=Object")),
                    e.close(),
                    e.F)
                : y(a);
            for (var i = o.length; i--; ) delete m[l][o[i]];
            return m();
          };
        (s[b] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((f[l] = i(e)), (n = new f()), (f[l] = null), (n[b] = e))
                  : (n = m()),
                void 0 === t ? n : r.f(n, t)
              );
            });
      },
      48065: function (e, t, n) {
        var a = n(40369),
          i = n(30446),
          r = n(3002),
          o = n(79308),
          s = n(17794),
          c = n(88071);
        t.f =
          a && !i
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var n, a = s(t), i = c(t), d = i.length, u = 0; d > u; )
                  r.f(e, (n = i[u++]), a[n]);
                return e;
              };
      },
      3002: function (e, t, n) {
        var a = n(40369),
          i = n(16938),
          r = n(30446),
          o = n(79308),
          s = n(7171),
          c = TypeError,
          d = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          l = "enumerable",
          h = "configurable",
          b = "writable";
        t.f = a
          ? r
            ? function (e, t, n) {
                if (
                  (o(e),
                  (t = s(t)),
                  o(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    b in n &&
                    !n[b])
                ) {
                  var a = u(e, t);
                  a &&
                    a[b] &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: h in n ? n[h] : a[h],
                      enumerable: l in n ? n[l] : a[l],
                      writable: !1,
                    }));
                }
                return d(e, t, n);
              }
            : d
          : function (e, t, n) {
              if ((o(e), (t = s(t)), o(n), i))
                try {
                  return d(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw c("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      94086: function (e, t, n) {
        var a = n(40369),
          i = n(17725),
          r = n(43740),
          o = n(56373),
          s = n(17794),
          c = n(7171),
          d = n(48496),
          u = n(16938),
          l = Object.getOwnPropertyDescriptor;
        t.f = a
          ? l
          : function (e, t) {
              if (((e = s(e)), (t = c(t)), u))
                try {
                  return l(e, t);
                } catch (e) {}
              if (d(e, t)) return o(!i(r.f, e, t), e[t]);
            };
      },
      88766: function (e, t, n) {
        var a = n(15848),
          i = n(54577).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return a(e, i);
          };
      },
      28559: function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      56285: function (e, t, n) {
        var a = n(48496),
          i = n(31808),
          r = n(76075),
          o = n(53273),
          s = n(16382),
          c = o("IE_PROTO"),
          d = Object,
          u = d.prototype;
        e.exports = s
          ? d.getPrototypeOf
          : function (e) {
              var t = r(e);
              if (a(t, c)) return t[c];
              var n = t.constructor;
              return i(n) && t instanceof n
                ? n.prototype
                : t instanceof d
                ? u
                : null;
            };
      },
      88304: function (e, t, n) {
        var a = n(52058);
        e.exports = a({}.isPrototypeOf);
      },
      15848: function (e, t, n) {
        var a = n(52058),
          i = n(48496),
          r = n(17794),
          o = n(96039).indexOf,
          s = n(80642),
          c = a([].push);
        e.exports = function (e, t) {
          var n,
            a = r(e),
            d = 0,
            u = [];
          for (n in a) !i(s, n) && i(a, n) && c(u, n);
          for (; t.length > d; ) i(a, (n = t[d++])) && (~o(u, n) || c(u, n));
          return u;
        };
      },
      88071: function (e, t, n) {
        var a = n(15848),
          i = n(54577);
        e.exports =
          Object.keys ||
          function (e) {
            return a(e, i);
          };
      },
      43740: function (e, t) {
        var n = {}.propertyIsEnumerable,
          a = Object.getOwnPropertyDescriptor,
          i = a && !n.call({ 1: 2 }, 1);
        t.f = i
          ? function (e) {
              var t = a(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      27323: function (e, t, n) {
        var a = n(65911),
          i = n(79308),
          r = n(9316);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = a(Object.prototype, "__proto__", "set"))(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, a) {
                  return i(n), r(a), t ? e(n, a) : (n.__proto__ = a), n;
                };
              })()
            : void 0);
      },
      30173: function (e, t, n) {
        var a = n(17725),
          i = n(31808),
          r = n(27627),
          o = TypeError;
        e.exports = function (e, t) {
          var n, s;
          if ("string" === t && i((n = e.toString)) && !r((s = a(n, e))))
            return s;
          if (i((n = e.valueOf)) && !r((s = a(n, e)))) return s;
          if ("string" !== t && i((n = e.toString)) && !r((s = a(n, e))))
            return s;
          throw o("Can't convert object to primitive value");
        };
      },
      7464: function (e, t, n) {
        var a = n(91553),
          i = n(52058),
          r = n(88766),
          o = n(28559),
          s = n(79308),
          c = i([].concat);
        e.exports =
          a("Reflect", "ownKeys") ||
          function (e) {
            var t = r.f(s(e)),
              n = o.f;
            return n ? c(t, n(e)) : t;
          };
      },
      19637: function (e, t, n) {
        var a = n(17725),
          i = n(79308),
          r = n(31808),
          o = n(38555),
          s = n(34530),
          c = TypeError;
        e.exports = function (e, t) {
          var n = e.exec;
          if (r(n)) {
            var d = a(n, e, t);
            return null !== d && i(d), d;
          }
          if ("RegExp" === o(e)) return a(s, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      34530: function (e, t, n) {
        var a,
          i,
          r = n(17725),
          o = n(52058),
          s = n(70158),
          c = n(50323),
          d = n(8373),
          u = n(69808),
          l = n(91026),
          h = n(47776).get,
          b = n(47784),
          f = n(60546),
          p = u("native-string-replace", String.prototype.replace),
          y = RegExp.prototype.exec,
          m = y,
          w = o("".charAt),
          g = o("".indexOf),
          _ = o("".replace),
          v = o("".slice),
          x =
            ((i = /b*/g),
            r(y, (a = /a/), "a"),
            r(y, i, "a"),
            0 !== a.lastIndex || 0 !== i.lastIndex),
          k = d.BROKEN_CARET,
          S = void 0 !== /()??/.exec("")[1];
        (x || S || k || b || f) &&
          (m = function (e) {
            var t,
              n,
              a,
              i,
              o,
              d,
              u,
              b = this,
              f = h(b),
              j = s(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = b.lastIndex),
                (t = r(m, O, j)),
                (b.lastIndex = O.lastIndex),
                t
              );
            var P = f.groups,
              C = k && b.sticky,
              T = r(c, b),
              $ = b.source,
              R = 0,
              E = j;
            if (
              (C &&
                ((T = _(T, "y", "")),
                -1 === g(T, "g") && (T += "g"),
                (E = v(j, b.lastIndex)),
                b.lastIndex > 0 &&
                  (!b.multiline ||
                    (b.multiline && "\n" !== w(j, b.lastIndex - 1))) &&
                  (($ = "(?: " + $ + ")"), (E = " " + E), R++),
                (n = new RegExp("^(?:" + $ + ")", T))),
              S && (n = new RegExp("^" + $ + "$(?!\\s)", T)),
              x && (a = b.lastIndex),
              (i = r(y, C ? n : b, E)),
              C
                ? i
                  ? ((i.input = v(i.input, R)),
                    (i[0] = v(i[0], R)),
                    (i.index = b.lastIndex),
                    (b.lastIndex += i[0].length))
                  : (b.lastIndex = 0)
                : x &&
                  i &&
                  (b.lastIndex = b.global ? i.index + i[0].length : a),
              S &&
                i &&
                i.length > 1 &&
                r(p, i[0], n, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (i[o] = void 0);
                }),
              i && P)
            )
              for (i.groups = d = l(null), o = 0; o < P.length; o++)
                d[(u = P[o])[0]] = i[u[1]];
            return i;
          }),
          (e.exports = m);
      },
      50323: function (e, t, n) {
        var a = n(79308);
        e.exports = function () {
          var e = a(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.unicodeSets && (t += "v"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      8373: function (e, t, n) {
        var a = n(79645),
          i = n(27990).RegExp,
          r = a(function () {
            var e = i("a", "y");
            return (e.lastIndex = 2), null !== e.exec("abcd");
          }),
          o =
            r ||
            a(function () {
              return !i("a", "y").sticky;
            }),
          s =
            r ||
            a(function () {
              var e = i("^r", "gy");
              return (e.lastIndex = 2), null !== e.exec("str");
            });
        e.exports = { BROKEN_CARET: s, MISSED_STICKY: o, UNSUPPORTED_Y: r };
      },
      47784: function (e, t, n) {
        var a = n(79645),
          i = n(27990).RegExp;
        e.exports = a(function () {
          var e = i(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      60546: function (e, t, n) {
        var a = n(79645),
          i = n(27990).RegExp;
        e.exports = a(function () {
          var e = i("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      98622: function (e, t, n) {
        var a = n(80276),
          i = TypeError;
        e.exports = function (e) {
          if (a(e)) throw i("Can't call method on " + e);
          return e;
        };
      },
      71508: function (e, t, n) {
        var a = n(3002).f,
          i = n(48496),
          r = n(15537)("toStringTag");
        e.exports = function (e, t, n) {
          e && !n && (e = e.prototype),
            e && !i(e, r) && a(e, r, { configurable: !0, value: t });
        };
      },
      53273: function (e, t, n) {
        var a = n(69808),
          i = n(40160),
          r = a("keys");
        e.exports = function (e) {
          return r[e] || (r[e] = i(e));
        };
      },
      57322: function (e, t, n) {
        var a = n(27990),
          i = n(91105),
          r = "__core-js_shared__",
          o = a[r] || i(r, {});
        e.exports = o;
      },
      69808: function (e, t, n) {
        var a = n(81566),
          i = n(57322);
        (e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.32.1",
          mode: a ? "pure" : "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      97124: function (e, t, n) {
        var a = n(52058),
          i = n(9163),
          r = n(70158),
          o = n(98622),
          s = a("".charAt),
          c = a("".charCodeAt),
          d = a("".slice),
          u = function (e) {
            return function (t, n) {
              var a,
                u,
                l = r(o(t)),
                h = i(n),
                b = l.length;
              return h < 0 || h >= b
                ? e
                  ? ""
                  : void 0
                : (a = c(l, h)) < 55296 ||
                  a > 56319 ||
                  h + 1 === b ||
                  (u = c(l, h + 1)) < 56320 ||
                  u > 57343
                ? e
                  ? s(l, h)
                  : a
                : e
                ? d(l, h, h + 2)
                : u - 56320 + ((a - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: u(!1), charAt: u(!0) };
      },
      28956: function (e, t, n) {
        var a = n(52058),
          i = 2147483647,
          r = /[^\0-\u007E]/,
          o = /[.\u3002\uFF0E\uFF61]/g,
          s = "Overflow: input needs wider integers to process",
          c = RangeError,
          d = a(o.exec),
          u = Math.floor,
          l = String.fromCharCode,
          h = a("".charCodeAt),
          b = a([].join),
          f = a([].push),
          p = a("".replace),
          y = a("".split),
          m = a("".toLowerCase),
          w = function (e) {
            return e + 22 + 75 * (e < 26);
          },
          g = function (e, t, n) {
            var a = 0;
            for (e = n ? u(e / 700) : e >> 1, e += u(e / t); e > 455; )
              (e = u(e / 35)), (a += 36);
            return u(a + (36 * e) / (e + 38));
          },
          _ = function (e) {
            var t = [];
            e = (function (e) {
              for (var t = [], n = 0, a = e.length; n < a; ) {
                var i = h(e, n++);
                if (i >= 55296 && i <= 56319 && n < a) {
                  var r = h(e, n++);
                  56320 == (64512 & r)
                    ? f(t, ((1023 & i) << 10) + (1023 & r) + 65536)
                    : (f(t, i), n--);
                } else f(t, i);
              }
              return t;
            })(e);
            var n,
              a,
              r = e.length,
              o = 128,
              d = 0,
              p = 72;
            for (n = 0; n < e.length; n++) (a = e[n]) < 128 && f(t, l(a));
            var y = t.length,
              m = y;
            for (y && f(t, "-"); m < r; ) {
              var _ = i;
              for (n = 0; n < e.length; n++)
                (a = e[n]) >= o && a < _ && (_ = a);
              var v = m + 1;
              if (_ - o > u((i - d) / v)) throw c(s);
              for (d += (_ - o) * v, o = _, n = 0; n < e.length; n++) {
                if ((a = e[n]) < o && ++d > i) throw c(s);
                if (a === o) {
                  for (var x = d, k = 36; ; ) {
                    var S = k <= p ? 1 : k >= p + 26 ? 26 : k - p;
                    if (x < S) break;
                    var j = x - S,
                      O = 36 - S;
                    f(t, l(w(S + (j % O)))), (x = u(j / O)), (k += 36);
                  }
                  f(t, l(w(x))), (p = g(d, v, m === y)), (d = 0), m++;
                }
              }
              d++, o++;
            }
            return b(t, "");
          };
        e.exports = function (e) {
          var t,
            n,
            a = [],
            i = y(p(m(e), o, "."), ".");
          for (t = 0; t < i.length; t++)
            (n = i[t]), f(a, d(r, n) ? "xn--" + _(n) : n);
          return b(a, ".");
        };
      },
      97987: function (e, t, n) {
        var a = n(1579),
          i = n(79645),
          r = n(27990).String;
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var e = Symbol("symbol detection");
            return (
              !r(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && a && a < 41)
            );
          });
      },
      97913: function (e, t, n) {
        var a = n(9163),
          i = Math.max,
          r = Math.min;
        e.exports = function (e, t) {
          var n = a(e);
          return n < 0 ? i(n + t, 0) : r(n, t);
        };
      },
      17794: function (e, t, n) {
        var a = n(29860),
          i = n(98622);
        e.exports = function (e) {
          return a(i(e));
        };
      },
      9163: function (e, t, n) {
        var a = n(6357);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : a(t);
        };
      },
      60468: function (e, t, n) {
        var a = n(9163),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(a(e), 9007199254740991) : 0;
        };
      },
      76075: function (e, t, n) {
        var a = n(98622),
          i = Object;
        e.exports = function (e) {
          return i(a(e));
        };
      },
      69182: function (e, t, n) {
        var a = n(17725),
          i = n(27627),
          r = n(44003),
          o = n(30692),
          s = n(30173),
          c = n(15537),
          d = TypeError,
          u = c("toPrimitive");
        e.exports = function (e, t) {
          if (!i(e) || r(e)) return e;
          var n,
            c = o(e, u);
          if (c) {
            if (
              (void 0 === t && (t = "default"), (n = a(c, e, t)), !i(n) || r(n))
            )
              return n;
            throw d("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), s(e, t);
        };
      },
      7171: function (e, t, n) {
        var a = n(69182),
          i = n(44003);
        e.exports = function (e) {
          var t = a(e, "string");
          return i(t) ? t : t + "";
        };
      },
      32709: function (e, t, n) {
        var a = {};
        (a[n(15537)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(a));
      },
      70158: function (e, t, n) {
        var a = n(25786),
          i = String;
        e.exports = function (e) {
          if ("Symbol" === a(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return i(e);
        };
      },
      38151: function (e) {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      40160: function (e, t, n) {
        var a = n(52058),
          i = 0,
          r = Math.random(),
          o = a((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + r, 36);
        };
      },
      88682: function (e, t, n) {
        var a = n(79645),
          i = n(15537),
          r = n(40369),
          o = n(81566),
          s = i("iterator");
        e.exports = !a(function () {
          var e = new URL("b?a=1&b=2&c=3", "http://a"),
            t = e.searchParams,
            n = new URLSearchParams("a=1&a=2&b=3"),
            a = "";
          return (
            (e.pathname = "c%20d"),
            t.forEach(function (e, n) {
              t.delete("b"), (a += n + e);
            }),
            n.delete("a", 2),
            n.delete("b", void 0),
            (o &&
              (!e.toJSON ||
                !n.has("a", 1) ||
                n.has("a", 2) ||
                !n.has("a", void 0) ||
                n.has("b"))) ||
              (!t.size && (o || !r)) ||
              !t.sort ||
              "http://a/c%20d?a=1&c=3" !== e.href ||
              "3" !== t.get("c") ||
              "a=1" !== String(new URLSearchParams("?a=1")) ||
              !t[s] ||
              "a" !== new URL("https://a@b").username ||
              "b" !==
                new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
              "xn--e1aybc" !== new URL("http://тест").host ||
              "#%D0%B1" !== new URL("http://a#б").hash ||
              "a1c3" !== a ||
              "x" !== new URL("http://x", void 0).host
          );
        });
      },
      40144: function (e, t, n) {
        var a = n(97987);
        e.exports = a && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      30446: function (e, t, n) {
        var a = n(40369),
          i = n(79645);
        e.exports =
          a &&
          i(function () {
            return (
              42 !==
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      9823: function (e) {
        var t = TypeError;
        e.exports = function (e, n) {
          if (e < n) throw t("Not enough arguments");
          return e;
        };
      },
      19514: function (e, t, n) {
        var a = n(27990),
          i = n(31808),
          r = a.WeakMap;
        e.exports = i(r) && /native code/.test(String(r));
      },
      15537: function (e, t, n) {
        var a = n(27990),
          i = n(69808),
          r = n(48496),
          o = n(40160),
          s = n(97987),
          c = n(40144),
          d = a.Symbol,
          u = i("wks"),
          l = c ? d.for || d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          return (
            r(u, e) || (u[e] = s && r(d, e) ? d[e] : l("Symbol." + e)), u[e]
          );
        };
      },
      26677: function (e, t, n) {
        var a = n(17794),
          i = n(58521),
          r = n(33820),
          o = n(47776),
          s = n(3002).f,
          c = n(58994),
          d = n(62526),
          u = n(81566),
          l = n(40369),
          h = "Array Iterator",
          b = o.set,
          f = o.getterFor(h);
        e.exports = c(
          Array,
          "Array",
          function (e, t) {
            b(this, { type: h, target: a(e), index: 0, kind: t });
          },
          function () {
            var e = f(this),
              t = e.target,
              n = e.kind,
              a = e.index++;
            if (!t || a >= t.length) return (e.target = void 0), d(void 0, !0);
            switch (n) {
              case "keys":
                return d(a, !1);
              case "values":
                return d(t[a], !1);
            }
            return d([a, t[a]], !1);
          },
          "values"
        );
        var p = (r.Arguments = r.Array);
        if (
          (i("keys"), i("values"), i("entries"), !u && l && "values" !== p.name)
        )
          try {
            s(p, "name", { value: "values" });
          } catch (e) {}
      },
      28610: function (e, t, n) {
        var a = n(88903),
          i = n(34530);
        a({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
      },
      33414: function (e, t, n) {
        var a = n(97124).charAt,
          i = n(70158),
          r = n(47776),
          o = n(58994),
          s = n(62526),
          c = "String Iterator",
          d = r.set,
          u = r.getterFor(c);
        o(
          String,
          "String",
          function (e) {
            d(this, { type: c, string: i(e), index: 0 });
          },
          function () {
            var e,
              t = u(this),
              n = t.string,
              i = t.index;
            return i >= n.length
              ? s(void 0, !0)
              : ((e = a(n, i)), (t.index += e.length), s(e, !1));
          }
        );
      },
      8612: function (e, t, n) {
        var a = n(59878),
          i = n(17725),
          r = n(52058),
          o = n(84902),
          s = n(79645),
          c = n(79308),
          d = n(31808),
          u = n(80276),
          l = n(9163),
          h = n(60468),
          b = n(70158),
          f = n(98622),
          p = n(12051),
          y = n(30692),
          m = n(20378),
          w = n(19637),
          g = n(15537)("replace"),
          _ = Math.max,
          v = Math.min,
          x = r([].concat),
          k = r([].push),
          S = r("".indexOf),
          j = r("".slice),
          O = "$0" === "a".replace(/./, "$0"),
          P = !!/./[g] && "" === /./[g]("a", "$0");
        o(
          "replace",
          function (e, t, n) {
            var r = P ? "$" : "$0";
            return [
              function (e, n) {
                var a = f(this),
                  r = u(e) ? void 0 : y(e, g);
                return r ? i(r, e, a, n) : i(t, b(a), e, n);
              },
              function (e, i) {
                var o = c(this),
                  s = b(e);
                if (
                  "string" == typeof i &&
                  -1 === S(i, r) &&
                  -1 === S(i, "$<")
                ) {
                  var u = n(t, o, s, i);
                  if (u.done) return u.value;
                }
                var f = d(i);
                f || (i = b(i));
                var y,
                  g = o.global;
                g && ((y = o.unicode), (o.lastIndex = 0));
                for (var O, P = []; null !== (O = w(o, s)) && (k(P, O), g); ) {
                  "" === b(O[0]) && (o.lastIndex = p(s, h(o.lastIndex), y));
                }
                for (var C, T = "", $ = 0, R = 0; R < P.length; R++) {
                  for (
                    var E,
                      A = b((O = P[R])[0]),
                      I = _(v(l(O.index), s.length), 0),
                      L = [],
                      U = 1;
                    U < O.length;
                    U++
                  )
                    k(L, void 0 === (C = O[U]) ? C : String(C));
                  var z = O.groups;
                  if (f) {
                    var q = x([A], L, I, s);
                    void 0 !== z && k(q, z), (E = b(a(i, void 0, q)));
                  } else E = m(A, s, I, L, z, i);
                  I >= $ && ((T += j(s, $, I) + E), ($ = I + A.length));
                }
                return T + j(s, $);
              },
            ];
          },
          !!s(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !O ||
            P
        );
      },
      65e3: function (e, t, n) {
        var a = n(27990),
          i = n(28685),
          r = n(53981),
          o = n(26677),
          s = n(60859),
          c = n(15537),
          d = c("iterator"),
          u = c("toStringTag"),
          l = o.values,
          h = function (e, t) {
            if (e) {
              if (e[d] !== l)
                try {
                  s(e, d, l);
                } catch (t) {
                  e[d] = l;
                }
              if ((e[u] || s(e, u, t), i[t]))
                for (var n in o)
                  if (e[n] !== o[n])
                    try {
                      s(e, n, o[n]);
                    } catch (t) {
                      e[n] = o[n];
                    }
            }
          };
        for (var b in i) h(a[b] && a[b].prototype, b);
        h(r, "DOMTokenList");
      },
      23851: function (e, t, n) {
        n(26677);
        var a = n(88903),
          i = n(27990),
          r = n(17725),
          o = n(52058),
          s = n(40369),
          c = n(88682),
          d = n(96561),
          u = n(4259),
          l = n(38308),
          h = n(71508),
          b = n(32282),
          f = n(47776),
          p = n(87787),
          y = n(31808),
          m = n(48496),
          w = n(82144),
          g = n(25786),
          _ = n(79308),
          v = n(27627),
          x = n(70158),
          k = n(91026),
          S = n(56373),
          j = n(34431),
          O = n(19463),
          P = n(9823),
          C = n(15537),
          T = n(626),
          $ = C("iterator"),
          R = "URLSearchParams",
          E = R + "Iterator",
          A = f.set,
          I = f.getterFor(R),
          L = f.getterFor(E),
          U = Object.getOwnPropertyDescriptor,
          z = function (e) {
            if (!s) return i[e];
            var t = U(i, e);
            return t && t.value;
          },
          q = z("fetch"),
          M = z("Request"),
          N = z("Headers"),
          F = M && M.prototype,
          D = N && N.prototype,
          B = i.RegExp,
          H = i.TypeError,
          G = i.decodeURIComponent,
          V = i.encodeURIComponent,
          W = o("".charAt),
          K = o([].join),
          J = o([].push),
          X = o("".replace),
          Y = o([].shift),
          Q = o([].splice),
          Z = o("".split),
          ee = o("".slice),
          te = /\+/g,
          ne = Array(4),
          ae = function (e) {
            return (
              ne[e - 1] ||
              (ne[e - 1] = B("((?:%[\\da-f]{2}){" + e + "})", "gi"))
            );
          },
          ie = function (e) {
            try {
              return G(e);
            } catch (t) {
              return e;
            }
          },
          re = function (e) {
            var t = X(e, te, " "),
              n = 4;
            try {
              return G(t);
            } catch (e) {
              for (; n; ) t = X(t, ae(n--), ie);
              return t;
            }
          },
          oe = /[!'()~]|%20/g,
          se = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
          },
          ce = function (e) {
            return se[e];
          },
          de = function (e) {
            return X(V(e), oe, ce);
          },
          ue = b(
            function (e, t) {
              A(this, { type: E, iterator: j(I(e).entries), kind: t });
            },
            "Iterator",
            function () {
              var e = L(this),
                t = e.kind,
                n = e.iterator.next(),
                a = n.value;
              return (
                n.done ||
                  (n.value =
                    "keys" === t
                      ? a.key
                      : "values" === t
                      ? a.value
                      : [a.key, a.value]),
                n
              );
            },
            !0
          ),
          le = function (e) {
            (this.entries = []),
              (this.url = null),
              void 0 !== e &&
                (v(e)
                  ? this.parseObject(e)
                  : this.parseQuery(
                      "string" == typeof e
                        ? "?" === W(e, 0)
                          ? ee(e, 1)
                          : e
                        : x(e)
                    ));
          };
        le.prototype = {
          type: R,
          bindURL: function (e) {
            (this.url = e), this.update();
          },
          parseObject: function (e) {
            var t,
              n,
              a,
              i,
              o,
              s,
              c,
              d = O(e);
            if (d)
              for (n = (t = j(e, d)).next; !(a = r(n, t)).done; ) {
                if (
                  ((o = (i = j(_(a.value))).next),
                  (s = r(o, i)).done || (c = r(o, i)).done || !r(o, i).done)
                )
                  throw H("Expected sequence with length 2");
                J(this.entries, { key: x(s.value), value: x(c.value) });
              }
            else
              for (var u in e)
                m(e, u) && J(this.entries, { key: u, value: x(e[u]) });
          },
          parseQuery: function (e) {
            if (e)
              for (var t, n, a = Z(e, "&"), i = 0; i < a.length; )
                (t = a[i++]).length &&
                  ((n = Z(t, "=")),
                  J(this.entries, { key: re(Y(n)), value: re(K(n, "=")) }));
          },
          serialize: function () {
            for (var e, t = this.entries, n = [], a = 0; a < t.length; )
              (e = t[a++]), J(n, de(e.key) + "=" + de(e.value));
            return K(n, "&");
          },
          update: function () {
            (this.entries.length = 0), this.parseQuery(this.url.query);
          },
          updateURL: function () {
            this.url && this.url.update();
          },
        };
        var he = function () {
            p(this, be);
            var e = A(
              this,
              new le(arguments.length > 0 ? arguments[0] : void 0)
            );
            s || (this.size = e.entries.length);
          },
          be = he.prototype;
        if (
          (l(
            be,
            {
              append: function (e, t) {
                var n = I(this);
                P(arguments.length, 2),
                  J(n.entries, { key: x(e), value: x(t) }),
                  s || this.length++,
                  n.updateURL();
              },
              delete: function (e) {
                for (
                  var t = I(this),
                    n = P(arguments.length, 1),
                    a = t.entries,
                    i = x(e),
                    r = n < 2 ? void 0 : arguments[1],
                    o = void 0 === r ? r : x(r),
                    c = 0;
                  c < a.length;

                ) {
                  var d = a[c];
                  if (d.key !== i || (void 0 !== o && d.value !== o)) c++;
                  else if ((Q(a, c, 1), void 0 !== o)) break;
                }
                s || (this.size = a.length), t.updateURL();
              },
              get: function (e) {
                var t = I(this).entries;
                P(arguments.length, 1);
                for (var n = x(e), a = 0; a < t.length; a++)
                  if (t[a].key === n) return t[a].value;
                return null;
              },
              getAll: function (e) {
                var t = I(this).entries;
                P(arguments.length, 1);
                for (var n = x(e), a = [], i = 0; i < t.length; i++)
                  t[i].key === n && J(a, t[i].value);
                return a;
              },
              has: function (e) {
                for (
                  var t = I(this).entries,
                    n = P(arguments.length, 1),
                    a = x(e),
                    i = n < 2 ? void 0 : arguments[1],
                    r = void 0 === i ? i : x(i),
                    o = 0;
                  o < t.length;

                ) {
                  var s = t[o++];
                  if (s.key === a && (void 0 === r || s.value === r)) return !0;
                }
                return !1;
              },
              set: function (e, t) {
                var n = I(this);
                P(arguments.length, 1);
                for (
                  var a, i = n.entries, r = !1, o = x(e), c = x(t), d = 0;
                  d < i.length;
                  d++
                )
                  (a = i[d]).key === o &&
                    (r ? Q(i, d--, 1) : ((r = !0), (a.value = c)));
                r || J(i, { key: o, value: c }),
                  s || (this.size = i.length),
                  n.updateURL();
              },
              sort: function () {
                var e = I(this);
                T(e.entries, function (e, t) {
                  return e.key > t.key ? 1 : -1;
                }),
                  e.updateURL();
              },
              forEach: function (e) {
                for (
                  var t,
                    n = I(this).entries,
                    a = w(e, arguments.length > 1 ? arguments[1] : void 0),
                    i = 0;
                  i < n.length;

                )
                  a((t = n[i++]).value, t.key, this);
              },
              keys: function () {
                return new ue(this, "keys");
              },
              values: function () {
                return new ue(this, "values");
              },
              entries: function () {
                return new ue(this, "entries");
              },
            },
            { enumerable: !0 }
          ),
          d(be, $, be.entries, { name: "entries" }),
          d(
            be,
            "toString",
            function () {
              return I(this).serialize();
            },
            { enumerable: !0 }
          ),
          s &&
            u(be, "size", {
              get: function () {
                return I(this).entries.length;
              },
              configurable: !0,
              enumerable: !0,
            }),
          h(he, R),
          a(
            { global: !0, constructor: !0, forced: !c },
            { URLSearchParams: he }
          ),
          !c && y(N))
        ) {
          var fe = o(D.has),
            pe = o(D.set),
            ye = function (e) {
              if (v(e)) {
                var t,
                  n = e.body;
                if (g(n) === R)
                  return (
                    (t = e.headers ? new N(e.headers) : new N()),
                    fe(t, "content-type") ||
                      pe(
                        t,
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ),
                    k(e, { body: S(0, x(n)), headers: S(0, t) })
                  );
              }
              return e;
            };
          if (
            (y(q) &&
              a(
                { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
                {
                  fetch: function (e) {
                    return q(e, arguments.length > 1 ? ye(arguments[1]) : {});
                  },
                }
              ),
            y(M))
          ) {
            var me = function (e) {
              return (
                p(this, F),
                new M(e, arguments.length > 1 ? ye(arguments[1]) : {})
              );
            };
            (F.constructor = me),
              (me.prototype = F),
              a(
                { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
                { Request: me }
              );
          }
        }
        e.exports = { URLSearchParams: he, getState: I };
      },
      20692: function (e, t, n) {
        n(23851);
      },
      37828: function (e, t, n) {
        n(33414);
        var a,
          i = n(88903),
          r = n(40369),
          o = n(88682),
          s = n(27990),
          c = n(82144),
          d = n(52058),
          u = n(96561),
          l = n(4259),
          h = n(87787),
          b = n(48496),
          f = n(26779),
          p = n(27530),
          y = n(14501),
          m = n(97124).codeAt,
          w = n(28956),
          g = n(70158),
          _ = n(71508),
          v = n(9823),
          x = n(23851),
          k = n(47776),
          S = k.set,
          j = k.getterFor("URL"),
          O = x.URLSearchParams,
          P = x.getState,
          C = s.URL,
          T = s.TypeError,
          $ = s.parseInt,
          R = Math.floor,
          E = Math.pow,
          A = d("".charAt),
          I = d(/./.exec),
          L = d([].join),
          U = d((1).toString),
          z = d([].pop),
          q = d([].push),
          M = d("".replace),
          N = d([].shift),
          F = d("".split),
          D = d("".slice),
          B = d("".toLowerCase),
          H = d([].unshift),
          G = "Invalid scheme",
          V = "Invalid host",
          W = "Invalid port",
          K = /[a-z]/i,
          J = /[\d+-.a-z]/i,
          X = /\d/,
          Y = /^0x/i,
          Q = /^[0-7]+$/,
          Z = /^\d+$/,
          ee = /^[\da-f]+$/i,
          te = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
          ne = /[\0\t\n\r #/:<>?@[\\\]^|]/,
          ae = /^[\u0000-\u0020]+/,
          ie = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
          re = /[\t\n\r]/g,
          oe = function (e) {
            var t, n, a, i;
            if ("number" == typeof e) {
              for (t = [], n = 0; n < 4; n++) H(t, e % 256), (e = R(e / 256));
              return L(t, ".");
            }
            if ("object" == typeof e) {
              for (
                t = "",
                  a = (function (e) {
                    for (
                      var t = null, n = 1, a = null, i = 0, r = 0;
                      r < 8;
                      r++
                    )
                      0 !== e[r]
                        ? (i > n && ((t = a), (n = i)), (a = null), (i = 0))
                        : (null === a && (a = r), ++i);
                    return i > n && ((t = a), (n = i)), t;
                  })(e),
                  n = 0;
                n < 8;
                n++
              )
                (i && 0 === e[n]) ||
                  (i && (i = !1),
                  a === n
                    ? ((t += n ? ":" : "::"), (i = !0))
                    : ((t += U(e[n], 16)), n < 7 && (t += ":")));
              return "[" + t + "]";
            }
            return e;
          },
          se = {},
          ce = f({}, se, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
          de = f({}, ce, { "#": 1, "?": 1, "{": 1, "}": 1 }),
          ue = f({}, de, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1,
          }),
          le = function (e, t) {
            var n = m(e, 0);
            return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e);
          },
          he = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
          be = function (e, t) {
            var n;
            return (
              2 === e.length &&
              I(K, A(e, 0)) &&
              (":" === (n = A(e, 1)) || (!t && "|" === n))
            );
          },
          fe = function (e) {
            var t;
            return (
              e.length > 1 &&
              be(D(e, 0, 2)) &&
              (2 === e.length ||
                "/" === (t = A(e, 2)) ||
                "\\" === t ||
                "?" === t ||
                "#" === t)
            );
          },
          pe = function (e) {
            return "." === e || "%2e" === B(e);
          },
          ye = {},
          me = {},
          we = {},
          ge = {},
          _e = {},
          ve = {},
          xe = {},
          ke = {},
          Se = {},
          je = {},
          Oe = {},
          Pe = {},
          Ce = {},
          Te = {},
          $e = {},
          Re = {},
          Ee = {},
          Ae = {},
          Ie = {},
          Le = {},
          Ue = {},
          ze = function (e, t, n) {
            var a,
              i,
              r,
              o = g(e);
            if (t) {
              if ((i = this.parse(o))) throw T(i);
              this.searchParams = null;
            } else {
              if (
                (void 0 !== n && (a = new ze(n, !0)),
                (i = this.parse(o, null, a)))
              )
                throw T(i);
              (r = P(new O())).bindURL(this), (this.searchParams = r);
            }
          };
        ze.prototype = {
          type: "URL",
          parse: function (e, t, n) {
            var i,
              r,
              o,
              s,
              c,
              d = this,
              u = t || ye,
              l = 0,
              h = "",
              f = !1,
              m = !1,
              w = !1;
            for (
              e = g(e),
                t ||
                  ((d.scheme = ""),
                  (d.username = ""),
                  (d.password = ""),
                  (d.host = null),
                  (d.port = null),
                  (d.path = []),
                  (d.query = null),
                  (d.fragment = null),
                  (d.cannotBeABaseURL = !1),
                  (e = M(e, ae, "")),
                  (e = M(e, ie, "$1"))),
                e = M(e, re, ""),
                i = p(e);
              l <= i.length;

            ) {
              switch (((r = i[l]), u)) {
                case ye:
                  if (!r || !I(K, r)) {
                    if (t) return G;
                    u = we;
                    continue;
                  }
                  (h += B(r)), (u = me);
                  break;
                case me:
                  if (r && (I(J, r) || "+" === r || "-" === r || "." === r))
                    h += B(r);
                  else {
                    if (":" !== r) {
                      if (t) return G;
                      (h = ""), (u = we), (l = 0);
                      continue;
                    }
                    if (
                      t &&
                      (d.isSpecial() !== b(he, h) ||
                        ("file" === h &&
                          (d.includesCredentials() || null !== d.port)) ||
                        ("file" === d.scheme && !d.host))
                    )
                      return;
                    if (((d.scheme = h), t))
                      return void (
                        d.isSpecial() &&
                        he[d.scheme] === d.port &&
                        (d.port = null)
                      );
                    (h = ""),
                      "file" === d.scheme
                        ? (u = Te)
                        : d.isSpecial() && n && n.scheme === d.scheme
                        ? (u = ge)
                        : d.isSpecial()
                        ? (u = ke)
                        : "/" === i[l + 1]
                        ? ((u = _e), l++)
                        : ((d.cannotBeABaseURL = !0), q(d.path, ""), (u = Ie));
                  }
                  break;
                case we:
                  if (!n || (n.cannotBeABaseURL && "#" !== r)) return G;
                  if (n.cannotBeABaseURL && "#" === r) {
                    (d.scheme = n.scheme),
                      (d.path = y(n.path)),
                      (d.query = n.query),
                      (d.fragment = ""),
                      (d.cannotBeABaseURL = !0),
                      (u = Ue);
                    break;
                  }
                  u = "file" === n.scheme ? Te : ve;
                  continue;
                case ge:
                  if ("/" !== r || "/" !== i[l + 1]) {
                    u = ve;
                    continue;
                  }
                  (u = Se), l++;
                  break;
                case _e:
                  if ("/" === r) {
                    u = je;
                    break;
                  }
                  u = Ae;
                  continue;
                case ve:
                  if (((d.scheme = n.scheme), r === a))
                    (d.username = n.username),
                      (d.password = n.password),
                      (d.host = n.host),
                      (d.port = n.port),
                      (d.path = y(n.path)),
                      (d.query = n.query);
                  else if ("/" === r || ("\\" === r && d.isSpecial())) u = xe;
                  else if ("?" === r)
                    (d.username = n.username),
                      (d.password = n.password),
                      (d.host = n.host),
                      (d.port = n.port),
                      (d.path = y(n.path)),
                      (d.query = ""),
                      (u = Le);
                  else {
                    if ("#" !== r) {
                      (d.username = n.username),
                        (d.password = n.password),
                        (d.host = n.host),
                        (d.port = n.port),
                        (d.path = y(n.path)),
                        d.path.length--,
                        (u = Ae);
                      continue;
                    }
                    (d.username = n.username),
                      (d.password = n.password),
                      (d.host = n.host),
                      (d.port = n.port),
                      (d.path = y(n.path)),
                      (d.query = n.query),
                      (d.fragment = ""),
                      (u = Ue);
                  }
                  break;
                case xe:
                  if (!d.isSpecial() || ("/" !== r && "\\" !== r)) {
                    if ("/" !== r) {
                      (d.username = n.username),
                        (d.password = n.password),
                        (d.host = n.host),
                        (d.port = n.port),
                        (u = Ae);
                      continue;
                    }
                    u = je;
                  } else u = Se;
                  break;
                case ke:
                  if (((u = Se), "/" !== r || "/" !== A(h, l + 1))) continue;
                  l++;
                  break;
                case Se:
                  if ("/" !== r && "\\" !== r) {
                    u = je;
                    continue;
                  }
                  break;
                case je:
                  if ("@" === r) {
                    f && (h = "%40" + h), (f = !0), (o = p(h));
                    for (var _ = 0; _ < o.length; _++) {
                      var v = o[_];
                      if (":" !== v || w) {
                        var x = le(v, ue);
                        w ? (d.password += x) : (d.username += x);
                      } else w = !0;
                    }
                    h = "";
                  } else if (
                    r === a ||
                    "/" === r ||
                    "?" === r ||
                    "#" === r ||
                    ("\\" === r && d.isSpecial())
                  ) {
                    if (f && "" === h) return "Invalid authority";
                    (l -= p(h).length + 1), (h = ""), (u = Oe);
                  } else h += r;
                  break;
                case Oe:
                case Pe:
                  if (t && "file" === d.scheme) {
                    u = Re;
                    continue;
                  }
                  if (":" !== r || m) {
                    if (
                      r === a ||
                      "/" === r ||
                      "?" === r ||
                      "#" === r ||
                      ("\\" === r && d.isSpecial())
                    ) {
                      if (d.isSpecial() && "" === h) return V;
                      if (
                        t &&
                        "" === h &&
                        (d.includesCredentials() || null !== d.port)
                      )
                        return;
                      if ((s = d.parseHost(h))) return s;
                      if (((h = ""), (u = Ee), t)) return;
                      continue;
                    }
                    "[" === r ? (m = !0) : "]" === r && (m = !1), (h += r);
                  } else {
                    if ("" === h) return V;
                    if ((s = d.parseHost(h))) return s;
                    if (((h = ""), (u = Ce), t === Pe)) return;
                  }
                  break;
                case Ce:
                  if (!I(X, r)) {
                    if (
                      r === a ||
                      "/" === r ||
                      "?" === r ||
                      "#" === r ||
                      ("\\" === r && d.isSpecial()) ||
                      t
                    ) {
                      if ("" !== h) {
                        var k = $(h, 10);
                        if (k > 65535) return W;
                        (d.port =
                          d.isSpecial() && k === he[d.scheme] ? null : k),
                          (h = "");
                      }
                      if (t) return;
                      u = Ee;
                      continue;
                    }
                    return W;
                  }
                  h += r;
                  break;
                case Te:
                  if (((d.scheme = "file"), "/" === r || "\\" === r)) u = $e;
                  else {
                    if (!n || "file" !== n.scheme) {
                      u = Ae;
                      continue;
                    }
                    switch (r) {
                      case a:
                        (d.host = n.host),
                          (d.path = y(n.path)),
                          (d.query = n.query);
                        break;
                      case "?":
                        (d.host = n.host),
                          (d.path = y(n.path)),
                          (d.query = ""),
                          (u = Le);
                        break;
                      case "#":
                        (d.host = n.host),
                          (d.path = y(n.path)),
                          (d.query = n.query),
                          (d.fragment = ""),
                          (u = Ue);
                        break;
                      default:
                        fe(L(y(i, l), "")) ||
                          ((d.host = n.host),
                          (d.path = y(n.path)),
                          d.shortenPath()),
                          (u = Ae);
                        continue;
                    }
                  }
                  break;
                case $e:
                  if ("/" === r || "\\" === r) {
                    u = Re;
                    break;
                  }
                  n &&
                    "file" === n.scheme &&
                    !fe(L(y(i, l), "")) &&
                    (be(n.path[0], !0)
                      ? q(d.path, n.path[0])
                      : (d.host = n.host)),
                    (u = Ae);
                  continue;
                case Re:
                  if (
                    r === a ||
                    "/" === r ||
                    "\\" === r ||
                    "?" === r ||
                    "#" === r
                  ) {
                    if (!t && be(h)) u = Ae;
                    else if ("" === h) {
                      if (((d.host = ""), t)) return;
                      u = Ee;
                    } else {
                      if ((s = d.parseHost(h))) return s;
                      if (("localhost" === d.host && (d.host = ""), t)) return;
                      (h = ""), (u = Ee);
                    }
                    continue;
                  }
                  h += r;
                  break;
                case Ee:
                  if (d.isSpecial()) {
                    if (((u = Ae), "/" !== r && "\\" !== r)) continue;
                  } else if (t || "?" !== r)
                    if (t || "#" !== r) {
                      if (r !== a && ((u = Ae), "/" !== r)) continue;
                    } else (d.fragment = ""), (u = Ue);
                  else (d.query = ""), (u = Le);
                  break;
                case Ae:
                  if (
                    r === a ||
                    "/" === r ||
                    ("\\" === r && d.isSpecial()) ||
                    (!t && ("?" === r || "#" === r))
                  ) {
                    if (
                      (".." === (c = B((c = h))) ||
                      "%2e." === c ||
                      ".%2e" === c ||
                      "%2e%2e" === c
                        ? (d.shortenPath(),
                          "/" === r ||
                            ("\\" === r && d.isSpecial()) ||
                            q(d.path, ""))
                        : pe(h)
                        ? "/" === r ||
                          ("\\" === r && d.isSpecial()) ||
                          q(d.path, "")
                        : ("file" === d.scheme &&
                            !d.path.length &&
                            be(h) &&
                            (d.host && (d.host = ""), (h = A(h, 0) + ":")),
                          q(d.path, h)),
                      (h = ""),
                      "file" === d.scheme &&
                        (r === a || "?" === r || "#" === r))
                    )
                      for (; d.path.length > 1 && "" === d.path[0]; ) N(d.path);
                    "?" === r
                      ? ((d.query = ""), (u = Le))
                      : "#" === r && ((d.fragment = ""), (u = Ue));
                  } else h += le(r, de);
                  break;
                case Ie:
                  "?" === r
                    ? ((d.query = ""), (u = Le))
                    : "#" === r
                    ? ((d.fragment = ""), (u = Ue))
                    : r !== a && (d.path[0] += le(r, se));
                  break;
                case Le:
                  t || "#" !== r
                    ? r !== a &&
                      ("'" === r && d.isSpecial()
                        ? (d.query += "%27")
                        : (d.query += "#" === r ? "%23" : le(r, se)))
                    : ((d.fragment = ""), (u = Ue));
                  break;
                case Ue:
                  r !== a && (d.fragment += le(r, ce));
              }
              l++;
            }
          },
          parseHost: function (e) {
            var t, n, a;
            if ("[" === A(e, 0)) {
              if ("]" !== A(e, e.length - 1)) return V;
              if (
                ((t = (function (e) {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    s,
                    c = [0, 0, 0, 0, 0, 0, 0, 0],
                    d = 0,
                    u = null,
                    l = 0,
                    h = function () {
                      return A(e, l);
                    };
                  if (":" === h()) {
                    if (":" !== A(e, 1)) return;
                    (l += 2), (u = ++d);
                  }
                  for (; h(); ) {
                    if (8 === d) return;
                    if (":" !== h()) {
                      for (t = n = 0; n < 4 && I(ee, h()); )
                        (t = 16 * t + $(h(), 16)), l++, n++;
                      if ("." === h()) {
                        if (0 === n) return;
                        if (((l -= n), d > 6)) return;
                        for (a = 0; h(); ) {
                          if (((i = null), a > 0)) {
                            if (!("." === h() && a < 4)) return;
                            l++;
                          }
                          if (!I(X, h())) return;
                          for (; I(X, h()); ) {
                            if (((r = $(h(), 10)), null === i)) i = r;
                            else {
                              if (0 === i) return;
                              i = 10 * i + r;
                            }
                            if (i > 255) return;
                            l++;
                          }
                          (c[d] = 256 * c[d] + i), (2 != ++a && 4 !== a) || d++;
                        }
                        if (4 !== a) return;
                        break;
                      }
                      if (":" === h()) {
                        if ((l++, !h())) return;
                      } else if (h()) return;
                      c[d++] = t;
                    } else {
                      if (null !== u) return;
                      l++, (u = ++d);
                    }
                  }
                  if (null !== u)
                    for (o = d - u, d = 7; 0 !== d && o > 0; )
                      (s = c[d]), (c[d--] = c[u + o - 1]), (c[u + --o] = s);
                  else if (8 !== d) return;
                  return c;
                })(D(e, 1, -1))),
                !t)
              )
                return V;
              this.host = t;
            } else if (this.isSpecial()) {
              if (((e = w(e)), I(te, e))) return V;
              if (
                ((t = (function (e) {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    s,
                    c = F(e, ".");
                  if (
                    (c.length && "" === c[c.length - 1] && c.length--,
                    (t = c.length) > 4)
                  )
                    return e;
                  for (n = [], a = 0; a < t; a++) {
                    if ("" === (i = c[a])) return e;
                    if (
                      ((r = 10),
                      i.length > 1 &&
                        "0" === A(i, 0) &&
                        ((r = I(Y, i) ? 16 : 8), (i = D(i, 8 === r ? 1 : 2))),
                      "" === i)
                    )
                      o = 0;
                    else {
                      if (!I(10 === r ? Z : 8 === r ? Q : ee, i)) return e;
                      o = $(i, r);
                    }
                    q(n, o);
                  }
                  for (a = 0; a < t; a++)
                    if (((o = n[a]), a === t - 1)) {
                      if (o >= E(256, 5 - t)) return null;
                    } else if (o > 255) return null;
                  for (s = z(n), a = 0; a < n.length; a++)
                    s += n[a] * E(256, 3 - a);
                  return s;
                })(e)),
                null === t)
              )
                return V;
              this.host = t;
            } else {
              if (I(ne, e)) return V;
              for (t = "", n = p(e), a = 0; a < n.length; a++)
                t += le(n[a], se);
              this.host = t;
            }
          },
          cannotHaveUsernamePasswordPort: function () {
            return (
              !this.host || this.cannotBeABaseURL || "file" === this.scheme
            );
          },
          includesCredentials: function () {
            return "" !== this.username || "" !== this.password;
          },
          isSpecial: function () {
            return b(he, this.scheme);
          },
          shortenPath: function () {
            var e = this.path,
              t = e.length;
            !t ||
              ("file" === this.scheme && 1 === t && be(e[0], !0)) ||
              e.length--;
          },
          serialize: function () {
            var e = this,
              t = e.scheme,
              n = e.username,
              a = e.password,
              i = e.host,
              r = e.port,
              o = e.path,
              s = e.query,
              c = e.fragment,
              d = t + ":";
            return (
              null !== i
                ? ((d += "//"),
                  e.includesCredentials() &&
                    (d += n + (a ? ":" + a : "") + "@"),
                  (d += oe(i)),
                  null !== r && (d += ":" + r))
                : "file" === t && (d += "//"),
              (d += e.cannotBeABaseURL
                ? o[0]
                : o.length
                ? "/" + L(o, "/")
                : ""),
              null !== s && (d += "?" + s),
              null !== c && (d += "#" + c),
              d
            );
          },
          setHref: function (e) {
            var t = this.parse(e);
            if (t) throw T(t);
            this.searchParams.update();
          },
          getOrigin: function () {
            var e = this.scheme,
              t = this.port;
            if ("blob" === e)
              try {
                return new qe(e.path[0]).origin;
              } catch (e) {
                return "null";
              }
            return "file" !== e && this.isSpecial()
              ? e + "://" + oe(this.host) + (null !== t ? ":" + t : "")
              : "null";
          },
          getProtocol: function () {
            return this.scheme + ":";
          },
          setProtocol: function (e) {
            this.parse(g(e) + ":", ye);
          },
          getUsername: function () {
            return this.username;
          },
          setUsername: function (e) {
            var t = p(g(e));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.username = "";
              for (var n = 0; n < t.length; n++) this.username += le(t[n], ue);
            }
          },
          getPassword: function () {
            return this.password;
          },
          setPassword: function (e) {
            var t = p(g(e));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.password = "";
              for (var n = 0; n < t.length; n++) this.password += le(t[n], ue);
            }
          },
          getHost: function () {
            var e = this.host,
              t = this.port;
            return null === e ? "" : null === t ? oe(e) : oe(e) + ":" + t;
          },
          setHost: function (e) {
            this.cannotBeABaseURL || this.parse(e, Oe);
          },
          getHostname: function () {
            var e = this.host;
            return null === e ? "" : oe(e);
          },
          setHostname: function (e) {
            this.cannotBeABaseURL || this.parse(e, Pe);
          },
          getPort: function () {
            var e = this.port;
            return null === e ? "" : g(e);
          },
          setPort: function (e) {
            this.cannotHaveUsernamePasswordPort() ||
              ("" === (e = g(e)) ? (this.port = null) : this.parse(e, Ce));
          },
          getPathname: function () {
            var e = this.path;
            return this.cannotBeABaseURL
              ? e[0]
              : e.length
              ? "/" + L(e, "/")
              : "";
          },
          setPathname: function (e) {
            this.cannotBeABaseURL || ((this.path = []), this.parse(e, Ee));
          },
          getSearch: function () {
            var e = this.query;
            return e ? "?" + e : "";
          },
          setSearch: function (e) {
            "" === (e = g(e))
              ? (this.query = null)
              : ("?" === A(e, 0) && (e = D(e, 1)),
                (this.query = ""),
                this.parse(e, Le)),
              this.searchParams.update();
          },
          getSearchParams: function () {
            return this.searchParams.facade;
          },
          getHash: function () {
            var e = this.fragment;
            return e ? "#" + e : "";
          },
          setHash: function (e) {
            "" !== (e = g(e))
              ? ("#" === A(e, 0) && (e = D(e, 1)),
                (this.fragment = ""),
                this.parse(e, Ue))
              : (this.fragment = null);
          },
          update: function () {
            this.query = this.searchParams.serialize() || null;
          },
        };
        var qe = function (e) {
            var t = h(this, Me),
              n = v(arguments.length, 1) > 1 ? arguments[1] : void 0,
              a = S(t, new ze(e, !1, n));
            r ||
              ((t.href = a.serialize()),
              (t.origin = a.getOrigin()),
              (t.protocol = a.getProtocol()),
              (t.username = a.getUsername()),
              (t.password = a.getPassword()),
              (t.host = a.getHost()),
              (t.hostname = a.getHostname()),
              (t.port = a.getPort()),
              (t.pathname = a.getPathname()),
              (t.search = a.getSearch()),
              (t.searchParams = a.getSearchParams()),
              (t.hash = a.getHash()));
          },
          Me = qe.prototype,
          Ne = function (e, t) {
            return {
              get: function () {
                return j(this)[e]();
              },
              set:
                t &&
                function (e) {
                  return j(this)[t](e);
                },
              configurable: !0,
              enumerable: !0,
            };
          };
        if (
          (r &&
            (l(Me, "href", Ne("serialize", "setHref")),
            l(Me, "origin", Ne("getOrigin")),
            l(Me, "protocol", Ne("getProtocol", "setProtocol")),
            l(Me, "username", Ne("getUsername", "setUsername")),
            l(Me, "password", Ne("getPassword", "setPassword")),
            l(Me, "host", Ne("getHost", "setHost")),
            l(Me, "hostname", Ne("getHostname", "setHostname")),
            l(Me, "port", Ne("getPort", "setPort")),
            l(Me, "pathname", Ne("getPathname", "setPathname")),
            l(Me, "search", Ne("getSearch", "setSearch")),
            l(Me, "searchParams", Ne("getSearchParams")),
            l(Me, "hash", Ne("getHash", "setHash"))),
          u(
            Me,
            "toJSON",
            function () {
              return j(this).serialize();
            },
            { enumerable: !0 }
          ),
          u(
            Me,
            "toString",
            function () {
              return j(this).serialize();
            },
            { enumerable: !0 }
          ),
          C)
        ) {
          var Fe = C.createObjectURL,
            De = C.revokeObjectURL;
          Fe && u(qe, "createObjectURL", c(Fe, C)),
            De && u(qe, "revokeObjectURL", c(De, C));
        }
        _(qe, "URL"),
          i({ global: !0, constructor: !0, forced: !o, sham: !r }, { URL: qe });
      },
      87767: function (e, t, n) {
        n(37828);
      },
      47408: function (e, t, n) {
        var a = n(88903),
          i = n(17725);
        a(
          { target: "URL", proto: !0, enumerable: !0 },
          {
            toJSON: function () {
              return i(URL.prototype.toString, this);
            },
          }
        );
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { exports: {} });
    return i[e].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.m = i),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (o.t = function (n, a) {
      if ((1 & a && (n = this(n)), 8 & a)) return n;
      if ("object" == typeof n && n) {
        if (4 & a && n.__esModule) return n;
        if (16 & a && "function" == typeof n.then) return n;
      }
      var i = Object.create(null);
      o.r(i);
      var r = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & a && n; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach(function (e) {
          r[e] = function () {
            return n[e];
          };
        });
      return (
        (r.default = function () {
          return n;
        }),
        o.d(i, r),
        i
      );
    }),
    (o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, n) {
          return o.f[n](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return (
        // "javascripts/" +
        "" +
        {
          83: "th.getting_help",
          181: "global_cn.pricing",
          219: "th.account",
          364: "ar.workshop",
          398: "jp.homepage_2024",
          519: "fr.xmind2021_beta",
          587: "de.user_guide",
          701: "fr.buy",
          1171: "de.homepage_2021",
          1313: "it.about_us",
          1468: "pt.homepage_2020",
          1633: "zh_tw.about_us",
          1765: "fr.mindmapping",
          1932: "ar.app_whats_new",
          1960: "id.zen",
          2099: "th.blog_list",
          2131: "ko.learn_more_about",
          2413: "de.release_notes",
          2419: "en.zen",
          2439: "id.submit_to_gallery",
          2761: "cn.brand_identity",
          2763: "id.common",
          2812: "cn.mobile",
          2957: "en.newsletter",
          3073: "ar.join_team",
          3098: "de.header",
          3168: "zh_tw.gift_card",
          3225: "it.homepage_2022",
          3440: "es.newsletter",
          3495: "id.ambassador",
          3689: "es.user_guide",
          3789: "ru.page_error",
          3799: "ar.pitch_mode",
          3966: "id.term",
          4005: "fr.release_notes",
          4072: "cn.homepage_2024",
          4089: "jp.partner",
          4106: "pt.getting_help",
          4387: "fr.blog_post",
          4397: "global_cn.xmind_cards",
          4490: "en.header",
          4495: "es.pricing",
          4661: "ko.design_resources",
          5030: "ar.term",
          5118: "global_cn.account",
          5233: "fr.homepage_2022_new",
          5534: "en.footer",
          5599: "pt.page_error",
          5700: "global_cn.gift_card",
          5709: "cn.share",
          5821: "cn.zen",
          5929: "zh_tw.footer",
          5995: "ar.features_2022",
          6052: "cn.enterprise_form",
          6159: "ru.submit_to_gallery",
          6179: "jp.video_guide",
          6365: "en.faq",
          6532: "id.mindmapping",
          6760: "de.xmind2021",
          6867: "ru.logo_guideline",
          6938: "pt.form",
          7261: "cn.xmind_works",
          7319: "th.about_us",
          7341: "es.app_whats_new",
          7342: "cn.xmind2021",
          7372: "en.about_us",
          7458: "global_cn.redirect",
          7476: "fr.join_us",
          7574: "ru.thankyou",
          7994: "cn.gift_card",
          8095: "global_cn.contact",
          8189: "jp.account",
          8321: "es.homepage_2020",
          8426: "global_cn.webinar",
          8430: "ru.share",
          8460: "ko.mindmapping",
          8704: "de.mindmapping",
          8714: "es.homepage_2024",
          8764: "zh_tw.my_submissions",
          8914: "cn.form",
          9317: "ar.logo_guideline",
          9420: "ru.gift_card",
          9514: "ko.common",
          9861: "it.xmind_cards",
          10007: "en.account",
          10054: "jp.buy",
          10085: "pt.app_whats_new",
          10106: "en.pricing",
          10217: "th.header",
          10226: "ko.enterprise_form",
          10316: "ko.sitemap",
          10372: "ar.xmind8",
          10556: "cn.homepage_2020",
          10768: "th.partner",
          10799: "ru.redirect",
          10924: "ar.getting_help",
          11007: "ru.xmind_cxm",
          11048: "th.features_2022",
          11106: "pt.homepage_2022_new",
          11352: "cn.submit_to_gallery",
          11732: "fr.paywall",
          11816: "ru.blog_list",
          12002: "fr.blog_list",
          12066: "ar.demos",
          12345: "zh_tw.blog_list",
          12774: "zh_tw.homepage_2022",
          12781: "it.blog_list",
          12994: "th.cloud_closed",
          13201: "en.common",
          13364: "ko.my_submissions",
          13399: "es.xmind8",
          13537: "jp.xmind_cards",
          13903: "cn.compare",
          14073: "ar.release_notes",
          14123: "it.features_2022",
          14274: "en.term",
          14623: "ko.rocks",
          14991: "de.sitemap",
          15159: "zh_tw.homepage_2022_new",
          15332: "ar.redirect",
          15536: "fr.my_submissions",
          15551: "pt.mobile",
          15636: "pt.buy",
          15821: "es.about_us",
          15834: "en.blog_list",
          15878: "global_cn.blog_post",
          15890: "it.buy",
          16072: "pt.rocks",
          16222: "it.download",
          16322: "cn.ambassador",
          16388: "id.xmind8",
          16795: "en.buy",
          16798: "global_cn.xmind2021_beta",
          17119: "pt.join_us",
          17208: "th.app_whats_new",
          17296: "es.design_resources",
          17363: "es.brand_identity",
          17426: "global_cn.form",
          17582: "jp.getting_help",
          17828: "zh_tw.features_2022",
          17894: "zh_tw.homepage_2024",
          18182: "jp.features_2022",
          18208: "jp.homepage_2020",
          18263: "it.join_team",
          18374: "global_cn.thankyou",
          18384: "global_cn.learn_more_about",
          18498: "ru.error",
          18665: "fr.sitemap",
          18710: "cn.mindmapping",
          19146: "ar.privacy",
          19168: "de.footer",
          19284: "zh_tw.xmind2021",
          19380: "th.buy",
          19391: "ko.blog_post",
          19570: "pt.zen",
          19731: "global_cn.homepage_2022",
          19760: "it.enterprise_form",
          19836: "id.webinar",
          19949: "zh_tw.brand_identity",
          19983: "ar.download",
          19992: "ar.blog_list",
          20101: "jp.blog_post",
          20107: "id.pricing",
          20166: "ar.join_us",
          20303: "jp.sme",
          20334: "jp.rocks",
          20396: "cn.error",
          20681: "id.rocks",
          20688: "zh_tw.webinar",
          20780: "ru.features_2022",
          20782: "th.form",
          20827: "de.sme",
          20883: "jp.xmind_cxm",
          20896: "jp.cloud_closed",
          20990: "ko.download",
          21138: "th.xmind_cards",
          21220: "zh_tw.partner",
          21305: "zh_tw.page_error",
          21429: "fr.term",
          21545: "fr.faq",
          21666: "pt.features_2022",
          21754: "zh_tw.account",
          21997: "pt.newsletter",
          22046: "cn.page_error",
          22174: "th.share",
          22473: "cn.sitemap",
          22499: "jp.header",
          22512: "pt.redirect",
          22598: "global_cn.cloud_closed",
          22768: "zh_tw.homepage_2020",
          22790: "en.user_guide",
          22846: "ko.homepage_2020",
          22952: "ru.xmind_cards",
          22965: "ko.join_us",
          23141: "pt.blog_post",
          23155: "ko.join_team",
          23208: "ko.video_guide",
          23418: "es.cloud_closed",
          23489: "pt.homepage_2024",
          23819: "ru.homepage_2020",
          23955: "zh_tw.demos",
          24082: "cn.contact",
          24352: "global_cn.footer",
          24624: "pt.error",
          24981: "ar.homepage_2024",
          25097: "pt.xmind_works",
          25113: "th.redirect",
          25141: "ar.paywall",
          25175: "fr.homepage_2024",
          25279: "pt.faq",
          25322: "global_cn.error",
          25570: "th.homepage_2024",
          25602: "fr.app_whats_new",
          25700: "fr.download",
          25952: "th.faq",
          26039: "ko.newsletter",
          26194: "zh_tw.xmind_cxm",
          26211: "th.xmind_cxm",
          26218: "cn.video_guide",
          26712: "jp.redirect",
          26741: "ru.homepage_2022",
          26974: "ko.redeem",
          27053: "it.homepage_2021",
          27186: "ru.release_notes",
          27187: "cn.homepage_2021",
          27316: "jp.common",
          27361: "ar.newsletter",
          27579: "id.xmind_cxm",
          27615: "en.redirect",
          27705: "global_cn.getting_help",
          27722: "jp.contact",
          27856: "id.newsletter",
          27884: "cn.paywall",
          28014: "cn.term",
          28178: "ar.learn_more_about",
          28213: "es.workshop",
          28218: "es.buy",
          28543: "de.workshop",
          28567: "zh_tw.error",
          28788: "th.page_error",
          28986: "pt.download",
          29055: "ru.download",
          29191: "zh_tw.homepage_2021",
          29221: "zh_tw.redeem",
          29239: "pt.homepage_2021",
          29267: "th.video_guide",
          29280: "fr.common",
          29319: "th.xmind2021_beta",
          29334: "ko.ambassador",
          29343: "es.sitemap",
          29593: "ru.app_whats_new",
          29598: "zh_tw.xmind2021_beta",
          29730: "ru.demos",
          29830: "jp.homepage_2022_new",
          29908: "ko.page_error",
          30104: "ru.xmind2021_beta",
          30116: "ko.user_guide",
          30196: "ru.term",
          30218: "it.app_whats_new",
          30300: "en.xmind_works",
          30304: "de.cloud_closed",
          30346: "ru.pricing",
          30382: "jp.share",
          30424: "id.getting_help",
          30575: "it.pitch_mode",
          30757: "pt.learn_more_about",
          30960: "de.error",
          31122: "en.design_resources",
          31205: "ar.sitemap",
          31248: "zh_tw.join_team",
          31397: "ru.partner",
          31428: "ko.sme",
          31535: "th.user_guide",
          31575: "es.mobile",
          31677: "en.ambassador",
          31720: "it.term",
          31737: "en.learn_more_about",
          31760: "it.share",
          31829: "de.homepage_2022_new",
          31849: "cn.join_team",
          31930: "th.homepage_2022",
          32121: "fr.xmind_cards",
          32152: "zh_tw.term",
          32345: "global_cn.sitemap",
          32436: "de.xmind_works",
          32475: "it.rocks",
          32498: "global_cn.user_guide",
          32597: "id.release_notes",
          32609: "jp.about_us",
          33127: "ru.video_guide",
          33148: "pt.pitch_mode",
          33210: "zh_tw.newsletter",
          33359: "ru.my_submissions",
          33386: "id.share",
          33442: "ko.homepage_2024",
          33512: "fr.workshop",
          33601: "en.getting_help",
          33630: "en.sitemap",
          33648: "es.compare",
          33653: "th.my_submissions",
          33739: "th.submit_to_gallery",
          33768: "en.homepage_2024",
          33788: "pt.compare",
          33806: "en.gift_card",
          33832: "de.video_guide",
          33887: "es.webinar",
          33935: "it.mindmapping",
          34090: "fr.xmind_cxm",
          34098: "th.design_resources",
          34249: "en.video_guide",
          34367: "es.blog_post",
          34539: "ko.app_whats_new",
          34580: "fr.privacy",
          34583: "ar.user_guide",
          34612: "ko.error",
          34645: "pt.account",
          34695: "ko.header",
          34722: "pt.sme",
          34771: "es.download",
          34899: "fr.zen",
          35091: "ko.about_us",
          35125: "it.design_resources",
          35127: "ar.page_error",
          35129: "pt.xmind2021_beta",
          35418: "id.account",
          35482: "id.xmind_cards",
          35494: "global_cn.release_notes",
          35503: "it.newsletter",
          35603: "pt.header",
          35622: "es.redeem",
          35640: "jp.enterprise_form",
          35674: "ru.about_us",
          35782: "es.release_notes",
          35844: "ru.homepage_2021",
          36077: "pt.term",
          36081: "ru.common",
          36286: "it.release_notes",
          36399: "ko.contact",
          36411: "it.xmind2021",
          36476: "ar.form",
          36604: "th.release_notes",
          36664: "ru.workshop",
          36708: "global_cn.logo_guideline",
          36751: "es.zen",
          36812: "global_cn.demos",
          37047: "en.release_notes",
          37097: "de.rocks",
          37221: "jp.page_error",
          37292: "ru.blog_post",
          37317: "jp.mindmapping",
          37390: "th.workshop",
          37477: "ar.redeem",
          37676: "cn.redeem",
          37879: "cn.webinar",
          38091: "jp.thankyou",
          38168: "th.rocks",
          38173: "jp.faq",
          38270: "global_cn.page_error",
          38727: "ar.design_resources",
          38737: "th.footer",
          38838: "id.app_whats_new",
          39054: "zh_tw.cloud_closed",
          39238: "id.my_submissions",
          39350: "en.download",
          39420: "fr.features_2022",
          39463: "cn.getting_help",
          39506: "es.footer",
          39553: "ko.paywall",
          39612: "global_cn.xmind8",
          39838: "global_cn.buy",
          39875: "cn.header",
          39931: "pt.footer",
          39956: "cn.my_submissions",
          40118: "ko.xmind_cards",
          40504: "cn.xmind_cards",
          40657: "jp.xmind2021_beta",
          40659: "es.page_error",
          40674: "de.zen",
          40822: "id.xmind2021",
          41e3: "th.homepage_2022_new",
          41170: "ko.mobile",
          41199: "es.contact",
          41233: "it.zen_old",
          41271: "fr.mobile",
          41284: "global_cn.pitch_mode",
          41333: "cn.sme",
          41672: "pt.blog_list",
          41855: "global_cn.homepage_2021",
          41924: "de.compare",
          42225: "ko.xmind_works",
          42295: "jp.pricing",
          42299: "zh_tw.workshop",
          42403: "th.newsletter",
          42432: "de.xmind_cxm",
          42433: "de.ambassador",
          42469: "fr.share",
          42591: "fr.homepage_2021",
          42793: "ru.learn_more_about",
          42943: "pt.video_guide",
          42995: "es.redirect",
          43162: "ru.xmind8",
          43217: "cn.xmind2021_beta",
          43233: "ru.footer",
          43362: "de.faq",
          43381: "jp.app_whats_new",
          43468: "zh_tw.join_us",
          43548: "zh_tw.mindmapping",
          43689: "jp.zen",
          43744: "cn.buy",
          43834: "it.gift_card",
          43865: "es.term",
          43906: "th.download",
          43927: "jp.design_resources",
          43950: "es.xmind2021",
          44012: "cn.homepage_2022_new",
          44016: "fr.error",
          44103: "pt.zen_old",
          44167: "cn.workshop",
          44186: "it.common",
          44216: "fr.logo_guideline",
          44258: "id.form",
          44369: "ru.zen",
          44397: "pt.xmind_cards",
          44472: "th.mindmapping",
          44640: "fr.xmind8",
          44653: "it.sme",
          44713: "cn.redirect",
          44743: "id.logo_guideline",
          44753: "en.redeem",
          44915: "global_cn.design_resources",
          45146: "en.mindmapping",
          45191: "fr.brand_identity",
          45214: "jp.form",
          45449: "th.term",
          45456: "zh_tw.getting_help",
          45654: "jp.workshop",
          45723: "cn.blog_list",
          45787: "es.enterprise_form",
          45837: "th.privacy",
          45859: "ar.homepage_2022_new",
          45993: "it.xmind_cxm",
          46012: "ko.redirect",
          46128: "de.zen_old",
          46192: "es.learn_more_about",
          46563: "ko.demos",
          46601: "global_cn.xmind2021",
          46792: "cn.common",
          46909: "th.error",
          47001: "en.blog_post",
          47100: "global_cn.join_team",
          47167: "id.homepage_2020",
          47367: "ru.header",
          47686: "ko.thankyou",
          47790: "global_cn.app_whats_new",
          47963: "ko.xmind_cxm",
          48286: "fr.zen_old",
          48423: "cn.faq",
          48468: "es.xmind_cards",
          48572: "id.compare",
          48691: "cn.zen_old",
          48864: "ko.workshop",
          48869: "jp.logo_guideline",
          48946: "en.xmind_cxm",
          48962: "th.homepage_2021",
          48965: "it.sitemap",
          49227: "cn.learn_more_about",
          49915: "fr.contact",
          49916: "jp.paywall",
          50003: "jp.pitch_mode",
          50062: "it.page_error",
          50172: "pt.mindmapping",
          50247: "ko.release_notes",
          50308: "global_cn.share",
          50309: "de.blog_post",
          50511: "es.gift_card",
          50519: "de.gift_card",
          50630: "it.redirect",
          50723: "es.account",
          50780: "it.demos",
          50942: "th.compare",
          51054: "global_cn.common",
          51175: "es.getting_help",
          51239: "cn.xmind_cxm",
          51268: "de.app_whats_new",
          51441: "de.submit_to_gallery",
          51538: "fr.cloud_closed",
          51843: "th.blog_post",
          51980: "ko.xmind8",
          52166: "ru.compare",
          52219: "it.homepage_2020",
          52247: "jp.submit_to_gallery",
          52296: "id.homepage_2024",
          52308: "fr.page_error",
          52349: "pt.enterprise_form",
          52543: "th.learn_more_about",
          52586: "ar.my_submissions",
          52697: "es.homepage_2022_new",
          52733: "th.paywall",
          52746: "it.homepage_2022_new",
          52770: "global_cn.zen_old",
          52825: "it.contact",
          52951: "en.join_us",
          53016: "it.getting_help",
          53083: "id.faq",
          53128: "global_cn.sme",
          53153: "zh_tw.mobile",
          53159: "it.privacy",
          53254: "pt.redeem",
          53477: "ru.buy",
          53597: "es.pitch_mode",
          53681: "jp.gift_card",
          53786: "jp.compare",
          53804: "es.share",
          54080: "pt.release_notes",
          54143: "id.error",
          54175: "th.xmind8",
          54226: "jp.learn_more_about",
          54236: "es.common",
          54330: "zh_tw.app_whats_new",
          54442: "de.paywall",
          54575: "fr.redirect",
          54739: "global_cn.newsletter",
          54776: "pt.sitemap",
          55123: "jp.join_team",
          55150: "ar.ambassador",
          55164: "it.faq",
          55165: "zh_tw.common",
          55331: "zh_tw.zen",
          55354: "pt.xmind_cxm",
          55380: "fr.pricing",
          55471: "global_cn.video_guide",
          55489: "zh_tw.sme",
          55613: "fr.account",
          55760: "fr.header",
          55820: "it.compare",
          56219: "th.sme",
          56243: "de.page_error",
          56635: "en.zen_old",
          56688: "pt.partner",
          56695: "ar.blog_post",
          56822: "global_cn.enterprise_form",
          56833: "th.pricing",
          57035: "ko.footer",
          57478: "global_cn.my_submissions",
          57570: "it.video_guide",
          57575: "ko.pitch_mode",
          57769: "ar.thankyou",
          58059: "en.brand_identity",
          58218: "ko.webinar",
          58320: "ar.faq",
          58368: "global_cn.submit_to_gallery",
          58412: "zh_tw.pricing",
          58604: "global_cn.zen",
          58605: "id.homepage_2022_new",
          58754: "ko.gift_card",
          58767: "zh_tw.faq",
          58810: "en.workshop",
          58887: "it.footer",
          58990: "cn.blog_post",
          59098: "ko.logo_guideline",
          59207: "global_cn.homepage_2020",
          59245: "pt.my_submissions",
          59408: "ru.pitch_mode",
          59414: "global_cn.faq",
          59570: "zh_tw.blog_post",
          59905: "it.logo_guideline",
          60259: "zh_tw.submit_to_gallery",
          60299: "de.account",
          60351: "jp.privacy",
          60387: "id.thankyou",
          60410: "jp.error",
          60460: "it.redeem",
          60640: "de.xmind_cards",
          60814: "ru.newsletter",
          60913: "global_cn.download",
          60983: "fr.pitch_mode",
          61145: "fr.xmind_works",
          61196: "ko.cloud_closed",
          61393: "cn.newsletter",
          61446: "ar.account",
          61496: "global_cn.rocks",
          61520: "en.features_2022",
          61533: "it.join_us",
          61620: "th.brand_identity",
          61689: "de.homepage_2020",
          61701: "cn.features_2022",
          61702: "th.sitemap",
          61777: "ko.features_2022",
          61780: "id.brand_identity",
          61877: "it.submit_to_gallery",
          61918: "id.zen_old",
          62020: "it.cloud_closed",
          62046: "id.gift_card",
          62283: "ar.header",
          62404: "es.error",
          62424: "cn.footer",
          62440: "id.features_2022",
          62464: "zh_tw.xmind8",
          62533: "th.common",
          62675: "ar.zen_old",
          62676: "th.contact",
          62695: "th.xmind_works",
          62835: "ko.faq",
          62903: "en.webinar",
          62936: "cn.logo_guideline",
          63409: "th.join_us",
          63419: "de.share",
          64156: "id.redeem",
          64229: "es.logo_guideline",
          64363: "zh_tw.pitch_mode",
          64490: "cn.design_resources",
          64586: "id.partner",
          64605: "ar.video_guide",
          64744: "fr.homepage_2020",
          65067: "jp.ambassador",
          65193: "zh_tw.redirect",
          65201: "pt.workshop",
          65267: "id.blog_post",
          65300: "id.sitemap",
          65327: "ko.brand_identity",
          65399: "de.demos",
          65656: "de.webinar",
          65935: "ru.faq",
          65956: "it.mobile",
          66064: "pt.brand_identity",
          66072: "ar.homepage_2020",
          66301: "global_cn.mobile",
          66337: "en.xmind_cards",
          66734: "pt.logo_guideline",
          66901: "jp.homepage_2022",
          66937: "ru.sitemap",
          66946: "global_cn.homepage_2022_new",
          67055: "de.partner",
          67059: "fr.submit_to_gallery",
          67137: "de.thankyou",
          67218: "ru.xmind_works",
          67300: "ru.user_guide",
          67327: "ar.gift_card",
          67333: "en.xmind2021_beta",
          67474: "jp.sitemap",
          67628: "jp.xmind8",
          67633: "ko.homepage_2021",
          67639: "th.redeem",
          67685: "en.rocks",
          67820: "id.redirect",
          67868: "en.thankyou",
          67892: "zh_tw.video_guide",
          67980: "id.user_guide",
          68013: "zh_tw.enterprise_form",
          68246: "id.learn_more_about",
          68263: "ko.pricing",
          68276: "jp.footer",
          68381: "ru.mobile",
          68474: "id.paywall",
          68488: "it.user_guide",
          68588: "cn.app_whats_new",
          68846: "jp.zen_old",
          68897: "ru.homepage_2022_new",
          68942: "th.mobile",
          69079: "es.faq",
          69128: "ar.xmind_cxm",
          69209: "fr.user_guide",
          69211: "ko.privacy",
          69247: "de.buy",
          69502: "cn.cloud_closed",
          69536: "th.homepage_2020",
          69539: "de.redeem",
          69632: "ru.brand_identity",
          69684: "pt.xmind8",
          69920: "zh_tw.privacy",
          69938: "es.paywall",
          69961: "global_cn.workshop",
          70031: "ru.zen_old",
          70153: "cn.release_notes",
          70179: "de.form",
          70186: "ar.error",
          70206: "ru.join_us",
          70279: "cn.join_us",
          70322: "it.form",
          70565: "th.join_team",
          70569: "it.pricing",
          70573: "ar.compare",
          70577: "fr.learn_more_about",
          70676: "en.homepage_2022",
          70715: "id.design_resources",
          70774: "cn.account",
          70778: "ru.contact",
          70949: "ru.getting_help",
          71259: "ar.xmind2021",
          71405: "zh_tw.buy",
          71500: "pt.about_us",
          71512: "it.partner",
          71520: "ar.zen",
          71521: "ru.enterprise_form",
          71541: "en.partner",
          71581: "jp.download",
          71622: "th.demos",
          71971: "ar.enterprise_form",
          72233: "th.webinar",
          72266: "fr.enterprise_form",
          72370: "global_cn.blog_list",
          72395: "de.xmind2021_beta",
          72443: "de.about_us",
          72479: "de.my_submissions",
          72492: "en.contact",
          72593: "ru.design_resources",
          72594: "cn.demos",
          72638: "zh_tw.form",
          72639: "fr.newsletter",
          72674: "ar.submit_to_gallery",
          72864: "it.zen",
          72939: "ar.webinar",
          73021: "pt.design_resources",
          73236: "jp.xmind2021",
          73625: "global_cn.ambassador",
          74009: "id.sme",
          74040: "global_cn.xmind_works",
          74058: "es.zen_old",
          74227: "de.design_resources",
          74258: "es.mindmapping",
          74319: "en.enterprise_form",
          74462: "id.homepage_2022",
          74494: "pt.webinar",
          74551: "zh_tw.xmind_cards",
          74555: "global_cn.mindmapping",
          74575: "de.xmind8",
          74745: "fr.video_guide",
          74866: "fr.sme",
          74920: "id.cloud_closed",
          75095: "ar.xmind_cards",
          75147: "cn.xmind8",
          75159: "zh_tw.design_resources",
          75188: "zh_tw.header",
          75288: "it.my_submissions",
          75365: "it.account",
          75555: "en.my_submissions",
          75671: "de.logo_guideline",
          75993: "it.learn_more_about",
          76042: "id.demos",
          76055: "it.header",
          76270: "ar.about_us",
          76274: "global_cn.term",
          76297: "de.pitch_mode",
          76414: "id.about_us",
          76574: "fr.gift_card",
          76640: "zh_tw.user_guide",
          76706: "id.footer",
          76931: "global_cn.compare",
          77126: "global_cn.brand_identity",
          77135: "en.homepage_2022_new",
          77254: "id.xmind2021_beta",
          77263: "ru.paywall",
          77358: "en.submit_to_gallery",
          77381: "pt.homepage_2022",
          77533: "en.demos",
          77564: "de.features_2022",
          77754: "pt.thankyou",
          77864: "ko.zen_old",
          78042: "ar.partner",
          78124: "jp.demos",
          78439: "de.common",
          78468: "ru.sme",
          78566: "zh_tw.download",
          78664: "fr.ambassador",
          78729: "ar.xmind2021_beta",
          78764: "ko.xmind2021",
          78783: "it.paywall",
          78852: "pt.contact",
          78877: "zh_tw.compare",
          78926: "ru.mindmapping",
          78963: "cn.thankyou",
          79006: "es.features_2022",
          79275: "zh_tw.zen_old",
          79338: "fr.design_resources",
          79513: "global_cn.features_2022",
          79556: "id.header",
          79643: "de.redirect",
          79797: "ru.privacy",
          79853: "it.ambassador",
          79945: "de.pricing",
          80030: "ar.buy",
          80060: "cn.pricing",
          80201: "id.video_guide",
          80234: "it.blog_post",
          80270: "fr.partner",
          80274: "cn.pitch_mode",
          80626: "ru.homepage_2024",
          80710: "id.enterprise_form",
          81201: "fr.thankyou",
          81252: "ko.zen",
          81362: "it.xmind8",
          81502: "de.join_team",
          81507: "zh_tw.rocks",
          81734: "it.homepage_2024",
          81866: "it.workshop",
          81876: "th.zen",
          82072: "th.ambassador",
          82104: "zh_tw.contact",
          82180: "en.pitch_mode",
          82334: "th.thankyou",
          82335: "es.join_team",
          82382: "en.homepage_2021",
          82478: "pt.share",
          82487: "id.workshop",
          82861: "ko.share",
          82878: "fr.demos",
          82935: "en.page_error",
          83223: "pt.privacy",
          83245: "de.homepage_2024",
          83254: "en.compare",
          83903: "de.homepage_2022",
          83931: "ko.submit_to_gallery",
          83937: "id.join_team",
          84202: "ko.form",
          84221: "id.contact",
          84341: "cn.privacy",
          84440: "de.download",
          84577: "es.video_guide",
          84578: "ko.blog_list",
          84704: "global_cn.privacy",
          84705: "fr.form",
          84709: "th.pitch_mode",
          84978: "jp.my_submissions",
          85032: "fr.xmind2021",
          85081: "jp.redeem",
          85123: "global_cn.about_us",
          85147: "es.ambassador",
          85169: "zh_tw.thankyou",
          85266: "pt.join_team",
          85701: "ko.buy",
          85738: "ar.homepage_2022",
          85845: "ru.xmind2021",
          85866: "id.blog_list",
          85959: "cn.download",
          86056: "cn.homepage_2022",
          86231: "en.logo_guideline",
          86263: "fr.join_team",
          86313: "jp.mobile",
          86459: "en.xmind8",
          86539: "de.contact",
          86631: "ar.footer",
          86713: "fr.getting_help",
          86729: "ko.account",
          86768: "es.xmind_cxm",
          87090: "de.term",
          87271: "it.xmind_works",
          87592: "es.thankyou",
          87634: "de.brand_identity",
          87636: "de.newsletter",
          87803: "es.demos",
          87818: "zh_tw.xmind_works",
          87847: "en.share",
          87882: "es.header",
          87888: "en.form",
          88175: "es.submit_to_gallery",
          88244: "th.logo_guideline",
          88320: "it.webinar",
          88323: "de.getting_help",
          88327: "ko.compare",
          88489: "pt.demos",
          88595: "ru.form",
          88673: "en.join_team",
          88709: "pt.common",
          88876: "id.mobile",
          88883: "de.mobile",
          88929: "th.zen_old",
          89017: "en.paywall",
          89052: "it.xmind2021_beta",
          89174: "ar.share",
          89500: "zh_tw.release_notes",
          89560: "ru.webinar",
          89655: "cn.about_us",
          89732: "ar.pricing",
          89782: "ar.mobile",
          89854: "ar.mindmapping",
          89951: "jp.join_us",
          89962: "ko.getting_help",
          90414: "global_cn.join_us",
          90453: "en.cloud_closed",
          90471: "fr.homepage_2022",
          90551: "pt.gift_card",
          90602: "jp.xmind_works",
          90637: "ko.homepage_2022_new",
          90643: "en.privacy",
          90797: "jp.blog_list",
          90827: "th.enterprise_form",
          90908: "es.privacy",
          90936: "it.brand_identity",
          90973: "global_cn.homepage_2024",
          91092: "it.error",
          91099: "ar.contact",
          91516: "en.mobile",
          91591: "zh_tw.learn_more_about",
          91726: "en.error",
          91731: "pt.ambassador",
          91949: "ar.homepage_2021",
          92101: "es.rocks",
          92226: "ko.xmind2021_beta",
          92539: "ko.partner",
          92547: "global_cn.partner",
          92581: "pt.pricing",
          92638: "zh_tw.ambassador",
          92714: "ko.homepage_2022",
          92759: "de.learn_more_about",
          92767: "id.join_us",
          92787: "ru.rocks",
          92815: "de.blog_list",
          93002: "es.my_submissions",
          93051: "es.sme",
          93079: "ar.cloud_closed",
          93129: "es.form",
          93305: "ru.cloud_closed",
          93329: "ar.sme",
          93361: "id.buy",
          93535: "global_cn.header",
          93742: "ru.redeem",
          93817: "de.join_us",
          94062: "es.join_us",
          94176: "ru.account",
          94248: "pt.paywall",
          94336: "es.partner",
          94418: "de.enterprise_form",
          94809: "th.gift_card",
          94855: "jp.release_notes",
          94929: "ru.join_team",
          95082: "es.blog_list",
          95089: "fr.rocks",
          95226: "es.xmind_works",
          95383: "id.download",
          95406: "de.privacy",
          95507: "zh_tw.paywall",
          95630: "zh_tw.sitemap",
          95733: "id.homepage_2021",
          96002: "en.sme",
          96009: "id.xmind_works",
          96038: "zh_tw.share",
          96164: "fr.footer",
          96301: "fr.about_us",
          96368: "jp.user_guide",
          96429: "cn.user_guide",
          96474: "id.privacy",
          96487: "en.app_whats_new",
          96574: "pt.submit_to_gallery",
          96614: "cn.rocks",
          96775: "pt.user_guide",
          96845: "fr.webinar",
          97015: "cn.partner",
          97134: "zh_tw.logo_guideline",
          97194: "en.homepage_2020",
          97207: "fr.compare",
          97210: "es.xmind2021_beta",
          97608: "ko.term",
          97913: "jp.term",
          97997: "ar.brand_identity",
          98119: "es.homepage_2022",
          98226: "global_cn.redeem",
          98258: "jp.brand_identity",
          98265: "id.page_error",
          98564: "global_cn.xmind_cxm",
          98568: "id.pitch_mode",
          98611: "it.thankyou",
          98618: "th.xmind2021",
          98856: "global_cn.paywall",
          99018: "es.homepage_2021",
          99077: "fr.redeem",
          99167: "ar.rocks",
          99239: "ru.ambassador",
          99358: "pt.cloud_closed",
          99375: "ar.xmind_works",
          99450: "jp.newsletter",
          99451: "jp.homepage_2021",
          99693: "en.xmind2021",
          99709: "ar.common",
          99758: "jp.webinar",
          99992: "pt.xmind2021",
        }[e] +
        "." +
        {
          83: "8bfbd1d587",
          181: "e68876b240",
          219: "93db677502",
          364: "3741f0efb0",
          398: "00f41f744a",
          519: "a69ff01c41",
          587: "39032358dc",
          701: "7b767d394c",
          1171: "dd3d44fefa",
          1313: "97757875c2",
          1468: "edcd183e41",
          1633: "e36f20972b",
          1765: "2612f667c2",
          1932: "bf7527b7db",
          1960: "44799a87ee",
          2099: "a64e91ba42",
          2131: "a570ae09c5",
          2413: "9b6d582640",
          2419: "d19e73915e",
          2439: "5e71a8c3ca",
          2761: "e01a278b0a",
          2763: "74567a0d99",
          2812: "2ac610e36f",
          2957: "a307824304",
          3073: "d66a63c7e5",
          3098: "e740118908",
          3168: "ce7cd167a8",
          3225: "bdef0afd14",
          3440: "80af6849e2",
          3495: "506d9eb457",
          3689: "839e6d9263",
          3789: "5cd090e457",
          3799: "a326c16987",
          3966: "0f6ede7664",
          4005: "1027e59d73",
          4072: "17cdae7279",
          4089: "0376b12dd5",
          4106: "346d203fe2",
          4387: "9cd65f55e6",
          4397: "194353b5eb",
          4490: "2f57e3f0b5",
          4495: "64de76ac97",
          4661: "4b29fa3489",
          5030: "7d219455b5",
          5118: "ae16893e8f",
          5233: "8e06d96a7b",
          5534: "02ad9e7c3f",
          5599: "c1432ab38b",
          5700: "ea35ff2b75",
          5709: "af20b4f9fb",
          5821: "743d9d5eed",
          5929: "33374af15c",
          5995: "10625facdf",
          6052: "d2887532d6",
          6159: "86f6804a3e",
          6179: "09b9d5f9d4",
          6365: "6d77932b47",
          6532: "8d256e149d",
          6760: "9f157bcb5d",
          6867: "6704620442",
          6938: "d63805efc5",
          7261: "3d92cc0c98",
          7319: "20024e3df9",
          7341: "8dc6595a1b",
          7342: "1451ef8574",
          7372: "dd703edb18",
          7458: "a3c1080578",
          7476: "d1c3f7f681",
          7574: "68d13734b5",
          7994: "19995ce8c1",
          8095: "599eeb3c3a",
          8189: "4997269682",
          8321: "ad792ddf48",
          8426: "96884b4bb7",
          8430: "79b96e7c85",
          8460: "6c5c03208b",
          8704: "696e575bb5",
          8714: "39a87c7af3",
          8764: "bae5eefd08",
          8914: "1ef7339553",
          9317: "43c3fcf5f9",
          9420: "f382debe6c",
          9514: "7d48d73a98",
          9861: "27e42e22c0",
          10007: "cfd933f4d0",
          10054: "3adcd9eb52",
          10085: "70e897c8b3",
          10106: "ba004e2f14",
          10217: "33ee703832",
          10226: "77f79b3581",
          10316: "a7b5f55c08",
          10372: "76e1026a0a",
          10556: "8fd84edefd",
          10768: "4057496dd7",
          10799: "14403f30cb",
          10924: "1a5b58b79b",
          11007: "a7193981cb",
          11048: "1a630f3a86",
          11106: "0ab7208686",
          11352: "e0be5c0a6a",
          11732: "51a625e25c",
          11816: "1aacb75a26",
          12002: "0fd2b6d51c",
          12066: "59d492f3df",
          12345: "e8dca3d803",
          12774: "eb5b182bc6",
          12781: "9fd638d353",
          12994: "ace786b0cc",
          13201: "4dfc7bbce1",
          13364: "31a1dec52f",
          13399: "b9d2007d1e",
          13537: "4863d6b5db",
          13903: "bed81298bf",
          14073: "8408287616",
          14123: "0b5645273c",
          14274: "e87e5368f0",
          14623: "82a60fbb4b",
          14991: "d8c517d741",
          15159: "dc18c29958",
          15332: "e54a1bf6af",
          15536: "aab728de54",
          15551: "3235d681c5",
          15636: "a17dcc875e",
          15821: "6dca101920",
          15834: "fd139d8c6d",
          15878: "c7cc85703a",
          15890: "55f32d8284",
          16072: "e7247d6fdc",
          16222: "fd8efefd77",
          16322: "2cd154f65d",
          16388: "2f2aed1a24",
          16795: "78ecedd284",
          16798: "049a7530ad",
          17119: "74ad1221be",
          17208: "91da15f42e",
          17296: "3a13022749",
          17363: "5d96c40829",
          17426: "9571319793",
          17582: "960b032e04",
          17828: "8c2b8eafad",
          17894: "e3f4aabdb1",
          18182: "ccc5117588",
          18208: "5bd12ca070",
          18263: "7269044383",
          18374: "4a9758e64e",
          18384: "42faebe0e3",
          18498: "d2f3c09b0c",
          18665: "27fca56e18",
          18710: "57cd3bf8c1",
          19146: "44bd202276",
          19168: "77cd7034f7",
          19284: "05268ec330",
          19380: "91627057ff",
          19391: "5a8ce61e54",
          19570: "92c33a5f4d",
          19731: "bd193a5a00",
          19760: "bf2502c115",
          19836: "15eae45606",
          19949: "f5ad81ab10",
          19983: "5f469975bd",
          19992: "5e02110ced",
          20101: "074958a2a3",
          20107: "8d9c633e08",
          20166: "f7b15cafb2",
          20303: "5e5771c4bc",
          20334: "ad138dae64",
          20396: "c1d811e21c",
          20681: "db2bab150b",
          20688: "f3c2fb2145",
          20780: "5f7998507b",
          20782: "9fe08eb244",
          20827: "75b05f5b5c",
          20883: "cc422daee6",
          20896: "5b39491826",
          20990: "ffc17a860a",
          21138: "bfcc5118de",
          21220: "a7d01b0581",
          21305: "f004c06f1f",
          21429: "e0fdaebd59",
          21545: "9797e202be",
          21666: "e89be32975",
          21754: "4ddc50f293",
          21997: "e5e7393e9c",
          22046: "56bffe22f8",
          22174: "68d906dfff",
          22473: "64588fed33",
          22499: "424788d125",
          22512: "432f5fd1ef",
          22598: "e7b81d083c",
          22768: "9b63490e76",
          22790: "a4214616e1",
          22846: "3da921e650",
          22952: "a557b27fcc",
          22965: "1eac3fed9e",
          23141: "b15587995f",
          23155: "b631b76623",
          23208: "78460fe6bb",
          23418: "a9eec9fe18",
          23489: "77f92265a9",
          23819: "724bb247fb",
          23955: "c1102666a4",
          24082: "174660bbf9",
          24352: "d981be10c0",
          24624: "bc937a8052",
          24981: "5cbf3b689a",
          25097: "dbcd2d9485",
          25113: "ab0bed6f63",
          25141: "4a944b22c5",
          25175: "65a5e7fde6",
          25279: "f8d29472e5",
          25322: "d97724c1e8",
          25570: "8de23e08ca",
          25602: "14745a54f9",
          25700: "721dd9b974",
          25952: "4e0f7d2b64",
          26039: "a652d50077",
          26194: "3174cf23c0",
          26211: "641cd4e43b",
          26218: "16ea4ad5af",
          26712: "526c924931",
          26741: "24b4508e08",
          26974: "24c924d081",
          27053: "f8755b7b34",
          27186: "897f0d599b",
          27187: "6d8e19c410",
          27316: "d832756d9e",
          27361: "9452371ede",
          27579: "64cde4fb94",
          27615: "8359b724cd",
          27705: "f722c8d56f",
          27722: "7d0b83e4c7",
          27856: "7401d3b23d",
          27884: "b7dc957196",
          28014: "eb6a6037d4",
          28178: "91bd6886a1",
          28213: "3197dd235b",
          28218: "27b5c90e1d",
          28543: "3131de270d",
          28567: "8ee7514c83",
          28788: "ff49232c79",
          28986: "1224aa3554",
          29055: "3ad2a6e0b1",
          29191: "535ace80b9",
          29221: "a58f0c14ae",
          29239: "61d381a8e4",
          29267: "285df66156",
          29280: "80b6cdea91",
          29319: "eceb61c130",
          29334: "cadb32a7a5",
          29343: "47c5a37124",
          29593: "f887593a50",
          29598: "bca6e20051",
          29730: "7acd8ad2dc",
          29830: "e0d610e87f",
          29908: "3bcaf69170",
          30104: "ff3a183509",
          30116: "c68cfad64c",
          30196: "aaca37f49d",
          30218: "9be60b76b2",
          30300: "0963f4d3ab",
          30304: "8d71ec61f8",
          30346: "e3ddfe5547",
          30382: "6839731962",
          30424: "856c40d0a4",
          30575: "c4e57a9564",
          30757: "0c71c0e513",
          30960: "afe4a5e2e8",
          31122: "afe3c89569",
          31205: "0d49748ac1",
          31248: "acdb1127b3",
          31397: "fdb41a37ac",
          31428: "434d99f661",
          31535: "3eb954b498",
          31575: "2b7e93390a",
          31677: "5b2d222597",
          31720: "950d1926a1",
          31737: "cb20b4ea79",
          31760: "cd7123bbaa",
          31829: "ebf3867f5d",
          31849: "50bcdf08f0",
          31930: "8dc8e1aba0",
          32121: "e3908ada90",
          32152: "4ed7c600b3",
          32345: "eec9d9a109",
          32436: "e7d9a741b2",
          32475: "e815a38f2b",
          32498: "65658069da",
          32597: "02a28b887d",
          32609: "21e47279e7",
          33127: "9bd1f6dd93",
          33148: "a97f7156fa",
          33210: "440ef8623e",
          33359: "1472d99136",
          33386: "bd2c0e6462",
          33442: "9ba69f8a3d",
          33512: "7b7555a4fa",
          33601: "3b599a1513",
          33630: "1e6230c8e4",
          33648: "eeafe235c1",
          33653: "afe153a767",
          33739: "f9fd0cc2dd",
          33768: "0fad45a37a",
          33788: "150536dab0",
          33806: "ec95bbdb18",
          33832: "c2c1080503",
          33887: "9fcee1370e",
          33935: "00ea105bc2",
          34090: "15a0641b4d",
          34098: "156edd097f",
          34249: "7e6388aa6e",
          34367: "4da13e94fb",
          34539: "9b00fb413f",
          34580: "a2e66d9d4d",
          34583: "7020a824c8",
          34612: "f632fe3ae9",
          34645: "827f45d4a1",
          34695: "fff5cde29f",
          34722: "bbea6159f5",
          34771: "8a55975775",
          34899: "61ea6305b6",
          35091: "21eca14f08",
          35125: "11c5a2d450",
          35127: "45810c7218",
          35129: "cdb2ccfd0a",
          35418: "b53f0ac0ed",
          35482: "0e097074c1",
          35494: "ad6fb06f65",
          35503: "f230251b3b",
          35603: "10fe5e4958",
          35622: "24a3df21f1",
          35640: "0f6a871fa6",
          35674: "3540243115",
          35782: "704194febf",
          35844: "599c67dfb6",
          36077: "b765331052",
          36081: "9cef35dcdb",
          36286: "84472085be",
          36399: "c3d4ad4d26",
          36411: "940bb8ae6d",
          36476: "7f3b6b4a2d",
          36604: "6531a55a7b",
          36664: "815c1da692",
          36708: "4c4a3a6e82",
          36751: "596dd419f2",
          36812: "db54973a3d",
          37047: "272499ac76",
          37097: "a44827f74d",
          37221: "08f3111294",
          37292: "58a6cfe4c4",
          37317: "1947086d7b",
          37390: "e82347581f",
          37477: "928e8faa26",
          37676: "bdac7b87c1",
          37879: "6c55d0e4c2",
          38091: "6580a4ab89",
          38168: "9685fc01c5",
          38173: "3b6edd8dc6",
          38270: "32310e8d6c",
          38727: "bbe5ab2886",
          38737: "3344d91edc",
          38838: "e56ff97c76",
          39054: "10a5ec886f",
          39238: "a08ec491bc",
          39350: "2a3dc51905",
          39420: "ef9d504993",
          39463: "f7f8f66578",
          39506: "b87b2684bd",
          39553: "e543a9f84d",
          39612: "df324a96cf",
          39838: "8b2b2f817c",
          39875: "8c44cf4783",
          39931: "bcb93da865",
          39956: "01715b597d",
          40118: "07afea8de3",
          40504: "45a638588e",
          40657: "500954e2a1",
          40659: "6f8a064c0d",
          40674: "97cf25b285",
          40822: "51dac6c02c",
          41e3: "5977ca5446",
          41170: "b02ebe3360",
          41199: "a4fe0f8140",
          41233: "5f04bd1102",
          41271: "261f5535c4",
          41284: "aaf6f78a2c",
          41333: "7c5f219484",
          41672: "64ddefd3b4",
          41855: "0e6e77b0b9",
          41924: "5243f0b45b",
          42225: "1e8196f04a",
          42295: "a4b7f07b86",
          42299: "2947d9a230",
          42403: "2085e61f8b",
          42432: "19b4ff06f2",
          42433: "5278b4d66a",
          42469: "6a6490aa19",
          42591: "52ebf05eb1",
          42793: "9355d2cf78",
          42943: "98a09c045b",
          42995: "d4c5956f68",
          43162: "49ae956a10",
          43217: "b1f1c6c279",
          43233: "775b2a4718",
          43362: "573d56acbc",
          43381: "678ea32506",
          43468: "4d17719899",
          43548: "43f0cad177",
          43689: "b3ab4ba088",
          43744: "fe79121287",
          43834: "407069f7a6",
          43865: "2a109423f4",
          43906: "c31859372a",
          43927: "96f5970fe6",
          43950: "8b4bffd77d",
          44012: "5f5a4560b7",
          44016: "3371ac45ca",
          44103: "a256932c74",
          44167: "10d55e10d8",
          44186: "93e4a3522e",
          44216: "5b59a2b7c1",
          44258: "17e9eba548",
          44369: "b8ae90d601",
          44397: "cbbf038331",
          44472: "9d8d02dca1",
          44640: "c90f94e323",
          44653: "c8bc032a0b",
          44713: "a3d7953ff3",
          44743: "d5bc5d4bfe",
          44753: "00b11dfe99",
          44915: "6dd831f657",
          45146: "de4f47fbcc",
          45191: "332c9b06be",
          45214: "04fd7e8e2b",
          45449: "037832c981",
          45456: "58ed67fa7d",
          45654: "3501cb0f45",
          45723: "3a403aade3",
          45787: "511913938c",
          45837: "6eefdef8a4",
          45859: "fd40386bf1",
          45993: "89e12c6522",
          46012: "96a6211522",
          46128: "acbe77831c",
          46192: "4287cb1145",
          46563: "0373129389",
          46601: "b420f8f90e",
          46792: "7e75f0663b",
          46909: "8fff215510",
          47001: "3e93d10b0e",
          47100: "00dfd9d093",
          47167: "f4ffea6faf",
          47367: "2083791699",
          47686: "5529a3db21",
          47790: "8a9c9f4615",
          47963: "930ad72978",
          48286: "de0f8abd16",
          48423: "bcc5c6e07b",
          48468: "6dcb520c4a",
          48572: "338163ca1c",
          48691: "baacef835f",
          48864: "56c6d2e031",
          48869: "b75634dbb2",
          48946: "17b0eeb9ec",
          48962: "3dd9e88a87",
          48965: "b723c679fd",
          49227: "1f524369fe",
          49915: "8057c9e035",
          49916: "958e49a951",
          50003: "28e7e9e68a",
          50062: "1dcf42cd9c",
          50172: "1f85979657",
          50247: "4ae02f99ed",
          50308: "9edb426803",
          50309: "d63483db7d",
          50511: "54503ff709",
          50519: "fc4f128b72",
          50630: "24720255ca",
          50723: "94af2d6880",
          50780: "19f228d7d1",
          50942: "9985daf35b",
          51054: "0cf144d175",
          51175: "ad89ada5ba",
          51239: "a4f3bd5fa6",
          51268: "db3f020fae",
          51441: "cb8f0b279b",
          51538: "d9b153be2e",
          51843: "7530de4664",
          51980: "0362912417",
          52166: "560480b549",
          52219: "4703e7c397",
          52247: "15d2ae1a7f",
          52296: "14d90eb552",
          52308: "cf70f6b3fd",
          52349: "f065551497",
          52543: "1ac0bd3d31",
          52586: "6875e5405f",
          52697: "a7f029d041",
          52733: "31d2023fdd",
          52746: "27c1806f75",
          52770: "ca00ac3826",
          52825: "cec277f030",
          52951: "b4d075eb4c",
          53016: "68ea1b33e1",
          53083: "b963ed4d1c",
          53128: "3b95b65630",
          53153: "3fc0deca64",
          53159: "eea0159e15",
          53254: "1c4c6c1fd1",
          53477: "77019fc357",
          53597: "b56bf059e6",
          53681: "687b588b6c",
          53786: "3eed0f6ff5",
          53804: "7b7d5596c4",
          54080: "f5d4155b70",
          54143: "a36b3c1d58",
          54175: "772980c948",
          54226: "87b14137bb",
          54236: "0c50ed41a6",
          54330: "a360f12a46",
          54442: "dc00b2c840",
          54575: "040c1266f8",
          54739: "722f8ffa00",
          54776: "5eea8a538a",
          55123: "fa4bdffca0",
          55150: "c70050e70d",
          55164: "031fcda104",
          55165: "0d299b51ae",
          55331: "3d2c268815",
          55354: "2614053868",
          55380: "bb5c74f3b7",
          55471: "384fe193a9",
          55489: "b1f4144d8b",
          55613: "745c164f6e",
          55760: "aa10a9525a",
          55820: "7a8099ddb8",
          56219: "716d0d5288",
          56243: "cca95971db",
          56635: "a02ab5bd95",
          56688: "281a4ccb62",
          56695: "04cae4269c",
          56822: "0f73b01717",
          56833: "4b8a7b1993",
          57035: "e4bb77ed52",
          57478: "862715bcc6",
          57570: "dbdbe28870",
          57575: "dab0c31b49",
          57769: "71d1482ebd",
          58059: "b6dae1731d",
          58218: "ed9079ec26",
          58320: "8a2ef9f245",
          58368: "bcf7c6c4f2",
          58412: "05f3d37012",
          58604: "947ed57596",
          58605: "ebf477dfa7",
          58754: "878146aafc",
          58767: "d6f37b44d4",
          58810: "becd333f85",
          58887: "eb2489b56c",
          58990: "a610ecd506",
          59098: "65e1054c41",
          59207: "ea0bdce26d",
          59245: "31fe73ed3e",
          59408: "965682a0c3",
          59414: "271e86e0ba",
          59570: "d0e3e353d6",
          59905: "3f6aadc7d9",
          60259: "5ff40f326c",
          60299: "0fa6038299",
          60351: "3eff7176a3",
          60387: "f11b74b722",
          60410: "5cb5778bbe",
          60460: "3be01dfa92",
          60640: "f8cfe44303",
          60814: "ffa32b174f",
          60913: "62065810f4",
          60983: "f563c08754",
          61145: "1c9153db67",
          61196: "406aae89f3",
          61393: "fa4a736fc5",
          61446: "5628fc874e",
          61496: "4df1f011ba",
          61520: "872cf3ca26",
          61533: "12fd08741f",
          61620: "fd9cf4d05c",
          61689: "612e434622",
          61701: "a372182bf3",
          61702: "12a3e2f53b",
          61777: "df608ea2b7",
          61780: "cb501f20e9",
          61877: "3ae91573b9",
          61918: "8c08661f6a",
          62020: "87df2d09a0",
          62046: "9e3d989b13",
          62283: "ad94c84da6",
          62404: "91bd2abdd5",
          62424: "3e74701cad",
          62440: "fefe2e5e33",
          62464: "89589fbe10",
          62533: "429a92249f",
          62675: "f7370410de",
          62676: "42836f1549",
          62695: "3b11aeceb0",
          62835: "851233cd97",
          62903: "b39e967f64",
          62936: "49f1edb765",
          63409: "f0cd7ab348",
          63419: "b3de268617",
          64156: "66ba10ce2a",
          64229: "0e4c5a800c",
          64363: "355fc0e9d9",
          64490: "5d0aa30e59",
          64586: "442429a1f7",
          64605: "91f6b11e7f",
          64744: "9efcfad62c",
          65067: "efd03f414b",
          65193: "7196f89294",
          65201: "dfe84ab32c",
          65267: "6240e223a3",
          65300: "b2a2baeacf",
          65327: "541b394655",
          65399: "6a18df50c2",
          65656: "8eb2b30d55",
          65935: "79e48069ce",
          65956: "34d4c6cda9",
          66064: "7f980d9232",
          66072: "a7cac7148d",
          66301: "6dad7904ee",
          66337: "8288854459",
          66734: "36f719962d",
          66901: "df61004eaa",
          66937: "3dbe345f6d",
          66946: "83a11d6957",
          67055: "02ae521fb6",
          67059: "256ec78a6d",
          67137: "2184bd1fd0",
          67218: "2944833e9f",
          67300: "c69fc8652d",
          67327: "88b224fea4",
          67333: "acfbc620a6",
          67474: "714adc3fcd",
          67628: "8a645bd8d7",
          67633: "cbc3efb117",
          67639: "05017c1016",
          67685: "b0460eae4f",
          67820: "65d18fa1e6",
          67868: "5c84fd303f",
          67892: "98938aeb51",
          67980: "6ac4812aa6",
          68013: "909d6ebf48",
          68246: "98a907e595",
          68263: "b15da26c5d",
          68276: "77767a9870",
          68381: "b4aa23eb39",
          68474: "4667aa4fbc",
          68488: "49a5e04890",
          68588: "055619c149",
          68846: "fc792132dc",
          68897: "3eb4c04b4b",
          68942: "6b860b2307",
          69079: "e534aaa531",
          69128: "f6a5793738",
          69209: "0e90370286",
          69211: "96652f455b",
          69247: "7ebd1a2505",
          69502: "1d79a5b7e5",
          69536: "fdb4f7ab74",
          69539: "58ef3d5cc9",
          69632: "58e6fbe68b",
          69684: "66d1bb5075",
          69920: "665891c5f3",
          69938: "6ff795a617",
          69961: "5bdd348635",
          70031: "6a19fff8f4",
          70153: "7e78ad7673",
          70179: "cb12406618",
          70186: "db65b657a7",
          70206: "37c9d4b37c",
          70279: "d44cd86438",
          70322: "ee524d02d1",
          70565: "852de8ab81",
          70569: "bdc3f442fe",
          70573: "75e703f091",
          70577: "7f27990ef4",
          70676: "840a2d885c",
          70715: "46def1ff2c",
          70774: "2234602b08",
          70778: "37d8794fc9",
          70949: "b0e30cf593",
          71259: "100ed5df0d",
          71405: "188cefd2e1",
          71500: "8e7f019ee4",
          71512: "8d293258dd",
          71520: "4ec56ef2a4",
          71521: "a878c758fb",
          71541: "ce0b0fb328",
          71581: "2a2f6c22f3",
          71622: "5b71c5aa91",
          71971: "6a9193badd",
          72233: "c56bb9aa02",
          72266: "a48da89634",
          72370: "f2f7cbe19e",
          72395: "ae22acf265",
          72443: "0ffc5df8d3",
          72479: "e8f8c63dce",
          72492: "3b89870bbd",
          72593: "49cc2a5480",
          72594: "bf37ba31d0",
          72638: "838ffe2243",
          72639: "0f31633b45",
          72674: "1d72b887b3",
          72864: "1424893921",
          72939: "c8d1fb6e4c",
          73021: "262f883789",
          73236: "a01f3b1678",
          73625: "3d766e1f76",
          74009: "df355002a6",
          74040: "b0fe0a85bf",
          74058: "49c840f07f",
          74227: "8e53215c74",
          74258: "fed80787a1",
          74319: "1a4efeb590",
          74462: "f5d82ede7d",
          74494: "db2e5c08cf",
          74551: "c1a80bd031",
          74555: "8a99abbe21",
          74575: "91d9d55064",
          74745: "cb6bd56b20",
          74866: "9a7a671830",
          74920: "0e3e72d26a",
          75095: "3daaeb8712",
          75147: "0b91757d71",
          75159: "c844a6573b",
          75188: "0bec5d314f",
          75288: "9b4ddaeb82",
          75365: "e4dc7d265b",
          75555: "54eccf89fc",
          75671: "220457d7c9",
          75993: "7191e9300b",
          76042: "b80a1e4f9d",
          76055: "675778be5b",
          76270: "3fd43f6f5a",
          76274: "16110fd6c2",
          76297: "c8c98a3af5",
          76414: "7479b938ce",
          76574: "6f4fc7ee88",
          76640: "e1e7993671",
          76706: "43a504ffb8",
          76931: "1d686f9ef9",
          77126: "df2919df6a",
          77135: "c48a9cf443",
          77254: "2c1f00a906",
          77263: "28a73f6fb0",
          77358: "d392b776d4",
          77381: "2af1edf922",
          77533: "c87b50072b",
          77564: "4c419924e7",
          77754: "190d568ec9",
          77864: "5af66705fe",
          78042: "01445c7636",
          78124: "f89e2e41d6",
          78439: "a8da54e3ae",
          78468: "50bc3ffa5d",
          78566: "9be298f1cc",
          78664: "6477a8da87",
          78729: "8eaac0e966",
          78764: "fa24ca0455",
          78783: "cba9551174",
          78852: "1e77178254",
          78877: "181277144d",
          78926: "e78b1ca7dd",
          78963: "812406d4cc",
          79006: "42d146b2be",
          79275: "2ec33b021d",
          79338: "becb2e8cb3",
          79513: "98d30ce75e",
          79556: "7197f294cc",
          79643: "fcc26fbca9",
          79797: "824e8df168",
          79853: "3d3d1826e5",
          79945: "bdfbd406e3",
          80030: "0986e02d3f",
          80060: "03268aea87",
          80201: "174cae83e7",
          80234: "1eb51299e3",
          80270: "e054c8dd9e",
          80274: "92b009fce4",
          80626: "a8f322d439",
          80710: "a35323bb72",
          81201: "dba0a4940d",
          81252: "20860ff41a",
          81362: "fbe864c023",
          81502: "600ab94f33",
          81507: "c3a7cf2272",
          81734: "d44ecdc37e",
          81866: "8d1c2ba247",
          81876: "6f9dbdb0d4",
          82072: "d21c8ba850",
          82104: "413c7a2351",
          82180: "9ac602aeb5",
          82334: "693e227d70",
          82335: "61dbd093ce",
          82382: "8a9871839d",
          82478: "c5c361f720",
          82487: "30cb1b2b4a",
          82861: "effe50ba08",
          82878: "8d1e51527e",
          82935: "ae4ef51f41",
          83223: "a8ea73acc3",
          83245: "5d80b6453f",
          83254: "a3e5d01bbb",
          83903: "76ed62a552",
          83931: "6d7e7858c5",
          83937: "f66e1fcb4b",
          84202: "9a1ec71245",
          84221: "7af3381243",
          84341: "96813820c8",
          84440: "45dd2ddc83",
          84577: "50a88e1715",
          84578: "622d61cca5",
          84704: "556b6e86c6",
          84705: "328c09eff2",
          84709: "2b1ef9f634",
          84978: "2e13b4f6b6",
          85032: "e2a400d92b",
          85081: "03a7f02692",
          85123: "63d20f159b",
          85147: "8d0696dba3",
          85169: "8206f92e37",
          85266: "2a4572fb32",
          85701: "f26e18e57b",
          85738: "bccae342f7",
          85845: "df7248026f",
          85866: "6969dc2d0e",
          85959: "762664d0dc",
          86056: "c213b28c93",
          86231: "300f88864a",
          86263: "46c28b3918",
          86313: "20d5a8b450",
          86459: "ac20f0ed70",
          86539: "6d60173028",
          86631: "166a86f75f",
          86713: "fa3876de76",
          86729: "4026ed89d6",
          86768: "bf06edf950",
          87090: "7c82981eaa",
          87271: "ae4b6eefa7",
          87592: "ac6f018c36",
          87634: "66eaf456a1",
          87636: "5bde751810",
          87803: "0049076b54",
          87818: "3a8019a85a",
          87847: "8c70790f45",
          87882: "e48cd5f47d",
          87888: "4acd9441e2",
          88175: "85f1ec169d",
          88244: "b16d98429d",
          88320: "30a38f2de4",
          88323: "aad43386ec",
          88327: "40801ae05d",
          88489: "690c30b773",
          88595: "fbec0096c7",
          88673: "e5cb0f5513",
          88709: "c7f194d8ce",
          88876: "1e5bffa150",
          88883: "5a2ff2595e",
          88929: "17fdfd5029",
          89017: "d8d770456f",
          89052: "574d34bd79",
          89174: "d9c184a864",
          89500: "f545e153f1",
          89560: "d8b7ef800d",
          89655: "564d6e2bf6",
          89732: "ca8bd1a70f",
          89782: "77d29cbe59",
          89854: "cf3b22c106",
          89951: "b80e99dcad",
          89962: "23ce949311",
          90414: "b683bac992",
          90453: "0c6fdd516e",
          90471: "189c9d0a89",
          90551: "dd61359191",
          90602: "81c7a7d732",
          90637: "079429e32b",
          90643: "79ebb9366d",
          90797: "03104dec7b",
          90827: "977b44e1c5",
          90908: "12f7ce0b6f",
          90936: "d1d5aa4765",
          90973: "36987a64c2",
          91092: "8d407f3c17",
          91099: "1acf3d8ae1",
          91516: "b84b540ba3",
          91591: "8392f86259",
          91726: "511dc1c429",
          91731: "b3657a69dc",
          91949: "c0612ba0c5",
          92101: "82874d9b1e",
          92226: "7e7a69ef7e",
          92539: "4d0060bcf6",
          92547: "2f1b542b9f",
          92581: "a5a45f5055",
          92638: "6e8244f510",
          92714: "12724b663f",
          92759: "5d938985f1",
          92767: "243c205711",
          92787: "0784a4121b",
          92815: "d9de9f3801",
          93002: "1b34c6b5d9",
          93051: "9175c51091",
          93079: "aff3ec191a",
          93129: "7d15b34d55",
          93305: "eedf3fa1cd",
          93329: "6bd1cef8b8",
          93361: "84ef28e42e",
          93535: "4b66cbf6fe",
          93742: "06d65e1824",
          93817: "dfe66b4ad5",
          94062: "b468baf4af",
          94176: "21834dbb8e",
          94248: "63a733d52d",
          94336: "9bf45373b0",
          94418: "ec334ba3c3",
          94809: "b44b6e711c",
          94855: "1248498726",
          94929: "263b32bb59",
          95082: "1644984457",
          95089: "3d77edfa11",
          95226: "2a18a927f4",
          95383: "c48fb147f6",
          95406: "685d6e849c",
          95507: "6439bc1786",
          95630: "fa088d03ba",
          95733: "cd2ac2507b",
          96002: "a43b56d7f7",
          96009: "b33b170d62",
          96038: "0c5fd4e5b9",
          96164: "6272441ba3",
          96301: "b54f205aa6",
          96368: "8d60d5d858",
          96429: "4bbfb6c4de",
          96474: "908e640033",
          96487: "cbdd7f606b",
          96574: "e232c28345",
          96614: "3c31a6c03c",
          96775: "0af9f0445e",
          96845: "6b18d914b8",
          97015: "f03808dba7",
          97134: "c5b91e1050",
          97194: "c7db76ca4d",
          97207: "9e59857093",
          97210: "4963914564",
          97608: "d3c1543cd7",
          97913: "bbc371a543",
          97997: "6ffae31a47",
          98119: "f762e57e56",
          98226: "000f0b22b6",
          98258: "8a8cf4399e",
          98265: "727124d3b7",
          98564: "8f6a5b5785",
          98568: "4d6b3e84dd",
          98611: "a7a1c9d0ff",
          98618: "93cee5751d",
          98856: "3f117a87f1",
          99018: "3724cfe843",
          99077: "c11f713e0a",
          99167: "2754bf01d6",
          99239: "54ab5393c8",
          99358: "517ba2543c",
          99375: "a094c6dd2b",
          99450: "62974bc505",
          99451: "6a6ffc818d",
          99693: "ea2aa67d06",
          99709: "cb46a30cda",
          99758: "87c34a2271",
          99992: "2ca1912036",
        }[e] +
        ".js"
      );
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n = {}),
    (a = "main-web-server:"),
    (o.l = function (e, t, i, r) {
      if (n[e]) n[e].push(t);
      else {
        var s, c;
        if (void 0 !== i)
          for (
            var d = document.getElementsByTagName("script"), u = 0;
            u < d.length;
            u++
          ) {
            var l = d[u];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == a + i
            ) {
              s = l;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          s.setAttribute("data-webpack", a + i),
          (s.src = e)),
          (n[e] = [t]);
        var h = function (t, a) {
            (s.onerror = s.onload = null), clearTimeout(b);
            var i = n[e];
            if (
              (delete n[e],
              s.parentNode && s.parentNode.removeChild(s),
              i &&
                i.forEach(function (e) {
                  return e(a);
                }),
              t)
            )
              return t(a);
          },
          b = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    // (o.p = "https://assets.xmind.net/www/"),
    (o.p = "../js/"),
    (function () {
      var e = { 86348: 0 };
      o.f.j = function (t, n) {
        var a = o.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else {
            var i = new Promise(function (n, i) {
              a = e[t] = [n, i];
            });
            n.push((a[2] = i));
            var r = o.p + o.u(t),
              s = new Error();
            o.l(
              r,
              function (n) {
                if (o.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = r),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var a,
            i,
            r = n[0],
            s = n[1],
            c = n[2],
            d = 0;
          if (
            r.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in s) o.o(s, a) && (o.m[a] = s[a]);
            if (c) c(o);
          }
          for (t && t(n); d < r.length; d++)
            (i = r[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.webpackChunkmain_web_server =
          self.webpackChunkmain_web_server || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (function () {
      o(65e3);
      function e(t) {
        return (
          (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          e(t)
        );
      }
      function t(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function n(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? Object(arguments[n]) : {},
            i = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            i.forEach(function (n) {
              t(e, n, a[n]);
            });
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function c(t, n) {
        return !n || ("object" !== e(n) && "function" != typeof n) ? s(t) : n;
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      function u(e, t) {
        return (
          (u =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          u(e, t)
        );
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && u(e, t);
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function b(e, t) {
        if (e) {
          if ("string" == typeof e) return h(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? h(e, t)
              : void 0
          );
        }
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return h(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          b(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var a,
                i,
                r = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (a = n.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              }
              return r;
            }
          })(e, t) ||
          b(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var y = {
          type: "logger",
          log: function (e) {
            this.output("log", e);
          },
          warn: function (e) {
            this.output("warn", e);
          },
          error: function (e) {
            this.output("error", e);
          },
          output: function (e, t) {
            var n;
            console && console[e] && (n = console)[e].apply(n, f(t));
          },
        },
        m = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            a(this, e), this.init(t, n);
          }
          return (
            r(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || "i18next:"),
                    (this.logger = e || y),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: "setDebug",
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "log", "", !0);
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "", !0);
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "error", "");
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                },
              },
              {
                key: "forward",
                value: function (e, t, n, a) {
                  return a && !this.debug
                    ? null
                    : ("string" == typeof e[0] &&
                        (e[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(
                    this.logger,
                    n(
                      {},
                      { prefix: "".concat(this.prefix, ":").concat(t, ":") },
                      this.options
                    )
                  );
                },
              },
            ]),
            e
          );
        })(),
        w = new m(),
        g = (function () {
          function e() {
            a(this, e), (this.observers = {});
          }
          return (
            r(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(" ").forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var n = this;
                  this.observers[e] &&
                    this.observers[e].forEach(function () {
                      if (t) {
                        var a = n.observers[e].indexOf(t);
                        a > -1 && n.observers[e].splice(a, 1);
                      } else delete n.observers[e];
                    });
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      a = 1;
                    a < t;
                    a++
                  )
                    n[a - 1] = arguments[a];
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  this.observers["*"] &&
                    [].concat(this.observers["*"]).forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                },
              },
            ]),
            e
          );
        })();
      function _() {
        var e,
          t,
          n = new Promise(function (n, a) {
            (e = n), (t = a);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function v(e) {
        return null == e ? "" : "" + e;
      }
      function x(e, t, n) {
        function a(e) {
          return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
        }
        function i() {
          return !e || "string" == typeof e;
        }
        for (
          var r = "string" != typeof t ? [].concat(t) : t.split(".");
          r.length > 1;

        ) {
          if (i()) return {};
          var o = a(r.shift());
          !e[o] && n && (e[o] = new n()), (e = e[o]);
        }
        return i() ? {} : { obj: e, k: a(r.shift()) };
      }
      function k(e, t, n) {
        var a = x(e, t, Object);
        a.obj[a.k] = n;
      }
      function S(e, t) {
        var n = x(e, t),
          a = n.obj,
          i = n.k;
        if (a) return a[i];
      }
      function j(e, t, n) {
        for (var a in t)
          a in e
            ? "string" == typeof e[a] ||
              e[a] instanceof String ||
              "string" == typeof t[a] ||
              t[a] instanceof String
              ? n && (e[a] = t[a])
              : j(e[a], t[a], n)
            : (e[a] = t[a]);
        return e;
      }
      function O(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var P = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function C(e) {
        return "string" == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return P[e];
            })
          : e;
      }
      var T = (function (e) {
          function t(e) {
            var n,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ["translation"], defaultNS: "translation" };
            return (
              a(this, t),
              (n = c(this, d(t).call(this))),
              g.call(s(n)),
              (n.data = e || {}),
              (n.options = i),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = "."),
              n
            );
          }
          return (
            l(t, e),
            r(t, [
              {
                key: "addNamespaces",
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: "removeNamespaces",
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    i =
                      void 0 !== a.keySeparator
                        ? a.keySeparator
                        : this.options.keySeparator,
                    r = [e, t];
                  return (
                    n && "string" != typeof n && (r = r.concat(n)),
                    n &&
                      "string" == typeof n &&
                      (r = r.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (r = e.split(".")),
                    S(this.data, r)
                  );
                },
              },
              {
                key: "addResource",
                value: function (e, t, n, a) {
                  var i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    r = this.options.keySeparator;
                  void 0 === r && (r = ".");
                  var o = [e, t];
                  n && (o = o.concat(r ? n.split(r) : n)),
                    e.indexOf(".") > -1 &&
                      ((a = t), (t = (o = e.split("."))[1])),
                    this.addNamespaces(t),
                    k(this.data, o, a),
                    i.silent || this.emit("added", e, t, n, a);
                },
              },
              {
                key: "addResources",
                value: function (e, t, n) {
                  var a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var i in n)
                    ("string" != typeof n[i] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[i])) ||
                      this.addResource(e, t, i, n[i], { silent: !0 });
                  a.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "addResourceBundle",
                value: function (e, t, a, i, r) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    s = [e, t];
                  e.indexOf(".") > -1 &&
                    ((i = a), (a = t), (t = (s = e.split("."))[1])),
                    this.addNamespaces(t);
                  var c = S(this.data, s) || {};
                  i ? j(c, a, r) : (c = n({}, c, a)),
                    k(this.data, s, c),
                    o.silent || this.emit("added", e, t, a);
                },
              },
              {
                key: "removeResourceBundle",
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t);
                },
              },
              {
                key: "hasResourceBundle",
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: "getResourceBundle",
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? n({}, {}, this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: "getDataByLanguage",
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data;
                },
              },
            ]),
            t
          );
        })(g),
        R = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, a, i) {
            var r = this;
            return (
              e.forEach(function (e) {
                r.processors[e] && (t = r.processors[e].process(t, n, a, i));
              }),
              t
            );
          },
        },
        E = (function (t) {
          function i(e) {
            var t,
              n,
              r,
              o,
              u =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              a(this, i),
              (t = c(this, d(i).call(this))),
              g.call(s(t)),
              (n = [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
              ]),
              (r = e),
              (o = s(t)),
              n.forEach(function (e) {
                r[e] && (o[e] = r[e]);
              }),
              (t.options = u),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = "."),
              (t.logger = w.create("translator")),
              t
            );
          }
          return (
            l(i, t),
            r(i, [
              {
                key: "changeLanguage",
                value: function (e) {
                  e && (this.language = e);
                },
              },
              {
                key: "exists",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} },
                    n = this.resolve(e, t);
                  return n && void 0 !== n.res;
                },
              },
              {
                key: "extractFromKey",
                value: function (e, t) {
                  var n = t.nsSeparator || this.options.nsSeparator;
                  void 0 === n && (n = ":");
                  var a =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    i = t.ns || this.options.defaultNS;
                  if (n && e.indexOf(n) > -1) {
                    var r = e.split(n);
                    (n !== a ||
                      (n === a && this.options.ns.indexOf(r[0]) > -1)) &&
                      (i = r.shift()),
                      (e = r.join(a));
                  }
                  return (
                    "string" == typeof i && (i = [i]), { key: e, namespaces: i }
                  );
                },
              },
              {
                key: "translate",
                value: function (t, a) {
                  var i = this;
                  if (
                    ("object" !== e(a) &&
                      this.options.overloadTranslationOptionHandler &&
                      (a =
                        this.options.overloadTranslationOptionHandler(
                          arguments
                        )),
                    a || (a = {}),
                    null == t)
                  )
                    return "";
                  Array.isArray(t) || (t = [String(t)]);
                  var r =
                      void 0 !== a.keySeparator
                        ? a.keySeparator
                        : this.options.keySeparator,
                    o = this.extractFromKey(t[t.length - 1], a),
                    s = o.key,
                    c = o.namespaces,
                    d = c[c.length - 1],
                    u = a.lng || this.language,
                    l =
                      a.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (u && "cimode" === u.toLowerCase()) {
                    if (l) {
                      var h = a.nsSeparator || this.options.nsSeparator;
                      return d + h + s;
                    }
                    return s;
                  }
                  var b = this.resolve(t, a),
                    f = b && b.res,
                    p = (b && b.usedKey) || s,
                    y = (b && b.exactUsedKey) || s,
                    m = Object.prototype.toString.apply(f),
                    w =
                      void 0 !== a.joinArrays
                        ? a.joinArrays
                        : this.options.joinArrays,
                    g = !this.i18nFormat || this.i18nFormat.handleAsObject;
                  if (
                    g &&
                    f &&
                    "string" != typeof f &&
                    "boolean" != typeof f &&
                    "number" != typeof f &&
                    [
                      "[object Number]",
                      "[object Function]",
                      "[object RegExp]",
                    ].indexOf(m) < 0 &&
                    ("string" != typeof w || "[object Array]" !== m)
                  ) {
                    if (!a.returnObjects && !this.options.returnObjects)
                      return (
                        this.logger.warn(
                          "accessing an object - but returnObjects options is not enabled!"
                        ),
                        this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(p, f, a)
                          : "key '"
                              .concat(s, " (")
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              )
                      );
                    if (r) {
                      var _ = "[object Array]" === m,
                        v = _ ? [] : {},
                        x = _ ? y : p;
                      for (var k in f)
                        if (Object.prototype.hasOwnProperty.call(f, k)) {
                          var S = "".concat(x).concat(r).concat(k);
                          (v[k] = this.translate(
                            S,
                            n({}, a, { joinArrays: !1, ns: c })
                          )),
                            v[k] === S && (v[k] = f[k]);
                        }
                      f = v;
                    }
                  } else if (
                    g &&
                    "string" == typeof w &&
                    "[object Array]" === m
                  )
                    (f = f.join(w)) && (f = this.extendTranslation(f, t, a));
                  else {
                    var j = !1,
                      O = !1;
                    if (!this.isValidLookup(f) && void 0 !== a.defaultValue) {
                      if (((j = !0), void 0 !== a.count)) {
                        var P = this.pluralResolver.getSuffix(u, a.count);
                        f = a["defaultValue".concat(P)];
                      }
                      f || (f = a.defaultValue);
                    }
                    this.isValidLookup(f) || ((O = !0), (f = s));
                    var C =
                      a.defaultValue &&
                      a.defaultValue !== f &&
                      this.options.updateMissing;
                    if (O || j || C) {
                      this.logger.log(
                        C ? "updateKey" : "missingKey",
                        u,
                        d,
                        s,
                        C ? a.defaultValue : f
                      );
                      var T = [],
                        $ = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          a.lng || this.language
                        );
                      if (
                        "fallback" === this.options.saveMissingTo &&
                        $ &&
                        $[0]
                      )
                        for (var R = 0; R < $.length; R++) T.push($[R]);
                      else
                        "all" === this.options.saveMissingTo
                          ? (T = this.languageUtils.toResolveHierarchy(
                              a.lng || this.language
                            ))
                          : T.push(a.lng || this.language);
                      var E = function (e, t) {
                        i.options.missingKeyHandler
                          ? i.options.missingKeyHandler(
                              e,
                              d,
                              t,
                              C ? a.defaultValue : f,
                              C,
                              a
                            )
                          : i.backendConnector &&
                            i.backendConnector.saveMissing &&
                            i.backendConnector.saveMissing(
                              e,
                              d,
                              t,
                              C ? a.defaultValue : f,
                              C,
                              a
                            ),
                          i.emit("missingKey", e, d, t, f);
                      };
                      if (this.options.saveMissing) {
                        var A =
                          void 0 !== a.count && "string" != typeof a.count;
                        this.options.saveMissingPlurals && A
                          ? T.forEach(function (e) {
                              i.pluralResolver
                                .getPluralFormsOfKey(e, s)
                                .forEach(function (t) {
                                  return E([e], t);
                                });
                            })
                          : E(T, s);
                      }
                    }
                    (f = this.extendTranslation(f, t, a, b)),
                      O &&
                        f === s &&
                        this.options.appendNamespaceToMissingKey &&
                        (f = "".concat(d, ":").concat(s)),
                      O &&
                        this.options.parseMissingKeyHandler &&
                        (f = this.options.parseMissingKeyHandler(f));
                  }
                  return f;
                },
              },
              {
                key: "extendTranslation",
                value: function (e, t, a, i) {
                  var r = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(
                      e,
                      a,
                      i.usedLng,
                      i.usedNS,
                      i.usedKey,
                      { resolved: i }
                    );
                  else if (!a.skipInterpolation) {
                    a.interpolation &&
                      this.interpolator.init(
                        n({}, a, {
                          interpolation: n(
                            {},
                            this.options.interpolation,
                            a.interpolation
                          ),
                        })
                      );
                    var o =
                      a.replace && "string" != typeof a.replace ? a.replace : a;
                    this.options.interpolation.defaultVariables &&
                      (o = n(
                        {},
                        this.options.interpolation.defaultVariables,
                        o
                      )),
                      (e = this.interpolator.interpolate(
                        e,
                        o,
                        a.lng || this.language,
                        a
                      )),
                      !1 !== a.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            return r.translate.apply(r, arguments);
                          },
                          a
                        )),
                      a.interpolation && this.interpolator.reset();
                  }
                  var s = a.postProcess || this.options.postProcess,
                    c = "string" == typeof s ? [s] : s;
                  return (
                    null != e &&
                      c &&
                      c.length &&
                      !1 !== a.applyPostProcessor &&
                      (e = R.handle(c, e, t, a, this)),
                    e
                  );
                },
              },
              {
                key: "resolve",
                value: function (e) {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o = this,
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    "string" == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      if (!o.isValidLookup(t)) {
                        var c = o.extractFromKey(e, s),
                          d = c.key;
                        n = d;
                        var u = c.namespaces;
                        o.options.fallbackNS &&
                          (u = u.concat(o.options.fallbackNS));
                        var l =
                            void 0 !== s.count && "string" != typeof s.count,
                          h =
                            void 0 !== s.context &&
                            "string" == typeof s.context &&
                            "" !== s.context,
                          b = s.lngs
                            ? s.lngs
                            : o.languageUtils.toResolveHierarchy(
                                s.lng || o.language,
                                s.fallbackLng
                              );
                        u.forEach(function (e) {
                          o.isValidLookup(t) ||
                            ((r = e),
                            b.forEach(function (n) {
                              if (!o.isValidLookup(t)) {
                                i = n;
                                var r,
                                  c,
                                  u = d,
                                  b = [u];
                                if (o.i18nFormat && o.i18nFormat.addLookupKeys)
                                  o.i18nFormat.addLookupKeys(b, d, n, e, s);
                                else
                                  l &&
                                    (r = o.pluralResolver.getSuffix(
                                      n,
                                      s.count
                                    )),
                                    l && h && b.push(u + r),
                                    h &&
                                      b.push(
                                        (u += ""
                                          .concat(o.options.contextSeparator)
                                          .concat(s.context))
                                      ),
                                    l && b.push((u += r));
                                for (; (c = b.pop()); )
                                  o.isValidLookup(t) ||
                                    ((a = c), (t = o.getResource(n, e, c, s)));
                              }
                            }));
                        });
                      }
                    }),
                    {
                      res: t,
                      usedKey: n,
                      exactUsedKey: a,
                      usedLng: i,
                      usedNS: r,
                    }
                  );
                },
              },
              {
                key: "isValidLookup",
                value: function (e) {
                  return !(
                    void 0 === e ||
                    (!this.options.returnNull && null === e) ||
                    (!this.options.returnEmptyString && "" === e)
                  );
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(e, t, n, a)
                    : this.resourceStore.getResource(e, t, n, a);
                },
              },
            ]),
            i
          );
        })(g);
      function A(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var I = (function () {
          function e(t) {
            a(this, e),
              (this.options = t),
              (this.whitelist = this.options.whitelist || !1),
              (this.logger = w.create("languageUtils"));
          }
          return (
            r(e, [
              {
                key: "getScriptPartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return null;
                  var t = e.split("-");
                  return 2 === t.length
                    ? null
                    : (t.pop(), this.formatLanguageCode(t.join("-")));
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return e;
                  var t = e.split("-");
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: "formatLanguageCode",
                value: function (e) {
                  if ("string" == typeof e && e.indexOf("-") > -1) {
                    var t = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = e.split("-");
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = A(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = A(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = A(n[2].toLowerCase()))),
                      n.join("-")
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: "isWhitelisted",
                value: function (e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitWhitelist) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.whitelist ||
                      !this.whitelist.length ||
                      this.whitelist.indexOf(e) > -1
                  );
                },
              },
              {
                key: "getFallbackCodes",
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ("string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (e, t) {
                  var n = this,
                    a = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    i = [],
                    r = function (e) {
                      e &&
                        (n.isWhitelisted(e)
                          ? i.push(e)
                          : n.logger.warn(
                              "rejecting non-whitelisted language code: ".concat(
                                e
                              )
                            ));
                    };
                  return (
                    "string" == typeof e && e.indexOf("-") > -1
                      ? ("languageOnly" !== this.options.load &&
                          r(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          r(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          r(this.getLanguagePartFromCode(e)))
                      : "string" == typeof e && r(this.formatLanguageCode(e)),
                    a.forEach(function (e) {
                      i.indexOf(e) < 0 && r(n.formatLanguageCode(e));
                    }),
                    i
                  );
                },
              },
            ]),
            e
          );
        })(),
        L = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "id",
              "ja",
              "jbo",
              "ka",
              "kk",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        U = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 === e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || e % 10 == 1 ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 === e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 === e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 === e
                ? 0
                : 2 === e
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3
            );
          },
        };
      var z = (function () {
          function e(t) {
            var n,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            a(this, e),
              (this.languageUtils = t),
              (this.options = i),
              (this.logger = w.create("pluralResolver")),
              (this.rules =
                ((n = {}),
                L.forEach(function (e) {
                  e.lngs.forEach(function (t) {
                    n[t] = { numbers: e.nr, plurals: U[e.fc] };
                  });
                }),
                n));
          }
          return (
            r(e, [
              {
                key: "addRule",
                value: function (e, t) {
                  this.rules[e] = t;
                },
              },
              {
                key: "getRule",
                value: function (e) {
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                },
              },
              {
                key: "needsPlural",
                value: function (e) {
                  var t = this.getRule(e);
                  return t && t.numbers.length > 1;
                },
              },
              {
                key: "getPluralFormsOfKey",
                value: function (e, t) {
                  var n = this,
                    a = [],
                    i = this.getRule(e);
                  return i
                    ? (i.numbers.forEach(function (i) {
                        var r = n.getSuffix(e, i);
                        a.push("".concat(t).concat(r));
                      }),
                      a)
                    : a;
                },
              },
              {
                key: "getSuffix",
                value: function (e, t) {
                  var n = this,
                    a = this.getRule(e);
                  if (a) {
                    var i = a.noAbs ? a.plurals(t) : a.plurals(Math.abs(t)),
                      r = a.numbers[i];
                    this.options.simplifyPluralSuffix &&
                      2 === a.numbers.length &&
                      1 === a.numbers[0] &&
                      (2 === r ? (r = "plural") : 1 === r && (r = ""));
                    var o = function () {
                      return n.options.prepend && r.toString()
                        ? n.options.prepend + r.toString()
                        : r.toString();
                    };
                    return "v1" === this.options.compatibilityJSON
                      ? 1 === r
                        ? ""
                        : "number" == typeof r
                        ? "_plural_".concat(r.toString())
                        : o()
                      : "v2" === this.options.compatibilityJSON ||
                        (this.options.simplifyPluralSuffix &&
                          2 === a.numbers.length &&
                          1 === a.numbers[0])
                      ? o()
                      : this.options.prepend && i.toString()
                      ? this.options.prepend + i.toString()
                      : i.toString();
                  }
                  return (
                    this.logger.warn("no plural rule found for: ".concat(e)), ""
                  );
                },
              },
            ]),
            e
          );
        })(),
        q = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            a(this, e),
              (this.logger = w.create("interpolator")),
              this.init(t, !0);
          }
          return (
            r(e, [
              {
                key: "init",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (arguments.length > 1 ? arguments[1] : void 0) &&
                    ((this.options = e),
                    (this.format =
                      (e.interpolation && e.interpolation.format) ||
                      function (e) {
                        return e;
                      })),
                    e.interpolation || (e.interpolation = { escapeValue: !0 });
                  var t = e.interpolation;
                  (this.escape = void 0 !== t.escape ? t.escape : C),
                    (this.escapeValue =
                      void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape &&
                      t.useRawValueToEscape),
                    (this.prefix = t.prefix
                      ? O(t.prefix)
                      : t.prefixEscaped || "{{"),
                    (this.suffix = t.suffix
                      ? O(t.suffix)
                      : t.suffixEscaped || "}}"),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ","),
                    (this.unescapePrefix = t.unescapeSuffix
                      ? ""
                      : t.unescapePrefix || "-"),
                    (this.unescapeSuffix = this.unescapePrefix
                      ? ""
                      : t.unescapeSuffix || ""),
                    (this.nestingPrefix = t.nestingPrefix
                      ? O(t.nestingPrefix)
                      : t.nestingPrefixEscaped || O("$t(")),
                    (this.nestingSuffix = t.nestingSuffix
                      ? O(t.nestingSuffix)
                      : t.nestingSuffixEscaped || O(")")),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    this.resetRegExp();
                },
              },
              {
                key: "reset",
                value: function () {
                  this.options && this.init(this.options);
                },
              },
              {
                key: "resetRegExp",
                value: function () {
                  var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                  this.regexp = new RegExp(e, "g");
                  var t = ""
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, "(.+?)")
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix);
                  this.regexpUnescape = new RegExp(t, "g");
                  var n = ""
                    .concat(this.nestingPrefix, "(.+?)")
                    .concat(this.nestingSuffix);
                  this.nestingRegexp = new RegExp(n, "g");
                },
              },
              {
                key: "interpolate",
                value: function (e, t, n, a) {
                  var i,
                    r,
                    o,
                    s = this;
                  function c(e) {
                    return e.replace(/\$/g, "$$$$");
                  }
                  var d = function (e) {
                    if (e.indexOf(s.formatSeparator) < 0) return S(t, e);
                    var a = e.split(s.formatSeparator),
                      i = a.shift().trim(),
                      r = a.join(s.formatSeparator).trim();
                    return s.format(S(t, i), r, n);
                  };
                  this.resetRegExp();
                  var u =
                    (a && a.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler;
                  for (
                    o = 0;
                    (i = this.regexpUnescape.exec(e)) &&
                    ((r = d(i[1].trim())),
                    (e = e.replace(i[0], r)),
                    (this.regexpUnescape.lastIndex = 0),
                    !(++o >= this.maxReplaces));

                  );
                  for (o = 0; (i = this.regexp.exec(e)); ) {
                    if (void 0 === (r = d(i[1].trim())))
                      if ("function" == typeof u) {
                        var l = u(e, i, a);
                        r = "string" == typeof l ? l : "";
                      } else
                        this.logger.warn(
                          "missed to pass in variable "
                            .concat(i[1], " for interpolating ")
                            .concat(e)
                        ),
                          (r = "");
                    else
                      "string" == typeof r ||
                        this.useRawValueToEscape ||
                        (r = v(r));
                    if (
                      ((r = this.escapeValue ? c(this.escape(r)) : c(r)),
                      (e = e.replace(i[0], r)),
                      (this.regexp.lastIndex = 0),
                      ++o >= this.maxReplaces)
                    )
                      break;
                  }
                  return e;
                },
              },
              {
                key: "nest",
                value: function (e, t) {
                  var a,
                    i,
                    r = n(
                      {},
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    );
                  function o(e, t) {
                    if (e.indexOf(",") < 0) return e;
                    var a = e.split(",");
                    e = a.shift();
                    var i = a.join(",");
                    i = (i = this.interpolate(i, r)).replace(/'/g, '"');
                    try {
                      (r = JSON.parse(i)), t && (r = n({}, t, r));
                    } catch (t) {
                      this.logger.error(
                        "failed parsing options string in nesting for key ".concat(
                          e
                        ),
                        t
                      );
                    }
                    return e;
                  }
                  for (
                    r.applyPostProcessor = !1;
                    (a = this.nestingRegexp.exec(e));

                  ) {
                    if (
                      (i = t(o.call(this, a[1].trim(), r), r)) &&
                      a[0] === e &&
                      "string" != typeof i
                    )
                      return i;
                    "string" != typeof i && (i = v(i)),
                      i ||
                        (this.logger.warn(
                          "missed to resolve "
                            .concat(a[1], " for nesting ")
                            .concat(e)
                        ),
                        (i = "")),
                      (e = e.replace(a[0], i)),
                      (this.regexp.lastIndex = 0);
                  }
                  return e;
                },
              },
            ]),
            e
          );
        })();
      var M = (function (e) {
        function t(e, n, i) {
          var r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            a(this, t),
            (r = c(this, d(t).call(this))),
            g.call(s(r)),
            (r.backend = e),
            (r.store = n),
            (r.languageUtils = i.languageUtils),
            (r.options = o),
            (r.logger = w.create("backendConnector")),
            (r.state = {}),
            (r.queue = []),
            r.backend && r.backend.init && r.backend.init(i, o.backend, o),
            r
          );
        }
        return (
          l(t, e),
          r(t, [
            {
              key: "queueLoad",
              value: function (e, t, n, a) {
                var i = this,
                  r = [],
                  o = [],
                  s = [],
                  c = [];
                return (
                  e.forEach(function (e) {
                    var a = !0;
                    t.forEach(function (t) {
                      var s = "".concat(e, "|").concat(t);
                      !n.reload && i.store.hasResourceBundle(e, t)
                        ? (i.state[s] = 2)
                        : i.state[s] < 0 ||
                          (1 === i.state[s]
                            ? o.indexOf(s) < 0 && o.push(s)
                            : ((i.state[s] = 1),
                              (a = !1),
                              o.indexOf(s) < 0 && o.push(s),
                              r.indexOf(s) < 0 && r.push(s),
                              c.indexOf(t) < 0 && c.push(t)));
                    }),
                      a || s.push(e);
                  }),
                  (r.length || o.length) &&
                    this.queue.push({
                      pending: o,
                      loaded: {},
                      errors: [],
                      callback: a,
                    }),
                  {
                    toLoad: r,
                    pending: o,
                    toLoadLanguages: s,
                    toLoadNamespaces: c,
                  }
                );
              },
            },
            {
              key: "loaded",
              value: function (e, t, n) {
                var a = p(e.split("|"), 2),
                  i = a[0],
                  r = a[1];
                t && this.emit("failedLoading", i, r, t),
                  n && this.store.addResourceBundle(i, r, n),
                  (this.state[e] = t ? -1 : 2);
                var o = {};
                this.queue.forEach(function (n) {
                  var a, s, c, d, u, l;
                  (a = n.loaded),
                    (s = r),
                    (d = x(a, [i], Object)),
                    (u = d.obj),
                    (l = d.k),
                    (u[l] = u[l] || []),
                    c && (u[l] = u[l].concat(s)),
                    c || u[l].push(s),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; )
                        e.splice(n, 1), (n = e.indexOf(t));
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        o[e] || (o[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function (t) {
                              o[e].indexOf(t) < 0 && o[e].push(t);
                            });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit("loaded", o),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                var a = this,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  r =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 250,
                  o = arguments.length > 5 ? arguments[5] : void 0;
                return e.length
                  ? this.backend[n](e, t, function (s, c) {
                      s && c && i < 5
                        ? setTimeout(function () {
                            a.read.call(a, e, t, n, i + 1, 2 * r, o);
                          }, r)
                        : o(s, c);
                    })
                  : o(null, {});
              },
            },
            {
              key: "prepareLoading",
              value: function (e, t) {
                var n = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources."
                    ),
                    i && i()
                  );
                "string" == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  "string" == typeof t && (t = [t]);
                var r = this.queueLoad(e, t, a, i);
                if (!r.toLoad.length) return r.pending.length || i(), null;
                r.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: "load",
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: "reload",
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: "loadOne",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  a = p(e.split("|"), 2),
                  i = a[0],
                  r = a[1];
                this.read(i, r, "read", null, null, function (a, o) {
                  a &&
                    t.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(r, " for language ")
                        .concat(i, " failed"),
                      a
                    ),
                    !a &&
                      o &&
                      t.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(r, " for language ")
                          .concat(i),
                        o
                      ),
                    t.loaded(e, a, o);
                });
              },
            },
            {
              key: "saveMissing",
              value: function (e, t, a, i, r) {
                var o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                this.backend &&
                  this.backend.create &&
                  this.backend.create(
                    e,
                    t,
                    a,
                    i,
                    null,
                    n({}, o, { isUpdate: r })
                  ),
                  e && e[0] && this.store.addResource(e[0], t, a, i);
              },
            },
          ]),
          t
        );
      })(g);
      function N(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.whitelist &&
            e.whitelist.indexOf("cimode") < 0 &&
            (e.whitelist = e.whitelist.concat(["cimode"])),
          e
        );
      }
      function F() {}
      var D = (function (t) {
          function i() {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = arguments.length > 1 ? arguments[1] : void 0;
            if (
              (a(this, i),
              (e = c(this, d(i).call(this))),
              g.call(s(e)),
              (e.options = N(t)),
              (e.services = {}),
              (e.logger = w),
              (e.modules = { external: [] }),
              n && !e.isInitialized && !t.isClone)
            ) {
              if (!e.options.initImmediate) return e.init(t, n), c(e, s(e));
              setTimeout(function () {
                e.init(t, n);
              }, 0);
            }
            return e;
          }
          return (
            l(i, t),
            r(i, [
              {
                key: "init",
                value: function () {
                  var t = this,
                    a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    i = arguments.length > 1 ? arguments[1] : void 0;
                  function r(e) {
                    return e ? ("function" == typeof e ? new e() : e) : null;
                  }
                  if (
                    ("function" == typeof a && ((i = a), (a = {})),
                    (this.options = n(
                      {},
                      {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: function () {},
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function (t) {
                          var n = {};
                          if (
                            ("object" === e(t[1]) && (n = t[1]),
                            "string" == typeof t[1] && (n.defaultValue = t[1]),
                            "string" == typeof t[2] && (n.tDescription = t[2]),
                            "object" === e(t[2]) || "object" === e(t[3]))
                          ) {
                            var a = t[3] || t[2];
                            Object.keys(a).forEach(function (e) {
                              n[e] = a[e];
                            });
                          }
                          return n;
                        },
                        interpolation: {
                          escapeValue: !0,
                          format: function (e, t, n) {
                            return e;
                          },
                          prefix: "{{",
                          suffix: "}}",
                          formatSeparator: ",",
                          unescapePrefix: "-",
                          nestingPrefix: "$t(",
                          nestingSuffix: ")",
                          maxReplaces: 1e3,
                        },
                      },
                      this.options,
                      N(a)
                    )),
                    (this.format = this.options.interpolation.format),
                    i || (i = F),
                    !this.options.isClone)
                  ) {
                    this.modules.logger
                      ? w.init(r(this.modules.logger), this.options)
                      : w.init(null, this.options);
                    var o = new I(this.options);
                    this.store = new T(this.options.resources, this.options);
                    var s = this.services;
                    (s.logger = w),
                      (s.resourceStore = this.store),
                      (s.languageUtils = o),
                      (s.pluralResolver = new z(o, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                      })),
                      (s.interpolator = new q(this.options)),
                      (s.backendConnector = new M(
                        r(this.modules.backend),
                        s.resourceStore,
                        s,
                        this.options
                      )),
                      s.backendConnector.on("*", function (e) {
                        for (
                          var n = arguments.length,
                            a = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          a[i - 1] = arguments[i];
                        t.emit.apply(t, [e].concat(a));
                      }),
                      this.modules.languageDetector &&
                        ((s.languageDetector = r(
                          this.modules.languageDetector
                        )),
                        s.languageDetector.init(
                          s,
                          this.options.detection,
                          this.options
                        )),
                      this.modules.i18nFormat &&
                        ((s.i18nFormat = r(this.modules.i18nFormat)),
                        s.i18nFormat.init && s.i18nFormat.init(this)),
                      (this.translator = new E(this.services, this.options)),
                      this.translator.on("*", function (e) {
                        for (
                          var n = arguments.length,
                            a = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          a[i - 1] = arguments[i];
                        t.emit.apply(t, [e].concat(a));
                      }),
                      this.modules.external.forEach(function (e) {
                        e.init && e.init(t);
                      });
                  }
                  [
                    "getResource",
                    "addResource",
                    "addResources",
                    "addResourceBundle",
                    "removeResourceBundle",
                    "hasResourceBundle",
                    "getResourceBundle",
                    "getDataByLanguage",
                  ].forEach(function (e) {
                    t[e] = function () {
                      var n;
                      return (n = t.store)[e].apply(n, arguments);
                    };
                  });
                  var c = _(),
                    d = function () {
                      t.changeLanguage(t.options.lng, function (e, n) {
                        (t.isInitialized = !0),
                          t.logger.log("initialized", t.options),
                          t.emit("initialized", t.options),
                          c.resolve(n),
                          i(e, n);
                      });
                    };
                  return (
                    this.options.resources || !this.options.initImmediate
                      ? d()
                      : setTimeout(d, 0),
                    c
                  );
                },
              },
              {
                key: "loadResources",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : F;
                  if (
                    !this.options.resources ||
                    this.options.partialBundledLanguages
                  ) {
                    if (
                      this.language &&
                      "cimode" === this.language.toLowerCase()
                    )
                      return t();
                    var n = [],
                      a = function (t) {
                        t &&
                          e.services.languageUtils
                            .toResolveHierarchy(t)
                            .forEach(function (e) {
                              n.indexOf(e) < 0 && n.push(e);
                            });
                      };
                    if (this.language) a(this.language);
                    else
                      this.services.languageUtils
                        .getFallbackCodes(this.options.fallbackLng)
                        .forEach(function (e) {
                          return a(e);
                        });
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return a(e);
                      }),
                      this.services.backendConnector.load(
                        n,
                        this.options.ns,
                        t
                      );
                  } else t(null);
                },
              },
              {
                key: "reloadResources",
                value: function (e, t, n) {
                  var a = _();
                  return (
                    e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = F),
                    this.services.backendConnector.reload(e, t, function (e) {
                      a.resolve(), n(e);
                    }),
                    a
                  );
                },
              },
              {
                key: "use",
                value: function (e) {
                  return (
                    "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || (e.log && e.warn && e.error)) &&
                      (this.modules.logger = e),
                    "languageDetector" === e.type &&
                      (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && R.addPostProcessor(e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                  );
                },
              },
              {
                key: "changeLanguage",
                value: function (e, t) {
                  var n = this,
                    a = _();
                  this.emit("languageChanging", e);
                  var i = function (e) {
                    e &&
                      ((n.language = e),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(e)),
                      n.translator.language || n.translator.changeLanguage(e),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(e)),
                      n.loadResources(function (i) {
                        !(function (e, i) {
                          n.translator.changeLanguage(i),
                            i &&
                              (n.emit("languageChanged", i),
                              n.logger.log("languageChanged", i)),
                            a.resolve(function () {
                              return n.t.apply(n, arguments);
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments);
                              });
                        })(i, e);
                      });
                  };
                  return (
                    e ||
                    !this.services.languageDetector ||
                    this.services.languageDetector.async
                      ? !e &&
                        this.services.languageDetector &&
                        this.services.languageDetector.async
                        ? this.services.languageDetector.detect(i)
                        : i(e)
                      : i(this.services.languageDetector.detect()),
                    a
                  );
                },
              },
              {
                key: "getFixedT",
                value: function (t, a) {
                  var i = this,
                    r = function t(a, r) {
                      var o = n({}, r);
                      if ("object" !== e(r)) {
                        for (
                          var s = arguments.length,
                            c = new Array(s > 2 ? s - 2 : 0),
                            d = 2;
                          d < s;
                          d++
                        )
                          c[d - 2] = arguments[d];
                        o = i.options.overloadTranslationOptionHandler(
                          [a, r].concat(c)
                        );
                      }
                      return (
                        (o.lng = o.lng || t.lng),
                        (o.lngs = o.lngs || t.lngs),
                        (o.ns = o.ns || t.ns),
                        i.t(a, o)
                      );
                    };
                  return (
                    "string" == typeof t ? (r.lng = t) : (r.lngs = t),
                    (r.ns = a),
                    r
                  );
                },
              },
              {
                key: "t",
                value: function () {
                  var e;
                  return (
                    this.translator &&
                    (e = this.translator).translate.apply(e, arguments)
                  );
                },
              },
              {
                key: "exists",
                value: function () {
                  var e;
                  return (
                    this.translator &&
                    (e = this.translator).exists.apply(e, arguments)
                  );
                },
              },
              {
                key: "setDefaultNamespace",
                value: function (e) {
                  this.options.defaultNS = e;
                },
              },
              {
                key: "loadNamespaces",
                value: function (e, t) {
                  var n = this,
                    a = _();
                  return this.options.ns
                    ? ("string" == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                      }),
                      this.loadResources(function (e) {
                        a.resolve(), t && t(e);
                      }),
                      a)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: "loadLanguages",
                value: function (e, t) {
                  var n = _();
                  "string" == typeof e && (e = [e]);
                  var a = this.options.preload || [],
                    i = e.filter(function (e) {
                      return a.indexOf(e) < 0;
                    });
                  return i.length
                    ? ((this.options.preload = a.concat(i)),
                      this.loadResources(function (e) {
                        n.resolve(), t && t(e);
                      }),
                      n)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: "dir",
                value: function (e) {
                  if (
                    (e ||
                      (e =
                        this.languages && this.languages.length > 0
                          ? this.languages[0]
                          : this.language),
                    !e)
                  )
                    return "rtl";
                  return [
                    "ar",
                    "shu",
                    "sqr",
                    "ssh",
                    "xaa",
                    "yhd",
                    "yud",
                    "aao",
                    "abh",
                    "abv",
                    "acm",
                    "acq",
                    "acw",
                    "acx",
                    "acy",
                    "adf",
                    "ads",
                    "aeb",
                    "aec",
                    "afb",
                    "ajp",
                    "apc",
                    "apd",
                    "arb",
                    "arq",
                    "ars",
                    "ary",
                    "arz",
                    "auz",
                    "avl",
                    "ayh",
                    "ayl",
                    "ayn",
                    "ayp",
                    "bbz",
                    "pga",
                    "he",
                    "iw",
                    "ps",
                    "pbt",
                    "pbu",
                    "pst",
                    "prp",
                    "prd",
                    "ur",
                    "ydd",
                    "yds",
                    "yih",
                    "ji",
                    "yi",
                    "hbo",
                    "men",
                    "xmn",
                    "fa",
                    "jpr",
                    "peo",
                    "pes",
                    "prs",
                    "dv",
                    "sam",
                  ].indexOf(
                    this.services.languageUtils.getLanguagePartFromCode(e)
                  ) >= 0
                    ? "rtl"
                    : "ltr";
                },
              },
              {
                key: "createInstance",
                value: function () {
                  return new i(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              },
              {
                key: "cloneInstance",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : F,
                    r = n({}, this.options, t, { isClone: !0 }),
                    o = new i(r);
                  return (
                    ["store", "services", "language"].forEach(function (t) {
                      o[t] = e[t];
                    }),
                    (o.translator = new E(o.services, o.options)),
                    o.translator.on("*", function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      o.emit.apply(o, [e].concat(n));
                    }),
                    o.init(r, a),
                    (o.translator.options = o.options),
                    o
                  );
                },
              },
            ]),
            i
          );
        })(g),
        B = new D(),
        H = {
          en: {
            about_us: async () => await o.e(7372).then(o.t.bind(o, 41651, 17)),
            account: async () => await o.e(10007).then(o.t.bind(o, 90152, 17)),
            ambassador: async () =>
              await o.e(31677).then(o.t.bind(o, 92354, 17)),
            app_whats_new: async () =>
              await o.e(96487).then(o.t.bind(o, 56051, 17)),
            blog_list: async () => await o.e(15834).then(o.t.bind(o, 8564, 17)),
            blog_post: async () =>
              await o.e(47001).then(o.t.bind(o, 48473, 17)),
            brand_identity: async () =>
              await o.e(58059).then(o.t.bind(o, 18488, 17)),
            buy: async () => await o.e(16795).then(o.t.bind(o, 1592, 17)),
            cloud_closed: async () =>
              await o.e(90453).then(o.t.bind(o, 42509, 17)),
            common: async () => await o.e(13201).then(o.t.bind(o, 83147, 17)),
            compare: async () => await o.e(83254).then(o.t.bind(o, 96824, 17)),
            contact: async () => await o.e(72492).then(o.t.bind(o, 72779, 17)),
            demos: async () => await o.e(77533).then(o.t.bind(o, 66202, 17)),
            design_resources: async () =>
              await o.e(31122).then(o.t.bind(o, 23640, 17)),
            download: async () => await o.e(39350).then(o.t.bind(o, 97609, 17)),
            enterprise_form: async () =>
              await o.e(74319).then(o.t.bind(o, 50736, 17)),
            error: async () => await o.e(91726).then(o.t.bind(o, 23780, 17)),
            faq: async () => await o.e(6365).then(o.t.bind(o, 25257, 17)),
            features_2022: async () =>
              await o.e(61520).then(o.t.bind(o, 67355, 17)),
            footer: async () => await o.e(5534).then(o.t.bind(o, 9170, 17)),
            form: async () => await o.e(87888).then(o.t.bind(o, 77588, 17)),
            getting_help: async () =>
              await o.e(33601).then(o.t.bind(o, 24095, 17)),
            gift_card: async () => await o.e(33806).then(o.t.bind(o, 2553, 17)),
            header: async () => await o.e(4490).then(o.t.bind(o, 96535, 17)),
            homepage_2020: async () =>
              await o.e(97194).then(o.t.bind(o, 12719, 17)),
            homepage_2021: async () =>
              await o.e(82382).then(o.t.bind(o, 3969, 17)),
            homepage_2022: async () =>
              await o.e(70676).then(o.t.bind(o, 58245, 17)),
            homepage_2022_new: async () =>
              await o.e(77135).then(o.t.bind(o, 36378, 17)),
            homepage_2024: async () =>
              await o.e(33768).then(o.t.bind(o, 91356, 17)),
            join_team: async () =>
              await o.e(88673).then(o.t.bind(o, 54479, 17)),
            join_us: async () => await o.e(52951).then(o.t.bind(o, 55552, 17)),
            learn_more_about: async () =>
              await o.e(31737).then(o.t.bind(o, 89307, 17)),
            logo_guideline: async () =>
              await o.e(86231).then(o.t.bind(o, 63147, 17)),
            mindmapping: async () =>
              await o.e(45146).then(o.t.bind(o, 30681, 17)),
            mobile: async () => await o.e(91516).then(o.t.bind(o, 81755, 17)),
            my_submissions: async () =>
              await o.e(75555).then(o.t.bind(o, 43786, 17)),
            newsletter: async () =>
              await o.e(2957).then(o.t.bind(o, 10514, 17)),
            page_error: async () =>
              await o.e(82935).then(o.t.bind(o, 92123, 17)),
            partner: async () => await o.e(71541).then(o.t.bind(o, 42782, 17)),
            paywall: async () => await o.e(89017).then(o.t.bind(o, 8957, 17)),
            pitch_mode: async () =>
              await o.e(82180).then(o.t.bind(o, 94449, 17)),
            pricing: async () => await o.e(10106).then(o.t.bind(o, 31563, 17)),
            privacy: async () => await o.e(90643).then(o.t.bind(o, 42542, 17)),
            redeem: async () => await o.e(44753).then(o.t.bind(o, 19727, 17)),
            redirect: async () => await o.e(27615).then(o.t.bind(o, 65528, 17)),
            release_notes: async () =>
              await o.e(37047).then(o.t.bind(o, 21790, 17)),
            rocks: async () => await o.e(67685).then(o.t.bind(o, 4369, 17)),
            share: async () => await o.e(87847).then(o.t.bind(o, 8045, 17)),
            sitemap: async () => await o.e(33630).then(o.t.bind(o, 10677, 17)),
            sme: async () => await o.e(96002).then(o.t.bind(o, 99747, 17)),
            submit_to_gallery: async () =>
              await o.e(77358).then(o.t.bind(o, 81559, 17)),
            term: async () => await o.e(14274).then(o.t.bind(o, 60274, 17)),
            thankyou: async () => await o.e(67868).then(o.t.bind(o, 36371, 17)),
            user_guide: async () =>
              await o.e(22790).then(o.t.bind(o, 18906, 17)),
            video_guide: async () =>
              await o.e(34249).then(o.t.bind(o, 21389, 17)),
            webinar: async () => await o.e(62903).then(o.t.bind(o, 34903, 17)),
            workshop: async () => await o.e(58810).then(o.t.bind(o, 90073, 17)),
            xmind2021: async () => await o.e(99693).then(o.t.bind(o, 8256, 17)),
            xmind2021_beta: async () =>
              await o.e(67333).then(o.t.bind(o, 89219, 17)),
            xmind8: async () => await o.e(86459).then(o.t.bind(o, 97421, 17)),
            xmind_cards: async () =>
              await o.e(66337).then(o.t.bind(o, 18473, 17)),
            xmind_cxm: async () =>
              await o.e(48946).then(o.t.bind(o, 61547, 17)),
            xmind_works: async () =>
              await o.e(30300).then(o.t.bind(o, 71263, 17)),
            zen: async () => await o.e(2419).then(o.t.bind(o, 20747, 17)),
            zen_old: async () => await o.e(56635).then(o.t.bind(o, 85910, 17)),
          },
          cn: {
            about_us: async () => await o.e(89655).then(o.t.bind(o, 15550, 17)),
            account: async () => await o.e(70774).then(o.t.bind(o, 3347, 17)),
            ambassador: async () =>
              await o.e(16322).then(o.t.bind(o, 3708, 17)),
            app_whats_new: async () =>
              await o.e(68588).then(o.t.bind(o, 17161, 17)),
            blog_list: async () => await o.e(45723).then(o.t.bind(o, 3700, 17)),
            blog_post: async () =>
              await o.e(58990).then(o.t.bind(o, 35744, 17)),
            brand_identity: async () =>
              await o.e(2761).then(o.t.bind(o, 17051, 17)),
            buy: async () => await o.e(43744).then(o.t.bind(o, 22705, 17)),
            cloud_closed: async () =>
              await o.e(69502).then(o.t.bind(o, 88977, 17)),
            common: async () => await o.e(46792).then(o.t.bind(o, 81029, 17)),
            compare: async () => await o.e(13903).then(o.t.bind(o, 14909, 17)),
            contact: async () => await o.e(24082).then(o.t.bind(o, 25136, 17)),
            demos: async () => await o.e(72594).then(o.t.bind(o, 99544, 17)),
            design_resources: async () =>
              await o.e(64490).then(o.t.bind(o, 24506, 17)),
            download: async () => await o.e(85959).then(o.t.bind(o, 79929, 17)),
            enterprise_form: async () =>
              await o.e(6052).then(o.t.bind(o, 70488, 17)),
            error: async () => await o.e(20396).then(o.t.bind(o, 12665, 17)),
            faq: async () => await o.e(48423).then(o.t.bind(o, 36578, 17)),
            features_2022: async () =>
              await o.e(61701).then(o.t.bind(o, 72918, 17)),
            footer: async () => await o.e(62424).then(o.t.bind(o, 36749, 17)),
            form: async () => await o.e(8914).then(o.t.bind(o, 21523, 17)),
            getting_help: async () =>
              await o.e(39463).then(o.t.bind(o, 6605, 17)),
            gift_card: async () => await o.e(7994).then(o.t.bind(o, 2856, 17)),
            header: async () => await o.e(39875).then(o.t.bind(o, 95173, 17)),
            homepage_2020: async () =>
              await o.e(10556).then(o.t.bind(o, 24860, 17)),
            homepage_2021: async () =>
              await o.e(27187).then(o.t.bind(o, 23542, 17)),
            homepage_2022: async () =>
              await o.e(86056).then(o.t.bind(o, 76736, 17)),
            homepage_2022_new: async () =>
              await o.e(44012).then(o.t.bind(o, 21336, 17)),
            homepage_2024: async () =>
              await o.e(4072).then(o.t.bind(o, 77118, 17)),
            join_team: async () =>
              await o.e(31849).then(o.t.bind(o, 51923, 17)),
            join_us: async () => await o.e(70279).then(o.t.bind(o, 74067, 17)),
            learn_more_about: async () =>
              await o.e(49227).then(o.t.bind(o, 21588, 17)),
            logo_guideline: async () =>
              await o.e(62936).then(o.t.bind(o, 45784, 17)),
            mindmapping: async () =>
              await o.e(18710).then(o.t.bind(o, 79391, 17)),
            mobile: async () => await o.e(2812).then(o.t.bind(o, 50869, 17)),
            my_submissions: async () =>
              await o.e(39956).then(o.t.bind(o, 52879, 17)),
            newsletter: async () =>
              await o.e(61393).then(o.t.bind(o, 75202, 17)),
            page_error: async () =>
              await o.e(22046).then(o.t.bind(o, 86020, 17)),
            partner: async () => await o.e(97015).then(o.t.bind(o, 91061, 17)),
            paywall: async () => await o.e(27884).then(o.t.bind(o, 62292, 17)),
            pitch_mode: async () =>
              await o.e(80274).then(o.t.bind(o, 57712, 17)),
            pricing: async () => await o.e(80060).then(o.t.bind(o, 21668, 17)),
            privacy: async () => await o.e(84341).then(o.t.bind(o, 86823, 17)),
            redeem: async () => await o.e(37676).then(o.t.bind(o, 84864, 17)),
            redirect: async () => await o.e(44713).then(o.t.bind(o, 58812, 17)),
            release_notes: async () =>
              await o.e(70153).then(o.t.bind(o, 70451, 17)),
            rocks: async () => await o.e(96614).then(o.t.bind(o, 40126, 17)),
            share: async () => await o.e(5709).then(o.t.bind(o, 99830, 17)),
            sitemap: async () => await o.e(22473).then(o.t.bind(o, 37193, 17)),
            sme: async () => await o.e(41333).then(o.t.bind(o, 40836, 17)),
            submit_to_gallery: async () =>
              await o.e(11352).then(o.t.bind(o, 86749, 17)),
            term: async () => await o.e(28014).then(o.t.bind(o, 27595, 17)),
            thankyou: async () => await o.e(78963).then(o.t.bind(o, 46560, 17)),
            user_guide: async () =>
              await o.e(96429).then(o.t.bind(o, 41026, 17)),
            video_guide: async () =>
              await o.e(26218).then(o.t.bind(o, 1361, 17)),
            webinar: async () => await o.e(37879).then(o.t.bind(o, 24177, 17)),
            workshop: async () => await o.e(44167).then(o.t.bind(o, 92090, 17)),
            xmind2021: async () => await o.e(7342).then(o.t.bind(o, 27143, 17)),
            xmind2021_beta: async () =>
              await o.e(43217).then(o.t.bind(o, 23420, 17)),
            xmind8: async () => await o.e(75147).then(o.t.bind(o, 44585, 17)),
            xmind_cards: async () =>
              await o.e(40504).then(o.t.bind(o, 18429, 17)),
            xmind_cxm: async () =>
              await o.e(51239).then(o.t.bind(o, 87790, 17)),
            xmind_works: async () =>
              await o.e(7261).then(o.t.bind(o, 83002, 17)),
            zen: async () => await o.e(5821).then(o.t.bind(o, 56019, 17)),
            zen_old: async () => await o.e(48691).then(o.t.bind(o, 91661, 17)),
          },
          fr: {
            about_us: async () => await o.e(96301).then(o.t.bind(o, 99571, 17)),
            account: async () => await o.e(55613).then(o.t.bind(o, 53828, 17)),
            ambassador: async () =>
              await o.e(78664).then(o.t.bind(o, 77285, 17)),
            app_whats_new: async () =>
              await o.e(25602).then(o.t.bind(o, 14527, 17)),
            blog_list: async () =>
              await o.e(12002).then(o.t.bind(o, 34559, 17)),
            blog_post: async () => await o.e(4387).then(o.t.bind(o, 97301, 17)),
            brand_identity: async () =>
              await o.e(45191).then(o.t.bind(o, 65799, 17)),
            buy: async () => await o.e(701).then(o.t.bind(o, 61009, 17)),
            cloud_closed: async () =>
              await o.e(51538).then(o.t.bind(o, 54830, 17)),
            common: async () => await o.e(29280).then(o.t.bind(o, 97038, 17)),
            compare: async () => await o.e(97207).then(o.t.bind(o, 75868, 17)),
            contact: async () => await o.e(49915).then(o.t.bind(o, 33533, 17)),
            demos: async () => await o.e(82878).then(o.t.bind(o, 24240, 17)),
            design_resources: async () =>
              await o.e(79338).then(o.t.bind(o, 38642, 17)),
            download: async () => await o.e(25700).then(o.t.bind(o, 56073, 17)),
            enterprise_form: async () =>
              await o.e(72266).then(o.t.bind(o, 13960, 17)),
            error: async () => await o.e(44016).then(o.t.bind(o, 85278, 17)),
            faq: async () => await o.e(21545).then(o.t.bind(o, 43525, 17)),
            features_2022: async () =>
              await o.e(39420).then(o.t.bind(o, 98750, 17)),
            footer: async () => await o.e(96164).then(o.t.bind(o, 56276, 17)),
            form: async () => await o.e(84705).then(o.t.bind(o, 248, 17)),
            getting_help: async () =>
              await o.e(86713).then(o.t.bind(o, 76672, 17)),
            gift_card: async () =>
              await o.e(76574).then(o.t.bind(o, 74624, 17)),
            header: async () => await o.e(55760).then(o.t.bind(o, 24929, 17)),
            homepage_2020: async () =>
              await o.e(64744).then(o.t.bind(o, 75564, 17)),
            homepage_2021: async () =>
              await o.e(42591).then(o.t.bind(o, 64665, 17)),
            homepage_2022: async () =>
              await o.e(90471).then(o.t.bind(o, 50011, 17)),
            homepage_2022_new: async () =>
              await o.e(5233).then(o.t.bind(o, 53678, 17)),
            homepage_2024: async () =>
              await o.e(25175).then(o.t.bind(o, 2578, 17)),
            join_team: async () =>
              await o.e(86263).then(o.t.bind(o, 59319, 17)),
            join_us: async () => await o.e(7476).then(o.t.bind(o, 78980, 17)),
            learn_more_about: async () =>
              await o.e(70577).then(o.t.bind(o, 21769, 17)),
            logo_guideline: async () =>
              await o.e(44216).then(o.t.bind(o, 46776, 17)),
            mindmapping: async () =>
              await o.e(1765).then(o.t.bind(o, 48102, 17)),
            mobile: async () => await o.e(41271).then(o.t.bind(o, 79806, 17)),
            my_submissions: async () =>
              await o.e(15536).then(o.t.bind(o, 72272, 17)),
            newsletter: async () =>
              await o.e(72639).then(o.t.bind(o, 19694, 17)),
            page_error: async () =>
              await o.e(52308).then(o.t.bind(o, 75468, 17)),
            partner: async () => await o.e(80270).then(o.t.bind(o, 40327, 17)),
            paywall: async () => await o.e(11732).then(o.t.bind(o, 62885, 17)),
            pitch_mode: async () =>
              await o.e(60983).then(o.t.bind(o, 44693, 17)),
            pricing: async () => await o.e(55380).then(o.t.bind(o, 11352, 17)),
            privacy: async () => await o.e(34580).then(o.t.bind(o, 55058, 17)),
            redeem: async () => await o.e(99077).then(o.t.bind(o, 35802, 17)),
            redirect: async () => await o.e(54575).then(o.t.bind(o, 60901, 17)),
            release_notes: async () =>
              await o.e(4005).then(o.t.bind(o, 95026, 17)),
            rocks: async () => await o.e(95089).then(o.t.bind(o, 34098, 17)),
            share: async () => await o.e(42469).then(o.t.bind(o, 30239, 17)),
            sitemap: async () => await o.e(18665).then(o.t.bind(o, 3923, 17)),
            sme: async () => await o.e(74866).then(o.t.bind(o, 3945, 17)),
            submit_to_gallery: async () =>
              await o.e(67059).then(o.t.bind(o, 81783, 17)),
            term: async () => await o.e(21429).then(o.t.bind(o, 95025, 17)),
            thankyou: async () => await o.e(81201).then(o.t.bind(o, 77403, 17)),
            user_guide: async () =>
              await o.e(69209).then(o.t.bind(o, 9925, 17)),
            video_guide: async () =>
              await o.e(74745).then(o.t.bind(o, 740, 17)),
            webinar: async () => await o.e(96845).then(o.t.bind(o, 60185, 17)),
            workshop: async () => await o.e(33512).then(o.t.bind(o, 39186, 17)),
            xmind2021: async () =>
              await o.e(85032).then(o.t.bind(o, 57488, 17)),
            xmind2021_beta: async () =>
              await o.e(519).then(o.t.bind(o, 90687, 17)),
            xmind8: async () => await o.e(44640).then(o.t.bind(o, 43698, 17)),
            xmind_cards: async () =>
              await o.e(32121).then(o.t.bind(o, 86536, 17)),
            xmind_cxm: async () =>
              await o.e(34090).then(o.t.bind(o, 31177, 17)),
            xmind_works: async () =>
              await o.e(61145).then(o.t.bind(o, 59515, 17)),
            zen: async () => await o.e(34899).then(o.t.bind(o, 79042, 17)),
            zen_old: async () => await o.e(48286).then(o.t.bind(o, 5069, 17)),
          },
          de: {
            about_us: async () => await o.e(72443).then(o.t.bind(o, 46313, 17)),
            account: async () => await o.e(60299).then(o.t.bind(o, 3268, 17)),
            ambassador: async () =>
              await o.e(42433).then(o.t.bind(o, 44502, 17)),
            app_whats_new: async () =>
              await o.e(51268).then(o.t.bind(o, 82676, 17)),
            blog_list: async () =>
              await o.e(92815).then(o.t.bind(o, 41943, 17)),
            blog_post: async () =>
              await o.e(50309).then(o.t.bind(o, 42914, 17)),
            brand_identity: async () =>
              await o.e(87634).then(o.t.bind(o, 82111, 17)),
            buy: async () => await o.e(69247).then(o.t.bind(o, 34453, 17)),
            cloud_closed: async () =>
              await o.e(30304).then(o.t.bind(o, 54392, 17)),
            common: async () => await o.e(78439).then(o.t.bind(o, 77221, 17)),
            compare: async () => await o.e(41924).then(o.t.bind(o, 83535, 17)),
            contact: async () => await o.e(86539).then(o.t.bind(o, 68696, 17)),
            demos: async () => await o.e(65399).then(o.t.bind(o, 50006, 17)),
            design_resources: async () =>
              await o.e(74227).then(o.t.bind(o, 34685, 17)),
            download: async () => await o.e(84440).then(o.t.bind(o, 64626, 17)),
            enterprise_form: async () =>
              await o.e(94418).then(o.t.bind(o, 76593, 17)),
            error: async () => await o.e(30960).then(o.t.bind(o, 54867, 17)),
            faq: async () => await o.e(43362).then(o.t.bind(o, 8003, 17)),
            features_2022: async () =>
              await o.e(77564).then(o.t.bind(o, 68628, 17)),
            footer: async () => await o.e(19168).then(o.t.bind(o, 95509, 17)),
            form: async () => await o.e(70179).then(o.t.bind(o, 64730, 17)),
            getting_help: async () =>
              await o.e(88323).then(o.t.bind(o, 17598, 17)),
            gift_card: async () =>
              await o.e(50519).then(o.t.bind(o, 53873, 17)),
            header: async () => await o.e(3098).then(o.t.bind(o, 39703, 17)),
            homepage_2020: async () =>
              await o.e(61689).then(o.t.bind(o, 38576, 17)),
            homepage_2021: async () =>
              await o.e(1171).then(o.t.bind(o, 73883, 17)),
            homepage_2022: async () =>
              await o.e(83903).then(o.t.bind(o, 39031, 17)),
            homepage_2022_new: async () =>
              await o.e(31829).then(o.t.bind(o, 14504, 17)),
            homepage_2024: async () =>
              await o.e(83245).then(o.t.bind(o, 46829, 17)),
            join_team: async () =>
              await o.e(81502).then(o.t.bind(o, 71945, 17)),
            join_us: async () => await o.e(93817).then(o.t.bind(o, 52754, 17)),
            learn_more_about: async () =>
              await o.e(92759).then(o.t.bind(o, 70913, 17)),
            logo_guideline: async () =>
              await o.e(75671).then(o.t.bind(o, 22831, 17)),
            mindmapping: async () =>
              await o.e(8704).then(o.t.bind(o, 54987, 17)),
            mobile: async () => await o.e(88883).then(o.t.bind(o, 24301, 17)),
            my_submissions: async () =>
              await o.e(72479).then(o.t.bind(o, 13834, 17)),
            newsletter: async () =>
              await o.e(87636).then(o.t.bind(o, 29966, 17)),
            page_error: async () =>
              await o.e(56243).then(o.t.bind(o, 15347, 17)),
            partner: async () => await o.e(67055).then(o.t.bind(o, 54165, 17)),
            paywall: async () => await o.e(54442).then(o.t.bind(o, 55254, 17)),
            pitch_mode: async () =>
              await o.e(76297).then(o.t.bind(o, 67480, 17)),
            pricing: async () => await o.e(79945).then(o.t.bind(o, 81662, 17)),
            privacy: async () => await o.e(95406).then(o.t.bind(o, 68540, 17)),
            redeem: async () => await o.e(69539).then(o.t.bind(o, 49010, 17)),
            redirect: async () => await o.e(79643).then(o.t.bind(o, 80917, 17)),
            release_notes: async () =>
              await o.e(2413).then(o.t.bind(o, 75211, 17)),
            rocks: async () => await o.e(37097).then(o.t.bind(o, 84696, 17)),
            share: async () => await o.e(63419).then(o.t.bind(o, 17873, 17)),
            sitemap: async () => await o.e(14991).then(o.t.bind(o, 69644, 17)),
            sme: async () => await o.e(20827).then(o.t.bind(o, 16892, 17)),
            submit_to_gallery: async () =>
              await o.e(51441).then(o.t.bind(o, 15357, 17)),
            term: async () => await o.e(87090).then(o.t.bind(o, 19821, 17)),
            thankyou: async () => await o.e(67137).then(o.t.bind(o, 20402, 17)),
            user_guide: async () => await o.e(587).then(o.t.bind(o, 21071, 17)),
            video_guide: async () =>
              await o.e(33832).then(o.t.bind(o, 91088, 17)),
            webinar: async () => await o.e(65656).then(o.t.bind(o, 35829, 17)),
            workshop: async () => await o.e(28543).then(o.t.bind(o, 47414, 17)),
            xmind2021: async () => await o.e(6760).then(o.t.bind(o, 28139, 17)),
            xmind2021_beta: async () =>
              await o.e(72395).then(o.t.bind(o, 12063, 17)),
            xmind8: async () => await o.e(74575).then(o.t.bind(o, 47659, 17)),
            xmind_cards: async () =>
              await o.e(60640).then(o.t.bind(o, 54127, 17)),
            xmind_cxm: async () =>
              await o.e(42432).then(o.t.bind(o, 85236, 17)),
            xmind_works: async () =>
              await o.e(32436).then(o.t.bind(o, 68634, 17)),
            zen: async () => await o.e(40674).then(o.t.bind(o, 1830, 17)),
            zen_old: async () => await o.e(46128).then(o.t.bind(o, 90157, 17)),
          },
          jp: {
            about_us: async () => await o.e(32609).then(o.t.bind(o, 98982, 17)),
            account: async () => await o.e(8189).then(o.t.bind(o, 58724, 17)),
            ambassador: async () =>
              await o.e(65067).then(o.t.bind(o, 94278, 17)),
            app_whats_new: async () =>
              await o.e(43381).then(o.t.bind(o, 21615, 17)),
            blog_list: async () =>
              await o.e(90797).then(o.t.bind(o, 64130, 17)),
            blog_post: async () =>
              await o.e(20101).then(o.t.bind(o, 31401, 17)),
            brand_identity: async () =>
              await o.e(98258).then(o.t.bind(o, 35348, 17)),
            buy: async () => await o.e(10054).then(o.t.bind(o, 77396, 17)),
            cloud_closed: async () =>
              await o.e(20896).then(o.t.bind(o, 77148, 17)),
            common: async () => await o.e(27316).then(o.t.bind(o, 25530, 17)),
            compare: async () => await o.e(53786).then(o.t.bind(o, 26149, 17)),
            contact: async () => await o.e(27722).then(o.t.bind(o, 37556, 17)),
            demos: async () => await o.e(78124).then(o.t.bind(o, 38116, 17)),
            design_resources: async () =>
              await o.e(43927).then(o.t.bind(o, 36611, 17)),
            download: async () => await o.e(71581).then(o.t.bind(o, 90930, 17)),
            enterprise_form: async () =>
              await o.e(35640).then(o.t.bind(o, 95479, 17)),
            error: async () => await o.e(60410).then(o.t.bind(o, 47349, 17)),
            faq: async () => await o.e(38173).then(o.t.bind(o, 61710, 17)),
            features_2022: async () =>
              await o.e(18182).then(o.t.bind(o, 6349, 17)),
            footer: async () => await o.e(68276).then(o.t.bind(o, 34846, 17)),
            form: async () => await o.e(45214).then(o.t.bind(o, 72065, 17)),
            getting_help: async () =>
              await o.e(17582).then(o.t.bind(o, 43406, 17)),
            gift_card: async () =>
              await o.e(53681).then(o.t.bind(o, 88634, 17)),
            header: async () => await o.e(22499).then(o.t.bind(o, 13373, 17)),
            homepage_2020: async () =>
              await o.e(18208).then(o.t.bind(o, 37180, 17)),
            homepage_2021: async () =>
              await o.e(99451).then(o.t.bind(o, 69915, 17)),
            homepage_2022: async () =>
              await o.e(66901).then(o.t.bind(o, 43912, 17)),
            homepage_2022_new: async () =>
              await o.e(29830).then(o.t.bind(o, 19926, 17)),
            homepage_2024: async () =>
              await o.e(398).then(o.t.bind(o, 41615, 17)),
            join_team: async () =>
              await o.e(55123).then(o.t.bind(o, 80371, 17)),
            join_us: async () => await o.e(89951).then(o.t.bind(o, 10600, 17)),
            learn_more_about: async () =>
              await o.e(54226).then(o.t.bind(o, 85594, 17)),
            logo_guideline: async () =>
              await o.e(48869).then(o.t.bind(o, 29027, 17)),
            mindmapping: async () =>
              await o.e(37317).then(o.t.bind(o, 91e3, 17)),
            mobile: async () => await o.e(86313).then(o.t.bind(o, 90569, 17)),
            my_submissions: async () =>
              await o.e(84978).then(o.t.bind(o, 13534, 17)),
            newsletter: async () =>
              await o.e(99450).then(o.t.bind(o, 91766, 17)),
            page_error: async () =>
              await o.e(37221).then(o.t.bind(o, 24685, 17)),
            partner: async () => await o.e(4089).then(o.t.bind(o, 46498, 17)),
            paywall: async () => await o.e(49916).then(o.t.bind(o, 60022, 17)),
            pitch_mode: async () =>
              await o.e(50003).then(o.t.bind(o, 95555, 17)),
            pricing: async () => await o.e(42295).then(o.t.bind(o, 92034, 17)),
            privacy: async () => await o.e(60351).then(o.t.bind(o, 97929, 17)),
            redeem: async () => await o.e(85081).then(o.t.bind(o, 23864, 17)),
            redirect: async () => await o.e(26712).then(o.t.bind(o, 25211, 17)),
            release_notes: async () =>
              await o.e(94855).then(o.t.bind(o, 42962, 17)),
            rocks: async () => await o.e(20334).then(o.t.bind(o, 68297, 17)),
            share: async () => await o.e(30382).then(o.t.bind(o, 61978, 17)),
            sitemap: async () => await o.e(67474).then(o.t.bind(o, 84025, 17)),
            sme: async () => await o.e(20303).then(o.t.bind(o, 49628, 17)),
            submit_to_gallery: async () =>
              await o.e(52247).then(o.t.bind(o, 31758, 17)),
            term: async () => await o.e(97913).then(o.t.bind(o, 49766, 17)),
            thankyou: async () => await o.e(38091).then(o.t.bind(o, 54693, 17)),
            user_guide: async () =>
              await o.e(96368).then(o.t.bind(o, 30171, 17)),
            video_guide: async () =>
              await o.e(6179).then(o.t.bind(o, 57573, 17)),
            webinar: async () => await o.e(99758).then(o.t.bind(o, 36600, 17)),
            workshop: async () => await o.e(45654).then(o.t.bind(o, 7170, 17)),
            xmind2021: async () =>
              await o.e(73236).then(o.t.bind(o, 71395, 17)),
            xmind2021_beta: async () =>
              await o.e(40657).then(o.t.bind(o, 7732, 17)),
            xmind8: async () => await o.e(67628).then(o.t.bind(o, 38523, 17)),
            xmind_cards: async () =>
              await o.e(13537).then(o.t.bind(o, 73830, 17)),
            xmind_cxm: async () => await o.e(20883).then(o.t.bind(o, 1789, 17)),
            xmind_works: async () =>
              await o.e(90602).then(o.t.bind(o, 77170, 17)),
            zen: async () => await o.e(43689).then(o.t.bind(o, 27756, 17)),
            zen_old: async () => await o.e(68846).then(o.t.bind(o, 66936, 17)),
          },
          global_cn: {
            about_us: async () => await o.e(85123).then(o.t.bind(o, 16056, 17)),
            account: async () => await o.e(5118).then(o.t.bind(o, 75775, 17)),
            ambassador: async () =>
              await o.e(73625).then(o.t.bind(o, 11951, 17)),
            app_whats_new: async () =>
              await o.e(47790).then(o.t.bind(o, 50750, 17)),
            blog_list: async () =>
              await o.e(72370).then(o.t.bind(o, 42813, 17)),
            blog_post: async () =>
              await o.e(15878).then(o.t.bind(o, 56165, 17)),
            brand_identity: async () =>
              await o.e(77126).then(o.t.bind(o, 34651, 17)),
            buy: async () => await o.e(39838).then(o.t.bind(o, 38902, 17)),
            cloud_closed: async () =>
              await o.e(22598).then(o.t.bind(o, 69418, 17)),
            common: async () => await o.e(51054).then(o.t.bind(o, 76062, 17)),
            compare: async () => await o.e(76931).then(o.t.bind(o, 89168, 17)),
            contact: async () => await o.e(8095).then(o.t.bind(o, 66490, 17)),
            demos: async () => await o.e(36812).then(o.t.bind(o, 82264, 17)),
            design_resources: async () =>
              await o.e(44915).then(o.t.bind(o, 69433, 17)),
            download: async () => await o.e(60913).then(o.t.bind(o, 19895, 17)),
            enterprise_form: async () =>
              await o.e(56822).then(o.t.bind(o, 98659, 17)),
            error: async () => await o.e(25322).then(o.t.bind(o, 3843, 17)),
            faq: async () => await o.e(59414).then(o.t.bind(o, 47508, 17)),
            features_2022: async () =>
              await o.e(79513).then(o.t.bind(o, 74219, 17)),
            footer: async () => await o.e(24352).then(o.t.bind(o, 97476, 17)),
            form: async () => await o.e(17426).then(o.t.bind(o, 50431, 17)),
            getting_help: async () =>
              await o.e(27705).then(o.t.bind(o, 58295, 17)),
            gift_card: async () => await o.e(5700).then(o.t.bind(o, 56542, 17)),
            header: async () => await o.e(93535).then(o.t.bind(o, 57586, 17)),
            homepage_2020: async () =>
              await o.e(59207).then(o.t.bind(o, 31876, 17)),
            homepage_2021: async () =>
              await o.e(41855).then(o.t.bind(o, 15706, 17)),
            homepage_2022: async () =>
              await o.e(19731).then(o.t.bind(o, 96792, 17)),
            homepage_2022_new: async () =>
              await o.e(66946).then(o.t.bind(o, 88969, 17)),
            homepage_2024: async () =>
              await o.e(90973).then(o.t.bind(o, 28382, 17)),
            join_team: async () => await o.e(47100).then(o.t.bind(o, 4232, 17)),
            join_us: async () => await o.e(90414).then(o.t.bind(o, 54754, 17)),
            learn_more_about: async () =>
              await o.e(18384).then(o.t.bind(o, 79127, 17)),
            logo_guideline: async () =>
              await o.e(36708).then(o.t.bind(o, 19128, 17)),
            mindmapping: async () =>
              await o.e(74555).then(o.t.bind(o, 35102, 17)),
            mobile: async () => await o.e(66301).then(o.t.bind(o, 67201, 17)),
            my_submissions: async () =>
              await o.e(57478).then(o.t.bind(o, 23475, 17)),
            newsletter: async () =>
              await o.e(54739).then(o.t.bind(o, 49532, 17)),
            page_error: async () =>
              await o.e(38270).then(o.t.bind(o, 51143, 17)),
            partner: async () => await o.e(92547).then(o.t.bind(o, 70400, 17)),
            paywall: async () => await o.e(98856).then(o.t.bind(o, 31396, 17)),
            pitch_mode: async () =>
              await o.e(41284).then(o.t.bind(o, 67081, 17)),
            pricing: async () => await o.e(181).then(o.t.bind(o, 49066, 17)),
            privacy: async () => await o.e(84704).then(o.t.bind(o, 93054, 17)),
            redeem: async () => await o.e(98226).then(o.t.bind(o, 90510, 17)),
            redirect: async () => await o.e(7458).then(o.t.bind(o, 41250, 17)),
            release_notes: async () =>
              await o.e(35494).then(o.t.bind(o, 23524, 17)),
            rocks: async () => await o.e(61496).then(o.t.bind(o, 60127, 17)),
            share: async () => await o.e(50308).then(o.t.bind(o, 8520, 17)),
            sitemap: async () => await o.e(32345).then(o.t.bind(o, 60948, 17)),
            sme: async () => await o.e(53128).then(o.t.bind(o, 65555, 17)),
            submit_to_gallery: async () =>
              await o.e(58368).then(o.t.bind(o, 14e3, 17)),
            term: async () => await o.e(76274).then(o.t.bind(o, 77766, 17)),
            thankyou: async () => await o.e(18374).then(o.t.bind(o, 93722, 17)),
            user_guide: async () =>
              await o.e(32498).then(o.t.bind(o, 9405, 17)),
            video_guide: async () =>
              await o.e(55471).then(o.t.bind(o, 13229, 17)),
            webinar: async () => await o.e(8426).then(o.t.bind(o, 40800, 17)),
            workshop: async () => await o.e(69961).then(o.t.bind(o, 83808, 17)),
            xmind2021: async () =>
              await o.e(46601).then(o.t.bind(o, 41795, 17)),
            xmind2021_beta: async () =>
              await o.e(16798).then(o.t.bind(o, 65010, 17)),
            xmind8: async () => await o.e(39612).then(o.t.bind(o, 72103, 17)),
            xmind_cards: async () =>
              await o.e(4397).then(o.t.bind(o, 60669, 17)),
            xmind_cxm: async () =>
              await o.e(98564).then(o.t.bind(o, 76554, 17)),
            xmind_works: async () =>
              await o.e(74040).then(o.t.bind(o, 56460, 17)),
            zen: async () => await o.e(58604).then(o.t.bind(o, 8619, 17)),
            zen_old: async () => await o.e(52770).then(o.t.bind(o, 24202, 17)),
          },
          zh_tw: {
            about_us: async () => await o.e(1633).then(o.t.bind(o, 38422, 17)),
            account: async () => await o.e(21754).then(o.t.bind(o, 77011, 17)),
            ambassador: async () =>
              await o.e(92638).then(o.t.bind(o, 84001, 17)),
            app_whats_new: async () =>
              await o.e(54330).then(o.t.bind(o, 75096, 17)),
            blog_list: async () =>
              await o.e(12345).then(o.t.bind(o, 17838, 17)),
            blog_post: async () =>
              await o.e(59570).then(o.t.bind(o, 69302, 17)),
            brand_identity: async () =>
              await o.e(19949).then(o.t.bind(o, 18391, 17)),
            buy: async () => await o.e(71405).then(o.t.bind(o, 36029, 17)),
            cloud_closed: async () =>
              await o.e(39054).then(o.t.bind(o, 72714, 17)),
            common: async () => await o.e(55165).then(o.t.bind(o, 57909, 17)),
            compare: async () => await o.e(78877).then(o.t.bind(o, 29153, 17)),
            contact: async () => await o.e(82104).then(o.t.bind(o, 62860, 17)),
            demos: async () => await o.e(23955).then(o.t.bind(o, 13220, 17)),
            design_resources: async () =>
              await o.e(75159).then(o.t.bind(o, 2202, 17)),
            download: async () => await o.e(78566).then(o.t.bind(o, 41019, 17)),
            enterprise_form: async () =>
              await o.e(68013).then(o.t.bind(o, 71511, 17)),
            error: async () => await o.e(28567).then(o.t.bind(o, 97047, 17)),
            faq: async () => await o.e(58767).then(o.t.bind(o, 64416, 17)),
            features_2022: async () =>
              await o.e(17828).then(o.t.bind(o, 45785, 17)),
            footer: async () => await o.e(5929).then(o.t.bind(o, 28843, 17)),
            form: async () => await o.e(72638).then(o.t.bind(o, 81606, 17)),
            getting_help: async () =>
              await o.e(45456).then(o.t.bind(o, 67241, 17)),
            gift_card: async () => await o.e(3168).then(o.t.bind(o, 90964, 17)),
            header: async () => await o.e(75188).then(o.t.bind(o, 5160, 17)),
            homepage_2020: async () =>
              await o.e(22768).then(o.t.bind(o, 3099, 17)),
            homepage_2021: async () =>
              await o.e(29191).then(o.t.bind(o, 38300, 17)),
            homepage_2022: async () =>
              await o.e(12774).then(o.t.bind(o, 34130, 17)),
            homepage_2022_new: async () =>
              await o.e(15159).then(o.t.bind(o, 18581, 17)),
            homepage_2024: async () =>
              await o.e(17894).then(o.t.bind(o, 23564, 17)),
            join_team: async () =>
              await o.e(31248).then(o.t.bind(o, 89565, 17)),
            join_us: async () => await o.e(43468).then(o.t.bind(o, 58661, 17)),
            learn_more_about: async () =>
              await o.e(91591).then(o.t.bind(o, 89023, 17)),
            logo_guideline: async () =>
              await o.e(97134).then(o.t.bind(o, 49113, 17)),
            mindmapping: async () =>
              await o.e(43548).then(o.t.bind(o, 49294, 17)),
            mobile: async () => await o.e(53153).then(o.t.bind(o, 22926, 17)),
            my_submissions: async () =>
              await o.e(8764).then(o.t.bind(o, 68175, 17)),
            newsletter: async () =>
              await o.e(33210).then(o.t.bind(o, 39889, 17)),
            page_error: async () =>
              await o.e(21305).then(o.t.bind(o, 34304, 17)),
            partner: async () => await o.e(21220).then(o.t.bind(o, 15916, 17)),
            paywall: async () => await o.e(95507).then(o.t.bind(o, 3749, 17)),
            pitch_mode: async () =>
              await o.e(64363).then(o.t.bind(o, 46481, 17)),
            pricing: async () => await o.e(58412).then(o.t.bind(o, 20951, 17)),
            privacy: async () => await o.e(69920).then(o.t.bind(o, 14282, 17)),
            redeem: async () => await o.e(29221).then(o.t.bind(o, 27982, 17)),
            redirect: async () => await o.e(65193).then(o.t.bind(o, 9767, 17)),
            release_notes: async () =>
              await o.e(89500).then(o.t.bind(o, 93842, 17)),
            rocks: async () => await o.e(81507).then(o.t.bind(o, 45141, 17)),
            share: async () => await o.e(96038).then(o.t.bind(o, 59021, 17)),
            sitemap: async () => await o.e(95630).then(o.t.bind(o, 64731, 17)),
            sme: async () => await o.e(55489).then(o.t.bind(o, 54065, 17)),
            submit_to_gallery: async () =>
              await o.e(60259).then(o.t.bind(o, 65158, 17)),
            term: async () => await o.e(32152).then(o.t.bind(o, 42473, 17)),
            thankyou: async () => await o.e(85169).then(o.t.bind(o, 77435, 17)),
            user_guide: async () =>
              await o.e(76640).then(o.t.bind(o, 42379, 17)),
            video_guide: async () =>
              await o.e(67892).then(o.t.bind(o, 14803, 17)),
            webinar: async () => await o.e(20688).then(o.t.bind(o, 82154, 17)),
            workshop: async () => await o.e(42299).then(o.t.bind(o, 18611, 17)),
            xmind2021: async () =>
              await o.e(19284).then(o.t.bind(o, 64297, 17)),
            xmind2021_beta: async () =>
              await o.e(29598).then(o.t.bind(o, 4994, 17)),
            xmind8: async () => await o.e(62464).then(o.t.bind(o, 94923, 17)),
            xmind_cards: async () =>
              await o.e(74551).then(o.t.bind(o, 81519, 17)),
            xmind_cxm: async () =>
              await o.e(26194).then(o.t.bind(o, 63898, 17)),
            xmind_works: async () =>
              await o.e(87818).then(o.t.bind(o, 28573, 17)),
            zen: async () => await o.e(55331).then(o.t.bind(o, 31442, 17)),
            zen_old: async () => await o.e(79275).then(o.t.bind(o, 38983, 17)),
          },
          es: {
            about_us: async () => await o.e(15821).then(o.t.bind(o, 70993, 17)),
            account: async () => await o.e(50723).then(o.t.bind(o, 14220, 17)),
            ambassador: async () =>
              await o.e(85147).then(o.t.bind(o, 52794, 17)),
            app_whats_new: async () =>
              await o.e(7341).then(o.t.bind(o, 81767, 17)),
            blog_list: async () =>
              await o.e(95082).then(o.t.bind(o, 33499, 17)),
            blog_post: async () =>
              await o.e(34367).then(o.t.bind(o, 81694, 17)),
            brand_identity: async () =>
              await o.e(17363).then(o.t.bind(o, 17158, 17)),
            buy: async () => await o.e(28218).then(o.t.bind(o, 87117, 17)),
            cloud_closed: async () =>
              await o.e(23418).then(o.t.bind(o, 20212, 17)),
            common: async () => await o.e(54236).then(o.t.bind(o, 44501, 17)),
            compare: async () => await o.e(33648).then(o.t.bind(o, 11199, 17)),
            contact: async () => await o.e(41199).then(o.t.bind(o, 3989, 17)),
            demos: async () => await o.e(87803).then(o.t.bind(o, 81287, 17)),
            design_resources: async () =>
              await o.e(17296).then(o.t.bind(o, 10373, 17)),
            download: async () => await o.e(34771).then(o.t.bind(o, 3874, 17)),
            enterprise_form: async () =>
              await o.e(45787).then(o.t.bind(o, 42296, 17)),
            error: async () => await o.e(62404).then(o.t.bind(o, 40909, 17)),
            faq: async () => await o.e(69079).then(o.t.bind(o, 44863, 17)),
            features_2022: async () =>
              await o.e(79006).then(o.t.bind(o, 99539, 17)),
            footer: async () => await o.e(39506).then(o.t.bind(o, 38980, 17)),
            form: async () => await o.e(93129).then(o.t.bind(o, 94208, 17)),
            getting_help: async () =>
              await o.e(51175).then(o.t.bind(o, 20690, 17)),
            gift_card: async () =>
              await o.e(50511).then(o.t.bind(o, 27869, 17)),
            header: async () => await o.e(87882).then(o.t.bind(o, 19929, 17)),
            homepage_2020: async () =>
              await o.e(8321).then(o.t.bind(o, 53022, 17)),
            homepage_2021: async () =>
              await o.e(99018).then(o.t.bind(o, 70190, 17)),
            homepage_2022: async () =>
              await o.e(98119).then(o.t.bind(o, 72624, 17)),
            homepage_2022_new: async () =>
              await o.e(52697).then(o.t.bind(o, 76101, 17)),
            homepage_2024: async () =>
              await o.e(8714).then(o.t.bind(o, 14832, 17)),
            join_team: async () =>
              await o.e(82335).then(o.t.bind(o, 55053, 17)),
            join_us: async () => await o.e(94062).then(o.t.bind(o, 91004, 17)),
            learn_more_about: async () =>
              await o.e(46192).then(o.t.bind(o, 1413, 17)),
            logo_guideline: async () =>
              await o.e(64229).then(o.t.bind(o, 13655, 17)),
            mindmapping: async () =>
              await o.e(74258).then(o.t.bind(o, 32629, 17)),
            mobile: async () => await o.e(31575).then(o.t.bind(o, 31932, 17)),
            my_submissions: async () =>
              await o.e(93002).then(o.t.bind(o, 75873, 17)),
            newsletter: async () =>
              await o.e(3440).then(o.t.bind(o, 88773, 17)),
            page_error: async () =>
              await o.e(40659).then(o.t.bind(o, 62346, 17)),
            partner: async () => await o.e(94336).then(o.t.bind(o, 32144, 17)),
            paywall: async () => await o.e(69938).then(o.t.bind(o, 89040, 17)),
            pitch_mode: async () =>
              await o.e(53597).then(o.t.bind(o, 91198, 17)),
            pricing: async () => await o.e(4495).then(o.t.bind(o, 78824, 17)),
            privacy: async () => await o.e(90908).then(o.t.bind(o, 57395, 17)),
            redeem: async () => await o.e(35622).then(o.t.bind(o, 47221, 17)),
            redirect: async () => await o.e(42995).then(o.t.bind(o, 44955, 17)),
            release_notes: async () =>
              await o.e(35782).then(o.t.bind(o, 44466, 17)),
            rocks: async () => await o.e(92101).then(o.t.bind(o, 4912, 17)),
            share: async () => await o.e(53804).then(o.t.bind(o, 72531, 17)),
            sitemap: async () => await o.e(29343).then(o.t.bind(o, 79657, 17)),
            sme: async () => await o.e(93051).then(o.t.bind(o, 73073, 17)),
            submit_to_gallery: async () =>
              await o.e(88175).then(o.t.bind(o, 71474, 17)),
            term: async () => await o.e(43865).then(o.t.bind(o, 69485, 17)),
            thankyou: async () => await o.e(87592).then(o.t.bind(o, 13303, 17)),
            user_guide: async () =>
              await o.e(3689).then(o.t.bind(o, 14141, 17)),
            video_guide: async () =>
              await o.e(84577).then(o.t.bind(o, 90348, 17)),
            webinar: async () => await o.e(33887).then(o.t.bind(o, 61870, 17)),
            workshop: async () => await o.e(28213).then(o.t.bind(o, 95974, 17)),
            xmind2021: async () =>
              await o.e(43950).then(o.t.bind(o, 66864, 17)),
            xmind2021_beta: async () =>
              await o.e(97210).then(o.t.bind(o, 48134, 17)),
            xmind8: async () => await o.e(13399).then(o.t.bind(o, 44159, 17)),
            xmind_cards: async () =>
              await o.e(48468).then(o.t.bind(o, 54460, 17)),
            xmind_cxm: async () => await o.e(86768).then(o.t.bind(o, 6272, 17)),
            xmind_works: async () =>
              await o.e(95226).then(o.t.bind(o, 91154, 17)),
            zen: async () => await o.e(36751).then(o.t.bind(o, 63260, 17)),
            zen_old: async () => await o.e(74058).then(o.t.bind(o, 59957, 17)),
          },
          id: {
            about_us: async () => await o.e(76414).then(o.t.bind(o, 76465, 17)),
            account: async () => await o.e(35418).then(o.t.bind(o, 71085, 17)),
            ambassador: async () => await o.e(3495).then(o.t.bind(o, 2092, 17)),
            app_whats_new: async () =>
              await o.e(38838).then(o.t.bind(o, 63234, 17)),
            blog_list: async () => await o.e(85866).then(o.t.bind(o, 861, 17)),
            blog_post: async () =>
              await o.e(65267).then(o.t.bind(o, 30757, 17)),
            brand_identity: async () =>
              await o.e(61780).then(o.t.bind(o, 264, 17)),
            buy: async () => await o.e(93361).then(o.t.bind(o, 15618, 17)),
            cloud_closed: async () =>
              await o.e(74920).then(o.t.bind(o, 37972, 17)),
            common: async () => await o.e(2763).then(o.t.bind(o, 76471, 17)),
            compare: async () => await o.e(48572).then(o.t.bind(o, 54221, 17)),
            contact: async () => await o.e(84221).then(o.t.bind(o, 11556, 17)),
            demos: async () => await o.e(76042).then(o.t.bind(o, 31118, 17)),
            design_resources: async () =>
              await o.e(70715).then(o.t.bind(o, 15447, 17)),
            download: async () => await o.e(95383).then(o.t.bind(o, 22552, 17)),
            enterprise_form: async () =>
              await o.e(80710).then(o.t.bind(o, 90474, 17)),
            error: async () => await o.e(54143).then(o.t.bind(o, 47133, 17)),
            faq: async () => await o.e(53083).then(o.t.bind(o, 70342, 17)),
            features_2022: async () =>
              await o.e(62440).then(o.t.bind(o, 95076, 17)),
            footer: async () => await o.e(76706).then(o.t.bind(o, 63524, 17)),
            form: async () => await o.e(44258).then(o.t.bind(o, 83542, 17)),
            getting_help: async () =>
              await o.e(30424).then(o.t.bind(o, 94881, 17)),
            gift_card: async () =>
              await o.e(62046).then(o.t.bind(o, 89440, 17)),
            header: async () => await o.e(79556).then(o.t.bind(o, 36225, 17)),
            homepage_2020: async () =>
              await o.e(47167).then(o.t.bind(o, 84942, 17)),
            homepage_2021: async () =>
              await o.e(95733).then(o.t.bind(o, 48529, 17)),
            homepage_2022: async () =>
              await o.e(74462).then(o.t.bind(o, 67518, 17)),
            homepage_2022_new: async () =>
              await o.e(58605).then(o.t.bind(o, 67289, 17)),
            homepage_2024: async () =>
              await o.e(52296).then(o.t.bind(o, 61324, 17)),
            join_team: async () =>
              await o.e(83937).then(o.t.bind(o, 87861, 17)),
            join_us: async () => await o.e(92767).then(o.t.bind(o, 18854, 17)),
            learn_more_about: async () =>
              await o.e(68246).then(o.t.bind(o, 21697, 17)),
            logo_guideline: async () =>
              await o.e(44743).then(o.t.bind(o, 23460, 17)),
            mindmapping: async () =>
              await o.e(6532).then(o.t.bind(o, 82709, 17)),
            mobile: async () => await o.e(88876).then(o.t.bind(o, 19312, 17)),
            my_submissions: async () =>
              await o.e(39238).then(o.t.bind(o, 89562, 17)),
            newsletter: async () =>
              await o.e(27856).then(o.t.bind(o, 46577, 17)),
            page_error: async () =>
              await o.e(98265).then(o.t.bind(o, 52579, 17)),
            partner: async () => await o.e(64586).then(o.t.bind(o, 56801, 17)),
            paywall: async () => await o.e(68474).then(o.t.bind(o, 84813, 17)),
            pitch_mode: async () =>
              await o.e(98568).then(o.t.bind(o, 22386, 17)),
            pricing: async () => await o.e(20107).then(o.t.bind(o, 20933, 17)),
            privacy: async () => await o.e(96474).then(o.t.bind(o, 39491, 17)),
            redeem: async () => await o.e(64156).then(o.t.bind(o, 72875, 17)),
            redirect: async () => await o.e(67820).then(o.t.bind(o, 70078, 17)),
            release_notes: async () =>
              await o.e(32597).then(o.t.bind(o, 27698, 17)),
            rocks: async () => await o.e(20681).then(o.t.bind(o, 14911, 17)),
            share: async () => await o.e(33386).then(o.t.bind(o, 82478, 17)),
            sitemap: async () => await o.e(65300).then(o.t.bind(o, 10930, 17)),
            sme: async () => await o.e(74009).then(o.t.bind(o, 25217, 17)),
            submit_to_gallery: async () =>
              await o.e(2439).then(o.t.bind(o, 83019, 17)),
            term: async () => await o.e(3966).then(o.t.bind(o, 5598, 17)),
            thankyou: async () => await o.e(60387).then(o.t.bind(o, 3910, 17)),
            user_guide: async () =>
              await o.e(67980).then(o.t.bind(o, 98041, 17)),
            video_guide: async () =>
              await o.e(80201).then(o.t.bind(o, 246, 17)),
            webinar: async () => await o.e(19836).then(o.t.bind(o, 72636, 17)),
            workshop: async () => await o.e(82487).then(o.t.bind(o, 61445, 17)),
            xmind2021: async () =>
              await o.e(40822).then(o.t.bind(o, 40483, 17)),
            xmind2021_beta: async () =>
              await o.e(77254).then(o.t.bind(o, 19960, 17)),
            xmind8: async () => await o.e(16388).then(o.t.bind(o, 33645, 17)),
            xmind_cards: async () =>
              await o.e(35482).then(o.t.bind(o, 60137, 17)),
            xmind_cxm: async () =>
              await o.e(27579).then(o.t.bind(o, 75869, 17)),
            xmind_works: async () =>
              await o.e(96009).then(o.t.bind(o, 32791, 17)),
            zen: async () => await o.e(1960).then(o.t.bind(o, 45903, 17)),
            zen_old: async () => await o.e(61918).then(o.t.bind(o, 39869, 17)),
          },
          it: {
            about_us: async () => await o.e(1313).then(o.t.bind(o, 30582, 17)),
            account: async () => await o.e(75365).then(o.t.bind(o, 68251, 17)),
            ambassador: async () =>
              await o.e(79853).then(o.t.bind(o, 41666, 17)),
            app_whats_new: async () =>
              await o.e(30218).then(o.t.bind(o, 65673, 17)),
            blog_list: async () =>
              await o.e(12781).then(o.t.bind(o, 58695, 17)),
            blog_post: async () =>
              await o.e(80234).then(o.t.bind(o, 57163, 17)),
            brand_identity: async () =>
              await o.e(90936).then(o.t.bind(o, 29444, 17)),
            buy: async () => await o.e(15890).then(o.t.bind(o, 43174, 17)),
            cloud_closed: async () =>
              await o.e(62020).then(o.t.bind(o, 74853, 17)),
            common: async () => await o.e(44186).then(o.t.bind(o, 27044, 17)),
            compare: async () => await o.e(55820).then(o.t.bind(o, 78009, 17)),
            contact: async () => await o.e(52825).then(o.t.bind(o, 28410, 17)),
            demos: async () => await o.e(50780).then(o.t.bind(o, 5133, 17)),
            design_resources: async () =>
              await o.e(35125).then(o.t.bind(o, 651, 17)),
            download: async () => await o.e(16222).then(o.t.bind(o, 45496, 17)),
            enterprise_form: async () =>
              await o.e(19760).then(o.t.bind(o, 35983, 17)),
            error: async () => await o.e(91092).then(o.t.bind(o, 87297, 17)),
            faq: async () => await o.e(55164).then(o.t.bind(o, 72567, 17)),
            features_2022: async () =>
              await o.e(14123).then(o.t.bind(o, 72607, 17)),
            footer: async () => await o.e(58887).then(o.t.bind(o, 29366, 17)),
            form: async () => await o.e(70322).then(o.t.bind(o, 67361, 17)),
            getting_help: async () =>
              await o.e(53016).then(o.t.bind(o, 52913, 17)),
            gift_card: async () =>
              await o.e(43834).then(o.t.bind(o, 16780, 17)),
            header: async () => await o.e(76055).then(o.t.bind(o, 57725, 17)),
            homepage_2020: async () =>
              await o.e(52219).then(o.t.bind(o, 12868, 17)),
            homepage_2021: async () =>
              await o.e(27053).then(o.t.bind(o, 80260, 17)),
            homepage_2022: async () =>
              await o.e(3225).then(o.t.bind(o, 68538, 17)),
            homepage_2022_new: async () =>
              await o.e(52746).then(o.t.bind(o, 52848, 17)),
            homepage_2024: async () =>
              await o.e(81734).then(o.t.bind(o, 17410, 17)),
            join_team: async () =>
              await o.e(18263).then(o.t.bind(o, 41110, 17)),
            join_us: async () => await o.e(61533).then(o.t.bind(o, 80564, 17)),
            learn_more_about: async () =>
              await o.e(75993).then(o.t.bind(o, 64947, 17)),
            logo_guideline: async () =>
              await o.e(59905).then(o.t.bind(o, 58111, 17)),
            mindmapping: async () =>
              await o.e(33935).then(o.t.bind(o, 88546, 17)),
            mobile: async () => await o.e(65956).then(o.t.bind(o, 5031, 17)),
            my_submissions: async () =>
              await o.e(75288).then(o.t.bind(o, 38255, 17)),
            newsletter: async () =>
              await o.e(35503).then(o.t.bind(o, 39327, 17)),
            page_error: async () =>
              await o.e(50062).then(o.t.bind(o, 37118, 17)),
            partner: async () => await o.e(71512).then(o.t.bind(o, 57178, 17)),
            paywall: async () => await o.e(78783).then(o.t.bind(o, 59518, 17)),
            pitch_mode: async () =>
              await o.e(30575).then(o.t.bind(o, 34116, 17)),
            pricing: async () => await o.e(70569).then(o.t.bind(o, 7317, 17)),
            privacy: async () => await o.e(53159).then(o.t.bind(o, 55273, 17)),
            redeem: async () => await o.e(60460).then(o.t.bind(o, 39258, 17)),
            redirect: async () => await o.e(50630).then(o.t.bind(o, 37909, 17)),
            release_notes: async () =>
              await o.e(36286).then(o.t.bind(o, 47242, 17)),
            rocks: async () => await o.e(32475).then(o.t.bind(o, 97237, 17)),
            share: async () => await o.e(31760).then(o.t.bind(o, 54831, 17)),
            sitemap: async () => await o.e(48965).then(o.t.bind(o, 98789, 17)),
            sme: async () => await o.e(44653).then(o.t.bind(o, 62758, 17)),
            submit_to_gallery: async () =>
              await o.e(61877).then(o.t.bind(o, 30154, 17)),
            term: async () => await o.e(31720).then(o.t.bind(o, 46238, 17)),
            thankyou: async () => await o.e(98611).then(o.t.bind(o, 69811, 17)),
            user_guide: async () =>
              await o.e(68488).then(o.t.bind(o, 4927, 17)),
            video_guide: async () =>
              await o.e(57570).then(o.t.bind(o, 63054, 17)),
            webinar: async () => await o.e(88320).then(o.t.bind(o, 1786, 17)),
            workshop: async () => await o.e(81866).then(o.t.bind(o, 89214, 17)),
            xmind2021: async () =>
              await o.e(36411).then(o.t.bind(o, 78951, 17)),
            xmind2021_beta: async () =>
              await o.e(89052).then(o.t.bind(o, 59932, 17)),
            xmind8: async () => await o.e(81362).then(o.t.bind(o, 57555, 17)),
            xmind_cards: async () =>
              await o.e(9861).then(o.t.bind(o, 37973, 17)),
            xmind_cxm: async () =>
              await o.e(45993).then(o.t.bind(o, 98286, 17)),
            xmind_works: async () =>
              await o.e(87271).then(o.t.bind(o, 21662, 17)),
            zen: async () => await o.e(72864).then(o.t.bind(o, 21148, 17)),
            zen_old: async () => await o.e(41233).then(o.t.bind(o, 59396, 17)),
          },
          ko: {
            about_us: async () => await o.e(35091).then(o.t.bind(o, 81678, 17)),
            account: async () => await o.e(86729).then(o.t.bind(o, 84998, 17)),
            ambassador: async () =>
              await o.e(29334).then(o.t.bind(o, 89154, 17)),
            app_whats_new: async () =>
              await o.e(34539).then(o.t.bind(o, 61564, 17)),
            blog_list: async () =>
              await o.e(84578).then(o.t.bind(o, 51415, 17)),
            blog_post: async () =>
              await o.e(19391).then(o.t.bind(o, 52250, 17)),
            brand_identity: async () =>
              await o.e(65327).then(o.t.bind(o, 62192, 17)),
            buy: async () => await o.e(85701).then(o.t.bind(o, 35446, 17)),
            cloud_closed: async () =>
              await o.e(61196).then(o.t.bind(o, 49512, 17)),
            common: async () => await o.e(9514).then(o.t.bind(o, 7629, 17)),
            compare: async () => await o.e(88327).then(o.t.bind(o, 81729, 17)),
            contact: async () => await o.e(36399).then(o.t.bind(o, 52925, 17)),
            demos: async () => await o.e(46563).then(o.t.bind(o, 44745, 17)),
            design_resources: async () =>
              await o.e(4661).then(o.t.bind(o, 70233, 17)),
            download: async () => await o.e(20990).then(o.t.bind(o, 20304, 17)),
            enterprise_form: async () =>
              await o.e(10226).then(o.t.bind(o, 58356, 17)),
            error: async () => await o.e(34612).then(o.t.bind(o, 38908, 17)),
            faq: async () => await o.e(62835).then(o.t.bind(o, 12917, 17)),
            features_2022: async () =>
              await o.e(61777).then(o.t.bind(o, 65489, 17)),
            footer: async () => await o.e(57035).then(o.t.bind(o, 43806, 17)),
            form: async () => await o.e(84202).then(o.t.bind(o, 25146, 17)),
            getting_help: async () =>
              await o.e(89962).then(o.t.bind(o, 95718, 17)),
            gift_card: async () =>
              await o.e(58754).then(o.t.bind(o, 52136, 17)),
            header: async () => await o.e(34695).then(o.t.bind(o, 23740, 17)),
            homepage_2020: async () =>
              await o.e(22846).then(o.t.bind(o, 20654, 17)),
            homepage_2021: async () =>
              await o.e(67633).then(o.t.bind(o, 59481, 17)),
            homepage_2022: async () =>
              await o.e(92714).then(o.t.bind(o, 93525, 17)),
            homepage_2022_new: async () =>
              await o.e(90637).then(o.t.bind(o, 46511, 17)),
            homepage_2024: async () =>
              await o.e(33442).then(o.t.bind(o, 6871, 17)),
            join_team: async () =>
              await o.e(23155).then(o.t.bind(o, 92259, 17)),
            join_us: async () => await o.e(22965).then(o.t.bind(o, 63482, 17)),
            learn_more_about: async () =>
              await o.e(2131).then(o.t.bind(o, 94767, 17)),
            logo_guideline: async () =>
              await o.e(59098).then(o.t.bind(o, 69332, 17)),
            mindmapping: async () =>
              await o.e(8460).then(o.t.bind(o, 1598, 17)),
            mobile: async () => await o.e(41170).then(o.t.bind(o, 89131, 17)),
            my_submissions: async () =>
              await o.e(13364).then(o.t.bind(o, 9141, 17)),
            newsletter: async () =>
              await o.e(26039).then(o.t.bind(o, 30533, 17)),
            page_error: async () =>
              await o.e(29908).then(o.t.bind(o, 4344, 17)),
            partner: async () => await o.e(92539).then(o.t.bind(o, 55121, 17)),
            paywall: async () => await o.e(39553).then(o.t.bind(o, 94724, 17)),
            pitch_mode: async () =>
              await o.e(57575).then(o.t.bind(o, 41131, 17)),
            pricing: async () => await o.e(68263).then(o.t.bind(o, 23781, 17)),
            privacy: async () => await o.e(69211).then(o.t.bind(o, 28055, 17)),
            redeem: async () => await o.e(26974).then(o.t.bind(o, 63387, 17)),
            redirect: async () => await o.e(46012).then(o.t.bind(o, 99826, 17)),
            release_notes: async () =>
              await o.e(50247).then(o.t.bind(o, 90421, 17)),
            rocks: async () => await o.e(14623).then(o.t.bind(o, 45185, 17)),
            share: async () => await o.e(82861).then(o.t.bind(o, 78622, 17)),
            sitemap: async () => await o.e(10316).then(o.t.bind(o, 56830, 17)),
            sme: async () => await o.e(31428).then(o.t.bind(o, 64746, 17)),
            submit_to_gallery: async () =>
              await o.e(83931).then(o.t.bind(o, 26371, 17)),
            term: async () => await o.e(97608).then(o.t.bind(o, 51188, 17)),
            thankyou: async () => await o.e(47686).then(o.t.bind(o, 15869, 17)),
            user_guide: async () =>
              await o.e(30116).then(o.t.bind(o, 25284, 17)),
            video_guide: async () =>
              await o.e(23208).then(o.t.bind(o, 39710, 17)),
            webinar: async () => await o.e(58218).then(o.t.bind(o, 31483, 17)),
            workshop: async () => await o.e(48864).then(o.t.bind(o, 6186, 17)),
            xmind2021: async () =>
              await o.e(78764).then(o.t.bind(o, 40928, 17)),
            xmind2021_beta: async () =>
              await o.e(92226).then(o.t.bind(o, 19805, 17)),
            xmind8: async () => await o.e(51980).then(o.t.bind(o, 79768, 17)),
            xmind_cards: async () =>
              await o.e(40118).then(o.t.bind(o, 45444, 17)),
            xmind_cxm: async () =>
              await o.e(47963).then(o.t.bind(o, 46735, 17)),
            xmind_works: async () =>
              await o.e(42225).then(o.t.bind(o, 95144, 17)),
            zen: async () => await o.e(81252).then(o.t.bind(o, 30822, 17)),
            zen_old: async () => await o.e(77864).then(o.t.bind(o, 8543, 17)),
          },
          pt: {
            about_us: async () => await o.e(71500).then(o.t.bind(o, 68535, 17)),
            account: async () => await o.e(34645).then(o.t.bind(o, 89843, 17)),
            ambassador: async () =>
              await o.e(91731).then(o.t.bind(o, 48863, 17)),
            app_whats_new: async () =>
              await o.e(10085).then(o.t.bind(o, 8861, 17)),
            blog_list: async () =>
              await o.e(41672).then(o.t.bind(o, 47645, 17)),
            blog_post: async () =>
              await o.e(23141).then(o.t.bind(o, 31828, 17)),
            brand_identity: async () =>
              await o.e(66064).then(o.t.bind(o, 63518, 17)),
            buy: async () => await o.e(15636).then(o.t.bind(o, 44954, 17)),
            cloud_closed: async () =>
              await o.e(99358).then(o.t.bind(o, 72605, 17)),
            common: async () => await o.e(88709).then(o.t.bind(o, 25137, 17)),
            compare: async () => await o.e(33788).then(o.t.bind(o, 93444, 17)),
            contact: async () => await o.e(78852).then(o.t.bind(o, 44309, 17)),
            demos: async () => await o.e(88489).then(o.t.bind(o, 23324, 17)),
            design_resources: async () =>
              await o.e(73021).then(o.t.bind(o, 13446, 17)),
            download: async () => await o.e(28986).then(o.t.bind(o, 20118, 17)),
            enterprise_form: async () =>
              await o.e(52349).then(o.t.bind(o, 18158, 17)),
            error: async () => await o.e(24624).then(o.t.bind(o, 33653, 17)),
            faq: async () => await o.e(25279).then(o.t.bind(o, 83277, 17)),
            features_2022: async () =>
              await o.e(21666).then(o.t.bind(o, 28042, 17)),
            footer: async () => await o.e(39931).then(o.t.bind(o, 98986, 17)),
            form: async () => await o.e(6938).then(o.t.bind(o, 45810, 17)),
            getting_help: async () =>
              await o.e(4106).then(o.t.bind(o, 53993, 17)),
            gift_card: async () => await o.e(90551).then(o.t.bind(o, 4159, 17)),
            header: async () => await o.e(35603).then(o.t.bind(o, 61111, 17)),
            homepage_2020: async () =>
              await o.e(1468).then(o.t.bind(o, 16443, 17)),
            homepage_2021: async () =>
              await o.e(29239).then(o.t.bind(o, 29689, 17)),
            homepage_2022: async () =>
              await o.e(77381).then(o.t.bind(o, 90580, 17)),
            homepage_2022_new: async () =>
              await o.e(11106).then(o.t.bind(o, 14691, 17)),
            homepage_2024: async () =>
              await o.e(23489).then(o.t.bind(o, 65635, 17)),
            join_team: async () =>
              await o.e(85266).then(o.t.bind(o, 65168, 17)),
            join_us: async () => await o.e(17119).then(o.t.bind(o, 52958, 17)),
            learn_more_about: async () =>
              await o.e(30757).then(o.t.bind(o, 38166, 17)),
            logo_guideline: async () =>
              await o.e(66734).then(o.t.bind(o, 27923, 17)),
            mindmapping: async () =>
              await o.e(50172).then(o.t.bind(o, 89702, 17)),
            mobile: async () => await o.e(15551).then(o.t.bind(o, 6696, 17)),
            my_submissions: async () =>
              await o.e(59245).then(o.t.bind(o, 30484, 17)),
            newsletter: async () =>
              await o.e(21997).then(o.t.bind(o, 65411, 17)),
            page_error: async () =>
              await o.e(5599).then(o.t.bind(o, 99218, 17)),
            partner: async () => await o.e(56688).then(o.t.bind(o, 19776, 17)),
            paywall: async () => await o.e(94248).then(o.t.bind(o, 3087, 17)),
            pitch_mode: async () =>
              await o.e(33148).then(o.t.bind(o, 74822, 17)),
            pricing: async () => await o.e(92581).then(o.t.bind(o, 89071, 17)),
            privacy: async () => await o.e(83223).then(o.t.bind(o, 65835, 17)),
            redeem: async () => await o.e(53254).then(o.t.bind(o, 93796, 17)),
            redirect: async () => await o.e(22512).then(o.t.bind(o, 39528, 17)),
            release_notes: async () =>
              await o.e(54080).then(o.t.bind(o, 50125, 17)),
            rocks: async () => await o.e(16072).then(o.t.bind(o, 86098, 17)),
            share: async () => await o.e(82478).then(o.t.bind(o, 80694, 17)),
            sitemap: async () => await o.e(54776).then(o.t.bind(o, 95192, 17)),
            sme: async () => await o.e(34722).then(o.t.bind(o, 94878, 17)),
            submit_to_gallery: async () =>
              await o.e(96574).then(o.t.bind(o, 39193, 17)),
            term: async () => await o.e(36077).then(o.t.bind(o, 61015, 17)),
            thankyou: async () => await o.e(77754).then(o.t.bind(o, 26654, 17)),
            user_guide: async () =>
              await o.e(96775).then(o.t.bind(o, 40467, 17)),
            video_guide: async () =>
              await o.e(42943).then(o.t.bind(o, 10645, 17)),
            webinar: async () => await o.e(74494).then(o.t.bind(o, 30769, 17)),
            workshop: async () => await o.e(65201).then(o.t.bind(o, 43282, 17)),
            xmind2021: async () =>
              await o.e(99992).then(o.t.bind(o, 73546, 17)),
            xmind2021_beta: async () =>
              await o.e(35129).then(o.t.bind(o, 38559, 17)),
            xmind8: async () => await o.e(69684).then(o.t.bind(o, 82094, 17)),
            xmind_cards: async () =>
              await o.e(44397).then(o.t.bind(o, 68980, 17)),
            xmind_cxm: async () =>
              await o.e(55354).then(o.t.bind(o, 78813, 17)),
            xmind_works: async () =>
              await o.e(25097).then(o.t.bind(o, 10154, 17)),
            zen: async () => await o.e(19570).then(o.t.bind(o, 90266, 17)),
            zen_old: async () => await o.e(44103).then(o.t.bind(o, 81966, 17)),
          },
          ru: {
            about_us: async () => await o.e(35674).then(o.t.bind(o, 67546, 17)),
            account: async () => await o.e(94176).then(o.t.bind(o, 3511, 17)),
            ambassador: async () =>
              await o.e(99239).then(o.t.bind(o, 95169, 17)),
            app_whats_new: async () =>
              await o.e(29593).then(o.t.bind(o, 81734, 17)),
            blog_list: async () =>
              await o.e(11816).then(o.t.bind(o, 98651, 17)),
            blog_post: async () =>
              await o.e(37292).then(o.t.bind(o, 11244, 17)),
            brand_identity: async () =>
              await o.e(69632).then(o.t.bind(o, 23947, 17)),
            buy: async () => await o.e(53477).then(o.t.bind(o, 52031, 17)),
            cloud_closed: async () =>
              await o.e(93305).then(o.t.bind(o, 27339, 17)),
            common: async () => await o.e(36081).then(o.t.bind(o, 85331, 17)),
            compare: async () => await o.e(52166).then(o.t.bind(o, 41297, 17)),
            contact: async () => await o.e(70778).then(o.t.bind(o, 77056, 17)),
            demos: async () => await o.e(29730).then(o.t.bind(o, 66891, 17)),
            design_resources: async () =>
              await o.e(72593).then(o.t.bind(o, 96630, 17)),
            download: async () => await o.e(29055).then(o.t.bind(o, 66521, 17)),
            enterprise_form: async () =>
              await o.e(71521).then(o.t.bind(o, 72792, 17)),
            error: async () => await o.e(18498).then(o.t.bind(o, 82728, 17)),
            faq: async () => await o.e(65935).then(o.t.bind(o, 72807, 17)),
            features_2022: async () =>
              await o.e(20780).then(o.t.bind(o, 71102, 17)),
            footer: async () => await o.e(43233).then(o.t.bind(o, 21589, 17)),
            form: async () => await o.e(88595).then(o.t.bind(o, 97474, 17)),
            getting_help: async () =>
              await o.e(70949).then(o.t.bind(o, 25915, 17)),
            gift_card: async () => await o.e(9420).then(o.t.bind(o, 17930, 17)),
            header: async () => await o.e(47367).then(o.t.bind(o, 39956, 17)),
            homepage_2020: async () =>
              await o.e(23819).then(o.t.bind(o, 62760, 17)),
            homepage_2021: async () =>
              await o.e(35844).then(o.t.bind(o, 57591, 17)),
            homepage_2022: async () =>
              await o.e(26741).then(o.t.bind(o, 63953, 17)),
            homepage_2022_new: async () =>
              await o.e(68897).then(o.t.bind(o, 79686, 17)),
            homepage_2024: async () =>
              await o.e(80626).then(o.t.bind(o, 13016, 17)),
            join_team: async () =>
              await o.e(94929).then(o.t.bind(o, 12988, 17)),
            join_us: async () => await o.e(70206).then(o.t.bind(o, 18342, 17)),
            learn_more_about: async () =>
              await o.e(42793).then(o.t.bind(o, 61064, 17)),
            logo_guideline: async () =>
              await o.e(6867).then(o.t.bind(o, 63671, 17)),
            mindmapping: async () =>
              await o.e(78926).then(o.t.bind(o, 41449, 17)),
            mobile: async () => await o.e(68381).then(o.t.bind(o, 56216, 17)),
            my_submissions: async () =>
              await o.e(33359).then(o.t.bind(o, 29631, 17)),
            newsletter: async () =>
              await o.e(60814).then(o.t.bind(o, 92805, 17)),
            page_error: async () =>
              await o.e(3789).then(o.t.bind(o, 52776, 17)),
            partner: async () => await o.e(31397).then(o.t.bind(o, 65155, 17)),
            paywall: async () => await o.e(77263).then(o.t.bind(o, 59500, 17)),
            pitch_mode: async () =>
              await o.e(59408).then(o.t.bind(o, 66065, 17)),
            pricing: async () => await o.e(30346).then(o.t.bind(o, 59164, 17)),
            privacy: async () => await o.e(79797).then(o.t.bind(o, 60606, 17)),
            redeem: async () => await o.e(93742).then(o.t.bind(o, 10028, 17)),
            redirect: async () => await o.e(10799).then(o.t.bind(o, 99298, 17)),
            release_notes: async () =>
              await o.e(27186).then(o.t.bind(o, 30814, 17)),
            rocks: async () => await o.e(92787).then(o.t.bind(o, 5004, 17)),
            share: async () => await o.e(8430).then(o.t.bind(o, 12356, 17)),
            sitemap: async () => await o.e(66937).then(o.t.bind(o, 99071, 17)),
            sme: async () => await o.e(78468).then(o.t.bind(o, 25358, 17)),
            submit_to_gallery: async () =>
              await o.e(6159).then(o.t.bind(o, 57203, 17)),
            term: async () => await o.e(30196).then(o.t.bind(o, 43073, 17)),
            thankyou: async () => await o.e(7574).then(o.t.bind(o, 39081, 17)),
            user_guide: async () =>
              await o.e(67300).then(o.t.bind(o, 73289, 17)),
            video_guide: async () =>
              await o.e(33127).then(o.t.bind(o, 94816, 17)),
            webinar: async () => await o.e(89560).then(o.t.bind(o, 41618, 17)),
            workshop: async () => await o.e(36664).then(o.t.bind(o, 40203, 17)),
            xmind2021: async () =>
              await o.e(85845).then(o.t.bind(o, 90873, 17)),
            xmind2021_beta: async () =>
              await o.e(30104).then(o.t.bind(o, 43576, 17)),
            xmind8: async () => await o.e(43162).then(o.t.bind(o, 27962, 17)),
            xmind_cards: async () =>
              await o.e(22952).then(o.t.bind(o, 66716, 17)),
            xmind_cxm: async () =>
              await o.e(11007).then(o.t.bind(o, 21310, 17)),
            xmind_works: async () =>
              await o.e(67218).then(o.t.bind(o, 47591, 17)),
            zen: async () => await o.e(44369).then(o.t.bind(o, 62010, 17)),
            zen_old: async () => await o.e(70031).then(o.t.bind(o, 60478, 17)),
          },
          th: {
            about_us: async () => await o.e(7319).then(o.t.bind(o, 21497, 17)),
            account: async () => await o.e(219).then(o.t.bind(o, 42206, 17)),
            ambassador: async () =>
              await o.e(82072).then(o.t.bind(o, 38381, 17)),
            app_whats_new: async () =>
              await o.e(17208).then(o.t.bind(o, 62338, 17)),
            blog_list: async () => await o.e(2099).then(o.t.bind(o, 93603, 17)),
            blog_post: async () =>
              await o.e(51843).then(o.t.bind(o, 82130, 17)),
            brand_identity: async () =>
              await o.e(61620).then(o.t.bind(o, 91013, 17)),
            buy: async () => await o.e(19380).then(o.t.bind(o, 57104, 17)),
            cloud_closed: async () =>
              await o.e(12994).then(o.t.bind(o, 62473, 17)),
            common: async () => await o.e(62533).then(o.t.bind(o, 36109, 17)),
            compare: async () => await o.e(50942).then(o.t.bind(o, 21584, 17)),
            contact: async () => await o.e(62676).then(o.t.bind(o, 48538, 17)),
            demos: async () => await o.e(71622).then(o.t.bind(o, 62923, 17)),
            design_resources: async () =>
              await o.e(34098).then(o.t.bind(o, 29916, 17)),
            download: async () => await o.e(43906).then(o.t.bind(o, 18357, 17)),
            enterprise_form: async () =>
              await o.e(90827).then(o.t.bind(o, 41983, 17)),
            error: async () => await o.e(46909).then(o.t.bind(o, 14116, 17)),
            faq: async () => await o.e(25952).then(o.t.bind(o, 97906, 17)),
            features_2022: async () =>
              await o.e(11048).then(o.t.bind(o, 23362, 17)),
            footer: async () => await o.e(38737).then(o.t.bind(o, 60010, 17)),
            form: async () => await o.e(20782).then(o.t.bind(o, 61502, 17)),
            getting_help: async () =>
              await o.e(83).then(o.t.bind(o, 86988, 17)),
            gift_card: async () =>
              await o.e(94809).then(o.t.bind(o, 63227, 17)),
            header: async () => await o.e(10217).then(o.t.bind(o, 53597, 17)),
            homepage_2020: async () =>
              await o.e(69536).then(o.t.bind(o, 57259, 17)),
            homepage_2021: async () =>
              await o.e(48962).then(o.t.bind(o, 4516, 17)),
            homepage_2022: async () =>
              await o.e(31930).then(o.t.bind(o, 52178, 17)),
            homepage_2022_new: async () =>
              await o.e(41e3).then(o.t.bind(o, 14499, 17)),
            homepage_2024: async () =>
              await o.e(25570).then(o.t.bind(o, 78948, 17)),
            join_team: async () =>
              await o.e(70565).then(o.t.bind(o, 50351, 17)),
            join_us: async () => await o.e(63409).then(o.t.bind(o, 87150, 17)),
            learn_more_about: async () =>
              await o.e(52543).then(o.t.bind(o, 84928, 17)),
            logo_guideline: async () =>
              await o.e(88244).then(o.t.bind(o, 99320, 17)),
            mindmapping: async () =>
              await o.e(44472).then(o.t.bind(o, 13614, 17)),
            mobile: async () => await o.e(68942).then(o.t.bind(o, 65379, 17)),
            my_submissions: async () =>
              await o.e(33653).then(o.t.bind(o, 52634, 17)),
            newsletter: async () =>
              await o.e(42403).then(o.t.bind(o, 42165, 17)),
            page_error: async () =>
              await o.e(28788).then(o.t.bind(o, 62716, 17)),
            partner: async () => await o.e(10768).then(o.t.bind(o, 79663, 17)),
            paywall: async () => await o.e(52733).then(o.t.bind(o, 31227, 17)),
            pitch_mode: async () =>
              await o.e(84709).then(o.t.bind(o, 7195, 17)),
            pricing: async () => await o.e(56833).then(o.t.bind(o, 84991, 17)),
            privacy: async () => await o.e(45837).then(o.t.bind(o, 47275, 17)),
            redeem: async () => await o.e(67639).then(o.t.bind(o, 82503, 17)),
            redirect: async () => await o.e(25113).then(o.t.bind(o, 73503, 17)),
            release_notes: async () =>
              await o.e(36604).then(o.t.bind(o, 60176, 17)),
            rocks: async () => await o.e(38168).then(o.t.bind(o, 68060, 17)),
            share: async () => await o.e(22174).then(o.t.bind(o, 62017, 17)),
            sitemap: async () => await o.e(61702).then(o.t.bind(o, 67069, 17)),
            sme: async () => await o.e(56219).then(o.t.bind(o, 78971, 17)),
            submit_to_gallery: async () =>
              await o.e(33739).then(o.t.bind(o, 34358, 17)),
            term: async () => await o.e(45449).then(o.t.bind(o, 85633, 17)),
            thankyou: async () => await o.e(82334).then(o.t.bind(o, 70635, 17)),
            user_guide: async () =>
              await o.e(31535).then(o.t.bind(o, 86608, 17)),
            video_guide: async () =>
              await o.e(29267).then(o.t.bind(o, 31384, 17)),
            webinar: async () => await o.e(72233).then(o.t.bind(o, 88613, 17)),
            workshop: async () => await o.e(37390).then(o.t.bind(o, 71091, 17)),
            xmind2021: async () => await o.e(98618).then(o.t.bind(o, 4907, 17)),
            xmind2021_beta: async () =>
              await o.e(29319).then(o.t.bind(o, 39579, 17)),
            xmind8: async () => await o.e(54175).then(o.t.bind(o, 66070, 17)),
            xmind_cards: async () =>
              await o.e(21138).then(o.t.bind(o, 52554, 17)),
            xmind_cxm: async () =>
              await o.e(26211).then(o.t.bind(o, 67498, 17)),
            xmind_works: async () =>
              await o.e(62695).then(o.t.bind(o, 50389, 17)),
            zen: async () => await o.e(81876).then(o.t.bind(o, 73160, 17)),
            zen_old: async () => await o.e(88929).then(o.t.bind(o, 63726, 17)),
          },
          ar: {
            about_us: async () => await o.e(76270).then(o.t.bind(o, 91118, 17)),
            account: async () => await o.e(61446).then(o.t.bind(o, 456, 17)),
            ambassador: async () =>
              await o.e(55150).then(o.t.bind(o, 93625, 17)),
            app_whats_new: async () =>
              await o.e(1932).then(o.t.bind(o, 49505, 17)),
            blog_list: async () =>
              await o.e(19992).then(o.t.bind(o, 77474, 17)),
            blog_post: async () =>
              await o.e(56695).then(o.t.bind(o, 26181, 17)),
            brand_identity: async () =>
              await o.e(97997).then(o.t.bind(o, 85664, 17)),
            buy: async () => await o.e(80030).then(o.t.bind(o, 32479, 17)),
            cloud_closed: async () =>
              await o.e(93079).then(o.t.bind(o, 53055, 17)),
            common: async () => await o.e(99709).then(o.t.bind(o, 36653, 17)),
            compare: async () => await o.e(70573).then(o.t.bind(o, 39776, 17)),
            contact: async () => await o.e(91099).then(o.t.bind(o, 99871, 17)),
            demos: async () => await o.e(12066).then(o.t.bind(o, 3826, 17)),
            design_resources: async () =>
              await o.e(38727).then(o.t.bind(o, 10178, 17)),
            download: async () => await o.e(19983).then(o.t.bind(o, 89143, 17)),
            enterprise_form: async () =>
              await o.e(71971).then(o.t.bind(o, 17467, 17)),
            error: async () => await o.e(70186).then(o.t.bind(o, 10320, 17)),
            faq: async () => await o.e(58320).then(o.t.bind(o, 19906, 17)),
            features_2022: async () =>
              await o.e(5995).then(o.t.bind(o, 61205, 17)),
            footer: async () => await o.e(86631).then(o.t.bind(o, 70798, 17)),
            form: async () => await o.e(36476).then(o.t.bind(o, 30948, 17)),
            getting_help: async () =>
              await o.e(10924).then(o.t.bind(o, 58026, 17)),
            gift_card: async () => await o.e(67327).then(o.t.bind(o, 4432, 17)),
            header: async () => await o.e(62283).then(o.t.bind(o, 46723, 17)),
            homepage_2020: async () =>
              await o.e(66072).then(o.t.bind(o, 89670, 17)),
            homepage_2021: async () =>
              await o.e(91949).then(o.t.bind(o, 59346, 17)),
            homepage_2022: async () =>
              await o.e(85738).then(o.t.bind(o, 93971, 17)),
            homepage_2022_new: async () =>
              await o.e(45859).then(o.t.bind(o, 82695, 17)),
            homepage_2024: async () =>
              await o.e(24981).then(o.t.bind(o, 37699, 17)),
            join_team: async () => await o.e(3073).then(o.t.bind(o, 74052, 17)),
            join_us: async () => await o.e(20166).then(o.t.bind(o, 2289, 17)),
            learn_more_about: async () =>
              await o.e(28178).then(o.t.bind(o, 90573, 17)),
            logo_guideline: async () =>
              await o.e(9317).then(o.t.bind(o, 7414, 17)),
            mindmapping: async () =>
              await o.e(89854).then(o.t.bind(o, 50827, 17)),
            mobile: async () => await o.e(89782).then(o.t.bind(o, 48759, 17)),
            my_submissions: async () =>
              await o.e(52586).then(o.t.bind(o, 50986, 17)),
            newsletter: async () =>
              await o.e(27361).then(o.t.bind(o, 31060, 17)),
            page_error: async () =>
              await o.e(35127).then(o.t.bind(o, 48117, 17)),
            partner: async () => await o.e(78042).then(o.t.bind(o, 63597, 17)),
            paywall: async () => await o.e(25141).then(o.t.bind(o, 72043, 17)),
            pitch_mode: async () =>
              await o.e(3799).then(o.t.bind(o, 11166, 17)),
            pricing: async () => await o.e(89732).then(o.t.bind(o, 69447, 17)),
            privacy: async () => await o.e(19146).then(o.t.bind(o, 87231, 17)),
            redeem: async () => await o.e(37477).then(o.t.bind(o, 56257, 17)),
            redirect: async () => await o.e(15332).then(o.t.bind(o, 33441, 17)),
            release_notes: async () =>
              await o.e(14073).then(o.t.bind(o, 33746, 17)),
            rocks: async () => await o.e(99167).then(o.t.bind(o, 53948, 17)),
            share: async () => await o.e(89174).then(o.t.bind(o, 63927, 17)),
            sitemap: async () => await o.e(31205).then(o.t.bind(o, 4483, 17)),
            sme: async () => await o.e(93329).then(o.t.bind(o, 75240, 17)),
            submit_to_gallery: async () =>
              await o.e(72674).then(o.t.bind(o, 81291, 17)),
            term: async () => await o.e(5030).then(o.t.bind(o, 32270, 17)),
            thankyou: async () => await o.e(57769).then(o.t.bind(o, 20084, 17)),
            user_guide: async () =>
              await o.e(34583).then(o.t.bind(o, 94399, 17)),
            video_guide: async () =>
              await o.e(64605).then(o.t.bind(o, 29680, 17)),
            webinar: async () => await o.e(72939).then(o.t.bind(o, 25094, 17)),
            workshop: async () => await o.e(364).then(o.t.bind(o, 17675, 17)),
            xmind2021: async () =>
              await o.e(71259).then(o.t.bind(o, 88559, 17)),
            xmind2021_beta: async () =>
              await o.e(78729).then(o.t.bind(o, 9792, 17)),
            xmind8: async () => await o.e(10372).then(o.t.bind(o, 99592, 17)),
            xmind_cards: async () =>
              await o.e(75095).then(o.t.bind(o, 88351, 17)),
            xmind_cxm: async () =>
              await o.e(69128).then(o.t.bind(o, 45878, 17)),
            xmind_works: async () =>
              await o.e(99375).then(o.t.bind(o, 42195, 17)),
            zen: async () => await o.e(71520).then(o.t.bind(o, 45082, 17)),
            zen_old: async () => await o.e(62675).then(o.t.bind(o, 53369, 17)),
          },
        };
      (window.siteMode = document.documentElement.getAttribute("site-mode")),
        (window.lang = document.documentElement.getAttribute("lang"));
      const G = window.lang || window.siteMode,
        V = "cn" === G && "cn" !== window.siteMode,
        W = {
          lng: "en",
          fallbackLng: "en",
          ns: Object.keys(H.en),
          nsSeparator: ".",
        };
      window._localeJsonGettingCache || (window._localeJsonGettingCache = {});
      const K = window._localeJsonGettingCache;
      let J = null;
      const X = async (e) => {
        const t = await (async () => {
          if (J) return await J;
          const e = Object.assign(W, {
            lng: V ? "global_cn" : G,
            fallbackLng: "cn" === window.siteMode ? "cn" : "en",
          });
          return (
            (J = new Promise(async (t) => {
              await B.init(e), t(B);
            })),
            await J
          );
        })();
        let n;
        e.constructor === String && (e = [e]),
          e.push("common", "error", "form"),
          (e = Array.from(new Set(e))),
          (n = V
            ? ["global_cn", "en"]
            : "cn" === G || "en" === G
            ? [G]
            : [G, "en"]);
        const a = [];
        e.forEach((e) => {
          n.forEach((t) => {
            a.push({ lang: t, moduleName: e });
          });
        });
        const i = a.map(async (e) => {
            let { lang: n, moduleName: a } = e;
            if (t.hasResourceBundle(n, a)) return;
            const i = await (async (e, t) => {
              const n = e + "^_^" + t;
              let a = K[n];
              a || ((a = H[e][t]()), (K[n] = a));
              const { default: i } = await a;
              return i;
            })(n, a);
            return t.addResourceBundle(n, a, i), i;
          }),
          r = t.loadNamespaces(e);
        i.push(r);
        try {
          await Promise.all(i);
        } catch (e) {
          console.error("loadI18nextAsync ERROR ->", e);
        }
        return t;
      };
      window.loadI18nextAsync = X;
      o(8612), o(87767), o(20692);
      const Y = loadI18nextAsync(["common", "error"]);
      const Q = () => {
        const e = new URL(window.location.href);
        window.urlParams = Object.fromEntries(e.searchParams.entries());
      };
      Q(),
        $(window).on("popstate", Q),
        $(() => {
          const e = urlParams.ref;
          e && Cookies.set("ref", e, { expires: 30 });
        });
      var Z = (window.request = function (e) {
        var { url: t, method: n = "GET", body: a = null, callback: i } = e;
        return (
          a && !e.method && (n = "POST"),
          new Promise((e, r) => {
            $.ajax({
              url: t,
              method: n,
              contentType: "application/json",
              data: a ? JSON.stringify(a) : null,
            })
              .done(function (t) {
                i && i(null, t), e(t);
              })
              .fail(function (e, t, n) {
                i && i(n, null), r(n);
              });
          })
        );
      });
      const ee = (e) =>
          e
            .split(" ")
            .map((e) => (e ? e[0].toUpperCase() + e.slice(1) : ""))
            .join(" "),
        te = {
          en: {
            years: "years",
            year: "year",
            months: "months",
            month: "month",
            days: "days",
            day: "day",
          },
          de: {
            years: "Jahre",
            year: "jährlich",
            months: "Monate",
            month: "Monat",
            days: "Tage",
            day: "Tag",
          },
          fr: {
            years: "ans",
            year: "an",
            months: "mois",
            month: "mois",
            days: "jours",
            day: "jour",
          },
          cn: {
            years: "年",
            year: "年",
            months: "个月",
            month: "个月",
            days: "天",
            day: "天",
          },
          jp: {
            years: "年間",
            year: "年間",
            months: "ヶ月",
            month: "ヶ月",
            days: "日",
            day: "日",
          },
        };
      const ne = () => "ontouchstart" in document.documentElement;
      $.setPageMinHeight = function (e) {
        var t = $(e || "#global_footer"),
          n = $("<div>"),
          a = 0;
        function i() {
          var e = $(window).height(),
            i = t.offset().top + t.outerHeight();
          i != e && ((a = e - i + a), n.css("height", a + "px"));
        }
        return (
          n.css({
            width: "100%",
            "background-color": t.prev().css("background-color"),
          }),
          n.insertBefore(t),
          $(window).on("resize load", i),
          $(i),
          i
        );
      };
      function ae(e) {
        (this.setting = e),
          (this.$container = $("<div></div>").addClass("xm-dialog")),
          (this.$title = $("<h5></h5>")
            .addClass("xm-dialog__title")
            .appendTo(this.$container)),
          (this.$paragraphs = $("<div></div>")
            .addClass("xm-dialog__paragraphs")
            .appendTo(this.$container)),
          (this.$footer = $("<div></div>")
            .addClass("xm-dialog__footer")
            .appendTo(this.$container)),
          (this.$closeBtn = $("<i></i>")
            .addClass("xm-dialog__close-btn icon-cross")
            .appendTo(this.$container)),
          (this.$confirm = $("<div></div>")
            .addClass("xm-dialog__confirm btn btn-sm btn-primary")
            .appendTo(this.$footer)),
          (this.$cancel = $("<div></div>")
            .addClass("xm-dialog__cancel btn btn-sm btn-outline-primary")
            .appendTo(this.$footer)),
          this.update(e);
      }
      (ae.prototype.addClass = function (e, t) {
        switch (e) {
          case "container":
            this.$container.addClass(t);
            break;
          case "title":
            this.$title.addClass(t);
            break;
          case "paragraphs":
            this.$paragraphs.addClass(t);
            break;
          case "closeBtn":
            this.$closeBtn.addClass(t);
        }
      }),
        (ae.prototype.update = async function (e) {
          e = Object.assign(this.setting, e);
          let t = this;
          this.$title.html(e.title), this.$paragraphs.empty();
          for (let t of e.contents || [])
            $("<p></p>").appendTo(this.$paragraphs).html(t);
          this.$cancel.text(e.cancelText || (await Y).t("common.Cancel")),
            this.$confirm.text(e.confirmText || (await Y).t("common._ok")),
            e.hideCancel
              ? this.$cancel.addClass("d-none")
              : this.$cancel.removeClass("d-none"),
            e.hideConfirm
              ? this.$confirm.addClass("d-none")
              : this.$confirm.removeClass("d-none"),
            e.hideClose
              ? this.$closeBtn.addClass("d-none")
              : this.$closeBtn.removeClass("d-none"),
            this.$cancel.off("click"),
            this.$confirm.off("click");
          let n = e.cancelAction || this.hide.bind(this),
            a = e.confirmAction || this.hide.bind(this),
            i = e.closeAction || this.hide.bind(this);
          this.$closeBtn.click(() => i(t)),
            this.$cancel.click(() => n(t)),
            this.$confirm.click(() => a(t));
        }),
        (ae.prototype.show = function () {
          ae.$background
            ? ae.$background.removeClass("hidden")
            : ((ae.$background = $("<div></div>").addClass(
                "xm-dialog-background"
              )),
              $("body").append(ae.$background)),
            ae.$background.empty(),
            ae.$background.append(this.$container),
            this.setting.isTransparentBackground
              ? ae.$background.addClass("transparent")
              : ae.$background.removeClass("transparent");
        }),
        (ae.prototype.hide = function () {
          ae.$background &&
            (ae.$background.addClass("hidden"), ae.$background.empty());
        }),
        (ae.prototype.showLoading = function () {
          let e = this.$confirm.outerWidth();
          (this._confirmTextCache = this.$confirm.text()),
            this.$confirm.empty(),
            this.setting.isLoadingAnimated
              ? this.$confirm
                  .html(
                    '<div class="loading"><div></div><div></div><div></div><div></div></div>'
                  )
                  .css({ "min-width": e + "px" })
              : this.$confirm.text("Loading"),
            this.$confirm.addClass("disabled"),
            this.$confirm.off("click");
        }),
        (ae.prototype.loading = function () {
          this.showLoading();
        }),
        (ae.prototype.hideLoading = function () {
          this.$confirm.text(this._confirmTextCache),
            this.$confirm.click(
              this.setting.confirmAction || this.hide.bind(this)
            ),
            this.$confirm.removeClass("disabled");
        }),
        (ae.alert = function (e, t) {
          let n = new ae({ contents: [e], confirmAction: t, hideCancel: !0 });
          return n.show(), n;
        }),
        (ae.confirm = function (e, t, n) {
          let a = new ae({
            contents: [e],
            confirmAction: t,
            cancelAction: n,
            hideCancel: !1,
          });
          return a.show(), a;
        }),
        (ae.alertServerError = async () =>
          ae.alert((await Y).t("error._server_error_try_again_later")));
      class ie {
        constructor() {
          (this.lastTimerID = void 0),
            (this.entity = $('<div class="toast"><span></span></div>')),
            $("body").append(this.entity);
        }
        show() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 3e3;
          return new Promise((n) => {
            this.resetTimer(),
              this.entity.addClass("active"),
              this.entity.find("span").text(e),
              (this.lastTimerID =
                t &&
                setTimeout(() => {
                  this.hide(), n(this);
                }, t));
          });
        }
        hide() {
          this.resetTimer(), this.entity.removeClass("active");
        }
        destroy() {
          this.entity.remove();
        }
        resetTimer() {
          "number" == typeof this.lastTimerID &&
            (window.clearTimeout(this.lastTimerID),
            (this.lastTimerID = void 0));
        }
        static async show(e, t) {
          const n = new ie();
          await n.show(e, t), window.setTimeout(n.destroy.bind(n), 500);
        }
      }
      window.utils = {
        copyTextOfField: (e, t, n) => {
          const a = $(t);
          a.tooltip({ title: n, trigger: "manual" }),
            e.select(),
            e.setSelectionRange(0, 99999),
            document.execCommand("copy"),
            a.tooltip("show"),
            setTimeout(() => {
              a.tooltip("dispose");
            }, 2e3);
        },
        goSigninIfNot: async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          const n = window.urlParams;
          if (n.token && n.token !== window.$acc.token) {
            window.$acc.isSignedIn && (await window.$acc.signOut());
            const e = location.href.replace(/token=[^&]+(&|\b)/, "");
            let n = "/signin/?next=" + encodeURIComponent(e);
            window.$xm.redirect(n, t);
          } else {
            if (!window.$acc.isSignedIn) {
              const e = await Y;
              window.utils.Toast.show(e.t("common._going_2_signin")),
                window.$xm.redirect(null, t);
            }
            e && e();
          }
        },
        getParameterByName: function (e, t) {
          t || (t = window.location.href), (e = e.replace(/[[\]]/g, "\\$&"));
          var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        },
        switchRegionAndGoNextWithParams: function (e, t, n) {
          let a =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (e = e || window.siteMode),
            (t = t || {}),
            (n = n || location.pathname);
          const i = Object.assign({}, window.urlParams, t);
          let r,
            o = "";
          "cn" === e && (n = n.replace("/" + window.lang, ""));
          let s = new URLSearchParams(i).toString();
          if (((s = s ? "?" + s : ""), e === window.siteMode))
            return (
              window.location.origin ||
                (window.location.origin =
                  window.location.protocol +
                  "//" +
                  window.location.hostname +
                  (window.location.port ? ":" + window.location.port : "")),
              (o = location.origin + n + s + location.hash),
              a
                ? o
                : window.location.href !== o && ((window.location.href = o), !0)
            );
          const c = location.origin.includes("xmind.net") ? ".net" : ".app";
          return (
            "cn" === e
              ? ((o =
                  location.origin.replace(/xmind\.(net|app)$/, "xmind.cn") +
                  n +
                  s +
                  location.hash),
                (r = o.match(/next=[^?&]+\.?xmind\.(net|app)[^\w]/)),
                r && ((r = r[0]), (o = o.replace(r, r.replace(c, ".cn")))))
              : "en" === e &&
                ((o =
                  location.origin.replace(/xmind\.cn$/, "xmind" + c) +
                  n +
                  s +
                  location.hash),
                (r = o.match(/next=[^?&]+\.?xmind\.cn[^\w]/)),
                r && ((r = r[0]), (o = o.replace(r, r.replace(".cn", c))))),
            window.location.href !== o
              ? a
                ? o
                : ((window.location.href = o), !0)
              : !!a && o
          );
        },
        request: Z,
        formatTime: function (e) {
          if (!e) return null;
          var t = new Date(e),
            n = "" + t.getMinutes();
          return (
            (n = 1 === n.length ? "0" + n : n),
            t.getFullYear() +
              "-" +
              (t.getMonth() + 1) +
              "-" +
              t.getDate() +
              " " +
              t.getHours() +
              ":" +
              n
          );
        },
        makeProductPeriodText: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e) return "";
          const { noNumberIfJustOne: n = !1, isCapitalized: a = !1 } = t;
          let i, r, o;
          return (
            e % 12 == 0
              ? ((i = e / 12),
                "en" === siteMode
                  ? ((o = i > 1 ? "years" : "year"),
                    (o = " " + (te[window.lang][o] || te.en[o])))
                  : (o = " " + te.cn.year),
                a && (o = ee(o)),
                n && 1 === i ? (i = o) : (i += o))
              : ((r = e),
                "en" === siteMode
                  ? ((o = r > 1 ? "months" : "month"),
                    (o = " " + (te[window.lang][o] || te.en[o])))
                  : (o = " " + te.cn.month),
                a && (o = ee(o)),
                n && 1 === r ? (r = o) : (r += o)),
            i || r
          );
        },
        checkIfInWechatBrowser: () =>
          /MicroMessenger/i.test(navigator.userAgent),
        getOS: function () {
          var e = window.navigator.userAgent,
            t = window.navigator.platform,
            n = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
            a = null;
          return (
            -1 === n.indexOf(t) || ne()
              ? (-1 !== n.indexOf(t) && ne()) ||
                [/iPhone/, /iPad/, /iPod/].some((t) => t.test(e))
                ? (a = "iOS")
                : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t)
                ? (a = "Windows")
                : /Android/.test(e)
                ? (a = "Android")
                : [/Harmony/].some((t) => t.test(e))
                ? (a = "HarmonyOS")
                : !a && /(Linux|Ubuntu|Fedora|Debian)/i.test(t) && (a = "Linux")
              : (a = "macOS"),
            a
          );
        },
        regex: {
          phone: /^1[3456789]\d{9}$/,
          email:
            /([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/im,
          password: /^[\w^$*.[\]{}()?"!@#%&/\\,><':;|_~`= +-]{6,32}$/,
          url: /((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp)\:\/\/((\[?(\d{1,3}\.){3}\d{1,3}\]?)|(([\-a-zA-Z0-9]+\.)+[a-zA-Z]{2,4}))(\:\d+)?(\/[^\s<>]+)*\/?)/gim,
        },
        Dialog: ae,
        simpleHash: function (e) {
          for (var t = 0, n = 0; n < e.length; n++) {
            t += e.charCodeAt(n);
          }
          return t;
        },
        simpleI18n: (e) =>
          "cn" === window.lang && e.cn
            ? e.cn
            : "de" === window.lang && e.de
            ? e.de
            : "fr" === window.lang && e.fr
            ? e.fr
            : "jp" === window.lang && e.jp
            ? e.jp
            : e.en,
        isLinuxDeb: () =>
          /(ubuntu|debian|grml|tails|kali|purism|pureOS)/i.test(
            navigator.userAgent
          ),
        Toast: ie,
        toast: new ie(),
        scrollElementToTheCenterOfScreen: function (e, t) {
          if (!e) return;
          const n = document.documentElement.clientHeight,
            a =
              e.getBoundingClientRect().top +
              document.documentElement.scrollTop -
              n / 2,
            i = a / t;
          let r;
          const o = (e) => {
            void 0 === r && (r = e);
            const n = e - r,
              s = Math.min(i * n, a);
            window.scrollTo(0, s), n < t && window.requestAnimationFrame(o);
          };
          window.requestAnimationFrame(o);
        },
        handleMapTitle: function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          e = e.trim().toLowerCase();
          let t = "";
          for (const n of e) {
            let e = n;
            switch (n) {
              case "?":
                e = "%3F";
                break;
              case "<":
                e = "&lt;";
                break;
              case ">":
                e = "&gt;";
                break;
              case '"':
                e = "&quot;";
                break;
              case "/":
                e = "%2F";
            }
            t += e;
          }
          return t.replace(/(\s+|'|\&#039;|#)/g, "-");
        },
        getUrlLangPrefix: () =>
          window.siteMode === window.lang ? "" : "/" + window.lang,
        uet_report_conversion: function () {
          (window.uetq = window.uetq || []),
            window.uetq.push("event", "download", {
              event_label: "Bing",
              revenue_value: 1,
              currency: "USD",
            });
        },
        setOrderTrackStorage: function (e) {
          try {
            const t =
              JSON.parse(window.localStorage.getItem("orderTrack")) || {};
            e.order &&
              e.order.order_hash &&
              !t[e.order.order_hash] &&
              ((t[e.order.order_hash] = {
                currency: e.order.currency.toUpperCase(),
                value: e.order.total,
              }),
              window.localStorage.setItem("orderTrack", JSON.stringify(t)));
          } catch (e) {}
        },
        calculationColor: function (e) {
          const t = [
            "#5D18E9",
            "#000000",
            "#6944BA",
            "#ED8537",
            "#D64D8A",
            "#4288F0",
          ];
          let n = 0;
          for (let t = 0; t < e.length; t++)
            n += parseInt(e[t].charCodeAt(0), 10);
          let a = 0,
            i = 0;
          for (; n; ) (a += n % 10), (n = parseInt(n / 10)), i++;
          return t[Math.round(a / i) % t.length];
        },
        deleteSearchParam: function (e) {
          const t = new URL(location.href);
          Array.isArray(e) || (e = [e]),
            e.forEach((e) => {
              t.searchParams.delete(e);
            }),
            history.replaceState(null, "", t.toString());
        },
        getTimeUnitText: (e, t, n) => {
          e = +e;
          const a = te[window.lang];
          return e + n + (t = e > 1 ? a["".concat(t, "s")] : a[t]);
        },
        getTimeUnitSingularText: (e, t, n) =>
          (e = +e) + n + (t = te[window.lang][t]),
        htmlEscape: function (e) {
          return e
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;")
            .replace(/&/g, "&amp;");
        },
        isInDarkTheme: function () {
          return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          );
        },
      };
      o(47408);
      (window.$acc = {
        _token: Cookies.get("T"),
        _fullname: Cookies.get("F"),
        _account: Cookies.get("U"),
        _email: "",
        get isSignedIn() {
          return !!$acc._token;
        },
        signoutSME() {
          Cookies.remove("sme_token");
        },
        signinCookie: function (e) {
          let {
            token: t,
            user: n,
            fullname: a,
            emailhash: i,
            remember: r,
            primary_email: o,
            phone: s,
          } = e;
          this.signOutCookie(),
            (window.remember = r),
            r
              ? (Cookies.set("T", t, { expires: 3650 }),
                Cookies.set("U", n, { expires: 3650 }),
                Cookies.set("F", a, { expires: 3650 }),
                Cookies.set("ID", n, { expires: 3650 }),
                Cookies.set("fullname", a, { expires: 3650 }),
                Cookies.set("email", i, { expires: 3650 }),
                Cookies.set("remember", r, { expires: 3650 }))
              : (Cookies.set("T", t),
                Cookies.set("U", n),
                Cookies.set("F", a),
                Cookies.set("ID", n),
                Cookies.set("fullname", a),
                Cookies.set("email", i)),
            o && localStorage.setItem("primaryEmail", o),
            s && localStorage.setItem("phone", s),
            Cookies.remove("IS_PRO"),
            Cookies.remove("HAS_PURCHASED_PRODUCT"),
            ($acc._token = t),
            ($acc._fullname = a),
            ($acc._account = n),
            ($acc._email = o);
        },
        signOutCookie: function () {
          Cookies.remove("T"),
            Cookies.remove("U"),
            Cookies.remove("F"),
            Cookies.remove("cn_trans"),
            Cookies.remove("cn_trans_account"),
            Cookies.remove("remember"),
            Cookies.remove("ID"),
            Cookies.remove("fullname"),
            Cookies.remove("email"),
            Cookies.set("IS_PRO", !1),
            Cookies.set("HAS_PURCHASED_PRODUCT", !1),
            [".xmind.net", ".xmind.app", ".xmind.cn"].forEach((e) => {
              Cookies.remove("T", { domain: e }),
                Cookies.remove("U", { domain: e }),
                Cookies.remove("F", { domain: e }),
                Cookies.remove("cn_trans", { domain: e }),
                Cookies.remove("cn_trans_account", { domain: e }),
                Cookies.remove("remember", { domain: e }),
                Cookies.remove("ID", { domain: e }),
                Cookies.remove("fullname", { domain: e }),
                Cookies.remove("email", { domain: e });
            }),
            localStorage.removeItem("textAvatar"),
            localStorage.removeItem("avatarUrl"),
            localStorage.removeItem("avatar"),
            localStorage.removeItem("primaryEmail"),
            localStorage.removeItem("phone"),
            ($acc._token = null),
            ($acc._fullname = null),
            ($acc._account = null);
          const e = document.querySelector(".global-header__account-dropdown"),
            t = document.querySelector(
              ".global-header__account-link .icon-user"
            ),
            n = document.querySelector(
              ".global-header__account-link .img-avatar"
            ),
            a = document.querySelector(".global-header__account-link svg");
          t && (t.style.display = "block"),
            n && (n.style.display = "none"),
            a && (a.style.display = "none"),
            e &&
              (e.classList.remove("menu-dropdown"), (e.style.display = "none"));
        },
        signOut: async function () {
          await $.ajax({
            url: "/_res/token/" + $acc._account + "/" + $acc._token,
            method: "DELETE",
            headers: { AuthToken: $acc._token },
          }),
            this.signOutCookie();
        },
        setHeaderUsername(e) {
          !$acc._fullname || $acc._fullname.indexOf("_xmind_") >= 0
            ? $acc.setHeaderEmail(e)
            : $(e).text($acc._fullname);
        },
        getUserNameAbbr(e, t, n) {
          let a = "Xmind";
          if (e || t) {
            const n = e ? e[0] : "",
              i = t ? t[0] : "";
            a = "en" === window.siteMode ? n + i : n || i;
          } else
            -1 === n.indexOf("_xmind_") &&
              (a = n
                .split(" ")
                .map((e) => e[0])
                .join(""));
          return a;
        },
        getUserNameAbbrNoSiteMode(e, t, n) {
          let a = "Xmind";
          if (e || t) {
            a = (e ? e[0] : "") + (t ? t[0] : "");
          } else
            -1 === n.indexOf("_xmind_") &&
              (a = n
                .split(" ")
                .map((e) => e[0])
                .join(""));
          return a;
        },
        setHeaderEmail(e) {
          api.getSessionDataAndUserInfo().then(function (t) {
            $(e).text(t.primary_email || "My Xmind ID");
          });
        },
        async setHeaderAvatar() {
          const e = localStorage.getItem("avatar") || "{}";
          let { type: t, content: n } = JSON.parse(e);
          const a = document.querySelectorAll(
              ".global-header__account-dropdown"
            ),
            i = document.querySelectorAll(".global-header__account-link");
          if (!t && !n && window.$acc.isSignedIn) {
            if (
              ["/account/", "/join-team/", "/redeem/"].includes(
                window.location.pathname
              )
            )
              return;
            const {
                avatar_url: e,
                first_name: a,
                last_name: i,
                user: r,
              } = await window.api.getUserInfo(),
              o = { type: "text", content: "Xmind" };
            if (e) (o.type = "image"), (o.content = e);
            else {
              const e = window.$acc.getUserNameAbbr(a, i, r);
              o.content = e;
            }
            localStorage.setItem("avatar", JSON.stringify(o)),
              (t = o.type),
              (n = o.content);
          }
          if ("image" === t)
            i.forEach((e, t) => {
              const i = e.querySelector(".img-avatar");
              i.setAttribute("src", n),
                i.addEventListener("load", function () {
                  (e.querySelector(".icon-user").style.display = "none"),
                    (e.querySelector("svg").style.display = "none"),
                    (i.style.display = "block"),
                    a[t].classList.add("is-loaded"),
                    i.classList.add("is-loaded");
                });
            });
          else if ("text" === t) {
            i.forEach(
              (e) => (e.querySelector(".icon-user").style.display = "none")
            );
            let e = 6.5;
            switch (n.length) {
              case 1:
                e *= 2;
                break;
              case 2:
                e *= 1.5;
            }
            const t = window.utils.calculationColor(n);
            i.forEach((a) => {
              a.querySelector("svg rect").setAttribute("fill", t),
                a
                  .querySelector("svg text")
                  .setAttribute("font-size", "".concat(e, "px")),
                (a.querySelector("svg text").textContent = n),
                (a.querySelector("svg").style.display = "block");
            }),
              a.forEach((e) => e.classList.add("is-loaded"));
          }
        },
        headerCheckAccount(e, t) {
          if ($acc.isSignedIn) {
            const n = document.querySelectorAll(
              ".global-header__account-dropdown"
            );
            let a = !1,
              i = "".concat(t, "/share/").concat($acc._account);
            "cn" === window.siteMode &&
              (i = "".concat(t, "/submissions/").concat($acc._account)),
              document.querySelectorAll(".maps").forEach((e) => {
                e.setAttribute("href", i);
              }),
              document.querySelectorAll(".sign-out").forEach((n) => {
                n.addEventListener("click", async () => {
                  a ||
                    ((a = !0),
                    await $acc.signOut(),
                    (window.location.href = e + t + "/"));
                });
              }),
              window.$acc.setHeaderAvatar(),
              n.forEach((e) => e.classList.add("menu-dropdown"));
          } else
            document
              .querySelectorAll(".global-header__account-link")
              .forEach((n) =>
                n.setAttribute(
                  "href",
                  e +
                    t +
                    "/signin/?next=" +
                    window.location.origin +
                    t +
                    "/account/"
                )
              );
        },
      }),
        (window.$xm = {
          refreshXmind: function (e) {
            window.status =
              "xmind_cmd=refresh;xmind_json=" +
              $.toJSON({ expireDate: e.expire, expired: e.expired });
          },
          isXmindEnv: function () {
            var e = Cookies.get("_env"),
              t = Cookies.get("ENV");
            return (e && "xmind_" == e.substr(0, 6)) || (t && "XMIND" == t);
          },
          signinXmind: function (e, t) {
            (e.remember = !!t),
              (window.status = "xmind_status=200;xmind_json=" + $.toJSON(e));
          },
          makeRedirectUrl: function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            const n =
              !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                ? (() => {
                    const e = window.lang || window.siteMode;
                    return ["en", "cn"].includes(e) ? "" : "/".concat(e);
                  })()
                : "";
            let a =
              e ||
              "/signin/?next=" +
                encodeURIComponent(location.href.replace("#", "__hash__"));
            if (t) {
              const e = new URLSearchParams(t).toString();
              e && (a = a + (a.includes("?") ? "&" : "?") + e);
            }
            return n + a;
          },
          redirect: function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
            location.href = window.$xm.makeRedirectUrl(e, t, n);
          },
          go_next: function (e) {
            const t = (() => {
                const e = new URLSearchParams(location.search).get("next");
                if (!e) return null;
                const t = decodeURIComponent(e).replace("__hash__", "#");
                return "production" === window.mode
                  ? (n = t)
                    ? n.match(
                        /^((https?:)?\/\/([^/]+\.)?xmind\.(net|cn|app))?\//
                      )
                      ? n
                      : void 0
                    : null
                  : t;
              })(),
              n = window.utils.getUrlLangPrefix(),
              a = "".concat(n, "/account/");
            location.href = t || e || a;
          },
        }),
        $(function () {
          Object.assign($xm, {
            versions: {
              plus: {
                price: "79",
                updates: "39",
                actual: "79",
                updates5: "79",
              },
              pro: {
                price: "129",
                updates: "49",
                actual: "99",
                updates5: "99",
              },
              subscription: { price: "79" },
            },
            prices: {
              1: { usd: 1, eur: 1, gbp: 1, aud: 1, cad: 1, rub: 1, cny: 1 },
              29: {
                usd: 29,
                eur: 25,
                gbp: 23,
                aud: 39,
                cad: 39,
                rub: 1919,
                cny: 199,
              },
              39: {
                usd: 39,
                eur: 35,
                gbp: 32,
                aud: 49,
                cad: 49,
                rub: 2579,
                cny: 279,
              },
              49: {
                usd: 49,
                eur: 45,
                gbp: 39,
                aud: 69,
                cad: 69,
                rub: 3339,
                cny: 349,
              },
              59: {
                usd: 59,
                eur: 55,
                gbp: 49,
                aud: 85,
                cad: 79,
                rub: 4029,
                cny: 419,
              },
              645: {
                usd: 64.5,
                eur: 57.5,
                gbp: 51.5,
                aud: 89.5,
                cad: 84.5,
                rub: 4269,
                cny: 449.5,
              },
              69: {
                usd: 69,
                eur: 59,
                gbp: 56,
                aud: 95,
                cad: 89,
                rub: 4659,
                cny: 489,
              },
              79: {
                usd: 79,
                eur: 69,
                gbp: 64,
                aud: 109,
                cad: 99,
                rub: 5229,
                cny: 559,
              },
              89: {
                usd: 89,
                eur: 79,
                gbp: 72,
                aud: 125,
                cad: 119,
                rub: 5999,
                cny: 629,
              },
              99: {
                usd: 99,
                eur: 89,
                gbp: 79,
                aud: 139,
                cad: 129,
                rub: 6549,
                cny: 699,
              },
              109: {
                usd: 109,
                eur: 99,
                gbp: 83,
                aud: 149,
                cad: 149,
                rub: 7369,
                cny: 759,
              },
              119: {
                usd: 119,
                eur: 109,
                gbp: 93,
                aud: 169,
                cad: 159,
                rub: 7999,
                cny: 829,
              },
              129: {
                usd: 129,
                eur: 115,
                gbp: 103,
                aud: 179,
                cad: 169,
                rub: 8529,
                cny: 899,
              },
            },
            zenLicensePrices: {
              1: { usd: 1, eur: 1, gbp: 1, aud: 1, cad: 1, rub: 1, cny: 1 },
              129.99: { usd: 129.99, cny: 699 },
            },
            simbols: {
              usd: "$",
              eur: "&euro;",
              gbp: "&pound;",
              aud: "$",
              cad: "$",
              rub: "&#x20bd;",
              cny: "¥",
            },
            packages: {
              5: { discount: 0.95 },
              10: { discount: 0.93 },
              20: { discount: 0.9 },
              50: { discount: 0.85 },
              100: { discount: 0.8 },
            },
            orderType: {
              indi: { plus: "79", pro: "99", sub: "79" },
              edu: { plus: "1", pro: "59" },
              npo: { pro: "645" },
              team: { plus: "79", pro: "99" },
              upgr: { plus: "39", pro: "49" },
            },
            toPrice: function (e) {
              "string" == typeof e && (e = $.parseFloat(e));
              for (
                var t = (e.toFixed(2) + "").split("."),
                  n = t[0],
                  a = t.length > 1 ? "." + t[1] : "",
                  i = /(\d+)(\d{3})/;
                i.test(n);

              )
                n = n.replace(i, "$1,$2");
              return n + a;
            },
            cPrice: function (e, t) {
              return $xm.prices[e][t];
            },
            _pkgOrigPrice: function (e, t, n) {
              return (
                ($xm.cPrice($xm.versions[e].price, n) +
                  $xm.cPrice($.parseFloat($xm.versions[e].updates), n)) *
                t
              );
            },
            _pkgActPrice: function (e, t, n) {
              return (
                ($xm.cPrice($xm.versions[e].actual, n) +
                  $xm.cPrice($.parseFloat($xm.versions[e].updates), n)) *
                t
              );
            },
            pkgOrigPrice: function (e, t, n) {
              return $xm.toPrice($xm._pkgOrigPrice(e, t, n));
            },
            pkgDiscPrice: function (e, t, n) {
              return $xm.toPrice(
                $xm["pro" == e ? "_pkgActPrice" : "_pkgOrigPrice"](e, t, n) *
                  $xm.packages[t].discount
              );
            },
            specialOrigPrice: { usd: 484, eur: 330, gbp: 288 },
            specialDisPrice: { usd: 199, eur: 179, gbp: 139 },
          });
        });
      class re {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { resultCode: t = 0, details: n = {} } = e;
          (this.resultCode = t), (this.details = n);
        }
      }
      const oe = (() => {
          const e = {};
          return function (t, n) {
            let a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 500;
            return function () {
              return (
                e[t] ||
                  ((e[t] = n()),
                  setTimeout(() => {
                    e[t] = null;
                  }, a)),
                e[t]
              );
            };
          };
        })(),
        se = window.loadI18nextAsync(["form", "error"]),
        ce = {
          async getOrder(e) {
            return await $.ajax({ url: "/_api/order/" + e + "/", type: "GET" });
          },
          async sendOrder(e) {
            return await $.ajax({
              url: "/_api/order/",
              type: "POST",
              processData: !1,
              contentType: !1,
              data: e,
            });
          },
          async getOrderFees(e) {
            return await $.ajax({ url: "/_api/order-fees?" + e, type: "GET" });
          },
          async checkAccount(e) {
            return await $.ajax({
              url: "/_res/check_account/" + encodeURIComponent(e.trim()),
            });
          },
          async signUp(e) {
            const t = await se;
            let n,
              {
                email: a,
                password: i,
                phone: r = "",
                newsletter: o = 0,
                e_code: s,
              } = e;
            try {
              n = await $.ajax({
                url: "/_res/user/signup",
                type: "POST",
                data: {
                  email: a,
                  e_code: s,
                  pwd: $.xmMd5(i),
                  phone: r,
                  terms: !0,
                  newsletter: o,
                },
              });
            } catch (e) {
              return (
                console.error("api.signUp got ERROR ->", e),
                new re({
                  resultCode: 500,
                  details: {
                    formFeedback: t.t("error._server_error_try_again_later"),
                  },
                })
              );
            }
            if (200 === n._code) return new re();
            if (403 === n._code) {
              const e = {};
              switch (n.message) {
                case "email":
                  e.emailFeedback = t.t("form._email_has_been_registered");
                  break;
                case "phone":
                  e.phoneFeedback = "此手机号已被注册";
                  break;
                default:
                  e.formFeedback =
                    "There is something wrong about " +
                    $.capitalize(data.message) +
                    " in this form, please check again.";
              }
              return new re({ resultCode: 403, details: e });
            }
            if (406 === n._code) {
              const e = {};
              return (
                "email" === n.message
                  ? (e.emailFeedback = t.t("form._invalid_email"))
                  : (e.formFeedback =
                      $.capitalize(data.message) +
                      t.t("form._has_been_occupied")),
                new re({ resultCode: 406, details: e })
              );
            }
            return 407 === n._code
              ? new re({
                  resultCode: 407,
                  details: {
                    verifyCodeFeedback: t.t(
                      "form.signin_2023.wrong_verify_code"
                    ),
                  },
                })
              : 417 === n._code
              ? ((location.href = location.href.replace(
                  /https?:\/\/[^\.]+\.xmind/,
                  "https://www.xmind"
                )),
                new re({ resultCode: 417, details: {} }))
              : new re({
                  resultCode: 500,
                  details: {
                    formFeedback: t.t("error._server_error_try_again_later"),
                  },
                });
          },
          async signIn(e) {
            const { account: t, password: n, remember: a } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/token/" + encodeURIComponent(t),
              data: { pwd: $.xmMd5(n), remember: a, from: "browser" },
            });
          },
          async sendPhoneVerifyCodeForSignin(e, t) {
            return await $.ajax({
              type: "GET",
              url: "/_res/user/signin_with_phone",
              data: { phone: e, captcha: t },
            });
          },
          async signinWithPhoneAndCode(e) {
            let { phone: t, code: n } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/user/signin_with_phone",
              data: { phone: t, vcode: n },
            });
          },
          async sendPhoneVerifyCodeForSignup(e, t) {
            return await $.ajax({
              type: "GET",
              url: "/_res/user/signup_with_phone",
              data: { phone: e, captcha: t },
            });
          },
          async sendPhoneVerifyCodeForSignupToBindThirdParty(e) {
            let { phone: t, session_id: n } = e;
            return await $.ajax({
              type: "GET",
              url: "/_res/user/v2/signup_with_phone",
              data: { phone: t, sessionId: n },
            });
          },
          async sendOTPForSignin(e) {
            return await $.ajax({
              type: "GET",
              url: "/_res/auth/otp-signin/".concat(encodeURIComponent(e)),
            });
          },
          async signinWithOTP(e) {
            let { account: t, otp: n } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/auth/otp-signin/".concat(encodeURIComponent(t)),
              data: { from: "xmind_web", code: n },
            });
          },
          async signupWithPhoneAndCode(e) {
            let { phone: t, code: n } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/user/signup_with_phone",
              data: { phone: t, vcode: n },
            });
          },
          async signupWithPhoneAndCodeToBindThirdParty(e) {
            let { phone: t, code: n, session_id: a } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/user/v2/signup_with_phone",
              data: { phone: t, vcode: n, from: "browser", sessionId: a },
            });
          },
          async signupWithThirdPartyAuthorized(e) {
            let {
              email: t,
              code: n,
              newsletter: a,
              terms: i,
              session_id: r,
            } = e;
            return await $.ajax({
              type: "POST",
              url: "/_res/auth/signup_with_third",
              data: {
                email: t,
                code: n,
                newsletter: a,
                terms: i,
                session_id: r,
                from: "xmind_web",
              },
            });
          },
          async sendEmailVerifyCodeForSignup(e) {
            if (e)
              return await $.ajax({
                type: "GET",
                url: "/_res/email/signup_code",
                data: { email: e },
              });
          },
          getUserInfo: oe("getUserInfo", async () => {
            const e =
              "/_res/profile/" + encodeURIComponent(window.$acc._account);
            return await $.ajax({
              url: e,
              type: "GET",
              headers: { AuthToken: window.$acc._token },
            });
          }),
          async getSession() {
            return await utils.request({ url: "/_res/session" });
          },
          getSessionDataAndUserInfo: oe(
            "getSessionDataAndUserInfo",
            async () => {
              const e = ce.getSession(),
                t = ce.getUserInfo();
              await Promise.all([e, t]);
              const n = await e;
              if (401 === n._code) return { _code: 401 };
              const a = await t;
              return Object.assign({}, n, a);
            }
          ),
          async getDevicesInfo() {
            return await utils.request({ url: "/_res/devices" });
          },
          async getSubscriptionInfo() {
            return await utils.request({
              url: "/_res/user_sub_status?from=website",
            });
          },
          async getAffiliateInfo() {
            return await utils.request({ url: "/_res/user/affiliate_info" });
          },
          async getSubscriptionDetails() {
            return await utils.request({ url: "/_res/user_sub_details" });
          },
          async getManageMsg(e) {
            return await utils.request({ url: "/_res/sub_info/".concat(e) });
          },
          async updateManage(e, t, n) {
            return await utils.request({
              url: "/_res/sub/".concat(e, "/update"),
              method: "POST",
              body: { action: t, vars: n },
            });
          },
          async getPayments() {
            return await utils.request({ url: "/_res/user/payments" });
          },
          async cancelSubscription(e, t) {
            return await utils.request({
              url: "/_res/unsub/" + e + "/" + encodeURIComponent(t),
              method: "POST",
              body: {},
            });
          },
          async getAccountInfoForResetPassword(e) {
            return await $.ajax({
              type: "POST",
              url: "/_res/password/" + encodeURIComponent(e) + "/forgot",
            });
          },
          async sendVerifyCodeForResetPassword(e, t) {
            let { type: n, value: a } = t;
            if (["email", "phone"].includes(n)) {
              if (a)
                return await $.ajax({
                  type: "POST",
                  url: "/_res/password/" + encodeURIComponent(e) + "/send_code",
                  data: { [n]: a },
                });
            } else console.error("type must be email or phone");
          },
          async resetPassword(e, t) {
            let { verifyWayType: n, verifyWayValue: a, code: i, pwd: r } = t;
            if (!["email", "phone"].includes(n))
              return void console.error("type must be email or phone");
            const o = { [n]: a, code: i, pwd: r };
            if (e && a && i && r)
              return await $.ajax({
                type: "POST",
                url: "/_res/password/" + encodeURIComponent(e) + "/reset",
                data: o,
              });
            console.error(
              "username, verifyWayValue, code, pwd are required ->",
              o
            );
          },
          async changePassword(e, t, n) {
            return await utils.request({
              url: "/_res/password/" + encodeURIComponent(e),
              method: "PUT",
              body: { old_pwd: t, pwd: n },
            });
          },
          async setPassword(e, t, n) {
            return await $.ajax({
              type: "PUT",
              url: "/_res/password/" + encodeURIComponent(e),
              data: { v_code: t, pwd: n },
            });
          },
          async redeem(e) {
            return await utils.request({
              url: "/_res/redeem-sub?code=" + encodeURIComponent(e),
            });
          },
          async confirmRedeem(e) {
            return await utils.request({
              url: "/_res/redeem-sub?code=" + encodeURIComponent(e),
              method: "POST",
              body: {},
            });
          },
          async getVerifyCode(e) {
            return await $.ajax({
              type: "GET",
              url: "/_res/".concat(e, "/send_verify_code"),
            });
          },
          async verifyOriginAccount(e, t) {
            return await $.ajax({
              type: "POST",
              url: "/_res/".concat(e, "/verify_with_code"),
              data: { v_code: t },
            });
          },
          async newEmailGetCode(e) {
            return $.ajax({
              type: "GET",
              url: "/_res/bind_new_email",
              data: { new_email: e },
            });
          },
          async verifyChnageEmail(e) {
            return $.ajax({
              type: "POST",
              url: "/_res/bind_new_email",
              data: e,
            });
          },
          async saveProfile(e, t) {
            return await utils.request({
              url: "/_res/profile/" + encodeURIComponent(e),
              method: "PUT",
              body: t,
            });
          },
          async saveEmailChanges(e, t, n) {
            return await utils.request({
              url: "/_res/profile/" + encodeURIComponent(e),
              method: "PUT",
              body: { primary_email: t, emails: n },
            });
          },
          async getShareMapContentUrl(e) {
            return await utils.request({
              url: "/_api/share/maps/" + encodeURIComponent(e) + "/content",
            });
          },
          async deleteAccount(e) {
            return await $.ajax({
              type: "POST",
              url: "/_res/user/delete",
              data: e,
            });
          },
          async saveAvatar(e) {
            return await $.ajax({
              url: "/_res/upload_head_img",
              data: e,
              processData: !1,
              contentType: !1,
              type: "POST",
            });
          },
          async refreshLinkInviteToken(e) {
            return await $.ajax({
              method: "POST",
              url: "/_res/refresh_invite_token/".concat(e),
            });
          },
          async inviteTeamMember(e) {
            const t = {};
            return (
              e.constructor === Array
                ? (t.user_emails = e)
                : (t.user_email = e),
              await utils.request({
                url: "/_res/invite_team_member",
                method: "POST",
                body: t,
              })
            );
          },
          async removeTeamMember(e, t) {
            const n = t
              ? { member_user_id: t, member_user_email: e }
              : { member_user_email: e };
            return await utils.request({
              url: "/_res/remove_team_member",
              method: "POST",
              body: n,
            });
          },
          async getAddSeatPrice(e, t) {
            return await $.ajax({
              type: "POST",
              url: "/_res/get_seat_price",
              data: { currency: e, quantity: t },
            });
          },
          async createAddSeatOrder(e, t) {
            return await $.ajax({
              type: "POST",
              url: "/_res/create_add_seat_order",
              data: { currency: e, quantity: t },
            });
          },
          async inviteTeamLeader() {
            return await utils.request({
              url: "/_res/invite_team_leader",
              method: "POST",
              body: {},
            });
          },
          async cancelTeamMemberInvite(e, t) {
            return await utils.request({
              url: "/_res/cancel_team_invite",
              method: "POST",
              body: { hash: e, user_email: t },
            });
          },
          async rejectTeamInvite(e) {
            return await utils.request({
              url: "/_res/reject_team_invite",
              method: "POST",
              body: { accept_token: e },
            });
          },
          async acceptTeamInvite(e) {
            return await utils.request({
              url: "/_res/accept_team_invite",
              method: "POST",
              body: { accept_token: e },
            });
          },
          async getTeamInviteDetail(e) {
            return await utils.request({
              url: "/_res/get_team_invite_detail?accept_token=".concat(
                encodeURIComponent(e)
              ),
            });
          },
          async leaveTeam(e) {
            return await utils.request({
              url: "/_res/leave_team",
              method: "POST",
              body: { team_id: e },
            });
          },
          async dismissTeam(e) {
            return await $.ajax({
              url: "/_res/team_subscription/dismiss/".concat(e),
              type: "POST",
            });
          },
          async updateCreditCard4Team(e) {
            return await $.ajax({
              url: "/_res/team_subscription/update_card/".concat(e),
              type: "POST",
            });
          },
          async renewTeamSubscription(e) {
            return await $.ajax({
              url: "/_res/team_subscription/renew/".concat(e),
              type: "POST",
            });
          },
          async updateCreditCard4Individual(e) {
            return await $.ajax({
              url: "/_res/subscription/update_card/".concat(e),
              type: "POST",
            });
          },
          async sendSMEVerifyCode(e) {
            return await $.ajax({
              url: "/_api/license/sme/create-verify-code",
              type: "POST",
              data: { key: e },
            });
          },
          async checkSMEVerifyCode(e) {
            let { license: t, code: n } = e;
            return await $.ajax({
              url: "/_api/license/sme/check-verify-code",
              type: "POST",
              data: { key: t, code: n },
            });
          },
          async getSMEInfo() {
            return await $.ajax({ url: "/_api/license/sme/info", type: "GET" });
          },
          async updateSMEInfo(e) {
            const { uuid: t, deviceName: n } = e;
            return await $.ajax({
              url: "/_api/license/sme/update",
              type: "PUT",
              data: { uuid: t, deviceName: n },
            });
          },
          async deactivateSMEDevice(e) {
            return await $.ajax({
              url: "/_api/license/sme/deactivate",
              type: "PUT",
              data: { uuid: e },
            });
          },
          async blockSMEDevice(e) {
            return await $.ajax({
              url: "/_api/license/sme/block",
              type: "PUT",
              data: { uuid: e },
            });
          },
          async unblockSMEDevice(e) {
            return await $.ajax({
              url: "/_api/license/sme/unblock",
              type: "PUT",
              data: { uuid: e },
            });
          },
          async checkSignUp(e) {
            return await $.ajax({
              type: "GET",
              url: "/_res/user",
              data: { email: e },
            });
          },
          async newsletterSubscribe(e) {
            return await $.ajax({
              url: "/_res/newsletter/subscribe/",
              type: "POST",
              data: { email: e },
            });
          },
          async updateCreditCard(e) {
            return await $.ajax({
              url: "/_api/subscription/update_card",
              type: "POST",
              data: e,
            });
          },
          async loadingMember(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "email";
            return await $.ajax({
              url: "/_res/team/"
                .concat(e, "/members?page=")
                .concat(t, "&orderby=")
                .concat(n),
              type: "GET",
            });
          },
          async searchMemberByEamil(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "email";
            return await $.ajax({
              url: "/_res/team/"
                .concat(e, "/members?page=")
                .concat(n, "&orderby=")
                .concat(a, "&email=")
                .concat(t),
              type: "GET",
            });
          },
          async uploadCsv(e, t) {
            return await $.ajax({
              url: "/_res/team/".concat(t, "/members"),
              type: "POST",
              data: e,
              cache: !1,
              processData: !1,
              contentType: !1,
            });
          },
          async getWeixinOfficialAccountQrcode(e) {
            return await $.ajax({
              url: "/_res/third-party/wxoa-auth-qrcode",
              type: "POST",
              data: { type: e },
            });
          },
          async getWeixinWebLoginData() {
            return await $.ajax({
              url: "/_res/third-party/wx-auth-qrcode",
              type: "POST",
            });
          },
          async weixinWebAuthCallback(e, t) {
            return await $.ajax({
              url: "/_res/third-party/wx-msg-handler",
              type: "GET",
              data: { code: e, state: t },
            });
          },
          async getThirdPartyAuthStatus(e) {
            return await $.ajax({
              url: "/_res/third-party/auth-status",
              type: "GET",
              data: { session_id: e },
            });
          },
          async getThirdPartySessionForAppleSignin(e, t, n) {
            return await $.ajax({
              url: "/_res/third-party/apple-auth",
              type: "POST",
              data: { type: e, code: t, nonce: n },
            });
          },
          async thridPartySigninWithGoogle(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "web";
            return await $.ajax({
              url: "/_res/third-party/google-auth",
              type: "POST",
              data: { credential: e, from: t },
            });
          },
          async signinWithWeixinAuthCode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "web";
            return await $.ajax({
              url: "/_res/third-party/wx-auth-login",
              type: "POST",
              data: { code: e, platform: t },
            });
          },
          async bindThirdPartyAccountWithXmindAccount(e) {
            return await $.ajax({
              url: "/_res/third-party/bind-account",
              type: "PUT",
              data: { session_id: e },
            });
          },
          async bindThirdPartyAccountWithCreatedXmindAccount(e) {
            return await $.ajax({
              url: "/_res/third-party/create-and-bind-account",
              type: "PUT",
              data: { session_id: e },
            });
          },
          async checkBindStatus(e) {
            return await $.ajax({
              type: "GET",
              url: "/_res/third-party/bind-status",
              data: { tp_type: e },
            });
          },
          async unbindThirdPartyAccountFromXmindAccount(e, t, n) {
            return await $.ajax({
              url: "/_res/third-party/unbind-account",
              type: "PUT",
              data: { tp_type: e, v_type: t, v_code: n },
            });
          },
          async getUserGuide(e) {
            return await $.ajax({ url: e });
          },
          async getInvoiceMsg() {
            return await $.ajax({ type: "GET", url: "/_api/invoice_setting" });
          },
          async setInvoiceMsg(e) {
            return await $.ajax({
              type: "POST",
              url: "/_api/invoice_setting",
              data: e,
            });
          },
        },
        de =
          "en" === window.siteMode
            ? {
                async deactivateDevice(e) {
                  return await utils.request({
                    url: "/_res/devices",
                    method: "POST",
                    body: { unbind_device_list: [e] },
                  });
                },
                async cn_transferable(e) {
                  return await utils.request({
                    url:
                      "/_res/translate_user_to_cn?email=" +
                      encodeURIComponent(e),
                  });
                },
                async cn_transfer(e) {
                  return await utils.request({
                    url: "/_res/translate_user_to_cn",
                    method: "POST",
                    body: e,
                  });
                },
                async getShareMaps(e, t, n) {
                  let a = "/_api/share/featured-maps";
                  const i = { lang: e, limit: t, offset: n },
                    r = Object.keys(i)
                      .filter((e) => i[e])
                      .map((e) =>
                        "".concat(e, "=").concat(encodeURIComponent(i[e]))
                      )
                      .join("&");
                  return (
                    r && (a = "".concat(a, "?").concat(r)),
                    await utils.request({ url: a })
                  );
                },
                async getShareMapDownloadUrl(e) {
                  return await utils.request({
                    url:
                      "/_api/share/maps/" +
                      encodeURIComponent(e) +
                      "/downloadUrl",
                  });
                },
                async switchTeamSubscriptionAutoRenew(e, t) {
                  utils.request({
                    url: "/_res/team_autorenew",
                    method: "POST",
                    body: { team_id: e, action: t },
                  });
                },
                async getPriceLevel() {
                  return await $.ajax({
                    method: "GET",
                    url: "/_api/order/level",
                  });
                },
                async payOrderByStripe(e, t) {
                  return await $.ajax({
                    method: "POST",
                    url: "/_api/order/".concat(e, "/stripe"),
                    data: t,
                  });
                },
                async payOrderByXaiStripe(e, t) {
                  return await $.ajax({
                    method: "POST",
                    url: "/_api/xmindai/order/".concat(e, "/stripe"),
                    data: t,
                  });
                },
              }
            : {
                async deactivateDevice(e) {
                  return await utils.request({
                    url: "/_res/devices",
                    body: { unbind_device_list: [e] },
                  });
                },
                async getOriginPhoneCode(e) {
                  return await utils.request({
                    url:
                      "/_res/phone/" +
                      encodeURIComponent(e) +
                      "/verify?send_method=phone",
                  });
                },
                async getNewPhoneCode(e, t) {
                  return await utils.request({
                    url:
                      "/_res/phone/" +
                      encodeURIComponent(e) +
                      "/verify?new_phone=" +
                      encodeURIComponent(t),
                  });
                },
                async verifyPhoneWithCode(e, t) {
                  return await utils.request({
                    url: "/_res/phone/" + encodeURIComponent(e) + "/verify",
                    body: { v_code: t },
                  });
                },
                async verifyNewPhoneWithCode(e, t, n) {
                  return await utils.request({
                    url: "/_res/phone/" + encodeURIComponent(e) + "/verify",
                    body: { new_phone: t, v_code: n },
                  });
                },
                async getChangePhoneCode(e, t) {
                  return await utils.request({
                    url:
                      "/_res/phone/" +
                      encodeURIComponent(e) +
                      "/reset?new_phone=" +
                      encodeURIComponent(t),
                  });
                },
                async resetPhone(e, t, n, a) {
                  return await utils.request({
                    url: "/_res/phone/" + encodeURIComponent(e) + "/reset",
                    body: { v_code1: t, v_code2: n, new_phone: a },
                  });
                },
                async getShareMaps(e, t, n) {
                  let a = "/_api/share/maps?limit=".concat(
                    encodeURIComponent(t)
                  );
                  return (
                    n && (a += "&offset=".concat(encodeURIComponent(n))),
                    e && (a = a + "&lang=" + e),
                    await utils.request({ url: a })
                  );
                },
                async getShareMapDownloadUrl(e) {
                  return await utils.request({
                    url:
                      "/_api/share/map/" +
                      encodeURIComponent(e) +
                      "/downloadUrl",
                  });
                },
                async requestInvoice(e, t) {
                  return await utils.request({
                    method: "POST",
                    url: "/_res/request_cn_invoice/" + e,
                    body: t,
                  });
                },
                async setMapInfo(e, t) {
                  return await $.ajax({
                    method: "POST",
                    url: "/_api/share/maps/".concat(e, "/info"),
                    contentType: "application/json",
                    data: JSON.stringify(t),
                  });
                },
                async createUploadSession(e, t) {
                  return await $.ajax({
                    method: "POST",
                    url: "/_fs/mapfile/".concat(e),
                    contentType: "application/json",
                    data: JSON.stringify(t),
                  });
                },
                async getUserMaps(e, t, n) {
                  return await $.ajax({
                    method: "GET",
                    url: "/_api/share/maps/"
                      .concat(e, "/")
                      .concat(t, "/")
                      .concat(n),
                  });
                },
                async getUserFeaturedMaps(e, t, n) {
                  return await $.ajax({
                    method: "GET",
                    url: "/_api/share/featured-maps/"
                      .concat(e, "/")
                      .concat(t, "/")
                      .concat(n),
                  });
                },
                async deleteMap(e) {
                  return await $.ajax({
                    method: "DELETE",
                    url: "/share/api/maps/".concat(e, "/delete"),
                  });
                },
                async withdrawSubmission(e) {
                  return await $.ajax({
                    method: "POST",
                    url: "/_api/share/maps/".concat(e, "/unflag/submit"),
                  });
                },
                async getUserProfile(e) {
                  const t = "/_res/profile/" + encodeURIComponent(e);
                  return await $.ajax({ url: t, type: "GET" });
                },
                async getFeatureMaps(e, t) {
                  return await $.ajax({
                    url: "/_api/share/featured-maps?limit="
                      .concat(e, "&offset=")
                      .concat(t),
                    type: "GET",
                  });
                },
                async getRecommendMaps(e) {
                  return await $.ajax({
                    url: "/_api/share/recommend-maps?limit=".concat(
                      e,
                      "&offset=0"
                    ),
                    type: "GET",
                  });
                },
                async getMapsByCategory(e, t, n) {
                  return await $.ajax({
                    url: "/_api/share/maps/search/category",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                      categoryId: e,
                      size: t,
                      orderBy: "featured",
                      next: n,
                    }),
                  });
                },
                async searchGallery(e, t) {
                  return await $.ajax({
                    url: "/_api/share/maps/search/map",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ text: e, size: t }),
                  });
                },
                async searchAutocomplete(e, t) {
                  return await $.ajax({
                    url: "/_api/share/maps/search/autocomplete",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ text: e, size: t }),
                  });
                },
                async getGalleryCategories() {
                  return await $.ajax({
                    url: "/_api/share/map-categories",
                    type: "GET",
                  });
                },
                async getMapMeta(e) {
                  return await $.ajax({
                    url: "/_api/share/maps/".concat(e, "/meta"),
                    type: "GET",
                  });
                },
                async getGroupManage(e, t) {
                  return await $.ajax({
                    type: "POST",
                    url: "/_res/group_sub/info",
                    data: { group: e, token: t },
                  });
                },
                async getCnPaymentQrcode(e) {
                  return await $.ajax({ type: "GET", url: e });
                },
              };
      (window.api = Object.assign(ce, de)),
        window.postMessage ||
          (window.postMessage = function (e, t, n) {
            const a = new CustomEvent("message", {
              bubbles: !0,
              cancelable: !0,
              detail: { data: t, origin: n, source: window },
            });
            e.dispatchEvent(a);
          }),
        window.parent.postMessage ||
          (window.parent.postMessage = window.postMessage),
        (window.mode = document.documentElement.getAttribute("mode"));
    })();
})();
