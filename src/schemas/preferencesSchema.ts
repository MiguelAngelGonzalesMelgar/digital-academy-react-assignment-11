import * as yup from "yup";

export const preferencesSchema = yup.object({
  contactMethod: yup.string()
    .oneOf(["email", "phone", "whatsapp"], "Please select a valid contact method")
    .required("You must provide a contact method"),
  subscribeNewsletter: yup.boolean().required().default(false),
  favoriteCategory: yup.string()
    .oneOf(["technology", "health", "art", "travel", ""])
    .required()
    .default(""),
});
