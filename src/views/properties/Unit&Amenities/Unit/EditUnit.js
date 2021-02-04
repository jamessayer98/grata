import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToast } from "../../../../redux/actions/window";
import { editUnit } from "../../../../redux/actions/unit";
import { Formik } from "formik";
import {
  CForm,
  CFormGroup,
  CRow,
  CButton,
  CCol,
  CInputGroup,
  CInvalidFeedback,
  CLabel,
  CInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CSelect,
} from "@coreui/react";
import * as Yup from "yup";

const EditUnit = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleUnitModal, setHandleUnitModal } = props;
  const { building } = useSelector((state) => state.building);
  const { unit } = useSelector((state) => state.unit);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (!building.id) history.push("/properties/building");
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

  const onSubmit = (values) => {
    const subValues = {
      ...values,
      owned: values.owned === "true" ? true : false,
      user_id: parseInt(values.user_id, 10),
    };

    dispatch(
      editUnit({
        id: unit.id,
        body: subValues,
        success: () => {
          setHandleUnitModal(false);
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Unit Successfully Updated!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Unit Updating Failed!",
            })
          );
        },
      })
    );
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={unit}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <CForm onSubmit={handleSubmit} noValidate name="AddUnitForm">
          <CModal
            show={handleUnitModal}
            onClose={() => setHandleUnitModal(!handleUnitModal)}
            color="primary"
          >
            <CModalHeader closeButton>
              <CModalTitle>Edit Unit</CModalTitle>
            </CModalHeader>
            <CModalBody>
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
                      value={values.owned}
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
                      value={values.user_id}
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
            </CModalBody>
            <CModalFooter>
              <CFormGroup className="text-right">
                <CButton color="primary" type="submit">
                  Update
                </CButton>{" "}
                <CButton color="secondary" onClick={() => setHandleUnitModal(!handleUnitModal)}>
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

export default EditUnit;
