import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome Back!",
        email: "Email",
        password: "Password",
        login: "Login",
        signup: "Sign Up",
        home: "Home Page",
        logout: "Logout",
        createAccount: "Create Your Account"
      },
    },
    tr: {
      translation: {
        welcome: "Tekrar Hoş Geldiniz!",
        email: "E-posta",
        password: "Şifre",
        login: "Giriş Yap",
        signup: "Kayıt Ol",
        home: "Ana Sayfa",
        logout: "Çıkış Yap",
        createAccount: "Hesabınızı Oluşturun"
      },
    },
  },
  lng: "tr", // Varsayılan dil
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
