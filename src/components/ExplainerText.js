import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ExplainerText() {
	return (
		<Stack sx={{ width: "100%" }}>
			<Alert severity="info">
				<AlertTitle>Test Info</AlertTitle>
				<p>
					SortPerf aims to help you choose your client side sorting algoritm
					based on your data and needs. <br />
					You can compare different size and type of arrays among most popular
					sorting algorithms.
				</p>
				<p>
					You can also compare them with DogaSort which was developed and
					implemented by Doga Ozgon. <br />
					DogaSort is an easily customizable algorithm and by default it sorts
					and removes duplicates simultaneously.
				</p>
				<p>
					Note that we are not displaying progress animations as it would impact
					the performance of the tested algorithms.
				</p>
				<p>Your test results will show up here once the test is complete.</p>
			</Alert>
		</Stack>
	);
}
