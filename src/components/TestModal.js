import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DisplayResults from "./DisplayResults";
import Grid from "@mui/material/Grid";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minWidth: 400,
	bgcolor: "background.paper",
	border: "2px solid #0744a6",
	boxShadow: 24,
	p: 4,
	borderRadius: "5px",
};

export default function TestModal(props) {
	const taskDefinitions = {
		sort: "Sort the array in ascending order",
		findMin: "Find the minimum value",
		findMax: "Find the maximum value",
	};

	const arrayTypeDefinitions = {
		"unique-random": "Randomly ordered unique values",
		"unique-descending": "Descending ordered unique values",
		"contains-duplicates-random": "Randomly ordered non-unique values",
	};

	return (
		<div>
			<Modal
				open={props.modalOpen}
				onClose={props.handleModalClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						color="primary"
					>
						<strong>Test Results</strong>
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<strong>Main Task:</strong> {taskDefinitions[props.task]}
						<br />
						<strong>Array Size:</strong>{" "}
						{parseInt(props.arraySize).toLocaleString()} Items
						<br />
						<strong>Array Type:</strong> {arrayTypeDefinitions[props.arrayType]}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Displaying the total runtime of algorithms in milliseconds.
					</Typography>
					<br />
					<DisplayResults barValues={props.testResults} />
					<Grid container justifyContent="center">
						<Button variant="contained" onClick={props.handleModalClose}>
							Done
						</Button>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
}
