"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeAreaWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SportFiKitProvider_1 = require("../provider/SportFiKitProvider");
/**
 * SafeAreaWrapper - Handles layout padding for notched mobile devices in Socios/Telegram browsers.
 */
const SafeAreaWrapper = ({ children, className = "" }) => {
    const { safeAreaInsets } = (0, SportFiKitProvider_1.useMiniAppContext)();
    const style = {
        paddingTop: `max(1rem, ${safeAreaInsets.top}px)`,
        paddingBottom: `max(1rem, ${safeAreaInsets.bottom}px)`,
        paddingLeft: `max(1rem, ${safeAreaInsets.left}px)`,
        paddingRight: `max(1rem, ${safeAreaInsets.right}px)`,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `min-h-screen bg-[#fafafa] transition-all ${className}`, style: style, children: children }));
};
exports.SafeAreaWrapper = SafeAreaWrapper;
