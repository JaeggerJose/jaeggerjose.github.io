"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, children } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"gray100\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n                            lineNumber: 38,\n                            columnNumber: 24\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: \"/works\",\n                        path: path,\n                        children: \"Works\"\n                    }, void 0, false, {\n                        fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/navbar.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDTztBQWNQO0FBQ3VCO0FBRWhELE1BQU1lLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFOztJQUN0QyxNQUFNQyxTQUFTRixTQUFTRDtJQUN4QixNQUFNSSxnQkFBZ0JQLG1FQUFpQkEsQ0FBQyxXQUFXO0lBQ25ELHFCQUNJLDhEQUFDWixrREFBUUE7UUFBQ2UsTUFBTUE7UUFBTUssUUFBUTtrQkFDMUIsNEVBQUNoQixrREFBSUE7WUFBQ2lCLEdBQUc7WUFBR0MsSUFBSUosU0FBUyxZQUFZSztZQUFXQyxPQUFPTixTQUFTLFlBQVlDO3NCQUN2RUY7Ozs7Ozs7Ozs7O0FBSWpCO0dBVk1IOztRQUVvQkYsK0RBQWlCQTs7O0tBRnJDRTtBQVlOLE1BQU1XLFNBQVMsQ0FBQ0M7O0lBQ1osTUFBTSxFQUFFVixJQUFJLEVBQUUsR0FBR1U7SUFDakIscUJBQ0ksOERBQUN4QixpREFBR0E7UUFBQ3lCLFVBQVM7UUFBUUMsSUFBRztRQUFNQyxHQUFFO1FBQU9QLElBQUlWLG1FQUFpQkEsQ0FBQyxhQUFhO1FBQWNrQixPQUFPO1lBQUVDLGdCQUFnQjtRQUFhO1FBQUdDLFFBQVE7UUFBSSxHQUFHTixLQUFLO2tCQUNsSiw0RUFBQ3pCLHVEQUFTQTtZQUFDZ0MsU0FBUTtZQUFPWixHQUFHO1lBQUdhLE1BQUs7WUFBZUMsTUFBSztZQUFPQyxPQUFNO1lBQVNDLFNBQVE7OzhCQUNuRiw4REFBQ2xDLGtEQUFJQTtvQkFBQ2lDLE9BQU07b0JBQVNFLElBQUk7OEJBQ3JCLDRFQUFDaEMscURBQU9BO3dCQUFDc0IsSUFBRzt3QkFBS1csTUFBSzt3QkFBS0MsZUFBZTtrQ0FDdkMsNEVBQUN6Qyw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ00sbURBQUtBO29CQUFDb0MsV0FBVzt3QkFBRUMsTUFBTTt3QkFBVUMsSUFBSTtvQkFBTTtvQkFBR1YsU0FBUzt3QkFBRVMsTUFBTTt3QkFBUUMsSUFBSTtvQkFBTztvQkFBR0MsT0FBTzt3QkFBRUYsTUFBTTt3QkFBUUMsSUFBSTtvQkFBTztvQkFBR0UsWUFBVztvQkFBU0MsVUFBVTtvQkFBR0MsSUFBSTt3QkFBRUwsTUFBTTt3QkFBR0MsSUFBSTtvQkFBRTs4QkFDbkwsNEVBQUM3Qjt3QkFBU0MsTUFBSzt3QkFBU0MsTUFBTUE7a0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEQ7SUFuQk1TOztRQUc4Q2IsK0RBQWlCQTs7O01BSC9EYTtBQXFCTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBCb3gsXG4gICAgRmxleCxcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgTWVudSxcbiAgICBNZW51QnV0dG9uLFxuICAgIE1lbnVMaXN0LFxuICAgIE1lbnVJdGVtLFxuICAgIEljb25CdXR0b24sXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmsgcD17Mn0gYmc9e2FjdGl2ZSA/ICdncmF5MTAwJyA6IHVuZGVmaW5lZH0gY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHBvc2l0aW9uPVwiZml4ZWRcIiBhcz1cIm5hdlwiIHc9XCIxMDAlXCIgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9IHN0eWxlPXt7IGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScgfX0gekluZGV4PXsxfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5PVwiZmxleFwiIHA9ezJ9IG1heFc9XCJjb250YWluZXIubWRcIiB3cmFwPVwid3JhcFwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+IFxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fSBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fSB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhHcm93PXsxfSBtdD17eyBiYXNlOiA0LCBtZDogMCB9fT5cbiAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi93b3Jrc1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgICAgIFdvcmtzXG4gICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuXG4gICAgKVxufVxuICAgICAgICAgIFxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkZsZXgiLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiTWVudSIsIk1lbnVCdXR0b24iLCJNZW51TGlzdCIsIk1lbnVJdGVtIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwYXNzSHJlZiIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});