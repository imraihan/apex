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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice */ \"(app-pages-browser)/./src/app/redux/slice.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ \"(app-pages-browser)/./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Company = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isFilterVisible, setFilterVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.company);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_3__.fetchCompanies)());\n    }, [\n        dispatch\n    ]);\n    // Filter companies based on search term and status filter\n    const filteredCompanies = companies.filter((company)=>{\n        const nameMatches = company.company_name.toLowerCase().includes(searchTerm.toLowerCase());\n        const statusMatches = statusFilter === \"\" || company.company_status === statusFilter;\n        return nameMatches && statusMatches;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto my-8 rounded p-4 bg-white shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex items-center border justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 w-80 rounded mr-4\",\n                        onClick: ()=>setFilterVisibility(!isFilterVisible),\n                        children: isFilterVisible ? \"Hide Filter\" : \"Show Filter\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    isFilterVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"mr-2\",\n                                children: \"Company Name:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"company_name\",\n                                className: \"p-2 border border-gray-300\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"ml-4 mr-2\",\n                                children: \"Status:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"company_status\",\n                                className: \"p-2 border border-gray-300\",\n                                value: statusFilter,\n                                onChange: (e)=>setStatusFilter(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"1\",\n                                        children: \"In Progress\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"2\",\n                                        children: \"Done\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full border border-gray-300 rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Company Name\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Phone\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"City\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"p-3 text-left\",\n                                    children: \"Status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: filteredCompanies.map((company, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"\".concat(index % 2 === 0 ? \"bg-gray-100\" : \"bg-white\", \" border-b\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_phone\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.city\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.address1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-3\",\n                                        children: company.company_status === \"1\" ? \"In Progress\" : \"Done\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, company.id, true, {\n                                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex items-center justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    pageCount: Math.ceil(filteredCompanies.length / 5),\n                    pageRangeDisplayed: 3,\n                    marginPagesDisplayed: 1,\n                    containerClassName: \"pagination flex space-x-2\",\n                    previousLabel: \"Prev\",\n                    nextLabel: \"Next\",\n                    activeClassName: \"border text-black p-5 rounded\",\n                    disabledClassName: \"text-gray-300 cursor-not-allowed\",\n                    previousClassName: \"px-2 py-4 border rounded\",\n                    nextClassName: \"px-2 py-4 border rounded\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\component\\\\Company.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Company, \"uEL+igF0Myzs2niElikOkEEDZRU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Company;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Company);\nvar _c;\n$RefreshReg$(_c, \"Company\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ0k7QUFDWDtBQUNJO0FBQ0w7QUFFM0MsTUFBTVEsVUFBVTs7SUFDZCxNQUFNQyxXQUFXTix3REFBV0E7SUFDNUIsTUFBTU8sU0FBU0wsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNjLGlCQUFpQkMsb0JBQW9CLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXhELE1BQU0sRUFBRWdCLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdwQix3REFBV0EsQ0FBQyxDQUFDcUIsUUFBVUEsTUFBTUMsT0FBTztJQUV4SXhCLGdEQUFTQSxDQUFDO1FBQ1JPLFNBQVNILDREQUFjQTtJQUN6QixHQUFHO1FBQUNHO0tBQVM7SUFFYiwwREFBMEQ7SUFDMUQsTUFBTWtCLG9CQUFvQlYsVUFBVVcsTUFBTSxDQUFDLENBQUNGO1FBQzFDLE1BQU1HLGNBQWNILFFBQVFJLFlBQVksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNyQixXQUFXb0IsV0FBVztRQUN0RixNQUFNRSxnQkFBZ0JwQixpQkFBaUIsTUFBTWEsUUFBUVEsY0FBYyxLQUFLckI7UUFDeEUsT0FBT2dCLGVBQWVJO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDRCxXQUFVO3dCQUNWRSxTQUFTLElBQU10QixvQkFBb0IsQ0FBQ0Q7a0NBRW5DQSxrQkFBa0IsZ0JBQWdCOzs7Ozs7b0JBRXBDQSxpQ0FDQzs7MENBQ0UsOERBQUN3QjtnQ0FBTUgsV0FBVTswQ0FBTzs7Ozs7OzBDQUN4Qiw4REFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xOLFdBQVU7Z0NBQ1ZPLE9BQU9oQztnQ0FDUGlDLFVBQVUsQ0FBQ0MsSUFBTWpDLGNBQWNpQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFL0MsOERBQUNKO2dDQUFNSCxXQUFVOzBDQUFZOzs7Ozs7MENBQzdCLDhEQUFDVztnQ0FDQ0wsTUFBSztnQ0FDTE4sV0FBVTtnQ0FDVk8sT0FBTzlCO2dDQUNQK0IsVUFBVSxDQUFDQyxJQUFNL0IsZ0JBQWdCK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztrREFFL0MsOERBQUNLO3dDQUFPTCxPQUFNO2tEQUFHOzs7Ozs7a0RBQ2pCLDhEQUFDSzt3Q0FBT0wsT0FBTTtrREFBSTs7Ozs7O2tEQUNsQiw4REFBQ0s7d0NBQU9MLE9BQU07a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0xQiw4REFBQ007Z0JBQU1iLFdBQVU7O2tDQUNmLDhEQUFDYzt3QkFBTWQsV0FBVTtrQ0FDZiw0RUFBQ2U7OzhDQUNDLDhEQUFDQztvQ0FBR2hCLFdBQVU7OENBQWdCOzs7Ozs7OENBQzlCLDhEQUFDZ0I7b0NBQUdoQixXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ2dCO29DQUFHaEIsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNnQjtvQ0FBR2hCLFdBQVU7OENBQWdCOzs7Ozs7OENBQzlCLDhEQUFDZ0I7b0NBQUdoQixXQUFVOzhDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xDLDhEQUFDaUI7a0NBQ0UxQixrQkFBa0IyQixHQUFHLENBQUMsQ0FBQzVCLFNBQVM2QixzQkFDL0IsOERBQUNKO2dDQUFvQmYsV0FBVyxHQUFnRCxPQUE3Q21CLFFBQVEsTUFBTSxJQUFJLGdCQUFnQixZQUFXOztrREFDOUUsOERBQUNDO3dDQUFHcEIsV0FBVTtrREFBT1YsUUFBUUksWUFBWTs7Ozs7O2tEQUN6Qyw4REFBQzBCO3dDQUFHcEIsV0FBVTtrREFBT1YsUUFBUStCLGFBQWE7Ozs7OztrREFDMUMsOERBQUNEO3dDQUFHcEIsV0FBVTtrREFBT1YsUUFBUWdDLElBQUk7Ozs7OztrREFDakMsOERBQUNGO3dDQUFHcEIsV0FBVTtrREFBT1YsUUFBUWlDLFFBQVE7Ozs7OztrREFDckMsOERBQUNIO3dDQUFHcEIsV0FBVTtrREFDWFYsUUFBUVEsY0FBYyxLQUFLLE1BQU0sZ0JBQWdCOzs7Ozs7OytCQU43Q1IsUUFBUWtDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBYXpCLDhEQUFDekI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM3Qix1REFBYUE7b0JBQ1pzRCxXQUFXQyxLQUFLQyxJQUFJLENBQUNwQyxrQkFBa0JxQyxNQUFNLEdBQUc7b0JBQ2hEQyxvQkFBb0I7b0JBQ3BCQyxzQkFBc0I7b0JBQ3RCQyxvQkFBbUI7b0JBQ25CQyxlQUFjO29CQUNkQyxXQUFVO29CQUNWQyxpQkFBZ0I7b0JBQ2hCQyxtQkFBa0I7b0JBQ2xCQyxtQkFBa0I7b0JBQ2xCQyxlQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtHQWhHTWpFOztRQUNhTCxvREFBV0E7UUFDYkUsc0RBQVNBO1FBTTRFRCxvREFBV0E7OztLQVIzR0k7QUFrR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvQ29tcGFueS5qcz9jN2NiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgZmV0Y2hDb21wYW5pZXMgfSBmcm9tICcuLi9yZWR1eC9zbGljZSc7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJztcclxuXHJcbmNvbnN0IENvbXBhbnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNGaWx0ZXJWaXNpYmxlLCBzZXRGaWx0ZXJWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBjb21wYW5pZXMsIHN0YXR1cywgZXJyb3IsIGN1cnJlbnRQYWdlLCBsYXN0UGFnZSwgdG90YWxFbnRyaWVzLCBuZXh0UGFnZVVybCwgcHJldlBhZ2VVcmwgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcGFueSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaENvbXBhbmllcygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgLy8gRmlsdGVyIGNvbXBhbmllcyBiYXNlZCBvbiBzZWFyY2ggdGVybSBhbmQgc3RhdHVzIGZpbHRlclxyXG4gIGNvbnN0IGZpbHRlcmVkQ29tcGFuaWVzID0gY29tcGFuaWVzLmZpbHRlcigoY29tcGFueSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSBjb21wYW55LmNvbXBhbnlfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBzdGF0dXNNYXRjaGVzID0gc3RhdHVzRmlsdGVyID09PSAnJyB8fCBjb21wYW55LmNvbXBhbnlfc3RhdHVzID09PSBzdGF0dXNGaWx0ZXI7XHJcbiAgICByZXR1cm4gbmFtZU1hdGNoZXMgJiYgc3RhdHVzTWF0Y2hlcztcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXktOCByb3VuZGVkIHAtNCBiZy13aGl0ZSBzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyIGJvcmRlciBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3LTgwIHJvdW5kZWQgbXItNFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJWaXNpYmlsaXR5KCFpc0ZpbHRlclZpc2libGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0ZpbHRlclZpc2libGUgPyAnSGlkZSBGaWx0ZXInIDogJ1Nob3cgRmlsdGVyJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7aXNGaWx0ZXJWaXNpYmxlICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtci0yXCI+Q29tcGFueSBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29tcGFueV9uYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgbXItMlwiPlN0YXR1czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlfc3RhdHVzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c0ZpbHRlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1c0ZpbHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5JbiBQcm9ncmVzczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+RG9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkNvbXBhbnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+UGhvbmU8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkNpdHk8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2ZpbHRlcmVkQ29tcGFuaWVzLm1hcCgoY29tcGFueSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y29tcGFueS5pZH0gY2xhc3NOYW1lPXtgJHtpbmRleCAlIDIgPT09IDAgPyAnYmctZ3JheS0xMDAnIDogJ2JnLXdoaXRlJ30gYm9yZGVyLWJgfT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfcGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5hZGRyZXNzMX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjb21wYW55LmNvbXBhbnlfc3RhdHVzID09PSAnMScgPyAnSW4gUHJvZ3Jlc3MnIDogJ0RvbmUnfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgIHBhZ2VDb3VudD17TWF0aC5jZWlsKGZpbHRlcmVkQ29tcGFuaWVzLmxlbmd0aCAvIDUpfVxyXG4gICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4gICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezF9XHJcbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJwYWdpbmF0aW9uIGZsZXggc3BhY2UteC0yXCJcclxuICAgICAgICAgIHByZXZpb3VzTGFiZWw9XCJQcmV2XCJcclxuICAgICAgICAgIG5leHRMYWJlbD1cIk5leHRcIlxyXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtYmxhY2sgcC01IHJvdW5kZWRcIlxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZFwiXHJcbiAgICAgICAgICBwcmV2aW91c0NsYXNzTmFtZT1cInB4LTIgcHktNCBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICBuZXh0Q2xhc3NOYW1lPVwicHgtMiBweS00IGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJmZXRjaENvbXBhbmllcyIsIlJlYWN0UGFnaW5hdGUiLCJDb21wYW55IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsImlzRmlsdGVyVmlzaWJsZSIsInNldEZpbHRlclZpc2liaWxpdHkiLCJjb21wYW5pZXMiLCJzdGF0dXMiLCJlcnJvciIsImN1cnJlbnRQYWdlIiwibGFzdFBhZ2UiLCJ0b3RhbEVudHJpZXMiLCJuZXh0UGFnZVVybCIsInByZXZQYWdlVXJsIiwic3RhdGUiLCJjb21wYW55IiwiZmlsdGVyZWRDb21wYW5pZXMiLCJmaWx0ZXIiLCJuYW1lTWF0Y2hlcyIsImNvbXBhbnlfbmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdGF0dXNNYXRjaGVzIiwiY29tcGFueV9zdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWxlY3QiLCJvcHRpb24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaW5kZXgiLCJ0ZCIsImNvbXBhbnlfcGhvbmUiLCJjaXR5IiwiYWRkcmVzczEiLCJpZCIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnZVJhbmdlRGlzcGxheWVkIiwibWFyZ2luUGFnZXNEaXNwbGF5ZWQiLCJjb250YWluZXJDbGFzc05hbWUiLCJwcmV2aW91c0xhYmVsIiwibmV4dExhYmVsIiwiYWN0aXZlQ2xhc3NOYW1lIiwiZGlzYWJsZWRDbGFzc05hbWUiLCJwcmV2aW91c0NsYXNzTmFtZSIsIm5leHRDbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Company.js\n"));

/***/ })

});