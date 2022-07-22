import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import languageData from "../assets/data/languageData";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // init data
    resources: {
      en: {
        translation: languageData.en,
      },
      ind: {
        translation: languageData.ind,
      },
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
