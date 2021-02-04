import React from "react";
import { useHistory } from "react-router-dom";
import { addOffer } from "../../redux/actions/offers";
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
  CInputGroup,
  CInvalidFeedback,
  CLabel,
  CInput,
  CButton,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCard,
  CCardTitle,
  CTextarea,
} from "@coreui/react";
import * as Yup from "yup";

const AddOffer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = function (values) {
    return Yup.object().shape({
      title: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
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
    title: "",
    content: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addOffer({
        body: values,
        success: () => {
          history.push("/offers");
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully created new Offer!",
            })
          );
        },
      })
    );
  };

  return (
    <CContainer className="mb-4">
      <Formik
        initialValues={initialValues}
        validate={validate(validationSchema)}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <CForm onSubmit={handleSubmit} noValidate name="AddOfferForm">
            <CRow>
              <CCol className="offset-3 col-6">
                <CCardGroup>
                  <CCard>
                    <CCardHeader>
                      <CCardTitle>Add Offer</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                      <CFormGroup>
                        <CLabel htmlFor="title">Title</CLabel>
                        <CInputGroup className="mb-3">
                          <CInput
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title..."
                            autoComplete="text"
                            valid={!errors.title}
                            invalid={touched.title && !!errors.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                          />
                          <CInvalidFeedback>{errors.title}</CInvalidFeedback>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="content">Content</CLabel>
                        <CInputGroup className="mb-3">
                          <CTextarea
                            type="text"
                            id="content"
                            name="content"
                            placeholder="Content..."
                            autoComplete="text"
                            valid={!errors.content}
                            invalid={touched.content && !!errors.content}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                          ></CTextarea>
                          <CInvalidFeedback>{errors.content}</CInvalidFeedback>
                        </CInputGroup>
                      </CFormGroup>
                    </CCardBody>
                    <CCardFooter>
                      <CFormGroup className="text-right">
                        <CButton color="primary" type="submit">
                          Add
                        </CButton>{" "}
                        <CButton
                          color="secondary"
                          onClick={() => {
                            history.push("/offers");
                          }}
                        >
                          Cancel
                        </CButton>
                      </CFormGroup>
                    </CCardFooter>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CForm>
        )}
      </Formik>
    </CContainer>
  );
};

export default AddOffer;
