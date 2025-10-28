export type Language = 'ar' | 'en';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  description?: string;
  note?: string;
  items: MenuItem[];
}

export interface CalorieGuideItem {
  level: string;
  calories: string;
}

export interface CalorieGuideCategory {
  title: string;
  items: CalorieGuideItem[];
}

export interface ExerciseGuideItem {
  activity: string;
  calories: string;
}

export interface AllergensContent {
  title: string;
  content: string;
  list_title: string;
  list: string[];
  calorieGuide: {
    title: string;
    categories: CalorieGuideCategory[];
  };
  exerciseGuide: {
    title: string;
    items: ExerciseGuideItem[];
  };
}

export interface Content {
  nav: {
    home: string;
    menu: string;
    allergens: string;
    contact: string;
    language_switch: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_button: string;
  };
  menu: {
    title: string;
    categories: MenuCategory[];
  };
  allergens: AllergensContent;
  info: {
    hours_title: string;
    hours: string[];
    hours_note?: string;
    location_title: string;
    location: string;
    follow_us_title: string;
  };
  footer: {
    social_title: string;
    rights_reserved: string;
  };
}

export interface Translations {
  ar: Content;
  en: Content;
}
