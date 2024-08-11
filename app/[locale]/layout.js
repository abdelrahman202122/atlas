import "./globals.css";
import { Inter } from "next/font/google";
import { locales } from '../../i18n'
import { unstable_setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Atlas",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

async function RootLayout({ children, params: { locale } }) {
    unstable_setRequestLocale(locale)

    return (
        <html lang={locale} dir={locale === "ar" ? 'rtl' : 'ltr'}>
            <body className={`${inter.className} text-white`}>
                {children}
            </body>
        </html>
    );
}
export default RootLayout;
