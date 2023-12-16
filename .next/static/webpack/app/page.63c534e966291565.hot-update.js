"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/Company.js":
/*!**************************************!*\
  !*** ./src/app/component/Company.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice */ \"(app-pages-browser)/./src/app/redux/slice.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ \"(app-pages-browser)/./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Company = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isFilterVisible, setFilterVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.company);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_3__.fetchCompanies)());\n    }, [\n        dispatch\n    ]);\n    const filteredCompanies = companies.filter((company)=>{\n        const nameMatches = company.company_name.toLowerCase().includes(searchTerm.toLowerCase());\n        const statusMatches = statusFilter === \"\" || company.company_status === statusFilter;\n        return nameMatches && statusMatches;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto my-8 rounded p-4 bg-white shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex items-center justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 border rounded mr-4\",\n                        onClick: ()=>setFilterVisibility(!isFilterVisible),\n                        children: isFilterVisible ? \"Hide Filter\" : \"Show Filter\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    isFilterVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"mr-2\",\n                                children: \"Company Name:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"company_name\",\n                                className: \"p-2 border border-gray-300\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"ml-4 mr-2\",\n                                children: \"Status:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"company_status\",\n                                className: \"p-2 border border-gray-300\",\n                                value: statusFilter,\n                                onChange: (e)=>setStatusFilter(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1\",\n                                        children: \"In Progress\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"2\",\n                                        children: \"Done\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full border border-gray-300 rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Company Name\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Company Phone\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"City\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Address 1\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: filteredCompanies.map((company, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"\".concat(index % 2 === 0 ? \"bg-gray-100\" : \"bg-white\", \" border-b\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_phone\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.city\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.address1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_status === \"1\" ? \"In Progress\" : \"Done\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, company.id, true, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex items-center justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    pageCount: Math.ceil(filteredCompanies.length / 5),\n                    pageRangeDisplayed: 3,\n                    marginPagesDisplayed: 1,\n                    containerClassName: \"pagination flex space-x-2\",\n                    previousLabel: \"Prev\",\n                    nextLabel: \"Next\",\n                    activeClassName: \"border text-black p-5 rounded\",\n                    disabledClassName: \"text-gray-300 cursor-not-allowed\",\n                    previousClassName: \"px-2 py-4 border rounded\",\n                    nextClassName: \"px-2 py-4 border rounded\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Company, \"uEL+igF0Myzs2niElikOkEEDZRU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Company;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Company);\nvar _c;\n$RefreshReg$(_c, \"Company\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ0k7QUFDWDtBQUNJO0FBQ0w7QUFFM0MsTUFBTVEsVUFBVTs7SUFDZCxNQUFNQyxXQUFXTix3REFBV0E7SUFDNUIsTUFBTU8sU0FBU0wsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNjLGlCQUFpQkMsb0JBQW9CLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXhELE1BQU0sRUFBRWdCLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdwQix3REFBV0EsQ0FBQyxDQUFDcUIsUUFBVUEsTUFBTUMsT0FBTztJQUV4SXhCLGdEQUFTQSxDQUFDO1FBQ1JPLFNBQVNILDREQUFjQTtJQUN6QixHQUFHO1FBQUNHO0tBQVM7SUFFYixNQUFNa0Isb0JBQW9CVixVQUFVVyxNQUFNLENBQUMsQ0FBQ0Y7UUFDMUMsTUFBTUcsY0FBY0gsUUFBUUksWUFBWSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ3JCLFdBQVdvQixXQUFXO1FBQ3RGLE1BQU1FLGdCQUFnQnBCLGlCQUFpQixNQUFNYSxRQUFRUSxjQUFjLEtBQUtyQjtRQUN4RSxPQUFPZ0IsZUFBZUk7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLFNBQVMsSUFBTXRCLG9CQUFvQixDQUFDRDtrQ0FFbkNBLGtCQUFrQixnQkFBZ0I7Ozs7OztvQkFFcENBLGlDQUNDOzswQ0FDRSw4REFBQ3dCO2dDQUFNSCxXQUFVOzBDQUFPOzs7Ozs7MENBQ3hCLDhEQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTE4sV0FBVTtnQ0FDVk8sT0FBT2hDO2dDQUNQaUMsVUFBVSxDQUFDQyxJQUFNakMsY0FBY2lDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUUvQyw4REFBQ0o7Z0NBQU1ILFdBQVU7MENBQVk7Ozs7OzswQ0FDN0IsOERBQUNXO2dDQUNDTCxNQUFLO2dDQUNMTixXQUFVO2dDQUNWTyxPQUFPOUI7Z0NBQ1ArQixVQUFVLENBQUNDLElBQU0vQixnQkFBZ0IrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7O2tEQUUvQyw4REFBQ0s7d0NBQU9MLE9BQU07a0RBQUc7Ozs7OztrREFDakIsOERBQUNLO3dDQUFPTCxPQUFNO2tEQUFJOzs7Ozs7a0RBQ2xCLDhEQUFDSzt3Q0FBT0wsT0FBTTtrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTFCLDhEQUFDTTtnQkFBTWIsV0FBVTs7a0NBQ2YsOERBQUNjO3dCQUFNZCxXQUFVO2tDQUNmLDRFQUFDZTs7OENBQ0MsOERBQUNDO29DQUFHaEIsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNnQjtvQ0FBR2hCLFdBQVU7OENBQWdCOzs7Ozs7OENBQzlCLDhEQUFDZ0I7b0NBQUdoQixXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ2dCO29DQUFHaEIsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNnQjtvQ0FBR2hCLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEMsOERBQUNpQjtrQ0FDRTFCLGtCQUFrQjJCLEdBQUcsQ0FBQyxDQUFDNUIsU0FBUzZCLHNCQUMvQiw4REFBQ0o7Z0NBQW9CZixXQUFXLEdBQWdELE9BQTdDbUIsUUFBUSxNQUFNLElBQUksZ0JBQWdCLFlBQVc7O2tEQUM5RSw4REFBQ0M7d0NBQUdwQixXQUFVO2tEQUFPVixRQUFRSSxZQUFZOzs7Ozs7a0RBQ3pDLDhEQUFDMEI7d0NBQUdwQixXQUFVO2tEQUFPVixRQUFRK0IsYUFBYTs7Ozs7O2tEQUMxQyw4REFBQ0Q7d0NBQUdwQixXQUFVO2tEQUFPVixRQUFRZ0MsSUFBSTs7Ozs7O2tEQUNqQyw4REFBQ0Y7d0NBQUdwQixXQUFVO2tEQUFPVixRQUFRaUMsUUFBUTs7Ozs7O2tEQUNyQyw4REFBQ0g7d0NBQUdwQixXQUFVO2tEQUNYVixRQUFRUSxjQUFjLEtBQUssTUFBTSxnQkFBZ0I7Ozs7Ozs7K0JBTjdDUixRQUFRa0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFhekIsOERBQUN6QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzdCLHVEQUFhQTtvQkFDWnNELFdBQVdDLEtBQUtDLElBQUksQ0FBQ3BDLGtCQUFrQnFDLE1BQU0sR0FBRztvQkFDaERDLG9CQUFvQjtvQkFDcEJDLHNCQUFzQjtvQkFDdEJDLG9CQUFtQjtvQkFDbkJDLGVBQWM7b0JBQ2RDLFdBQVU7b0JBQ1ZDLGlCQUFnQjtvQkFDaEJDLG1CQUFrQjtvQkFDbEJDLG1CQUFrQjtvQkFDbEJDLGVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBL0ZNakU7O1FBQ2FMLG9EQUFXQTtRQUNiRSxzREFBU0E7UUFNNEVELG9EQUFXQTs7O0tBUjNHSTtBQWlHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9Db21wYW55LmpzP2M3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBmZXRjaENvbXBhbmllcyB9IGZyb20gJy4uL3JlZHV4L3NsaWNlJztcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSAncmVhY3QtcGFnaW5hdGUnO1xyXG5cclxuY29uc3QgQ29tcGFueSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0ZpbHRlclZpc2libGUsIHNldEZpbHRlclZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGNvbXBhbmllcywgc3RhdHVzLCBlcnJvciwgY3VycmVudFBhZ2UsIGxhc3RQYWdlLCB0b3RhbEVudHJpZXMsIG5leHRQYWdlVXJsLCBwcmV2UGFnZVVybCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYW55KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoQ29tcGFuaWVzKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZENvbXBhbmllcyA9IGNvbXBhbmllcy5maWx0ZXIoKGNvbXBhbnkpID0+IHtcclxuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gY29tcGFueS5jb21wYW55X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgY29uc3Qgc3RhdHVzTWF0Y2hlcyA9IHN0YXR1c0ZpbHRlciA9PT0gJycgfHwgY29tcGFueS5jb21wYW55X3N0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xyXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzICYmIHN0YXR1c01hdGNoZXM7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTggcm91bmRlZCBwLTQgYmctd2hpdGUgc2hhZG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgcm91bmRlZCBtci00XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlclZpc2liaWxpdHkoIWlzRmlsdGVyVmlzaWJsZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzRmlsdGVyVmlzaWJsZSA/ICdIaWRlIEZpbHRlcicgOiAnU2hvdyBGaWx0ZXInfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtpc0ZpbHRlclZpc2libGUgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5Db21wYW55IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55X25hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNCBtci0yXCI+U3RhdHVzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiY29tcGFueV9zdGF0dXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzRmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkluIFByb2dyZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Eb25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+Q29tcGFueSBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5Db21wYW55IFBob25lPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5DaXR5PC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5BZGRyZXNzIDE8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2ZpbHRlcmVkQ29tcGFuaWVzLm1hcCgoY29tcGFueSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y29tcGFueS5pZH0gY2xhc3NOYW1lPXtgJHtpbmRleCAlIDIgPT09IDAgPyAnYmctZ3JheS0xMDAnIDogJ2JnLXdoaXRlJ30gYm9yZGVyLWJgfT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfcGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5hZGRyZXNzMX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjb21wYW55LmNvbXBhbnlfc3RhdHVzID09PSAnMScgPyAnSW4gUHJvZ3Jlc3MnIDogJ0RvbmUnfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgIHBhZ2VDb3VudD17TWF0aC5jZWlsKGZpbHRlcmVkQ29tcGFuaWVzLmxlbmd0aCAvIDUpfVxyXG4gICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4gICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezF9XHJcbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJwYWdpbmF0aW9uIGZsZXggc3BhY2UteC0yXCJcclxuICAgICAgICAgIHByZXZpb3VzTGFiZWw9XCJQcmV2XCJcclxuICAgICAgICAgIG5leHRMYWJlbD1cIk5leHRcIlxyXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtYmxhY2sgcC01IHJvdW5kZWRcIlxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZFwiXHJcbiAgICAgICAgICBwcmV2aW91c0NsYXNzTmFtZT1cInB4LTIgcHktNCBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICBuZXh0Q2xhc3NOYW1lPVwicHgtMiBweS00IGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJmZXRjaENvbXBhbmllcyIsIlJlYWN0UGFnaW5hdGUiLCJDb21wYW55IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsImlzRmlsdGVyVmlzaWJsZSIsInNldEZpbHRlclZpc2liaWxpdHkiLCJjb21wYW5pZXMiLCJzdGF0dXMiLCJlcnJvciIsImN1cnJlbnRQYWdlIiwibGFzdFBhZ2UiLCJ0b3RhbEVudHJpZXMiLCJuZXh0UGFnZVVybCIsInByZXZQYWdlVXJsIiwic3RhdGUiLCJjb21wYW55IiwiZmlsdGVyZWRDb21wYW5pZXMiLCJmaWx0ZXIiLCJuYW1lTWF0Y2hlcyIsImNvbXBhbnlfbmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdGF0dXNNYXRjaGVzIiwiY29tcGFueV9zdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWxlY3QiLCJvcHRpb24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaW5kZXgiLCJ0ZCIsImNvbXBhbnlfcGhvbmUiLCJjaXR5IiwiYWRkcmVzczEiLCJpZCIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnZVJhbmdlRGlzcGxheWVkIiwibWFyZ2luUGFnZXNEaXNwbGF5ZWQiLCJjb250YWluZXJDbGFzc05hbWUiLCJwcmV2aW91c0xhYmVsIiwibmV4dExhYmVsIiwiYWN0aXZlQ2xhc3NOYW1lIiwiZGlzYWJsZWRDbGFzc05hbWUiLCJwcmV2aW91c0NsYXNzTmFtZSIsIm5leHRDbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Company.js\n"));

/***/ })

});