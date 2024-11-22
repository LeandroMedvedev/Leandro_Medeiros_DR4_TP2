import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', /* idioma padrão */
    backend: {
      loadPath: '/locales/{{lng}}.json',
      /* caso não haja idioma padrão definido numa subpasta em locales 
      (exemplo: /locales/pt.json), utilizará o idioma de 'fallbackLng' */
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;  