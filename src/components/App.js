import Header from "./Header";
import ExplainerText from "./ExplainerText";
import Footer from "./Footer";

import TestModal from "./TestModal";
import runTest from "../runTest/runTest";
import Picker from "./Picker";
import { picker } from "../data/pickerData";
import Intro from "./Intro";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useState } from "react";

function App() {
	const [testParameters, setTestParameters] = useState({
		task: "sort",
		arraySize: "5000",
		arrayType: "unique-random",
	});

	const [modalOpen, setModalOpen] = useState(false);

	const [testResults, setTestResults] = useState([
		100, 100, 100, 100, 100, 100,
	]);

	const handleModalClose = () => {
		setModalOpen(false);
		window.location.reload(false);
	};

	const handlePickerValueChange = (newValue, pickerName) => {
		setTestParameters((prevValue) => ({
			...prevValue,
			[pickerName]: newValue,
		}));
	};

	const startTesting = () => {
		const testingResults = runTest(
			testParameters.task,
			testParameters.arraySize,
			testParameters.arrayType
		);
		setTestResults(testingResults);
		setModalOpen(true);
	};

	return (
		<div className="App">
			<CssBaseline />
			<Header />
			<Box sx={{ width: "100%" }}>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={6}>
						<Intro />
					</Grid>
					<Grid item xs={6}>
						<Picker
							{...picker.task}
							selectedItem={testParameters.task}
							onChange={handlePickerValueChange}
						/>
						<Picker
							{...picker.arraySize}
							selectedItem={testParameters.arraySize}
							onChange={handlePickerValueChange}
						/>
						<Picker
							{...picker.arrayType}
							selectedItem={testParameters.arrayType}
							onChange={handlePickerValueChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<Button
							className={"startTesting"}
							variant="contained"
							onClick={startTesting}
						>
							Start Test
						</Button>
					</Grid>

					<Grid item>
						<ExplainerText />
					</Grid>

					<TestModal
						{...testParameters}
						modalOpen={modalOpen}
						handleModalClose={handleModalClose}
						testResults={testResults}
					/>
					<Grid item xs={6}>
						<Footer />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default App;
