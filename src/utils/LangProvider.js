import { createContext, useState, useEffect } from "react";
import languageData from "../assets/data/languageData";
import { useTranslation } from "react-i18next";

const LangContext = createContext();

function LangProvider({ children }) {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState(languageData.en);
  useEffect(() => {
    console.log(i18n.language);
    if (i18n.language === "vi-VN") {
      setLanguages(languageData.en);
    } else {
      setLanguages(languageData.ind);
    }
  }, [i18n.language]);

  return (
    <LangContext.Provider value={languages}>{children}</LangContext.Provider>
  );
}

export { LangContext, LangProvider };
