import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  CImg,
  CFormGroup,
  CCardGroup,
  CContainer,
  CButton,
  CRow,
  CCol,
  CLabel,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCard,
  CTextarea,
  CCardFooter,
} from "@coreui/react";
import { getOffer } from "../../redux/actions/offers";

const OfferDetail = (props) => {
  const offerId = props.computedMatch.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const { offer } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(
      getOffer({
        id: offerId,
      })
    );
  }, [dispatch, offerId]);

  return (
    <CContainer className="mb-4">
      <CRow>
        <CCol className="offset-3 col-6">
          <CCardGroup>
            <CCard>
              <CCardHeader>
                <CCardTitle>Offer Details</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="title">Title</CLabel>
                      <CTextarea
                        className="h6"
                        id="title"
                        placeholder="Title..."
                        value={offer.title}
                      ></CTextarea>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="content">Content</CLabel>
                      <CTextarea
                        className="h6"
                        id="content"
                        placeholder="Description..."
                        value={offer.content}
                      ></CTextarea>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel className="d-block" htmlFor="media">
                        Meida
                      </CLabel>
                      <CImg id="content" src={offer.media} width="100%" height="100%" />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor=""></CLabel>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CRow>
                  <CCol className="ml-2">
                    <CFormGroup className="text-right">
                      <CButton
                        type="button"
                        className="h6 btn btn-primary"
                        onClick={() => history.push("/offers")}
                      >
                        <h6>Back</h6>
                      </CButton>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default OfferDetail;
