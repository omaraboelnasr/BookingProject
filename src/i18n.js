import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Abdelrazzak
import translateAbdelrazzakEn from "./locale/en/abdelrazzak.json";
import tratranslateAbdelrazzakAr from "./locale/ar/abdelrazzak.json";

// Nada
import translateNadaEn from "./locale/en/nada.json";
import translateNadaAr from "./locale/ar/nada.json";

// Mostafa
import translateMostafaEn from "./locale/en/mostafa.json";
import translateMostafaAr from "./locale/ar/mostafa.json";

const resources = {
	en: {
		translation: {
			...translateAbdelrazzakEn,
			...translateNadaEn,
			...translateMostafaEn,
		},
	},
	ar: {
		translation: {
			...tratranslateAbdelrazzakAr,
			...translateNadaAr,
			...translateMostafaAr,
		},
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallback: "en",
		resources,
		merge: ["translation"],
		react: { useSuspense: false },
	});

export default i18n;
