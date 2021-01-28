import React from "react";
import { CFooter, CLink } from "@coreui/react";

const TheFooter = () => {
	return (
		<CFooter fixed={false}>
			<div>
				<CLink href="https://www.gratacda.com" target="_blank">
					Grata Technologies Inc.
				</CLink>
			</div>
			<div className="ml-auto">
				<span className="mr-1">Copyright ©2020. All rights reserved.</span>
			</div>
		</CFooter>
	);
};

export default React.memo(TheFooter);
