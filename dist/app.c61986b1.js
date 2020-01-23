// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Kaupungit.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Kaupungit =
/*#__PURE__*/
function () {
  function Kaupungit() {
    _classCallCheck(this, Kaupungit);

    this._alkiot = new Array();
    this._lkm = 0;
  }

  _createClass(Kaupungit, [{
    key: "lisaaKaupunki",
    value: function lisaaKaupunki(kaupunki) {
      this._alkiot.push(kaupunki);

      this._lkm++;
    }
  }, {
    key: "annaKaupunki",
    value: function annaKaupunki(i) {
      if (i < 0 || this.lkm <= i) {
        throw new Error("Väärä indeksi: " + i);
      }

      ;
      return this.alkiot[i];
    }
  }, {
    key: "annaKaupunkiNimella",
    value: function annaKaupunkiNimella(nimi) {
      var arr = this.alkiot.filter(function (data) {
        return data.nimi == nimi;
      });

      if (arr.length == 0 || arr.length > 1) {
        throw new Error("Ei löydy");
      } else return arr[0];
    }
  }, {
    key: "lkm",
    get: function get() {
      return this._lkm;
    }
  }, {
    key: "alkiot",
    get: function get() {
      return this._alkiot;
    }
  }]);

  return Kaupungit;
}();

exports.Kaupungit = Kaupungit;
},{}],"Ravintosisalto.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Ravintosisalto = function Ravintosisalto() {
  _classCallCheck(this, Ravintosisalto);

  this.recipeId = 0;
  this.kcal = 0;
  this.kJ = 0;
  this.rasva = 0;
  this.tyydyttyneet = 0;
  this.hiilihydraatti = 0;
  this.sokerit = 0;
  this.proteiini = 0;
  this.suola = 0; // PRINT EI TOIMI NOIN, KU VOI OLLA UNDEFINED.

  /*
  print(): string {
      let string = "";
      string += this.kcal.toString()  +  "kcal, " +
                this.kJ.toString()    +  "kJ, " +
                this.rasva.toString() + " rasvaa, " +
                "josta tyydyttyneitä: " + this.tyydyttyneet.toString() + ", " +
                this.hiilihydraatti.toString() + " hiilihydraatteja, " +
                "josta sokereita: " + this.sokerit.toString() + ", " +
                this.proteiini.toString() + " proteiinia, " +
                this.suola.toString() + " suolaa.";
      return string;
  }
  */
};

exports.Ravintosisalto = Ravintosisalto;
},{}],"Ruoka.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Ravintosisalto_1 = require("./Ravintosisalto"); // TODO: Pitäiskö ravintosisältö olla private (En jaksanu rakentaa.)


var Ruoka =
/*#__PURE__*/
function () {
  function Ruoka() {
    _classCallCheck(this, Ruoka);

    this._nimi = "";
    this.ravintosisalto = new Ravintosisalto_1.Ravintosisalto();
  }

  _createClass(Ruoka, [{
    key: "nimi",
    get: function get() {
      return this._nimi;
    },
    set: function set(nimi) {
      this._nimi = nimi;
    }
  }]);

  return Ruoka;
}();

exports.Ruoka = Ruoka;
},{"./Ravintosisalto":"Ravintosisalto.ts"}],"Lisukkeet.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Ruoka_1 = require("./Ruoka");

var Ravintosisalto_1 = require("./Ravintosisalto");

