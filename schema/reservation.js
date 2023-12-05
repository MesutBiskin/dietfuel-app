import * as Yup from "yup";

export const reservationSchema = Yup.object({
fullName: Yup.string().required("Full name is required")
.min(3, "Full name must be at least 3 characters"),
phoneNumber: Yup.string().required("Phone number is reqired").min(
    10,
    "Phone number must be at least 10 characters."
),
email: Yup.string().required("Email is reqired").email("Email is invalid"),
persons: Yup.string().required("Person is reqired"),
date: Yup.string().required("Date is required") ,
});