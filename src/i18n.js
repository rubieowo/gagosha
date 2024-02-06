import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "TRE0fQLDcExp7W8QkkZl-A";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ka",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["ka","ru","en"],
    
    backend: {
      loadPath: loadPath
    }
  })