var Lisukkeet = function Lisukkeet() {
  _classCallCheck(this, Lisukkeet);

  this.lisukkeet = new Array();
  this.salaatti = new Ruoka_1.Ruoka();
  this.salaatti.nimi = "salaatti";
  this.salaatti.ravintosisalto = {
    kcal: 34,
    rasva: 0.2,
    proteiini: 0.8,
    hiilihydraatti: 7.9
  };
  this.salaattisekoitus = new Ruoka_1.Ruoka();
  this.salaattisekoitus.nimi = "salaattisekoitus";
  this.salaattisekoitus.ravintosisalto = {
    kcal: 70,
    rasva: 0.7,
    proteiini: 2.4,
    hiilihydraatti: 14.6
  };
  this.salaatinkastike = new Ruoka_1.Ruoka();
  this.salaatinkastike.nimi = "salaatinkastike";
  this.salaatinkastike.ravintosisalto = {
    kcal: 63,
    rasva: 6.4,
    proteiini: 0,
    hiilihydraatti: 1.7
  };
  this.ruisleipa = new Ruoka_1.Ruoka();
  this.ruisleipa.nimi = "ruisleipä";
  this.ruisleipa.ravintosisalto = {
    kcal: 65,
    rasva: 0.4,
    proteiini: 1.9,
    hiilihydraatti: 15.6
  };
  this.margariini = new Ruoka_1.Ruoka();
  this.margariini.nimi = "margariini";
  this.margariini.ravintosisalto = {
    kcal: 36,
    rasva: 4.2,
    proteiini: 0,
    hiilihydraatti: 0
  };
  this.maito = new Ruoka_1.Ruoka();
  this.maito.nimi = "maito";
  this.maito.ravintosisalto = {
    kcal: 68,
    rasva: 0.2,
    proteiini: 6.1,
    hiilihydraatti: 9.8
  };
  this.lisukkeet = [this.salaatti, this.salaattisekoitus, this.salaatinkastike, this.ruisleipa, this.margariini, this.maito];
  var kokonaisuus = new Ruoka_1.Ruoka();
  kokonaisuus.nimi = "yhteensä";
  kokonaisuus.ravintosisalto = new Ravintosisalto_1.Ravintosisalto();
  kokonaisuus.ravintosisalto.kcal = 0;
  kokonaisuus.ravintosisalto.rasva = 0;
  kokonaisuus.ravintosisalto.proteiini = 0;
  kokonaisuus.ravintosisalto.hiilihydraatti = 0;
  this.lisukkeet.forEach(function (ruoka) {
    kokonaisuus.ravintosisalto.kcal += ruoka.ravintosisalto.kcal;
    kokonaisuus.ravintosisalto.rasva += ruoka.ravintosisalto.rasva;
    kokonaisuus.ravintosisalto.proteiini += ruoka.ravintosisalto.proteiini;
    kokonaisuus.ravintosisalto.hiilihydraatti += ruoka.ravintosisalto.hiilihydraatti;
  });
  this.lisukkeet.push(kokonaisuus);
};

exports.Lisukkeet = Lisukkeet;
},{"./Ruoka":"Ruoka.ts","./Ravintosisalto":"Ravintosisalto.ts"}],"Ravintosuositus.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Lisukkeet_1 = require("./Lisukkeet");

var Ravintosuositus = function Ravintosuositus() {
  _classCallCheck(this, Ravintosuositus);

  this.lisukkeet = new Lisukkeet_1.Lisukkeet();
  this.suositusKcal = 750; // Näistä yhteensä 100%, sitten katotaa onko ok;

  this.suositusRasva = 30; // E%

  this.SuositusHiilihydraatti = 53; // E%

  this.SuositusProteiini = 17; // E%

  this.SuositusSokerit = 10; // E%
};

exports.Ravintosuositus = Ravintosuositus;
},{"./Lisukkeet":"Lisukkeet.ts"}],"Kirjasto.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Kaupungit_1 = require("./Kaupungit");

var Ravintosuositus_1 = require("./Ravintosuositus");

var Kirjasto =
/*#__PURE__*/
function () {
  function Kirjasto() {
    _classCallCheck(this, Kirjasto);

    this._kaupungit = new Kaupungit_1.Kaupungit();
    this._ravintosuositus = new Ravintosuositus_1.Ravintosuositus();
  }

  _createClass(Kirjasto, [{
    key: "annaKaupungitLkm",
    value: function annaKaupungitLkm() {
      return this.kaupungit.lkm;
    }
  }, {
    key: "lisaaKaupunki",
    value: function lisaaKaupunki(kaupunki) {
      this.kaupungit.lisaaKaupunki(kaupunki);
    }
  }, {
    key: "kaupungit",
    get: function get() {
      return this._kaupungit;
    }
  }, {
    key: "ravintosuositus",
    get: function get() {
      return this._ravintosuositus;
    }
  }]);

  return Kirjasto;
}();

