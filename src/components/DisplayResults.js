import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { sortingAlgorithms } from "../algorithms/algorithms";

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
			<Box sx={{ minWidth: 115 }}>
				<Typography variant="body2" color="text.secondary" fontWeight={700}>
					{`${props.item}:`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${props.time} ms`}
				</Typography>
			</Box>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export default function DisplayResults(props) {
	const maxValue = Math.max(...props.barValues);
	const normalise = (value) => (value * 100) / maxValue;

	return (
		<Box sx={{ width: "100%", minWidth: 360 }}>
			{props.barValues.map((barValue, index) => (
				<LinearProgressWithLabel
					key={index}
					item={sortingAlgorithms[index].label}
					value={normalise(barValue)}
					time={barValue}
				/>
			))}
		</Box>
	);
}
