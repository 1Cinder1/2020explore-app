(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/lime-echart/components/l-echart/l-echart"],{

/***/ 755:
/*!*********************************************************************************************!*\
  !*** D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l-echart.vue?vue&type=template&id=52a46d79&scoped=true& */ 756);
/* harmony import */ var _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l-echart.vue?vue&type=script&lang=js& */ 758);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=css& */ 762);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52a46d79",
  null,
  false,
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/lime-echart/components/l-echart/l-echart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 756:
/*!****************************************************************************************************************************************!*\
  !*** D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=template&id=52a46d79&scoped=true& */ 757);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 757:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 758:
/*!**********************************************************************************************************************!*\
  !*** D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=script&lang=js& */ 759);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 759:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57));
var _canvas = __webpack_require__(/*! ./canvas */ 760);
var _utils = __webpack_require__(/*! ./utils */ 761);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var charts = {};
var echartsObj = {};
var _default = {
  name: 'lime-echart',
  props: {
    type: {
      type: String,
      default: '2d'
    },
    customStyle: String,
    isDisableScroll: Boolean,
    isClickable: {
      type: Boolean,
      default: true
    },
    enableHover: Boolean,
    beforeDelay: {
      type: Number,
      default: 30
    }
  },
  data: function data() {
    return {
      use2dCanvas: true,
      width: null,
      height: null,
      nodeWidth: null,
      nodeHeight: null,
      canvasNode: null,
      config: {},
      inited: false,
      finished: false,
      file: '',
      platform: '',
      isPc: false,
      isDown: false,
      isOffscreenCanvas: false,
      offscreenWidth: 0,
      offscreenHeight: 0
    };
  },
  computed: {
    canvasId: function canvasId() {
      return "lime-echart".concat(this._ && this._.uid || this._uid);
    },
    offscreenCanvasId: function offscreenCanvasId() {
      return "".concat(this.canvasId, "_offscreen");
    },
    offscreenStyle: function offscreenStyle() {
      return "width:".concat(this.offscreenWidth, "px;height: ").concat(this.offscreenHeight, "px; position: fixed; left: 99999px; background: red");
    },
    canvasStyle: function canvasStyle() {
      return this.width && this.height ? 'width:' + this.width + 'px;height:' + this.height + 'px' : '';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
    this.dispose();
  },
  created: function created() {
    var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
      platform = _uni$getSystemInfoSyn.platform;
    this.isPC = /windows/i.test(platform);
    this.use2dCanvas = this.type === '2d' && (0, _utils.canIUseCanvas2d)();
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.$emit('finished');
    });
  },
  methods: {
    setChart: function setChart(callback) {
      if (!this.chart) {
        console.warn("\u7EC4\u4EF6\u8FD8\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5148\u4F7F\u7528 init");
        return;
      }
      if (typeof callback === 'function' && this.chart) {
        callback(this.chart);
      }
    },
    setOption: function setOption() {
      var _this$chart;
      if (!this.chart || !this.chart.setOption) {
        console.warn("\u7EC4\u4EF6\u8FD8\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5148\u4F7F\u7528 init");
        return;
      }
      (_this$chart = this.chart).setOption.apply(_this$chart, arguments);
    },
    showLoading: function showLoading() {
      if (this.chart) {
        var _this$chart2;
        (_this$chart2 = this.chart).showLoading.apply(_this$chart2, arguments);
      }
    },
    hideLoading: function hideLoading() {
      if (this.chart) {
        this.chart.hideLoading();
      }
    },
    clear: function clear() {
      if (this.chart) {
        this.chart.clear();
      }
    },
    dispose: function dispose() {
      if (this.chart) {
        this.chart.dispose();
      }
    },
    resize: function resize(size) {
      var _this2 = this;
      if (size && size.width && size.height) {
        this.height = size.height;
        this.width = size.width;
        if (this.chart) {
          this.chart.resize(size);
        }
      } else {
        this.$nextTick(function () {
          uni.createSelectorQuery().in(_this2).select(".lime-echart").boundingClientRect().exec(function (res) {
            if (res) {
              var _res$ = res[0],
                width = _res$.width,
                height = _res$.height;
              _this2.width = width = width || 300;
              _this2.height = height = height || 300;
              _this2.chart.resize({
                width: width,
                height: height
              });
            }
          });
        });
      }
    },
    canvasToTempFilePath: function canvasToTempFilePath() {
      var _this3 = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var use2dCanvas = this.use2dCanvas,
        canvasId = this.canvasId,
        canvasNode = this.canvasNode;
      return new Promise(function (resolve, reject) {
        var copyArgs = Object.assign({
          canvasId: canvasId,
          success: resolve,
          fail: reject
        }, args);
        if (use2dCanvas) {
          delete copyArgs.canvasId;
          copyArgs.canvas = canvasNode;
        }
        uni.canvasToTempFilePath(copyArgs, _this3);
      });
    },
    init: function init(echarts) {
      var _arguments = arguments,
        _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _len, args, _key, theme, opts, callback, config;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _arguments[_key];
                }
                if (!(_arguments && _arguments.length < 1)) {
                  _context.next = 4;
                  break;
                }
                console.error('缺少参数：init(echarts, theme?:string, opts?: object, callback?: function)');
                return _context.abrupt("return");
              case 4:
                theme = null, opts = {};
                Array.from(_arguments).forEach(function (item) {
                  if (typeof item === 'function') {
                    callback = item;
                  }
                  if (['string'].includes((0, _typeof2.default)(item))) {
                    theme = item;
                  }
                  if ((0, _typeof2.default)(item) === 'object') {
                    opts = item;
                  }
                });
                if (!_this4.beforeDelay) {
                  _context.next = 9;
                  break;
                }
                _context.next = 9;
                return (0, _utils.sleep)(_this4.beforeDelay);
              case 9:
                _context.next = 11;
                return _this4.getContext();
              case 11:
                config = _context.sent;
                (0, _canvas.setCanvasCreator)(echarts, config);
                _this4.chart = echarts.init(config.canvas, theme, Object.assign({}, config, opts));
                if (!(typeof callback === 'function')) {
                  _context.next = 18;
                  break;
                }
                callback(_this4.chart);
                _context.next = 19;
                break;
              case 18:
                return _context.abrupt("return", _this4.chart);
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getContext: function getContext() {
      var _this5 = this;
      return (0, _utils.getRect)("#".concat(this.canvasId), {
        context: this,
        type: this.use2dCanvas ? 'fields' : 'boundingClientRect'
      }).then(function (res) {
        if (res) {
          var dpr = _utils.devicePixelRatio;
          var width = res.width,
            height = res.height,
            node = res.node;
          var canvas;
          _this5.width = width = width || 300;
          _this5.height = height = height || 300;
          if (node) {
            var ctx = node.getContext('2d');
            canvas = new _canvas.Canvas(ctx, _this5, true, node);
            _this5.canvasNode = node;
          } else {
            dpr = _this5.isPC ? _utils.devicePixelRatio : 1;
            _this5.rect = res;
            _this5.nodeWidth = width * dpr;
            _this5.nodeHeight = height * dpr;
            var _ctx = uni.createCanvasContext(_this5.canvasId, _this5);
            canvas = new _canvas.Canvas(_ctx, _this5, false);
          }
          return {
            canvas: canvas,
            width: width,
            height: height,
            devicePixelRatio: dpr,
            node: node
          };
        } else {
          return {};
        }
      });
    },
    getRelative: function getRelative(e) {
      return {
        x: e.pageX - this.rect.left,
        y: e.pageY - this.rect.top,
        wheelDelta: e.wheelDelta
      };
    },
    getTouch: function getTouch(e) {
      return e.touches && e.touches[0] && e.touches[0].x ? e.touches[0] : this.getRelative(e);
    },
    touchStart: function touchStart(e) {
      this.isDown = true;
      if (this.chart && ((e.touches.length > 0 || e.touches['0']) && e.type != 'mousemove' || e.type == 'mousedown')) {
        var touch = this.getTouch(e);
        this.startX = touch.x;
        this.startY = touch.y;
        this.startT = new Date();
        var handler = this.chart.getZr().handler;
        _canvas.dispatch.call(handler, 'mousedown', touch);
        _canvas.dispatch.call(handler, 'mousemove', touch);
        handler.processGesture((0, _utils.wrapTouch)(e), 'start');
        clearTimeout(this.endTimer);
      }
    },
    touchMove: function touchMove(e) {
      if (this.isPc && this.enableHover && !this.isDown) {
        this.isDown = true;
      }
      if (this.chart && ((e.touches.length > 0 || e.touches['0']) && e.type != 'mousemove' || e.type == 'mousemove' && this.isDown)) {
        var handler = this.chart.getZr().handler;
        _canvas.dispatch.call(handler, 'mousemove', this.getTouch(e));
        handler.processGesture((0, _utils.wrapTouch)(e), 'change');
      }
    },
    touchEnd: function touchEnd(e) {
      this.isDown = false;
      if (this.chart) {
        var _ref = e.changedTouches && e.changedTouches[0] || {},
          x = _ref.x;
        var touch = (x ? e.changedTouches[0] : this.getRelative(e)) || {};
        var handler = this.chart.getZr().handler;
        var isClick = Math.abs(touch.x - this.startX) < 10 && new Date() - this.startT < 200;
        _canvas.dispatch.call(handler, 'mouseup', touch);
        handler.processGesture((0, _utils.wrapTouch)(e), 'end');
        if (isClick) {
          _canvas.dispatch.call(handler, 'click', touch);
        } else {
          this.endTimer = setTimeout(function () {
            _canvas.dispatch.call(handler, 'mousemove', {
              x: 999999999,
              y: 999999999
            });
            _canvas.dispatch.call(handler, 'mouseup', {
              x: 999999999,
              y: 999999999
            });
          }, 50);
        }
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 762:
/*!******************************************************************************************************************************************************!*\
  !*** D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=css& */ 763);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 763:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/代码/uniapp/2020explore-app/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-echart/components/l-echart/l-echart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-echart/components/l-echart/l-echart-create-component',
    {
        'uni_modules/lime-echart/components/l-echart/l-echart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(755))
        })
    },
    [['uni_modules/lime-echart/components/l-echart/l-echart-create-component']]
]);
