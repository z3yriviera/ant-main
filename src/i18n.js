import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome Back!",
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      fullName: "Full Name",
      logout: "Logout",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      or: "or",
    },
  },
  tr: {
    translation: {
      welcome: "Tekrar Hoşgeldiniz!",
      login: "Giriş Yap",
      signup: "Kayıt Ol",
      email: "E-posta",
      password: "Şifre",
      confirmPassword: "Şifreyi Onayla",
      fullName: "Ad Soyad",
      logout: "Çıkış Yap",
      darkMode: "Karanlık Mod",
      lightMode: "Aydınlık Mod",
      or: "veya",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
