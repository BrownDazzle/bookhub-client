import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Confirmation from "./Confirmation";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  "pk_test_51LgU7yConHioZHhlAcZdfDAnV9643a7N1CMpxlKtzI1AUWLsRyrord79GYzZQ6m8RzVnVQaHsgbvN1qSpiDegoPi006QkO0Mlc"
);

const Checkout = ({ shippingAddress, setShippingAdress }) => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;


  const handleFormSubmit = async (shippingAddress, actions) => {
    //setActiveStep(activeStep + 1);
    console.log("Payment form Upload")

    // this copies the billing address onto shipping address
    if (isFirstStep && shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...shippingAddress,
        isSameAddress: true,
      });
    }

    /* if (isSecondStep) {
       makePayment(shippingAddress);
     }
 
     actions.setTouched({});*/
  };


  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Success</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <form onSubmit={handleFormSubmit}>
          {isFirstStep && (
            <Shipping
              setShippingAdress={setShippingAdress}
              shippingAddress={shippingAddress}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          )}
          {isSecondStep && (
            <Payment
              shippingAddress={shippingAddress}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          )}
          {isThirdStep && (
            <Confirmation
              shippingAddress={shippingAddress}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          )}
        </form>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;
