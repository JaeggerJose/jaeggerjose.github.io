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

/***/ "./components/layouts/theme-toggle-button.js":
/*!***************************************************!*\
  !*** ./components/layouts/theme-toggle-button.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ThemeToggleButton = ()=>{\n    _s();\n    const { toggleColorMode } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        wait: true,\n        initial: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                display: \"inline-block\"\n            },\n            initial: {\n                y: 0,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: 0,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"purple\", \"orange\"),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, void 0, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, void 0, void 0)),\n                onClick: toggleColorMode\n            }, void 0, false, {\n                fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/layouts/theme-toggle-button.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"light\", \"dark\"), false, {\n            fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/layouts/theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/minghsuan/Documents/jaeggerjose.github.io/components/layouts/theme-toggle-button.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ThemeToggleButton, \"nOxe+ebHCqC5bMQGsSWeuYX/oOQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNzQjtBQUN6QjtBQUVyRCxNQUFNTyxvQkFBb0I7O0lBQ3RCLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdMLDhEQUFZQTtJQUN4QyxxQkFDSSw4REFBQ0gsMERBQWVBO1FBQUNTLElBQUk7UUFBQ0MsU0FBUztrQkFDakMsNEVBQUNULGlEQUFNQSxDQUFDVSxHQUFHO1lBQ1RDLE9BQU87Z0JBQUVDLFNBQVM7WUFBZTtZQUVqQ0gsU0FBUztnQkFBRUksR0FBRztnQkFBR0MsU0FBUztZQUFFO1lBQzVCQyxTQUFTO2dCQUFFRixHQUFHO2dCQUFHQyxTQUFTO1lBQUU7WUFDNUJFLE1BQU07Z0JBQUVILEdBQUc7Z0JBQUdDLFNBQVM7WUFBRTtZQUN6QkcsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO3NCQUVwQiw0RUFBQ2pCLHdEQUFVQTtnQkFBQ2tCLGNBQVc7Z0JBQ25CQyxhQUFhakIsbUVBQWlCQSxDQUFDLFVBQVU7Z0JBQ3pDa0IsTUFBTWxCLG1FQUFpQkEsZUFBQyw4REFBQ0Usc0RBQVFBLG9EQUFJLDhEQUFDRCxxREFBT0E7Z0JBQzdDa0IsU0FBU2Y7Ozs7OztXQVRoQkosbUVBQWlCQSxDQUFDLFNBQVM7Ozs7Ozs7Ozs7QUFleEM7R0FyQk1HOztRQUMwQkosMERBQVlBO1FBSy9CQywrREFBaUJBO1FBT0dBLCtEQUFpQkE7UUFDeEJBLCtEQUFpQkE7OztLQWRyQ0c7QUFzQk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcz84YmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5cbmNvbnN0IFRoZW1lVG9nZ2xlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2Ugd2FpdCBpbml0aWFsPXtmYWxzZX0+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxuICAgICAgICBrZXk9e3VzZUNvbG9yTW9kZVZhbHVlKCdsaWdodCcsICdkYXJrJyl9XG4gICAgICAgIGluaXRpYWw9e3sgeTogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyB5OiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17dXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZScsICdvcmFuZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uLz4sIDxTdW5JY29uLz4pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbjsiXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJ0b2dnbGVDb2xvck1vZGUiLCJ3YWl0IiwiaW5pdGlhbCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/theme-toggle-button.js\n"));

/***/ })

});