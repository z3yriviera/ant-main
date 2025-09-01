import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { home: "Home", logout: "Logout" } },
    tr: { translation: { home: "Ana Sayfa", logout: "Çıkış Yap" } },
  },
  lng: "tr",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
