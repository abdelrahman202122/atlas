import { useRouter } from "next/navigation";
import { i18n } from "next-i18next";

function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push("/", "/", { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
    </div>
  );
}
