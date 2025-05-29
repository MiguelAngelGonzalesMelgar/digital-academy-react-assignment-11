import * as yup from "yup";

export const addresSchema =  yup.object().shape({
country:yup.string().required("Please add a country"),
city: yup.string().required("Select a city"),
zipCode: yup.string().matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid zip code")
.required("A zip code is needed"),
});

