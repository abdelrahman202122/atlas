import { getTranslations } from 'next-intl/server';
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function Home({ params: { locale } }) {
    unstable_setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'index' })
    console.log(t('discover'))
    return (
        <div>
            <Header />
            <HeroSection translate={t} />
            <AboutUs />
            <Services />
            <WhyChooseUs />
            <Team />
            <Footer />
        </div>
    );
}
