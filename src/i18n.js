import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "../src/assets/locales/en/translation.json"
import translationRO from "../src/assets/locales/ro/translation.json"

const availableLanguages = ['en', 'ro'];

const resources = {
    en: {
        translation: translationEN
    },
    ro: {
        translation: translationRO
    }
};

i18n
    .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({

        resources
        , // fallback language is english.

        detection: {
            checkWhitelist: true, // options for language detection
        },

        debug: false,
        react: {
            useSuspense: false //   <---- this will do the magic
        },
        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;