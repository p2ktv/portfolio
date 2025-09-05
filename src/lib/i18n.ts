import en from "../../locales/en.json";
import de from "../../locales/de.json";

export type Language = "en" | "de";

export const translations: Record<string, Record<string, string>> = {
  en,
  de,
};

export function t(
  lang: Language,
  key: string,
  variables?: Record<string, string | number>
): string {
  let text = translations[lang]?.[key] || key;

  if (variables) {
    Object.entries(variables).forEach(([varName, value]) => {
      const regex = new RegExp(`{{\\s*${varName}\\s*}}`, "g");
      text = text.replace(regex, String(value));
    });
  }

  return text;
}
