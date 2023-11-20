import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import ruTranslations from './ru.json';
import uaTranslations from './ua.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    initImmediate: false,
    keySeparator: '.',
    resources: {
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
      ua: {
        translation: uaTranslations,
      },
    },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;