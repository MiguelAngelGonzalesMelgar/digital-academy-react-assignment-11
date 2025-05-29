
export interface PersonalInfoForm {
  name: string;
  age: number;
  email: string;
}

export interface AddressForm {
  country: string;
  city: string;
  zipCode: string;
}

export interface PreferencesForm {
  contactMethod: "email" | "phone" | "whatsApp";
  subscribeNewsletter: boolean;
  favoriteCategory: "technology" | "health" | "art" | "travel" | ""
}

export interface FormData {
  personalInfo: PersonalInfoForm;
  address: AddressForm;
  preferences: PreferencesForm;
}