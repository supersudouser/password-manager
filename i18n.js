import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import TranslationEN from "@/locales/en/translation.json";


const resources = {
  en: {
    translation: TranslationEN,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "auto",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
