import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ta from './locales/ta.json';
import ur from './locales/ur.json';

const resources = {
  en: { translation: en },
  ta: { translation: ta },
  ur: { translation: ur },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
