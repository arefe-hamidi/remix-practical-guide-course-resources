import {
  Link,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QNB3LOXN.js";

// app/styles/home.css
var home_default = "/build/_assets/home-PJIINAIX.css";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const tryButton = styled.p`
  a:hover {
    background-color: var(--color-secondary-200);
  }
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "A better way of keeping track of your notes" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Try our early beta and never loose track of your notes again!" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tryButton", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: "Try Now!" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: home_default }];
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-4CVUHMPB.js.map
