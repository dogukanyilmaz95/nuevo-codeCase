"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Index_1 = require("./components/Index");
const Create_1 = require("./components/Create");
const Detail_1 = require("./components/Detail");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
ReactDOM.render(React.createElement(react_router_dom_1.HashRouter, null,
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Index_1.Index }),
        React.createElement(react_router_dom_1.Route, { path: "/Create", component: Create_1.Create }),
        React.createElement(react_router_dom_1.Route, { path: "/Detail", component: Detail_1.default }))), document.getElementById("example"));
//# sourceMappingURL=app.js.map