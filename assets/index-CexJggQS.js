(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule) return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$2;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X$1 = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X$1, e = Xj;
      X$1 = null;
      Yj(a, b, c);
      X$1 = d;
      Xj = e;
      null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$1.removeChild(c.stateNode));
      break;
    case 18:
      null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X$1, c.stateNode));
      break;
    case 4:
      d = X$1;
      e = Xj;
      X$1 = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X$1 = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X$1 = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X$1 = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$1 = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X$1) throw Error(p(160));
      Zj(f2, g, e);
      X$1 = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return reactExports.createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowDown = createLucideIcon("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Award = createLucideIcon("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Baby = createLucideIcon("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CheckCircle2 = createLucideIcon("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Facebook = createLucideIcon("Facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Flame = createLucideIcon("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GraduationCap = createLucideIcon("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HardHat = createLucideIcon("HardHat", [
  [
    "path",
    {
      d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
      key: "1dej2m"
    }
  ],
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0", key: "1uc279" }],
  ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3", key: "1j9mnm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HeartHandshake = createLucideIcon("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "12sd6o"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Heart = createLucideIcon("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Landmark = createLucideIcon("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const List = createLucideIcon("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PartyPopper = createLucideIcon("PartyPopper", [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "bpx1uq"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17", key: "1pd0s7" }
  ],
  [
    "path",
    { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7", key: "zq5xbz" }
  ],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ribbon = createLucideIcon("Ribbon", [
  [
    "path",
    {
      d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",
      key: "1njedg"
    }
  ],
  [
    "path",
    {
      d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",
      key: "10len7"
    }
  ],
  ["path", { d: "m9.35 14.53 2.64-3.31", key: "1wfi09" }],
  ["path", { d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5", key: "1ezyge" }],
  ["path", { d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0", key: "aw0zq5" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shield = createLucideIcon("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ThumbsUp = createLucideIcon("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Timer$1 = createLucideIcon("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TrendingDown = createLucideIcon("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UtensilsCrossed = createLucideIcon("UtensilsCrossed", [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wheat = createLucideIcon("Wheat", [
  ["path", { d: "M2 22 16 8", key: "60hf96" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    {
      d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1sdzmb"
    }
  ],
  [
    "path",
    {
      d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "eoatbi"
    }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "2m8kc5"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "vex3ng"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = createLucideIcon("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const resolveFetch$3 = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = (...args) => __vitePreload(async () => {
      const { default: fetch2 } = await Promise.resolve().then(() => browser);
      return { default: fetch2 };
    }, true ? void 0 : void 0, import.meta.url).then(({ default: fetch2 }) => fetch2(...args));
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};
class FunctionsError extends Error {
  constructor(message, name = "FunctionsError", context) {
    super(message);
    this.name = name;
    this.context = context;
  }
}
class FunctionsFetchError extends FunctionsError {
  constructor(context) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
  }
}
class FunctionsRelayError extends FunctionsError {
  constructor(context) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
  }
}
class FunctionsHttpError extends FunctionsError {
  constructor(context) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
  }
}
var FunctionRegion;
(function(FunctionRegion2) {
  FunctionRegion2["Any"] = "any";
  FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
  FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
  FunctionRegion2["ApSouth1"] = "ap-south-1";
  FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
  FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
  FunctionRegion2["CaCentral1"] = "ca-central-1";
  FunctionRegion2["EuCentral1"] = "eu-central-1";
  FunctionRegion2["EuWest1"] = "eu-west-1";
  FunctionRegion2["EuWest2"] = "eu-west-2";
  FunctionRegion2["EuWest3"] = "eu-west-3";
  FunctionRegion2["SaEast1"] = "sa-east-1";
  FunctionRegion2["UsEast1"] = "us-east-1";
  FunctionRegion2["UsWest1"] = "us-west-1";
  FunctionRegion2["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {}));
var __awaiter$7 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class FunctionsClient {
  constructor(url, { headers = {}, customFetch, region = FunctionRegion.Any } = {}) {
    this.url = url;
    this.headers = headers;
    this.region = region;
    this.fetch = resolveFetch$3(customFetch);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(token) {
    this.headers.Authorization = `Bearer ${token}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(functionName, options = {}) {
    var _a;
    return __awaiter$7(this, void 0, void 0, function* () {
      try {
        const { headers, method, body: functionArgs } = options;
        let _headers = {};
        let { region } = options;
        if (!region) {
          region = this.region;
        }
        const url = new URL(`${this.url}/${functionName}`);
        if (region && region !== "any") {
          _headers["x-region"] = region;
          url.searchParams.set("forceFunctionRegion", region);
        }
        let body;
        if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
          if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
            _headers["Content-Type"] = "application/octet-stream";
            body = functionArgs;
          } else if (typeof functionArgs === "string") {
            _headers["Content-Type"] = "text/plain";
            body = functionArgs;
          } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) {
            body = functionArgs;
          } else {
            _headers["Content-Type"] = "application/json";
            body = JSON.stringify(functionArgs);
          }
        }
        const response = yield this.fetch(url.toString(), {
          method: method || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
          body
        }).catch((fetchError) => {
          throw new FunctionsFetchError(fetchError);
        });
        const isRelayError = response.headers.get("x-relay-error");
        if (isRelayError && isRelayError === "true") {
          throw new FunctionsRelayError(response);
        }
        if (!response.ok) {
          throw new FunctionsHttpError(response);
        }
        let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
        let data;
        if (responseType === "application/json") {
          data = yield response.json();
        } else if (responseType === "application/octet-stream") {
          data = yield response.blob();
        } else if (responseType === "text/event-stream") {
          data = response;
        } else if (responseType === "multipart/form-data") {
          data = yield response.formData();
        } else {
          data = yield response.text();
        }
        return { data, error: null, response };
      } catch (error) {
        return {
          data: null,
          error,
          response: error instanceof FunctionsHttpError || error instanceof FunctionsRelayError ? error.context : void 0
        };
      }
    });
  }
}
var cjs = {};
var PostgrestClient$2 = {};
var PostgrestQueryBuilder$2 = {};
var PostgrestFilterBuilder$2 = {};
var PostgrestTransformBuilder$2 = {};
var PostgrestBuilder$2 = {};
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
const fetch$1 = globalObject.fetch;
const nodeFetch = globalObject.fetch.bind(globalObject);
const Headers$1 = globalObject.Headers;
const Request = globalObject.Request;
const Response$1 = globalObject.Response;
const browser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Headers$1,
  Request,
  Response: Response$1,
  default: nodeFetch,
  fetch: fetch$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(browser);
var PostgrestError$2 = {};
Object.defineProperty(PostgrestError$2, "__esModule", { value: true });
let PostgrestError$1 = class PostgrestError extends Error {
  constructor(context) {
    super(context.message);
    this.name = "PostgrestError";
    this.details = context.details;
    this.hint = context.hint;
    this.code = context.code;
  }
};
PostgrestError$2.default = PostgrestError$1;
var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(PostgrestBuilder$2, "__esModule", { value: true });
const node_fetch_1 = __importDefault$5(require$$0);
const PostgrestError_1$1 = __importDefault$5(PostgrestError$2);
let PostgrestBuilder$1 = class PostgrestBuilder {
  constructor(builder) {
    var _a, _b;
    this.shouldThrowOnError = false;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = new Headers(builder.headers);
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
    this.signal = builder.signal;
    this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
    if (builder.fetch) {
      this.fetch = builder.fetch;
    } else if (typeof fetch === "undefined") {
      this.fetch = node_fetch_1.default;
    } else {
      this.fetch = fetch;
    }
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(name, value) {
    this.headers = new Headers(this.headers);
    this.headers.set(name, value);
    return this;
  }
  then(onfulfilled, onrejected) {
    if (this.schema === void 0) ;
    else if (["GET", "HEAD"].includes(this.method)) {
      this.headers.set("Accept-Profile", this.schema);
    } else {
      this.headers.set("Content-Profile", this.schema);
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers.set("Content-Type", "application/json");
    }
    const _fetch = this.fetch;
    let res = _fetch(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (res2) => {
      var _a, _b, _c, _d;
      let error = null;
      let data = null;
      let count = null;
      let status = res2.status;
      let statusText = res2.statusText;
      if (res2.ok) {
        if (this.method !== "HEAD") {
          const body = await res2.text();
          if (body === "") ;
          else if (this.headers.get("Accept") === "text/csv") {
            data = body;
          } else if (this.headers.get("Accept") && ((_a = this.headers.get("Accept")) === null || _a === void 0 ? void 0 : _a.includes("application/vnd.pgrst.plan+text"))) {
            data = body;
          } else {
            data = JSON.parse(body);
          }
        }
        const countHeader = (_b = this.headers.get("Prefer")) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
        const contentRange = (_c = res2.headers.get("content-range")) === null || _c === void 0 ? void 0 : _c.split("/");
        if (countHeader && contentRange && contentRange.length > 1) {
          count = parseInt(contentRange[1]);
        }
        if (this.isMaybeSingle && this.method === "GET" && Array.isArray(data)) {
          if (data.length > 1) {
            error = {
              // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
              code: "PGRST116",
              details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            data = null;
            count = null;
            status = 406;
            statusText = "Not Acceptable";
          } else if (data.length === 1) {
            data = data[0];
          } else {
            data = null;
          }
        }
      } else {
        const body = await res2.text();
        try {
          error = JSON.parse(body);
          if (Array.isArray(error) && res2.status === 404) {
            data = [];
            error = null;
            status = 200;
            statusText = "OK";
          }
        } catch (_e) {
          if (res2.status === 404 && body === "") {
            status = 204;
            statusText = "No Content";
          } else {
            error = {
              message: body
            };
          }
        }
        if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes("0 rows"))) {
          error = null;
          status = 200;
          statusText = "OK";
        }
        if (error && this.shouldThrowOnError) {
          throw new PostgrestError_1$1.default(error);
        }
      }
      const postgrestResponse = {
        error,
        data,
        count,
        status,
        statusText
      };
      return postgrestResponse;
    });
    if (!this.shouldThrowOnError) {
      res = res.catch((fetchError) => {
        var _a, _b, _c;
        return {
          error: {
            message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
            details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""}`,
            hint: "",
            code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return res.then(onfulfilled, onrejected);
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Override the type of the returned `data` field in the response.
   *
   * @typeParam NewResult - The new type to cast the response data to
   * @typeParam Options - Optional type configuration (defaults to { merge: true })
   * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
   * @example
   * ```typescript
   * // Merge with existing types (default behavior)
   * const query = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ custom_field: string }>()
   *
   * // Replace existing types completely
   * const replaceQuery = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
   * ```
   * @returns A PostgrestBuilder instance with the new type
   */
  overrideTypes() {
    return this;
  }
};
PostgrestBuilder$2.default = PostgrestBuilder$1;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(PostgrestTransformBuilder$2, "__esModule", { value: true });
const PostgrestBuilder_1$1 = __importDefault$4(PostgrestBuilder$2);
let PostgrestTransformBuilder$1 = class PostgrestTransformBuilder extends PostgrestBuilder_1$1.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(columns) {
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.order` : "order";
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(key, `${count}`);
    return this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
    const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
    const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    if (this.method === "GET") {
      this.headers.set("Accept", "application/json");
    } else {
      this.headers.set("Accept", "application/vnd.pgrst.object+json");
    }
    this.isMaybeSingle = true;
    return this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
    var _a;
    const options = [
      analyze ? "analyze" : null,
      verbose ? "verbose" : null,
      settings ? "settings" : null,
      buffers ? "buffers" : null,
      wal ? "wal" : null
    ].filter(Boolean).join("|");
    const forMediatype = (_a = this.headers.get("Accept")) !== null && _a !== void 0 ? _a : "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
    if (format === "json") {
      return this;
    } else {
      return this;
    }
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Set the maximum number of rows that can be affected by the query.
   * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
   *
   * @param value - The maximum number of rows that can be affected
   */
  maxAffected(value) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${value}`);
    return this;
  }
};
PostgrestTransformBuilder$2.default = PostgrestTransformBuilder$1;
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(PostgrestFilterBuilder$2, "__esModule", { value: true });
const PostgrestTransformBuilder_1$1 = __importDefault$3(PostgrestTransformBuilder$2);
let PostgrestFilterBuilder$1 = class PostgrestFilterBuilder extends PostgrestTransformBuilder_1$1.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(column, value) {
    this.url.searchParams.append(column, `eq.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(column, value) {
    this.url.searchParams.append(column, `neq.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(column, value) {
    this.url.searchParams.append(column, `gt.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(column, value) {
    this.url.searchParams.append(column, `gte.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(column, value) {
    this.url.searchParams.append(column, `lt.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(column, value) {
    this.url.searchParams.append(column, `lte.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(column, pattern) {
    this.url.searchParams.append(column, `like.${pattern}`);
    return this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(column, patterns) {
    this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(column, pattern) {
    this.url.searchParams.append(column, `ilike.${pattern}`);
    return this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
    return this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(column, value) {
    this.url.searchParams.append(column, `is.${value}`);
    return this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && new RegExp("[,()]").test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `in.(${cleanedValues})`);
    return this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cs.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
    }
    return this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cd.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
    }
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(column, range) {
    this.url.searchParams.append(column, `sr.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(column, range) {
    this.url.searchParams.append(column, `nxl.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(column, range) {
    this.url.searchParams.append(column, `sl.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(column, range) {
    this.url.searchParams.append(column, `nxr.${range}`);
    return this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(column, range) {
    this.url.searchParams.append(column, `adj.${range}`);
    return this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `ov.${value}`);
    } else {
      this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
    }
    return this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(column, query, { config, type } = {}) {
    let typePart = "";
    if (type === "plain") {
      typePart = "pl";
    } else if (type === "phrase") {
      typePart = "ph";
    } else if (type === "websearch") {
      typePart = "w";
    }
    const configPart = config === void 0 ? "" : `(${config})`;
    this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(query) {
    Object.entries(query).forEach(([column, value]) => {
      this.url.searchParams.append(column, `eq.${value}`);
    });
    return this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(column, operator, value) {
    this.url.searchParams.append(column, `not.${operator}.${value}`);
    return this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.or` : "or";
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(column, operator, value) {
    this.url.searchParams.append(column, `${operator}.${value}`);
    return this;
  }
};
PostgrestFilterBuilder$2.default = PostgrestFilterBuilder$1;
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(PostgrestQueryBuilder$2, "__esModule", { value: true });
const PostgrestFilterBuilder_1$2 = __importDefault$2(PostgrestFilterBuilder$2);
let PostgrestQueryBuilder$1 = class PostgrestQueryBuilder {
  constructor(url, { headers = {}, schema, fetch: fetch2 }) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch2;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(columns, { head: head2 = false, count } = {}) {
    const method = head2 ? "HEAD" : "GET";
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    if (count) {
      this.headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder_1$2.default({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(values, { count, defaultToNull = true } = {}) {
    var _a;
    const method = "POST";
    if (count) {
      this.headers.append("Prefer", `count=${count}`);
    }
    if (!defaultToNull) {
      this.headers.append("Prefer", `missing=default`);
    }
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x2) => acc.concat(Object.keys(x2)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder_1$2.default({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
    var _a;
    const method = "POST";
    this.headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
    if (onConflict !== void 0)
      this.url.searchParams.set("on_conflict", onConflict);
    if (count) {
      this.headers.append("Prefer", `count=${count}`);
    }
    if (!defaultToNull) {
      this.headers.append("Prefer", "missing=default");
    }
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x2) => acc.concat(Object.keys(x2)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder_1$2.default({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(values, { count } = {}) {
    var _a;
    const method = "PATCH";
    if (count) {
      this.headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder_1$2.default({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count } = {}) {
    var _a;
    const method = "DELETE";
    if (count) {
      this.headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder_1$2.default({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
    });
  }
};
PostgrestQueryBuilder$2.default = PostgrestQueryBuilder$1;
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(PostgrestClient$2, "__esModule", { value: true });
const PostgrestQueryBuilder_1$1 = __importDefault$1(PostgrestQueryBuilder$2);
const PostgrestFilterBuilder_1$1 = __importDefault$1(PostgrestFilterBuilder$2);
let PostgrestClient$1 = class PostgrestClient {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(url, { headers = {}, schema, fetch: fetch2 } = {}) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.fetch = fetch2;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(relation) {
    const url = new URL(`${this.url}/${relation}`);
    return new PostgrestQueryBuilder_1$1.default(url, {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(schema) {
    return new PostgrestClient(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(fn, args = {}, { head: head2 = false, get: get2 = false, count } = {}) {
    var _a;
    let method;
    const url = new URL(`${this.url}/rpc/${fn}`);
    let body;
    if (head2 || get2) {
      method = head2 ? "HEAD" : "GET";
      Object.entries(args).filter(([_, value]) => value !== void 0).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else {
      method = "POST";
      body = args;
    }
    const headers = new Headers(this.headers);
    if (count) {
      headers.set("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder_1$1.default({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
    });
  }
};
PostgrestClient$2.default = PostgrestClient$1;
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(cjs, "__esModule", { value: true });
cjs.PostgrestError = cjs.PostgrestBuilder = cjs.PostgrestTransformBuilder = cjs.PostgrestFilterBuilder = cjs.PostgrestQueryBuilder = cjs.PostgrestClient = void 0;
const PostgrestClient_1 = __importDefault(PostgrestClient$2);
cjs.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = __importDefault(PostgrestQueryBuilder$2);
cjs.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = __importDefault(PostgrestFilterBuilder$2);
cjs.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = __importDefault(PostgrestTransformBuilder$2);
cjs.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = __importDefault(PostgrestBuilder$2);
cjs.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = __importDefault(PostgrestError$2);
cjs.PostgrestError = PostgrestError_1.default;
var _default = cjs.default = {
  PostgrestClient: PostgrestClient_1.default,
  PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
  PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
  PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
  PostgrestBuilder: PostgrestBuilder_1.default,
  PostgrestError: PostgrestError_1.default
};
const {
  PostgrestClient: PostgrestClient2,
  PostgrestQueryBuilder: PostgrestQueryBuilder2,
  PostgrestFilterBuilder: PostgrestFilterBuilder2,
  PostgrestTransformBuilder: PostgrestTransformBuilder2,
  PostgrestBuilder: PostgrestBuilder2,
  PostgrestError: PostgrestError2
} = _default;
class WebSocketFactory {
  static detectEnvironment() {
    var _a;
    if (typeof WebSocket !== "undefined") {
      return { type: "native", constructor: WebSocket };
    }
    if (typeof globalThis !== "undefined" && typeof globalThis.WebSocket !== "undefined") {
      return { type: "native", constructor: globalThis.WebSocket };
    }
    if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
      return { type: "native", constructor: global.WebSocket };
    }
    if (typeof globalThis !== "undefined" && typeof globalThis.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    }
    if (typeof globalThis !== "undefined" && globalThis.EdgeRuntime || typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes("Vercel-Edge"))) {
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    }
    if (typeof process !== "undefined") {
      const processVersions = process["versions"];
      if (processVersions && processVersions["node"]) {
        const versionString = processVersions["node"];
        const nodeVersion = parseInt(versionString.replace(/^v/, "").split(".")[0]);
        if (nodeVersion >= 22) {
          if (typeof globalThis.WebSocket !== "undefined") {
            return { type: "native", constructor: globalThis.WebSocket };
          }
          return {
            type: "unsupported",
            error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
            workaround: "Provide a WebSocket implementation via the transport option."
          };
        }
        return {
          type: "unsupported",
          error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
          workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url, { transport: ws })'
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const env = this.detectEnvironment();
    if (env.constructor) {
      return env.constructor;
    }
    let errorMessage = env.error || "WebSocket not supported in this environment.";
    if (env.workaround) {
      errorMessage += `

Suggested solution: ${env.workaround}`;
    }
    throw new Error(errorMessage);
  }
  static createWebSocket(url, protocols) {
    const WS = this.getWebSocketConstructor();
    return new WS(url, protocols);
  }
  static isWebSocketSupported() {
    try {
      const env = this.detectEnvironment();
      return env.type === "native" || env.type === "ws";
    } catch (_a) {
      return false;
    }
  }
}
const version$3 = "2.15.5";
const DEFAULT_VERSION = `realtime-js/${version$3}`;
const VSN = "1.0.0";
const DEFAULT_TIMEOUT = 1e4;
const WS_CLOSE_NORMAL = 1e3;
const MAX_PUSH_BUFFER_SIZE = 100;
var SOCKET_STATES;
(function(SOCKET_STATES2) {
  SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
  SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
  SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
  SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES2) {
  CHANNEL_STATES2["closed"] = "closed";
  CHANNEL_STATES2["errored"] = "errored";
  CHANNEL_STATES2["joined"] = "joined";
  CHANNEL_STATES2["joining"] = "joining";
  CHANNEL_STATES2["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS2) {
  CHANNEL_EVENTS2["close"] = "phx_close";
  CHANNEL_EVENTS2["error"] = "phx_error";
  CHANNEL_EVENTS2["join"] = "phx_join";
  CHANNEL_EVENTS2["reply"] = "phx_reply";
  CHANNEL_EVENTS2["leave"] = "phx_leave";
  CHANNEL_EVENTS2["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS2) {
  TRANSPORTS2["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE2) {
  CONNECTION_STATE2["Connecting"] = "connecting";
  CONNECTION_STATE2["Open"] = "open";
  CONNECTION_STATE2["Closing"] = "closing";
  CONNECTION_STATE2["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));
class Serializer {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this._binaryDecode(rawPayload));
    }
    if (typeof rawPayload === "string") {
      return callback(JSON.parse(rawPayload));
    }
    return callback({});
  }
  _binaryDecode(buffer) {
    const view = new DataView(buffer);
    const decoder = new TextDecoder();
    return this._decodeBroadcast(buffer, view, decoder);
  }
  _decodeBroadcast(buffer, view, decoder) {
    const topicSize = view.getUint8(1);
    const eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    const event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
    return { ref: null, topic, event, payload: data };
  }
}
class Timer {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = void 0;
    this.tries = 0;
    this.callback = callback;
    this.timerCalc = timerCalc;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
    this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var PostgresTypes;
(function(PostgresTypes2) {
  PostgresTypes2["abstime"] = "abstime";
  PostgresTypes2["bool"] = "bool";
  PostgresTypes2["date"] = "date";
  PostgresTypes2["daterange"] = "daterange";
  PostgresTypes2["float4"] = "float4";
  PostgresTypes2["float8"] = "float8";
  PostgresTypes2["int2"] = "int2";
  PostgresTypes2["int4"] = "int4";
  PostgresTypes2["int4range"] = "int4range";
  PostgresTypes2["int8"] = "int8";
  PostgresTypes2["int8range"] = "int8range";
  PostgresTypes2["json"] = "json";
  PostgresTypes2["jsonb"] = "jsonb";
  PostgresTypes2["money"] = "money";
  PostgresTypes2["numeric"] = "numeric";
  PostgresTypes2["oid"] = "oid";
  PostgresTypes2["reltime"] = "reltime";
  PostgresTypes2["text"] = "text";
  PostgresTypes2["time"] = "time";
  PostgresTypes2["timestamp"] = "timestamp";
  PostgresTypes2["timestamptz"] = "timestamptz";
  PostgresTypes2["timetz"] = "timetz";
  PostgresTypes2["tsrange"] = "tsrange";
  PostgresTypes2["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {}) => {
  var _a;
  const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
  return Object.keys(record).reduce((acc, rec_key) => {
    acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
    return acc;
  }, {});
};
const convertColumn = (columnName, columns, record, skipTypes) => {
  const column = columns.find((x2) => x2.name === columnName);
  const colType = column === null || column === void 0 ? void 0 : column.type;
  const value = record[columnName];
  if (colType && !skipTypes.includes(colType)) {
    return convertCell(colType, value);
  }
  return noop$1(value);
};
const convertCell = (type, value) => {
  if (type.charAt(0) === "_") {
    const dataType = type.slice(1, type.length);
    return toArray(value, dataType);
  }
  switch (type) {
    case PostgresTypes.bool:
      return toBoolean(value);
    case PostgresTypes.float4:
    case PostgresTypes.float8:
    case PostgresTypes.int2:
    case PostgresTypes.int4:
    case PostgresTypes.int8:
    case PostgresTypes.numeric:
    case PostgresTypes.oid:
      return toNumber(value);
    case PostgresTypes.json:
    case PostgresTypes.jsonb:
      return toJson(value);
    case PostgresTypes.timestamp:
      return toTimestampString(value);
    case PostgresTypes.abstime:
    case PostgresTypes.date:
    case PostgresTypes.daterange:
    case PostgresTypes.int4range:
    case PostgresTypes.int8range:
    case PostgresTypes.money:
    case PostgresTypes.reltime:
    case PostgresTypes.text:
    case PostgresTypes.time:
    case PostgresTypes.timestamptz:
    case PostgresTypes.timetz:
    case PostgresTypes.tsrange:
    case PostgresTypes.tstzrange:
      return noop$1(value);
    default:
      return noop$1(value);
  }
};
const noop$1 = (value) => {
  return value;
};
const toBoolean = (value) => {
  switch (value) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return value;
  }
};
const toNumber = (value) => {
  if (typeof value === "string") {
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }
  return value;
};
const toJson = (value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(`JSON parse error: ${error}`);
      return value;
    }
  }
  return value;
};
const toArray = (value, type) => {
  if (typeof value !== "string") {
    return value;
  }
  const lastIdx = value.length - 1;
  const closeBrace = value[lastIdx];
  const openBrace = value[0];
  if (openBrace === "{" && closeBrace === "}") {
    let arr;
    const valTrim = value.slice(1, lastIdx);
    try {
      arr = JSON.parse("[" + valTrim + "]");
    } catch (_) {
      arr = valTrim ? valTrim.split(",") : [];
    }
    return arr.map((val) => convertCell(type, val));
  }
  return value;
};
const toTimestampString = (value) => {
  if (typeof value === "string") {
    return value.replace(" ", "T");
  }
  return value;
};
const httpEndpointURL = (socketUrl) => {
  let url = socketUrl;
  url = url.replace(/^ws/i, "http");
  url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
  return url.replace(/\/+$/, "") + "/api/broadcast";
};
class Push {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(channel, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
    this.channel = channel;
    this.event = event;
    this.payload = payload;
    this.timeout = timeout;
    this.sent = false;
    this.timeoutTimer = void 0;
    this.ref = "";
    this.receivedResp = null;
    this.recHooks = [];
    this.refEvent = null;
  }
  resend(timeout) {
    this.timeout = timeout;
    this._cancelRefEvent();
    this.ref = "";
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
    this.send();
  }
  send() {
    if (this._hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    });
  }
  updatePayload(payload) {
    this.payload = Object.assign(Object.assign({}, this.payload), payload);
  }
  receive(status, callback) {
    var _a;
    if (this._hasReceived(status)) {
      callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      return;
    }
    this.ref = this.channel.socket._makeRef();
    this.refEvent = this.channel._replyEventName(this.ref);
    const callback = (payload) => {
      this._cancelRefEvent();
      this._cancelTimeout();
      this.receivedResp = payload;
      this._matchReceive(payload);
    };
    this.channel._on(this.refEvent, {}, callback);
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(status, response) {
    if (this.refEvent)
      this.channel._trigger(this.refEvent, { status, response });
  }
  destroy() {
    this._cancelRefEvent();
    this._cancelTimeout();
  }
  _cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = void 0;
  }
  _matchReceive({ status, response }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  _hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
}
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
  REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
  REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
  REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(channel, opts) {
    this.channel = channel;
    this.state = {};
    this.pendingDiffs = [];
    this.joinRef = null;
    this.enabled = false;
    this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(events.state, {}, (newState) => {
      const { onJoin, onLeave, onSync } = this.caller;
      this.joinRef = this.channel._joinRef();
      this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach((diff) => {
        this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel._on(events.diff, {}, (diff) => {
      const { onJoin, onLeave, onSync } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
    this.onJoin((key, currentPresences, newPresences) => {
      this.channel._trigger("presence", {
        event: "join",
        key,
        currentPresences,
        newPresences
      });
    });
    this.onLeave((key, currentPresences, leftPresences) => {
      this.channel._trigger("presence", {
        event: "leave",
        key,
        currentPresences,
        leftPresences
      });
    });
    this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(currentState, newState, onJoin, onLeave) {
    const state = this.cloneDeep(currentState);
    const transformedState = this.transformState(newState);
    const joins = {};
    const leaves = {};
    this.map(state, (key, presences) => {
      if (!transformedState[key]) {
        leaves[key] = presences;
      }
    });
    this.map(transformedState, (key, newPresences) => {
      const currentPresences = state[key];
      if (currentPresences) {
        const newPresenceRefs = newPresences.map((m2) => m2.presence_ref);
        const curPresenceRefs = currentPresences.map((m2) => m2.presence_ref);
        const joinedPresences = newPresences.filter((m2) => curPresenceRefs.indexOf(m2.presence_ref) < 0);
        const leftPresences = currentPresences.filter((m2) => newPresenceRefs.indexOf(m2.presence_ref) < 0);
        if (joinedPresences.length > 0) {
          joins[key] = joinedPresences;
        }
        if (leftPresences.length > 0) {
          leaves[key] = leftPresences;
        }
      } else {
        joins[key] = newPresences;
      }
    });
    return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(state, diff, onJoin, onLeave) {
    const { joins, leaves } = {
      joins: this.transformState(diff.joins),
      leaves: this.transformState(diff.leaves)
    };
    if (!onJoin) {
      onJoin = () => {
      };
    }
    if (!onLeave) {
      onLeave = () => {
      };
    }
    this.map(joins, (key, newPresences) => {
      var _a;
      const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
      state[key] = this.cloneDeep(newPresences);
      if (currentPresences.length > 0) {
        const joinedPresenceRefs = state[key].map((m2) => m2.presence_ref);
        const curPresences = currentPresences.filter((m2) => joinedPresenceRefs.indexOf(m2.presence_ref) < 0);
        state[key].unshift(...curPresences);
      }
      onJoin(key, currentPresences, newPresences);
    });
    this.map(leaves, (key, leftPresences) => {
      let currentPresences = state[key];
      if (!currentPresences)
        return;
      const presenceRefsToRemove = leftPresences.map((m2) => m2.presence_ref);
      currentPresences = currentPresences.filter((m2) => presenceRefsToRemove.indexOf(m2.presence_ref) < 0);
      state[key] = currentPresences;
      onLeave(key, currentPresences, leftPresences);
      if (currentPresences.length === 0)
        delete state[key];
    });
    return state;
  }
  /** @internal */
  static map(obj, func) {
    return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(state) {
    state = this.cloneDeep(state);
    return Object.getOwnPropertyNames(state).reduce((newState, key) => {
      const presences = state[key];
      if ("metas" in presences) {
        newState[key] = presences.metas.map((presence) => {
          presence["presence_ref"] = presence["phx_ref"];
          delete presence["phx_ref"];
          delete presence["phx_ref_prev"];
          return presence;
        });
      } else {
        newState[key] = presences;
      }
      return newState;
    }, {});
  }
  /** @internal */
  static cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  /** @internal */
  onJoin(callback) {
    this.caller.onJoin = callback;
  }
  /** @internal */
  onLeave(callback) {
    this.caller.onLeave = callback;
  }
  /** @internal */
  onSync(callback) {
    this.caller.onSync = callback;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES2) {
  REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
  REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
  REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
  REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES2) {
  REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
  REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
  REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
  REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
class RealtimeChannel {
  constructor(topic, params = { config: {} }, socket) {
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = {};
    this.state = CHANNEL_STATES.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.subTopic = topic.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: { ack: false, self: false },
      presence: { key: "", enabled: false },
      private: false
    }, params.config);
    this.timeout = this.socket.timeout;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.rejoinTimer = new Timer(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this._onClose(() => {
      this.rejoinTimer.reset();
      this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket._remove(this);
    });
    this._onError((reason) => {
      if (this._isLeaving() || this._isClosed()) {
        return;
      }
      this.socket.log("channel", `error ${this.topic}`, reason);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive("timeout", () => {
      if (!this._isJoining()) {
        return;
      }
      this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive("error", (reason) => {
      if (this._isLeaving() || this._isClosed()) {
        return;
      }
      this.socket.log("channel", `error ${this.topic}`, reason);
      this.state = CHANNEL_STATES.errored;
      this.rejoinTimer.scheduleTimeout();
    });
    this._on(CHANNEL_EVENTS.reply, {}, (payload, ref) => {
      this._trigger(this._replyEventName(ref), payload);
    });
    this.presence = new RealtimePresence(this);
    this.broadcastEndpointURL = httpEndpointURL(this.socket.endPoint);
    this.private = this.params.config.private || false;
  }
  /** Subscribe registers your client with the server */
  subscribe(callback, timeout = this.timeout) {
    var _a, _b, _c;
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.state == CHANNEL_STATES.closed) {
      const { config: { broadcast, presence, private: isPrivate } } = this.params;
      const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r2) => r2.filter)) !== null && _b !== void 0 ? _b : [];
      const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
      const accessTokenPayload = {};
      const config = {
        broadcast,
        presence: Object.assign(Object.assign({}, presence), { enabled: presence_enabled }),
        postgres_changes,
        private: isPrivate
      };
      if (this.socket.accessTokenValue) {
        accessTokenPayload.access_token = this.socket.accessTokenValue;
      }
      this._onError((e) => callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
      this._onClose(() => callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
      this.updateJoinPayload(Object.assign({ config }, accessTokenPayload));
      this.joinedOnce = true;
      this._rejoin(timeout);
      this.joinPush.receive("ok", async ({ postgres_changes: postgres_changes2 }) => {
        var _a2;
        this.socket.setAuth();
        if (postgres_changes2 === void 0) {
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
          return;
        } else {
          const clientPostgresBindings = this.bindings.postgres_changes;
          const bindingsLen = (_a2 = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a2 !== void 0 ? _a2 : 0;
          const newPostgresBindings = [];
          for (let i = 0; i < bindingsLen; i++) {
            const clientPostgresBinding = clientPostgresBindings[i];
            const { filter: { event, schema, table, filter } } = clientPostgresBinding;
            const serverPostgresFilter = postgres_changes2 && postgres_changes2[i];
            if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) {
              newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
            } else {
              this.unsubscribe();
              this.state = CHANNEL_STATES.errored;
              callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = newPostgresBindings;
          callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
          return;
        }
      }).receive("error", (error) => {
        this.state = CHANNEL_STATES.errored;
        callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
        return;
      }).receive("timeout", () => {
        callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
        return;
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(payload, opts = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload
    }, opts.timeout || this.timeout);
  }
  async untrack(opts = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, opts);
  }
  on(type, filter, callback) {
    if (this.state === CHANNEL_STATES.joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
      this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
      this.unsubscribe().then(() => this.subscribe());
    }
    return this._on(type, filter, callback);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(args, opts = {}) {
    var _a, _b;
    if (!this._canPush() && args.type === "broadcast") {
      const { event, payload: endpoint_payload } = args;
      const authorization = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
      const options = {
        method: "POST",
        headers: {
          Authorization: authorization,
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event,
              payload: endpoint_payload,
              private: this.private
            }
          ]
        })
      };
      try {
        const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
        await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
        return response.ok ? "ok" : "error";
      } catch (error) {
        if (error.name === "AbortError") {
          return "timed out";
        } else {
          return "error";
        }
      }
    } else {
      return new Promise((resolve) => {
        var _a2, _b2, _c;
        const push = this._push(args.type, args, opts.timeout || this.timeout);
        if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === void 0 ? void 0 : _a2.config) === null || _b2 === void 0 ? void 0 : _b2.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
          resolve("ok");
        }
        push.receive("ok", () => resolve("ok"));
        push.receive("error", () => resolve("error"));
        push.receive("timeout", () => resolve("timed out"));
      });
    }
  }
  updateJoinPayload(payload) {
    this.joinPush.updatePayload(payload);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(timeout = this.timeout) {
    this.state = CHANNEL_STATES.leaving;
    const onClose = () => {
      this.socket.log("channel", `leave ${this.topic}`);
      this._trigger(CHANNEL_EVENTS.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let leavePush = null;
    return new Promise((resolve) => {
      leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
      leavePush.receive("ok", () => {
        onClose();
        resolve("ok");
      }).receive("timeout", () => {
        onClose();
        resolve("timed out");
      }).receive("error", () => {
        resolve("error");
      });
      leavePush.send();
      if (!this._canPush()) {
        leavePush.trigger("ok", {});
      }
    }).finally(() => {
      leavePush === null || leavePush === void 0 ? void 0 : leavePush.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((push) => push.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = CHANNEL_STATES.closed;
    this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const id2 = setTimeout(() => controller.abort(), timeout);
    const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
    clearTimeout(id2);
    return response;
  }
  /** @internal */
  _push(event, payload, timeout = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let pushEvent = new Push(this, event, payload, timeout);
    if (this._canPush()) {
      pushEvent.send();
    } else {
      this._addToPushBuffer(pushEvent);
    }
    return pushEvent;
  }
  /** @internal */
  _addToPushBuffer(pushEvent) {
    pushEvent.startTimeout();
    this.pushBuffer.push(pushEvent);
    if (this.pushBuffer.length > MAX_PUSH_BUFFER_SIZE) {
      const removedPush = this.pushBuffer.shift();
      if (removedPush) {
        removedPush.destroy();
        this.socket.log("channel", `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
      }
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(_event, payload, _ref) {
    return payload;
  }
  /** @internal */
  _isMember(topic) {
    return this.topic === topic;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(type, payload, ref) {
    var _a, _b;
    const typeLower = type.toLocaleLowerCase();
    const { close, error, leave, join } = CHANNEL_EVENTS;
    const events = [close, error, leave, join];
    if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
      return;
    }
    let handledPayload = this._onMessage(typeLower, payload, ref);
    if (payload && !handledPayload) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    if (["insert", "update", "delete"].includes(typeLower)) {
      (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind) => {
        var _a2, _b2, _c;
        return ((_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event) === "*" || ((_c = (_b2 = bind.filter) === null || _b2 === void 0 ? void 0 : _b2.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
      }).map((bind) => bind.callback(handledPayload, ref));
    } else {
      (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind) => {
        var _a2, _b2, _c, _d, _e, _f;
        if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
          if ("id" in bind) {
            const bindId = bind.id;
            const bindEvent = (_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event;
            return bindId && ((_b2 = payload.ids) === null || _b2 === void 0 ? void 0 : _b2.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
          } else {
            const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
            return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
          }
        } else {
          return bind.type.toLocaleLowerCase() === typeLower;
        }
      }).map((bind) => {
        if (typeof handledPayload === "object" && "ids" in handledPayload) {
          const postgresChanges = handledPayload.data;
          const { schema, table, commit_timestamp, type: type2, errors } = postgresChanges;
          const enrichedPayload = {
            schema,
            table,
            commit_timestamp,
            eventType: type2,
            new: {},
            old: {},
            errors
          };
          handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
        }
        bind.callback(handledPayload, ref);
      });
    }
  }
  /** @internal */
  _isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
  /** @internal */
  _replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  /** @internal */
  _on(type, filter, callback) {
    const typeLower = type.toLocaleLowerCase();
    const binding = {
      type: typeLower,
      filter,
      callback
    };
    if (this.bindings[typeLower]) {
      this.bindings[typeLower].push(binding);
    } else {
      this.bindings[typeLower] = [binding];
    }
    return this;
  }
  /** @internal */
  _off(type, filter) {
    const typeLower = type.toLocaleLowerCase();
    if (this.bindings[typeLower]) {
      this.bindings[typeLower] = this.bindings[typeLower].filter((bind) => {
        var _a;
        return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
      });
    }
    return this;
  }
  /** @internal */
  static isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (const k2 in obj1) {
      if (obj1[k2] !== obj2[k2]) {
        return false;
      }
    }
    return true;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout();
    if (this.socket.isConnected()) {
      this._rejoin();
    }
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(callback) {
    this._on(CHANNEL_EVENTS.close, {}, callback);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(callback) {
    this._on(CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(timeout = this.timeout) {
    if (this._isLeaving()) {
      return;
    }
    this.socket._leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  /** @internal */
  _getPayloadRecords(payload) {
    const records = {
      new: {},
      old: {}
    };
    if (payload.type === "INSERT" || payload.type === "UPDATE") {
      records.new = convertChangeData(payload.columns, payload.record);
    }
    if (payload.type === "UPDATE" || payload.type === "DELETE") {
      records.old = convertChangeData(payload.columns, payload.old_record);
    }
    return records;
  }
}
const noop = () => {
};
const CONNECTION_TIMEOUTS = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
};
const RECONNECT_INTERVALS = [1e3, 2e3, 5e3, 1e4];
const DEFAULT_RECONNECT_FALLBACK = 1e4;
const WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class RealtimeClient {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(endPoint, options) {
    var _a;
    this.accessTokenValue = null;
    this.apiKey = null;
    this.channels = new Array();
    this.endPoint = "";
    this.httpEndpoint = "";
    this.headers = {};
    this.params = {};
    this.timeout = DEFAULT_TIMEOUT;
    this.transport = null;
    this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
    this.heartbeatTimer = void 0;
    this.pendingHeartbeatRef = null;
    this.heartbeatCallback = noop;
    this.ref = 0;
    this.reconnectTimer = null;
    this.logger = noop;
    this.conn = null;
    this.sendBuffer = [];
    this.serializer = new Serializer();
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.accessToken = null;
    this._connectionState = "disconnected";
    this._wasManualDisconnect = false;
    this._authPromise = null;
    this._resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = (...args) => __vitePreload(async () => {
          const { default: fetch2 } = await Promise.resolve().then(() => browser);
          return { default: fetch2 };
        }, true ? void 0 : void 0, import.meta.url).then(({ default: fetch2 }) => fetch2(...args)).catch((error) => {
          throw new Error(`Failed to load @supabase/node-fetch: ${error.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
        });
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
    if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
      throw new Error("API key is required to connect to Realtime");
    }
    this.apiKey = options.params.apikey;
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.httpEndpoint = httpEndpointURL(endPoint);
    this._initializeOptions(options);
    this._setupReconnectionTimer();
    this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
      return;
    }
    this._setConnectionState("connecting");
    this._setAuthSafely("connect");
    if (this.transport) {
      this.conn = new this.transport(this.endpointURL());
    } else {
      try {
        this.conn = WebSocketFactory.createWebSocket(this.endpointURL());
      } catch (error) {
        this._setConnectionState("disconnected");
        const errorMessage = error.message;
        if (errorMessage.includes("Node.js")) {
          throw new Error(`${errorMessage}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`);
        }
        throw new Error(`WebSocket not available: ${errorMessage}`);
      }
    }
    this._setupConnectionHandlers();
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: VSN }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(code, reason) {
    if (this.isDisconnecting()) {
      return;
    }
    this._setConnectionState("disconnecting", true);
    if (this.conn) {
      const fallbackTimer = setTimeout(() => {
        this._setConnectionState("disconnected");
      }, 100);
      this.conn.onclose = () => {
        clearTimeout(fallbackTimer);
        this._setConnectionState("disconnected");
      };
      if (code) {
        this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
      } else {
        this.conn.close();
      }
      this._teardownConnection();
    } else {
      this._setConnectionState("disconnected");
    }
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(channel) {
    const status = await channel.unsubscribe();
    if (this.channels.length === 0) {
      this.disconnect();
    }
    return status;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const values_1 = await Promise.all(this.channels.map((channel) => channel.unsubscribe()));
    this.channels = [];
    this.disconnect();
    return values_1;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(kind, msg, data) {
    this.logger(kind, msg, data);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return CONNECTION_STATE.Connecting;
      case SOCKET_STATES.open:
        return CONNECTION_STATE.Open;
      case SOCKET_STATES.closing:
        return CONNECTION_STATE.Closing;
      default:
        return CONNECTION_STATE.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === CONNECTION_STATE.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(topic, params = { config: {} }) {
    const realtimeTopic = `realtime:${topic}`;
    const exists = this.getChannels().find((c) => c.topic === realtimeTopic);
    if (!exists) {
      const chan = new RealtimeChannel(`realtime:${topic}`, params, this);
      this.channels.push(chan);
      return chan;
    } else {
      return exists;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(data) {
    const { topic, event, payload, ref } = data;
    const callback = () => {
      this.encode(data, (result) => {
        var _a;
        (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
      });
    };
    this.log("push", `${topic} ${event} (${ref})`, payload);
    if (this.isConnected()) {
      callback();
    } else {
      this.sendBuffer.push(callback);
    }
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(token = null) {
    this._authPromise = this._performAuth(token);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var _a;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this._wasManualDisconnect = false;
      (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "heartbeat timeout");
      setTimeout(() => {
        var _a2;
        if (!this.isConnected()) {
          (_a2 = this.reconnectTimer) === null || _a2 === void 0 ? void 0 : _a2.scheduleTimeout();
        }
      }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (e) {
      this.log("error", "error in heartbeat callback", e);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(callback) {
    this.heartbeatCallback = callback;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c._isJoined() || c._isJoining()));
    if (dupChannel) {
      this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.unsubscribe();
    }
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(channel) {
    this.channels = this.channels.filter((c) => c.topic !== channel.topic);
  }
  /** @internal */
  _onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      if (msg.topic === "phoenix" && msg.event === "phx_reply") {
        try {
          this.heartbeatCallback(msg.payload.status === "ok" ? "ok" : "error");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
      }
      if (msg.ref && msg.ref === this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
      }
      const { topic, event, payload, ref } = msg;
      const refString = ref ? `(${ref})` : "";
      const status = payload.status || "";
      this.log("receive", `${status} ${topic} ${event} ${refString}`.trim(), payload);
      this.channels.filter((channel) => channel._isMember(topic)).forEach((channel) => channel._trigger(event, payload, ref));
      this._triggerStateCallbacks("message", msg);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(timer) {
    var _a;
    if (timer === "heartbeat" && this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = void 0;
    } else if (timer === "reconnect") {
      (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.reset();
    }
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat");
    this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    if (!this.conn)
      return;
    if ("binaryType" in this.conn) {
      this.conn.binaryType = "arraybuffer";
    }
    this.conn.onopen = () => this._onConnOpen();
    this.conn.onerror = (error) => this._onConnError(error);
    this.conn.onmessage = (event) => this._onConnMessage(event);
    this.conn.onclose = (event) => this._onConnClose(event);
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      this.conn.onopen = null;
      this.conn.onerror = null;
      this.conn.onmessage = null;
      this.conn.onclose = null;
      this.conn = null;
    }
    this._clearAllTimers();
    this.channels.forEach((channel) => channel.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected");
    this.log("transport", `connected to ${this.endpointURL()}`);
    this.flushSendBuffer();
    this._clearTimer("reconnect");
    if (!this.worker) {
      this._startHeartbeat();
    } else {
      if (!this.workerRef) {
        this._startWorkerHeartbeat();
      }
    }
    this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    if (this.workerUrl) {
      this.log("worker", `starting worker for from ${this.workerUrl}`);
    } else {
      this.log("worker", `starting default worker`);
    }
    const objectUrl = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(objectUrl);
    this.workerRef.onerror = (error) => {
      this.log("worker", "worker error", error.message);
      this.workerRef.terminate();
    };
    this.workerRef.onmessage = (event) => {
      if (event.data.event === "keepAlive") {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(event) {
    var _a;
    this._setConnectionState("disconnected");
    this.log("transport", "close", event);
    this._triggerChanError();
    this._clearTimer("heartbeat");
    if (!this._wasManualDisconnect) {
      (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
    }
    this._triggerStateCallbacks("close", event);
  }
  /** @internal */
  _onConnError(error) {
    this._setConnectionState("disconnected");
    this.log("transport", `${error}`);
    this._triggerChanError();
    this._triggerStateCallbacks("error", error);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((channel) => channel._trigger(CHANNEL_EVENTS.error));
  }
  /** @internal */
  _appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    const prefix = url.match(/\?/) ? "&" : "?";
    const query = new URLSearchParams(params);
    return `${url}${prefix}${query}`;
  }
  _workerObjectUrl(url) {
    let result_url;
    if (url) {
      result_url = url;
    } else {
      const blob = new Blob([WORKER_SCRIPT], { type: "application/javascript" });
      result_url = URL.createObjectURL(blob);
    }
    return result_url;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(state, manual = false) {
    this._connectionState = state;
    if (state === "connecting") {
      this._wasManualDisconnect = false;
    } else if (state === "disconnecting") {
      this._wasManualDisconnect = manual;
    }
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(token = null) {
    let tokenToSend;
    if (token) {
      tokenToSend = token;
    } else if (this.accessToken) {
      tokenToSend = await this.accessToken();
    } else {
      tokenToSend = this.accessTokenValue;
    }
    if (this.accessTokenValue != tokenToSend) {
      this.accessTokenValue = tokenToSend;
      this.channels.forEach((channel) => {
        const payload = {
          access_token: tokenToSend,
          version: DEFAULT_VERSION
        };
        tokenToSend && channel.updateJoinPayload(payload);
        if (channel.joinedOnce && channel._isJoined()) {
          channel._push(CHANNEL_EVENTS.access_token, {
            access_token: tokenToSend
          });
        }
      });
    }
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    if (this._authPromise) {
      await this._authPromise;
    }
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(context = "general") {
    this.setAuth().catch((e) => {
      this.log("error", `error setting auth in ${context}`, e);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(event, data) {
    try {
      this.stateChangeCallbacks[event].forEach((callback) => {
        try {
          callback(data);
        } catch (e) {
          this.log("error", `error in ${event} callback`, e);
        }
      });
    } catch (e) {
      this.log("error", `error triggering ${event} callbacks`, e);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new Timer(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded();
        if (!this.isConnected()) {
          this.connect();
        }
      }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    this.transport = (_a = options === null || options === void 0 ? void 0 : options.transport) !== null && _a !== void 0 ? _a : null;
    this.timeout = (_b = options === null || options === void 0 ? void 0 : options.timeout) !== null && _b !== void 0 ? _b : DEFAULT_TIMEOUT;
    this.heartbeatIntervalMs = (_c = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _c !== void 0 ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
    this.worker = (_d = options === null || options === void 0 ? void 0 : options.worker) !== null && _d !== void 0 ? _d : false;
    this.accessToken = (_e = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _e !== void 0 ? _e : null;
    this.heartbeatCallback = (_f = options === null || options === void 0 ? void 0 : options.heartbeatCallback) !== null && _f !== void 0 ? _f : noop;
    if (options === null || options === void 0 ? void 0 : options.params)
      this.params = options.params;
    if (options === null || options === void 0 ? void 0 : options.logger)
      this.logger = options.logger;
    if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
      this.logLevel = options.logLevel || options.log_level;
      this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel });
    }
    this.reconnectAfterMs = (_g = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _g !== void 0 ? _g : (tries) => {
      return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
    };
    this.encode = (_h = options === null || options === void 0 ? void 0 : options.encode) !== null && _h !== void 0 ? _h : (payload, callback) => {
      return callback(JSON.stringify(payload));
    };
    this.decode = (_j = options === null || options === void 0 ? void 0 : options.decode) !== null && _j !== void 0 ? _j : this.serializer.decode.bind(this.serializer);
    if (this.worker) {
      if (typeof window !== "undefined" && !window.Worker) {
        throw new Error("Web Worker is not supported");
      }
      this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
    }
  }
}
class StorageError extends Error {
  constructor(message) {
    super(message);
    this.__isStorageError = true;
    this.name = "StorageError";
  }
}
function isStorageError(error) {
  return typeof error === "object" && error !== null && "__isStorageError" in error;
}
class StorageApiError extends StorageError {
  constructor(message, status, statusCode) {
    super(message);
    this.name = "StorageApiError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class StorageUnknownError extends StorageError {
  constructor(message, originalError) {
    super(message);
    this.name = "StorageUnknownError";
    this.originalError = originalError;
  }
}
var __awaiter$6 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const resolveFetch$2 = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = (...args) => __vitePreload(async () => {
      const { default: fetch2 } = await Promise.resolve().then(() => browser);
      return { default: fetch2 };
    }, true ? void 0 : void 0, import.meta.url).then(({ default: fetch2 }) => fetch2(...args));
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};
const resolveResponse = () => __awaiter$6(void 0, void 0, void 0, function* () {
  if (typeof Response === "undefined") {
    return (yield __vitePreload(() => Promise.resolve().then(() => browser), true ? void 0 : void 0, import.meta.url)).Response;
  }
  return Response;
});
const recursiveToCamel = (item) => {
  if (Array.isArray(item)) {
    return item.map((el2) => recursiveToCamel(el2));
  } else if (typeof item === "function" || item !== Object(item)) {
    return item;
  }
  const result = {};
  Object.entries(item).forEach(([key, value]) => {
    const newKey = key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    result[newKey] = recursiveToCamel(value);
  });
  return result;
};
const isPlainObject = (value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
var __awaiter$5 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const _getErrorMessage$1 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError$1 = (error, reject, options) => __awaiter$5(void 0, void 0, void 0, function* () {
  const Res = yield resolveResponse();
  if (error instanceof Res && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
    error.json().then((err) => {
      const status = error.status || 500;
      const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || status + "";
      reject(new StorageApiError(_getErrorMessage$1(err), status, statusCode));
    }).catch((err) => {
      reject(new StorageUnknownError(_getErrorMessage$1(err), err));
    });
  } else {
    reject(new StorageUnknownError(_getErrorMessage$1(error), error));
  }
});
const _getRequestParams$1 = (method, options, parameters, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET" || !body) {
    return params;
  }
  if (isPlainObject(body)) {
    params.headers = Object.assign({ "Content-Type": "application/json" }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
  } else {
    params.body = body;
  }
  if (options === null || options === void 0 ? void 0 : options.duplex) {
    params.duplex = options.duplex;
  }
  return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest$1(fetcher, method, url, options, parameters, body) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams$1(method, options, parameters, body)).then((result) => {
        if (!result.ok)
          throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson)
          return result;
        return result.json();
      }).then((data) => resolve(data)).catch((error) => handleError$1(error, reject, options));
    });
  });
}
function get(fetcher, url, options, parameters) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return _handleRequest$1(fetcher, "GET", url, options, parameters);
  });
}
function post(fetcher, url, body, options, parameters) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return _handleRequest$1(fetcher, "POST", url, options, parameters, body);
  });
}
function put(fetcher, url, body, options, parameters) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return _handleRequest$1(fetcher, "PUT", url, options, parameters, body);
  });
}
function head(fetcher, url, options, parameters) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return _handleRequest$1(fetcher, "HEAD", url, Object.assign(Object.assign({}, options), { noResolveJson: true }), parameters);
  });
}
function remove(fetcher, url, body, options, parameters) {
  return __awaiter$5(this, void 0, void 0, function* () {
    return _handleRequest$1(fetcher, "DELETE", url, options, parameters, body);
  });
}
var __awaiter$4 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
const DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
class StorageFileApi {
  constructor(url, headers = {}, bucketId, fetch2) {
    this.shouldThrowOnError = false;
    this.url = url;
    this.headers = headers;
    this.bucketId = bucketId;
    this.fetch = resolveFetch$2(fetch2);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(method, path, fileBody, fileOptions) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        let body;
        const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
        let headers = Object.assign(Object.assign({}, this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
        const metadata = options.metadata;
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          if (metadata) {
            body.append("metadata", this.encodeMetadata(metadata));
          }
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
          if (metadata) {
            body.append("metadata", this.encodeMetadata(metadata));
          }
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
          if (metadata) {
            headers["x-metadata"] = this.toBase64(this.encodeMetadata(metadata));
          }
        }
        if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) {
          headers = Object.assign(Object.assign({}, headers), fileOptions.headers);
        }
        const cleanPath = this._removeEmptyFolders(path);
        const _path = this._getFinalPath(cleanPath);
        const data = yield (method == "PUT" ? put : post)(this.fetch, `${this.url}/object/${_path}`, body, Object.assign({ headers }, (options === null || options === void 0 ? void 0 : options.duplex) ? { duplex: options.duplex } : {}));
        return {
          data: { path: cleanPath, id: data.Id, fullPath: data.Key },
          error: null
        };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(path, fileBody, fileOptions) {
    return __awaiter$4(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(path, token, fileBody, fileOptions) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const cleanPath = this._removeEmptyFolders(path);
      const _path = this._getFinalPath(cleanPath);
      const url = new URL(this.url + `/object/upload/sign/${_path}`);
      url.searchParams.set("token", token);
      try {
        let body;
        const options = Object.assign({ upsert: DEFAULT_FILE_OPTIONS.upsert }, fileOptions);
        const headers = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(options.upsert) });
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
        }
        const data = yield put(this.fetch, url.toString(), body, { headers });
        return {
          data: { path: cleanPath, fullPath: data.Key },
          error: null
        };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(path, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        let _path = this._getFinalPath(path);
        const headers = Object.assign({}, this.headers);
        if (options === null || options === void 0 ? void 0 : options.upsert) {
          headers["x-upsert"] = "true";
        }
        const data = yield post(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, { headers });
        const url = new URL(this.url + data.url);
        const token = url.searchParams.get("token");
        if (!token) {
          throw new StorageError("No token returned by API");
        }
        return { data: { signedUrl: url.toString(), path, token }, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(path, fileBody, fileOptions) {
    return __awaiter$4(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(fromPath, toPath, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(fromPath, toPath, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: this.headers });
        return { data: { path: data.Key }, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(path, expiresIn, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        let _path = this._getFinalPath(path);
        let data = yield post(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({ expiresIn }, (options === null || options === void 0 ? void 0 : options.transform) ? { transform: options.transform } : {}), { headers: this.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
        data = { signedUrl };
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(paths, expiresIn, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn, paths }, { headers: this.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        return {
          data: data.map((datum) => Object.assign(Object.assign({}, datum), { signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null })),
          error: null
        };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(path, options) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
      const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
      const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
      const queryString = transformationQuery ? `?${transformationQuery}` : "";
      try {
        const _path = this._getFinalPath(path);
        const res = yield get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
          headers: this.headers,
          noResolveJson: true
        });
        const data = yield res.blob();
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(path) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const _path = this._getFinalPath(path);
      try {
        const data = yield get(this.fetch, `${this.url}/object/info/${_path}`, {
          headers: this.headers
        });
        return { data: recursiveToCamel(data), error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(path) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const _path = this._getFinalPath(path);
      try {
        yield head(this.fetch, `${this.url}/object/${_path}`, {
          headers: this.headers
        });
        return { data: true, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error) && error instanceof StorageUnknownError) {
          const originalError = error.originalError;
          if ([400, 404].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) {
            return { data: false, error };
          }
        }
        throw error;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(path, options) {
    const _path = this._getFinalPath(path);
    const _queryString = [];
    const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
    if (downloadQueryParam !== "") {
      _queryString.push(downloadQueryParam);
    }
    const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
    const renderPath = wantsTransformation ? "render/image" : "object";
    const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
    if (transformationQuery !== "") {
      _queryString.push(transformationQuery);
    }
    let queryString = _queryString.join("&");
    if (queryString !== "") {
      queryString = `?${queryString}`;
    }
    return {
      data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(paths) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const data = yield remove(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files and folders within a path of the bucket.
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   */
  list(path, options, parameters) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || "" });
        const data = yield post(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   * @param options search options
   * @param parameters
   */
  listV2(options, parameters) {
    return __awaiter$4(this, void 0, void 0, function* () {
      try {
        const body = Object.assign({}, options);
        const data = yield post(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, body, { headers: this.headers }, parameters);
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  encodeMetadata(metadata) {
    return JSON.stringify(metadata);
  }
  toBase64(data) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(data).toString("base64");
    }
    return btoa(data);
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(transform) {
    const params = [];
    if (transform.width) {
      params.push(`width=${transform.width}`);
    }
    if (transform.height) {
      params.push(`height=${transform.height}`);
    }
    if (transform.resize) {
      params.push(`resize=${transform.resize}`);
    }
    if (transform.format) {
      params.push(`format=${transform.format}`);
    }
    if (transform.quality) {
      params.push(`quality=${transform.quality}`);
    }
    return params.join("&");
  }
}
const version$2 = "2.12.1";
const DEFAULT_HEADERS$2 = { "X-Client-Info": `storage-js/${version$2}` };
var __awaiter$3 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class StorageBucketApi {
  constructor(url, headers = {}, fetch2, opts) {
    this.shouldThrowOnError = false;
    const baseUrl = new URL(url);
    if (opts === null || opts === void 0 ? void 0 : opts.useNewHostname) {
      const isSupabaseHost = /supabase\.(co|in|red)$/.test(baseUrl.hostname);
      if (isSupabaseHost && !baseUrl.hostname.includes("storage.supabase.")) {
        baseUrl.hostname = baseUrl.hostname.replace("supabase.", "storage.supabase.");
      }
    }
    this.url = baseUrl.href;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS$2), headers);
    this.fetch = resolveFetch$2(fetch2);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield get(this.fetch, `${this.url}/bucket`, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(id2) {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield get(this.fetch, `${this.url}/bucket/${id2}`, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   */
  createBucket(id2, options = {
    public: false
  }) {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/bucket`, {
          id: id2,
          name: id2,
          type: options.type,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(id2, options) {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield put(this.fetch, `${this.url}/bucket/${id2}`, {
          id: id2,
          name: id2,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(id2) {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield post(this.fetch, `${this.url}/bucket/${id2}/empty`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(id2) {
    return __awaiter$3(this, void 0, void 0, function* () {
      try {
        const data = yield remove(this.fetch, `${this.url}/bucket/${id2}`, {}, { headers: this.headers });
        return { data, error: null };
      } catch (error) {
        if (this.shouldThrowOnError) {
          throw error;
        }
        if (isStorageError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
}
class StorageClient extends StorageBucketApi {
  constructor(url, headers = {}, fetch2, opts) {
    super(url, headers, fetch2, opts);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(id2) {
    return new StorageFileApi(this.url, this.headers, id2, this.fetch);
  }
}
const version$1 = "2.57.4";
let JS_ENV = "";
if (typeof Deno !== "undefined") {
  JS_ENV = "deno";
} else if (typeof document !== "undefined") {
  JS_ENV = "web";
} else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
  JS_ENV = "react-native";
} else {
  JS_ENV = "node";
}
const DEFAULT_HEADERS$1 = { "X-Client-Info": `supabase-js-${JS_ENV}/${version$1}` };
const DEFAULT_GLOBAL_OPTIONS = {
  headers: DEFAULT_HEADERS$1
};
const DEFAULT_DB_OPTIONS = {
  schema: "public"
};
const DEFAULT_AUTH_OPTIONS = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
const DEFAULT_REALTIME_OPTIONS = {};
var __awaiter$2 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const resolveFetch$1 = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = nodeFetch;
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};
const resolveHeadersConstructor = () => {
  if (typeof Headers === "undefined") {
    return Headers$1;
  }
  return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
  const fetch2 = resolveFetch$1(customFetch);
  const HeadersConstructor = resolveHeadersConstructor();
  return (input, init) => __awaiter$2(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
    let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
    if (!headers.has("apikey")) {
      headers.set("apikey", supabaseKey);
    }
    if (!headers.has("Authorization")) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return fetch2(input, Object.assign(Object.assign({}, init), { headers }));
  });
};
var __awaiter$1 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function ensureTrailingSlash(url) {
  return url.endsWith("/") ? url : url + "/";
}
function applySettingDefaults(options, defaults) {
  var _a, _b;
  const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
  const { db: DEFAULT_DB_OPTIONS2, auth: DEFAULT_AUTH_OPTIONS2, realtime: DEFAULT_REALTIME_OPTIONS2, global: DEFAULT_GLOBAL_OPTIONS2 } = defaults;
  const result = {
    db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS2), dbOptions),
    auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS2), authOptions),
    realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS2), realtimeOptions),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS2), globalOptions), { headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS2 === null || DEFAULT_GLOBAL_OPTIONS2 === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS2.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {}) }),
    accessToken: () => __awaiter$1(this, void 0, void 0, function* () {
      return "";
    })
  };
  if (options.accessToken) {
    result.accessToken = options.accessToken;
  } else {
    delete result.accessToken;
  }
  return result;
}
function validateSupabaseUrl(supabaseUrl) {
  const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
  if (!trimmedUrl) {
    throw new Error("supabaseUrl is required.");
  }
  if (!trimmedUrl.match(/^https?:\/\//i)) {
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  }
  try {
    return new URL(ensureTrailingSlash(trimmedUrl));
  } catch (_a) {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
const version = "2.71.1";
const AUTO_REFRESH_TICK_DURATION_MS = 30 * 1e3;
const AUTO_REFRESH_TICK_THRESHOLD = 3;
const EXPIRY_MARGIN_MS = AUTO_REFRESH_TICK_THRESHOLD * AUTO_REFRESH_TICK_DURATION_MS;
const GOTRUE_URL = "http://localhost:9999";
const STORAGE_KEY = "supabase.auth.token";
const DEFAULT_HEADERS = { "X-Client-Info": `gotrue-js/${version}` };
const API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
const API_VERSIONS = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
const BASE64URL_REGEX = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
const JWKS_TTL = 10 * 60 * 1e3;
class AuthError extends Error {
  constructor(message, status, code) {
    super(message);
    this.__isAuthError = true;
    this.name = "AuthError";
    this.status = status;
    this.code = code;
  }
}
function isAuthError(error) {
  return typeof error === "object" && error !== null && "__isAuthError" in error;
}
class AuthApiError extends AuthError {
  constructor(message, status, code) {
    super(message, status, code);
    this.name = "AuthApiError";
    this.status = status;
    this.code = code;
  }
}
function isAuthApiError(error) {
  return isAuthError(error) && error.name === "AuthApiError";
}
class AuthUnknownError extends AuthError {
  constructor(message, originalError) {
    super(message);
    this.name = "AuthUnknownError";
    this.originalError = originalError;
  }
}
class CustomAuthError extends AuthError {
  constructor(message, name, status, code) {
    super(message, status, code);
    this.name = name;
    this.status = status;
  }
}
class AuthSessionMissingError extends CustomAuthError {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function isAuthSessionMissingError(error) {
  return isAuthError(error) && error.name === "AuthSessionMissingError";
}
class AuthInvalidTokenResponseError extends CustomAuthError {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class AuthInvalidCredentialsError extends CustomAuthError {
  constructor(message) {
    super(message, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class AuthImplicitGrantRedirectError extends CustomAuthError {
  constructor(message, details = null) {
    super(message, "AuthImplicitGrantRedirectError", 500, void 0);
    this.details = null;
    this.details = details;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function isAuthImplicitGrantRedirectError(error) {
  return isAuthError(error) && error.name === "AuthImplicitGrantRedirectError";
}
class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
  constructor(message, details = null) {
    super(message, "AuthPKCEGrantCodeExchangeError", 500, void 0);
    this.details = null;
    this.details = details;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class AuthRetryableFetchError extends CustomAuthError {
  constructor(message, status) {
    super(message, "AuthRetryableFetchError", status, void 0);
  }
}
function isAuthRetryableFetchError(error) {
  return isAuthError(error) && error.name === "AuthRetryableFetchError";
}
class AuthWeakPasswordError extends CustomAuthError {
  constructor(message, status, reasons) {
    super(message, "AuthWeakPasswordError", status, "weak_password");
    this.reasons = reasons;
  }
}
class AuthInvalidJwtError extends CustomAuthError {
  constructor(message) {
    super(message, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
const IGNORE_BASE64URL = " 	\n\r=".split("");
const FROM_BASE64URL = (() => {
  const charMap = new Array(128);
  for (let i = 0; i < charMap.length; i += 1) {
    charMap[i] = -1;
  }
  for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
    charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
  }
  for (let i = 0; i < TO_BASE64URL.length; i += 1) {
    charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
  }
  return charMap;
})();
function byteToBase64URL(byte, state, emit) {
  if (byte !== null) {
    state.queue = state.queue << 8 | byte;
    state.queuedBits += 8;
    while (state.queuedBits >= 6) {
      const pos = state.queue >> state.queuedBits - 6 & 63;
      emit(TO_BASE64URL[pos]);
      state.queuedBits -= 6;
    }
  } else if (state.queuedBits > 0) {
    state.queue = state.queue << 6 - state.queuedBits;
    state.queuedBits = 6;
    while (state.queuedBits >= 6) {
      const pos = state.queue >> state.queuedBits - 6 & 63;
      emit(TO_BASE64URL[pos]);
      state.queuedBits -= 6;
    }
  }
}
function byteFromBase64URL(charCode, state, emit) {
  const bits = FROM_BASE64URL[charCode];
  if (bits > -1) {
    state.queue = state.queue << 6 | bits;
    state.queuedBits += 6;
    while (state.queuedBits >= 8) {
      emit(state.queue >> state.queuedBits - 8 & 255);
      state.queuedBits -= 8;
    }
  } else if (bits === -2) {
    return;
  } else {
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(charCode)}"`);
  }
}
function stringFromBase64URL(str) {
  const conv = [];
  const utf8Emit = (codepoint) => {
    conv.push(String.fromCodePoint(codepoint));
  };
  const utf8State = {
    utf8seq: 0,
    codepoint: 0
  };
  const b64State = { queue: 0, queuedBits: 0 };
  const byteEmit = (byte) => {
    stringFromUTF8(byte, utf8State, utf8Emit);
  };
  for (let i = 0; i < str.length; i += 1) {
    byteFromBase64URL(str.charCodeAt(i), b64State, byteEmit);
  }
  return conv.join("");
}
function codepointToUTF8(codepoint, emit) {
  if (codepoint <= 127) {
    emit(codepoint);
    return;
  } else if (codepoint <= 2047) {
    emit(192 | codepoint >> 6);
    emit(128 | codepoint & 63);
    return;
  } else if (codepoint <= 65535) {
    emit(224 | codepoint >> 12);
    emit(128 | codepoint >> 6 & 63);
    emit(128 | codepoint & 63);
    return;
  } else if (codepoint <= 1114111) {
    emit(240 | codepoint >> 18);
    emit(128 | codepoint >> 12 & 63);
    emit(128 | codepoint >> 6 & 63);
    emit(128 | codepoint & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
}
function stringToUTF8(str, emit) {
  for (let i = 0; i < str.length; i += 1) {
    let codepoint = str.charCodeAt(i);
    if (codepoint > 55295 && codepoint <= 56319) {
      const highSurrogate = (codepoint - 55296) * 1024 & 65535;
      const lowSurrogate = str.charCodeAt(i + 1) - 56320 & 65535;
      codepoint = (lowSurrogate | highSurrogate) + 65536;
      i += 1;
    }
    codepointToUTF8(codepoint, emit);
  }
}
function stringFromUTF8(byte, state, emit) {
  if (state.utf8seq === 0) {
    if (byte <= 127) {
      emit(byte);
      return;
    }
    for (let leadingBit = 1; leadingBit < 6; leadingBit += 1) {
      if ((byte >> 7 - leadingBit & 1) === 0) {
        state.utf8seq = leadingBit;
        break;
      }
    }
    if (state.utf8seq === 2) {
      state.codepoint = byte & 31;
    } else if (state.utf8seq === 3) {
      state.codepoint = byte & 15;
    } else if (state.utf8seq === 4) {
      state.codepoint = byte & 7;
    } else {
      throw new Error("Invalid UTF-8 sequence");
    }
    state.utf8seq -= 1;
  } else if (state.utf8seq > 0) {
    if (byte <= 127) {
      throw new Error("Invalid UTF-8 sequence");
    }
    state.codepoint = state.codepoint << 6 | byte & 63;
    state.utf8seq -= 1;
    if (state.utf8seq === 0) {
      emit(state.codepoint);
    }
  }
}
function base64UrlToUint8Array(str) {
  const result = [];
  const state = { queue: 0, queuedBits: 0 };
  const onByte = (byte) => {
    result.push(byte);
  };
  for (let i = 0; i < str.length; i += 1) {
    byteFromBase64URL(str.charCodeAt(i), state, onByte);
  }
  return new Uint8Array(result);
}
function stringToUint8Array(str) {
  const result = [];
  stringToUTF8(str, (byte) => result.push(byte));
  return new Uint8Array(result);
}
function bytesToBase64URL(bytes) {
  const result = [];
  const state = { queue: 0, queuedBits: 0 };
  const onChar = (char) => {
    result.push(char);
  };
  bytes.forEach((byte) => byteToBase64URL(byte, state, onChar));
  byteToBase64URL(null, state, onChar);
  return result.join("");
}
function expiresAt(expiresIn) {
  const timeNow = Math.round(Date.now() / 1e3);
  return timeNow + expiresIn;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r2 = Math.random() * 16 | 0, v2 = c == "x" ? r2 : r2 & 3 | 8;
    return v2.toString(16);
  });
}
const isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
const localStorageWriteTests = {
  tested: false,
  writable: false
};
const supportsLocalStorage = () => {
  if (!isBrowser()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage !== "object") {
      return false;
    }
  } catch (e) {
    return false;
  }
  if (localStorageWriteTests.tested) {
    return localStorageWriteTests.writable;
  }
  const randomKey = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(randomKey, randomKey);
    globalThis.localStorage.removeItem(randomKey);
    localStorageWriteTests.tested = true;
    localStorageWriteTests.writable = true;
  } catch (e) {
    localStorageWriteTests.tested = true;
    localStorageWriteTests.writable = false;
  }
  return localStorageWriteTests.writable;
};
function parseParametersFromURL(href) {
  const result = {};
  const url = new URL(href);
  if (url.hash && url.hash[0] === "#") {
    try {
      const hashSearchParams = new URLSearchParams(url.hash.substring(1));
      hashSearchParams.forEach((value, key) => {
        result[key] = value;
      });
    } catch (e) {
    }
  }
  url.searchParams.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}
const resolveFetch = (customFetch) => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === "undefined") {
    _fetch = (...args) => __vitePreload(async () => {
      const { default: fetch2 } = await Promise.resolve().then(() => browser);
      return { default: fetch2 };
    }, true ? void 0 : void 0, import.meta.url).then(({ default: fetch2 }) => fetch2(...args));
  } else {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};
const looksLikeFetchResponse = (maybeResponse) => {
  return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
};
const setItemAsync = async (storage, key, data) => {
  await storage.setItem(key, JSON.stringify(data));
};
const getItemAsync = async (storage, key) => {
  const value = await storage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
};
const removeItemAsync = async (storage, key) => {
  await storage.removeItem(key);
};
class Deferred {
  constructor() {
    this.promise = new Deferred.promiseConstructor((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }
}
Deferred.promiseConstructor = Promise;
function decodeJWT(token) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new AuthInvalidJwtError("Invalid JWT structure");
  }
  for (let i = 0; i < parts.length; i++) {
    if (!BASE64URL_REGEX.test(parts[i])) {
      throw new AuthInvalidJwtError("JWT not in base64url format");
    }
  }
  const data = {
    // using base64url lib
    header: JSON.parse(stringFromBase64URL(parts[0])),
    payload: JSON.parse(stringFromBase64URL(parts[1])),
    signature: base64UrlToUint8Array(parts[2]),
    raw: {
      header: parts[0],
      payload: parts[1]
    }
  };
  return data;
}
async function sleep(time) {
  return await new Promise((accept) => {
    setTimeout(() => accept(null), time);
  });
}
function retryable(fn, isRetryable) {
  const promise = new Promise((accept, reject) => {
    (async () => {
      for (let attempt = 0; attempt < Infinity; attempt++) {
        try {
          const result = await fn(attempt);
          if (!isRetryable(attempt, null, result)) {
            accept(result);
            return;
          }
        } catch (e) {
          if (!isRetryable(attempt, e)) {
            reject(e);
            return;
          }
        }
      }
    })();
  });
  return promise;
}
function dec2hex(dec) {
  return ("0" + dec.toString(16)).substr(-2);
}
function generatePKCEVerifier() {
  const verifierLength = 56;
  const array = new Uint32Array(verifierLength);
  if (typeof crypto === "undefined") {
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    const charSetLen = charSet.length;
    let verifier = "";
    for (let i = 0; i < verifierLength; i++) {
      verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
    }
    return verifier;
  }
  crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
}
async function sha256(randomString) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(randomString);
  const hash = await crypto.subtle.digest("SHA-256", encodedData);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes).map((c) => String.fromCharCode(c)).join("");
}
async function generatePKCEChallenge(verifier) {
  const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
  if (!hasCryptoSupport) {
    console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
    return verifier;
  }
  const hashed = await sha256(verifier);
  return btoa(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
  const codeVerifier = generatePKCEVerifier();
  let storedCodeVerifier = codeVerifier;
  if (isPasswordRecovery) {
    storedCodeVerifier += "/PASSWORD_RECOVERY";
  }
  await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
  const codeChallenge = await generatePKCEChallenge(codeVerifier);
  const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
  return [codeChallenge, codeChallengeMethod];
}
const API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function parseResponseAPIVersion(response) {
  const apiVersion = response.headers.get(API_VERSION_HEADER_NAME);
  if (!apiVersion) {
    return null;
  }
  if (!apiVersion.match(API_VERSION_REGEX)) {
    return null;
  }
  try {
    const date = /* @__PURE__ */ new Date(`${apiVersion}T00:00:00.0Z`);
    return date;
  } catch (e) {
    return null;
  }
}
function validateExp(exp) {
  if (!exp) {
    throw new Error("Missing exp claim");
  }
  const timeNow = Math.floor(Date.now() / 1e3);
  if (exp <= timeNow) {
    throw new Error("JWT has expired");
  }
}
function getAlgorithm(alg) {
  switch (alg) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function validateUUID(str) {
  if (!UUID_REGEX.test(str)) {
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
  }
}
function userNotAvailableProxy() {
  const proxyTarget = {};
  return new Proxy(proxyTarget, {
    get: (target, prop) => {
      if (prop === "__isUserNotAvailableProxy") {
        return true;
      }
      if (typeof prop === "symbol") {
        const sProp = prop.toString();
        if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)") {
          return void 0;
        }
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${prop}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (_target, prop) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (_target, prop) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
var __rest$1 = function(s, e) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
    t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const NETWORK_ERROR_CODES = [502, 503, 504];
async function handleError(error) {
  var _a;
  if (!looksLikeFetchResponse(error)) {
    throw new AuthRetryableFetchError(_getErrorMessage(error), 0);
  }
  if (NETWORK_ERROR_CODES.includes(error.status)) {
    throw new AuthRetryableFetchError(_getErrorMessage(error), error.status);
  }
  let data;
  try {
    data = await error.json();
  } catch (e) {
    throw new AuthUnknownError(_getErrorMessage(e), e);
  }
  let errorCode = void 0;
  const responseAPIVersion = parseResponseAPIVersion(error);
  if (responseAPIVersion && responseAPIVersion.getTime() >= API_VERSIONS["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") {
    errorCode = data.code;
  } else if (typeof data === "object" && data && typeof data.error_code === "string") {
    errorCode = data.error_code;
  }
  if (!errorCode) {
    if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
      throw new AuthWeakPasswordError(_getErrorMessage(data), error.status, data.weak_password.reasons);
    }
  } else if (errorCode === "weak_password") {
    throw new AuthWeakPasswordError(_getErrorMessage(data), error.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
  } else if (errorCode === "session_not_found") {
    throw new AuthSessionMissingError();
  }
  throw new AuthApiError(_getErrorMessage(data), error.status || 500, errorCode);
}
const _getRequestParams = (method, options, parameters, body) => {
  const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
  if (method === "GET") {
    return params;
  }
  params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
};
async function _request(fetcher, method, url, options) {
  var _a;
  const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
  if (!headers[API_VERSION_HEADER_NAME]) {
    headers[API_VERSION_HEADER_NAME] = API_VERSIONS["2024-01-01"].name;
  }
  if (options === null || options === void 0 ? void 0 : options.jwt) {
    headers["Authorization"] = `Bearer ${options.jwt}`;
  }
  const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
  if (options === null || options === void 0 ? void 0 : options.redirectTo) {
    qs["redirect_to"] = options.redirectTo;
  }
  const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
  const data = await _handleRequest(fetcher, method, url + queryString, {
    headers,
    noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
  }, {}, options === null || options === void 0 ? void 0 : options.body);
  return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : { data: Object.assign({}, data), error: null };
}
async function _handleRequest(fetcher, method, url, options, parameters, body) {
  const requestParams = _getRequestParams(method, options, parameters, body);
  let result;
  try {
    result = await fetcher(url, Object.assign({}, requestParams));
  } catch (e) {
    console.error(e);
    throw new AuthRetryableFetchError(_getErrorMessage(e), 0);
  }
  if (!result.ok) {
    await handleError(result);
  }
  if (options === null || options === void 0 ? void 0 : options.noResolveJson) {
    return result;
  }
  try {
    return await result.json();
  } catch (e) {
    await handleError(e);
  }
}
function _sessionResponse(data) {
  var _a;
  let session = null;
  if (hasSession(data)) {
    session = Object.assign({}, data);
    if (!data.expires_at) {
      session.expires_at = expiresAt(data.expires_in);
    }
  }
  const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return { data: { session, user }, error: null };
}
function _sessionResponsePassword(data) {
  const response = _sessionResponse(data);
  if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
    response.data.weak_password = data.weak_password;
  }
  return response;
}
function _userResponse(data) {
  var _a;
  const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return { data: { user }, error: null };
}
function _ssoResponse(data) {
  return { data, error: null };
}
function _generateLinkResponse(data) {
  const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest$1(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  const properties = {
    action_link,
    email_otp,
    hashed_token,
    redirect_to,
    verification_type
  };
  const user = Object.assign({}, rest);
  return {
    data: {
      properties,
      user
    },
    error: null
  };
}
function _noResolveJsonResponse(data) {
  return data;
}
function hasSession(data) {
  return data.access_token && data.refresh_token && data.expires_in;
}
const SIGN_OUT_SCOPES = ["global", "local", "others"];
var __rest = function(s, e) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
    t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
class GoTrueAdminApi {
  constructor({ url = "", headers = {}, fetch: fetch2 }) {
    this.url = url;
    this.headers = headers;
    this.fetch = resolveFetch(fetch2);
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(jwt, scope = SIGN_OUT_SCOPES[0]) {
    if (SIGN_OUT_SCOPES.indexOf(scope) < 0) {
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${SIGN_OUT_SCOPES.join(", ")}`);
    }
    try {
      await _request(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
        headers: this.headers,
        jwt,
        noResolveJson: true
      });
      return { data: null, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(email, options = {}) {
    try {
      return await _request(this.fetch, "POST", `${this.url}/invite`, {
        body: { email, data: options.data },
        headers: this.headers,
        redirectTo: options.redirectTo,
        xform: _userResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(params) {
    try {
      const { options } = params, rest = __rest(params, ["options"]);
      const body = Object.assign(Object.assign({}, rest), options);
      if ("newEmail" in rest) {
        body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
        delete body["newEmail"];
      }
      return await _request(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body,
        headers: this.headers,
        xform: _generateLinkResponse,
        redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
      });
    } catch (error) {
      if (isAuthError(error)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(attributes) {
    try {
      return await _request(this.fetch, "POST", `${this.url}/admin/users`, {
        body: attributes,
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(params) {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
      const pagination = { nextPage: null, lastPage: 0, total: 0 };
      const response = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
          per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
        },
        xform: _noResolveJsonResponse
      });
      if (response.error)
        throw response.error;
      const users = await response.json();
      const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
      const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
      if (links.length > 0) {
        links.forEach((link) => {
          const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
          const rel = JSON.parse(link.split(";")[1].split("=")[1]);
          pagination[`${rel}Page`] = page;
        });
        pagination.total = parseInt(total);
      }
      return { data: Object.assign(Object.assign({}, users), pagination), error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { users: [] }, error };
      }
      throw error;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(uid) {
    validateUUID(uid);
    try {
      return await _request(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(uid, attributes) {
    validateUUID(uid);
    try {
      return await _request(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
        body: attributes,
        headers: this.headers,
        xform: _userResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(id2, shouldSoftDelete = false) {
    validateUUID(id2);
    try {
      return await _request(this.fetch, "DELETE", `${this.url}/admin/users/${id2}`, {
        headers: this.headers,
        body: {
          should_soft_delete: shouldSoftDelete
        },
        xform: _userResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  async _listFactors(params) {
    validateUUID(params.userId);
    try {
      const { data, error } = await _request(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
        headers: this.headers,
        xform: (factors) => {
          return { data: { factors }, error: null };
        }
      });
      return { data, error };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  async _deleteFactor(params) {
    validateUUID(params.userId);
    validateUUID(params.id);
    try {
      const data = await _request(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
        headers: this.headers
      });
      return { data, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
}
function memoryLocalStorageAdapter(store = {}) {
  return {
    getItem: (key) => {
      return store[key] || null;
    },
    setItem: (key, value) => {
      store[key] = value;
    },
    removeItem: (key) => {
      delete store[key];
    }
  };
}
function polyfillGlobalThis() {
  if (typeof globalThis === "object")
    return;
  try {
    Object.defineProperty(Object.prototype, "__magic__", {
      get: function() {
        return this;
      },
      configurable: true
    });
    __magic__.globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (e) {
    if (typeof self !== "undefined") {
      self.globalThis = self;
    }
  }
}
const internals = {
  /**
   * @experimental
   */
  debug: !!(globalThis && supportsLocalStorage() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class LockAcquireTimeoutError extends Error {
  constructor(message) {
    super(message);
    this.isAcquireTimeout = true;
  }
}
class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {
}
async function navigatorLock(name, acquireTimeout, fn) {
  if (internals.debug) {
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
  }
  const abortController = new globalThis.AbortController();
  if (acquireTimeout > 0) {
    setTimeout(() => {
      abortController.abort();
      if (internals.debug) {
        console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
      }
    }, acquireTimeout);
  }
  return await Promise.resolve().then(() => globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
    mode: "exclusive",
    ifAvailable: true
  } : {
    mode: "exclusive",
    signal: abortController.signal
  }, async (lock) => {
    if (lock) {
      if (internals.debug) {
        console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
      }
      try {
        return await fn();
      } finally {
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
        }
      }
    } else {
      if (acquireTimeout === 0) {
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
        }
        throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
      } else {
        if (internals.debug) {
          try {
            const result = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
          } catch (e) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
          }
        }
        console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
        return await fn();
      }
    }
  }));
}
polyfillGlobalThis();
const DEFAULT_OPTIONS = {
  url: GOTRUE_URL,
  storageKey: STORAGE_KEY,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: DEFAULT_HEADERS,
  flowType: "implicit",
  debug: false,
  hasCustomAuthorizationHeader: false
};
async function lockNoOp(name, acquireTimeout, fn) {
  return await fn();
}
const GLOBAL_JWKS = {};
class GoTrueClient {
  /**
   * Create a new client for use in the browser.
   */
  constructor(options) {
    var _a, _b;
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = /* @__PURE__ */ new Map();
    this.autoRefreshTicker = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.initializePromise = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    this.instanceID = GoTrueClient.nextInstanceID;
    GoTrueClient.nextInstanceID += 1;
    if (this.instanceID > 0 && isBrowser()) {
      console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    }
    const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    this.logDebugMessages = !!settings.debug;
    if (typeof settings.debug === "function") {
      this.logger = settings.debug;
    }
    this.persistSession = settings.persistSession;
    this.storageKey = settings.storageKey;
    this.autoRefreshToken = settings.autoRefreshToken;
    this.admin = new GoTrueAdminApi({
      url: settings.url,
      headers: settings.headers,
      fetch: settings.fetch
    });
    this.url = settings.url;
    this.headers = settings.headers;
    this.fetch = resolveFetch(settings.fetch);
    this.lock = settings.lock || lockNoOp;
    this.detectSessionInUrl = settings.detectSessionInUrl;
    this.flowType = settings.flowType;
    this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
    if (settings.lock) {
      this.lock = settings.lock;
    } else if (isBrowser() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) {
      this.lock = navigatorLock;
    } else {
      this.lock = lockNoOp;
    }
    if (!this.jwks) {
      this.jwks = { keys: [] };
      this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    };
    if (this.persistSession) {
      if (settings.storage) {
        this.storage = settings.storage;
      } else {
        if (supportsLocalStorage()) {
          this.storage = globalThis.localStorage;
        } else {
          this.memoryStorage = {};
          this.storage = memoryLocalStorageAdapter(this.memoryStorage);
        }
      }
      if (settings.userStorage) {
        this.userStorage = settings.userStorage;
      }
    } else {
      this.memoryStorage = {};
      this.storage = memoryLocalStorageAdapter(this.memoryStorage);
    }
    if (isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (e) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
      }
      (_b = this.broadcastChannel) === null || _b === void 0 ? void 0 : _b.addEventListener("message", async (event) => {
        this._debug("received broadcast notification from other tab or client", event);
        await this._notifyAllSubscribers(event.data.event, event.data.session, false);
      });
    }
    this.initialize();
  }
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var _a, _b;
    return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === void 0 ? void 0 : _a.jwks) !== null && _b !== void 0 ? _b : { keys: [] };
  }
  set jwks(value) {
    GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { jwks: value });
  }
  get jwks_cached_at() {
    var _a, _b;
    return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === void 0 ? void 0 : _a.cachedAt) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(value) {
    GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { cachedAt: value });
  }
  _debug(...args) {
    if (this.logDebugMessages) {
      this.logger(`GoTrueClient@${this.instanceID} (${version}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...args);
    }
    return this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    if (this.initializePromise) {
      return await this.initializePromise;
    }
    this.initializePromise = (async () => {
      return await this._acquireLock(-1, async () => {
        return await this._initialize();
      });
    })();
    return await this.initializePromise;
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var _a;
    try {
      const params = parseParametersFromURL(window.location.href);
      let callbackUrlType = "none";
      if (this._isImplicitGrantCallback(params)) {
        callbackUrlType = "implicit";
      } else if (await this._isPKCECallback(params)) {
        callbackUrlType = "pkce";
      }
      if (isBrowser() && this.detectSessionInUrl && callbackUrlType !== "none") {
        const { data, error } = await this._getSessionFromURL(params, callbackUrlType);
        if (error) {
          this._debug("#_initialize()", "error detecting session from URL", error);
          if (isAuthImplicitGrantRedirectError(error)) {
            const errorCode = (_a = error.details) === null || _a === void 0 ? void 0 : _a.code;
            if (errorCode === "identity_already_exists" || errorCode === "identity_not_found" || errorCode === "single_identity_not_deletable") {
              return { error };
            }
          }
          await this._removeSession();
          return { error };
        }
        const { session, redirectType } = data;
        this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
        await this._saveSession(session);
        setTimeout(async () => {
          if (redirectType === "recovery") {
            await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
          } else {
            await this._notifyAllSubscribers("SIGNED_IN", session);
          }
        }, 0);
        return { error: null };
      }
      await this._recoverAndRefresh();
      return { error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { error };
      }
      return {
        error: new AuthUnknownError("Unexpected error during initialization", error)
      };
    } finally {
      await this._handleVisibilityChange();
      this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(credentials) {
    var _a, _b, _c;
    try {
      const res = await _request(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
          gotrue_meta_security: { captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken }
        },
        xform: _sessionResponse
      });
      const { data, error } = res;
      if (error || !data) {
        return { data: { user: null, session: null }, error };
      }
      const session = data.session;
      const user = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", session);
      }
      return { data: { user, session }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(credentials) {
    var _a, _b, _c;
    try {
      let res;
      if ("email" in credentials) {
        const { email, password, options } = credentials;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        res = await _request(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
          body: {
            email,
            password,
            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod
          },
          xform: _sessionResponse
        });
      } else if ("phone" in credentials) {
        const { phone, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone,
            password,
            data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
            channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponse
        });
      } else {
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
      }
      const { data, error } = res;
      if (error || !data) {
        return { data: { user: null, session: null }, error };
      }
      const session = data.session;
      const user = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", session);
      }
      return { data: { user, session }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(credentials) {
    try {
      let res;
      if ("email" in credentials) {
        const { email, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email,
            password,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponsePassword
        });
      } else if ("phone" in credentials) {
        const { phone, password, options } = credentials;
        res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone,
            password,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponsePassword
        });
      } else {
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
      }
      const { data, error } = res;
      if (error) {
        return { data: { user: null, session: null }, error };
      } else if (!data || !data.session || !data.user) {
        return { data: { user: null, session: null }, error: new AuthInvalidTokenResponseError() };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return {
        data: Object.assign({ user: data.user, session: data.session }, data.weak_password ? { weakPassword: data.weak_password } : null),
        error
      };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(credentials) {
    var _a, _b, _c, _d;
    return await this._handleProviderSignIn(credentials.provider, {
      redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
      scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
      queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
      skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(authCode) {
    await this.initializePromise;
    return this._acquireLock(-1, async () => {
      return this._exchangeCodeForSession(authCode);
    });
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Only Solana supported at this time, using the Sign in with Solana standard.
   */
  async signInWithWeb3(credentials) {
    const { chain } = credentials;
    if (chain === "solana") {
      return await this.signInWithSolana(credentials);
    }
    throw new Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
  }
  async signInWithSolana(credentials) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    let message;
    let signature;
    if ("message" in credentials) {
      message = credentials.message;
      signature = credentials.signature;
    } else {
      const { chain, wallet, statement, options } = credentials;
      let resolvedWallet;
      if (!isBrowser()) {
        if (typeof wallet !== "object" || !(options === null || options === void 0 ? void 0 : options.url)) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        resolvedWallet = wallet;
      } else if (typeof wallet === "object") {
        resolvedWallet = wallet;
      } else {
        const windowAny = window;
        if ("solana" in windowAny && typeof windowAny.solana === "object" && ("signIn" in windowAny.solana && typeof windowAny.solana.signIn === "function" || "signMessage" in windowAny.solana && typeof windowAny.solana.signMessage === "function")) {
          resolvedWallet = windowAny.solana;
        } else {
          throw new Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
        }
      }
      const url = new URL((_a = options === null || options === void 0 ? void 0 : options.url) !== null && _a !== void 0 ? _a : window.location.href);
      if ("signIn" in resolvedWallet && resolvedWallet.signIn) {
        const output = await resolvedWallet.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, options === null || options === void 0 ? void 0 : options.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: url.host,
          uri: url.href
        }), statement ? { statement } : null));
        let outputToProcess;
        if (Array.isArray(output) && output[0] && typeof output[0] === "object") {
          outputToProcess = output[0];
        } else if (output && typeof output === "object" && "signedMessage" in output && "signature" in output) {
          outputToProcess = output;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        }
        if ("signedMessage" in outputToProcess && "signature" in outputToProcess && (typeof outputToProcess.signedMessage === "string" || outputToProcess.signedMessage instanceof Uint8Array) && outputToProcess.signature instanceof Uint8Array) {
          message = typeof outputToProcess.signedMessage === "string" ? outputToProcess.signedMessage : new TextDecoder().decode(outputToProcess.signedMessage);
          signature = outputToProcess.signature;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
        }
      } else {
        if (!("signMessage" in resolvedWallet) || typeof resolvedWallet.signMessage !== "function" || !("publicKey" in resolvedWallet) || typeof resolvedWallet !== "object" || !resolvedWallet.publicKey || !("toBase58" in resolvedWallet.publicKey) || typeof resolvedWallet.publicKey.toBase58 !== "function") {
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        }
        message = [
          `${url.host} wants you to sign in with your Solana account:`,
          resolvedWallet.publicKey.toBase58(),
          ...statement ? ["", statement, ""] : [""],
          "Version: 1",
          `URI: ${url.href}`,
          `Issued At: ${(_c = (_b = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _b === void 0 ? void 0 : _b.issuedAt) !== null && _c !== void 0 ? _c : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...((_d = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _d === void 0 ? void 0 : _d.notBefore) ? [`Not Before: ${options.signInWithSolana.notBefore}`] : [],
          ...((_e = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _e === void 0 ? void 0 : _e.expirationTime) ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : [],
          ...((_f = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _f === void 0 ? void 0 : _f.chainId) ? [`Chain ID: ${options.signInWithSolana.chainId}`] : [],
          ...((_g = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _g === void 0 ? void 0 : _g.nonce) ? [`Nonce: ${options.signInWithSolana.nonce}`] : [],
          ...((_h = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _h === void 0 ? void 0 : _h.requestId) ? [`Request ID: ${options.signInWithSolana.requestId}`] : [],
          ...((_k = (_j = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _j === void 0 ? void 0 : _j.resources) === null || _k === void 0 ? void 0 : _k.length) ? [
            "Resources",
            ...options.signInWithSolana.resources.map((resource) => `- ${resource}`)
          ] : []
        ].join("\n");
        const maybeSignature = await resolvedWallet.signMessage(new TextEncoder().encode(message), "utf8");
        if (!maybeSignature || !(maybeSignature instanceof Uint8Array)) {
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        }
        signature = maybeSignature;
      }
    }
    try {
      const { data, error } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message, signature: bytesToBase64URL(signature) }, ((_l = credentials.options) === null || _l === void 0 ? void 0 : _l.captchaToken) ? { gotrue_meta_security: { captcha_token: (_m = credentials.options) === null || _m === void 0 ? void 0 : _m.captchaToken } } : null),
        xform: _sessionResponse
      });
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        return {
          data: { user: null, session: null },
          error: new AuthInvalidTokenResponseError()
        };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return { data: Object.assign({}, data), error };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  async _exchangeCodeForSession(authCode) {
    const storageItem = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
    const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
    try {
      const { data, error } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: authCode,
          code_verifier: codeVerifier
        },
        xform: _sessionResponse
      });
      await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        return {
          data: { user: null, session: null, redirectType: null },
          error: new AuthInvalidTokenResponseError()
        };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return { data: Object.assign(Object.assign({}, data), { redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null }), error };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null, redirectType: null }, error };
      }
      throw error;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(credentials) {
    try {
      const { options, provider, token, access_token, nonce } = credentials;
      const res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider,
          id_token: token,
          access_token,
          nonce,
          gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
        },
        xform: _sessionResponse
      });
      const { data, error } = res;
      if (error) {
        return { data: { user: null, session: null }, error };
      } else if (!data || !data.session || !data.user) {
        return {
          data: { user: null, session: null },
          error: new AuthInvalidTokenResponseError()
        };
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("SIGNED_IN", data.session);
      }
      return { data, error };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(credentials) {
    var _a, _b, _c, _d, _e;
    try {
      if ("email" in credentials) {
        const { email, options } = credentials;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        const { error } = await _request(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email,
            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
            create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod
          },
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
        });
        return { data: { user: null, session: null }, error };
      }
      if ("phone" in credentials) {
        const { phone, options } = credentials;
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone,
            data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
            create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
            channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error };
      }
      throw new AuthInvalidCredentialsError("You must provide either an email or phone number.");
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(params) {
    var _a, _b;
    try {
      let redirectTo = void 0;
      let captchaToken = void 0;
      if ("options" in params) {
        redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
        captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
      }
      const { data, error } = await _request(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: captchaToken } }),
        redirectTo,
        xform: _sessionResponse
      });
      if (error) {
        throw error;
      }
      if (!data) {
        throw new Error("An error occurred on token verification.");
      }
      const session = data.session;
      const user = data.user;
      if (session === null || session === void 0 ? void 0 : session.access_token) {
        await this._saveSession(session);
        await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
      }
      return { data: { user, session }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(params) {
    var _a, _b, _c;
    try {
      let codeChallenge = null;
      let codeChallengeMethod = null;
      if (this.flowType === "pkce") {
        ;
        [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
      }
      return await _request(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? { provider_id: params.providerId } : null), "domain" in params ? { domain: params.domain } : null), { redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : void 0 }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
        headers: this.headers,
        xform: _ssoResponse
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._reauthenticate();
    });
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (result) => {
        const { data: { session }, error: sessionError } = result;
        if (sessionError)
          throw sessionError;
        if (!session)
          throw new AuthSessionMissingError();
        const { error } = await _request(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: session.access_token
        });
        return { data: { user: null, session: null }, error };
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(credentials) {
    try {
      const endpoint = `${this.url}/resend`;
      if ("email" in credentials) {
        const { email, type, options } = credentials;
        const { error } = await _request(this.fetch, "POST", endpoint, {
          headers: this.headers,
          body: {
            email,
            type,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
        });
        return { data: { user: null, session: null }, error };
      } else if ("phone" in credentials) {
        const { phone, type, options } = credentials;
        const { data, error } = await _request(this.fetch, "POST", endpoint, {
          headers: this.headers,
          body: {
            phone,
            type,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error };
      }
      throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    await this.initializePromise;
    const result = await this._acquireLock(-1, async () => {
      return this._useSession(async (result2) => {
        return result2;
      });
    });
    return result;
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(acquireTimeout, fn) {
    this._debug("#_acquireLock", "begin", acquireTimeout);
    try {
      if (this.lockAcquired) {
        const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        const result = (async () => {
          await last;
          return await fn();
        })();
        this.pendingInLock.push((async () => {
          try {
            await result;
          } catch (e) {
          }
        })());
        return result;
      }
      return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = true;
          const result = fn();
          this.pendingInLock.push((async () => {
            try {
              await result;
            } catch (e) {
            }
          })());
          await result;
          while (this.pendingInLock.length) {
            const waitOn = [...this.pendingInLock];
            await Promise.all(waitOn);
            this.pendingInLock.splice(0, waitOn.length);
          }
          return await result;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(fn) {
    this._debug("#_useSession", "begin");
    try {
      const result = await this.__loadSession();
      return await fn(result);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin");
    if (!this.lockAcquired) {
      this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    }
    try {
      let currentSession = null;
      const maybeSession = await getItemAsync(this.storage, this.storageKey);
      this._debug("#getSession()", "session from storage", maybeSession);
      if (maybeSession !== null) {
        if (this._isValidSession(maybeSession)) {
          currentSession = maybeSession;
        } else {
          this._debug("#getSession()", "session from storage is not valid");
          await this._removeSession();
        }
      }
      if (!currentSession) {
        return { data: { session: null }, error: null };
      }
      const hasExpired = currentSession.expires_at ? currentSession.expires_at * 1e3 - Date.now() < EXPIRY_MARGIN_MS : false;
      this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
      if (!hasExpired) {
        if (this.userStorage) {
          const maybeUser = await getItemAsync(this.userStorage, this.storageKey + "-user");
          if (maybeUser === null || maybeUser === void 0 ? void 0 : maybeUser.user) {
            currentSession.user = maybeUser.user;
          } else {
            currentSession.user = userNotAvailableProxy();
          }
        }
        if (this.storage.isServer && currentSession.user) {
          let suppressWarning = this.suppressGetSessionWarning;
          const proxySession = new Proxy(currentSession, {
            get: (target, prop, receiver) => {
              if (!suppressWarning && prop === "user") {
                console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
                suppressWarning = true;
                this.suppressGetSessionWarning = true;
              }
              return Reflect.get(target, prop, receiver);
            }
          });
          currentSession = proxySession;
        }
        return { data: { session: currentSession }, error: null };
      }
      const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
      if (error) {
        return { data: { session: null }, error };
      }
      return { data: { session }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(jwt) {
    if (jwt) {
      return await this._getUser(jwt);
    }
    await this.initializePromise;
    const result = await this._acquireLock(-1, async () => {
      return await this._getUser();
    });
    return result;
  }
  async _getUser(jwt) {
    try {
      if (jwt) {
        return await _request(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt,
          xform: _userResponse
        });
      }
      return await this._useSession(async (result) => {
        var _a, _b, _c;
        const { data, error } = result;
        if (error) {
          throw error;
        }
        if (!((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) && !this.hasCustomAuthorizationHeader) {
          return { data: { user: null }, error: new AuthSessionMissingError() };
        }
        return await _request(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (_c = (_b = data.session) === null || _b === void 0 ? void 0 : _b.access_token) !== null && _c !== void 0 ? _c : void 0,
          xform: _userResponse
        });
      });
    } catch (error) {
      if (isAuthError(error)) {
        if (isAuthSessionMissingError(error)) {
          await this._removeSession();
          await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        }
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(attributes, options = {}) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._updateUser(attributes, options);
    });
  }
  async _updateUser(attributes, options = {}) {
    try {
      return await this._useSession(async (result) => {
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          throw sessionError;
        }
        if (!sessionData.session) {
          throw new AuthSessionMissingError();
        }
        const session = sessionData.session;
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce" && attributes.email != null) {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        const { data, error: userError } = await _request(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
          body: Object.assign(Object.assign({}, attributes), { code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
          jwt: session.access_token,
          xform: _userResponse
        });
        if (userError)
          throw userError;
        session.user = data.user;
        await this._saveSession(session);
        await this._notifyAllSubscribers("USER_UPDATED", session);
        return { data: { user: session.user }, error: null };
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(currentSession) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._setSession(currentSession);
    });
  }
  async _setSession(currentSession) {
    try {
      if (!currentSession.access_token || !currentSession.refresh_token) {
        throw new AuthSessionMissingError();
      }
      const timeNow = Date.now() / 1e3;
      let expiresAt2 = timeNow;
      let hasExpired = true;
      let session = null;
      const { payload } = decodeJWT(currentSession.access_token);
      if (payload.exp) {
        expiresAt2 = payload.exp;
        hasExpired = expiresAt2 <= timeNow;
      }
      if (hasExpired) {
        const { session: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
        if (error) {
          return { data: { user: null, session: null }, error };
        }
        if (!refreshedSession) {
          return { data: { user: null, session: null }, error: null };
        }
        session = refreshedSession;
      } else {
        const { data, error } = await this._getUser(currentSession.access_token);
        if (error) {
          throw error;
        }
        session = {
          access_token: currentSession.access_token,
          refresh_token: currentSession.refresh_token,
          user: data.user,
          token_type: "bearer",
          expires_in: expiresAt2 - timeNow,
          expires_at: expiresAt2
        };
        await this._saveSession(session);
        await this._notifyAllSubscribers("SIGNED_IN", session);
      }
      return { data: { user: session.user, session }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { session: null, user: null }, error };
      }
      throw error;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(currentSession) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._refreshSession(currentSession);
    });
  }
  async _refreshSession(currentSession) {
    try {
      return await this._useSession(async (result) => {
        var _a;
        if (!currentSession) {
          const { data, error: error2 } = result;
          if (error2) {
            throw error2;
          }
          currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : void 0;
        }
        if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) {
          throw new AuthSessionMissingError();
        }
        const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
        if (error) {
          return { data: { user: null, session: null }, error };
        }
        if (!session) {
          return { data: { user: null, session: null }, error: null };
        }
        return { data: { user: session.user, session }, error: null };
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { user: null, session: null }, error };
      }
      throw error;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(params, callbackUrlType) {
    try {
      if (!isBrowser())
        throw new AuthImplicitGrantRedirectError("No browser detected.");
      if (params.error || params.error_description || params.error_code) {
        throw new AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
          error: params.error || "unspecified_error",
          code: params.error_code || "unspecified_code"
        });
      }
      switch (callbackUrlType) {
        case "implicit":
          if (this.flowType === "pkce") {
            throw new AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
          }
          break;
        case "pkce":
          if (this.flowType === "implicit") {
            throw new AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
          }
          break;
        default:
      }
      if (callbackUrlType === "pkce") {
        this._debug("#_initialize()", "begin", "is PKCE flow", true);
        if (!params.code)
          throw new AuthPKCEGrantCodeExchangeError("No code detected.");
        const { data: data2, error: error2 } = await this._exchangeCodeForSession(params.code);
        if (error2)
          throw error2;
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        window.history.replaceState(window.history.state, "", url.toString());
        return { data: { session: data2.session, redirectType: null }, error: null };
      }
      const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
      if (!access_token || !expires_in || !refresh_token || !token_type) {
        throw new AuthImplicitGrantRedirectError("No session defined in URL");
      }
      const timeNow = Math.round(Date.now() / 1e3);
      const expiresIn = parseInt(expires_in);
      let expiresAt2 = timeNow + expiresIn;
      if (expires_at) {
        expiresAt2 = parseInt(expires_at);
      }
      const actuallyExpiresIn = expiresAt2 - timeNow;
      if (actuallyExpiresIn * 1e3 <= AUTO_REFRESH_TICK_DURATION_MS) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
      }
      const issuedAt = expiresAt2 - expiresIn;
      if (timeNow - issuedAt >= 120) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt2, timeNow);
      } else if (timeNow - issuedAt < 0) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", issuedAt, expiresAt2, timeNow);
      }
      const { data, error } = await this._getUser(access_token);
      if (error)
        throw error;
      const session = {
        provider_token,
        provider_refresh_token,
        access_token,
        expires_in: expiresIn,
        expires_at: expiresAt2,
        refresh_token,
        token_type,
        user: data.user
      };
      window.location.hash = "";
      this._debug("#_getSessionFromURL()", "clearing window.location.hash");
      return { data: { session, redirectType: params.type }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { session: null, redirectType: null }, error };
      }
      throw error;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(params) {
    return Boolean(params.access_token || params.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(params) {
    const currentStorageContent = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
    return !!(params.code && currentStorageContent);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(options = { scope: "global" }) {
    await this.initializePromise;
    return await this._acquireLock(-1, async () => {
      return await this._signOut(options);
    });
  }
  async _signOut({ scope } = { scope: "global" }) {
    return await this._useSession(async (result) => {
      var _a;
      const { data, error: sessionError } = result;
      if (sessionError) {
        return { error: sessionError };
      }
      const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
      if (accessToken) {
        const { error } = await this.admin.signOut(accessToken, scope);
        if (error) {
          if (!(isAuthApiError(error) && (error.status === 404 || error.status === 401 || error.status === 403))) {
            return { error };
          }
        }
      }
      if (scope !== "others") {
        await this._removeSession();
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
      }
      return { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(callback) {
    const id2 = uuid();
    const subscription = {
      id: id2,
      callback,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", id2);
        this.stateChangeEmitters.delete(id2);
      }
    };
    this._debug("#onAuthStateChange()", "registered callback with id", id2);
    this.stateChangeEmitters.set(id2, subscription);
    (async () => {
      await this.initializePromise;
      await this._acquireLock(-1, async () => {
        this._emitInitialSession(id2);
      });
    })();
    return { data: { subscription } };
  }
  async _emitInitialSession(id2) {
    return await this._useSession(async (result) => {
      var _a, _b;
      try {
        const { data: { session }, error } = result;
        if (error)
          throw error;
        await ((_a = this.stateChangeEmitters.get(id2)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session));
        this._debug("INITIAL_SESSION", "callback id", id2, "session", session);
      } catch (err) {
        await ((_b = this.stateChangeEmitters.get(id2)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
        this._debug("INITIAL_SESSION", "callback id", id2, "error", err);
        console.error(err);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(email, options = {}) {
    let codeChallenge = null;
    let codeChallengeMethod = null;
    if (this.flowType === "pkce") {
      [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(
        this.storage,
        this.storageKey,
        true
        // isPasswordRecovery
      );
    }
    try {
      return await _request(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email,
          code_challenge: codeChallenge,
          code_challenge_method: codeChallengeMethod,
          gotrue_meta_security: { captcha_token: options.captchaToken }
        },
        headers: this.headers,
        redirectTo: options.redirectTo
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var _a;
    try {
      const { data, error } = await this.getUser();
      if (error)
        throw error;
      return { data: { identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : [] }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(credentials) {
    var _a;
    try {
      const { data, error } = await this._useSession(async (result) => {
        var _a2, _b, _c, _d, _e;
        const { data: data2, error: error2 } = result;
        if (error2)
          throw error2;
        const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
          redirectTo: (_a2 = credentials.options) === null || _a2 === void 0 ? void 0 : _a2.redirectTo,
          scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
          queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
          skipBrowserRedirect: true
        });
        return await _request(this.fetch, "GET", url, {
          headers: this.headers,
          jwt: (_e = (_d = data2.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : void 0
        });
      });
      if (error)
        throw error;
      if (isBrowser() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) {
        window.location.assign(data === null || data === void 0 ? void 0 : data.url);
      }
      return { data: { provider: credentials.provider, url: data === null || data === void 0 ? void 0 : data.url }, error: null };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: { provider: credentials.provider, url: null }, error };
      }
      throw error;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(identity) {
    try {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data, error } = result;
        if (error) {
          throw error;
        }
        return await _request(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
          headers: this.headers,
          jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0
        });
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(refreshToken) {
    const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
    this._debug(debugName, "begin");
    try {
      const startedAt = Date.now();
      return await retryable(async (attempt) => {
        if (attempt > 0) {
          await sleep(200 * Math.pow(2, attempt - 1));
        }
        this._debug(debugName, "refreshing attempt", attempt);
        return await _request(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
          body: { refresh_token: refreshToken },
          headers: this.headers,
          xform: _sessionResponse
        });
      }, (attempt, error) => {
        const nextBackOffInterval = 200 * Math.pow(2, attempt);
        return error && isAuthRetryableFetchError(error) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + nextBackOffInterval - startedAt < AUTO_REFRESH_TICK_DURATION_MS;
      });
    } catch (error) {
      this._debug(debugName, "error", error);
      if (isAuthError(error)) {
        return { data: { session: null, user: null }, error };
      }
      throw error;
    } finally {
      this._debug(debugName, "end");
    }
  }
  _isValidSession(maybeSession) {
    const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
    return isValidSession;
  }
  async _handleProviderSignIn(provider, options) {
    const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
      redirectTo: options.redirectTo,
      scopes: options.scopes,
      queryParams: options.queryParams
    });
    this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
    if (isBrowser() && !options.skipBrowserRedirect) {
      window.location.assign(url);
    }
    return { data: { provider, url }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var _a, _b;
    const debugName = "#_recoverAndRefresh()";
    this._debug(debugName, "begin");
    try {
      const currentSession = await getItemAsync(this.storage, this.storageKey);
      if (currentSession && this.userStorage) {
        let maybeUser = await getItemAsync(this.userStorage, this.storageKey + "-user");
        if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !maybeUser) {
          maybeUser = { user: currentSession.user };
          await setItemAsync(this.userStorage, this.storageKey + "-user", maybeUser);
        }
        currentSession.user = (_a = maybeUser === null || maybeUser === void 0 ? void 0 : maybeUser.user) !== null && _a !== void 0 ? _a : userNotAvailableProxy();
      } else if (currentSession && !currentSession.user) {
        if (!currentSession.user) {
          const separateUser = await getItemAsync(this.storage, this.storageKey + "-user");
          if (separateUser && (separateUser === null || separateUser === void 0 ? void 0 : separateUser.user)) {
            currentSession.user = separateUser.user;
            await removeItemAsync(this.storage, this.storageKey + "-user");
            await setItemAsync(this.storage, this.storageKey, currentSession);
          } else {
            currentSession.user = userNotAvailableProxy();
          }
        }
      }
      this._debug(debugName, "session from storage", currentSession);
      if (!this._isValidSession(currentSession)) {
        this._debug(debugName, "session is not valid");
        if (currentSession !== null) {
          await this._removeSession();
        }
        return;
      }
      const expiresWithMargin = ((_b = currentSession.expires_at) !== null && _b !== void 0 ? _b : Infinity) * 1e3 - Date.now() < EXPIRY_MARGIN_MS;
      this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${EXPIRY_MARGIN_MS}s`);
      if (expiresWithMargin) {
        if (this.autoRefreshToken && currentSession.refresh_token) {
          const { error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            console.error(error);
            if (!isAuthRetryableFetchError(error)) {
              this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
              await this._removeSession();
            }
          }
        }
      } else if (currentSession.user && currentSession.user.__isUserNotAvailableProxy === true) {
        try {
          const { data, error: userError } = await this._getUser(currentSession.access_token);
          if (!userError && (data === null || data === void 0 ? void 0 : data.user)) {
            currentSession.user = data.user;
            await this._saveSession(currentSession);
            await this._notifyAllSubscribers("SIGNED_IN", currentSession);
          } else {
            this._debug(debugName, "could not get user data, skipping SIGNED_IN notification");
          }
        } catch (getUserError) {
          console.error("Error getting user data:", getUserError);
          this._debug(debugName, "error getting user data, skipping SIGNED_IN notification", getUserError);
        }
      } else {
        await this._notifyAllSubscribers("SIGNED_IN", currentSession);
      }
    } catch (err) {
      this._debug(debugName, "error", err);
      console.error(err);
      return;
    } finally {
      this._debug(debugName, "end");
    }
  }
  async _callRefreshToken(refreshToken) {
    var _a, _b;
    if (!refreshToken) {
      throw new AuthSessionMissingError();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
    this._debug(debugName, "begin");
    try {
      this.refreshingDeferred = new Deferred();
      const { data, error } = await this._refreshAccessToken(refreshToken);
      if (error)
        throw error;
      if (!data.session)
        throw new AuthSessionMissingError();
      await this._saveSession(data.session);
      await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
      const result = { session: data.session, error: null };
      this.refreshingDeferred.resolve(result);
      return result;
    } catch (error) {
      this._debug(debugName, "error", error);
      if (isAuthError(error)) {
        const result = { session: null, error };
        if (!isAuthRetryableFetchError(error)) {
          await this._removeSession();
        }
        (_a = this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(result);
        return result;
      }
      (_b = this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(error);
      throw error;
    } finally {
      this.refreshingDeferred = null;
      this._debug(debugName, "end");
    }
  }
  async _notifyAllSubscribers(event, session, broadcast = true) {
    const debugName = `#_notifyAllSubscribers(${event})`;
    this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
    try {
      if (this.broadcastChannel && broadcast) {
        this.broadcastChannel.postMessage({ event, session });
      }
      const errors = [];
      const promises = Array.from(this.stateChangeEmitters.values()).map(async (x2) => {
        try {
          await x2.callback(event, session);
        } catch (e) {
          errors.push(e);
        }
      });
      await Promise.all(promises);
      if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
          console.error(errors[i]);
        }
        throw errors[0];
      }
    } finally {
      this._debug(debugName, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(session) {
    this._debug("#_saveSession()", session);
    this.suppressGetSessionWarning = true;
    const sessionToProcess = Object.assign({}, session);
    const userIsProxy = sessionToProcess.user && sessionToProcess.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!userIsProxy && sessionToProcess.user) {
        await setItemAsync(this.userStorage, this.storageKey + "-user", {
          user: sessionToProcess.user
        });
      }
      const mainSessionData = Object.assign({}, sessionToProcess);
      delete mainSessionData.user;
      const clonedMainSessionData = deepClone(mainSessionData);
      await setItemAsync(this.storage, this.storageKey, clonedMainSessionData);
    } else {
      const clonedSession = deepClone(sessionToProcess);
      await setItemAsync(this.storage, this.storageKey, clonedSession);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()");
    await removeItemAsync(this.storage, this.storageKey);
    await removeItemAsync(this.storage, this.storageKey + "-code-verifier");
    await removeItemAsync(this.storage, this.storageKey + "-user");
    if (this.userStorage) {
      await removeItemAsync(this.userStorage, this.storageKey + "-user");
    }
    await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const callback = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (callback && isBrowser() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
        window.removeEventListener("visibilitychange", callback);
      }
    } catch (e) {
      console.error("removing visibilitychange callback failed", e);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug("#_startAutoRefresh()");
    const ticker = setInterval(() => this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION_MS);
    this.autoRefreshTicker = ticker;
    if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") {
      ticker.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
      Deno.unrefTimer(ticker);
    }
    setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const ticker = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (ticker) {
      clearInterval(ticker);
    }
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const now = Date.now();
          try {
            return await this._useSession(async (result) => {
              const { data: { session } } = result;
              if (!session || !session.refresh_token || !session.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const expiresInTicks = Math.floor((session.expires_at * 1e3 - now) / AUTO_REFRESH_TICK_DURATION_MS);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
              if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) {
                await this._callRefreshToken(session.refresh_token);
              }
            });
          } catch (e) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError) {
        this._debug("auto refresh token tick lock not available");
      } else {
        throw e;
      }
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    this._debug("#_handleVisibilityChange()");
    if (!isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(false);
      window === null || window === void 0 ? void 0 : window.addEventListener("visibilitychange", this.visibilityChangedCallback);
      await this._onVisibilityChanged(true);
    } catch (error) {
      console.error("_handleVisibilityChange", error);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(calledFromInitialize) {
    const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
    this._debug(methodName, "visibilityState", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!calledFromInitialize) {
        await this.initializePromise;
        await this._acquireLock(-1, async () => {
          if (document.visibilityState !== "visible") {
            this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
            return;
          }
          await this._recoverAndRefresh();
        });
      }
    } else if (document.visibilityState === "hidden") {
      if (this.autoRefreshToken) {
        this._stopAutoRefresh();
      }
    }
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(url, provider, options) {
    const urlParams = [`provider=${encodeURIComponent(provider)}`];
    if (options === null || options === void 0 ? void 0 : options.redirectTo) {
      urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
    }
    if (options === null || options === void 0 ? void 0 : options.scopes) {
      urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
    }
    if (this.flowType === "pkce") {
      const [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
      const flowParams = new URLSearchParams({
        code_challenge: `${encodeURIComponent(codeChallenge)}`,
        code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
      });
      urlParams.push(flowParams.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.queryParams) {
      const query = new URLSearchParams(options.queryParams);
      urlParams.push(query.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) {
      urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
    }
    return `${url}?${urlParams.join("&")}`;
  }
  async _unenroll(params) {
    try {
      return await this._useSession(async (result) => {
        var _a;
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        return await _request(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
          headers: this.headers,
          jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
        });
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  async _enroll(params) {
    try {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data: sessionData, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        const body = Object.assign({ friendly_name: params.friendlyName, factor_type: params.factorType }, params.factorType === "phone" ? { phone: params.phone } : { issuer: params.issuer });
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/factors`, {
          body,
          headers: this.headers,
          jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
        });
        if (error) {
          return { data: null, error };
        }
        if (params.factorType === "totp" && ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code)) {
          data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
        }
        return { data, error: null };
      });
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(params) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return { data: null, error: sessionError };
          }
          const { data, error } = await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
            body: { code: params.code, challenge_id: params.challengeId },
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
          if (error) {
            return { data: null, error };
          }
          await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + data.expires_in }, data));
          await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
          return { data, error };
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(params) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return { data: null, error: sessionError };
          }
          return await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
            body: { channel: params.channel },
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(params) {
    const { data: challengeData, error: challengeError } = await this._challenge({
      factorId: params.factorId
    });
    if (challengeError) {
      return { data: null, error: challengeError };
    }
    return await this._verify({
      factorId: params.factorId,
      challengeId: challengeData.id,
      code: params.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user }, error: userError } = await this.getUser();
    if (userError) {
      return { data: null, error: userError };
    }
    const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
    const totp = factors.filter((factor) => factor.factor_type === "totp" && factor.status === "verified");
    const phone = factors.filter((factor) => factor.factor_type === "phone" && factor.status === "verified");
    return {
      data: {
        all: factors,
        totp,
        phone
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => {
      return await this._useSession(async (result) => {
        var _a, _b;
        const { data: { session }, error: sessionError } = result;
        if (sessionError) {
          return { data: null, error: sessionError };
        }
        if (!session) {
          return {
            data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
            error: null
          };
        }
        const { payload } = decodeJWT(session.access_token);
        let currentLevel = null;
        if (payload.aal) {
          currentLevel = payload.aal;
        }
        let nextLevel = currentLevel;
        const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor) => factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
        if (verifiedFactors.length > 0) {
          nextLevel = "aal2";
        }
        const currentAuthenticationMethods = payload.amr || [];
        return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
      });
    });
  }
  async fetchJwk(kid, jwks = { keys: [] }) {
    let jwk = jwks.keys.find((key) => key.kid === kid);
    if (jwk) {
      return jwk;
    }
    const now = Date.now();
    jwk = this.jwks.keys.find((key) => key.kid === kid);
    if (jwk && this.jwks_cached_at + JWKS_TTL > now) {
      return jwk;
    }
    const { data, error } = await _request(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (error) {
      throw error;
    }
    if (!data.keys || data.keys.length === 0) {
      return null;
    }
    this.jwks = data;
    this.jwks_cached_at = now;
    jwk = data.keys.find((key) => key.kid === kid);
    if (!jwk) {
      return null;
    }
    return jwk;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(jwt, options = {}) {
    try {
      let token = jwt;
      if (!token) {
        const { data, error } = await this.getSession();
        if (error || !data.session) {
          return { data: null, error };
        }
        token = data.session.access_token;
      }
      const { header, payload, signature, raw: { header: rawHeader, payload: rawPayload } } = decodeJWT(token);
      if (!(options === null || options === void 0 ? void 0 : options.allowExpired)) {
        validateExp(payload.exp);
      }
      const signingKey = !header.alg || header.alg.startsWith("HS") || !header.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(header.kid, (options === null || options === void 0 ? void 0 : options.keys) ? { keys: options.keys } : options === null || options === void 0 ? void 0 : options.jwks);
      if (!signingKey) {
        const { error } = await this.getUser(token);
        if (error) {
          throw error;
        }
        return {
          data: {
            claims: payload,
            header,
            signature
          },
          error: null
        };
      }
      const algorithm = getAlgorithm(header.alg);
      const publicKey = await crypto.subtle.importKey("jwk", signingKey, algorithm, true, [
        "verify"
      ]);
      const isValid = await crypto.subtle.verify(algorithm, publicKey, signature, stringToUint8Array(`${rawHeader}.${rawPayload}`));
      if (!isValid) {
        throw new AuthInvalidJwtError("Invalid JWT signature");
      }
      return {
        data: {
          claims: payload,
          header,
          signature
        },
        error: null
      };
    } catch (error) {
      if (isAuthError(error)) {
        return { data: null, error };
      }
      throw error;
    }
  }
}
GoTrueClient.nextInstanceID = 0;
const AuthClient = GoTrueClient;
class SupabaseAuthClient extends AuthClient {
  constructor(options) {
    super(options);
  }
}
var __awaiter = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class SupabaseClient {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.storage Options passed along to the storage-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(supabaseUrl, supabaseKey, options) {
    var _a, _b, _c;
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    const baseUrl = validateSupabaseUrl(supabaseUrl);
    if (!supabaseKey)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", baseUrl);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", baseUrl);
    this.storageUrl = new URL("storage/v1", baseUrl);
    this.functionsUrl = new URL("functions/v1", baseUrl);
    const defaultStorageKey = `sb-${baseUrl.hostname.split(".")[0]}-auth-token`;
    const DEFAULTS = {
      db: DEFAULT_DB_OPTIONS,
      realtime: DEFAULT_REALTIME_OPTIONS,
      auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), { storageKey: defaultStorageKey }),
      global: DEFAULT_GLOBAL_OPTIONS
    };
    const settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
    this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : "";
    this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
    if (!settings.accessToken) {
      this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
    } else {
      this.accessToken = settings.accessToken;
      this.auth = new Proxy({}, {
        get: (_, prop) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
        }
      });
    }
    this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
    this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, settings.realtime));
    this.rest = new PostgrestClient2(new URL("rest/v1", baseUrl).href, {
      headers: this.headers,
      schema: settings.db.schema,
      fetch: this.fetch
    });
    this.storage = new StorageClient(this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
    if (!settings.accessToken) {
      this._listenForAuthEvents();
    }
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new FunctionsClient(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(relation) {
    return this.rest.from(relation);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(schema) {
    return this.rest.schema(schema);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(fn, args = {}, options = {}) {
    return this.rest.rpc(fn, args, options);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(name, opts = { config: {} }) {
    return this.realtime.channel(name, opts);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(channel) {
    return this.realtime.removeChannel(channel);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.accessToken) {
        return yield this.accessToken();
      }
      const { data } = yield this.auth.getSession();
      return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug }, headers, fetch2) {
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new SupabaseAuthClient({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, authHeaders), headers),
      storageKey,
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      storage,
      userStorage,
      flowType,
      lock,
      debug,
      fetch: fetch2,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((key) => key.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(options) {
    return new RealtimeClient(this.realtimeUrl.href, Object.assign(Object.assign({}, options), { params: Object.assign({ apikey: this.supabaseKey }, options === null || options === void 0 ? void 0 : options.params) }));
  }
  _listenForAuthEvents() {
    let data = this.auth.onAuthStateChange((event, session) => {
      this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
    });
    return data;
  }
  _handleTokenChanged(event, source, token) {
    if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
      this.changedAccessToken = token;
    } else if (event === "SIGNED_OUT") {
      this.realtime.setAuth();
      if (source == "STORAGE")
        this.auth.signOut();
      this.changedAccessToken = void 0;
    }
  }
}
const createClient = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
function shouldShowDeprecationWarning() {
  if (typeof window !== "undefined") {
    return false;
  }
  if (typeof process === "undefined") {
    return false;
  }
  const processVersion = process["version"];
  if (processVersion === void 0 || processVersion === null) {
    return false;
  }
  const versionMatch = processVersion.match(/^v(\d+)\./);
  if (!versionMatch) {
    return false;
  }
  const majorVersion = parseInt(versionMatch[1], 10);
  return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
  console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
}
const supabase = createClient(
  "https://tczojwrbmuizsckvnbay.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjem9qd3JibXVpenNja3ZuYmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MDY4ODgsImV4cCI6MjA5Mjk4Mjg4OH0.U6dcG82nR-HTJLHb7Oup6Gr5SL2ivMgLCy325wslPCQ"
);
const menuCategories = [
  {
    id: "corbalar",
    name: "Çorbalar",
    icon: "🍲",
    badge: "Sıcacık",
    items: [
      { name: "Mercimek Çorbası", desc: "Geleneksel yöntemle pişirilmiş taze baharatlı kırmızı mercimek çorbası.", price: "130", popular: false, img: "/Mercimek_Corbasi.jpeg" },
      { name: "Tavuk Suyu Çorbası", desc: "Taze tavuk kemiğinden elde edilen altın sarısı, besleyici ev yapımı çorba.", price: "150", popular: false, img: "/Tavuk_suyu_corbasi.jpeg" }
    ]
  },
  {
    id: "pilavlar",
    name: "Pilav Çeşitleri",
    icon: "🍚",
    badge: "En Çok Tercih",
    items: [
      { name: "Vejeteryan Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, mevsim salata, salatalık turşusu, biber ile beraber.", price: "150", popular: false, img: "/Vejeteryan_Pilav.jpg" },
      { name: "Nohutlu Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, mevsim salata, salatalık turşusu, biber ile beraber.", price: "150", popular: false, img: "/Nohutlu_Pilav.jpg" },
      { name: "Mısırlı Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, 100 gr haşlanmış süt mısırı, mevsim salata, salatalık turşusu, biber ile beraber.", price: "170", popular: false, img: "/Misirli_Pilav.jpg" },
      { name: "Garnitürlü Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, 75-85 gr haşlanmış garnitür, mevsim salata, salatalık turşusu, biber ile beraber.", price: "170", popular: false, img: "/Garniturlu_Pilav.jpg" },
      { name: "Tavuklu Pilav", desc: "250 gr basmati pirinç pilavı, 75-85 gr haşlanmış tiftik tavuk eti, mevsim salata, salatalık turşusu, biber ile beraber.", price: "190", popular: true, img: "/Tavuklu_Pilav.jpg" },
      { name: "Kuru Fasulye Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, 100 gr kuru fasulye, mevsim salata, salatalık turşusu, biber ile beraber.", price: "190", popular: false, img: "/Kuru_Fasulye_Pilav.jpg" },
      { name: "Ciğerli Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, 75-85 gr tavuk ciğeri, mevsim salata, salatalık turşusu, biber ile beraber.", price: "200", popular: false, img: "/Cigerli_Pilav.jpg" },
      { name: "Köri Soslu Tavuklu Pilav", desc: "250 gr nohutlu basmati pirinç pilavı üzerine 90-100 gr köri soslu tavuk, mevsim salata, salatalık turşusu, biber ile beraber.", price: "210", popular: true, img: "/Kori_Soslu_Tavuklu_Pilav.jpg" },
      { name: "Tavuk Soteli Pilav", desc: "250 gr nohutlu basmati pirinç pilavı üzerine 90-100 gr tavuk sote, mevsim salata, salatalık turşusu, biber ile beraber.", price: "210", popular: false, img: "/Tavuk_Soteli_Pilav.jpg" },
      { name: "Ton Balıklı Pilav", desc: "250 gr nohutlu basmati pirinç pilavı üzerine 75-85 gr ton balığı, mevsim salata, salatalık turşusu, biber ile beraber.", price: "220", popular: false, img: "/Ton_Balikli_Pilav.jpeg" },
      { name: "Sporcu Pilavı", desc: "300 gr nohutlu basmati pirinç pilavı, 135-140 gr haşlanmış tiftik tavuk eti, mevsim salata, salatalık turşusu, biber ile beraber.", price: "250", popular: true, img: "/Sporcu_Pilavi.jpg" },
      { name: "Kavurmalı Pilav", desc: "250 gr nohutlu basmati pirinç pilavı, 75-85 gr kurban dana kavurma eti, mevsim salata, salatalık turşusu, biber ile beraber.", price: "400", popular: false, img: "/Kavurmali_Pilav.jpg" }
    ]
  },
  {
    id: "icecekler",
    name: "İçecekler",
    icon: "🥤",
    badge: "Serinleten",
    items: [
      { name: "Su", desc: "500 ml soğuk kaynak suyu.", price: "20", popular: false, img: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Soda", desc: "Ferahlatıcı soğuk soda.", price: "25", popular: false, img: "/Beypazari_Sade_Soda.jpg" },
      { name: "El Yapımı Turşu Suyu", desc: "Doğal fermantasyon ile hazırlanan el yapımı turşu suyu.", price: "50", popular: false, img: "/tursu_suyu.jpg" },
      { name: "Ayran", desc: "270 ml taze yoğurttan yapılmış soğuk ayran.", price: "50", popular: false, img: "/250_Ml_Eker_Tombul_Ayran.jpg" },
      { name: "Şalgam Suyu", desc: "300 ml ekşi-tatlı Adana usulü şalgam suyu.", price: "50", popular: false, img: "/salgam.jpg" },
      { name: "Fuse Tea", desc: "300 ml meyveli soğuk çay.", price: "60", popular: false, img: "/fuestea.jpg" },
      { name: "Şişe Cola", desc: "200 ml cam şişe Coca-Cola.", price: "60", popular: false, img: "/Cam_Sise_Coca_Cola.jpg" },
      { name: "Özerhisar Fermente Ayran", desc: "Geleneksel yöntemle fermente edilmiş probiyotik yöresel ayran.", price: "60", popular: true, img: "/Ozerhisar_Fermente_Ayran.jpg" },
      { name: "Fıçı Yayık Ayran", desc: "Tahta fıçıda dinlendirilmiş geleneksel yayık ayranı.", price: "60", popular: true, img: "/Fici_Yayik_Ayran_(_300_mL).jpg" }
    ]
  },
  {
    id: "tatlilar",
    name: "Tatlılar",
    icon: "🍮",
    badge: "Tatlı Finali",
    items: [
      { name: "Hamsiköy Fırın Sütlaç", desc: "Karadeniz'den ilham alınan, fırında kızartılmış geleneksel sütlaç.", price: "150", popular: true, img: "/sutlac.jpg" }
    ]
  }
];
const whyBasmati = [
  {
    num: "01",
    title: "Tane Tane Yapı",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300 font-bold", children: "Düşük nişasta" }),
      " oranı sayesinde taneler birbirine yapışmaz, lapa olmaz. Her lokma ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "dökülen, ayrışık" }),
      " ve net bir pilav."
    ] }),
    detail: "Pişirme sonrası tane tutarlılığı: %98",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400"
  },
  {
    num: "02",
    title: "Hafif & Sindirilebilir",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Sindirimi son derece ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-rose-300 font-bold", children: "kolaydır" }),
      ", mideyi yormaz. Yedikten sonra ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "ağırlık ve şişkinlik hissi" }),
      " bırakmaz."
    ] }),
    detail: "Glisemik indeks: 50–58 (düşük)",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400"
  },
  {
    num: "03",
    title: "Himalaya Aroması",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-orange-300 font-bold", children: "Himalaya" }),
      " eteklerinden gelen kendine has hafif kokusu vardır. Sade pilav bile ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "premium lezzet" }),
      " hissi verir."
    ] }),
    detail: "2-acetyl-1-pyrroline aroması",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    iconColor: "text-orange-400"
  },
  {
    num: "04",
    title: "Uzun Şık Taneler",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "İnce ve uzun yapısı sayesinde tabakta ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-sky-300 font-bold", children: "estetik" }),
      " durur. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "Sunum kalitesini" }),
      " ve görsel çekiciliği direkt yükseltir."
    ] }),
    detail: "Tane uzunluğu: 6.6–7.5 mm",
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    iconColor: "text-sky-400"
  },
  {
    num: "05",
    title: "Dengeli Enerji",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Kan şekerini daha ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-300 font-bold", children: "yavaş ve dengeli" }),
      " yükseltir. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "Uzun süre tok tutar" }),
      ", ani açlık ve enerji düşüşü yaratmaz."
    ] }),
    detail: "Normal pirince göre %30 daha düşük GI",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    iconColor: "text-green-400"
  },
  {
    num: "06",
    title: "Gerçek Premium",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
    desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Dünyanın ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-400 font-black", children: "en değerli pirinç" }),
      " çeşidi. Standart pirince göre ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "üst segment" }),
      "; ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-400 font-bold", children: "kaliteyi" }),
      " yükseltir."
    ] }),
    detail: "Dünya üretiminin yalnızca %1'i",
    color: "from-brand-500/20 to-brand-600/5",
    border: "border-brand-500/20",
    iconColor: "text-brand-400"
  }
];
const testimonials = [
  { name: "Ahmet Y.", role: "Düzenli Müşteri", text: "Gece 01:00'de başka nereye gideceksin? Ankara'nın kalbi burada atıyor. Basmati farkı ilk lokmada hissediliyor.", rating: 5, tag: "gece" },
  { name: "Fatma K.", role: "Çankaya Sakini", text: "Gece geç saatlerde açık olması büyük nimet. Pilav üstü tavuk muhteşem; o tereyağı sosu insanı mahvediyor.", rating: 5, tag: "gece" },
  { name: "Mehmet S.", role: "Ankara Gurme", text: "Fiyat-performans tartışmasız. Porsiyon cömert, basmati pirincinin kokusu kapıdan girerken hissediliyor.", rating: 5, tag: "fiyat" },
  { name: "Zeynep A.", role: "5 Yıllık Müşteri", text: "Yıllardır gidiyorum, kalite hiç düşmüyor. Sırrı pirincin kalitesinden asla taviz vermemelerinde.", rating: 5, tag: "kalite" },
  { name: "Kaan T.", role: "Gece Kuşu", text: "Saat 01:30'da açık başka bir yer yok bu kalitede. Sporcu pilavını denemeden çıkamıyorum.", rating: 5, tag: "gece" },
  { name: "Elif M.", role: "Yemek Blogger", text: "Ankaralıların sırrı bu yer. İstanbul'dan gelen arkadaşlarımı buraya götürüyorum, dönmek istemiyorlar.", rating: 5, tag: "kalite" },
  { name: "Burak D.", role: "Bilkent Öğrencisi", text: "Sınav gecelerinin kurtarıcısı. Gece 01'de bile sıcak, taze pilav yiyebiliyorum. Sporcu pilavı hem doyurucu hem lezzetli.", rating: 5, tag: "fiyat" },
  { name: "Selin Ö.", role: "Gece Nöbetçisi", text: "Hemşire olarak gece nöbetlerinde buraya geliyorum. Sağlıklı, doyurucu ve her zaman aynı kalite. Büyük emek var.", rating: 5, tag: "kalite" }
];
const faqItems = [
  { q: "Saat kaçta açıksınız?", a: "Her gün sabah 11:00'den gece 02:00'ye kadar açığız. Resmi tatillerde de kapatmıyoruz; Ankara'nın gece pilavcısı olmak budur." },
  { q: "Fiyatlar neden diğer pilavcılardan farklı?", a: "Sıradan pirinç yerine %100 Himalaya basmati kullandığımız için hammadde maliyetimiz yüksek. Buna karşın Ankara'da fiyat-performans açısından rakipsiz olmaya devam ediyoruz. 150₺'den başlayan tabakla premium basmati lezzetini yaşatıyoruz." },
  { q: "Neden basmati pirinci kullanıyorsunuz?", a: "Basmati, Himalaya eteklerinden gelen dünyanın en değerli aromalı pirincidır. Tane tane yapısı, düşük glisemik indeksi ve kendine özgü hafif kokusuyla sıradan pirince kıyasla çok üst bir lezzet ve sağlık deneyimi sunar. 5+ yıldır tek tercihimiz." },
  { q: "Toplu yemek fiyatlandırması nasıl?", a: "Toplu yemek fiyatımız kişi başı menü seçimine ve organizasyon türüne göre değişir. 50–100 kişi için standart fiyat, 100+ kişi için özel indirim uyguluyoruz. Detaylı fiyat için WhatsApp veya telefon üzerinden bize ulaşın." },
  { q: "Toplu yemek için minimum kaç kişi gerekli?", a: "Toplu yemek hizmetimizde minimum 50 kişilik siparişler kabul ediyoruz. Cenaze yemekleri, düğünler, kurumsal etkinlikler gibi çeşitli organizasyonlar için özel fiyatlama yapıyoruz." },
  { q: "Sipariş nasıl verebilirim?", a: "0510 222 56 95 numaralı telefonla doğrudan arayabilir, WhatsApp'tan mesaj atabilir ya da Trendyol Yemek, Yemeksepeti ve Getir platformlarından online sipariş verebilirsiniz." },
  { q: "Adresiniz nerede?", a: `Azerbaycan Caddesi 59/A, Bahçelievler Mah., Çankaya / Ankara adresindeyiz. Google Haritalar'da "Pilav Üstü Aşk" aratarak bize kolayca ulaşabilirsiniz.` },
  { q: "Her gün taze mi pişiriyorsunuz?", a: "Evet, kesinlikle. Hiçbir şekilde stok yapmıyor, bir gün öncesinden hazırlamıyoruz. Her sabah taze malzeme alıp günlük olarak pişiriyoruz. Bu bizim için bir prensip." },
  { q: "Paket servis veya teslimat var mı?", a: "Paket servisimiz bulunuyor. Online sipariş için Trendyol Yemek, Yemeksepeti ve Getir üzerinden sipariş verebilirsiniz. Ayrıca telefonla sipariş edip gelip alabilirsiniz; ortalama 10 dakikada hazır." }
];
const galleryImages = [
  { src: "/WhatsApp_Image_2024-12-26_at_00.10.41.jpeg", caption: "Mekan", badge: "Mekan" },
  { src: "/Sporcu_Pilavi.jpg", caption: "Sporcu Pilavı", badge: "Popüler" },
  { src: "/Kori_Soslu_Tavuklu_Pilav.jpg", caption: "Köri Soslu Pilav", badge: "Özel" },
  { src: "/Kavurmali_Pilav.jpg", caption: "Kavurmalı Pilav", badge: "Premium" },
  { src: "/WhatsApp_Image_2024-10-29_at_12.38.04_(1).jpeg", caption: "Mutfak", badge: "" },
  { src: "/Ton_Balikli_Pilav.jpeg", caption: "Ton Balıklı Pilav", badge: "" },
  { src: "/Tavuklu_Pilav.jpg", caption: "Tavuklu Pilav", badge: "Klasik" },
  { src: "/WhatsApp_Image_2024-10-29_at_12.38.03.jpeg", caption: "Servis", badge: "" }
];
const nightFeatures = [
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5" }), title: "Ankara'nın\nGece Pilavcısı", sub: "Saat 02:00'ye kadar" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }), title: "Hızlı\nServis", sub: "10 dk'da masanızda" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-5 h-5" }), title: "%100\nBasmati", sub: "Premium pirinç" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5" }), title: "Ankara'da\nTek", sub: "Gece 02:00 açık" }
];
const marqueeItems = [
  "★ Ankara'nın Tek Gece Pilavcısı",
  "🍵 Her Siparişe İkram Çayı",
  "★ Sektörde 1 Numara · 5+ Yıl",
  "★ %100 Saf Basmati Pirinci",
  "🏅 Ankara'nın Yerli Markası",
  "★ Her Gün Taze Pişirilir",
  "★ 312 Doğrulanmış Google Yorumu",
  "🍵 Çay İkramı · Her Masaya",
  "★ Gece Yarısı Pilavın Adresi",
  "★ Uygun Fiyat – Premium Kalite",
  "🏆 Çankaya'nın 1 Numarası"
];
const topluYemekCategories = [
  {
    num: "01",
    title: "Açılış, İnşaat Teslim\nEsnaf Hayrı",
    short: "Açılış & Esnaf",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ribbon, { className: "w-5 h-5" }),
    desc: "İşyeri açılışları, inşaat teslim törenleri ve esnaf hayırları için kalabalık gruplara özel hazırlık.",
    color: "from-amber-500/12 to-amber-600/3",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    glow: "rgba(245,158,11,0.15)"
  },
  {
    num: "02",
    title: "Belediye & Kamu\nEtkinlikleri",
    short: "Kamu Etkinlikleri",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "w-5 h-5" }),
    desc: "Belediye törenleri, resmi kamu etkinlikleri ve toplumsal organizasyonlar için kurumsal çözüm.",
    color: "from-sky-500/12 to-sky-600/3",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    glow: "rgba(14,165,233,0.15)"
  },
  {
    num: "03",
    title: "Cenaze & Mevlüt\nYemekleri",
    short: "Cenaze & Mevlüt",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-5 h-5" }),
    desc: "Cenaze yemekleri ve mevlüt organizasyonları için saygılı, geleneksel ve hızlı servis.",
    color: "from-stone-400/12 to-stone-500/3",
    border: "border-stone-500/20",
    iconBg: "bg-stone-500/10",
    iconColor: "text-stone-400",
    glow: "rgba(120,113,108,0.15)"
  },
  {
    num: "04",
    title: "Dernek & Vakıf\nOrganizasyonları",
    short: "Dernek & Vakıf",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
    desc: "Sivil toplum kuruluşları, dernek ve vakıf toplantıları için ekonomik ve lezzetli çözüm.",
    color: "from-green-500/12 to-green-600/3",
    border: "border-green-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    glow: "rgba(34,197,94,0.15)"
  },
  {
    num: "05",
    title: "Düğün\nYemekleri",
    short: "Düğün",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "w-5 h-5" }),
    desc: "Düğün törenleriniz için özel menü seçenekleri ve büyük kapasiteli hazırlık.",
    color: "from-rose-500/12 to-rose-600/3",
    border: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    glow: "rgba(244,63,94,0.15)"
  },
  {
    num: "06",
    title: "Kurumsal\nToplu Yemek",
    short: "Kurumsal",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5" }),
    desc: "Şirket içi organizasyonlar, çalışan yemekleri ve periyodik kurumsal beslenme çözümleri.",
    color: "from-blue-500/12 to-blue-600/3",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    glow: "rgba(59,130,246,0.15)"
  },
  {
    num: "07",
    title: "Nişan, Söz\nKına Yemekleri",
    short: "Nişan & Kına",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }),
    desc: "Nişan, söz ve kına geceleri için özel sunum ve lezzet garantisiyle unutulmaz anlar.",
    color: "from-pink-500/12 to-pink-600/3",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    glow: "rgba(236,72,153,0.15)"
  },
  {
    num: "08",
    title: "Okul\nEtkinlikleri",
    short: "Okul Etkinlikleri",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5" }),
    desc: "Okul toplantıları, mezuniyet törenleri ve okul aile birliği etkinlikleri için uygun fiyatlı çözüm.",
    color: "from-teal-500/12 to-teal-600/3",
    border: "border-teal-500/20",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    glow: "rgba(20,184,166,0.15)"
  },
  {
    num: "09",
    title: "Şantiye, Fabrika\nOSB Yemekleri",
    short: "Şantiye & Fabrika",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HardHat, { className: "w-5 h-5" }),
    desc: "Şantiye, fabrika ve organize sanayi bölgelerinde düzenli ve toplu çalışan yemek hizmeti.",
    color: "from-orange-500/12 to-orange-600/3",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    glow: "rgba(249,115,22,0.15)"
  },
  {
    num: "10",
    title: "Sünnet Düğün\nYemekleri",
    short: "Sünnet Düğünü",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-5 h-5" }),
    desc: "Sünnet düğünleri için geleneksel ve modern sunum seçenekleriyle tam hizmet.",
    color: "from-violet-400/12 to-violet-500/3",
    border: "border-violet-400/20",
    iconBg: "bg-violet-400/10",
    iconColor: "text-violet-400",
    glow: "rgba(167,139,250,0.15)"
  }
];
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    els.forEach((el2) => obs.observe(el2));
    return () => obs.disconnect();
  });
}
function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p2 = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p2, 3)) * target));
      if (p2 < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}
function useClock() {
  const [time, setTime] = reactExports.useState(/* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const id2 = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(id2);
  }, []);
  return time;
}
function useIsOpen() {
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => {
      const h = (/* @__PURE__ */ new Date()).getHours();
      setOpen(h >= 11 || h < 2);
    };
    check();
    const id2 = setInterval(check, 6e4);
    return () => clearInterval(id2);
  }, []);
  return open;
}
function StarField() {
  const stars = reactExports.useRef([]);
  if (stars.current.length === 0) {
    for (let i = 0; i < 55; i++) {
      stars.current.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.4 + 0.4,
        delay: Math.random() * 4,
        dur: Math.random() * 3 + 2
      });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none z-[5]", children: stars.current.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "star-dot",
      style: {
        position: "absolute",
        left: `${s.x}%`,
        top: `${s.y}%`,
        width: s.r * 2,
        height: s.r * 2,
        borderRadius: "50%",
        background: "white",
        animationDelay: `${s.delay}s`,
        animationDuration: `${s.dur}s`
      }
    },
    i
  )) });
}
function ParticleCanvas() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.4 + 0.05,
        hue: Math.random() > 0.7 ? 0 : 30
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p2) => {
        p2.x += p2.vx;
        p2.y += p2.vy;
        if (p2.x < 0) p2.x = canvas.width;
        if (p2.x > canvas.width) p2.x = 0;
        if (p2.y < 0) p2.y = canvas.height;
        if (p2.y > canvas.height) p2.y = 0;
        ctx.beginPath();
        ctx.arc(p2.x, p2.y, p2.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p2.hue}, 90%, 65%, ${p2.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(220,38,38,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full pointer-events-none z-[3]" });
}
function TiltCard({ children, className, style, intensity = 10 }) {
  const ref = reactExports.useRef(null);
  const onMouseMove = reactExports.useCallback((e) => {
    const el2 = ref.current;
    if (!el2) return;
    const rect = el2.getBoundingClientRect();
    const x2 = (e.clientX - rect.left) / rect.width - 0.5;
    const y2 = (e.clientY - rect.top) / rect.height - 0.5;
    el2.style.transform = `perspective(600px) rotateX(${-y2 * intensity}deg) rotateY(${x2 * intensity}deg) scale3d(1.02,1.02,1.02)`;
  }, [intensity]);
  const onMouseLeave = reactExports.useCallback(() => {
    const el2 = ref.current;
    if (!el2) return;
    el2.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      onMouseMove,
      onMouseLeave,
      style: { transition: "transform 0.15s ease", willChange: "transform", ...style },
      children
    }
  );
}
function TypewriterWords({ words, className }) {
  const [wi2, setWi] = reactExports.useState(0);
  const [ci2, setCi] = reactExports.useState(0);
  const [deleting, setDeleting] = reactExports.useState(false);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) {
      const t2 = setTimeout(() => setPaused(false), 1600);
      return () => clearTimeout(t2);
    }
    const word = words[wi2];
    if (!deleting) {
      if (ci2 < word.length) {
        const t2 = setTimeout(() => setCi((c) => c + 1), 70);
        return () => clearTimeout(t2);
      } else {
        setPaused(true);
        setDeleting(true);
      }
    } else {
      if (ci2 > 0) {
        const t2 = setTimeout(() => setCi((c) => c - 1), 38);
        return () => clearTimeout(t2);
      } else {
        setDeleting(false);
        setWi((w2) => (w2 + 1) % words.length);
      }
    }
  }, [ci2, deleting, paused, wi2, words]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className, children: [
    words[wi2].slice(0, ci2),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typewriter-cursor" })
  ] });
}
function NeonClock() {
  const time = useClock();
  const h = String(time.getHours()).padStart(2, "0");
  const m2 = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");
  const isNight = time.getHours() >= 20 || time.getHours() < 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-digit", children: h }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-colon", children: ":" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-digit", children: m2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-colon", children: ":" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-digit neon-digit-sec", children: s })
    ] }),
    isNight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-[9px] font-bold tracking-[0.25em] uppercase animate-pulse", children: "AÇIK — GECENİN PİLAVCISI" })
  ] });
}
function EmberLayer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden z-20", children: [
    { cls: "ember ember-1", s: { bottom: "8%", left: "18%" } },
    { cls: "ember ember-2", s: { bottom: "5%", left: "32%" } },
    { cls: "ember ember-3", s: { bottom: "12%", left: "48%" } },
    { cls: "ember ember-4", s: { bottom: "6%", left: "62%" } },
    { cls: "ember ember-5", s: { bottom: "10%", left: "75%" } },
    { cls: "ember ember-6", s: { bottom: "7%", left: "88%" } }
  ].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: e.cls, style: e.s }, i)) });
}
function RiceGrain({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 48", fill: "currentColor", className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "24", rx: "7", ry: "22" }) });
}
function StatCounter({ val, suffix, label, started }) {
  const c = useCountUp(val, 1600, started);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "text-white font-black text-3xl sm:text-4xl font-display tabular-nums leading-none tracking-tight",
        style: { textShadow: "0 0 30px rgba(255,255,255,0.15)" },
        children: [
          c,
          suffix
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[10px] sm:text-[11px] mt-1.5 tracking-[0.12em] uppercase font-semibold", children: label })
  ] });
}
function MenuCard({ item, onZoom }) {
  const [err, setErr] = reactExports.useState(false);
  const fallback = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "menu-card-ultra foil-card group relative flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { paddingBottom: "70%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: err ? fallback : item.img,
          alt: item.name,
          onError: () => setErr(true),
          loading: "lazy",
          className: "img-zoom absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          style: { background: "linear-gradient(135deg, rgba(220,38,38,0.12) 0%, transparent 60%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onZoom,
          className: "absolute top-3 right-3 w-8 h-8 rounded-xl backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-90",
          style: { background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.18)", WebkitTapHighlightColor: "transparent" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3.5 h-3.5" })
        }
      ),
      item.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute top-3 left-3 flex items-center gap-1.5 text-white text-[9px] font-black px-2.5 py-1.5 rounded-full",
          style: { background: "linear-gradient(135deg,#dc2626,#b91c1c)", boxShadow: "0 4px 14px rgba(220,38,38,0.5)", border: "1px solid rgba(255,100,100,0.3)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-2.5 h-2.5 fire-flicker" }),
            "Popüler"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-white font-black font-display leading-none",
          style: { fontSize: "1.15rem", textShadow: "0 2px 8px rgba(0,0,0,0.6)" },
          children: [
            item.price,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7em", fontWeight: 700, opacity: 0.8 }, children: "₺" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3.5 right-3 flex gap-0.5 opacity-90", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2 h-2 fill-amber-400 text-amber-400" }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 text-[13px] sm:text-[14px] mb-1.5 group-hover:text-brand-600 transition-colors leading-snug tracking-tight", children: item.name }),
      item.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[11px] leading-relaxed line-clamp-2 flex-1 mb-4", children: item.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:05102225695",
          className: "add-to-cart-btn w-full",
          style: { WebkitTapHighlightColor: "transparent" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sipariş Ver" })
          ]
        }
      )
    ] })
  ] });
}
function MenuListCard({ item, onZoom }) {
  const [err, setErr] = reactExports.useState(false);
  const fallback = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "menu-list-card group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer", onClick: onZoom, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: err ? fallback : item.img,
          alt: item.name,
          onError: () => setErr(true),
          loading: "lazy",
          className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
          style: { background: "rgba(0,0,0,0.45)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3.5 h-3.5 text-white" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 text-[13px] sm:text-sm leading-snug group-hover:text-brand-600 transition-colors", children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-shrink-0 font-black text-brand-600 font-display text-sm leading-none", children: [
          item.price,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold ml-0.5 opacity-70", children: "₺" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[11px] leading-relaxed line-clamp-1 mb-2", children: item.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        item.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[9px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-2 h-2" }),
          "Popüler"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:05102225695", className: "ml-auto flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-brand-600 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-2.5 h-2.5" }),
          "Sipariş Ver"
        ] })
      ] })
    ] })
  ] });
}
function NightBadge({ isOpen }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "night-badge hero-badge-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "night-badge-inner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5 text-amber-300 flex-shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ankara'nın Gece Pilavcısı" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "night-badge-dot" }),
    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-green-400 font-bold flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "live-blink-dot w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 inline-block" }),
      "Şu An Açık"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 flex-shrink-0", children: "11:00–02:00" })
  ] }) });
}
function FaqItem({ item, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-brand-200 bg-brand-50/50 shadow-md shadow-brand-100/50" : "border-gray-100 bg-white hover:border-brand-100 hover:shadow-sm"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "w-full flex items-center gap-4 px-5 sm:px-7 py-5 text-left",
        onClick: () => setOpen(!open),
        style: { WebkitTapHighlightColor: "transparent" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 ${open ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30" : "bg-gray-100 text-gray-500"}`, children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 font-bold text-sm sm:text-base transition-colors duration-200 ${open ? "text-brand-700" : "text-gray-800"}`, children: item.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-brand-600 text-white rotate-180" : "bg-gray-100 text-gray-400"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 sm:px-7 pb-5 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-brand-100 pt-4 ml-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: item.a }) }) })
  ] });
}
function App() {
  const [navOpen, setNavOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [, setCursorPos] = reactExports.useState({ x: -9999, y: -9999 });
  const [scrollProgress, setScrollProgress] = reactExports.useState(0);
  const [activeSection, setActiveSection] = reactExports.useState("hero");
  const [activeCategory, setActiveCategory] = reactExports.useState(0);
  const [menuSearch, setMenuSearch] = reactExports.useState("");
  const [menuView, setMenuView] = reactExports.useState("grid");
  const [menuFilter, setMenuFilter] = reactExports.useState("all");
  const [tFilter, setTFilter] = reactExports.useState("all");
  const [lightboxItem, setLightboxItem] = reactExports.useState(null);
  const [tIdx, setTIdx] = reactExports.useState(0);
  const [statsStarted, setStatsStarted] = reactExports.useState(false);
  const [expandedToplu, setExpandedToplu] = reactExports.useState(null);
  const [topluModal, setTopluModal] = reactExports.useState(false);
  const [selectedTopluCat, setSelectedTopluCat] = reactExports.useState(null);
  const [formSent, setFormSent] = reactExports.useState(false);
  const [personCount, setPersonCount] = reactExports.useState(50);
  const [topluName, setTopluName] = reactExports.useState("");
  const [topluPhone, setTopluPhone] = reactExports.useState("");
  const [topluDate, setTopluDate] = reactExports.useState("");
  const [topluNote, setTopluNote] = reactExports.useState("");
  const [topluSending, setTopluSending] = reactExports.useState(false);
  const [liveOrders, setLiveOrders] = reactExports.useState(47);
  const [showBackTop, setShowBackTop] = reactExports.useState(false);
  const [floatCTAVisible, setFloatCTAVisible] = reactExports.useState(false);
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const [cartItems, setCartItems] = reactExports.useState([]);
  const statsRef = reactExports.useRef(null);
  const touchStartX = reactExports.useRef(0);
  const isOpen = useIsOpen();
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const addToCart = reactExports.useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) return prev.map((i) => i.name === item.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);
  useReveal();
  reactExports.useEffect(() => {
    const onMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackTop(window.scrollY > 600);
      setFloatCTAVisible(window.scrollY > window.innerHeight * 0.7);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total * 100 : 0);
      const sections = ["hero", "basmati", "menu", "toplu-yemek", "about", "testimonials", "contact"];
      for (const id2 of [...sections].reverse()) {
        const el2 = document.getElementById(id2);
        if (el2 && window.scrollY >= el2.offsetTop - 120) {
          setActiveSection(id2);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (!isOpen) return;
    const id2 = setInterval(() => {
      setLiveOrders((n2) => n2 + Math.floor(Math.random() * 3));
    }, 8e3);
    return () => clearInterval(id2);
  }, [isOpen]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightboxItem(null);
        setTopluModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  reactExports.useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStatsStarted(true);
    }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);
  const filteredTestimonials = tFilter === "all" ? testimonials : testimonials.filter((t2) => t2.tag === tFilter);
  reactExports.useEffect(() => {
    const id2 = setInterval(() => setTIdx((i) => (i + 1) % Math.max(filteredTestimonials.length, 1)), 5e3);
    return () => clearInterval(id2);
  }, [filteredTestimonials.length]);
  const scrollTo = reactExports.useCallback((id2) => {
    var _a;
    (_a = document.getElementById(id2)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = topluModal || lightboxItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [topluModal, lightboxItem]);
  const filteredMenuItems = menuCategories[activeCategory].items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(menuSearch.toLowerCase()) || item.desc.toLowerCase().includes(menuSearch.toLowerCase());
    const matchFilter = menuFilter === "all" ? true : menuFilter === "veg" ? !!item.veg : menuFilter === "meat" ? !item.veg : menuFilter === "popular" ? item.popular : true;
    return matchSearch && matchFilter;
  });
  const openTopluModal = (cat) => {
    setSelectedTopluCat(cat);
    setFormSent(false);
    setPersonCount(50);
    setTopluName("");
    setTopluPhone("");
    setTopluDate("");
    setTopluNote("");
    setTopluModal(true);
  };
  const submitTopluForm = async () => {
    if (!topluName.trim() || topluPhone.trim().length < 10) return;
    setTopluSending(true);
    await supabase.from("toplu_yemek_leads").insert({
      name: topluName.trim(),
      phone: topluPhone.trim(),
      event_date: topluDate || null,
      person_count: personCount,
      category: (selectedTopluCat == null ? void 0 : selectedTopluCat.short) ?? "",
      note: topluNote.trim()
    });
    setTopluSending(false);
    setFormSent(true);
    const msg = `Merhaba! Toplu yemek teklifi almak istiyorum.

Ad: ${topluName}
Tel: ${topluPhone}
Organizasyon: ${(selectedTopluCat == null ? void 0 : selectedTopluCat.short) ?? "-"}
Kişi: ${personCount}
Tarih: ${topluDate || "Belirtilmedi"}
Not: ${topluNote || "-"}`;
    window.open(`https://wa.me/905102225695?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const navLinks = [
    { label: "Ana Sayfa", id: "hero" },
    { label: "Basmati Farkı", id: "basmati" },
    { label: "Menü", id: "menu" },
    { label: "Toplu Yemek", id: "toplu-yemek" },
    { label: "Hakkımızda", id: "about" },
    { label: "Yorumlar", id: "testimonials" },
    { label: "İletişim", id: "contact" }
  ];
  const prevT = () => setTIdx((i) => (i - 1 + Math.max(filteredTestimonials.length, 1)) % Math.max(filteredTestimonials.length, 1));
  const nextT = () => setTIdx((i) => (i + 1) % Math.max(filteredTestimonials.length, 1));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white text-gray-900 overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-spotlight-overlay", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed top-0 left-0 z-[100] h-[2px] transition-all duration-100 origin-left",
        style: {
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #991b1b 0%, #dc2626 40%, #f97316 70%, #fbbf24 100%)",
          boxShadow: "0 0 12px rgba(220,38,38,0.8), 0 0 24px rgba(220,38,38,0.4)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "side-scroll-indicator", children: navLinks.slice(0, 6).map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => scrollTo(l2.id),
        title: l2.label,
        style: { WebkitTapHighlightColor: "transparent" },
        className: `scroll-dot w-1.5 rounded-full cursor-pointer border-0 p-0 ${activeSection === l2.id ? "active h-6" : "h-1.5 bg-gray-600/50 hover:bg-brand-400/70"}`
      },
      l2.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/97 backdrop-blur-3xl border-b border-black/[0.06]" : "bg-transparent"}`, style: {
      marginTop: 2,
      boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.05), 0 8px 40px rgba(0,0,0,0.07)" : "none"
    }, children: [
      scrolled && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px pointer-events-none",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 sm:h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => scrollTo("hero"), className: "flex-shrink-0 group relative flex items-center gap-2.5", style: { WebkitTapHighlightColor: "transparent" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/PILAV_USTU_LOGO.png",
              alt: "Pilav Üstü Aşk",
              className: `h-9 sm:h-11 w-auto object-contain transition-all duration-500 group-hover:scale-[1.05] ${!scrolled ? "brightness-0 invert" : ""}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `hidden sm:flex flex-col items-start transition-all duration-500 ${!scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-brand-word leading-none", children: "Pilav Üstü Aşk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-gray-400 tracking-widest uppercase leading-none mt-0.5", children: "Ankara · Çankaya" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-0.5", children: [
          navLinks.map((l2) => {
            const isActive = activeSection === l2.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => scrollTo(l2.id),
                className: `relative px-3.5 xl:px-4 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-200 rounded-xl group overflow-hidden ${isActive ? scrolled ? "text-brand-600" : "text-white" : scrolled ? "text-gray-500 hover:text-gray-900" : "text-white/65 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 rounded-xl transition-all duration-200 ${isActive ? scrolled ? "bg-brand-50" : "bg-white/10" : scrolled ? "opacity-0 group-hover:opacity-100 bg-gray-50" : "opacity-0 group-hover:opacity-100 bg-white/8"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: l2.label }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600 nav-dot-active" }),
                  !isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute bottom-0 left-3.5 right-3.5 h-px rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${scrolled ? "bg-brand-500" : "bg-white/40"}` })
                ]
              },
              l2.id
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-px h-4 mx-2 ${scrolled ? "bg-gray-200" : "bg-white/12"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mr-3", children: [
            { name: "TY", color: "#FF6600", href: "https://www.trendyol.com/sr?q=pilav+%C3%BCst%C3%BC+a%C5%9Fk" },
            { name: "YS", color: "#E50023", href: "https://www.yemeksepeti.com/ankara" },
            { name: "G", color: "#7B2FFF", href: "https://getir.com" }
          ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p2.href,
              target: "_blank",
              rel: "noopener noreferrer",
              title: i === 0 ? "Trendyol" : i === 1 ? "Yemeksepeti" : "Getir",
              className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-black transition-all hover:scale-110 active:scale-95",
              style: { background: p2.color, boxShadow: `0 2px 10px ${p2.color}50` },
              children: p2.name
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCartOpen(true),
              className: `relative p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 mr-1 ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`,
              "aria-label": "Sepet",
              style: { WebkitTapHighlightColor: "transparent" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white rounded-full text-[10px] font-black flex items-center justify-center shadow-lg shadow-brand-600/50", children: cartCount })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: "ultra-cta group relative overflow-hidden text-white text-[13px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sipariş Ver" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${scrolled ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30" : "bg-white/12 text-white border border-white/25 backdrop-blur-sm"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                "Ara"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCartOpen(true),
              className: `relative p-2 rounded-xl transition-all active:scale-90 ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white"}`,
              "aria-label": "Sepet",
              style: { WebkitTapHighlightColor: "transparent" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 bg-brand-600 text-white rounded-full text-[9px] font-black flex items-center justify-center shadow-md", children: cartCount })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `p-2 rounded-xl transition-all active:scale-90 ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white"}`,
              onClick: () => setNavOpen(!navOpen),
              "aria-label": "Menü",
              style: { WebkitTapHighlightColor: "transparent" },
              children: navOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
            }
          )
        ] })
      ] }),
      navOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden fixed inset-0 z-40 flex flex-col", style: { top: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }, onClick: () => setNavOpen(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mobile-drawer-bg relative z-10 flex flex-col h-full px-5 pt-[calc(env(safe-area-inset-top,0px)+72px)]",
            style: { paddingBottom: "max(32px, env(safe-area-inset-bottom))" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8 pb-6", style: { borderBottom: "1px solid rgba(255,255,255,0.06)" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/PILAV_USTU_LOGO.png", alt: "Pilav Üstü Aşk", className: "h-10 w-auto object-contain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-xl opacity-20 blur-md", style: { background: "radial-gradient(ellipse, #dc2626, transparent)" } })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-white text-base tracking-wide", children: "Pilav Üstü Aşk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-2 h-2 flex-shrink-0", children: [
                      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ping-slow absolute inset-0 rounded-full bg-green-400 opacity-60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-2 h-2 rounded-full block ${isOpen ? "bg-green-400" : "bg-gray-600"}` })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-bold ${isOpen ? "text-green-400" : "text-gray-500"}`, children: isOpen ? "Şu An Açık · 02:00'ye kadar" : "Kapalı · 11:00'de açılır" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "ml-auto w-9 h-9 rounded-2xl flex items-center justify-center text-white/50 active:scale-90 transition-all",
                    style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", WebkitTapHighlightColor: "transparent" },
                    onClick: () => setNavOpen(false),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1.5 flex-1", children: navLinks.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => scrollTo(l2.id),
                  className: `mobile-nav-link ${activeSection === l2.id ? "active" : "inactive"}`,
                  style: { WebkitTapHighlightColor: "transparent" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold", children: l2.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 opacity-50" })
                  ]
                },
                l2.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-center gap-3 py-3 rounded-2xl mb-1",
                    style: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-amber-400 text-amber-400" }, i)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-[11px] font-semibold", children: "4.9 · 312 Google Yorumu" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "tel:05102225695",
                      className: "mobile-call-btn haptic-press text-white text-center font-black text-sm flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        "Hemen Ara"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://wa.me/905102225695",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "mobile-wa-btn haptic-press text-white text-center font-black text-sm flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                        "WhatsApp"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-brand-500 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-[10px] font-medium", children: "Azerbaycan Cad. 59/A · Çankaya / Ankara" })
                ] })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "relative min-h-[100svh] flex flex-col justify-end sm:justify-center overflow-hidden hero-grain bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-[0] pointer-events-none",
          style: { background: "linear-gradient(to right, #000000 0%, #000000 50%, #111111 50%, #1c1c1c 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-[0] pointer-events-none",
          style: { background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(185,28,28,0.07) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-grid absolute inset-0 z-[1] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-[2] pointer-events-none overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aurora-blob aurora-blob-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aurora-blob aurora-blob-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aurora-blob aurora-blob-3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleCanvas, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-scanline absolute inset-0 z-[6] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hidden sm:block absolute inset-0 z-[8] pointer-events-none",
          style: { background: "linear-gradient(to bottom right, #991b1b, #dc2626, #ef4444)", clipPath: "polygon(63% 0, 64.5% 0, 48.8% 100%, 47.3% 100%)", opacity: 0.85 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hidden sm:block absolute inset-0 z-[8] pointer-events-none",
          style: { background: "linear-gradient(to bottom right, #7f1d1d, #b91c1c)", clipPath: "polygon(67% 0, 67.8% 0, 52% 100%, 51.2% 100%)", opacity: 0.4 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-[9] pointer-events-none",
          style: { background: "radial-gradient(ellipse 85% 75% at 40% 50%, transparent 35%, rgba(0,0,0,0.75) 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-[55%] pointer-events-none z-[10]",
          style: { background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-80 pointer-events-none z-[10]",
          style: { background: "radial-gradient(ellipse at 40% 110%, rgba(220,38,38,0.22) 0%, rgba(251,146,60,0.08) 40%, transparent 65%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-[15] pointer-events-none overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-ray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-ray light-ray-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spotlight-sweep" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spotlight-sweep" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmberLayer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none z-[11] hidden sm:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RiceGrain, { className: "absolute top-[18%] right-[12%] w-4 h-8 text-brand-400 rice-1 opacity-15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RiceGrain, { className: "absolute top-[35%] right-[22%] w-3 h-6 text-white rice-2 opacity-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RiceGrain, { className: "absolute top-[60%] right-[8%] w-5 h-9 text-brand-300 rice-3 opacity-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-[72px] sm:pt-24 pb-4 sm:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 sm:mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NightBadge, { isOpen }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden mb-3 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-ambient-line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-ambient-line hero-ambient-line-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4 sm:mb-5 hero-text-r1 sm:animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-line-draw h-px w-6 bg-brand-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-tagline-sub font-black tracking-[0.25em] uppercase sign-blink", style: { color: "#ef4444", textShadow: "0 0 20px rgba(220,38,38,0.5)" }, children: "Pilav Üstü Aşk · Ankara Çankaya" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black leading-[0.97] mb-5 sm:mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "hero-text-r2 sm:animate-fade-in block text-white/40 text-[11px] sm:text-base font-semibold tracking-[0.45em] uppercase mb-2.5 sm:mb-3 font-sans",
                style: { letterSpacing: "0.4em" },
                children: "Ankara · Çankaya · Bahçelievler"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-text-r3 sm:animate-fade-in block text-white text-[2.6rem] sm:text-5xl md:text-6xl xl:text-[5.5rem] text-glow molten-glow leading-none", children: "Ankara'nın" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-text-r4 sm:animate-fade-in block text-[2.6rem] sm:text-5xl md:text-6xl xl:text-[5.5rem] shimmer-text mt-0.5 leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TypewriterWords,
              {
                words: ["Gece Pilavcısı", "Basmati Ustası", "Yerli Markası", "Toplu Yemekçisi", "Lezzet Durağı", "#1 Pilavcısı"],
                className: "shimmer-text"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-text-r5 sm:animate-fade-in flex items-center gap-3 mt-3 sm:mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 max-w-[48px]", style: { background: "linear-gradient(to right, rgba(220,38,38,0.7), transparent)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[11px] sm:text-sm font-black tracking-[0.35em] uppercase font-sans drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]", children: "Pilav Üstü Aşk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 max-w-[48px]", style: { background: "linear-gradient(to left, rgba(220,38,38,0.7), transparent)" } })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 hero-desc-mobile sm:text-base xl:text-lg leading-relaxed max-w-lg mb-5 sm:mb-8 animate-fade-in", style: { animationDelay: "0.25s" }, children: [
            "Ankara'da tek ve eşsiz:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-black", children: "Gece 02:00'ye kadar" }),
            " açık,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "%100 basmati pirinci" }),
            ",",
            " ",
            "her gün ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "taze" }),
            " hazırlama."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col xs:flex-row gap-3 mb-5 animate-fade-in", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => scrollTo("menu"),
                className: "group ultra-glow-cta ring-aura incandescent-btn ripple-btn btn-shine flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base",
                children: [
                  "Menüyü Keşfet",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:05102225695", className: "group btn-outline flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              "0510 222 56 95"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden grid grid-cols-2 gap-2.5 mb-5 animate-fade-in", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => scrollTo("menu"),
                className: "incandescent-btn btn-shine flex items-center justify-center gap-1.5 text-white font-black text-[14px]",
                style: { borderRadius: 18, minHeight: 52, padding: "0 16px", WebkitTapHighlightColor: "transparent" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Menüyü Gör" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 flex-shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "flex items-center justify-center gap-2 text-white font-black text-[14px] active:scale-95 transition-all",
                style: { borderRadius: 18, minHeight: 52, padding: "0 16px", background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", WebkitTapHighlightColor: "transparent" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-brand-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hemen Ara" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-platform-row flex items-center gap-2 mb-8 sm:mb-14 animate-fade-in", style: { animationDelay: "0.38s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-[10px] font-semibold tracking-widest uppercase mr-1 flex-shrink-0", children: "Sipariş:" }),
            [
              { name: "Trendyol", href: "https://www.trendyol.com/sr?q=pilav+%C3%BCst%C3%BC+a%C5%9Fk", color: "#FF6600", bg: "rgba(255,102,0,0.12)", border: "rgba(255,102,0,0.25)" },
              { name: "Yemeksepeti", href: "https://www.yemeksepeti.com/ankara", color: "#E50023", bg: "rgba(229,0,35,0.1)", border: "rgba(229,0,35,0.25)" },
              { name: "Getir", href: "https://getir.com", color: "#7B2FFF", bg: "rgba(123,47,255,0.1)", border: "rgba(123,47,255,0.25)" }
            ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: p2.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hero-platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all hover:scale-105 active:scale-95",
                style: { background: p2.bg, border: `1px solid ${p2.border}`, color: p2.color },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full flex-shrink-0", style: { background: p2.color } }),
                  p2.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5 opacity-70" })
                ]
              },
              i
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: statsRef, className: "animate-fade-in", style: { animationDelay: "0.4s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-wrap items-start gap-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-a", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { val: 5, suffix: "+", label: "Yıllık Tecrübe", started: statsStarted }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l border-white/12 pl-10 float-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { val: 500, suffix: "+", label: "Günlük Müşteri", started: statsStarted }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l border-white/12 pl-10 float-c", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { val: 312, suffix: "", label: "Google Yorum", started: statsStarted }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l border-white/12 pl-10 float-a", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { val: 4, suffix: ".9★", label: "Ortalama Puan", started: statsStarted }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden grid grid-cols-2 gap-2", children: [
              { val: 5, suffix: "+", label: "Yıllık Tecrübe", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5" }) },
              { val: 500, suffix: "+", label: "Günlük Müşteri", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }) },
              { val: 312, suffix: "", label: "Google Yorum", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }) },
              { val: 4, suffix: ".9★", label: "Ortalama Puan", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5" }) }
            ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats-mobile-card relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-500 opacity-70", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-lbl", children: s.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-val", children: [
                statsStarted ? s.val : 0,
                s.suffix
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3 sm:mt-4 animate-fade-in", style: { animationDelay: "0.5s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["A", "M", "F", "K", "Z"].map((letter, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-black text-white",
                style: { background: ["#dc2626", "#b91c1c", "#ef4444", "#991b1b", "#dc2626"][i], zIndex: 5 - i },
                children: letter
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "+308 mutlu müşteri bu ay" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-5 animate-fade-in", style: { animationDelay: "0.6s" }, children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3" }), text: "Gece 02:00'ye kadar", color: "rgba(251,191,36,0.8)" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3 h-3" }), text: "%100 Basmati", color: "rgba(251,146,60,0.8)" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }), text: "Çankaya / Ankara", color: "rgba(220,38,38,0.8)" },
            { emoji: "🍵", text: "Çay İkramı", color: "rgba(34,197,94,0.8)" },
            { emoji: "🏅", text: "Yerli Marka", color: "rgba(251,191,36,0.8)" }
          ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hero-pill-tag", children: [
            "icon" in p2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: p2.color }, children: p2.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p2.emoji }),
            p2.text
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TiltCard, { className: "hidden lg:flex flex-col gap-4 flex-shrink-0 w-80 xl:w-96 animate-fade-in", style: { animationDelay: "0.5s" }, intensity: 5, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative overflow-hidden rounded-3xl p-5",
              style: { background: "rgba(0,0,0,0.7)", border: "1px solid rgba(220,38,38,0.25)", backdropFilter: "blur(24px)", boxShadow: "0 0 40px rgba(220,38,38,0.1), inset 0 0 40px rgba(0,0,0,0.5)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.05]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 w-16 h-16 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full spin-slow", style: { border: "1.5px dashed rgba(220,38,38,0.8)" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 w-12 h-12 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full spin-slow", style: { border: "1px dashed rgba(220,38,38,0.5)", animationDirection: "reverse" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-1/2 right-4 w-20 h-20 -translate-y-1/2 pointer-events-none",
                    style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.15), transparent)", filter: "blur(16px)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5 text-amber-300" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70 text-[9px] font-black tracking-[0.3em] uppercase", children: "Şu An · Canlı" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(NeonClock, {})
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden group cursor-default depth-3", style: { height: 160 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/SPORCU.jpg",
                alt: "Sporcu Pilavı",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: { background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3.5 left-4 right-4 flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 text-[7px] font-black px-2 py-0.5 rounded-full",
                    style: { background: "linear-gradient(135deg, #dc2626, #f97316)", color: "white" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-2 h-2" }),
                      "BUGÜNÜN ÖNERİSİ"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-base leading-tight", children: "Sporcu Pilavı" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-[10px]", children: "300g basmati + haşlanmış tavuk" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-xl font-display leading-none", children: "250₺" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 justify-end mt-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2 h-2 fill-amber-400 text-amber-400" }, i)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5" }), label: "%100 Saf Basmati Pirinci", sub: "Himalaya kökenli", accent: "#f59e0b", rgb: "245,158,11" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5" }), label: "Gece 02:00'ye Kadar Açık", sub: "Ankara'da tek", accent: "#a5f3fc", rgb: "165,243,252" },
            { emoji: "🍵", label: "Çay İkramı — Her Masaya", sub: "Geleneksel misafirperverlik", accent: "#4ade80", rgb: "74,222,128" },
            { emoji: "🏅", label: "Ankara'nın Yerli Markası", sub: "Sektörde 5+ yıldır 1 numara", accent: "#fbbf24", rgb: "251,191,36" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }), label: "4.9 Google Puanı", sub: "312 doğrulanmış yorum", accent: "#fbbf24", rgb: "251,191,36" }
          ].map((f2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 cursor-default",
              style: {
                background: `rgba(${f2.rgb},0.05)`,
                border: `1px solid rgba(${f2.rgb},0.12)`,
                animationDelay: `${0.55 + i * 0.08}s`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-sm",
                    style: { background: `rgba(${f2.rgb},0.12)`, color: f2.accent },
                    children: "emoji" in f2 ? f2.emoji : f2.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-bold leading-tight", children: f2.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-[9px] mt-0.5", children: f2.sub })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full flex-shrink-0", style: { background: f2.accent, boxShadow: `0 0 6px ${f2.accent}` } })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative rounded-2xl px-4 py-3 flex items-center gap-3 overflow-hidden",
              style: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2 flex-shrink-0", children: ["/MISIRLI.jpg", "/NOHUTLU.jpg", "/TAVUKLU.jpg"].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full overflow-hidden border-2 border-[#000]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" }) }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[10px] font-bold leading-tight", children: "Bu hafta 500+ mutlu müşteri" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-0.5", children: [
                    [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2 h-2 fill-amber-400 text-amber-400" }, i)),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-[8px] ml-0.5", children: "4.9/5" })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hero-dock px-4 pt-4 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 overflow-x-auto scrollbar-none pb-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "premium-badge-pill flex-shrink-0 bg-amber-500/10 border-amber-500/25 text-amber-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "🏆" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sektörde 1 Numara" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "premium-badge-pill flex-shrink-0 bg-green-500/10 border-green-500/25 text-green-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "🍵" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Çay İkramı" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "premium-badge-pill flex-shrink-0 bg-red-500/10 border-red-500/25 text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "🏅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ankara'nın Yerli Markası" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "premium-badge-pill flex-shrink-0 bg-white/5 border-white/10 text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "%100 Basmati" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-2 h-2 flex-shrink-0", children: [
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ping-slow absolute inset-0 rounded-full bg-green-400 opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-2 h-2 rounded-full block ${isOpen ? "bg-green-400" : "bg-gray-600"}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-black tracking-wide ${isOpen ? "text-green-400" : "text-gray-500"}`, children: isOpen ? "Şu An Açık — 02:00'ye kadar" : "Kapalı — 11:00'de açılır" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-[10px] font-bold ml-1", children: "4.9" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:05102225695", className: "mobile-call-btn haptic-press", style: { WebkitTapHighlightColor: "transparent" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 relative z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Hemen Ara" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/905102225695?text=Merhaba,%20sipariş%20vermek%20istiyorum.",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mobile-wa-btn haptic-press",
              style: { WebkitTapHighlightColor: "transparent" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 relative z-10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "WhatsApp" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 mt-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-brand-500 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-[10px]", children: "Azerbaycan Cad. 59/A · Çankaya / Ankara" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 animate-fade-in", style: { animationDelay: "1.4s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-[9px] tracking-[0.25em] uppercase", children: "Keşfet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4 text-white/30 animate-bounce" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-[#111111] to-transparent z-20 pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: { background: "#060606", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.03]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-top-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4", children: nightFeatures.map((f2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group relative flex flex-col sm:flex-row items-center sm:items-start gap-4 px-6 py-8 sm:py-10 cursor-default transition-all duration-300 overflow-hidden
                  ${i < 3 ? "border-r border-white/[0.04]" : ""}
                  ${i < 2 ? "border-b sm:border-b-0 border-white/[0.04]" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none",
                style: { background: "radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300",
                style: { background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.15)" },
                children: [
                  f2.icon,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                      style: { boxShadow: "0 0 20px rgba(220,38,38,0.3)", background: "rgba(220,38,38,0.1)" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-sm leading-snug whitespace-pre-line tracking-tight", children: f2.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs mt-1.5 font-medium", children: f2.sub }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mt-2 h-px w-0 group-hover:w-full transition-all duration-500 mx-auto sm:mx-0",
                  style: { background: "linear-gradient(90deg, rgba(220,38,38,0.8), transparent)" }
                }
              )
            ] })
          ]
        },
        i
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.15), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-stretch min-w-max sm:min-w-0 sm:justify-center", children: [
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }), text: "5+ Yıl Tecrübe", sub: "Kesintisiz hizmet", color: "#f59e0b", rgb: "245,158,11" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-4 h-4" }), text: "%100 Basmati", sub: "Himalaya pirinci", color: "#dc2626", rgb: "220,38,38" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }), text: "Her Gün Taze", sub: "Stok yapmıyoruz", color: "#f97316", rgb: "249,115,22" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }), text: "11:00 – 02:00", sub: "Tatil yok, 7/7", color: "#818cf8", rgb: "129,140,248" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }), text: "4.9 · 312 Yorum", sub: "Google doğrulandı", color: "#f59e0b", rgb: "245,158,11" }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative flex items-center gap-3 px-6 sm:px-8 py-4 whitespace-nowrap flex-shrink-0 cursor-default overflow-hidden transition-all duration-200",
          style: { borderRight: i < 4 ? "1px solid rgba(0,0,0,0.06)" : "none" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: { background: `rgba(${item.rgb},0.04)` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative z-10 w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200",
                style: { background: `rgba(${item.rgb},0.1)`, color: item.color },
                children: item.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 text-xs font-black tracking-tight", children: item.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[9px] font-medium mt-0.5", children: item.sub })
            ] })
          ]
        },
        i
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#080808] py-3 overflow-hidden border-y border-brand-900/50 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { background: "linear-gradient(90deg, rgba(220,38,38,0.04) 0%, transparent 50%, rgba(220,38,38,0.04) 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
          style: { background: "linear-gradient(to right, #080808, transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
          style: { background: "linear-gradient(to left, #080808, transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track", children: [...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-ticker-text text-[11px] sm:text-xs font-bold tracking-[0.15em] whitespace-nowrap px-7 uppercase", children: item }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "live-band py-4 sm:py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0 w-3 h-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ping-slow absolute inset-0 rounded-full bg-green-500 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "live-dot relative w-3 h-3 bg-green-400 rounded-full block" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs font-semibold uppercase tracking-widest", children: "Bugün Toplam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num-morph text-white font-black text-xl font-display tabular-nums", children: liveOrders }, liveOrders),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs font-semibold uppercase tracking-widest", children: "sipariş" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap justify-center", children: [
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3 h-3" }), text: "%100 Basmati" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" }), text: "Günlük Taze" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }), text: "11:00 – 02:00" }
      ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-white/60 text-[10px] font-semibold tracking-wide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400", children: p2.icon }),
        p2.text
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:05102225695",
          className: "flex-shrink-0 flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
            "Siz de Sipariş Verin"
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 sm:py-24 overflow-hidden relative bg-[#070707]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)", backgroundSize: "32px 32px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg,transparent,rgba(220,38,38,0.4),transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg,transparent,rgba(220,38,38,0.2),transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.05) 0%, transparent 65%)", filter: "blur(60px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 mb-5 bg-white/5 border border-white/10 rounded-full px-5 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-brand-400 fire-flicker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.35em] uppercase", children: "Online Sipariş Platformları" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-white mb-4 leading-tight", children: [
            "Her Platformdan",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "Ulaşın" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed", children: "Trendyol, Yemeksepeti, Getir — veya doğrudan arayın. Hangi kanaldan gelirse gelsin, aynı taze lezzet." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.trendyol.com/sr?q=pilav+%C3%BCst%C3%BC+a%C5%9Fk&qt=pilav+%C3%BCst%C3%BC+a%C5%9Fk&st=pilav+%C3%BCst%C3%BC+a%C5%9Fk&os=1",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "platform-card-dark group relative rounded-3xl overflow-hidden border border-white/6 bg-white/3 p-6 flex flex-col gap-5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    style: { background: "linear-gradient(135deg, rgba(255,102,0,0.08) 0%, rgba(255,153,0,0.04) 100%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: { background: "linear-gradient(90deg, transparent, #FF6600, transparent)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none",
                    style: { background: "radial-gradient(circle, #FF6600, transparent 70%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-300",
                      style: { background: "linear-gradient(135deg, #FF6600, #FF9900)", boxShadow: "0 8px 32px rgba(255,102,0,0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 40 40", fill: "none", className: "w-9 h-9", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 31 L20 7 L33 31 Z", fill: "white", fillOpacity: "0.95" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 23 L27 23", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-white text-lg leading-tight", children: "Trendyol" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs font-medium mt-0.5", children: "Trendyol Yemek" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-1.5", children: ["Hızlı", "Güvenli", "Kolay"].map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-orange-400/80 bg-orange-400/8 border border-orange-400/15 px-2 py-0.5 rounded-full", children: t2 }, i)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between bg-white/4 group-hover:bg-orange-500 border border-white/8 group-hover:border-orange-400 rounded-2xl px-4 py-3.5 transition-all duration-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-gray-300 group-hover:text-white transition-colors", children: "Trendyol'da Sipariş Ver" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-white/8 group-hover:bg-white/20 flex items-center justify-center transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-orange-400 group-hover:text-white transition-colors" }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.yemeksepeti.com/ankara",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "platform-card-dark group relative rounded-3xl overflow-hidden border border-white/6 bg-white/3 p-6 flex flex-col gap-5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    style: { background: "linear-gradient(135deg, rgba(229,0,35,0.08) 0%, rgba(255,51,51,0.04) 100%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: { background: "linear-gradient(90deg, transparent, #E50023, transparent)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none",
                    style: { background: "radial-gradient(circle, #E50023, transparent 70%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-300",
                      style: { background: "linear-gradient(135deg, #E50023, #FF1F3D)", boxShadow: "0 8px 32px rgba(229,0,35,0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 40 40", fill: "none", className: "w-9 h-9", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 5 C13 5 8 11 8 17 C8 26 20 36 20 36 C20 36 32 26 32 17 C32 11 27 5 20 5Z", fill: "white", fillOpacity: "0.95" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "17", r: "5", fill: "#E50023" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "17", r: "2", fill: "white" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-white text-lg leading-tight", children: "Yemeksepeti" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs font-medium mt-0.5", children: "Yemek Teslimat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-1.5", children: ["30-45 dk", "Kapıya", "Kampanya"].map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-red-400/80 bg-red-400/8 border border-red-400/15 px-2 py-0.5 rounded-full", children: t2 }, i)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between bg-white/4 group-hover:bg-red-600 border border-white/8 group-hover:border-red-500 rounded-2xl px-4 py-3.5 transition-all duration-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-gray-300 group-hover:text-white transition-colors", children: "Yemeksepeti'nde Sipariş Ver" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-white/8 group-hover:bg-white/20 flex items-center justify-center transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-red-400 group-hover:text-white transition-colors" }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://getir.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "platform-card-dark group relative rounded-3xl overflow-hidden border border-white/6 bg-white/3 p-6 flex flex-col gap-5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    style: { background: "linear-gradient(135deg, rgba(90,0,212,0.08) 0%, rgba(130,40,255,0.04) 100%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: { background: "linear-gradient(90deg, transparent, #7B2FFF, transparent)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none",
                    style: { background: "radial-gradient(circle, #7B2FFF, transparent 70%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-300",
                      style: { background: "linear-gradient(135deg, #5A00D4, #7B2FFF)", boxShadow: "0 8px 32px rgba(123,47,255,0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 40 40", fill: "none", className: "w-9 h-9", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9", y: "9", width: "9", height: "22", rx: "2.5", fill: "white", fillOpacity: "0.95" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "15", width: "9", height: "16", rx: "2.5", fill: "white", fillOpacity: "0.7" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "9", width: "9", height: "4", rx: "1.5", fill: "white", fillOpacity: "0.4" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-white text-lg leading-tight", children: "Getir" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs font-medium mt-0.5", children: "Hızlı Teslimat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-1.5", children: ["~10 dk", "Anlık", "Kolay"].map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-purple-400/80 bg-purple-400/8 border border-purple-400/15 px-2 py-0.5 rounded-full", children: t2 }, i)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between bg-white/4 group-hover:bg-purple-600 border border-white/8 group-hover:border-purple-500 rounded-2xl px-4 py-3.5 transition-all duration-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-gray-300 group-hover:text-white transition-colors", children: "Getir'den Sipariş Ver" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-white/8 group-hover:bg-white/20 flex items-center justify-center transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-purple-400 group-hover:text-white transition-colors" }) })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 p-5 bg-white/3 border border-white/6 rounded-3xl backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-500 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-green-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ya da doğrudan ulaşın —" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-black text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-xl hover:shadow-brand-600/35 hover:scale-[1.03] active:scale-95",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                  "0510 222 56 95"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/905102225695?text=Merhaba,%20sipariş%20vermek%20istiyorum.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 bg-[#25d366] hover:bg-[#1fb855] text-white font-black text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-xl hover:shadow-green-600/35 hover:scale-[1.03] active:scale-95",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                  "WhatsApp"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "basmati", className: "py-20 sm:py-32 bg-[#0c0c0c] overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.04] pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.8) 1px, transparent 0)", backgroundSize: "32px 32px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px pointer-events-none",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-64 pointer-events-none",
          style: { background: "radial-gradient(ellipse at 50% 110%, rgba(220,38,38,0.16) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 sm:mb-20 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 mb-5 bg-white/5 border border-white/10 rounded-full px-5 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5 text-brand-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Neden Farklıyız" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5 text-brand-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-white mb-4 leading-tight", children: [
            "Neden",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-500", children: "Basmati?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", viewBox: "0 0 220 8", fill: "none", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 6 Q55 2 110 5 Q165 8 220 4", stroke: "#dc2626", strokeWidth: "2.5", strokeLinecap: "round", fill: "none" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8", children: [
            "Çoğu pilavcı sıradan pirinç kullanır. Biz yıllardır tek bir kararda kararlıyız:",
            " ",
            "sadece ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "premium basmati" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-stretch gap-0 rounded-2xl overflow-hidden border border-white/8 mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-5 sm:px-8 py-4 bg-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2", children: "Sıradan Pirinç" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-gray-700 mb-2", style: { minWidth: 80 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gray-600", style: { width: "35%" } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-xs", children: "Düşük Kalite" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-white/8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-5 sm:px-8 py-4 bg-brand-600/10 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: { background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.15) 0%, transparent 70%)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-2 relative z-10", children: "Basmati Pirinci" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-brand-900 mb-2 relative z-10", style: { minWidth: 80 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-brand-500 basmati-bar-fill" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-xs font-semibold relative z-10", children: "Premium Kalite" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 xl:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] animated-border dish-parallax-wrap", style: { aspectRatio: "4/5" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=900",
                  alt: "Premium basmati pirinci",
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-ray", style: { animationDelay: "2s" } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-6 sm:p-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-brand-500 mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-base sm:text-xl leading-snug", children: '"Dünyada en çok tercih edilen aromalı pirinç"' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-xs sm:text-sm mt-1.5", children: "Himalaya eteklerinden sofralarımıza" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 sm:top-8 sm:-right-7 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-600 text-white rounded-2xl p-4 sm:p-5 shadow-2xl glow-red border border-brand-500/30 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden opacity-40 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "steam-wisp steam-1", style: { position: "absolute", bottom: "10%", left: "15%" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "steam-wisp steam-2", style: { position: "absolute", bottom: "8%", left: "55%" } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-6 sm:w-8 h-6 sm:h-8 mb-2 relative z-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-2xl sm:text-3xl leading-none relative z-10", children: "%100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-200 text-[10px] sm:text-xs mt-1 font-bold tracking-wider relative z-10", children: "SAF BAsMATİ" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-5 -left-5 w-24 h-24 bg-brand-600/8 rounded-3xl -z-10 border border-brand-600/12" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: whyBasmati.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TiltCard,
            {
              intensity: 8,
              className: `reveal reveal-delay-${Math.min(i + 1, 5)} card-peek card-peek-${Math.min(i + 1, 4)} foil-card group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${item.color} ${item.border} p-4 sm:p-5 cursor-default`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    style: { background: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 70%)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-transparent via-current to-transparent ${item.iconColor}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center ${item.iconColor} bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0`, children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/15 font-black text-2xl font-display group-hover:text-white/35 transition-colors leading-none", children: item.num })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-xs sm:text-sm mb-1.5 leading-snug", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-[11px] leading-relaxed mb-3", children: item.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-2.5 py-1`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-1 h-1 rounded-full ${item.iconColor} opacity-80`, style: { background: "currentColor" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500 font-medium", children: item.detail })
                ] })
              ]
            },
            i
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white py-16 sm:py-28 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none opacity-40",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none",
          style: { background: "radial-gradient(ellipse at 0% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none",
          style: { background: "radial-gradient(ellipse at 100% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag inline-flex mb-4 justify-center", children: "Nasıl Çalışıyoruz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl sm:text-4xl xl:text-5xl text-gray-900 mb-3", children: [
            "Siparişten Tabağa",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-600 relative inline-block", children: [
              "4 Adım",
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-1.5 left-0 w-full", viewBox: "0 0 100 6", fill: "none", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 5 Q25 1 50 4 Q75 7 100 3", stroke: "#dc2626", strokeWidth: "2", strokeLinecap: "round", fill: "none", opacity: "0.6" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm max-w-sm mx-auto", children: "Hız ve kaliteyi bir arada sunuyoruz." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-10 left-[12.5%] right-[12.5%] hidden sm:block pointer-events-none", style: { height: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-r from-brand-100 via-brand-400 to-brand-100 opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]",
                style: { animation: "travel-dot 3s linear infinite", left: 0 }
              }
            )
          ] }),
          [
            { step: "01", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }), title: "Siparişinizi Verin", desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-600 font-bold", children: "Telefon" }),
              " veya ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 font-bold", children: "WhatsApp" }),
              " ile 1 dakikada sipariş verin."
            ] }), color: "bg-brand-50", iconBg: "bg-brand-600", accent: "border-brand-100" },
            { step: "02", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5" }), title: "Taze Hazırlanır", desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Her sipariş o gün ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 font-black", children: "taze" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-600 font-black", children: "basmati" }),
              " garantisi ile."
            ] }), color: "bg-orange-50", iconBg: "bg-orange-500", accent: "border-orange-100" },
            { step: "03", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer$1, { className: "w-5 h-5" }), title: "Hızlı Servis", desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Masanıza veya paket olarak ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-sky-600 font-black", children: "10 dakikada" }),
              " hazır."
            ] }), color: "bg-sky-50", iconBg: "bg-sky-600", accent: "border-sky-100" },
            { step: "04", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "w-5 h-5" }), title: "Afiyet Olsun", desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Her lokmada ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-600 font-black", children: "basmati farkını" }),
              " hissedeceksiniz."
            ] }), color: "bg-green-50", iconBg: "bg-green-600", accent: "border-green-100" }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `reveal reveal-delay-${i + 1} card-shine group relative flex flex-col items-center text-center gap-4 p-5 sm:p-6 rounded-2xl border ${s.accent} ${s.color} hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-4 text-5xl font-black text-black/[0.04] font-display select-none leading-none", children: s.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative z-10 w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`, children: [
              s.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 bg-white text-gray-900 text-[8px] font-black rounded-full flex items-center justify-center shadow-md border border-gray-100", children: s.step })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 text-sm mb-1.5", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] leading-relaxed", children: s.desc })
            ] })
          ] }, i))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:05102225695",
            className: "inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-95",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              "Şimdi Sipariş Ver",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 sm:py-28 bg-[#080808] overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.03] pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.25), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/4 left-1/4 w-96 h-96 pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 65%)", filter: "blur(60px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-1/4 right-1/4 w-96 h-96 pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(251,191,36,0.05) 0%, transparent 65%)", filter: "blur(60px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 bg-white/5 border border-white/10 rounded-full px-5 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-brand-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Rakamlarla Pilav Üstü Aşk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-white leading-tight mb-4", children: [
            "Ankara'nın",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "Güvenilir" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", viewBox: "0 0 200 8", fill: "none", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 6 Q50 2 100 5 Q150 8 200 4", stroke: "#dc2626", strokeWidth: "2", strokeLinecap: "round", fill: "none" }) })
            ] }),
            " ",
            "Pilavcısı"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed", children: "5 yılı aşkın deneyim, yüzlerce mutlu müşteri ve hiç değişmeyen basmati kalitesi." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 reveal", children: [
          { num: "5+", unit: "Yıl", label: "Kesintisiz Hizmet", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5" }), color: "text-amber-400", bg: "bg-amber-400/8", border: "border-amber-400/15" },
          { num: "500+", unit: "Kişi", label: "Günlük Müşteri", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }), color: "text-sky-400", bg: "bg-sky-400/8", border: "border-sky-400/15" },
          { num: "4.9", unit: "★", label: "312 Google Yorumu", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }), color: "text-amber-300", bg: "bg-amber-300/8", border: "border-amber-300/15" },
          { num: "02:00", unit: "", label: "Her Gece Açık Kalma", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5" }), color: "text-blue-400", bg: "bg-blue-400/8", border: "border-blue-400/15" }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `card-shine spotlight-card shimmer-sweep glass-depth group relative rounded-2xl border ${s.border} ${s.bg} p-5 sm:p-6 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-300`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center ${s.color} bg-white/5 border border-white/8 group-hover:scale-110 transition-transform duration-300`, children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display font-black text-3xl sm:text-4xl text-white glow-num glow-num-red price-enter-ultra leading-none`, children: s.num }),
              s.unit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-lg sm:text-xl ${s.color}`, children: s.unit })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs mt-1 font-medium", children: s.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity`,
              style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)" }
            }
          )
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-2xl p-[2px]",
                    style: { background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-[14px] bg-[#080808] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-7 h-7 text-white" }) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#080808] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-white rounded-full animate-pulse block" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-lg tracking-tight", children: "@pilavustuaskankara" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-blue-500/15 border border-blue-500/30 rounded-full px-2 py-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-3 h-3 text-blue-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-300 text-[9px] font-bold", children: "Resmi Hesap" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "2.4K" }),
                    " takipçi"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "380+" }),
                    " gönderi"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-rose-400 fill-rose-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 text-xs font-bold", children: "Günlük Paylaşım" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.instagram.com/pilavustuaskankara/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group flex items-center gap-2.5 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 flex-shrink-0",
                style: { background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", boxShadow: "0 8px 32px rgba(240,148,51,0.25)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }),
                  "Instagram'da Takip Et",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: [
            { src: "/MISIRLI.jpg", label: "Mısırlı Pilav", likes: "847", comments: "62", featured: true },
            { src: "/NOHUTLU.jpg", label: "Nohutlu Pilav", likes: "1.2K", comments: "94" },
            { src: "/SOTE.jpg", label: "Tavuk Sote", likes: "2.1K", comments: "138", featured: true },
            { src: "/SPORCU.jpg", label: "Sporcu Pilavı", likes: "963", comments: "71" },
            { src: "/TAVUKLU.jpg", label: "Tavuklu Pilav", likes: "1.5K", comments: "112" }
          ].map((post2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.instagram.com/pilavustuaskankara/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative overflow-hidden rounded-2xl block",
              style: { aspectRatio: i === 0 || i === 2 ? "4/5" : "1/1" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: post2.src,
                    alt: post2.label,
                    loading: "lazy",
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-lg flex items-center justify-center",
                    style: { background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3.5 h-3.5 text-white" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-bold leading-tight mb-2 drop-shadow-lg", children: post2.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 text-rose-400 fill-rose-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[10px] font-bold", children: post2.likes })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3 text-sky-300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[10px] font-bold", children: post2.comments })
                    ] })
                  ] })
                ] }),
                post2.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-amber-400 text-gray-900 rounded-full px-2 py-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-2.5 h-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black", children: "Popüler" })
                ] }) })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-5 rounded-2xl border border-white/8 p-4 flex flex-col sm:flex-row items-center justify-between gap-4",
              style: { background: "linear-gradient(135deg, rgba(240,148,51,0.06) 0%, rgba(188,24,136,0.04) 100%)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["/MISIRLI.jpg", "/NOHUTLU.jpg", "/SOTE.jpg"].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full overflow-hidden border-2 border-[#080808]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" }) }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "2.400+" }),
                    " kişi takip ediyor · Her gün yeni paylaşım"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-amber-400 text-amber-400" }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "En çok beğenilen lezzet hesabı" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mt-6 rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-brand-600/15 border border-brand-600/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-brand-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Neden Bizi Tercih Edin?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs", children: "Ankara'da eşsiz 5 fark" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all hover:shadow-xl hover:shadow-brand-600/30 active:scale-95 w-full sm:w-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                  "Sipariş Ver — 0510 222 56 95"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-5 gap-3", children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }), title: "Ankara'da Tek\nGece Pilavcısı", sub: "Saat 02:00'ye kadar", badge: "TEK", badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-4 h-4" }), title: "%100 Saf\nBasmati Pirinci", sub: "Himalaya kökenli", badge: "PREMIUM", badgeColor: "bg-sky-500/15 text-sky-300 border-sky-500/20" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }), title: "Her Gün\nTaze Hazırlama", sub: "Stok yapmıyoruz", badge: "TAZE", badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }), title: "Toplu Yemek\nUzmanı", sub: "50–1000+ kişi", badge: "UZMAN", badgeColor: "bg-green-500/15 text-green-300 border-green-500/20" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }), title: "Google'da\n4.9 / 5 Puan", sub: "312 müşteri yorumu", badge: "4.9★", badgeColor: "bg-brand-500/15 text-brand-300 border-brand-500/20" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-glow group flex flex-col gap-3 p-4 rounded-2xl border border-white/5 bg-white/3 transition-all cursor-default hover:border-white/12 hover:bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-brand-600/12 border border-brand-600/15 flex items-center justify-center text-brand-400 group-hover:bg-brand-600/20 group-hover:scale-110 transition-all", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-black px-1.5 py-0.5 rounded-md border ${item.badgeColor}`, children: item.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-bold leading-snug whitespace-pre-line", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] mt-1", children: item.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-px w-0 group-hover:w-full transition-all duration-500",
                style: { background: "linear-gradient(90deg, rgba(220,38,38,0.6), transparent)" }
              }
            )
          ] }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-24 sm:py-36 overflow-hidden", style: { background: "#000" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
          alt: "",
          className: "absolute inset-0 w-full h-full object-cover",
          style: { opacity: 0.12 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(220,38,38,0.15) 0%, transparent 65%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.8) 50%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.8) 50%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-ray", style: { animationDelay: "1s" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-ray light-ray-2", style: { animationDelay: "5s" } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmberLayer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 sm:w-24", style: { background: "linear-gradient(to right, transparent, rgba(220,38,38,0.6))" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5 text-amber-300 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 text-[10px] font-black tracking-[0.3em] uppercase", children: "Ankara'da Tek" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-amber-400/60 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400/80 text-[10px] font-bold", children: "Gece 02:00'ye Kadar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 sm:w-24", style: { background: "linear-gradient(to left, transparent, rgba(220,38,38,0.6))" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-block mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display font-black leading-none select-none",
            style: {
              fontSize: "clamp(60px, 10vw, 96px)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(220,38,38,0.5)",
              textShadow: "0 0 40px rgba(220,38,38,0.3)",
              lineHeight: 1
            },
            children: '"'
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-black text-white leading-[1.1] mb-3 tracking-tight",
            style: { fontSize: "clamp(24px, 4.5vw, 54px)" },
            children: [
              "Her tanede aşk,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "her tabakta ustalık." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-black", children: "Ankara'ya basmati pilavı getiren ilk ve tek firma." }),
          " ",
          "Beş yıldır değişmeyen tek bir şey:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "kalite" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-8", style: { maxWidth: 400 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full", viewBox: "0 0 400 6", fill: "none", preserveAspectRatio: "none", style: { height: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 4 Q67 1 133 4 Q200 7 267 3 Q333 0 400 4", stroke: "url(#quoteGrad)", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "quoteGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#991b1b", stopOpacity: "0.3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#dc2626", stopOpacity: "0.9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#991b1b", stopOpacity: "0.3" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: "group btn-primary final-pulse flex items-center gap-2.5 text-sm sm:text-base px-7 sm:px-8 py-3.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 group-hover:rotate-12 transition-transform" }),
                "0510 222 56 95"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                var _a;
                return (_a = document.getElementById("menu")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              className: "btn-outline flex items-center gap-2 text-sm sm:text-base px-7 sm:px-8 py-3.5",
              children: [
                "Menüyü Gör",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-brand-800" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 text-brand-500 fire-flicker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-700 text-[10px] font-bold tracking-[0.25em] uppercase sign-blink", children: "Pilav Üstü Aşk · Ankara Çankaya" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 text-brand-500 fire-flicker", style: { animationDelay: "0.9s" } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-brand-800" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 sm:py-32 bg-[#080808] overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.015) 1px, transparent 0)", backgroundSize: "40px 40px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 60%)", filter: "blur(80px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 mb-5 bg-brand-600/10 border border-brand-600/20 rounded-full px-5 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-brand-400 fire-flicker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Şefin Önerileri" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl text-white leading-tight", children: [
              "Öne Çıkan ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "Lezzetler" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-2 max-w-sm", children: "En çok tercih edilen, şefimizin kalbini çalan seçmeler." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                var _a;
                return (_a = document.getElementById("menu")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              className: "neon-underline-hover flex-shrink-0 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-bold border border-brand-600/20 hover:border-brand-600/40 bg-brand-600/8 hover:bg-brand-600/15 px-5 py-2.5 rounded-full transition-all",
              children: [
                "Tüm Menü",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1 featured-dish-card featured-dish-shine reveal reveal-delay-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { paddingBottom: "110%" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/Sporcu_Pilavi.jpg",
                alt: "Sporcu Pilavı",
                loading: "lazy",
                className: "dish-img absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "premium-ribbon", children: "Şef Seçimi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chefs-pick absolute top-4 left-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-2.5 h-2.5" }),
              "En Çok Satan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-5 sm:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
                [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70 text-[10px] ml-1 font-semibold", children: "5.0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-display font-black text-xl sm:text-2xl leading-tight mb-1", children: "Sporcu Pilavı" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2", children: "300gr basmati + 135gr tiftik tavuk. Günde 50+ porsiyon satılıyor." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-2xl font-display", children: "250" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 font-bold", children: "₺" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:05102225695",
                    className: "btn-glow flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                      "Sipariş Ver"
                    ]
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5 sm:gap-6", children: [
            { img: "/Kori_Soslu_Tavuklu_Pilav.jpg", name: "Köri Soslu Tavuklu Pilav", desc: "Egzotik köri sosuyla buluşan basmati. Damakta iz bırakan lezzet.", price: "210", badge: "Egzotik" },
            { img: "/Tavuklu_Pilav.jpg", name: "Tavuklu Pilav", desc: "250gr basmati + tiftik tavuk. Klasiğin mükemmel versiyonu.", price: "190", badge: "Klasik" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `featured-dish-card featured-dish-shine reveal reveal-delay-${i + 2} flex-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden flex", style: { minHeight: 160 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-36 sm:w-44 flex-shrink-0 overflow-hidden", style: { minHeight: 160 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.img,
                  alt: item.name,
                  loading: "lazy",
                  className: "dish-img absolute inset-0 w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center flex-1 p-4 sm:p-5 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-widest text-brand-400 mb-1.5", children: item.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-sm sm:text-base leading-snug mb-1", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] leading-relaxed mb-3 line-clamp-2", children: item.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black font-display text-lg", children: [
                  item.price,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 font-bold text-sm", children: "₺" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:05102225695",
                    className: "text-brand-400 hover:text-white text-[10px] font-bold border border-brand-600/20 hover:border-brand-500/50 hover:bg-brand-600/20 px-3 py-1.5 rounded-full transition-all active:scale-95",
                    children: "Sipariş"
                  }
                )
              ] })
            ] })
          ] }) }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "featured-dish-card featured-dish-shine reveal reveal-delay-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { paddingBottom: "110%" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/Kavurmali_Pilav.jpg",
                alt: "Kavurmalı Pilav",
                loading: "lazy",
                className: "dish-img absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chefs-pick absolute top-4 left-4", style: { background: "linear-gradient(135deg, #b91c1c, #7f1d1d)", color: "#fca5a5", boxShadow: "0 2px 8px rgba(185,28,28,0.5)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-2.5 h-2.5" }),
              "Premium"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-5 sm:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
                [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70 text-[10px] ml-1 font-semibold", children: "5.0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-display font-black text-xl sm:text-2xl leading-tight mb-1", children: "Kavurmalı Pilav" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2", children: "Kurban dana kavurmasıyla premium buluşma. Eşsiz doku ve lezzet." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-2xl font-display", children: "400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 font-bold", children: "₺" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:05102225695",
                    className: "btn-glow flex items-center gap-2 bg-brand-700/80 hover:bg-brand-600 border border-brand-600/30 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                      "Sipariş Ver"
                    ]
                  }
                )
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          { val: "16", suffix: "+", label: "Çeşit Pilav", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-4 h-4" }), color: "text-amber-400" },
          { val: "130", suffix: "₺", label: "Başlangıç Fiyatı", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4" }), color: "text-green-400" },
          { val: "500", suffix: "+", label: "Günlük Porsiyon", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }), color: "text-sky-400" },
          { val: "02:00", suffix: "", label: "Gece Kapanışı", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }), color: "text-blue-400" }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl p-4 flex items-center gap-3 hover-glow transition-all num-float-card", style: { animationDelay: `${i * 0.5}s` }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center ${s.color} flex-shrink-0`, children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-black text-xl font-display leading-none ${s.color}`, children: [
              s.val,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: s.suffix })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[10px] mt-0.5 font-medium", children: s.label })
          ] })
        ] }, i)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "py-14 sm:py-28 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 sm:mb-14 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag inline-flex mb-4 justify-center", children: "Pilav Üstü Aşk · Lezzetlerimiz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-gray-900 mb-3", children: "Menümüz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm sm:text-base max-w-md mx-auto mb-6", children: "Günlük taze hazırlanan, basmati pirincinin eşsiz lezzetiyle buluşan özel tariflerimiz." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3 mb-6", children: [
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-amber-500" }), text: "5+ Yıl Tecrübe", bg: "bg-amber-50 border-amber-100" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-orange-500" }), text: "Her Gün Taze", bg: "bg-orange-50 border-orange-100" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5 text-green-600" }), text: "%100 Basmati Garantisi", bg: "bg-green-50 border-green-100" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-sky-500" }), text: "Fiyat-Performans No.1", bg: "bg-sky-50 border-sky-100" }
        ].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 text-xs font-semibold text-gray-600 px-3 py-1.5 rounded-full border ${b.bg}`, children: [
          b.icon,
          b.text
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm mx-auto menu-search-glass rounded-full overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Yemek ara...",
              value: menuSearch,
              onChange: (e) => setMenuSearch(e.target.value),
              className: "w-full pl-11 pr-4 py-3 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            }
          ),
          menuSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMenuSearch(""),
              className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "category-tabs-sticky reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-cat-tabs flex gap-2 overflow-x-auto scrollbar-none flex-1 pb-0", children: menuCategories.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setActiveCategory(idx);
              setMenuSearch("");
            },
            className: `flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${activeCategory === idx ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25" : "bg-white text-gray-500 border border-gray-200 hover:border-brand-200 hover:text-brand-600"}`,
            style: { WebkitTapHighlightColor: "transparent" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: cat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: cat.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center ${activeCategory === idx ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`, children: cat.items.length })
            ]
          },
          idx
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex gap-1 ml-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMenuView("grid"), className: `view-toggle-btn ${menuView === "grid" ? "active" : ""}`, "aria-label": "Izgara görünümü", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMenuView("list"), className: `view-toggle-btn ${menuView === "list" ? "active" : ""}`, "aria-label": "Liste görünümü", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" }) })
        ] })
      ] }) }),
      filteredMenuItems.length > 0 ? menuView === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-3 sm:gap-4 mt-6 ${filteredMenuItems.length >= 4 ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-2"}`, children: filteredMenuItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item, onZoom: () => setLightboxItem(item) }, `${activeCategory}-${idx}`)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5 mt-6", children: filteredMenuItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuListCard, { item, onZoom: () => setLightboxItem(item) }, `${activeCategory}-${idx}`)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 text-gray-300 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 font-semibold text-lg", children: "Sonuç bulunamadı" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm mt-1", children: [
          '"',
          menuSearch,
          '" için eşleşen ürün yok.'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMenuSearch(""), className: "mt-4 text-brand-600 text-sm font-semibold hover:underline", children: "Aramayı temizle" })
      ] }),
      filteredMenuItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-gray-400 mt-6", children: "* Fiyatlar değişiklik gösterebilir. Güncel fiyatlar için lütfen arayınız." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white py-14 sm:py-20 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none opacity-30",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.06) 1px, transparent 0)", backgroundSize: "24px 24px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag inline-flex mb-4 justify-center", children: "Sadakat Programı" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-2xl sm:text-4xl text-gray-900 mb-3", children: [
            "Her ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-600", children: "5. tabak" }),
            " senden değil"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-sm sm:text-base max-w-sm mx-auto", children: [
            "Bize düzenli gelenlere teşekkür etme şeklimiz. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-700", children: "5 tabak al, 6. tabak bizden." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-3xl overflow-hidden p-6 sm:p-8 border border-brand-100 shadow-xl shadow-brand-600/5",
            style: { background: "linear-gradient(135deg,#fff7f7 0%,#fff 50%,#fff7f0 100%)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-[120px] text-brand-600 leading-none", children: "PÜA" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-600 text-[10px] font-black tracking-[0.3em] uppercase mb-1", children: "Pilav Üstü Aşk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl text-gray-900", children: "Lezzet Kartın" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/PILAV_USTU_LOGO.png", alt: "logo", className: "w-full h-full object-contain" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-3 sm:gap-4 mb-6", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-2xl flex flex-col items-center justify-center border-2 transition-all ${i < 4 ? "border-brand-200 bg-brand-50 shadow-sm" : "border-dashed border-brand-300 bg-white"}`, children: i < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center shadow-md shadow-brand-600/30 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-4 h-4 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-brand-600 text-[9px] font-black", children: [
                    i + 1,
                    ". tabak"
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl border-2 border-dashed border-brand-300 flex items-center justify-center mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-brand-300" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-[9px] font-medium", children: "5. tabak" })
                ] }) }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-2xl p-4 mb-5", style: { background: "linear-gradient(135deg,rgba(220,38,38,0.06),rgba(220,38,38,0.02))", border: "1.5px dashed rgba(220,38,38,0.25)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-600/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-gray-900 text-sm", children: [
                      "6. Tabak ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-600", children: "Ücretsiz!" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs mt-0.5", children: "Kasaya kartını göster, ikramın hazır." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-600 font-black text-2xl font-display", children: "🎉" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center sm:justify-start", children: [
                  "Kasadan ücretsiz al",
                  "Her tabakta damgat",
                  "5 damga → bedava tabak",
                  "Devredilebilir değil"
                ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-black flex items-center justify-center flex-shrink-0", children: i + 1 }),
                  step
                ] }, i)) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-8 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: "inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-black text-sm px-8 py-3.5 rounded-2xl transition-all hover:shadow-xl hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-95",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                "Kartımı almaya geliyorum!"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-3", children: "Kart kasadan ücretsiz alınır • Her gün 11:00–02:00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "toplu-yemek", className: "py-20 sm:py-32 bg-[#0c0c0c] overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.04] pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.8) 1px, transparent 0)", backgroundSize: "32px 32px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px pointer-events-none",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-px pointer-events-none",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.25), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none",
          style: { background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.09) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 sm:mb-20 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 mb-5 bg-white/5 border border-white/10 rounded-full px-5 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { className: "w-3.5 h-3.5 text-brand-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase", children: "Toplu Yemek Hizmeti" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { className: "w-3.5 h-3.5 text-brand-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-white mb-4 leading-tight", children: [
            "Her Organizasyon için",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-500", children: "Toplu Yemek" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", viewBox: "0 0 320 8", fill: "none", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 6 Q80 2 160 5 Q240 8 320 4", stroke: "#dc2626", strokeWidth: "2.5", strokeLinecap: "round", fill: "none" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed", children: [
            "Küçük toplantıdan yüzlerce kişilik organizasyona kadar;",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "%100 basmati pirinci" }),
            " ile",
            " ",
            "günlük ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "taze" }),
            " ve",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-black", children: "zamanında teslim" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4 mt-8", children: [
            { val: "10+", lbl: "Kategori" },
            { val: "50+", lbl: "Min. Kişi" },
            { val: "100%", lbl: "Basmati" },
            { val: "7/24", lbl: "İletişim" }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-5 py-3 rounded-2xl bg-white/4 border border-white/8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-xl font-display", children: s.val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-[10px] uppercase tracking-widest mt-0.5", children: s.lbl })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-14 sm:mb-20 space-y-2 reveal", children: topluYemekCategories.map((cat, i) => {
          const isExpanded = expandedToplu === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? `${cat.border} bg-gradient-to-br ${cat.color}` : "border-white/6 bg-white/3 hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: "w-full flex items-center gap-4 px-5 py-4 text-left",
                    style: { WebkitTapHighlightColor: "transparent" },
                    onClick: () => setExpandedToplu(isExpanded ? null : i),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl ${cat.iconBg} border ${cat.border} flex items-center justify-center ${cat.iconColor} flex-shrink-0 transition-transform duration-300 ${isExpanded ? "scale-110" : ""}`, children: cat.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20 font-black text-xs font-display", children: cat.num }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-sm sm:text-base leading-tight", children: cat.short })
                        ] }),
                        !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] mt-0.5 truncate", children: cat.desc })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""} ${cat.iconColor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }) })
                    ]
                  }
                ),
                isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/8 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm leading-relaxed mb-4", children: cat.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => openTopluModal(cat),
                        className: "btn-primary flex items-center justify-center gap-2 text-sm py-3 px-6",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
                          "Teklif İste"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "tel:05102225695",
                        className: "btn-outline flex items-center justify-center gap-2 text-sm py-3 px-6",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                          "Hemen Ara"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `https://wa.me/905102225695?text=Merhaba,%20${encodeURIComponent(cat.short)}%20için%20toplu%20yemek%20teklifi%20almak%20istiyorum.`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-outline flex items-center justify-center gap-2 text-sm py-3 px-6",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                          "WhatsApp"
                        ]
                      }
                    )
                  ] })
                ] }) })
              ]
            },
            i
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-white/8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-900/40 via-[#0f0f0f] to-[#0f0f0f]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.06) 1px, transparent 0)", backgroundSize: "24px 24px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 w-64 h-64 pointer-events-none",
              style: { background: "radial-gradient(ellipse at 0% 0%, rgba(220,38,38,0.15) 0%, transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 xl:p-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-center sm:justify-start mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase", children: "10 Organizasyon Kategorisi" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-2xl sm:text-3xl xl:text-4xl text-white leading-tight mb-2", children: "Hızlı Teklif Alın" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed max-w-md", children: "Kategori seçin, kişi sayısını belirtin — anında iletişime geçelim." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4 justify-center sm:justify-start", children: ["Min. 50 Kişi", "Günlük Taze", "Zamanında Teslimat", "%100 Basmati"].map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-3 py-1 text-[10px] text-gray-400 font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-2.5 h-2.5 text-brand-500" }),
                tag
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => openTopluModal(topluYemekCategories[0]),
                  className: "group btn-primary float-pulse flex items-center justify-center gap-2 whitespace-nowrap text-base px-8 py-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                    "Teklif Formu"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:05102225695",
                  className: "group btn-outline flex items-center justify-center gap-2 whitespace-nowrap",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                    "0510 222 56 95"
                  ]
                }
              )
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    lightboxItem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[300] flex items-center justify-center p-4", onClick: () => setLightboxItem(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/90 backdrop-blur-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-lg lightbox-img", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { paddingBottom: "65%" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: lightboxItem.img,
                alt: lightboxItem.name,
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
            lightboxItem.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex items-center gap-1.5 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 fire-flicker" }),
              "En Çok Tercih Edilen"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-black text-xl leading-tight", children: lightboxItem.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-brand-600 text-white font-black text-lg font-display px-4 py-2 rounded-xl shadow-lg", children: [
                lightboxItem.price,
                " ₺"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm leading-relaxed mb-5", children: lightboxItem.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    addToCart(lightboxItem);
                    setLightboxItem(null);
                    setCartOpen(true);
                  },
                  className: "flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-3",
                  style: { WebkitTapHighlightColor: "transparent" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                    "Sepete Ekle"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://wa.me/905102225695?text=${encodeURIComponent(`Merhaba! ${lightboxItem.name} (${lightboxItem.price}₺) sipariş vermek istiyorum.`)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 flex items-center justify-center gap-2 text-sm py-3 rounded-2xl font-bold text-white transition-all active:scale-95",
                  style: { background: "linear-gradient(135deg,#16a34a,#15803d)", WebkitTapHighlightColor: "transparent" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    "WA Sipariş"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setLightboxItem(null),
            className: "absolute -top-3 -right-3 w-10 h-10 bg-gray-800 border border-white/15 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    topluModal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: () => setTopluModal(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:max-w-lg bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl z-10 overflow-hidden modal-enter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 inset-x-0 h-px",
            style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.7), transparent)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-1 sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-1 rounded-full bg-white/20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-1", children: "Toplu Yemek Teklifi" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-display font-black text-xl sm:text-2xl", children: selectedTopluCat == null ? void 0 : selectedTopluCat.short })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setTopluModal(false),
                className: "p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          formSent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-8 h-8 text-green-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-bold text-lg mb-2", children: "Talebiniz Alındı!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed max-w-xs", children: "En kısa sürede sizi arayacağız. Acil için hemen arayabilirsiniz." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "mt-5 btn-primary flex items-center gap-2 text-sm px-6 py-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                  "0510 222 56 95"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 overflow-y-auto", style: { maxHeight: "70vh" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold block mb-1.5", children: "Ad Soyad *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: topluName,
                    onChange: (e) => setTopluName(e.target.value),
                    placeholder: "Ahmet Yılmaz",
                    className: "w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all",
                    style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold block mb-1.5", children: "Telefon *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    value: topluPhone,
                    onChange: (e) => setTopluPhone(e.target.value),
                    placeholder: "05XX XXX XX XX",
                    className: "w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all",
                    style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold block mb-1.5", children: "Etkinlik Tarihi" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  value: topluDate,
                  onChange: (e) => setTopluDate(e.target.value),
                  className: "w-full px-3.5 py-2.5 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all",
                  style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", colorScheme: "dark" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold", children: "Kişi Sayısı" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-base font-display tabular-nums", children: [
                  personCount,
                  " kişi"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: 50,
                  max: 1e3,
                  step: 25,
                  value: personCount,
                  onChange: (e) => setPersonCount(Number(e.target.value)),
                  className: "w-full accent-brand-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-700 text-[10px] mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "250" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "750" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1000" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold block mb-2", children: "Organizasyon Türü" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1 scrollbar-none", children: topluYemekCategories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setSelectedTopluCat(c),
                  style: { WebkitTapHighlightColor: "transparent" },
                  className: `flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all text-xs font-medium ${(selectedTopluCat == null ? void 0 : selectedTopluCat.num) === c.num ? `${c.border} ${c.iconColor} bg-gradient-to-br ${c.color}` : "border-white/8 text-gray-500 bg-white/3 hover:bg-white/6"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-shrink-0 ${(selectedTopluCat == null ? void 0 : selectedTopluCat.num) === c.num ? c.iconColor : "text-gray-600"}`, children: c.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate leading-tight", children: c.short })
                  ]
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-400 text-xs font-semibold block mb-1.5", children: "Ek Not (isteğe bağlı)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: topluNote,
                  onChange: (e) => setTopluNote(e.target.value),
                  rows: 2,
                  placeholder: "Özel diyet, teslimat adresi, menü tercihi...",
                  className: "w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all resize-none",
                  style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: submitTopluForm,
                  disabled: topluSending || !topluName.trim() || topluPhone.trim().length < 10,
                  className: "flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-3 disabled:opacity-40 disabled:cursor-not-allowed",
                  style: { WebkitTapHighlightColor: "transparent" },
                  children: [
                    topluSending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    topluSending ? "Gönderiliyor..." : "WhatsApp Teklif Al"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:05102225695",
                  className: "btn-outline flex items-center justify-center gap-2 text-sm py-3 px-5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                    "Ara"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-[10px] text-center", children: "* zorunlu alan. Bilgileriniz yalnızca teklif için kullanılır." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-14 sm:py-32 bg-white overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 right-0 w-[55%] h-full bg-gray-50 -z-10",
          style: { clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 right-0 w-[55%] h-1 bg-gradient-to-r from-transparent to-brand-100 -z-10",
          style: { clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none opacity-30",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.08) 1px, transparent 0)", backgroundSize: "28px 28px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 xl:gap-20 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-brand-600/8 border border-brand-600/15 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-700 text-[11px] font-bold tracking-[0.25em] uppercase", children: "Hikayemiz" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-gray-900 leading-tight mb-6", children: [
            "Ankara'nın",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block text-brand-600", children: [
              "Gece",
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-1.5 left-0 w-full", viewBox: "0 0 120 8", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 6 Q30 2 60 5 Q90 8 120 4", stroke: "#dc2626", strokeWidth: "2.5", strokeLinecap: "round", fill: "none", opacity: "0.6" }) })
            ] }),
            " ",
            "Pilavcısı"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-black", children: "Pilav Üstü Aşk" }),
              ", Ankara Çankaya'nın kalbinde",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-800 font-bold", children: "Azerbaycan Caddesi" }),
              "'nde bir tutkuyla açıldı.",
              " ",
              "Ankara'ya ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-600 font-black", children: "basmati pilavın" }),
              " ne olduğunu gösterme misyonuyla."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-600 font-black", children: "Ankara'da tek" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-black", children: "gece 02:00'ye kadar" }),
              " açık pilavcı olarak;",
              " ",
              "gece çalışanların, gece kuşlarının ve geç saatte",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-800 font-bold", children: "kaliteli yemek" }),
              " arayanların ilk adresi olduk."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-600 font-black", children: "%100 basmati pirinci" }),
              ",",
              " ",
              "günlük ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 font-black", children: "taze" }),
              " hazırlanan malzemeler ve yılların verdiği",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-bold", children: "ustalık" }),
              ". Her gün sabah",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-bold", children: "11:00" }),
              "'den gece",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-bold", children: "02:00" }),
              "'ye kadar açığız."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl px-5 py-4 mb-8 border border-gray-100 shadow-sm bg-[#0c0c0c] w-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-amber-300 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm", children: "Ankara'da Tek Gece Pilavcısı" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs", children: "Her gün 11:00 – 02:00 · Tatil yok" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 ml-auto pl-4 border-l border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-2 h-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ring-pulse absolute inset-0 rounded-full bg-green-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-2 h-2 bg-green-500 rounded-full block animate-pulse" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-xs font-bold whitespace-nowrap", children: "Açık" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }), val: "5+", lbl: "Yıl", accent: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }), val: "500+", lbl: "Günlük", accent: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
            { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }), val: "02:00", lbl: "Kapanış", accent: "text-brand-600", bg: "bg-brand-50", border: "border-brand-100" }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group text-center p-4 sm:p-5 rounded-2xl ${s.bg} border ${s.border} hover:shadow-lg transition-all duration-300 cursor-default hover:-translate-y-1`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex justify-center mb-2 p-1.5 rounded-xl bg-white w-fit mx-auto shadow-sm ${s.accent}`, children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-black text-lg sm:text-2xl ${s.accent} font-display`, children: s.val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-gray-500 mt-0.5 font-medium", children: s.lbl })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-2 order-1 lg:order-2 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -left-2 sm:-left-6 z-20 award-float badge-float", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-400 text-gray-900 rounded-2xl p-3.5 shadow-xl shadow-amber-400/40 border-2 border-amber-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[8px] font-black mt-1.5 uppercase tracking-wide text-center leading-tight", children: [
              "Ankara'nın",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "1 Numarası"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 -right-2 sm:-right-4 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-100 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-[#4285F4] flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[9px] font-semibold", children: "4.9 · 312 Yorum" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", style: { height: 400 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 rounded-2xl overflow-hidden shadow-2xl relative group", style: { height: 255 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/WhatsApp_Image_2024-12-26_at_00.10.41.jpeg",
                  alt: "Pilav Üstü Aşk",
                  className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-end justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm leading-tight", children: "Pilav Üstü Aşk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Azerbaycan Cad. 59/A · Çankaya" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-green-500 text-white text-[9px] font-black px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse" }),
                  "Açık"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden shadow-lg group", style: { height: 133 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/kori.jpeg",
                alt: "Mutfak",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden shadow-lg group relative", style: { height: 133 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/pilavsiyah.jpg",
                  alt: "Yemek",
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm", children: "Her Gün Taze" }) })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-14 sm:py-24 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none opacity-20",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 sm:mb-14 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag inline-flex mb-4 justify-center", children: "Galeri" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl text-gray-900 mb-3", children: "Lezzetin Fotoğrafı" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm max-w-md mx-auto", children: "Tabaktan sofraya, mutfaktan misafirimize — anlara bir bakış." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gallery-scroll-mobile sm:hidden reveal", children: galleryImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "gallery-item-ultra relative group cursor-zoom-in rounded-2xl overflow-hidden flex-shrink-0",
            style: { height: 200 },
            onClick: () => setLightboxItem({ name: img.caption, desc: "", price: "", popular: false, img: img.src }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.src,
                  alt: img.caption,
                  loading: "lazy",
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gallery-overlay-ultra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-xs drop-shadow-lg", children: img.caption }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-4 h-4 text-white/80" })
              ] }) }),
              img.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[9px] font-black text-white",
                  style: { background: "linear-gradient(135deg, #dc2626, #b91c1c)", boxShadow: "0 2px 8px rgba(220,38,38,0.45)" },
                  children: img.badge
                }
              )
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:grid grid-cols-4 gap-3 auto-rows-[200px] reveal", children: galleryImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `gallery-item-ultra cinematic-hover relative group cursor-zoom-in rounded-xl overflow-hidden ${i === 0 ? "row-span-2 col-span-2" : i === 3 ? "col-span-2" : ""}`,
            onClick: () => setLightboxItem({ name: img.caption, desc: "", price: "", popular: false, img: img.src }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.src,
                  alt: img.caption,
                  loading: "lazy",
                  className: "w-full h-full object-cover transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gallery-overlay-ultra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-xs drop-shadow-lg", children: img.caption }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-4 h-4 text-white/80 drop-shadow-lg" })
              ] }) }),
              img.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[9px] font-black text-white",
                  style: { background: "linear-gradient(135deg, #dc2626, #b91c1c)", boxShadow: "0 2px 8px rgba(220,38,38,0.45)" },
                  children: img.badge
                }
              )
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-14 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.04) 1px, transparent 0)", backgroundSize: "28px 28px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(74,222,128,0.06) 0%, transparent 65%)", filter: "blur(60px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "numara-bir-chip mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🏆" }),
            "Sektörde 5+ Yıldır 1 Numara"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h2",
            {
              className: "font-display font-black text-gray-900 leading-tight mb-4",
              style: { fontSize: "clamp(28px,5vw,52px)" },
              children: [
                "Ankara'nın",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-600", children: "Yerli Markası" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Sektörde",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-shimmer", children: "1 Numara" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-1.5 left-0 w-full", viewBox: "0 0 180 8", fill: "none", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 6 Q45 2 90 5 Q135 8 180 4", stroke: "#f59e0b", strokeWidth: "2.5", strokeLinecap: "round", fill: "none" }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-lg", children: [
            "2019'dan bu yana Ankara Çankaya'nın kalbinde, yerli tohumdan büyüyen bir lezzet hikayesi yazıyoruz. Rakip tanımayan basmati kalitemiz ve",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 font-black", children: "misafirperver ruhumuzla" }),
            " sektörde zirvedeyiz."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
            { val: "5+", lbl: "Yıl Liderlik", icon: "🥇", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
            { val: "500+", lbl: "Günlük Sipariş", icon: "📦", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200" },
            { val: "312", lbl: "Google Yorum", icon: "⭐", color: "text-brand-600", bg: "bg-brand-50", border: "border-brand-200" },
            { val: "10+", lbl: "Ödül & Onay", icon: "🏅", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 p-3 sm:p-4 rounded-2xl ${s.bg} border ${s.border}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-black text-xl font-display ${s.color}`, children: s.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] font-medium", children: s.lbl })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-delay-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "cay-ikram-card relative rounded-3xl overflow-hidden",
            style: { background: "linear-gradient(135deg, #0a1a0a 0%, #0f2010 50%, #0a1a0a 100%)", border: "1px solid rgba(74,222,128,0.2)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: { background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(74,222,128,0.08) 0%, transparent 70%)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tea-steam-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tea-steam-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tea-steam-3" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-7 sm:p-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 tea-cup-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🍵" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-[9px] font-black tracking-[0.3em] uppercase", children: "Pilav Üstü Aşk Geleneği" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-black text-white text-2xl sm:text-3xl leading-tight mb-3", children: [
                  "Her Siparişe",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "Ücretsiz Çay" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm leading-relaxed mb-6", children: [
                  "Türk misafirperverliği sofrada bitmez. Pilav üstündeki her lezzetli tabağa",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "sıcak çay ikramımız" }),
                  " eşlik eder. Bu bir gelenek, bu bir söz."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                  { icon: "🫖", title: "Demlik", sub: "Taze demleme" },
                  { icon: "♨️", title: "Sıcak", sub: "Her zaman" },
                  { icon: "🎁", title: "Ücretsiz", sub: "Her siparişe" }
                ].map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center p-3 rounded-xl bg-white/3 border border-white/6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mb-1", children: t2.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[11px] font-black", children: t2.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-[9px]", children: t2.sub })
                ] }, i)) })
              ] })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-14 sm:py-24 bg-gray-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.2), transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 sm:mb-14 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag inline-flex mb-4 justify-center", children: "Merak Edilenler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl text-gray-900 mb-3", children: "Sık Sorulan Sorular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm max-w-md mx-auto", children: "Aklınızdaki soruların cevapları burada — bulamazsanız hemen arayın." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 reveal", children: faqItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { item, index: i }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl border border-gray-100 p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-bold text-sm", children: "Başka sorunuz mu var?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-0.5", children: "Telefonla veya WhatsApp ile bize ulaşın." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "flex items-center gap-1.5 bg-brand-600 text-white text-sm font-bold px-4 py-2.5 rounded-full hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                  "Ara"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/905102225695",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1.5 bg-[#25d366] text-white text-sm font-bold px-4 py-2.5 rounded-full hover:bg-[#1fb855] transition-all hover:shadow-lg hover:shadow-green-600/30 active:scale-95",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                  "WhatsApp"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: { background: "#030303" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/pilav1.jpg",
            alt: "Pilav Üstü Aşk atmosfer",
            className: "w-full h-full object-cover",
            style: { filter: "brightness(0.22) saturate(0.6)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "linear-gradient(to bottom, #030303 0%, rgba(3,3,3,0.15) 30%, rgba(3,3,3,0.15) 70%, #030303 100%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, rgba(3,3,3,0.6) 100%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(220,38,38,0.06) 0%, transparent 70%)" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent 10%, rgba(220,38,38,0.4) 50%, transparent 90%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent 10%, rgba(220,38,38,0.2) 50%, transparent 90%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-24 sm:py-40 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-8 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16", style: { background: "linear-gradient(to right, transparent, rgba(220,38,38,0.6))" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-[10px] font-bold tracking-[0.45em] uppercase", children: "Deneyim" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16", style: { background: "linear-gradient(to left, transparent, rgba(220,38,38,0.6))" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black leading-[0.9] tracking-tight mb-8 reveal", style: { animationDelay: "0.1s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white/80 text-3xl sm:text-5xl xl:text-6xl mb-2", children: "Gece yarısı," }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "block text-4xl sm:text-6xl xl:text-[5.5rem]",
              style: { background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 50%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
              children: "açsın,"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-4xl sm:text-6xl xl:text-[5.5rem] shimmer-text", children: "gelsin." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12 reveal", style: { animationDelay: "0.2s" }, children: "Saat fark etmez. Sıcak pilav, tane tane basmati ve Ankara'nın en uzun gece menüsü — sabah 02:00'ye kadar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3 mb-14 reveal", style: { animationDelay: "0.25s" }, children: [
          { label: "Sabah 02:00'ye Kadar", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5" }) },
          { label: "%100 Basmati Pirinci", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5" }) },
          { label: "Her Gün Taze Pişirilir", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }) },
          { label: "Google 4.9 Puan", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }) }
        ].map((f2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 transition-all hover:text-white",
            style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400", children: f2.icon }),
              f2.label
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 reveal", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+905102225695",
              className: "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-sm tracking-wide transition-all hover:scale-105 active:scale-95",
              style: { background: "linear-gradient(135deg, #dc2626, #b91c1c)", boxShadow: "0 0 40px rgba(220,38,38,0.35), 0 4px 20px rgba(0,0,0,0.4)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                "Hemen Ara: 0510 222 56 95"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/905102225695",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white/80 hover:text-white text-sm tracking-wide transition-all hover:scale-105 active:scale-95",
              style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                "WhatsApp ile Sipariş"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "relative overflow-hidden", style: { background: "#030303" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.03]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.015] pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)", backgroundSize: "44px 44px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-40 left-1/4 w-[700px] h-[500px] pointer-events-none morph-blob",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 70%)", filter: "blur(80px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -bottom-20 right-0 w-[500px] h-[400px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)", filter: "blur(60px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-top-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 relative z-10 py-16 sm:py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-16 sm:mb-20 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full",
                style: { background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-3 h-3 text-red-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-[9px] font-black tracking-[0.35em] uppercase", children: "Müşteri Yorumları" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "ultra-headline font-display font-black leading-[0.9] text-white tracking-tight",
                style: { fontSize: "clamp(36px,7vw,88px)" },
                children: [
                  "Ankara",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liquid-text", children: "Konuşuyor" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 text-sm mt-5 max-w-xs leading-relaxed", children: [
              "Binlerce pilav, yüzlerce mutlu müşteri — Google'da ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "doğrulanmış 312" }),
              " gerçek değerlendirme."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-shrink-0 self-start sm:self-auto ultra-card corner-accent breathe-border relative rounded-3xl p-5 overflow-hidden",
              style: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", minWidth: 200 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.04]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 w-24 h-24 pointer-events-none",
                    style: { background: "radial-gradient(ellipse, rgba(251,191,36,0.12), transparent)", filter: "blur(20px)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-display font-black text-5xl text-white leading-none",
                        style: { textShadow: "0 0 30px rgba(251,191,36,0.4)" },
                        children: "4.9"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mt-2 justify-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-14 bg-white/8" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: "312" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs", children: "Google Yorumu" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full flex-1", style: { background: "linear-gradient(90deg, #fbbf24, #f59e0b)", width: 60 } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-gray-500 whitespace-nowrap", children: "92% 5★" })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap mb-8 reveal", children: [
          { key: "all", label: "Tümü" },
          { key: "gece", label: "🌙 Gece Deneyimi" },
          { key: "kalite", label: "⭐ Kalite" },
          { key: "fiyat", label: "💰 Fiyat-Performans" }
        ].map((f2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setTFilter(f2.key);
              setTIdx(0);
            },
            className: `px-4 py-1.5 rounded-full text-xs font-bold border transition-all active:scale-95 ${tFilter === f2.key ? "bg-white text-gray-900 border-white/20 shadow-sm" : "bg-white/5 text-gray-500 border-white/10 hover:border-white/25 hover:text-gray-300"}`,
            style: { WebkitTapHighlightColor: "transparent" },
            children: f2.label
          },
          f2.key
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative mb-5 rounded-3xl overflow-hidden reveal holo-card aurora-flicker noise-shimmer",
            style: {
              background: "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(220,38,38,0.05) 100%)",
              border: "1px solid rgba(220,38,38,0.2)",
              boxShadow: "0 0 100px rgba(220,38,38,0.08), inset 0 1px 0 rgba(255,255,255,0.06)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.03]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -top-6 left-4 sm:left-10 font-display font-black leading-none select-none pointer-events-none",
                  style: { fontSize: "clamp(120px,18vw,200px)", color: "rgba(220,38,38,0.06)", lineHeight: 1 },
                  children: '"'
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -bottom-10 right-4 sm:right-10 font-display font-black leading-none select-none pointer-events-none rotate-180",
                  style: { fontSize: "clamp(100px,14vw,160px)", color: "rgba(220,38,38,0.04)", lineHeight: 1 },
                  children: '"'
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 right-0 w-64 h-64 pointer-events-none",
                  style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.08), transparent)", filter: "blur(40px)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-7 sm:p-12 lg:p-16", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-amber-400 text-amber-400", style: { filter: "drop-shadow(0 0 4px rgba(251,191,36,0.5))" } }, j)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display font-bold leading-relaxed text-white mb-8 max-w-3xl",
                    style: { fontSize: "clamp(18px,2.5vw,30px)", fontStyle: "italic" },
                    children: [
                      '"',
                      filteredTestimonials[0].text,
                      '"'
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0",
                        style: { background: "linear-gradient(135deg, #dc2626, #7f1d1d)", border: "2px solid rgba(220,38,38,0.4)", boxShadow: "0 8px 24px rgba(220,38,38,0.3)" },
                        children: filteredTestimonials[0].name[0]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-base", children: filteredTestimonials[0].name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: filteredTestimonials[0].role }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "flex items-center gap-1 text-[8px] text-green-400 font-black px-2 py-0.5 rounded-full",
                            style: { background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-2.5 h-2.5" }),
                              "DOĞRULANMIŞ"
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2.5 rounded-2xl px-4 py-3 self-start sm:self-auto",
                      style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-[#4285F4]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-[9px]", children: "Google Yorumu" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "rgba(255,255,255,0.06)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/20 text-[9px] font-semibold tracking-widest uppercase flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3 h-3" }),
              " Kaydır ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: { background: "rgba(255,255,255,0.06)" } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden",
              onTouchStart: (e) => {
                touchStartX.current = e.touches[0].clientX;
              },
              onTouchEnd: (e) => {
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                if (dx < -45) nextT();
                else if (dx > 45) prevT();
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-testimonial-card mobile-swipe-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [...Array(filteredTestimonials[Math.min(tIdx, Math.max(filteredTestimonials.length - 1, 0))].rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, j)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[9px] font-black text-green-400 flex items-center gap-0.5 bg-green-900/20 px-2 py-0.5 rounded-full border border-green-800/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-2.5 h-2.5" }),
                    "DOĞRULANMIŞ"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/85 text-[14px] leading-[1.7] mb-5 relative z-10 font-medium", children: [
                  '"',
                  filteredTestimonials[Math.min(tIdx, Math.max(filteredTestimonials.length - 1, 0))].text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 relative z-10", style: { borderTop: "1px solid rgba(255,255,255,0.07)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-base flex-shrink-0",
                      style: { background: "linear-gradient(135deg, #dc2626, #7f1d1d)", border: "1.5px solid rgba(220,38,38,0.35)", boxShadow: "0 4px 12px rgba(220,38,38,0.25)" },
                      children: filteredTestimonials[Math.min(tIdx, Math.max(filteredTestimonials.length - 1, 0))].name[0]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-sm leading-tight", children: filteredTestimonials[Math.min(tIdx, Math.max(filteredTestimonials.length - 1, 0))].name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[11px] mt-0.5", children: filteredTestimonials[Math.min(tIdx, Math.max(filteredTestimonials.length - 1, 0))].role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center gap-1 rounded-xl px-2.5 py-1.5", style: { background: "rgba(66,133,244,0.08)", border: "1px solid rgba(66,133,244,0.15)" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 text-[#4285F4]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-[#4285F4]", children: "Google" })
                  ] })
                ] })
              ] }, tIdx)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: prevT,
                className: "p-3 rounded-2xl transition-all active:scale-90",
                style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", WebkitTapHighlightColor: "transparent" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 text-gray-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: filteredTestimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setTIdx(i),
                style: { WebkitTapHighlightColor: "transparent" },
                className: `rounded-full transition-all duration-300 ${i === tIdx ? "w-7 h-2 bg-brand-600 shadow-[0_0_10px_rgba(220,38,38,0.6)]" : "w-2 h-2 bg-gray-700"}`
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: nextT,
                className: "p-3 rounded-2xl transition-all active:scale-90",
                style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", WebkitTapHighlightColor: "transparent" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-0.5 rounded-full overflow-hidden", style: { background: "rgba(255,255,255,0.06)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-brand-600 rounded-full transition-all duration-500",
              style: { width: `${(tIdx + 1) / testimonials.length * 100}%`, boxShadow: "0 0 8px rgba(220,38,38,0.5)" }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4", children: filteredTestimonials.slice(1).map((t2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `testimonial-card-ultra group flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)} ${i === 0 || i === 3 ? "lg:col-span-3" : "lg:col-span-2"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-px",
                  style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)", opacity: 0, transition: "opacity 0.3s" },
                  ref: (el2) => {
                    var _a, _b;
                    if (el2) (_a = el2.closest(".group")) == null ? void 0 : _a.addEventListener("mouseenter", () => {
                      el2.style.opacity = "1";
                    });
                    (_b = el2 == null ? void 0 : el2.closest(".group")) == null ? void 0 : _b.addEventListener("mouseleave", () => {
                      if (el2) el2.style.opacity = "0";
                    });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 right-3 font-display font-black text-7xl leading-none select-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors", children: '"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4", children: [...Array(t2.rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }, j)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 text-sm leading-[1.75] mb-5 flex-1 relative z-10 group-hover:text-gray-200 transition-colors", children: [
                '"',
                t2.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-white/[0.07]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform",
                    style: { background: "linear-gradient(135deg, #dc2626, #7f1d1d)", border: "1.5px solid rgba(220,38,38,0.3)" },
                    children: t2.name[0]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-xs tracking-wide", children: t2.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-[10px] mt-0.5", children: t2.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[9px] text-green-400 font-bold bg-green-900/20 px-1.5 py-0.5 rounded-full border border-green-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { className: "w-2 h-2" }) })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12 sm:mt-16 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://maps.google.com/?q=Pilav+Üstü+Aşk+Ankara",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2.5 text-gray-400 hover:text-white text-sm font-semibold transition-all duration-300 border border-white/10 hover:border-brand-600/40 px-7 py-3.5 rounded-full bg-white/4 hover:bg-brand-900/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }),
              "Google'da tüm 312 yorumu gör",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden", style: { background: "#fafafa" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none opacity-30",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 inset-x-0 h-px",
          style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.2), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 sm:mb-16 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full",
              style: { background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 text-[9px] font-black tracking-[0.35em] uppercase", children: "Pilav Üstü Aşk · Bize Ulaşın" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ultra-headline font-display font-black section-headline-mobile sm:text-5xl xl:text-6xl text-gray-900 leading-tight", children: "İletişim & Konum" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm mt-4 max-w-md mx-auto leading-relaxed", children: [
            "Sipariş, toplu yemek veya sorularınız için ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-600", children: "Pilav Üstü Aşk" }),
            "'a ulaşın."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-4 sm:gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-3 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group relative p-5 sm:p-6 rounded-3xl overflow-hidden cursor-default transition-all duration-300",
                style: { background: "white", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      style: { background: "linear-gradient(135deg, rgba(220,38,38,0.03), transparent)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                          style: { background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.12)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-red-600" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-gray-400 uppercase tracking-[0.25em]", children: "Adres" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 text-sm leading-relaxed font-semibold", children: [
                      "Bahçelievler Mah.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Azerbaycan Cad. 59/A",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Çankaya / Ankara"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "https://maps.google.com/?q=Azerbaycan+Caddesi+59A+Cankaya+Ankara",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "premium-link underline-slide inline-flex items-center gap-1.5 mt-3 text-xs text-red-600 font-bold",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                          "Yol Tarifi Al"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity",
                      style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:05102225695",
                className: "ultra-cta contact-phone-cta group relative block p-5 sm:p-6 rounded-3xl overflow-hidden active:scale-[0.98]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.08]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -right-8 -top-8 w-32 h-32 rounded-full pointer-events-none",
                      style: { background: "radial-gradient(ellipse, rgba(255,255,255,0.12), transparent)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-red-200 uppercase tracking-[0.25em]", children: "Telefon" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-white font-black text-2xl font-display leading-none", children: "0510 222 56 95" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-200 text-xs font-medium", children: "Aramak için dokun" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group relative p-5 sm:p-6 rounded-3xl overflow-hidden cursor-default transition-all duration-300",
                style: { background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.05]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400",
                      style: { background: "radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.08), transparent)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0",
                        style: { background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.15)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-amber-300" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-gray-600 uppercase tracking-[0.25em]", children: "Çalışma Saatleri" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-white font-black text-lg font-display", children: "Her Gün 11:00 – 02:00" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative z-10 inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 rounded-full",
                      style: { background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-1.5 h-1.5 flex-shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ring-pulse absolute inset-0 rounded-full bg-green-500" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-1.5 h-1.5 bg-green-500 rounded-full block" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-xs font-black", children: "Tatil Yok · 7/7 Açık" })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/905102225695?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group relative flex items-center gap-4 p-5 sm:p-6 rounded-3xl overflow-hidden active:scale-[0.98] transition-all duration-300 wa-pulse",
                style: { background: "linear-gradient(135deg, #16a34a, #15803d)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.06]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -right-6 -bottom-6 w-28 h-28 rounded-full pointer-events-none",
                      style: { background: "radial-gradient(ellipse, rgba(255,255,255,0.1), transparent)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-green-200 uppercase tracking-[0.25em] mb-0.5", children: "WhatsApp" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-base font-display", children: "Hızlı Mesaj At" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-200 text-xs mt-0.5", children: "Anında yanıt veriyoruz" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-white/50 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "md:col-span-3 contact-map-wrap rounded-3xl overflow-hidden depth-3 reveal reveal-delay-2 relative",
              style: { height: 380, minHeight: 280, border: "1px solid rgba(0,0,0,0.06)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full depth-2",
                    style: { background: "white", border: "1px solid rgba(0,0,0,0.08)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-red-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-[9px] font-black tracking-wide", children: "Azerbaycan Cad. 59/A · Çankaya" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "iframe",
                  {
                    title: "Pilav Üstü Aşk Konum",
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d32.8165!3d39.9022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347a3f42c6b09%3A0x6e3f12e9f7e4b7d!2sAzerbaycan%20Cd.%2C%20%C3%87ankaya%2C%20Ankara!5e0!3m2!1str!2str!4v1700000000000",
                    width: "100%",
                    height: "100%",
                    style: { border: 0 },
                    allowFullScreen: true,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "promise-section relative py-16 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.04) 1px, transparent 0)", backgroundSize: "36px 36px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 65%)", filter: "blur(70px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 sm:mb-16 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-brand-600/10 border border-brand-600/20 rounded-full px-4 py-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-brand-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-400 text-[10px] font-black tracking-[0.3em] uppercase", children: "Söz Veriyoruz" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black section-headline-mobile sm:text-5xl text-white leading-tight mb-4", children: [
            "Neden ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "Bizi" }),
            " Tercih Etmelisiniz?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed", children: "5 yıllık tecrübe, sarsılmaz prensipler ve Ankara'nın en gece geç saatte açık pilavcısı olmanın sorumluluğu." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 reveal", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-6 h-6" }),
            title: "%100 Basmati",
            desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "Himalaya kökenli premium basmati" }),
              " — hiçbir zaman sıradan pirinçle çalışmadık, çalışmayacağız. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "Kalite" }),
              " tek tercihimiz."
            ] }),
            accent: "#f59e0b",
            rgb: "245,158,11"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6" }),
            title: "Taze Pişirim",
            desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Stok yapmıyoruz. Her gün sabah ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "taze malzeme" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "günlük pişirim" }),
              ". ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "Garantimiz bu." })
            ] }),
            accent: "#f97316",
            rgb: "249,115,22"
          },
          {
            emoji: "🍵",
            title: "Çay İkramı",
            desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Her siparişinize ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "ücretsiz çay ikramı" }),
              " yapıyoruz. Geleneksel ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "Türk misafirperverliği" }),
              " her tabakla birlikte gelir."
            ] }),
            accent: "#4ade80",
            rgb: "74,222,128"
          },
          {
            emoji: "🏅",
            title: "Yerli Marka",
            desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Ankara'nın kalbinden doğan ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "yerli ve milli" }),
              " bir marka. Sektörde ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-bold", children: "5+ yıldır 1 numara" }),
              " konumdayız."
            ] }),
            accent: "#fbbf24",
            rgb: "251,191,36"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-6 h-6" }),
            title: "Gece 02:00'ye Kadar",
            desc: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Ankara'da bu saate kadar açık ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80 font-black", children: "tek pilavcı biziz" }),
              ". Gece çalışanlardan gece kuşlarına, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-400 font-bold", children: "herkes için" }),
              " buradayız."
            ] }),
            accent: "#f87171",
            rgb: "248,113,113"
          }
        ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "promise-card liquid-border foil-card group p-6 sm:p-7 cursor-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 text-2xl",
              style: { background: `rgba(${p2.rgb},0.1)`, border: `1px solid rgba(${p2.rgb},0.2)`, color: p2.accent },
              children: p2.emoji ? p2.emoji : p2.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-black text-base mb-2.5 leading-tight", children: p2.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: p2.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full",
              style: { background: `linear-gradient(90deg, rgba(${p2.rgb},0.6), transparent)` }
            }
          )
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden py-28 sm:py-44 bg-[#020202]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-grid opacity-[0.08] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.7), transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.25), transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 w-[1000px] h-[500px] pointer-events-none cta-orb-drift",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.13) 0%, transparent 55%)", filter: "blur(80px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(220,38,38,0.09) 0%, transparent 60%)", filter: "blur(30px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(251,191,36,0.04) 0%, transparent 60%)", filter: "blur(50px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none",
          style: { background: "radial-gradient(ellipse, rgba(251,191,36,0.04) 0%, transparent 60%)", filter: "blur(50px)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmberLayer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.06]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanline-v2", style: { zIndex: 5 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanline-v2", style: { zIndex: 5 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none ember-trail", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-flex items-center gap-2.5 mb-8",
            style: { background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 999, padding: "6px 18px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-2 h-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ring-pulse absolute inset-0 rounded-full bg-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-2 h-2 bg-red-500 rounded-full block" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-[10px] font-black tracking-[0.35em] uppercase", children: "Pilav Üstü Aşk · Ankara'nın Tercihi · Gece 02:00'ye Kadar Açık" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-black leading-[0.95] mb-7",
            style: { fontSize: "clamp(44px, 9vw, 100px)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[0.45em] font-black tracking-[0.5em] uppercase mb-2", style: { letterSpacing: "0.5em", color: "#ef4444", textShadow: "0 0 40px rgba(220,38,38,0.5)" }, children: "Pilav Üstü Aşk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liquid-text", children: "Bugün Ne" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Yiyeceksin?" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-base sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light", children: [
          "Sıcak, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-400 font-black", children: "taze" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 font-black", children: "%100 basmati pilav" }),
          " —",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
          "tek aramayla kapınıza gelir."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xs:flex-row gap-4 justify-center mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: "ultra-glow-cta ring-aura incandescent-btn group flex items-center justify-center gap-3 text-base px-10 rounded-2xl font-black text-white",
              style: { minWidth: 200, padding: "16px 40px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 group-hover:scale-110 transition-transform relative z-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0510 222 56 95" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 ml-1 text-[10px] font-black tracking-widest bg-white/15 rounded-full px-2 py-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-white rounded-full animate-pulse" }),
                  "CANLI"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/905102225695?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group wa-pulse relative flex items-center justify-center gap-3 text-white font-black text-base px-10 rounded-2xl transition-all hover:scale-[1.03] active:scale-95 overflow-hidden",
              style: { background: "linear-gradient(135deg, #1db954, #16a34a)", boxShadow: "0 8px 32px rgba(22,163,74,0.45)", padding: "14px 40px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.06]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -right-4 -bottom-4 w-20 h-20 rounded-full pointer-events-none",
                    style: { background: "radial-gradient(ellipse, rgba(255,255,255,0.12), transparent)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "WhatsApp Sipariş" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 relative z-10 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3", children: [
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }), text: "Her Gün Taze Pişer", color: "#f97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.2)" },
          { emoji: "🍵", text: "Çay İkramı", color: "#4ade80", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.2)" },
          { emoji: "🏅", text: "Ankara'nın Yerli Markası", color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.2)" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wheat, { className: "w-3.5 h-3.5" }), text: "%100 Basmati", color: "#38bdf8", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.2)" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }), text: "4.9 · 312 Yorum", color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.2)" },
          { emoji: "🏆", text: "Sektörde 1 Numara", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }), text: "11:00 – 02:00", color: "#a3e635", bg: "rgba(163,230,53,0.1)", border: "rgba(163,230,53,0.2)" }
        ].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 text-[11px] font-bold px-3 py-1.5 rounded-full",
            style: { color: b.color, background: b.bg, border: `1px solid ${b.border}` },
            children: [
              "icon" in b && b.icon,
              "emoji" in b && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.emoji }),
              b.text
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden text-gray-400", style: { background: "#010101" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.05]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          style: { background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.015] pointer-events-none",
          style: { backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "36px 36px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 mb-6",
            style: { borderBottom: "1px solid rgba(255,255,255,0.04)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 lg:col-span-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 group inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/PILAV_USTU_LOGO.png",
                    alt: "Pilav Üstü Aşk",
                    className: "h-14 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-500 text-[10px] font-black tracking-[0.3em] uppercase", children: "Pilav Üstü Aşk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 max-w-[40px]", style: { background: "linear-gradient(to right, rgba(220,38,38,0.5), transparent)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-[10px] font-semibold tracking-widest uppercase", children: "Ankara · Est. 2019" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-[1.8] text-gray-500 max-w-xs mb-6", children: [
                  "Ankara Çankaya'da, her gün tutkuyla pişirilen",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400/80 font-bold", children: "basmati pilavın" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                  "eşsiz ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/60 font-bold", children: "lezzetini" }),
                  " yaşatıyoruz.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-brand-400 font-bold", children: "Pilav Üstü Aşk" }),
                  " — Gece 02:00'ye kadar yanınızdayız."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-xs font-bold", children: "4.9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-xs", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-xs", children: "312 değerlendirme" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center gap-2.5 mb-6 px-3.5 py-2 rounded-full",
                    style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5 text-amber-300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 font-medium", children: "11:00 – 02:00 · Her Gün" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-1.5 h-1.5 flex-shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ping-slow absolute inset-0 rounded-full bg-green-400 opacity-40" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-1.5 h-1.5 bg-green-400 rounded-full block" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-5", children: [
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }), label: "Instagram", href: "https://www.instagram.com/pilavustuaskankara/", color: "#e1306c" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4" }), label: "Facebook", href: "#", color: "#1877f2" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }), label: "Telefon", href: "tel:05102225695", color: "#dc2626" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }), label: "WhatsApp", href: "https://wa.me/905102225695", color: "#25d366" }
                ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: s.href,
                    "aria-label": s.label,
                    className: "w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 group/soc",
                    style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = `${s.color}40`;
                      e.currentTarget.style.background = `${s.color}12`;
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    },
                    children: s.icon
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-[9px] font-black uppercase tracking-[0.25em] mr-1", children: "Online" }),
                  [
                    { name: "Trendyol", href: "https://www.trendyol.com/sr?q=pilav+%C3%BCst%C3%BC+a%C5%9Fk", color: "#FF6600" },
                    { name: "Yemeksepeti", href: "https://www.yemeksepeti.com/ankara", color: "#E50023" },
                    { name: "Getir", href: "https://getir.com", color: "#5D3FD3" }
                  ].map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: p2.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all hover:scale-105 active:scale-95",
                      style: { color: p2.color, borderColor: `${p2.color}35`, background: `${p2.color}10` },
                      children: p2.name
                    },
                    i
                  ))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 lg:pl-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-white uppercase tracking-[0.3em] mb-6", children: "Hızlı Erişim" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: [
                  { label: "Basmati Farkı", id: "basmati" },
                  { label: "Menümüz", id: "menu" },
                  { label: "Toplu Yemek", id: "toplu-yemek" },
                  { label: "Hakkımızda", id: "about" },
                  { label: "Yorumlar", id: "testimonials" },
                  { label: "İletişim", id: "contact" }
                ].map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => scrollTo(l2.id),
                    className: "footer-link-ultra group flex items-center gap-2.5 text-sm text-gray-500 hover:text-white transition-colors w-full text-left py-1.5",
                    style: { WebkitTapHighlightColor: "transparent" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-1 h-1 rounded-full flex-shrink-0",
                          style: { background: "rgba(220,38,38,0.4)", boxShadow: "0 0 4px rgba(220,38,38,0)", transition: "all 0.2s" },
                          onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 0 8px rgba(220,38,38,0.8)",
                          onMouseLeave: (e) => e.currentTarget.style.boxShadow = "0 0 4px rgba(220,38,38,0)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-0.5 transition-transform", children: l2.label })
                    ]
                  },
                  l2.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-white uppercase tracking-[0.3em] mb-6", children: "İletişim & Konum" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6", children: [
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }), content: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-relaxed", children: [
                    "Azerbaycan Cad. 59/A",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Çankaya / Ankara"
                  ] }), href: null, accentRgb: "220,38,38" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }), content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0510 222 56 95" }), href: "tel:05102225695", accentRgb: "220,38,38" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }), content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Her Gün 11:00 – 02:00" }), href: null, accentRgb: "251,191,36" },
                  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }), content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp Sipariş" }), href: "https://wa.me/905102225695", accentRgb: "34,197,94" }
                ].map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Wrapper,
                    {
                      ...item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : void 0, rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0 } : {},
                      className: `flex items-start gap-3 text-xs text-gray-500 group ${item.href ? "hover:text-white transition-colors cursor-pointer" : ""}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all",
                            style: { background: `rgba(${item.accentRgb},0.08)`, border: `1px solid rgba(${item.accentRgb},0.15)`, color: `rgba(${item.accentRgb},0.9)` },
                            children: item.icon
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed pt-1.5", children: item.content })
                      ]
                    },
                    i
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:05102225695",
                    className: "ultra-cta group inline-flex items-center gap-2 text-xs font-black px-5 py-3 rounded-xl",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform" }),
                      "Hemen Ara",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse ml-1" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Pilav Üstü Aşk"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-3 bg-gray-800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tüm hakları saklıdır." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Ankara · Çankaya · Bahçelievler" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-3 bg-gray-800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:05102225695", className: "text-gray-600 hover:text-red-500 transition-colors font-medium", children: "0510 222 56 95" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-gray-700 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-red-800 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tutkuyla Pişirildi · Ankara" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-red-800 rounded-full" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col gap-3 items-end", children: [
      showBackTop && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "backtop-enter w-10 h-10 rounded-2xl backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90",
          style: { background: "rgba(18,18,18,0.88)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", WebkitTapHighlightColor: "transparent" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" })
        }
      ),
      "share" in navigator && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigator.share({ title: "Pilav Üstü Aşk", text: "Ankara'nın gece pilavcısı! %100 basmati, gece 02:00'ye kadar açık. Dene!", url: "https://pilavustuask.com" }),
          className: "group relative flex items-center justify-center text-white transition-all hover:scale-[1.08] active:scale-95 overflow-hidden rounded-2xl",
          style: { width: 42, height: 42, background: "rgba(30,30,30,0.9)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)", WebkitTapHighlightColor: "transparent" },
          title: "Arkadaşlarınla paylaş",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://wa.me/905102225695?text=Merhaba,%20sipari%C5%9F%20vermek%20istiyorum.",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group relative flex items-center justify-center text-white transition-all hover:scale-[1.08] active:scale-95 wa-pulse overflow-hidden rounded-2xl",
          style: { width: 52, height: 52, background: "linear-gradient(135deg, #25d366, #16a34a)", boxShadow: "0 8px 32px rgba(22,163,74,0.55), 0 2px 8px rgba(0,0,0,0.3)", WebkitTapHighlightColor: "transparent" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wa-fab-ring" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                style: { background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.2), transparent)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 relative z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 flex items-center gap-2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all -translate-x-2 group-hover:translate-x-0 duration-200",
                style: { background: "rgba(13,13,13,0.96)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 12, padding: "7px 12px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3 text-green-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-bold", children: "WhatsApp ile Sipariş" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:05102225695",
          className: "ultra-cta-fab group relative flex items-center gap-2 text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.04] active:scale-95",
          style: { padding: "13px 16px", WebkitTapHighlightColor: "transparent" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-[18px] h-[18px] flex-shrink-0 relative z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 whitespace-nowrap leading-none", children: "Hemen Ara" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5 text-[9px] font-black tracking-widest flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-white rounded-full animate-pulse flex-shrink-0" }),
              "CANLI"
            ] })
          ]
        }
      )
    ] }),
    cartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[400] flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-sm", onClick: () => setCartOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative z-10 w-full max-w-sm bg-[#111] border-l border-white/8 flex flex-col shadow-2xl",
          style: { paddingBottom: "max(20px, env(safe-area-inset-bottom))" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5 text-brand-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-base", children: "Sepetim" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center", children: cartCount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCartOpen(false),
                  className: "p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-4 py-3 space-y-3", children: cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-48 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-10 h-10 text-gray-700" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "Sepetiniz boş" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    var _a;
                    setCartOpen(false);
                    (_a = document.getElementById("menu")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  className: "text-brand-400 text-xs font-bold hover:text-brand-300 transition-colors",
                  children: "Menüye Git"
                }
              )
            ] }) : cartItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-white/4 border border-white/6 rounded-2xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-14 h-14 rounded-xl object-cover flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-bold truncate", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-brand-400 text-sm font-black font-display mt-0.5", children: [
                  item.price,
                  " ₺"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCartItems((prev) => prev.map((ci2) => ci2.name === item.name ? { ...ci2, qty: Math.max(1, ci2.qty - 1) } : ci2)),
                    className: "w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-sm w-5 text-center", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCartItems((prev) => prev.map((ci2) => ci2.name === item.name ? { ...ci2, qty: ci2.qty + 1 } : ci2)),
                    className: "w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCartItems((prev) => prev.filter((ci2) => ci2.name !== item.name)),
                    className: "w-7 h-7 rounded-lg bg-red-900/30 border border-red-800/30 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors ml-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] }, i)) }),
            cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-3 border-t border-white/8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm font-semibold", children: "Toplam" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-xl font-display", children: [
                  cartItems.reduce((s, i) => s + Number(i.price) * i.qty, 0),
                  " ₺"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://wa.me/905102225695?text=${encodeURIComponent("Merhaba! Şu ürünleri sipariş etmek istiyorum:\n" + cartItems.map((i) => `- ${i.name} x${i.qty} (${i.price}₺)`).join("\n"))}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-white text-sm transition-all active:scale-95",
                  style: { background: "linear-gradient(135deg,#16a34a,#15803d)", boxShadow: "0 4px 20px rgba(22,163,74,0.4)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    "WhatsApp ile Sipariş Ver"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCartItems([]),
                  className: "w-full mt-2 py-2 text-gray-600 text-xs font-semibold hover:text-gray-400 transition-colors",
                  children: "Sepeti Temizle"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mobile-sticky-bar sm:hidden transition-all duration-500 ${floatCTAVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px", style: { background: "linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.7) 30%, rgba(251,146,60,0.5) 60%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain-overlay opacity-[0.04]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-4", style: { paddingTop: 10, paddingBottom: "max(12px, env(safe-area-inset-bottom))" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative w-2 h-2 flex-shrink-0", children: [
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ring-pulse absolute inset-0 rounded-full bg-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-2 h-2 rounded-full block ${isOpen ? "bg-green-400" : "bg-gray-600"}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-black ${isOpen ? "text-green-400" : "text-gray-500"}`, children: isOpen ? "Şu An Açık · 02:00'ye kadar" : "Şu An Kapalı · 11:00'de açılır" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sticky-mini-badge text-green-400 border-green-500/30 bg-green-500/10", children: "🍵 Çay İkramı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sticky-mini-badge text-amber-400 border-amber-500/30 bg-amber-500/10", children: "🏅 Yerli Marka" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2.5", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-amber-400 text-amber-400" }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-[10px] font-bold ml-1", children: "4.9 · Ankara'nın 1 Numaralı Pilavcısı" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/905102225695?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mobile-wa-btn haptic-press flex items-center justify-center gap-1.5 text-white text-[13px] font-black",
              style: { WebkitTapHighlightColor: "transparent" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                "WhatsApp Sipariş"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:05102225695",
              className: "mobile-call-btn haptic-press flex items-center justify-center gap-1.5 text-white text-[13px] font-black",
              style: { WebkitTapHighlightColor: "transparent" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                "Hemen Ara"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
