import "server-only";

export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

const dictionaries = {
  vi: () =>
    import("./dictionaries/vi.json").then((module) => module.default),

  en: () =>
    import("./dictionaries/en.json").then((module) => module.default),
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}