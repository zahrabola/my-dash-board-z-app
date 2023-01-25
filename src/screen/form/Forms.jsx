/* formik docs*/
import Header from "../../Components/Header";
import { Box, Typography, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

/* strings */
const initialValues ={
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
/* pre made validation function */
const userCheckoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact:yup.string().matches(phoneRegExp, "Phone number is not valid"),
  address1: yup.string().required("required").required("required"),
  address2: yup.string().required("required"),
});

const phoneRegExp =   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/; //from stackoverflow

const Forms = () => {
  const isnonMobile = useMediaQuery("(min-width:600px)") /* minmum width - for media query in react */
  const handleSubmitForm = (values) => {
console.log(values)
  } //function 
  return (
       <Box m="20px">
  <Header title="Create User" subtitle="Create a new user profile" />
  <Formik
  onSubmit={handleSubmitForm}
  initialValues={initialValues } /* info for the form  */
  validationSchema={userCheckoutSchema} /* for validation */
  >

  </Formik>


       </Box>
    )
}

export default Forms;