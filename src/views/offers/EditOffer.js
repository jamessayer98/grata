import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../../redux/actions/offers";
import { editOffer } from "../../../redux/actions/offers";
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
  CSelect,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import * as Yup from "yup";

const EditOffer = (props) => {
  const { handleOfferModal, setHandleOfferModal } = props;
  const dispatch = useDispatch();
  const { offer } = useSelector((state) => state.offers);

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

  const onSubmit = (values) => {
    dispatch(
      editOffer({
        body: values,
        success: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You successfully updated offer!",
            })
          );
        },
      })
    );
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={offer}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <CForm onSubmit={handleSubmit} noValidate name="EditOfferForm">
          <CModal
            show={handleOfferModal}
            onClose={() => setHandleOfferModal(!handleOfferModal)}
            color="primary"
          >
            <CModalHeader closeButton>
              <CModalTitle>Edit Building</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow className="mt-4">
                <CCol>
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInputGroup className="mb-3">
                      <CInput
                        type="text"
                        id="name"
                        name="name"
                        placeholde="Name..."
                        autoComplete="text"
                        valid={!errors.name}
                        invalid={touched.name && !!errors.name}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </CInputGroup>
                    <CInvalidFeedback>{errors.name}</CInvalidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CFormGroup className="text-right">
                <CButton color="primary" type="submit">
                  Update
                </CButton>{" "}
                <CButton color="secondary" onClick={() => setHandleOfferModal(!handleOfferModal)}>
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

export default EditOffer;
