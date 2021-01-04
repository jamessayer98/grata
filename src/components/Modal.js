import React from "react";
import {
	CButton,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CModalTitle,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";

const Modal = (props) => {
	const { show, setShow } = props;

	return (
		<>
			<CModal show={show} onClose={() => setShow(!show)} color="primary">
				<CModalHeader closeButton>
					<CModalTitle>Modal title</CModalTitle>
				</CModalHeader>
				<CModalBody>{props.children}</CModalBody>
				<CModalFooter>
					<CButton color="primary" onClick={() => setShow(!show)}>
						Do Something
					</CButton>{" "}
					<CButton color="secondary" onClick={() => setShow(!show)}>
						Cancel
					</CButton>
				</CModalFooter>
			</CModal>
		</>
	);
};

export default Modal;
