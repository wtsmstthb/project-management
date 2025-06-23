(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Header/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ({ name, buttonComponent, isSmallText = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex w-full items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: ` ${isSmallText ? 'text-lg' : 'text-2xl'} font-semibold dark:text-white`,
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/Header/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            buttonComponent
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/timeline/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/redux.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/state/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@rsagiev/gantt-task-react-19/dist/index.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Timeline = ()=>{
    _s();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Timeline.useAppSelector[isDarkMode]": (state)=>state.global.isDarkMode
    }["Timeline.useAppSelector[isDarkMode]"]);
    const { data: projects, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProjectsQuery"])();
    const [displayOptions, setDisplayOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        viewMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].Month,
        locale: "en-US"
    });
    const ganttTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Timeline.useMemo[ganttTasks]": ()=>{
            return projects?.map({
                "Timeline.useMemo[ganttTasks]": (project)=>({
                        start: new Date(project.startDate),
                        end: new Date(project.endDate),
                        name: project.name,
                        id: `Project-${project.id}`,
                        type: "project",
                        progress: 50,
                        isDisabled: false
                    })
            }["Timeline.useMemo[ganttTasks]"]) || [];
        }
    }["Timeline.useMemo[ganttTasks]"], [
        projects
    ]);
    const handleViewModeChange = (event)=>{
        setDisplayOptions((prev)=>({
                ...prev,
                viewMode: event.target.value
            }));
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 44,
        columnNumber: 25
    }, this);
    if (isError || !projects) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "An error occurred while fetching projects"
    }, void 0, false, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 46,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-full p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "Projects Timeline"
                    }, void 0, false, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block w-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white",
                            value: displayOptions.viewMode,
                            onChange: handleViewModeChange,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].Day,
                                    children: "Day"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].Week,
                                    children: "Week"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].Month,
                                    children: "Month"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "timeline",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gantt"], {
                        tasks: ganttTasks,
                        ...displayOptions,
                        columnWidth: displayOptions.viewMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rsagiev$2f$gantt$2d$task$2d$react$2d$19$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].Month ? 150 : 100,
                        listCellWidth: "100px",
                        projectBackgroundColor: isDarkMode ? "#101214" : "#1f2937",
                        projectProgressColor: isDarkMode ? "#1f2937" : "#aeb8c2",
                        projectProgressSelectedColor: isDarkMode ? "#000" : "#9ba1a6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/timeline/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_s(Timeline, "COaE0AwjxM9+xuXN9uGC2VwU9EM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProjectsQuery"]
    ];
});
_c = Timeline;
const __TURBOPACK__default__export__ = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_0b4a3f5f._.js.map