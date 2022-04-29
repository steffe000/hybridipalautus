import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    EN: {
        translation: {
            "Finnish": "Finnish",
            "English": "English"
        }
    },
    FI: {
        translation: {
            "Finnish": "Suomi",
            "English": "Englanti"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "EN",
        interpolation:{
            escapeValue: false
        }
    });
    