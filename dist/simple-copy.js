(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SimpleCopy"] = factory();
	else
		root["SimpleCopy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
var config = {
        id: 'j-new-copy-range-id',
        styles: '\n            position: "absolute";\n            width: "100%";\n            height: "1px";\n            top: 0;\n            overflow: "auto";\n            z-index: -1;\n            opacity: 0;\n            filter: alpha(opacity=0);'
};

exports.default = config;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = {
    typeOf: function typeOf(o) {
        return o === null ? String(o) : {}.toString.call(o).slice(8, -1).toLowerCase();
    },
    $: function $(x) {
        if (_.typeOf(x) !== 'string') {
            return x;
        }
        return document.getElementById(x);
    },
    $cEleWithId: function $cEleWithId(tag) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var newEle = document.createElement(tag);

        if (id) {
            newEle.id = id;
        }

        return newEle;
    },
    $append: function $append(newEle) {
        var ele = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        ele = ele || document.body;

        ele.appendChild(newEle);
    },
    $remove: function $remove(rEle) {
        var ele = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        ele = ele || document.body;

        ele.removeChild(rEle);
    },
    setStyles: function setStyles(ele, styles) {
        if (ele.setAttribute) {
            // not ie
            ele.setAttribute('style', styles);
        } else if (ele.style.cssText) {
            // ie
            ele.style.cssText = styles;
        } else {
            console.error('Don\'t support set style');
        }
    }
};

exports.default = _;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Copy = {
    copy: function copy() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var res = false;

        if (_util2.default.typeOf(id) !== 'string') {
            console.error('not a valid node selector!');
            return res;
        }

        var _con = _util2.default.$(id);
        var _conClone = _con.cloneNode(true);

        var newCopyRange = _util2.default.$cEleWithId('div', _index2.default.id);
        _util2.default.setStyles(newCopyRange, _index2.default.styles);
        _util2.default.$append(newCopyRange);
        _util2.default.$append(_conClone, newCopyRange);
        var _conCopy = _util2.default.$(_index2.default.id);

        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(_conCopy);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var _range = document.createRange();
            _range.selectNodeContents(_conCopy);
            selection.removeAllRanges();
            selection.addRange(_range);
        } else {
            console.error('Don\'t support copy!');
            return res;
        }

        try {
            res = document.execCommand('copy');
            _util2.default.$remove(newCopyRange);
            return res;
        } catch (err) {
            _util2.default.$remove(newCopyRange);
            console.error('copy fail!');
            return res;
        }
    },
    copyText: function copyText() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var res = false;

        if (_util2.default.typeOf(text) !== 'string') {
            console.error('not a valid text!');
            return res;
        }

        var newTextRange = _util2.default.$cEleWithId('textarea');
        newTextRange.value = text;
        _util2.default.$append(newTextRange);

        newTextRange.select();

        try {
            res = document.execCommand('copy');
            _util2.default.$remove(newTextRange);
            return res;
        } catch (err) {
            _util2.default.$remove(newTextRange);
            console.error('copy text fail!');
            return res;
        }
    }
};

exports.default = Copy;
module.exports = exports['default'];

/***/ })
/******/ ]);
});