import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n"

export default createMiddleware({
    locales,
    defaultLocal: "ar",
    localPrefix: "as-needed"
})

export const config = {
    // do not localize next.js paths
    matcher: ["/", "/(ar|en)/:path*"],
};
