import { jsx as _jsx } from "react/jsx-runtime";
import { useMiniAppContext } from '../provider/SportFiKitProvider';
/**
 * SafeAreaWrapper - Handles layout padding for notched mobile devices in Socios/Telegram browsers.
 */
export const SafeAreaWrapper = ({ children, className = "" }) => {
    const { safeAreaInsets } = useMiniAppContext();
    const style = {
        paddingTop: `max(1rem, ${safeAreaInsets.top}px)`,
        paddingBottom: `max(1rem, ${safeAreaInsets.bottom}px)`,
        paddingLeft: `max(1rem, ${safeAreaInsets.left}px)`,
        paddingRight: `max(1rem, ${safeAreaInsets.right}px)`,
    };
    return (_jsx("div", { className: `min-h-screen bg-[#fafafa] transition-all ${className}`, style: style, children: children }));
};
