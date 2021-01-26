import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setToast } from "../../../redux/actions/window";
import { useDispatch, useSelector } from "react-redux";
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
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCard,
  CSelect,
} from "@coreui/react";
import * as Yup from "yup";
import { addUnit } from "../../../redux/actions/unit";

const AddUnit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { building } = useSelector((state) => state.building);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (!building.id) history.push("/properties/customer");
  }, [building, history]);

  const validationSchema = function (values) {
    return Yup.object().shape({
      unit_num: Yup.string().required("Unit Number is required"),
      bedrooms: Yup.string().required("Bedrooms is required"),
      bathrooms: Yup.string().required("Bathrooms is required"),
      area: Yup.string().required("Area is required"),
      owned: Yup.string().required("Owned is required"),
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
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    owned: false,
    unit_num: 0,
    user_id: 0,
  };

  const onSubmit = (values) => {
    const subValues = {
      ...values,
      owned: values.owned === "true" ? true : false,
      user_id: parseInt(values.user_id, 10),
      building_id: building.id,
    };

    dispatch(
      addUnit({
        body: subValues,
        success: () => {
          history.push("/properties/unit");
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully created new Unit!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Unit Creating Failed!",
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
                <CCardTitle>Add New Unit</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <Formik
                  initialValues={initialValues}
                  validate={validate(validationSchema)}
                  onSubmit={onSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <CForm onSubmit={handleSubmit} noValidate name="AddUnitForm">
                      <CRow className="mt-4">
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="buliding_id">BuildingID</CLabel>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="text"
                                id="building_id"
                                name="building_id"
                                disabled
                                value={building.name}
                              />
                            </CInputGroup>
                            <CInvalidFeedback>{errors.building_id}</CInvalidFeedback>
                          </CFormGroup>
                        </CCol>
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="unit-num">Unit Num</CLabel>
                            <CInputGroup className="mb-3">
                              <CInput
                                type="number"
                                id="unit_num"
                                name="unit_num"
                                placeholder="Unit Num..."
                                valid={!errors.unit_num}
                                invalid={touched.unit_num && !!errors.unit_num}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.unit_num}
                              />
                              <CInvalidFeedback>{errors.unit_num}</CInvalidFeedback>
                            </CInputGroup>
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="bedrooms">Bedrooms</CLabel>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="number"
                              id="bedrooms"
                              name="bedrooms"
                              placeholder="Bedrooms..."
                              valid={!errors.bedrooms}
                              invalid={touched.bedrooms && !!errors.bedrooms}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bedrooms}
                            />
                            <CInvalidFeedback>{errors.bedrooms}</CInvalidFeedback>
                          </CInputGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol>
                          <CLabel htmlFor="bathrooms">Bathrooms</CLabel>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="number"
                              id="bathrooms"
                              name="bathrooms"
                              placeholder="Bathrooms..."
                              valid={!errors.bathrooms}
                              invalid={touched.bathrooms && !!errors.bathrooms}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bathrooms}
                            />
                            <CInvalidFeedback>{errors.bathrooms}</CInvalidFeedback>
                          </CInputGroup>
                        </CCol>
                      </CFormGroup>
                      <CRow>
                        <CCol>
                          <CLabel htmlFor="area">Area</CLabel>
                          <CInputGroup className="mb-3">
                            <CInput
                              type="number"
                              id="area"
                              name="area"
                              placeholder="Area..."
                              valid={!errors.area}
                              invalid={touched.area && !!errors.area}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.area}
                            />
                          </CInputGroup>
                          <CInvalidFeedback>{errors.area}</CInvalidFeedback>
                        </CCol>
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="owned">Owned</CLabel>
                            <CSelect
                              onBlur={handleBlur}
                              onChange={handleChange}
                              custom
                              name="owned"
                              id="owned"
                              valid={!errors.owned}
                              invalid={touched.owned && !!errors.owned}
                            >
                              <option value="false">False</option>
                              <option value="true">True</option>
                            </CSelect>
                            <CInvalidFeedback>{errors.owned}</CInvalidFeedback>
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
                          <CFormGroup>
                            <CLabel htmlFor="user_id">User ID</CLabel>
                            <CSelect
                              onBlur={handleBlur}
                              onChange={handleChange}
                              custom
                              name="user_id"
                              valid={!errors.user_id}
                              invalid={touched.user_id && !!errors.user_id}
                            >
                              {users.map((user, index) => {
                                return (
                                  <option value={user.id} key={index}>
                                    {user.first_name} {user.last_name}
                                  </option>
                                );
                              })}
                            </CSelect>
                            <CInvalidFeedback>{errors.user_id}</CInvalidFeedback>
                          </CFormGroup>
                        </CCol>
                      </CRow>
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

export default AddUnit;
