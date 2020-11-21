"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
exports.Input = function (props) {
    var disabled = props.disabled, size = props.size, icon = props.icon, type = props.type, prepand = props.prepand, style = props.style, restProps = __rest(props, ["disabled", "size", "icon", "type", "prepand", "style"]);
    return (react_1["default"].createElement("div", null));
};
