import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast } from "../../../../redux/actions/window";
import { addAmenities } from "../../../../redux/actions/amenities";
import { Formik } from "formik";
import {
  CForm,
  CFormGroup,
  CCardGroup,
  CContainer,
  CRow,
  CButton,
  CCol,
  CInputGroup,
  CInvalidFeedback,
  CLabel,
  CTextarea,
  CCardBody,
  CCard,
  CSelect,
  CCardTitle,
  CCardHeader,
  CCardFooter,
} from "@coreui/react";
import * as Yup from "yup";

const AddAmenities = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = function (values) {
    return Yup.object().shape({
      description: Yup.string().required("Description is required"),
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
    type: "1",
    description: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addAmenities({
        body: values,
        success: () => {
          history.push("/properties/amenities");
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully created new Amenities!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Amenities creating Failed!",
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
          <CForm onSubmit={handleSubmit} noValidate name="AddAmenitiesForm">
            <CRow>
              <CCol className="offset-3 col-6">
                <CCardGroup>
                  <CCard>
                    <CCardHeader>
                      <CCardTitle>Add New Amenities</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                      <CRow className="mt-4">
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="type">type</CLabel>
                            <CSelect
                              onBlur={handleBlur}
                              onChange={handleChange}
                              custom
                              name="type"
                              id="type"
                              valid={!errors.type}
                              invalid={touched.type && !!errors.type}
                            >
                              <option value="1">Party Room</option>
                              <option value="2">Service Elevator</option>
                              <option value="3">Visitor Parking</option>
                            </CSelect>
                            <CInvalidFeedback>{errors.type}</CInvalidFeedback>
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="description">Address</CLabel>
                          <CInputGroup className="mb-3">
                            <CTextarea
                              type="text"
                              id="description"
                              name="description"
                              placeholder="description..."
                              autoComplete="text"
                              valid={!errors.description}
                              rows="5"
                              invalid={touched.description && !!errors.description}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.description}
                            />
                            <CInvalidFeedback>{errors.description}</CInvalidFeedback>
                          </CInputGroup>
                        </CCol>
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
                            history.push("/properties/amenities");
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

export default AddAmenities;
