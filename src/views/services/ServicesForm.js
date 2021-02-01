import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../components/Image";
import Message from "../../components/Message";
import { getAvatar } from "../../redux/actions/user";
import { addComment, addCommentDynamic } from "../../redux/actions/services";
import { setToast } from "../../redux/actions/window";
import {
  CCard,
  CCardBody,
  CCardTitle,
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

const ServicesForm = () => {
  const dispatch = useDispatch();
  const [hyperLink, setHyperLink] = useState(false);
  const { service, comments, commentId } = useSelector((state) => state.services);

  useEffect(() => {
    if (service && service.media !== "") {
      dispatch(getAvatar({ id: service.media }));
    }
  }, [dispatch, service]);

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
          dispatch(addCommentDynamic(values.comment));
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
      <CCardHeader>
        <CCardTitle>Service Request Details</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12" md="3" lg="2" sm="12">
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
          <CCol xs="12" md="6" lg="4" sm="12">
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
          <CCol xs="12" md="6" lg="4" sm="12">
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
          <CCol xs="12" md="3" lg="2" sm="12">
            <CFormGroup>
              <CLabel className="h6" htmlFor="media">
                Media
              </CLabel>
              <Image />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="9" lg="8" sm="12">
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
          <CCol xs="12" md="6" lg="2" sm="12">
            <CFormGroup>
              <CLabel className="h6" htmlFor="create_date">
                Create Date
              </CLabel>
              <CInput id="subject" className="h6" value={service.create_date} required />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="6" lg="2" sm="12">
            <CFormGroup>
              <CLabel className="h6" htmlFor="last_udpate">
                Last Update
              </CLabel>
              <CInput id="subject" className="h6" value={service.last_update} required />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" md="9" lg="8" xl="6" className="comment m-3">
            <CLabel className="h6">Comments</CLabel>
            {comments &&
              comments.map((comment, index) => {
                return <Message className="comment-message" comment={comment} key={index} />;
              })}

            {hyperLink ? (
              <>
                <CRow>
                  <Formik
                    initialValues={initialValues}
                    validate={validate(validationSchema)}
                    onSubmit={onSubmit}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <CForm onSubmit={handleSubmit} noValidate name="CommentForm">
                        <CFormGroup>
                          <CRow>
                            <CCol xs="6" lg="9">
                              <CInput
                                className="ml-3"
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
                              <CInvalidFeedback className="pl-3">{errors.comment}</CInvalidFeedback>
                            </CCol>
                            <CCol xs="6" lg="3">
                              <CButton type="submit" color="primary" className="px-4">
                                Submit
                              </CButton>
                            </CCol>
                          </CRow>
                        </CFormGroup>
                      </CForm>
                    )}
                  </Formik>
                </CRow>
              </>
            ) : null}
          </CCol>
        </CRow>
        {hyperLink ? (
          <CRow>
            <CCol className="ml-2">
              <CButton
                type="button"
                className="btn btn-primary"
                onClick={() => setHyperLink(false)}
              >
                Less ...
              </CButton>
            </CCol>
          </CRow>
        ) : (
          <CRow>
            <CCol className="ml-2">
              <CButton
                type="button"
                className="h6 btn btn-primary"
                onClick={() => setHyperLink(true)}
              >
                <h6>Add Comment</h6>
              </CButton>
            </CCol>
          </CRow>
        )}
      </CCardBody>
    </CCard>
  );
};

export default ServicesForm;
