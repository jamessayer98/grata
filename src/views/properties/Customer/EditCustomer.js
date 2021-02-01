import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../../redux/actions/window";
import { Formik } from "formik";
import { editCustomer } from "../../../redux/actions/customer";
import {
  CForm,
  CFormGroup,
  CCol,
  CInputGroup,
  CInput,
  CLabel,
  CButton,
  CInvalidFeedback,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
} from "@coreui/react";
import * as Yup from "yup";

const EditCustomer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { customer } = useSelector((state) => state.customer);
  const { handleCustomerModal, setHandleCustomerModal } = props;

  useEffect(() => {
    if (!customer.id) history.push("/properties/customer");
  }, [customer, history]);

  const validationSchema = function (values) {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      contact: Yup.string().required("Contact is required"),
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

  const onSubmit = (values) => {
    dispatch(
      editCustomer({
        id: customer.id,
        body: values,
        success: () => {
          setHandleCustomerModal(false);
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Customer Successfully Updated!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Customer Updating Failed!",
            })
          );
        },
      })
    );
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={customer}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <CForm onSubmit={handleSubmit} noValidate name="EditCustomerForm">
          <CModal
            show={handleCustomerModal}
            onClose={() => setHandleCustomerModal(!handleCustomerModal)}
            color="primary"
          >
            <CModalHeader>
              <CModalTitle>Edit Customer</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CFormGroup row className="mt-4">
                <CCol>
                  <CLabel htmlFor="nf-name">Name</CLabel>
                  <CInputGroup className="mb-3">
                    <CInput
                      type="text"
                      id="name"
                      name="name"
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
                  </CInputGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-email">Email</CLabel>
                  <CInputGroup className="mb-3">
                    <CInput
                      type="text"
                      id="email"
                      name="email"
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
                  </CInputGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <CLabel htmlFor="nf-contact">Contact</CLabel>
                  <CInputGroup className="mb-3">
                    <CInput
                      type="text"
                      id="contact"
                      name="contact"
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
                  </CInputGroup>
                </CCol>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              {" "}
              <CFormGroup className="text-right">
                <CButton color="primary" type="submit">
                  Update
                </CButton>{" "}
                <CButton color="secondary" onClick={() => setHandleCustomerModal(false)}>
                  Cancel
                </CButton>
              </CFormGroup>
            </CModalFooter>
          </CModal>
        </CForm>
      )}
    </Formik>
  );
};

export default EditCustomer;
