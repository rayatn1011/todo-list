import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { isDev } from '@/features/utils'
export default i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['querystring', 'navigator', 'htmlTag'],
        },
        debug: isDev,
        interpolation: {
            escapeValue: false,
        },
        load: 'all',
        fallbackLng: 'en',
        supportedLngs: ['en', 'zh-TW', 'zh', 'ja'],
    })
