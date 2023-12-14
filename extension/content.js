/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { SelectiumBuilder, Selectors } = require('selectium');
// (async () => {
//     const driver = new Builder().forBrowser('chrome').build();
//     const selectiumDriver = new SelectiumBuilder().forDriver(driver).build();
//     const currentTab = window.location.href;
//     try {
//         await driver.get(currentTab);
//         // Use Selectium to find element by name attribute
//         const element = await selectiumDriver.findElement(Selectors.name('first_name'));
//         // Perform actions on the element (e.g., click)
//         await element.click();
//         // Other actions...
//     } finally {
//         await driver.quit();
//     }
// })();
var AutoFillFormat = /*#__PURE__*/function () {
  function AutoFillFormat() {
    _classCallCheck(this, AutoFillFormat);
    this.handleRequest();
  }
  _createClass(AutoFillFormat, [{
    key: "handleRequest",
    value: function handleRequest() {
      var _this = this;
      chrome.runtime.onMessage.addListener(function (request, sender, response) {
        if (request.action == "Filled") {
          _this.fillForm();
        }
        console.log(request);
      });
    }
  }, {
    key: "fillForm",
    value: function fillForm() {
      var form = {
        firstname: "kevin",
        lastname: "king",
        phone: "5419087690"
      };
      var firstname = document.getElementById("input-3");
      var lastname = document.getElementById("input-4");
      var phone = document.getElementById("input-12");
      firstname.value = form.firstname;
      lastname.value = form.lastname;
      phone.value = form.phone;

      // document.querySelector("button").click();
    }
  }]);
  return AutoFillFormat;
}();
var autofillClass = new AutoFillFormat();
/******/ })()
;
//# sourceMappingURL=content.js.map