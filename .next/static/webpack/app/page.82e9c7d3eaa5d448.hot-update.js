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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// \"use client\";\n// import React, { useState, useEffect } from 'react';\n// import { useDispatch, useSelector } from 'react-redux';\n// import { useRouter } from 'next/navigation';\n// import { fetchCompanies } from '../redux/slice';\n// import ReactPaginate from 'react-paginate';\n// const Company = () => {\n//   const dispatch = useDispatch();\n//   const router = useRouter();\n//   const [searchTerm, setSearchTerm] = useState('');\n//   const [statusFilter, setStatusFilter] = useState('');\n//   const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = useSelector((state) => state.company);\n//   useEffect(() => {\n//     dispatch(fetchCompanies());\n//   }, [dispatch]);\n//   // Filter companies based on search term and status filter\n//   const filteredCompanies = companies.filter((company) => {\n//     const nameMatches = company.company_name.toLowerCase().includes(searchTerm.toLowerCase());\n//     const statusMatches = statusFilter === '' || company.company_status === statusFilter;\n//     return nameMatches && statusMatches;\n//   });\n//   return (\n//     <div className=\"container mx-auto my-8\">\n//     <div className=\"mb-4 flex items-center\">\n//       <label className=\"mr-2\">Company Name:</label>\n//       <input\n//         type=\"text\"\n//         name=\"company_name\"\n//         className=\"p-2 border border-gray-300\"\n//         value={searchTerm}\n//         onChange={(e) => setSearchTerm(e.target.value)}\n//       />\n//       <label className=\"ml-4 mr-2\">Status:</label>\n//       <select\n//         name=\"company_status\"\n//         className=\"p-2 border border-gray-300\"\n//         value={statusFilter}\n//         onChange={(e) => setStatusFilter(e.target.value)}\n//       >\n//         <option value=\"\">All</option>\n//         <option value=\"1\">In Progress</option>\n//         <option value=\"2\">Done</option>\n//       </select>\n//     </div>\n//     <table className=\"min-w-full border border-gray-300 rounded-lg overflow-hidden\">\n//       <thead className=\"bg-gray-200\">\n//         <tr>\n//           <th className=\"p-3 text-left\">Company Name</th>\n//           <th className=\"p-3 text-left\">Phone</th>\n//           <th className=\"p-3 text-left\">City</th>\n//           <th className=\"p-3 text-left\">Address</th>\n//           <th className=\"p-3 text-left\">Status</th>\n//         </tr>\n//       </thead>\n//       <tbody>\n//         {filteredCompanies.map((company, index) => (\n//           <tr key={company.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b`}>\n//             <td className=\"p-3\">{company.company_name}</td>\n//             <td className=\"p-3\">{company.company_phone}</td>\n//             <td className=\"p-3\">{company.city}</td>\n//             <td className=\"p-3\">{company.address1}</td>\n//             <td className=\"p-3\">\n//               {company.company_status === '1' ? 'In Progress' : 'Done'}\n//             </td>\n//           </tr>\n//         ))}\n//       </tbody>\n//     </table>\n//     <div className=\"mt-4 flex items-center justify-between\">\n//       <ReactPaginate\n//         pageCount={Math.ceil(filteredCompanies.length / 5)}\n//         pageRangeDisplayed={3}\n//         marginPagesDisplayed={1}\n//         containerClassName=\"pagination flex space-x-2\" // Use Tailwind CSS classes for pagination styles\n//         previousLabel=\"Previous\"\n//         nextLabel=\"Next\"\n//         activeClassName=\"bg-blue-500 text-white\"\n//         disabledClassName=\"text-gray-300 cursor-not-allowed\"\n//         previousClassName=\"px-3 py-2 border rounded\"\n//         nextClassName=\"px-3 py-2 border rounded\"\n//       />\n//     </div>\n//   </div>\n// )\n// };\n// export default Company;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanMiLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLHNEQUFzRDtBQUN0RCwwREFBMEQ7QUFDMUQsK0NBQStDO0FBQy9DLG1EQUFtRDtBQUNuRCw4Q0FBOEM7QUFFOUMsMEJBQTBCO0FBQzFCLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFFaEMsc0RBQXNEO0FBQ3RELDBEQUEwRDtBQUUxRCwrSUFBK0k7QUFFL0ksc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyxvQkFBb0I7QUFFcEIsK0RBQStEO0FBQy9ELDhEQUE4RDtBQUM5RCxpR0FBaUc7QUFDakcsNEZBQTRGO0FBQzVGLDJDQUEyQztBQUMzQyxRQUFRO0FBRVIsYUFBYTtBQUNiLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0Msc0RBQXNEO0FBQ3RELGVBQWU7QUFDZixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCw2QkFBNkI7QUFDN0IsMERBQTBEO0FBQzFELFdBQVc7QUFDWCxxREFBcUQ7QUFDckQsZ0JBQWdCO0FBQ2hCLGdDQUFnQztBQUNoQyxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDREQUE0RDtBQUM1RCxVQUFVO0FBQ1Ysd0NBQXdDO0FBQ3hDLGlEQUFpRDtBQUNqRCwwQ0FBMEM7QUFDMUMsa0JBQWtCO0FBQ2xCLGFBQWE7QUFFYix1RkFBdUY7QUFDdkYsd0NBQXdDO0FBQ3hDLGVBQWU7QUFDZiw0REFBNEQ7QUFDNUQscURBQXFEO0FBQ3JELG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsc0RBQXNEO0FBQ3RELGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLHVEQUF1RDtBQUN2RCx5R0FBeUc7QUFDekcsOERBQThEO0FBQzlELCtEQUErRDtBQUMvRCxzREFBc0Q7QUFDdEQsMERBQTBEO0FBQzFELG1DQUFtQztBQUNuQywwRUFBMEU7QUFDMUUsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGVBQWU7QUFFZiwrREFBK0Q7QUFDL0QsdUJBQXVCO0FBQ3ZCLDhEQUE4RDtBQUM5RCxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLDJHQUEyRztBQUMzRyxtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLG1EQUFtRDtBQUNuRCwrREFBK0Q7QUFDL0QsdURBQXVEO0FBQ3ZELG1EQUFtRDtBQUNuRCxXQUFXO0FBQ1gsYUFBYTtBQUNiLFdBQVc7QUFDWCxJQUFJO0FBQ0osS0FBSztBQUVMLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9Db21wYW55LmpzP2M3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCI7XHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbi8vIGltcG9ydCB7IGZldGNoQ29tcGFuaWVzIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2UnO1xyXG4vLyBpbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tICdyZWFjdC1wYWdpbmF0ZSc7XHJcblxyXG4vLyBjb25zdCBDb21wYW55ID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4vLyAgIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4vLyAgIGNvbnN0IHsgY29tcGFuaWVzLCBzdGF0dXMsIGVycm9yLCBjdXJyZW50UGFnZSwgbGFzdFBhZ2UsIHRvdGFsRW50cmllcywgbmV4dFBhZ2VVcmwsIHByZXZQYWdlVXJsIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhbnkpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goZmV0Y2hDb21wYW5pZXMoKSk7XHJcbi8vICAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4vLyAgIC8vIEZpbHRlciBjb21wYW5pZXMgYmFzZWQgb24gc2VhcmNoIHRlcm0gYW5kIHN0YXR1cyBmaWx0ZXJcclxuLy8gICBjb25zdCBmaWx0ZXJlZENvbXBhbmllcyA9IGNvbXBhbmllcy5maWx0ZXIoKGNvbXBhbnkpID0+IHtcclxuLy8gICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gY29tcGFueS5jb21wYW55X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xyXG4vLyAgICAgY29uc3Qgc3RhdHVzTWF0Y2hlcyA9IHN0YXR1c0ZpbHRlciA9PT0gJycgfHwgY29tcGFueS5jb21wYW55X3N0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xyXG4vLyAgICAgcmV0dXJuIG5hbWVNYXRjaGVzICYmIHN0YXR1c01hdGNoZXM7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LThcIj5cclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4vLyAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMlwiPkNvbXBhbnkgTmFtZTo8L2xhYmVsPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgbmFtZT1cImNvbXBhbnlfbmFtZVwiXHJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4vLyAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4vLyAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IG1yLTJcIj5TdGF0dXM6PC9sYWJlbD5cclxuLy8gICAgICAgPHNlbGVjdFxyXG4vLyAgICAgICAgIG5hbWU9XCJjb21wYW55X3N0YXR1c1wiXHJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4vLyAgICAgICAgIHZhbHVlPXtzdGF0dXNGaWx0ZXJ9XHJcbi8vICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXNGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4vLyAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SW4gUHJvZ3Jlc3M8L29wdGlvbj5cclxuLy8gICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkRvbmU8L29wdGlvbj5cclxuLy8gICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbi8vICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxyXG4vLyAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+Q29tcGFueSBOYW1lPC90aD5cclxuLy8gICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+UGhvbmU8L3RoPlxyXG4vLyAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5DaXR5PC90aD5cclxuLy8gICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+QWRkcmVzczwvdGg+XHJcbi8vICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlN0YXR1czwvdGg+XHJcbi8vICAgICAgICAgPC90cj5cclxuLy8gICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgIHtmaWx0ZXJlZENvbXBhbmllcy5tYXAoKGNvbXBhbnksIGluZGV4KSA9PiAoXHJcbi8vICAgICAgICAgICA8dHIga2V5PXtjb21wYW55LmlkfSBjbGFzc05hbWU9e2Ake2luZGV4ICUgMiA9PT0gMCA/ICdiZy1ncmF5LTEwMCcgOiAnYmctd2hpdGUnfSBib3JkZXItYmB9PlxyXG4vLyAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbi8vICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5jb21wYW55X3Bob25lfTwvdGQ+XHJcbi8vICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5jaXR5fTwvdGQ+XHJcbi8vICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5hZGRyZXNzMX08L3RkPlxyXG4vLyAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+XHJcbi8vICAgICAgICAgICAgICAge2NvbXBhbnkuY29tcGFueV9zdGF0dXMgPT09ICcxJyA/ICdJbiBQcm9ncmVzcycgOiAnRG9uZSd9XHJcbi8vICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICkpfVxyXG4vLyAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgPC90YWJsZT5cclxuXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbi8vICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbi8vICAgICAgICAgcGFnZUNvdW50PXtNYXRoLmNlaWwoZmlsdGVyZWRDb21wYW5pZXMubGVuZ3RoIC8gNSl9XHJcbi8vICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4vLyAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsxfVxyXG4vLyAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cInBhZ2luYXRpb24gZmxleCBzcGFjZS14LTJcIiAvLyBVc2UgVGFpbHdpbmQgQ1NTIGNsYXNzZXMgZm9yIHBhZ2luYXRpb24gc3R5bGVzXHJcbi8vICAgICAgICAgcHJldmlvdXNMYWJlbD1cIlByZXZpb3VzXCJcclxuLy8gICAgICAgICBuZXh0TGFiZWw9XCJOZXh0XCJcclxuLy8gICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCJcclxuLy8gICAgICAgICBkaXNhYmxlZENsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLW5vdC1hbGxvd2VkXCJcclxuLy8gICAgICAgICBwcmV2aW91c0NsYXNzTmFtZT1cInB4LTMgcHktMiBib3JkZXIgcm91bmRlZFwiXHJcbi8vICAgICAgICAgbmV4dENsYXNzTmFtZT1cInB4LTMgcHktMiBib3JkZXIgcm91bmRlZFwiXHJcbi8vICAgICAgIC8+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gKVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Company.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Company */ \"(app-pages-browser)/./src/app/component/Company.js\");\n/* harmony import */ var _component_Company__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_Company__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_component_Company__WEBPACK_IMPORTED_MODULE_2___default()), {\n            router: router\n        }, void 0, false, {\n            fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\page.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Apex\\\\apex-next\\\\src\\\\app\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QztBQUNGO0FBRTNCLFNBQVNFOztJQUN0QixNQUFNQyxTQUFTSCwwREFBU0E7SUFFeEIscUJBQ0UsOERBQUNJO2tCQUVDLDRFQUFDSCwyREFBT0E7WUFBQ0UsUUFBUUE7Ozs7Ozs7Ozs7O0FBR3ZCO0dBVHdCRDs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi9jb21wb25lbnQvQ29tcGFueSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7LyogUGFzcyByb3V0ZXIgYXMgYSBwcm9wIHRvIHRoZSBDb21wYW55IGNvbXBvbmVudCAqL31cbiAgICAgIDxDb21wYW55IHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQ29tcGFueSIsIkhvbWUiLCJyb3V0ZXIiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});