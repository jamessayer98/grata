import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../../../redux/actions/window";
import { list } from "../../../../utils/list";
import { addBuilding } from "../../../../redux/actions/building";
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
  CInput,
  CCardBody,
  CCard,
  CSelect,
  CCardTitle,
  CCardHeader,
} from "@coreui/react";
import * as Yup from "yup";

const AddBuilding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { building } = useSelector((state) => state.building);
  const { orgId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!building.id) {
      history.push("/properties/building");
    }
  }, [building, history]);

  const validationSchema = function (values) {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zip: Yup.string().required("Zip is required"),
      country: Yup.string().required("Country is required"),
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
    address: "",
    city: "",
    zip: "",
    state: "AB",
    country: "CA",
  };

  const onSubmit = (values) => {
    const subValues = {
      ...values,
      org_id: orgId,
    };

    dispatch(
      addBuilding({
        body: subValues,
        success: () => {
          history.push("/properties/building");
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully created new building!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Building creating Failed!",
            })
          );
        },
      })
    );
  };

  return (
    <CContainer className="mb-4">
      <CRow>
        <CCol className="offset-3 col-6">
          <CCardGroup>
            <CCard>
              <CCardHeader>
                <CCardTitle>Add New Building</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <Formik
                  initialValues={initialValues}
                  validate={validate(validationSchema)}
                  onSubmit={onSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <CForm onSubmit={handleSubmit} noValidate name="AddBulidingForm">
                      <CRow className="mt-4">
                        <CCol>
                          <CFormGroup>
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
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="nf-address">Address</CLabel>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Address..."
                              autoComplete="text"
                              valid={!errors.address}
                              invalid={touched.address && !!errors.address}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address}
                            />
                            <CInvalidFeedback>{errors.address}</CInvalidFeedback>
                          </CInputGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="nf-city">City</CLabel>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="text"
                              id="city"
                              name="city"
                              placeholder="City..."
                              autoComplete="text"
                              valid={!errors.city}
                              invalid={touched.city && !!errors.city}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.city}
                            />
                            <CInvalidFeedback>{errors.city}</CInvalidFeedback>
                          </CInputGroup>
                        </CCol>
                      </CFormGroup>
                      <CRow>
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="state">State</CLabel>
                            <CSelect
                              onBlur={handleBlur}
                              onChange={handleChange}
                              custom
                              name="state"
                              id="state"
                              valid={!errors.state}
                              invalid={touched.state && !!errors.state}
                            >
                              {list
                                .find((country) => {
                                  return country.abbreviation === values.country;
                                })
                                ?.states.map((state, index) => (
                                  <option value={state.abbreviation} key={index}>
                                    {state.name}
                                  </option>
                                ))}
                            </CSelect>
                            <CInvalidFeedback>{errors.state}</CInvalidFeedback>
                          </CFormGroup>
                        </CCol>
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="nf-zip">Zip</CLabel>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="text"
                                id="zip"
                                name="zip"
                                placeholder="Zip..."
                                autoComplete="text"
                                valid={!errors.zip}
                                invalid={touched.zip && !!errors.zip}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                              />
                              <CInvalidFeedback>{errors.zip}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="country">Country</CLabel>
                          <CSelect
                            onBlur={handleBlur}
                            onChange={handleChange}
                            custom
                            name="country"
                            id="country"
                            valid={!errors.country}
                            invalid={touched.country && !!errors.country}
                          >
                            {list.map((item, index) => (
                              <option value={item.abbreviation} key={index}>
                                {item.country}
                              </option>
                            ))}
                          </CSelect>
                          <CInvalidFeedback>{errors.country}</CInvalidFeedback>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup className="text-right">
                        <CButton color="primary" type="submit">
                          Add
                        </CButton>{" "}
                        <CButton
                          color="secondary"
                          onClick={() => {
                            history.push("/properties/building");
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

export default AddBuilding;
