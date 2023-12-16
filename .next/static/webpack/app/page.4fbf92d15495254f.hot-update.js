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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice */ \"(app-pages-browser)/./src/app/redux/slice.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ \"(app-pages-browser)/./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Company = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.company);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_3__.fetchCompanies)());\n    }, [\n        dispatch\n    ]);\n    // Filter companies based on search term and status filter\n    const filteredCompanies = companies.filter((company)=>{\n        const nameMatches = company.company_name.toLowerCase().includes(searchTerm.toLowerCase());\n        const statusMatches = statusFilter === \"\" || company.company_status === statusFilter;\n        return nameMatches && statusMatches;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto my-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mr-2\",\n                        children: \"Company Name:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"company_name\",\n                        className: \"p-2 border border-gray-300\",\n                        value: searchTerm,\n                        onChange: (e)=>setSearchTerm(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"ml-4 mr-2\",\n                        children: \"Status:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"company_status\",\n                        className: \"p-2 border border-gray-300\",\n                        value: statusFilter,\n                        onChange: (e)=>setStatusFilter(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1\",\n                                children: \"In Progress\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"2\",\n                                children: \"Done\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full border border-gray-300 rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Company Name\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Phone\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"City\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: filteredCompanies.map((company)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-white border-b\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_phone\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.city\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.address1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_status === \"1\" ? \"In Progress\" : \"Done\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, company.id, true, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    pageCount: Math.ceil(filteredCompanies.length / 5),\n                    pageRangeDisplayed: 3,\n                    marginPagesDisplayed: 1,\n                    containerClassName: \"pagination\",\n                    previousLabel: \"Previous\",\n                    nextLabel: \"Next\",\n                    activeClassName: \"active\",\n                    disabledClassName: \"disabled\",\n                    previousClassName: \"prev \".concat(prevPageUrl ? \"\" : \"disabled\"),\n                    nextClassName: \"next \".concat(nextPageUrl ? \"\" : \"disabled\")\n                }, void 0, false, {\n                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Company, \"ELAHTj5AD8Rr7Xwlt6rVUjjT8MQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Company;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Company);\nvar _c;\n$RefreshReg$(_c, \"Company\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR21EO0FBQ0k7QUFDWDtBQUNJO0FBQ0w7QUFFM0MsTUFBTVEsVUFBVTs7SUFDZCxNQUFNQyxXQUFXTix3REFBV0E7SUFDNUIsTUFBTU8sU0FBU0wsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNLEVBQUVjLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdsQix3REFBV0EsQ0FBQyxDQUFDbUIsUUFBVUEsTUFBTUMsT0FBTztJQUV4SXRCLGdEQUFTQSxDQUFDO1FBQ1JPLFNBQVNILDREQUFjQTtJQUN6QixHQUFHO1FBQUNHO0tBQVM7SUFFYiwwREFBMEQ7SUFDMUQsTUFBTWdCLG9CQUFvQlYsVUFBVVcsTUFBTSxDQUFDLENBQUNGO1FBQzFDLE1BQU1HLGNBQWNILFFBQVFJLFlBQVksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNuQixXQUFXa0IsV0FBVztRQUN0RixNQUFNRSxnQkFBZ0JsQixpQkFBaUIsTUFBTVcsUUFBUVEsY0FBYyxLQUFLbkI7UUFDeEUsT0FBT2MsZUFBZUk7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU1ELFdBQVU7a0NBQU87Ozs7OztrQ0FDeEIsOERBQUNFO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMSixXQUFVO3dCQUNWSyxPQUFPNUI7d0JBQ1A2QixVQUFVLENBQUNDLElBQU03QixjQUFjNkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRS9DLDhEQUFDSjt3QkFBTUQsV0FBVTtrQ0FBWTs7Ozs7O2tDQUM3Qiw4REFBQ1M7d0JBQ0NMLE1BQUs7d0JBQ0xKLFdBQVU7d0JBQ1ZLLE9BQU8xQjt3QkFDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLGdCQUFnQjJCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7MENBRS9DLDhEQUFDSztnQ0FBT0wsT0FBTTswQ0FBRzs7Ozs7OzBDQUNqQiw4REFBQ0s7Z0NBQU9MLE9BQU07MENBQUk7Ozs7OzswQ0FDbEIsOERBQUNLO2dDQUFPTCxPQUFNOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRCLDhEQUFDTTtnQkFBTVgsV0FBVTs7a0NBQ2YsOERBQUNZO3dCQUFNWixXQUFVO2tDQUNmLDRFQUFDYTs7OENBQ0MsOERBQUNDO29DQUFHZCxXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQWdCOzs7Ozs7OENBQzlCLDhEQUFDYztvQ0FBR2QsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNjO29DQUFHZCxXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEMsOERBQUNlO2tDQUNFeEIsa0JBQWtCeUIsR0FBRyxDQUFDLENBQUMxQix3QkFDdEIsOERBQUN1QjtnQ0FBb0JiLFdBQVU7O2tEQUM3Qiw4REFBQ2lCO3dDQUFHakIsV0FBVTtrREFBT1YsUUFBUUksWUFBWTs7Ozs7O2tEQUN6Qyw4REFBQ3VCO3dDQUFHakIsV0FBVTtrREFBT1YsUUFBUTRCLGFBQWE7Ozs7OztrREFDMUMsOERBQUNEO3dDQUFHakIsV0FBVTtrREFBT1YsUUFBUTZCLElBQUk7Ozs7OztrREFDakMsOERBQUNGO3dDQUFHakIsV0FBVTtrREFBT1YsUUFBUThCLFFBQVE7Ozs7OztrREFDckMsOERBQUNIO3dDQUFHakIsV0FBVTtrREFDWFYsUUFBUVEsY0FBYyxLQUFLLE1BQU0sZ0JBQWdCOzs7Ozs7OytCQU43Q1IsUUFBUStCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBYXpCLDhEQUFDdEI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUMzQix1REFBYUE7b0JBQ1ppRCxXQUFXQyxLQUFLQyxJQUFJLENBQUNqQyxrQkFBa0JrQyxNQUFNLEdBQUc7b0JBQ2hEQyxvQkFBb0I7b0JBQ3BCQyxzQkFBc0I7b0JBQ3RCQyxvQkFBbUI7b0JBQ25CQyxlQUFjO29CQUNkQyxXQUFVO29CQUNWQyxpQkFBZ0I7b0JBQ2hCQyxtQkFBa0I7b0JBQ2xCQyxtQkFBbUIsUUFBc0MsT0FBOUI3QyxjQUFjLEtBQUs7b0JBQzlDOEMsZUFBZSxRQUFzQyxPQUE5Qi9DLGNBQWMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEQ7R0FyRk1iOztRQUNhTCxvREFBV0E7UUFDYkUsc0RBQVNBO1FBSzRFRCxvREFBV0E7OztLQVAzR0k7QUF1Rk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvQ29tcGFueS5qcz9jN2NiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IGZldGNoQ29tcGFuaWVzIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2UnO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tICdyZWFjdC1wYWdpbmF0ZSc7XHJcblxyXG5jb25zdCBDb21wYW55ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgY29tcGFuaWVzLCBzdGF0dXMsIGVycm9yLCBjdXJyZW50UGFnZSwgbGFzdFBhZ2UsIHRvdGFsRW50cmllcywgbmV4dFBhZ2VVcmwsIHByZXZQYWdlVXJsIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhbnkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDb21wYW5pZXMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8vIEZpbHRlciBjb21wYW5pZXMgYmFzZWQgb24gc2VhcmNoIHRlcm0gYW5kIHN0YXR1cyBmaWx0ZXJcclxuICBjb25zdCBmaWx0ZXJlZENvbXBhbmllcyA9IGNvbXBhbmllcy5maWx0ZXIoKGNvbXBhbnkpID0+IHtcclxuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gY29tcGFueS5jb21wYW55X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgY29uc3Qgc3RhdHVzTWF0Y2hlcyA9IHN0YXR1c0ZpbHRlciA9PT0gJycgfHwgY29tcGFueS5jb21wYW55X3N0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xyXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzICYmIHN0YXR1c01hdGNoZXM7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5Db21wYW55IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb21wYW55X25hbWVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgbXItMlwiPlN0YXR1czo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIG5hbWU9XCJjb21wYW55X3N0YXR1c1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICB2YWx1ZT17c3RhdHVzRmlsdGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXNGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SW4gUHJvZ3Jlc3M8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+RG9uZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5Db21wYW55IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlBob25lPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5DaXR5PC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5BZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtmaWx0ZXJlZENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y29tcGFueS5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfcGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5hZGRyZXNzMX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjb21wYW55LmNvbXBhbnlfc3RhdHVzID09PSAnMScgPyAnSW4gUHJvZ3Jlc3MnIDogJ0RvbmUnfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICBwYWdlQ291bnQ9e01hdGguY2VpbChmaWx0ZXJlZENvbXBhbmllcy5sZW5ndGggLyA1KX1cclxuICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17M31cclxuICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsxfVxyXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwicGFnaW5hdGlvblwiXHJcbiAgICAgICAgICBwcmV2aW91c0xhYmVsPVwiUHJldmlvdXNcIlxyXG4gICAgICAgICAgbmV4dExhYmVsPVwiTmV4dFwiXHJcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzc05hbWU9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBwcmV2aW91c0NsYXNzTmFtZT17YHByZXYgJHtwcmV2UGFnZVVybCA/ICcnIDogJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgICAgbmV4dENsYXNzTmFtZT17YG5leHQgJHtuZXh0UGFnZVVybCA/ICcnIDogJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJmZXRjaENvbXBhbmllcyIsIlJlYWN0UGFnaW5hdGUiLCJDb21wYW55IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsImNvbXBhbmllcyIsInN0YXR1cyIsImVycm9yIiwiY3VycmVudFBhZ2UiLCJsYXN0UGFnZSIsInRvdGFsRW50cmllcyIsIm5leHRQYWdlVXJsIiwicHJldlBhZ2VVcmwiLCJzdGF0ZSIsImNvbXBhbnkiLCJmaWx0ZXJlZENvbXBhbmllcyIsImZpbHRlciIsIm5hbWVNYXRjaGVzIiwiY29tcGFueV9uYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0YXR1c01hdGNoZXMiLCJjb21wYW55X3N0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInRkIiwiY29tcGFueV9waG9uZSIsImNpdHkiLCJhZGRyZXNzMSIsImlkIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdlUmFuZ2VEaXNwbGF5ZWQiLCJtYXJnaW5QYWdlc0Rpc3BsYXllZCIsImNvbnRhaW5lckNsYXNzTmFtZSIsInByZXZpb3VzTGFiZWwiLCJuZXh0TGFiZWwiLCJhY3RpdmVDbGFzc05hbWUiLCJkaXNhYmxlZENsYXNzTmFtZSIsInByZXZpb3VzQ2xhc3NOYW1lIiwibmV4dENsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Company.js\n"));

/***/ })

});