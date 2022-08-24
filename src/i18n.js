import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translationEN.json';
import translationHI from './locales/hi/translationHI.json';

const resources = {
    en : {
        translation : translationEN
    },
    hi : {
        translation : translationHI
    }
};

i18next
.use(initReactI18next)
.init({
    resources,
    lng : 'en',
    keySeperator: false,

    interpolation:{
      escapeValue:false 
    }
})

export default i18next;