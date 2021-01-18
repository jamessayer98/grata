import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../components/Image";
import Message from "../../components/Message";
import { getAvatar } from "../../redux/actions/user";
import { addComment } from "../../redux/actions/services";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardHeader,
  CInput,
  CLabel,
  CFormGroup,
  CTextarea,
  CForm,
  CButton,
  CInvalidFeedback,
} from "@coreui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { setToast } from "../../redux/actions/window";

const ServicesForm = () => {
  const dispatch = useDispatch();
  const [hyperLink, setHyperLink] = useState(false);
  const { service, comments, commentId } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getAvatar({ id: service.media }));
  }, []);

  const validationSchema = function (values) {
    return Yup.object().shape({
      comment: Yup.string().required("Comment is Required!"),
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
    comment: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addComment({
        id: commentId.commentId,
        body: {
          comment: values.comment,
        },
        success: () => {
          dispatch(
            setToast({
              toastShow: true,
              toastMessage: "You added new comment!",
            })
          );
        },
      })
    );
  };

  return (
    <CCard className="services-form">
      <CCardHeader>Service Request Details</CCardHeader>
      <CCardBody className="services-form__body">
        <CRow>
          <CCol xs="3">
            <CFormGroup>
              <CLabel className="h6" htmlFor="id">
                ID
              </CLabel>
              <CInput
                id="id"
                className="h6"
                name="id"
                value={service.id}
                placeholder="Enter your ID"
                required
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="3">
            <CFormGroup>
              <CLabel className="h6" htmlFor="category">
                Category
              </CLabel>
              <CInput
                id="category"
                className="h6"
                placeholder="Enter your Category"
                value={service.category}
                required
              />
            </CFormGroup>
          </CCol>
          <CCol xs="3">
            <CFormGroup>
              <CLabel className="h6" htmlFor="subject">
                Subject
              </CLabel>
              <CInput
                id="subject"
                className="h6"
                placeholder="Enter your Subject"
                value={service.subject}
                required
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="3">
            <CFormGroup>
              <CLabel className="h6" htmlFor="media">
                Media
              </CLabel>
              <Image />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel className="h6" htmlFor="description">
                Description
              </CLabel>
              <CTextarea
                className="h6"
                id="description"
                placeholder="Enter your Description"
                value={service.description}
                required
              ></CTextarea>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="4">
            <CFormGroup>
              <CLabel className="h6" htmlFor="create_date">
                Create Date :
              </CLabel>
              <CLabel className="h6" id="create_date">
                {service.create_date}
              </CLabel>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="4">
            <CFormGroup>
              <CLabel className="h6" htmlFor="last_udpate">
                Last Update :
              </CLabel>
              <CLabel className="h6" id="last_update">
                {service.last_update}
              </CLabel>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="8">
            <CLabel className="h6">Comments</CLabel>
            {comments &&
              comments.map((comment, index) => {
                return <Message comment={comment} key={index} />;
              })}
          </CCol>
        </CRow>
        {hyperLink ? (
          <>
            <CRow>
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
                  <CForm onSubmit={handleSubmit} noValidate name="CommentForm">
                    <CFormGroup>
                      <CRow>
                        <CCol xs="9">
                          <CInput
                            type="text"
                            id="comment"
                            name="comment"
                            placeholder="Enter new comment.."
                            valid={!errors.comment}
                            invalid={touched.comment && !!errors.comment}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                          />
                          <CInvalidFeedback>{errors.comment}</CInvalidFeedback>
                        </CCol>
                        <CCol xs="3">
                          <CButton
                            type="submit"
                            color="primary"
                            className="px-4"
                          >
                            Submit
                          </CButton>
                        </CCol>
                      </CRow>
                    </CFormGroup>
                  </CForm>
                )}
              </Formik>
            </CRow>
            <CRow>
              <CButton
                type="button"
                className="btn btn-link"
                onClick={() => setHyperLink(false)}
              >
                Less...
              </CButton>
            </CRow>
          </>
        ) : (
          <CRow>
            <CButton
              type="button"
              className="btn btn-link"
              onClick={() => setHyperLink(true)}
            >
              Add new Comment...
            </CButton>
          </CRow>
        )}
      </CCardBody>
    </CCard>
  );
};

export default ServicesForm;
