'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">nxt-pick-datetime documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/DateTimeModule.html\" data-type=\"entity-link\" >DateTimeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'data-bs-target="#xs-components-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'id="xs-components-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CalendarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalendarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DateTimeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DateTimeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DateTimeInlineComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DateTimeInlineComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MonthViewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MonthViewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MultiYearViewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MultiYearViewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TimerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TimerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/YearViewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >YearViewComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'data-bs-target="#xs-directives-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'id="xs-directives-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/DateTimeInputDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DateTimeInputDirective</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"directives/DateTimeTriggerDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DateTimeTriggerDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'data-bs-target="#xs-injectables-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"' : 'id="xs-injectables-links-module-DateTimeModule-275b3c753b42a62da823731cd79ea55fbbb3a83181ab492177a4533725413de4a705d85a8809fda0b6c31b2108c74d71ccba6165d30e78df64e726bf064691b7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DateTimeIntl.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DateTimeIntl</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MomentDateTimeModule.html\" data-type=\"entity-link\" >MomentDateTimeModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NativeDateTimeModule.html\" data-type=\"entity-link\" >NativeDateTimeModule</a>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links"' : 'data-bs-target="#xs-directives-links"', ">\n                                <span class=\"icon ion-md-code-working\"></span>\n                                <span>Directives</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"directives/DateTimeDirective.html\" data-type=\"entity-link\" >DateTimeDirective</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CalendarCell.html\" data-type=\"entity-link\" >CalendarCell</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DateTimeAdapter.html\" data-type=\"entity-link\" >DateTimeAdapter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DialogConfig.html\" data-type=\"entity-link\" >DialogConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DialogRef.html\" data-type=\"entity-link\" >DialogRef</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/DateTimeIntl.html\" data-type=\"entity-link\" >DateTimeIntl</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MomentDateTimeAdapter.html\" data-type=\"entity-link\" >MomentDateTimeAdapter</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NativeDateTimeAdapter.html\" data-type=\"entity-link\" >NativeDateTimeAdapter</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/DateTimeFormats.html\" data-type=\"entity-link\" >DateTimeFormats</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DateTimeInputEvent.html\" data-type=\"entity-link\" >DateTimeInputEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DialogPosition.html\" data-type=\"entity-link\" >DialogPosition</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MomentDateTimeAdapterOptions.html\" data-type=\"entity-link\" >MomentDateTimeAdapterOptions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));