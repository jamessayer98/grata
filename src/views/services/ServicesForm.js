import React from "react";
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
  CDataTable,
} from "@coreui/react";

const ServicesForm = () => {
  const fields = ["date", "from", "message"];
  const commentsData = [];

  return (
    <>
      <CCard className="services-form">
        <CCardHeader>Service Request Details</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="name">ID</CLabel>
                <CInput id="name" placeholder="Enter your ID" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="building">Building</CLabel>
                <CInput
                  id="building"
                  placeholder="Enter your Buliding"
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="user">User</CLabel>
                <CInput id="user" placeholder="Enter your User" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="category">Category</CLabel>
                <CInput
                  id="category"
                  placeholder="Enter your Category"
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="subject">Subject</CLabel>
                <CInput
                  id="subject"
                  placeholder="Enter your Subject"
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="description">Description</CLabel>
                <CTextarea
                  id="description"
                  placeholder="Enter your Description"
                  required
                ></CTextarea>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="image">Image</CLabel>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="assignedTo">Assigned To</CLabel>
                <CInput id="assignedTo" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="status">Status</CLabel>
                <CInput id="status" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="closeDate">Close Date</CLabel>
                <CInput type="date" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="createDate">Create Date</CLabel>
                <CInput type="date" id="createDate" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="lastUpdate">Last Update</CLabel>
                <CInput type="date" id="lastUpdate" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="createDate">Tiem Slot</CLabel>
                <CInput type="date" id="timeSlot" required />
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow>
            <CCol xs="6" lg="6">
              <CCard>
                <CCardHeader>Comments</CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={commentsData}
                    fields={fields}
                    itemsPerPage={5}
                    pagination
                    scopedSlots={{}}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ServicesForm;
