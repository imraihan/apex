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

eval(__webpack_require__.ts("/* __next_internal_client_entry_do_not_use__  auto */  // import React, { useState, useEffect } from 'react';\n // import { useDispatch, useSelector } from 'react-redux';\n // import { fetchCompanies } from '../redux/slice';\n // const Company = () => {\n //   const dispatch = useDispatch();\n //   const { companies, status, error, currentPage, lastPage, totalEntries } = useSelector((state) => state.company);\n //   const [filter, setFilter] = useState({ company_status: '', company_name: '' });\n //   useEffect(() => {\n //     if (status === 'idle') {\n //       dispatch(fetchCompanies({ ...filter, page: 1 }));\n //     }\n //   }, [status, dispatch, filter]);\n //   const handleFilterChange = (e) => {\n //     setFilter({ ...filter, [e.target.name]: e.target.value });\n //   };\n //   const handlePageChange = (newPage) => {\n //     dispatch(fetchCompanies({ ...filter, page: newPage }));\n //   };\n //   const handleNextPage = () => {\n //     if (currentPage < lastPage) {\n //       handlePageChange(currentPage + 1);\n //     }\n //   };\n //   const handlePrevPage = () => {\n //     if (currentPage > 1) {\n //       handlePageChange(currentPage - 1);\n //     }\n //   };\n //   if (status === 'loading') {\n //     return <div>Loading...</div>;\n //   }\n //   if (status === 'failed') {\n //     return <div>Error: {error}</div>;\n //   }\n //   return (\n //     <div className=\"container mx-auto my-8\">\n //       {/* Filter Section */}\n //       <div className=\"mb-4 flex items-center\">\n //         <label className=\"mr-2\">Company Name:</label>\n //         <input\n //           type=\"text\"\n //           name=\"company_name\"\n //           value={filter.company_name}\n //           onChange={handleFilterChange}\n //           className=\"p-2 border border-gray-300\"\n //         />\n //         <label className=\"ml-4 mr-2\">Status:</label>\n //         <select\n //           name=\"company_status\"\n //           value={filter.company_status}\n //           onChange={handleFilterChange}\n //           className=\"p-2 border border-gray-300\"\n //         >\n //           <option value=\"\">All</option>\n //           <option value=\"1\">In Progress</option>\n //           {/* Add other status options as needed */}\n //         </select>\n //       </div>\n //       {/* Table Section */}\n //       <table className=\"min-w-full border border-gray-300 rounded-lg overflow-hidden\">\n //         <thead className=\"bg-gray-200\">\n //           <tr>\n //             <th className=\"p-3 text-left\">Company Name</th>\n //             <th className=\"p-3 text-left\">Phone</th>\n //             <th className=\"p-3 text-left\">City</th>\n //             <th className=\"p-3 text-left\">Address</th>\n //             <th className=\"p-3 text-left\">Status</th>\n //           </tr>\n //         </thead>\n //         <tbody>\n //           {companies.map((company) => (\n //             <tr key={company.id} className=\"bg-white border-b\">\n //               <td className=\"p-3\">{company.company_name}</td>\n //               <td className=\"p-3\">{company.company_phone}</td>\n //               <td className=\"p-3\">{company.city}</td>\n //               <td className=\"p-3\">{company.address1}</td>\n //               <td className=\"p-3\">\n //                 {company.company_status === '1' ? 'In Progress' : 'Other Status'}\n //               </td>\n //             </tr>\n //           ))}\n //         </tbody>\n //       </table>\n //       {/* Pagination Section */}\n //       <div className=\"mt-4 flex items-center justify-between\">\n //         <div>\n //           Showing {((currentPage - 1) * 5) + 1} to {Math.min(currentPage * 5, totalEntries)} of {totalEntries} entries\n //         </div>\n //         <div className=\"flex\">\n //           <button\n //             className=\"px-3 py-1 mr-2 border border-gray-300 rounded\"\n //             disabled={currentPage === 1}\n //             onClick={handlePrevPage}\n //           >\n //             Prev\n //           </button>\n //           <button\n //             className=\"px-3 py-1 border border-gray-300 rounded\"\n //             disabled={currentPage === lastPage}\n //             onClick={handleNextPage}\n //           >\n //             Next\n //           </button>\n //         </div>\n //       </div>\n //     </div>\n //   );\n // };\n // export default Company;\n // import React, { useState, useEffect } from 'react';\n // import { useDispatch, useSelector } from 'react-redux';\n // import { useRouter } from 'next/navigation';\n // import { fetchCompanies } from '../redux/slice';\n // import ReactPaginate from 'react-paginate';\n // const Company = () => {\n //     const dispatch = useDispatch();\n //     const router = useRouter();\n //     const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = useSelector((state) => state.company);\n //     // Provide default values using optional chaining\n //     const companyStatus = router.query?.company_status || '';\n //     const companyName = router.query?.company_name || '';\n //     const [filter, setFilter] = useState({ company_status: companyStatus, company_name: companyName });\n //     useEffect(() => {\n //       // Update filter state when query parameters change\n //       setFilter({ company_status: companyStatus, company_name: companyName });\n //     }, [companyStatus, companyName]);\n //     useEffect(() => {\n //       // Fetch data when filter state changes\n //       dispatch(fetchCompanies({ ...filter, page: 1 }));\n //     }, [filter, dispatch]);\n //     const handleFilterChange = (e) => {\n //       setFilter({ ...filter, [e.target.name]: e.target.value });\n //     };\n //     const handlePageChange = (selectedPage) => {\n //       // Update URL with new page number and filter parameters\n //       router.push({\n //         pathname: router.pathname,\n //         query: {\n //           ...router.query,\n //           company_status: filter.company_status,\n //           company_name: filter.company_name,\n //           page: selectedPage.selected + 1,\n //         },\n //       });\n //     };\n //     if (status === 'loading') {\n //       return <div>Loading...</div>;\n //     }\n //     if (status === 'failed') {\n //       return <div>Error: {error}</div>;\n //     }\n //     return (\n //       <div className=\"container mx-auto my-8\">\n //         {/* Filter Section */}\n //         <div className=\"mb-4 flex items-center\">\n //           <label className=\"mr-2\">Company Name:</label>\n //           <input\n //             type=\"text\"\n //             name=\"company_name\"\n //             value={filter.company_name}\n //             onChange={handleFilterChange}\n //             className=\"p-2 border border-gray-300\"\n //           />\n //           <label className=\"ml-4 mr-2\">Status:</label>\n //           <select\n //             name=\"company_status\"\n //             value={filter.company_status}\n //             onChange={handleFilterChange}\n //             className=\"p-2 border border-gray-300\"\n //           >\n //             <option value=\"\">All</option>\n //             <option value=\"1\">In Progress</option>\n //             {/* Add other status options as needed */}\n //           </select>\n //         </div>\n //         {/* Table Section */}\n //         <table className=\"min-w-full border border-gray-300 rounded-lg overflow-hidden\">\n //           <thead className=\"bg-gray-200\">\n //             <tr>\n //               <th className=\"p-3 text-left\">Company Name</th>\n //               <th className=\"p-3 text-left\">Phone</th>\n //               <th className=\"p-3 text-left\">City</th>\n //               <th className=\"p-3 text-left\">Address</th>\n //               <th className=\"p-3 text-left\">Status</th>\n //             </tr>\n //           </thead>\n //           <tbody>\n //             {companies.map((company) => (\n //               <tr key={company.id} className=\"bg-white border-b\">\n //                 <td className=\"p-3\">{company.company_name}</td>\n //                 <td className=\"p-3\">{company.company_phone}</td>\n //                 <td className=\"p-3\">{company.city}</td>\n //                 <td className=\"p-3\">{company.address1}</td>\n //                 <td className=\"p-3\">\n //                   {company.company_status === '1' ? 'In Progress' : 'Other Status'}\n //                 </td>\n //               </tr>\n //             ))}\n //           </tbody>\n //         </table>\n //         {/* Pagination Section */}\n //         <div className=\"mt-4 flex items-center justify-between\">\n //           <div>\n //             {totalEntries\n //               ? `Showing ${Math.min((currentPage - 1) * 5 + 1, totalEntries)} to ${Math.min(currentPage * 5, totalEntries)} of ${totalEntries} entries`\n //               : 'No entries found'}\n //           </div>\n //           <ReactPaginate\n //             pageCount={lastPage}\n //             pageRangeDisplayed={3}\n //             marginPagesDisplayed={1}\n //             onPageChange={handlePageChange}\n //             containerClassName=\"pagination\"\n //             previousLabel=\"Previous\"\n //             nextLabel=\"Next\"\n //             activeClassName=\"active\"\n //             disabledClassName=\"disabled\"\n //             previousClassName={`prev ${prevPageUrl ? '' : 'disabled'}`}\n //             nextClassName={`next ${nextPageUrl ? '' : 'disabled'}`}\n //           />\n //         </div>\n //       </div>\n //     );\n //   };\n //   export default Company;\n // Import necessary modules\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanMiLCJtYXBwaW5ncyI6InNEQUFBLENBQ0Esc0RBQXNEO0NBQ3RELDBEQUEwRDtDQUMxRCxtREFBbUQ7Q0FFbkQsMEJBQTBCO0NBQzFCLG9DQUFvQztDQUNwQyxxSEFBcUg7Q0FDckgsb0ZBQW9GO0NBRXBGLHNCQUFzQjtDQUN0QiwrQkFBK0I7Q0FDL0IsMERBQTBEO0NBQzFELFFBQVE7Q0FDUixvQ0FBb0M7Q0FFcEMsd0NBQXdDO0NBQ3hDLGlFQUFpRTtDQUNqRSxPQUFPO0NBRVAsNENBQTRDO0NBQzVDLDhEQUE4RDtDQUM5RCxPQUFPO0NBRVAsbUNBQW1DO0NBQ25DLG9DQUFvQztDQUNwQywyQ0FBMkM7Q0FDM0MsUUFBUTtDQUNSLE9BQU87Q0FFUCxtQ0FBbUM7Q0FDbkMsNkJBQTZCO0NBQzdCLDJDQUEyQztDQUMzQyxRQUFRO0NBQ1IsT0FBTztDQUVQLGdDQUFnQztDQUNoQyxvQ0FBb0M7Q0FDcEMsTUFBTTtDQUVOLCtCQUErQjtDQUMvQix3Q0FBd0M7Q0FDeEMsTUFBTTtDQUVOLGFBQWE7Q0FDYiwrQ0FBK0M7Q0FDL0MsK0JBQStCO0NBQy9CLGlEQUFpRDtDQUNqRCx3REFBd0Q7Q0FDeEQsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixnQ0FBZ0M7Q0FDaEMsd0NBQXdDO0NBQ3hDLDBDQUEwQztDQUMxQyxtREFBbUQ7Q0FDbkQsYUFBYTtDQUNiLHVEQUF1RDtDQUN2RCxrQkFBa0I7Q0FDbEIsa0NBQWtDO0NBQ2xDLDBDQUEwQztDQUMxQywwQ0FBMEM7Q0FDMUMsbURBQW1EO0NBQ25ELFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsbURBQW1EO0NBQ25ELHVEQUF1RDtDQUN2RCxvQkFBb0I7Q0FDcEIsZUFBZTtDQUVmLDhCQUE4QjtDQUM5Qix5RkFBeUY7Q0FDekYsMENBQTBDO0NBQzFDLGlCQUFpQjtDQUNqQiw4REFBOEQ7Q0FDOUQsdURBQXVEO0NBQ3ZELHNEQUFzRDtDQUN0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bkIsMkJBQTJCO0NBQzNCLG1DQUFtQztDQUNuQyxxQ0FBcUM7Q0FDckMsdUNBQXVDO0NBQ3ZDLDhDQUE4QztDQUM5Qyw4Q0FBOEM7Q0FDOUMsdUNBQXVDO0NBQ3ZDLCtCQUErQjtDQUMvQix1Q0FBdUM7Q0FDdkMsMkNBQTJDO0NBQzNDLDBFQUEwRTtDQUMxRSxzRUFBc0U7Q0FDdEUsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsU0FBUztDQUNULE9BQU87Q0FFUCw0QkFBNEI7Q0FFNUIsMkJBQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0NvbXBhbnkuanM/YzdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IHsgZmV0Y2hDb21wYW5pZXMgfSBmcm9tICcuLi9yZWR1eC9zbGljZSc7XHJcblxyXG4vLyBjb25zdCBDb21wYW55ID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuLy8gICBjb25zdCB7IGNvbXBhbmllcywgc3RhdHVzLCBlcnJvciwgY3VycmVudFBhZ2UsIGxhc3RQYWdlLCB0b3RhbEVudHJpZXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcGFueSk7XHJcbi8vICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHsgY29tcGFueV9zdGF0dXM6ICcnLCBjb21wYW55X25hbWU6ICcnIH0pO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XHJcbi8vICAgICAgIGRpc3BhdGNoKGZldGNoQ29tcGFuaWVzKHsgLi4uZmlsdGVyLCBwYWdlOiAxIH0pKTtcclxuLy8gICAgIH1cclxuLy8gICB9LCBbc3RhdHVzLCBkaXNwYXRjaCwgZmlsdGVyXSk7XHJcblxyXG4vLyAgIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IChlKSA9PiB7XHJcbi8vICAgICBzZXRGaWx0ZXIoeyAuLi5maWx0ZXIsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChuZXdQYWdlKSA9PiB7XHJcbi8vICAgICBkaXNwYXRjaChmZXRjaENvbXBhbmllcyh7IC4uLmZpbHRlciwgcGFnZTogbmV3UGFnZSB9KSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICBpZiAoY3VycmVudFBhZ2UgPCBsYXN0UGFnZSkge1xyXG4vLyAgICAgICBoYW5kbGVQYWdlQ2hhbmdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlUHJldlBhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbi8vICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbi8vICAgfVxyXG5cclxuLy8gICBpZiAoc3RhdHVzID09PSAnZmFpbGVkJykge1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBteS04XCI+XHJcbi8vICAgICAgIHsvKiBGaWx0ZXIgU2VjdGlvbiAqL31cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbi8vICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5Db21wYW55IE5hbWU6PC9sYWJlbD5cclxuLy8gICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgIG5hbWU9XCJjb21wYW55X25hbWVcIlxyXG4vLyAgICAgICAgICAgdmFsdWU9e2ZpbHRlci5jb21wYW55X25hbWV9XHJcbi8vICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgbXItMlwiPlN0YXR1czo8L2xhYmVsPlxyXG4vLyAgICAgICAgIDxzZWxlY3RcclxuLy8gICAgICAgICAgIG5hbWU9XCJjb21wYW55X3N0YXR1c1wiXHJcbi8vICAgICAgICAgICB2YWx1ZT17ZmlsdGVyLmNvbXBhbnlfc3RhdHVzfVxyXG4vLyAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkluIFByb2dyZXNzPC9vcHRpb24+XHJcbi8vICAgICAgICAgICB7LyogQWRkIG90aGVyIHN0YXR1cyBvcHRpb25zIGFzIG5lZWRlZCAqL31cclxuLy8gICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICB7LyogVGFibGUgU2VjdGlvbiAqL31cclxuLy8gICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxyXG4vLyAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxyXG4vLyAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkNvbXBhbnkgTmFtZTwvdGg+XHJcbi8vICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+UGhvbmU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkNpdHk8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkFkZHJlc3M8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlN0YXR1czwvdGg+XHJcbi8vICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgIDwvdGhlYWQ+XHJcbi8vICAgICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IChcclxuLy8gICAgICAgICAgICAgPHRyIGtleT17Y29tcGFueS5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWJcIj5cclxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfcGhvbmV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuY2l0eX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5hZGRyZXNzMX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgIHtjb21wYW55LmNvbXBhbnlfc3RhdHVzID09PSAnMScgPyAnSW4gUHJvZ3Jlc3MnIDogJ090aGVyIFN0YXR1cyd9XHJcbi8vICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgIDwvdGFibGU+XHJcblxyXG4vLyAgICAgICB7LyogUGFnaW5hdGlvbiBTZWN0aW9uICovfVxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgIFNob3dpbmcgeygoY3VycmVudFBhZ2UgLSAxKSAqIDUpICsgMX0gdG8ge01hdGgubWluKGN1cnJlbnRQYWdlICogNSwgdG90YWxFbnRyaWVzKX0gb2Yge3RvdGFsRW50cmllc30gZW50cmllc1xyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4vLyAgICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgbXItMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4vLyAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZQYWdlfVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBQcmV2XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXHJcbi8vICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbGFzdFBhZ2V9XHJcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBOZXh0XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG4vLyBpbXBvcnQgeyBmZXRjaENvbXBhbmllcyB9IGZyb20gJy4uL3JlZHV4L3NsaWNlJztcclxuLy8gaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSAncmVhY3QtcGFnaW5hdGUnO1xyXG5cclxuXHJcbi8vIGNvbnN0IENvbXBhbnkgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbi8vICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuLy8gICAgIGNvbnN0IHsgY29tcGFuaWVzLCBzdGF0dXMsIGVycm9yLCBjdXJyZW50UGFnZSwgbGFzdFBhZ2UsIHRvdGFsRW50cmllcywgbmV4dFBhZ2VVcmwsIHByZXZQYWdlVXJsIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhbnkpO1xyXG4gIFxyXG4vLyAgICAgLy8gUHJvdmlkZSBkZWZhdWx0IHZhbHVlcyB1c2luZyBvcHRpb25hbCBjaGFpbmluZ1xyXG4vLyAgICAgY29uc3QgY29tcGFueVN0YXR1cyA9IHJvdXRlci5xdWVyeT8uY29tcGFueV9zdGF0dXMgfHwgJyc7XHJcbi8vICAgICBjb25zdCBjb21wYW55TmFtZSA9IHJvdXRlci5xdWVyeT8uY29tcGFueV9uYW1lIHx8ICcnO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHsgY29tcGFueV9zdGF0dXM6IGNvbXBhbnlTdGF0dXMsIGNvbXBhbnlfbmFtZTogY29tcGFueU5hbWUgfSk7XHJcbiAgXHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAvLyBVcGRhdGUgZmlsdGVyIHN0YXRlIHdoZW4gcXVlcnkgcGFyYW1ldGVycyBjaGFuZ2VcclxuLy8gICAgICAgc2V0RmlsdGVyKHsgY29tcGFueV9zdGF0dXM6IGNvbXBhbnlTdGF0dXMsIGNvbXBhbnlfbmFtZTogY29tcGFueU5hbWUgfSk7XHJcbi8vICAgICB9LCBbY29tcGFueVN0YXR1cywgY29tcGFueU5hbWVdKTtcclxuICBcclxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgIC8vIEZldGNoIGRhdGEgd2hlbiBmaWx0ZXIgc3RhdGUgY2hhbmdlc1xyXG4vLyAgICAgICBkaXNwYXRjaChmZXRjaENvbXBhbmllcyh7IC4uLmZpbHRlciwgcGFnZTogMSB9KSk7XHJcbi8vICAgICB9LCBbZmlsdGVyLCBkaXNwYXRjaF0pO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gKGUpID0+IHtcclxuLy8gICAgICAgc2V0RmlsdGVyKHsgLi4uZmlsdGVyLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4vLyAgICAgfTtcclxuICBcclxuLy8gICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoc2VsZWN0ZWRQYWdlKSA9PiB7XHJcbi8vICAgICAgIC8vIFVwZGF0ZSBVUkwgd2l0aCBuZXcgcGFnZSBudW1iZXIgYW5kIGZpbHRlciBwYXJhbWV0ZXJzXHJcbi8vICAgICAgIHJvdXRlci5wdXNoKHtcclxuLy8gICAgICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxyXG4vLyAgICAgICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgICAgICAuLi5yb3V0ZXIucXVlcnksXHJcbi8vICAgICAgICAgICBjb21wYW55X3N0YXR1czogZmlsdGVyLmNvbXBhbnlfc3RhdHVzLFxyXG4vLyAgICAgICAgICAgY29tcGFueV9uYW1lOiBmaWx0ZXIuY29tcGFueV9uYW1lLFxyXG4vLyAgICAgICAgICAgcGFnZTogc2VsZWN0ZWRQYWdlLnNlbGVjdGVkICsgMSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH07XHJcbiAgXHJcbi8vICAgICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcclxuLy8gICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuLy8gICAgIH1cclxuICBcclxuLy8gICAgIGlmIChzdGF0dXMgPT09ICdmYWlsZWQnKSB7XHJcbi8vICAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBteS04XCI+XHJcbi8vICAgICAgICAgey8qIEZpbHRlciBTZWN0aW9uICovfVxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1yLTJcIj5Db21wYW55IE5hbWU6PC9sYWJlbD5cclxuLy8gICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55X25hbWVcIlxyXG4vLyAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyLmNvbXBhbnlfbmFtZX1cclxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IG1yLTJcIj5TdGF0dXM6PC9sYWJlbD5cclxuLy8gICAgICAgICAgIDxzZWxlY3RcclxuLy8gICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlfc3RhdHVzXCJcclxuLy8gICAgICAgICAgICAgdmFsdWU9e2ZpbHRlci5jb21wYW55X3N0YXR1c31cclxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SW4gUHJvZ3Jlc3M8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgey8qIEFkZCBvdGhlciBzdGF0dXMgb3B0aW9ucyBhcyBuZWVkZWQgKi99XHJcbi8vICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuICBcclxuLy8gICAgICAgICB7LyogVGFibGUgU2VjdGlvbiAqL31cclxuLy8gICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbi8vICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cclxuLy8gICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+Q29tcGFueSBOYW1lPC90aD5cclxuLy8gICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPlBob25lPC90aD5cclxuLy8gICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0zIHRleHQtbGVmdFwiPkNpdHk8L3RoPlxyXG4vLyAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTMgdGV4dC1sZWZ0XCI+QWRkcmVzczwvdGg+XHJcbi8vICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWxlZnRcIj5TdGF0dXM8L3RoPlxyXG4vLyAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IChcclxuLy8gICAgICAgICAgICAgICA8dHIga2V5PXtjb21wYW55LmlkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfbmFtZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPntjb21wYW55LmNvbXBhbnlfcGhvbmV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj57Y29tcGFueS5jaXR5fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+e2NvbXBhbnkuYWRkcmVzczF9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAge2NvbXBhbnkuY29tcGFueV9zdGF0dXMgPT09ICcxJyA/ICdJbiBQcm9ncmVzcycgOiAnT3RoZXIgU3RhdHVzJ31cclxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICAgIDwvdGFibGU+XHJcbiAgXHJcbi8vICAgICAgICAgey8qIFBhZ2luYXRpb24gU2VjdGlvbiAqL31cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICB7dG90YWxFbnRyaWVzXHJcbi8vICAgICAgICAgICAgICAgPyBgU2hvd2luZyAke01hdGgubWluKChjdXJyZW50UGFnZSAtIDEpICogNSArIDEsIHRvdGFsRW50cmllcyl9IHRvICR7TWF0aC5taW4oY3VycmVudFBhZ2UgKiA1LCB0b3RhbEVudHJpZXMpfSBvZiAke3RvdGFsRW50cmllc30gZW50cmllc2BcclxuLy8gICAgICAgICAgICAgICA6ICdObyBlbnRyaWVzIGZvdW5kJ31cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuLy8gICAgICAgICAgICAgcGFnZUNvdW50PXtsYXN0UGFnZX1cclxuLy8gICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4vLyAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17MX1cclxuLy8gICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJwYWdpbmF0aW9uXCJcclxuLy8gICAgICAgICAgICAgcHJldmlvdXNMYWJlbD1cIlByZXZpb3VzXCJcclxuLy8gICAgICAgICAgICAgbmV4dExhYmVsPVwiTmV4dFwiXHJcbi8vICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbi8vICAgICAgICAgICAgIGRpc2FibGVkQ2xhc3NOYW1lPVwiZGlzYWJsZWRcIlxyXG4vLyAgICAgICAgICAgICBwcmV2aW91c0NsYXNzTmFtZT17YHByZXYgJHtwcmV2UGFnZVVybCA/ICcnIDogJ2Rpc2FibGVkJ31gfVxyXG4vLyAgICAgICAgICAgICBuZXh0Q2xhc3NOYW1lPXtgbmV4dCAke25leHRQYWdlVXJsID8gJycgOiAnZGlzYWJsZWQnfWB9XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vICAgfTtcclxuICBcclxuLy8gICBleHBvcnQgZGVmYXVsdCBDb21wYW55O1xyXG5cclxuLy8gSW1wb3J0IG5lY2Vzc2FyeSBtb2R1bGVzXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Company.js\n"));

/***/ })

});