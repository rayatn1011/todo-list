import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export default i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['querystring', 'navigator'],
            caches: [], // no need caches
        },
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'zh-TW', 'zh', 'ja'],
    })

/**
 * mapping locale to html lang
 */
const htmlLang: { [key: string]: string } = {
    en: 'en',
    'zh-TW': 'zh-Hant',
    zh: 'zh-Hans',
    ja: 'ja',
};

/**
 * handle automatic chang html lang
 */
i18n.on('languageChanged', (lng) => {
    if (htmlLang[lng]) {
        document.documentElement.lang = htmlLang[lng];
    }
});
