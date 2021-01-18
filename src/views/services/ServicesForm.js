import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../components/Image";
import CommentsTable from "./CommentsTable";
import { getAvatar } from "../../redux/actions/user";
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
} from "@coreui/react";

const ServicesForm = () => {
  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getAvatar({ id: service.media }));
  });

  return (
    <CCard className="services-form">
      <CCardHeader>Service Request Details</CCardHeader>
      <CCardBody className="services-form__body">
        <CForm noValidate name="ServicesForm">
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
            <CCol>
              <CLabel className="h6">Comments</CLabel>
              <CommentsTable />
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default ServicesForm;
