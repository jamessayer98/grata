import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../../../redux/actions/window";
import { editAmenities } from "../../../../redux/actions/amenities";
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
  CTextarea,
  CSelect,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import * as Yup from "yup";

const EditAmenities = (props) => {
  const dispatch = useDispatch();
  const { amenity } = useSelector((state) => state.amenities);
  const { handleAmenitiesModal, setHandleAmenitiesModal } = props;

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

  const onSubmit = (values) => {
    dispatch(
      editAmenities({
        id: amenity.id,
        body: values,
        success: () => {
          setHandleAmenitiesModal(false);
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Amenities Updated Successfully!",
            })
          );
        },
        fail: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "Amenities UpdateFailed!",
            })
          );
        },
      })
    );
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={amenity}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <CForm onSubmit={handleSubmit} noValidate name="EditAmenitiesForm">
          <CModal
            show={handleAmenitiesModal}
            onClose={() => setHandleAmenitiesModal(!handleAmenitiesModal)}
            color="primary"
          >
            <CModalHeader closeButton>
              <CModalTitle>Edit Amenities</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow className="mt-4">
                <CCol>
                  <CFormGroup>
                    <CLabel htmlFor="type">Type</CLabel>
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
                  <CLabel htmlFor="description">Description</CLabel>
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
                    ></CTextarea>
                    <CInvalidFeedback>{errors.description}</CInvalidFeedback>
                  </CInputGroup>
                </CCol>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CFormGroup className="text-right">
                <CButton color="primary" type="submit">
                  Update
                </CButton>{" "}
                <CButton
                  color="secondary"
                  onClick={() => setHandleAmenitiesModal(!handleAmenitiesModal)}
                >
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

export default EditAmenities;
