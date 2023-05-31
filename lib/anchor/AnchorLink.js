"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _context = _interopRequireDefault(require("./context"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var AnchorLink = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AnchorLink, _React$Component);

  var _super = (0, _createSuper2["default"])(AnchorLink);

  function AnchorLink() {
    var _this;

    (0, _classCallCheck2["default"])(this, AnchorLink);
    _this = _super.apply(this, arguments);

    _this.handleClick = function (e) {
      var _this$context = _this.context,
          scrollTo = _this$context.scrollTo,
          onClick = _this$context.onClick;
      var _this$props = _this.props,
          href = _this$props.href,
          title = _this$props.title;

      if ((onClick === null || onClick === void 0 ? void 0 : onClick(e, {
        title: title,
        href: href
      })) === false || e.isDefaultPrevented()) {
        return;
      }

      scrollTo(href);
    };

    _this.renderAnchorLink = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          href = _a.href,
          title = _a.title,
          children = _a.children,
          className = _a.className,
          target = _a.target,
          props = __rest(_a, ["prefixCls", "href", "title", "children", "className", "target"]);

      var prefixCls = getPrefixCls('anchor', customizePrefixCls);
      var active = _this.context.activeLink === href;
      var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-link"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-active"), active), className);
      var titleClassName = (0, _classnames["default"])("".concat(prefixCls, "-link-title"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-title-active"), active));
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
        className: titleClassName,
        href: href,
        title: typeof title === 'string' ? title : '',
        target: target,
        onClick: _this.handleClick
      }, props), title), children);
    };

    return _this;
  }

  (0, _createClass2["default"])(AnchorLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.registerLink(this.props.href);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevHref = _ref2.href;
      var href = this.props.href;

      if (prevHref !== href) {
        this.context.unregisterLink(prevHref);
        this.context.registerLink(href);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unregisterLink(this.props.href);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderAnchorLink);
    }
  }]);
  return AnchorLink;
}(React.Component);

AnchorLink.defaultProps = {
  href: '#'
};
AnchorLink.contextType = _context["default"];
var _default = AnchorLink;
exports["default"] = _default;