exports.Kirjasto = Kirjasto;
},{"./Kaupungit":"Kaupungit.ts","./Ravintosuositus":"Ravintosuositus.ts"}],"Ravintolat.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Ravintolat =
/*#__PURE__*/
function () {
  function Ravintolat() {
    _classCallCheck(this, Ravintolat);

    this._alkiot = new Array();
    this._lkm = 0;
  }

  _createClass(Ravintolat, [{
    key: "lisaaRavintola",
    value: function lisaaRavintola(ravintola) {
      this._alkiot.push(ravintola);

      this._lkm++;
    }
  }, {
    key: "annaRavintola",
    value: function annaRavintola(i) {
      if (i < 0 || this.lkm <= i) {
        throw new Error("Väärä indeksi: " + i);
      }

      ;
      return this.alkiot[i];
    }
  }, {
    key: "annaRavintolaNimella",
    value: function annaRavintolaNimella(nimi) {
      var arr = this.alkiot.filter(function (data) {
        return data.nimi == nimi;
      });

      if (arr.length == 0 || arr.length > 1) {
        throw new Error("Ei löydy " + nimi);
      } else return arr[0];
    }
  }, {
    key: "annaRavintolat",
    value: function annaRavintolat() {
      return this._alkiot;
    }
  }, {
    key: "lkm",
    get: function get() {
      return this._lkm;
    }
  }, {
    key: "alkiot",
    get: function get() {
      return this._alkiot;
    }
  }]);

  return Ravintolat;
}();

exports.Ravintolat = Ravintolat;
},{}],"Kaupunki.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Ravintolat_1 = require("./Ravintolat");

var Kaupunki =
/*#__PURE__*/
function () {
  function Kaupunki(nimi) {
    _classCallCheck(this, Kaupunki);

    this._ravintolat = new Ravintolat_1.Ravintolat();
    this._lkm = 0;
    this._nimi = nimi;
  }

  _createClass(Kaupunki, [{
    key: "annaRavintolaNimella",
    value: function annaRavintolaNimella(nimi) {
      var arr = this.ravintolat.annaRavintolat().filter(function (data) {
        return data.nimi == nimi;
      });

      if (arr.length == 0 || arr.length > 1) {
        throw new Error("Ei löydy " + nimi);
      } else return arr[0];
    }
  }, {
    key: "lisaaRavintola",
    value: function lisaaRavintola(ravintola) {
      this.ravintolat.lisaaRavintola(ravintola);
      this._lkm++;
    }
  }, {
    key: "annaRavintola",
    value: function annaRavintola(i) {
      if (i < 0 || this.lkm <= i) {
        throw new Error("Väärä indeksi: " + i);
      }

      ;
      return this._ravintolat.annaRavintolat()[i];
    }
  }, {
    key: "lkm",
    get: function get() {
      return this._lkm;
    }
  }, {
    key: "nimi",
    set: function set(nimi) {
      this._nimi = nimi;
    },
    get: function get() {
      return this._nimi;
    }
  }, {
    key: "ravintolat",
    get: function get() {
      return this._ravintolat;
    }
  }]);

  return Kaupunki;
}();

exports.Kaupunki = Kaupunki;
},{"./Ravintolat":"Ravintolat.ts"}],"app.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Kirjasto_1 = require("./Kirjasto");

var Kaupunki_1 = require("./Kaupunki"); //import parseIngredients from "./parse";


var source = "ruokalista.json";
var kirjasto = new Kirjasto_1.Kirjasto();
var jyvaskyla = new Kaupunki_1.Kaupunki("Jyväskylä");
kirjasto.lisaaKaupunki(jyvaskyla);
console.log(kirjasto);

function getData(url) {
  return __awaiter(this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('lähettii hakee dataa'); //const proxyurl = "https://cors-anywhere.herokuapp.com/";
            //const response = await fetch(proxyurl + url);

            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

getData(source).then(function (data) {
  console.log(data.results.fi);
});
},{"./Kirjasto":"Kirjasto.ts","./Kaupunki":"Kaupunki.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59280" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map