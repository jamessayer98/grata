import React from "react";
import { useHistory } from "react-router-dom";
import { setToast } from "../../redux/actions/window";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  CForm,
  CFormGroup,
  CCardGroup,
  CContainer,
  CRow,
  CCol,
  CInvalidFeedback,
  CLabel,
  CInput,
  CButton,
  CCardBody,
  CCard,
} from "@coreui/react";
import * as Yup from "yup";
import { addCustomer } from "../../redux/actions/customer";

const AddCustomer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = function (values) {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      contact: Yup.string().required("Contact is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    });
  };

  const validate = (getValidationSchema) => {
    return (values) => {
      const validationSchema = getValidationSchema(values);

      try {
        validationSchema.validateSync(values, { abortEarly: false });
        return {};
      } catch (error) {
        return getErrorsFromValidationError(error);
      }
    };
  };

  const getErrorsFromValidationError = (validationError) => {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors, error) => {
      return {
        ...errors,
        [error.path]: error.errors[FIRST_ERROR],
      };
    }, {});
  };

  const initialValues = {
    name: "",
    contact: "",
    email: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addCustomer({
        body: values,
        success: () => {
          history.push("/properties/customer");
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully created new customer!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Customer Creating Failed!",
            })
          );
        },
      })
    );
  };

  return (
    <CContainer className="mb-4 mt-4">
      <CRow>
        <CCol className="offset-3 col-6">
          <CCardGroup>
            <CCard>
              <CCardBody>
                <Formik
                  initialValues={initialValues}
                  validate={validate(validationSchema)}
                  onSubmit={onSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <CForm
                      onSubmit={handleSubmit}
                      noValidate
                      name="AddCustomerForm"
                    >
                      <span className="h3">Add New Customer</span>
                      <CFormGroup row className="mt-4">
                        <CCol>
                          <CLabel htmlFor="nf-name">Name</CLabel>
                          <CInput
                            type="text"
                            id="name"
                            placeholder="Name..."
                            autoComplete="text"
                            valid={!errors.name}
                            invalid={touched.name && !!errors.name}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <CInvalidFeedback>{errors.name}</CInvalidFeedback>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="nf-email">Email</CLabel>
                          <CInput
                            type="email"
                            id="email"
                            placeholder="Email..."
                            autoComplete="text"
                            valid={!errors.email}
                            invalid={touched.email && !!errors.email}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="nf-contact">Contact</CLabel>
                          <CInput
                            type="text"
                            id="contact"
                            placeholder="Contact..."
                            autoComplete="text"
                            valid={!errors.contact}
                            invalid={touched.contact && !!errors.contact}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contact}
                          />
                          <CInvalidFeedback>{errors.contact}</CInvalidFeedback>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup className="text-right">
                        <CButton color="primary" type="submit">
                          Save
                        </CButton>{" "}
                        <CButton
                          color="secondary"
                          onClick={() => {
                            history.push("/properties/customer");
                          }}
                        >
                          Cancel
                        </CButton>
                      </CFormGroup>
                    </CForm>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default AddCustomer;
