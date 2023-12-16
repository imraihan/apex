"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-with-selector.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \nif (true) {\n    (function() {\n        \"use strict\";\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== \"undefined\" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === \"function\") {\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\n        }\n        var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n        /**\n * inlined Object.is polyfill to avoid requiring consumers ship their own\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n */ function is(x, y) {\n            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare\n            ;\n        }\n        var objectIs = typeof Object.is === \"function\" ? Object.is : is;\n        var useSyncExternalStore = React.useSyncExternalStore;\n        // for CommonJS interop.\n        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.\n        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {\n            // Use this to track the rendered snapshot.\n            var instRef = useRef(null);\n            var inst;\n            if (instRef.current === null) {\n                inst = {\n                    hasValue: false,\n                    value: null\n                };\n                instRef.current = inst;\n            } else {\n                inst = instRef.current;\n            }\n            var _useMemo = useMemo(function() {\n                // Track the memoized state using closure variables that are local to this\n                // memoized instance of a getSnapshot function. Intentionally not using a\n                // useRef hook, because that state would be shared across all concurrent\n                // copies of the hook/component.\n                var hasMemo = false;\n                var memoizedSnapshot;\n                var memoizedSelection;\n                var memoizedSelector = function(nextSnapshot) {\n                    if (!hasMemo) {\n                        // The first time the hook is called, there is no memoized result.\n                        hasMemo = true;\n                        memoizedSnapshot = nextSnapshot;\n                        var _nextSelection = selector(nextSnapshot);\n                        if (isEqual !== undefined) {\n                            // Even if the selector has changed, the currently rendered selection\n                            // may be equal to the new selection. We should attempt to reuse the\n                            // current value if possible, to preserve downstream memoizations.\n                            if (inst.hasValue) {\n                                var currentSelection = inst.value;\n                                if (isEqual(currentSelection, _nextSelection)) {\n                                    memoizedSelection = currentSelection;\n                                    return currentSelection;\n                                }\n                            }\n                        }\n                        memoizedSelection = _nextSelection;\n                        return _nextSelection;\n                    } // We may be able to reuse the previous invocation's result.\n                    // We may be able to reuse the previous invocation's result.\n                    var prevSnapshot = memoizedSnapshot;\n                    var prevSelection = memoizedSelection;\n                    if (objectIs(prevSnapshot, nextSnapshot)) {\n                        // The snapshot is the same as last time. Reuse the previous selection.\n                        return prevSelection;\n                    } // The snapshot has changed, so we need to compute a new selection.\n                    // The snapshot has changed, so we need to compute a new selection.\n                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data\n                    // has changed. If it hasn't, return the previous selection. That signals\n                    // to React that the selections are conceptually equal, and we can bail\n                    // out of rendering.\n                    // If a custom isEqual function is provided, use that to check if the data\n                    // has changed. If it hasn't, return the previous selection. That signals\n                    // to React that the selections are conceptually equal, and we can bail\n                    // out of rendering.\n                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {\n                        return prevSelection;\n                    }\n                    memoizedSnapshot = nextSnapshot;\n                    memoizedSelection = nextSelection;\n                    return nextSelection;\n                }; // Assigning this to a constant so that Flow knows it can't change.\n                // Assigning this to a constant so that Flow knows it can't change.\n                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;\n                var getSnapshotWithSelector = function() {\n                    return memoizedSelector(getSnapshot());\n                };\n                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {\n                    return memoizedSelector(maybeGetServerSnapshot());\n                };\n                return [\n                    getSnapshotWithSelector,\n                    getServerSnapshotWithSelector\n                ];\n            }, [\n                getSnapshot,\n                getServerSnapshot,\n                selector,\n                isEqual\n            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];\n            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);\n            useEffect(function() {\n                inst.hasValue = true;\n                inst.value = value;\n            }, [\n                value\n            ]);\n            useDebugValue(value);\n            return value;\n        }\n        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== \"undefined\" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === \"function\") {\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\n        }\n    })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMsR0FFRDtBQUVBLElBQUlBLElBQXFDLEVBQUU7SUFDeEM7UUFFTztRQUVWLHlDQUF5QyxHQUN6QyxJQUNFLE9BQU9DLG1DQUFtQyxlQUMxQyxPQUFPQSwrQkFBK0JDLDJCQUEyQixLQUMvRCxZQUNGO1lBQ0FELCtCQUErQkMsMkJBQTJCLENBQUMsSUFBSUM7UUFDakU7UUFDVSxJQUFJQyxRQUFRQyxtQkFBT0EsQ0FBQztRQUU5Qjs7O0NBR0MsR0FDRCxTQUFTQyxHQUFHQyxDQUFDLEVBQUVDLENBQUM7WUFDZCxPQUFPRCxNQUFNQyxLQUFNRCxDQUFBQSxNQUFNLEtBQUssSUFBSUEsTUFBTSxJQUFJQyxDQUFBQSxLQUFNRCxNQUFNQSxLQUFLQyxNQUFNQSxFQUFFLHNDQUFzQzs7UUFFN0c7UUFFQSxJQUFJQyxXQUFXLE9BQU9DLE9BQU9KLEVBQUUsS0FBSyxhQUFhSSxPQUFPSixFQUFFLEdBQUdBO1FBRTdELElBQUlLLHVCQUF1QlAsTUFBTU8sb0JBQW9CO1FBRXJELHdCQUF3QjtRQUV4QixJQUFJQyxTQUFTUixNQUFNUSxNQUFNLEVBQ3JCQyxZQUFZVCxNQUFNUyxTQUFTLEVBQzNCQyxVQUFVVixNQUFNVSxPQUFPLEVBQ3ZCQyxnQkFBZ0JYLE1BQU1XLGFBQWEsRUFBRSw2RUFBNkU7UUFFdEgsU0FBU0MsaUNBQWlDQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsaUJBQWlCLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztZQUNwRywyQ0FBMkM7WUFDM0MsSUFBSUMsVUFBVVYsT0FBTztZQUNyQixJQUFJVztZQUVKLElBQUlELFFBQVFFLE9BQU8sS0FBSyxNQUFNO2dCQUM1QkQsT0FBTztvQkFDTEUsVUFBVTtvQkFDVkMsT0FBTztnQkFDVDtnQkFDQUosUUFBUUUsT0FBTyxHQUFHRDtZQUNwQixPQUFPO2dCQUNMQSxPQUFPRCxRQUFRRSxPQUFPO1lBQ3hCO1lBRUEsSUFBSUcsV0FBV2IsUUFBUTtnQkFDckIsMEVBQTBFO2dCQUMxRSx5RUFBeUU7Z0JBQ3pFLHdFQUF3RTtnQkFDeEUsZ0NBQWdDO2dCQUNoQyxJQUFJYyxVQUFVO2dCQUNkLElBQUlDO2dCQUNKLElBQUlDO2dCQUVKLElBQUlDLG1CQUFtQixTQUFVQyxZQUFZO29CQUMzQyxJQUFJLENBQUNKLFNBQVM7d0JBQ1osa0VBQWtFO3dCQUNsRUEsVUFBVTt3QkFDVkMsbUJBQW1CRzt3QkFFbkIsSUFBSUMsaUJBQWlCYixTQUFTWTt3QkFFOUIsSUFBSVgsWUFBWWEsV0FBVzs0QkFDekIscUVBQXFFOzRCQUNyRSxvRUFBb0U7NEJBQ3BFLGtFQUFrRTs0QkFDbEUsSUFBSVgsS0FBS0UsUUFBUSxFQUFFO2dDQUNqQixJQUFJVSxtQkFBbUJaLEtBQUtHLEtBQUs7Z0NBRWpDLElBQUlMLFFBQVFjLGtCQUFrQkYsaUJBQWlCO29DQUM3Q0gsb0JBQW9CSztvQ0FDcEIsT0FBT0E7Z0NBQ1Q7NEJBQ0Y7d0JBQ0Y7d0JBRUFMLG9CQUFvQkc7d0JBQ3BCLE9BQU9BO29CQUNULEVBQUUsNERBQTREO29CQUc5RCw0REFBNEQ7b0JBQzVELElBQUlHLGVBQWVQO29CQUNuQixJQUFJUSxnQkFBZ0JQO29CQUVwQixJQUFJckIsU0FBUzJCLGNBQWNKLGVBQWU7d0JBQ3hDLHVFQUF1RTt3QkFDdkUsT0FBT0s7b0JBQ1QsRUFBRSxtRUFBbUU7b0JBR3JFLG1FQUFtRTtvQkFDbkUsSUFBSUMsZ0JBQWdCbEIsU0FBU1ksZUFBZSwwRUFBMEU7b0JBQ3RILHlFQUF5RTtvQkFDekUsdUVBQXVFO29CQUN2RSxvQkFBb0I7b0JBRXBCLDBFQUEwRTtvQkFDMUUseUVBQXlFO29CQUN6RSx1RUFBdUU7b0JBQ3ZFLG9CQUFvQjtvQkFDcEIsSUFBSVgsWUFBWWEsYUFBYWIsUUFBUWdCLGVBQWVDLGdCQUFnQjt3QkFDbEUsT0FBT0Q7b0JBQ1Q7b0JBRUFSLG1CQUFtQkc7b0JBQ25CRixvQkFBb0JRO29CQUNwQixPQUFPQTtnQkFDVCxHQUFHLG1FQUFtRTtnQkFHdEUsbUVBQW1FO2dCQUNuRSxJQUFJQyx5QkFBeUJwQixzQkFBc0JlLFlBQVksT0FBT2Y7Z0JBRXRFLElBQUlxQiwwQkFBMEI7b0JBQzVCLE9BQU9ULGlCQUFpQmI7Z0JBQzFCO2dCQUVBLElBQUl1QixnQ0FBZ0NGLDJCQUEyQixPQUFPTCxZQUFZO29CQUNoRixPQUFPSCxpQkFBaUJRO2dCQUMxQjtnQkFDQSxPQUFPO29CQUFDQztvQkFBeUJDO2lCQUE4QjtZQUNqRSxHQUFHO2dCQUFDdkI7Z0JBQWFDO2dCQUFtQkM7Z0JBQVVDO2FBQVEsR0FDbERxQixlQUFlZixRQUFRLENBQUMsRUFBRSxFQUMxQmdCLHFCQUFxQmhCLFFBQVEsQ0FBQyxFQUFFO1lBRXBDLElBQUlELFFBQVFmLHFCQUFxQk0sV0FBV3lCLGNBQWNDO1lBQzFEOUIsVUFBVTtnQkFDUlUsS0FBS0UsUUFBUSxHQUFHO2dCQUNoQkYsS0FBS0csS0FBSyxHQUFHQTtZQUNmLEdBQUc7Z0JBQUNBO2FBQU07WUFDVlgsY0FBY1c7WUFDZCxPQUFPQTtRQUNUO1FBRUFrQix3Q0FBd0MsR0FBRzVCO1FBQ2pDLHlDQUF5QyxHQUNuRCxJQUNFLE9BQU9mLG1DQUFtQyxlQUMxQyxPQUFPQSwrQkFBK0I0QywwQkFBMEIsS0FDOUQsWUFDRjtZQUNBNUMsK0JBQStCNEMsMEJBQTBCLENBQUMsSUFBSTFDO1FBQ2hFO0lBRUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwZXgtbmV4dC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcz8zODJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwicmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0IiwiRXJyb3IiLCJSZWFjdCIsInJlcXVpcmUiLCJpcyIsIngiLCJ5Iiwib2JqZWN0SXMiLCJPYmplY3QiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VEZWJ1Z1ZhbHVlIiwidXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IiLCJzdWJzY3JpYmUiLCJnZXRTbmFwc2hvdCIsImdldFNlcnZlclNuYXBzaG90Iiwic2VsZWN0b3IiLCJpc0VxdWFsIiwiaW5zdFJlZiIsImluc3QiLCJjdXJyZW50IiwiaGFzVmFsdWUiLCJ2YWx1ZSIsIl91c2VNZW1vIiwiaGFzTWVtbyIsIm1lbW9pemVkU25hcHNob3QiLCJtZW1vaXplZFNlbGVjdGlvbiIsIm1lbW9pemVkU2VsZWN0b3IiLCJuZXh0U25hcHNob3QiLCJfbmV4dFNlbGVjdGlvbiIsInVuZGVmaW5lZCIsImN1cnJlbnRTZWxlY3Rpb24iLCJwcmV2U25hcHNob3QiLCJwcmV2U2VsZWN0aW9uIiwibmV4dFNlbGVjdGlvbiIsIm1heWJlR2V0U2VydmVyU25hcHNob3QiLCJnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciIsImdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yIiwiZ2V0U2VsZWN0aW9uIiwiZ2V0U2VydmVyU2VsZWN0aW9uIiwiZXhwb3J0cyIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMQywrTUFBeUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGV4LW5leHQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcz83ZWNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/with-selector.js\n");

/***/ })

};
;